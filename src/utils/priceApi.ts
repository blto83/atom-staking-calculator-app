// CoinGecko free public API — no API key required
const COINGECKO_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd,eur&include_24hr_change=true&include_last_updated_at=true';

export interface LivePriceData {
  usd: number;
  eur: number;
  usdChange24h: number;
  eurChange24h: number;
  lastUpdated: number; // unix seconds
  fetchedAt: number; // unix ms (client side)
}

const CACHE_KEY = 'atom_live_price_cache';
const CACHE_TTL_MS = 60 * 1000; // 1 minute throttle

export function getCachedPrice(): LivePriceData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LivePriceData;
  } catch {
    return null;
  }
}

function setCachedPrice(data: LivePriceData) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export async function fetchAtomPrice(force = false): Promise<LivePriceData> {
  const cached = getCachedPrice();
  if (!force && cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return cached;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(COINGECKO_URL, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`CoinGecko request failed: ${res.status}`);
    }

    const json = await res.json();
    const cosmos = json?.cosmos;
    if (!cosmos || typeof cosmos.usd !== 'number') {
      throw new Error('Unexpected response format from CoinGecko');
    }

    const data: LivePriceData = {
      usd: cosmos.usd,
      eur: cosmos.eur ?? cosmos.usd * 0.92,
      usdChange24h: cosmos.usd_24h_change ?? 0,
      eurChange24h: cosmos.eur_24h_change ?? cosmos.usd_24h_change ?? 0,
      lastUpdated: cosmos.last_updated_at ?? Math.floor(Date.now() / 1000),
      fetchedAt: Date.now(),
    };

    setCachedPrice(data);
    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (cached) return cached; // graceful fallback
    throw err;
  }
}
