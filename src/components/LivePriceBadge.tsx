import { RefreshCw, TrendingUp, TrendingDown, Wifi, WifiOff } from 'lucide-react';
import { LivePriceData } from '../utils/priceApi';
import { PriceStatus } from '../hooks/useLivePrice';

interface Props {
  data: LivePriceData | null;
  status: PriceStatus;
  error: string | null;
  currency: 'USD' | 'EUR';
  autoRefresh: boolean;
  onRefresh: () => void;
  onToggleAuto: () => void;
  onApplyToPortfolio?: () => void;
  compact?: boolean;
}

function formatRelativeTime(ms: number): string {
  const diff = Date.now() - ms;
  const sec = Math.floor(diff / 1000);
  if (sec < 5) return 'just now';
  if (sec < 60) return `${sec}s ago`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  return `${hr}h ago`;
}

export default function LivePriceBadge({
  data,
  status,
  error,
  currency,
  autoRefresh,
  onRefresh,
  onToggleAuto,
  onApplyToPortfolio,
  compact = false,
}: Props) {
  const symbol = currency === 'EUR' ? '€' : '$';
  const price = data ? (currency === 'EUR' ? data.eur : data.usd) : null;
  const change = data ? (currency === 'EUR' ? data.eurChange24h : data.usdChange24h) : 0;
  const isUp = change >= 0;

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs">
        <div className={`w-1.5 h-1.5 rounded-full ${
          status === 'loading' ? 'bg-amber-400 animate-pulse' :
          status === 'error' ? 'bg-red-400' :
          'bg-emerald-400 animate-pulse'
        }`} />
        {price !== null ? (
          <>
            <span className="text-white font-semibold">
              {symbol}{price.toFixed(3)}
            </span>
            <span className={`flex items-center gap-0.5 font-medium ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
              {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {isUp ? '+' : ''}{change.toFixed(2)}%
            </span>
          </>
        ) : (
          <span className="text-gray-500">--</span>
        )}
      </div>
    );
  }

  return (
    <div className="glass-card rounded-xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              ⚛️
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-gray-950 ${
              status === 'loading' ? 'bg-amber-400 animate-pulse' :
              status === 'error' ? 'bg-red-400' :
              'bg-emerald-400'
            }`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">Cosmos (ATOM)</h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-medium uppercase tracking-wide">
                Live
              </span>
            </div>
            {price !== null ? (
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-bold text-white">
                  {symbol}{price.toFixed(4)}
                </span>
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {isUp ? '+' : ''}{change.toFixed(2)}%
                </span>
                <span className="text-xs text-gray-500">24h</span>
              </div>
            ) : status === 'loading' ? (
              <p className="text-xs text-gray-400 mt-1">Fetching live price…</p>
            ) : (
              <p className="text-xs text-red-400 mt-1">Price unavailable</p>
            )}
            {data && (
              <p className="text-[10px] text-gray-500 mt-0.5">
                Source: CoinGecko • Updated {formatRelativeTime(data.fetchedAt)}
              </p>
            )}
            {error && status === 'error' && (
              <p className="text-[10px] text-red-400 mt-0.5">Error: {error}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {onApplyToPortfolio && price !== null && (
            <button
              onClick={onApplyToPortfolio}
              className="text-xs bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-400 border border-cyan-500/30 rounded-lg px-3 py-2 font-medium transition-colors cursor-pointer"
              title="Apply live price to your portfolio"
            >
              Use Live Price
            </button>
          )}
          <button
            onClick={onToggleAuto}
            className={`flex items-center gap-1.5 text-xs rounded-lg px-3 py-2 font-medium transition-colors cursor-pointer border ${
              autoRefresh
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                : 'bg-gray-800/60 border-gray-700 text-gray-400 hover:bg-gray-700/60'
            }`}
            title={autoRefresh ? 'Auto-refresh enabled (60s)' : 'Auto-refresh disabled'}
          >
            {autoRefresh ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Auto</span>
          </button>
          <button
            onClick={onRefresh}
            disabled={status === 'loading'}
            className="flex items-center gap-1.5 text-xs bg-gray-800/60 border border-gray-700 text-gray-300 hover:bg-gray-700/60 hover:text-white rounded-lg px-3 py-2 font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-wait"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${status === 'loading' ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>
    </div>
  );
}
