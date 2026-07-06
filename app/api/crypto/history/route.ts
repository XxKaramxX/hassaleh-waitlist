import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ChartRange = "LIVE" | "1D" | "1W" | "1M" | "3M" | "1Y" | "5Y";

type HistoryPoint = {
  date: string;
  price: number;
};

type CacheEntry = {
  points: HistoryPoint[];
  createdAt: number;
};

const memoryCache = new Map<string, CacheEntry>();

function normalizeRange(value: string | null): ChartRange {
  const allowed: ChartRange[] = ["LIVE", "1D", "1W", "1M", "3M", "1Y", "5Y"];
  return allowed.includes(value as ChartRange) ? (value as ChartRange) : "1D";
}

function cleanCoinID(value: string | null): string {
  return (value || "bitcoin")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}

function rangeConfig(range: ChartRange) {
  switch (range) {
    case "LIVE":
      return { days: "1", interval: undefined, cacheSeconds: 30 };
    case "1D":
      return { days: "1", interval: undefined, cacheSeconds: 120 };
    case "1W":
      return { days: "7", interval: "hourly", cacheSeconds: 300 };
    case "1M":
      return { days: "30", interval: "daily", cacheSeconds: 600 };
    case "3M":
      return { days: "90", interval: "daily", cacheSeconds: 600 };
    case "1Y":
      return { days: "365", interval: "daily", cacheSeconds: 1800 };
    case "5Y":
      return { days: "1825", interval: "daily", cacheSeconds: 1800 };
  }
}

function fallbackHistory(range: ChartRange): HistoryPoint[] {
  const now = Date.now();

  const config = (() => {
    switch (range) {
      case "LIVE":
        return { duration: 60 * 60 * 1000, count: 24, drift: 0.002, volatility: 0.0018 };
      case "1D":
        return { duration: 24 * 60 * 60 * 1000, count: 48, drift: 0.006, volatility: 0.003 };
      case "1W":
        return { duration: 7 * 24 * 60 * 60 * 1000, count: 56, drift: 0.018, volatility: 0.006 };
      case "1M":
        return { duration: 30 * 24 * 60 * 60 * 1000, count: 64, drift: 0.032, volatility: 0.008 };
      case "3M":
        return { duration: 90 * 24 * 60 * 60 * 1000, count: 72, drift: 0.052, volatility: 0.01 };
      case "1Y":
        return { duration: 365 * 24 * 60 * 60 * 1000, count: 84, drift: 0.11, volatility: 0.014 };
      case "5Y":
        return { duration: 5 * 365 * 24 * 60 * 60 * 1000, count: 96, drift: 0.42, volatility: 0.018 };
    }
  })();

  let price = 100;

  return Array.from({ length: config.count }).map((_, index) => {
    const progress = index / Math.max(config.count - 1, 1);
    const time = now - config.duration * (1 - progress);

    const trendMove = config.drift / config.count;
    const softNoise = Math.sin(progress * Math.PI * 3) * config.volatility;
    const microNoise = Math.sin(progress * Math.PI * 11) * config.volatility * 0.35;

    price = Math.max(price * (1 + trendMove + softNoise + microNoise), 0.01);

    return {
      date: new Date(time).toISOString(),
      price,
    };
  });
}

export async function GET(request: NextRequest) {
  const coinID = cleanCoinID(request.nextUrl.searchParams.get("coinID"));
  const range = normalizeRange(request.nextUrl.searchParams.get("range"));
  const config = rangeConfig(range);

  const cacheKey = `${coinID}:${range}`;
  const cached = memoryCache.get(cacheKey);
  const now = Date.now();

  if (cached && now - cached.createdAt < config.cacheSeconds * 1000) {
    return NextResponse.json({
      source: "cache",
      coinID,
      range,
      points: cached.points,
    });
  }

  const url = new URL(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart`);
  url.searchParams.set("vs_currency", "usd");
  url.searchParams.set("days", config.days);

  if (config.interval) {
    url.searchParams.set("interval", config.interval);
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        accept: "application/json",
      },
      next: {
        revalidate: config.cacheSeconds,
      },
    });

    if (!response.ok) {
      return NextResponse.json({
        source: cached ? "stale-cache" : "fallback",
        coinID,
        range,
        points: cached?.points || fallbackHistory(range),
      });
    }

    const data = await response.json();

    let points: HistoryPoint[] = Array.isArray(data.prices)
      ? data.prices
          .filter((entry: unknown) => Array.isArray(entry) && entry.length >= 2)
          .map((entry: number[]) => ({
            date: new Date(entry[0]).toISOString(),
            price: entry[1],
          }))
          .filter((point: HistoryPoint) => point.price > 0)
      : [];

    if (range === "LIVE") {
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      const livePoints = points.filter((point) => new Date(point.date).getTime() >= oneHourAgo);

      if (livePoints.length > 1) {
        points = livePoints;
      } else {
        points = points.slice(-24);
      }
    }

    if (points.length <= 1) {
      points = cached?.points || fallbackHistory(range);
    }

    memoryCache.set(cacheKey, {
      points,
      createdAt: now,
    });

    return NextResponse.json({
      source: "coingecko",
      coinID,
      range,
      points,
    });
  } catch {
    return NextResponse.json({
      source: cached ? "stale-cache" : "fallback",
      coinID,
      range,
      points: cached?.points || fallbackHistory(range),
    });
  }
}