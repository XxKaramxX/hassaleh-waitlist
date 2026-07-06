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
      return { days: "1", interval: undefined, cacheSeconds: 30, targetPoints: 60 };
    case "1D":
      return { days: "1", interval: undefined, cacheSeconds: 120, targetPoints: 80 };
    case "1W":
      return { days: "7", interval: "hourly", cacheSeconds: 300, targetPoints: 90 };
    case "1M":
      return { days: "30", interval: undefined, cacheSeconds: 600, targetPoints: 90 };
    case "3M":
      return { days: "90", interval: undefined, cacheSeconds: 600, targetPoints: 100 };
    case "1Y":
      return { days: "365", interval: undefined, cacheSeconds: 1800, targetPoints: 120 };
    case "5Y":
      return { days: "1825", interval: undefined, cacheSeconds: 1800, targetPoints: 140 };
  }
}

function fallbackHistory(range: ChartRange): HistoryPoint[] {
  const now = Date.now();
  const config = rangeConfig(range);

  const duration = (() => {
    switch (range) {
      case "LIVE":
        return 60 * 60 * 1000;
      case "1D":
        return 24 * 60 * 60 * 1000;
      case "1W":
        return 7 * 24 * 60 * 60 * 1000;
      case "1M":
        return 30 * 24 * 60 * 60 * 1000;
      case "3M":
        return 90 * 24 * 60 * 60 * 1000;
      case "1Y":
        return 365 * 24 * 60 * 60 * 1000;
      case "5Y":
        return 5 * 365 * 24 * 60 * 60 * 1000;
    }
  })();

  const totalDrift = (() => {
    switch (range) {
      case "LIVE":
        return 0.002;
      case "1D":
        return 0.008;
      case "1W":
        return 0.025;
      case "1M":
        return 0.05;
      case "3M":
        return -0.08;
      case "1Y":
        return -0.25;
      case "5Y":
        return 0.65;
    }
  })();

  const volatility = (() => {
    switch (range) {
      case "LIVE":
        return 0.0018;
      case "1D":
        return 0.004;
      case "1W":
        return 0.008;
      case "1M":
        return 0.012;
      case "3M":
        return 0.018;
      case "1Y":
        return 0.022;
      case "5Y":
        return 0.028;
    }
  })();

  let price = 100;
  const points: HistoryPoint[] = [];

  for (let index = 0; index < config.targetPoints; index++) {
    const progress = index / Math.max(config.targetPoints - 1, 1);
    const timestamp = now - duration * (1 - progress);

    const driftMove = totalDrift / config.targetPoints;
    const deterministicNoise =
      Math.sin(progress * Math.PI * 8.3) * volatility +
      Math.sin(progress * Math.PI * 19.7) * volatility * 0.45 +
      Math.sin(progress * Math.PI * 37.1) * volatility * 0.22;

    price = Math.max(price * (1 + driftMove + deterministicNoise), 0.01);

    points.push({
      date: new Date(timestamp).toISOString(),
      price,
    });
  }

  return points;
}

function normalizePoints(points: HistoryPoint[], targetCount: number): HistoryPoint[] {
  const validPoints = points
    .filter((point) => Number.isFinite(point.price) && point.price > 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  if (validPoints.length <= 1) {
    return validPoints;
  }

  if (validPoints.length === targetCount) {
    return validPoints;
  }

  const firstTime = new Date(validPoints[0].date).getTime();
  const lastTime = new Date(validPoints[validPoints.length - 1].date).getTime();

  if (firstTime === lastTime) {
    return validPoints;
  }

  const normalized: HistoryPoint[] = [];

  for (let index = 0; index < targetCount; index++) {
    const progress = index / Math.max(targetCount - 1, 1);
    const targetTime = firstTime + (lastTime - firstTime) * progress;

    let rightIndex = validPoints.findIndex((point) => new Date(point.date).getTime() >= targetTime);

    if (rightIndex <= 0) {
      normalized.push(validPoints[0]);
      continue;
    }

    if (rightIndex === -1) {
      normalized.push(validPoints[validPoints.length - 1]);
      continue;
    }

    const left = validPoints[rightIndex - 1];
    const right = validPoints[rightIndex];

    const leftTime = new Date(left.date).getTime();
    const rightTime = new Date(right.date).getTime();

    const localProgress =
      rightTime === leftTime ? 0 : (targetTime - leftTime) / (rightTime - leftTime);

    const price = left.price + (right.price - left.price) * localProgress;

    normalized.push({
      date: new Date(targetTime).toISOString(),
      price,
    });
  }

  return normalized;
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
      const fallback = cached?.points || fallbackHistory(range);

      return NextResponse.json({
        source: cached ? "stale-cache" : "fallback",
        coinID,
        range,
        points: fallback,
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
    } else {
      points = normalizePoints(points, config.targetPoints);
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
    const fallback = cached?.points || fallbackHistory(range);

    return NextResponse.json({
      source: cached ? "stale-cache" : "fallback",
      coinID,
      range,
      points: fallback,
    });
  }
}