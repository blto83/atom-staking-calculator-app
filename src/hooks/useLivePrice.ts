import { useEffect, useState, useCallback, useRef } from 'react';
import { fetchAtomPrice, LivePriceData, getCachedPrice } from '../utils/priceApi';

const AUTO_REFRESH_MS = 60 * 1000; // refresh every 60 seconds

export type PriceStatus = 'idle' | 'loading' | 'success' | 'error';

export interface UseLivePriceResult {
  data: LivePriceData | null;
  status: PriceStatus;
  error: string | null;
  refresh: (force?: boolean) => Promise<void>;
  autoRefresh: boolean;
  setAutoRefresh: (v: boolean) => void;
}

export function useLivePrice(
  onPriceUpdate?: (price: number, currency: 'USD' | 'EUR') => void,
  currency: 'USD' | 'EUR' = 'USD'
): UseLivePriceResult {
  const [data, setData] = useState<LivePriceData | null>(() => getCachedPrice());
  const [status, setStatus] = useState<PriceStatus>(data ? 'success' : 'idle');
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const onPriceUpdateRef = useRef(onPriceUpdate);
  const currencyRef = useRef(currency);

  useEffect(() => {
    onPriceUpdateRef.current = onPriceUpdate;
    currencyRef.current = currency;
  }, [onPriceUpdate, currency]);

  const refresh = useCallback(async (force = false) => {
    setStatus('loading');
    setError(null);
    try {
      const result = await fetchAtomPrice(force);
      setData(result);
      setStatus('success');
      if (onPriceUpdateRef.current) {
        const price = currencyRef.current === 'EUR' ? result.eur : result.usd;
        onPriceUpdateRef.current(price, currencyRef.current);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to fetch price';
      setError(msg);
      setStatus('error');
    }
  }, []);

  // Initial fetch on mount
  useEffect(() => {
    refresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-refresh interval
  useEffect(() => {
    if (!autoRefresh) return;
    const id = setInterval(() => {
      refresh(true);
    }, AUTO_REFRESH_MS);
    return () => clearInterval(id);
  }, [autoRefresh, refresh]);

  return { data, status, error, refresh, autoRefresh, setAutoRefresh };
}
