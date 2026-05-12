import { useMemo } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Coins,
  Lock,
  Unlock,
  DollarSign,
  Percent,
  PieChart as PieChartIcon,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { PortfolioData, RewardEntry } from '../types';
import { formatCurrency, formatAtom, calculateRewards } from '../utils/calculations';

interface Props {
  portfolio: PortfolioData;
  rewards: RewardEntry[];
  onUpdatePortfolio: (updates: Partial<PortfolioData>) => void;
  livePriceSlot?: React.ReactNode;
}

function StatCard({
  label,
  value,
  subValue,
  icon: Icon,
  color,
  trend,
}: {
  label: string;
  value: string;
  subValue?: string;
  icon: React.ElementType;
  color: string;
  trend?: 'up' | 'down' | 'neutral';
}) {
  const trendColor =
    trend === 'up'
      ? 'text-emerald-400'
      : trend === 'down'
      ? 'text-red-400'
      : 'text-gray-400';

  return (
    <div className="glass-card rounded-xl p-4 sm:p-5 animate-fade-in hover:border-cyan-500/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
            {trend === 'up' ? (
              <TrendingUp className="w-3 h-3" />
            ) : trend === 'down' ? (
              <TrendingDown className="w-3 h-3" />
            ) : null}
          </div>
        )}
      </div>
      <p className="text-xs sm:text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
      {subValue && (
        <p className={`text-xs mt-1 ${trendColor}`}>{subValue}</p>
      )}
    </div>
  );
}

export default function Dashboard({ portfolio, rewards, onUpdatePortfolio, livePriceSlot }: Props) {
  const {
    totalAtom,
    stakedAtom,
    initialInvestment,
    currentPrice,
    buyPrice,
    apr,
    validatorCommission,
    compoundingFrequency,
    currency,
  } = portfolio;

  const unstakedAtom = totalAtom - stakedAtom;
  const currentValue = totalAtom * currentPrice;
  const profitLoss = currentValue - initialInvestment;
  const roi = initialInvestment > 0 ? (profitLoss / initialInvestment) * 100 : 0;
  const totalRewardsClaimed = rewards.reduce((sum, r) => sum + r.amount, 0);

  const rewardCalc = useMemo(
    () => calculateRewards(stakedAtom, apr, validatorCommission, compoundingFrequency),
    [stakedAtom, apr, validatorCommission, compoundingFrequency]
  );

  const stakedPct = totalAtom > 0 ? (stakedAtom / totalAtom) * 100 : 0;
  const unstakedPct = 100 - stakedPct;

  const pieData = [
    { name: 'Staked', value: stakedAtom, color: '#06b6d4' },
    { name: 'Unstaked', value: unstakedAtom > 0 ? unstakedAtom : 0, color: '#6366f1' },
  ].filter((d) => d.value > 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Live Price Bar (from CoinGecko) */}
      {livePriceSlot}

      {/* Quick Edit */}
      <div className="glass-card rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-sm font-semibold text-gray-300">Portfolio Holdings & Pricing</h3>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-400 whitespace-nowrap">Current Price (override):</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  {currency === 'EUR' ? '€' : '$'}
                </span>
                <input
                  type="number"
                  value={currentPrice || ''}
                  onChange={(e) =>
                    onUpdatePortfolio({ currentPrice: parseFloat(e.target.value) || 0 })
                  }
                  className="bg-gray-800/60 border border-gray-700 rounded-lg pl-7 pr-3 py-1.5 text-xs text-white w-24 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-gray-400 whitespace-nowrap">Buy Price:</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  {currency === 'EUR' ? '€' : '$'}
                </span>
                <input
                  type="number"
                  value={buyPrice || ''}
                  onChange={(e) =>
                    onUpdatePortfolio({ buyPrice: parseFloat(e.target.value) || 0 })
                  }
                  className="bg-gray-800/60 border border-gray-700 rounded-lg pl-7 pr-3 py-1.5 text-xs text-white w-24 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Total ATOM</label>
            <input
              type="number"
              value={totalAtom || ''}
              onChange={(e) =>
                onUpdatePortfolio({ totalAtom: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Staked ATOM</label>
            <input
              type="number"
              value={stakedAtom || ''}
              onChange={(e) => {
                const val = parseFloat(e.target.value) || 0;
                onUpdatePortfolio({ stakedAtom: Math.min(val, totalAtom) });
              }}
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="0"
              step="0.01"
              max={totalAtom}
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Initial Investment</label>
            <input
              type="number"
              value={initialInvestment || ''}
              onChange={(e) =>
                onUpdatePortfolio({ initialInvestment: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="0.00"
              step="0.01"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">APR %</label>
            <input
              type="number"
              value={apr || ''}
              onChange={(e) =>
                onUpdatePortfolio({ apr: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="18.5"
              step="0.1"
            />
          </div>
        </div>
      </div>

      {/* Ad Banner — placed below holdings inputs */}
      <div
        className="rounded-xl border border-dashed border-gray-700/70 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-gray-900/60 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-2 min-h-[100px] relative overflow-hidden"
        aria-label="Advertisement"
      >
        <span className="absolute top-2 right-3 text-[9px] uppercase tracking-wider text-gray-600 font-medium">
          Ad
        </span>
        {/*
          Google AdSense placement example:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        */}
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Advertisement Space
          </p>
          <p className="text-[10px] sm:text-xs text-gray-600 mt-1">
            728×90 Leaderboard / Responsive Banner — Google AdSense Placeholder
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard
          label="Total ATOM"
          value={formatAtom(totalAtom)}
          subValue={formatCurrency(currentValue, currency)}
          icon={Coins}
          color="bg-cyan-500/20 text-cyan-400"
          trend="neutral"
        />
        <StatCard
          label="Staked ATOM"
          value={formatAtom(stakedAtom)}
          subValue={`${stakedPct.toFixed(1)}% of portfolio`}
          icon={Lock}
          color="bg-indigo-500/20 text-indigo-400"
          trend="neutral"
        />
        <StatCard
          label="Unstaked ATOM"
          value={formatAtom(unstakedAtom > 0 ? unstakedAtom : 0)}
          subValue={`${unstakedPct.toFixed(1)}% available`}
          icon={Unlock}
          color="bg-purple-500/20 text-purple-400"
          trend="neutral"
        />
        <StatCard
          label="Profit / Loss"
          value={formatCurrency(profitLoss, currency)}
          subValue={`ROI: ${roi.toFixed(2)}%`}
          icon={DollarSign}
          color={profitLoss >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}
          trend={profitLoss > 0 ? 'up' : profitLoss < 0 ? 'down' : 'neutral'}
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Quick Rewards Summary */}
        <div className="glass-card rounded-xl p-4 sm:p-5 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Percent className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-semibold text-gray-300">Reward Estimates</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Daily', value: rewardCalc.dailyRewards },
              { label: 'Weekly', value: rewardCalc.weeklyRewards },
              { label: 'Monthly', value: rewardCalc.monthlyRewards },
              { label: 'Yearly', value: rewardCalc.yearlyRewards },
              { label: 'Compounded/yr', value: rewardCalc.compoundedYearlyRewards },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
              >
                <span className="text-xs text-gray-400">{item.label}</span>
                <div className="text-right">
                  <span className="text-sm font-semibold text-white">
                    {formatAtom(item.value)} ATOM
                  </span>
                  <p className="text-xs text-gray-500">
                    ≈ {formatCurrency(item.value * currentPrice, currency)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-800">
            <div className="flex justify-between">
              <span className="text-xs text-gray-400">Net APR (after commission)</span>
              <span className="text-sm font-bold text-cyan-400">
                {rewardCalc.netApr.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-400">Total Claimed</span>
              <span className="text-sm font-semibold text-emerald-400">
                {formatAtom(totalRewardsClaimed)} ATOM
              </span>
            </div>
          </div>
        </div>

        {/* Allocation Chart */}
        <div className="glass-card rounded-xl p-4 sm:p-5 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <PieChartIcon className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-semibold text-gray-300">Allocation</h3>
          </div>
          {totalAtom > 0 ? (
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                    formatter={(value) => [`${formatAtom(Number(value))} ATOM`, '']}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex gap-6 mt-2">
                {pieData.map((d) => (
                  <div key={d.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: d.color }}
                    />
                    <span className="text-xs text-gray-400">{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[180px] text-gray-500 text-sm">
              Enter your ATOM holdings to see allocation
            </div>
          )}
        </div>

        {/* Portfolio Values */}
        <div className="glass-card rounded-xl p-4 sm:p-5 lg:col-span-1">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Portfolio Summary</h3>
          <div className="space-y-3">
            {[
              { label: 'Initial Investment', value: formatCurrency(initialInvestment, currency) },
              { label: 'Current Value', value: formatCurrency(currentValue, currency) },
              {
                label: 'Profit / Loss',
                value: formatCurrency(profitLoss, currency),
                color: profitLoss >= 0 ? 'text-emerald-400' : 'text-red-400',
              },
              {
                label: 'ROI',
                value: `${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%`,
                color: roi >= 0 ? 'text-emerald-400' : 'text-red-400',
              },
              {
                label: 'Price Change',
                value:
                  buyPrice > 0
                    ? `${((currentPrice - buyPrice) / buyPrice * 100).toFixed(2)}%`
                    : 'N/A',
                color:
                  currentPrice >= buyPrice ? 'text-emerald-400' : 'text-red-400',
              },
              { label: 'Avg Buy Price', value: buyPrice > 0 ? formatCurrency(buyPrice, currency) : 'Not set' },
              { label: 'Current ATOM Price', value: formatCurrency(currentPrice, currency) },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
              >
                <span className="text-xs text-gray-400">{item.label}</span>
                <span
                  className={`text-sm font-semibold ${
                    'color' in item && item.color ? item.color : 'text-white'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ad Placeholder */}
      <div className="glass-card rounded-xl p-3 text-center border-dashed border-gray-700">
        <p className="text-xs text-gray-600">Advertisement Space — Ad Banner Placeholder</p>
      </div>
    </div>
  );
}
