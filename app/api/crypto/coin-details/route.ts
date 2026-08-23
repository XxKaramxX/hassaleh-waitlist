import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CoinNewsItem = {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
};

type CoinDetailsResponse = {
  source: "coingecko" | "cache" | "stale-cache" | "fallback";
  coinID: string;
  name: string;
  symbol: string;
  about: string;
  marketCap: number | null;
  volume24h: number | null;
  circulatingSupply: number | null;
  high52Week: number | null;
  low52Week: number | null;
  news: CoinNewsItem[];
};

type CacheEntry = {
  data: CoinDetailsResponse;
  createdAt: number;
};

const memoryCache = new Map<string, CacheEntry>();

const CACHE_SECONDS = 15 * 60;

function cleanCoinID(value: string | null): string {
  return (value || "bitcoin")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "");
}

function stripHTML(value: string | undefined | null): string {
  if (!value) return "";

  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;

  const trimmed = value.slice(0, maxLength).trim();
  const lastPeriod = trimmed.lastIndexOf(".");

  if (lastPeriod > 180) {
    return trimmed.slice(0, lastPeriod + 1);
  }

  return `${trimmed}...`;
}

function fallbackAbout(coinID: string): string {
  switch (coinID) {
    case "bitcoin":
      return "Bitcoin is the first widely adopted cryptocurrency. It is designed as a decentralized digital asset with a fixed maximum supply.";
    case "ethereum":
      return "Ethereum is a blockchain network that supports smart contracts, decentralized apps, and digital assets.";
    case "tether":
      return "Tether is a stablecoin designed to track the value of the U.S. dollar.";
    case "usd-coin":
      return "USD Coin is a stablecoin designed to maintain a value close to one U.S. dollar.";
    case "solana":
      return "Solana is a blockchain network designed for fast, low-cost transactions and decentralized apps.";
    case "ripple":
      return "XRP is a digital asset commonly associated with fast settlement and cross-border payment use cases.";
    case "binancecoin":
      return "BNB is the native asset used across parts of the Binance ecosystem and related blockchain networks.";
    case "dogecoin":
      return "Dogecoin is a cryptocurrency that began as a meme coin and developed a large online community.";
    case "cardano":
      return "Cardano is a proof-of-stake blockchain focused on smart contracts, digital assets, and decentralized applications.";
    case "the-open-network":
      return "Toncoin is the native asset of The Open Network, a blockchain ecosystem connected to fast payments and apps.";
    default:
      return "This crypto asset is tracked by Hassaleh. Market data may change quickly, so review the latest price, volume, and risk before buying.";
  }
}

async function fetchCoinGeckoDetails(coinID: string): Promise<any> {
  const url = new URL(`https://api.coingecko.com/api/v3/coins/${coinID}`);

  url.searchParams.set("localization", "false");
  url.searchParams.set("tickers", "false");
  url.searchParams.set("market_data", "true");
  url.searchParams.set("community_data", "false");
  url.searchParams.set("developer_data", "false");
  url.searchParams.set("sparkline", "false");

  const response = await fetch(url.toString(), {
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: CACHE_SECONDS,
    },
  });

  if (!response.ok) {
    throw new Error(`CoinGecko details failed: ${response.status}`);
  }

  return response.json();
}

async function fetchCoinGeckoYearRange(
  coinID: string
): Promise<{ high52Week: number | null; low52Week: number | null }> {
  const url = new URL(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart`);

  url.searchParams.set("vs_currency", "usd");
  url.searchParams.set("days", "365");

  const response = await fetch(url.toString(), {
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: CACHE_SECONDS,
    },
  });

  if (!response.ok) {
    throw new Error(`CoinGecko 52-week range failed: ${response.status}`);
  }

  const data: unknown = await response.json();

  const rawPrices: unknown[] =
    typeof data === "object" &&
    data !== null &&
    "prices" in data &&
    Array.isArray((data as { prices?: unknown }).prices)
      ? ((data as { prices: unknown[] }).prices)
      : [];

  const prices: number[] = rawPrices
    .filter((entry): entry is [number, number] => {
      return (
        Array.isArray(entry) &&
        entry.length >= 2 &&
        typeof entry[0] === "number" &&
        typeof entry[1] === "number" &&
        Number.isFinite(entry[1]) &&
        entry[1] > 0
      );
    })
    .map((entry: [number, number]) => entry[1]);

  if (prices.length === 0) {
    return {
      high52Week: null,
      low52Week: null,
    };
  }

  return {
    high52Week: Math.max(...prices),
    low52Week: Math.min(...prices),
  };
}

async function fetchCryptoPanicNews(symbol: string): Promise<CoinNewsItem[]> {
  const token = process.env.CRYPTOPANIC_API_KEY;

  if (!token || !symbol) {
    return [];
  }

  const url = new URL("https://cryptopanic.com/api/v1/posts/");

  url.searchParams.set("auth_token", token);
  url.searchParams.set("currencies", symbol.toUpperCase());
  url.searchParams.set("public", "true");
  url.searchParams.set("kind", "news");

  const response = await fetch(url.toString(), {
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: CACHE_SECONDS,
    },
  });

  if (!response.ok) {
    return [];
  }

  const data: unknown = await response.json();

  const results: unknown[] =
    typeof data === "object" &&
    data !== null &&
    "results" in data &&
    Array.isArray((data as { results?: unknown }).results)
      ? (data as { results: unknown[] }).results
      : [];

  return results
    .slice(0, 5)
    .map((item): CoinNewsItem | null => {
      if (typeof item !== "object" || item === null) {
        return null;
      }

      const record = item as {
        title?: unknown;
        url?: unknown;
        published_at?: unknown;
        source?: {
          title?: unknown;
        };
      };

      const title = typeof record.title === "string" ? record.title : "";
      const url = typeof record.url === "string" ? record.url : "";
      const publishedAt =
        typeof record.published_at === "string" ? record.published_at : "";

      const source =
        typeof record.source?.title === "string"
          ? record.source.title
          : "CryptoPanic";

      if (!title || !url) {
        return null;
      }

      return {
        title,
        source,
        url,
        publishedAt,
      };
    })
    .filter((item): item is CoinNewsItem => item !== null);
}

function buildFallbackResponse(coinID: string): CoinDetailsResponse {
  return {
    source: "fallback",
    coinID,
    name: coinID,
    symbol: coinID,
    about: fallbackAbout(coinID),
    marketCap: null,
    volume24h: null,
    circulatingSupply: null,
    high52Week: null,
    low52Week: null,
    news: [],
  };
}

export async function GET(request: NextRequest) {
  const coinID = cleanCoinID(request.nextUrl.searchParams.get("coinID"));
  const cacheKey = `details:${coinID}`;
  const cached = memoryCache.get(cacheKey);
  const now = Date.now();

  if (cached && now - cached.createdAt < CACHE_SECONDS * 1000) {
    return NextResponse.json({
      ...cached.data,
      source: "cache",
    });
  }

  try {
    const [details, range] = await Promise.all([
      fetchCoinGeckoDetails(coinID),
      fetchCoinGeckoYearRange(coinID).catch(() => ({
        high52Week: null,
        low52Week: null,
      })),
    ]);

    const name = typeof details.name === "string" ? details.name : coinID;
    const symbol = typeof details.symbol === "string" ? details.symbol : coinID;

    const rawAbout = stripHTML(details.description?.en);
    const about = rawAbout ? truncateText(rawAbout, 520) : fallbackAbout(coinID);

    const marketCap =
      typeof details.market_data?.market_cap?.usd === "number"
        ? details.market_data.market_cap.usd
        : null;

    const volume24h =
      typeof details.market_data?.total_volume?.usd === "number"
        ? details.market_data.total_volume.usd
        : null;

    const circulatingSupply =
      typeof details.market_data?.circulating_supply === "number"
        ? details.market_data.circulating_supply
        : null;

    const news = await fetchCryptoPanicNews(symbol);

    const data: CoinDetailsResponse = {
      source: "coingecko",
      coinID,
      name,
      symbol,
      about,
      marketCap,
      volume24h,
      circulatingSupply,
      high52Week: range.high52Week,
      low52Week: range.low52Week,
      news,
    };

    memoryCache.set(cacheKey, {
      data,
      createdAt: now,
    });

    return NextResponse.json(data);
  } catch {
    if (cached) {
      return NextResponse.json({
        ...cached.data,
        source: "stale-cache",
      });
    }

    return NextResponse.json(buildFallbackResponse(coinID));
  }
}