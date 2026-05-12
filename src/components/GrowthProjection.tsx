import { useState, useMemo } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from 'recharts';
import { PortfolioData } from '../types';
import { projectGrowth, formatAtom, formatCurrency } from '../utils/calculations';

interface Props {
  portfolio: PortfolioData;
}

const TIME_PERIODS = [
  { label: '30 Days', days: 30 },
  { label: '90 Days', days: 90 },
  { label: '6 Months', days: 182 },
  { label: '1 Year', days: 365 },
  { label: '3 Years', days: 1095 },
  { label: '5 Years', days: 1825 },
];

export default function GrowthProjection({ portfolio }: Props) {
  const [selectedPeriod, setSelectedPeriod] = useState(3); // 1 Year default
  const { stakedAtom, apr, validatorCommission, compoundingFrequency, currentPrice, currency } = portfolio;

  const days = TIME_PERIODS[selectedPeriod].days;

  const data = useMemo(
    () => projectGrowth(stakedAtom, apr, validatorCommission, compoundingFrequency, days),
    [stakedAtom, apr, validatorCommission, compoundingFrequency, days]
  );

  const lastPoint = data.length > 0 ? data[data.length - 1] : null;
  const compoundedGain = lastPoint ? lastPoint.withCompounding - stakedAtom : 0;
  const simpleGain = lastPoint ? lastPoint.withoutCompounding - stakedAtom : 0;
  const compoundAdvantage = compoundedGain - simpleGain;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Growth Projection</h2>
          <p className="text-xs text-gray-400">
            Project your portfolio growth with and without compounding
          </p>
        </div>
      </div>

      {/* Period Selector */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex flex-wrap gap-2">
          {TIME_PERIODS.map((period, idx) => (
            <button
              key={period.label}
              onClick={() => setSelectedPeriod(idx)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedPeriod === idx
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60 hover:text-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">
          Portfolio Growth — {TIME_PERIODS[selectedPeriod].label}
        </h3>
        {stakedAtom > 0 ? (
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="colorCompound" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSimple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis
                dataKey="label"
                stroke="#475569"
                fontSize={11}
                tickLine={false}
                interval="preserveStartEnd"
              />
              <YAxis
                stroke="#475569"
                fontSize={11}
                tickLine={false}
                tickFormatter={(v) => formatAtom(v)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                formatter={(value) => [
                  `${formatAtom(Number(value))} ATOM (${formatCurrency(Number(value) * currentPrice, currency)})`,
                ]}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Legend
                wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
              />
              <Area
                type="monotone"
                dataKey="withCompounding"
                name="With Compounding"
                stroke="#06b6d4"
                strokeWidth={2}
                fill="url(#colorCompound)"
              />
              <Area
                type="monotone"
                dataKey="withoutCompounding"
                name="Without Compounding"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#colorSimple)"
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[350px] flex items-center justify-center text-gray-500 text-sm">
            Enter staked ATOM amount to view growth projections
          </div>
        )}
      </div>

      {/* Ad Banner — placed before summary cards */}
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Starting Balance</p>
          <p className="text-lg font-bold text-white">{formatAtom(stakedAtom)} ATOM</p>
          <p className="text-xs text-gray-500">
            ≈ {formatCurrency(stakedAtom * currentPrice, currency)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">
            Ending (Compounded)
          </p>
          <p className="text-lg font-bold text-cyan-400">
            {lastPoint ? formatAtom(lastPoint.withCompounding) : '0'} ATOM
          </p>
          <p className="text-xs text-gray-500">
            ≈ {formatCurrency((lastPoint?.withCompounding ?? 0) * currentPrice, currency)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Total Gain (Compounded)</p>
          <p className="text-lg font-bold text-emerald-400">
            +{formatAtom(compoundedGain)} ATOM
          </p>
          <p className="text-xs text-emerald-400/60">
            +{formatCurrency(compoundedGain * currentPrice, currency)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Compounding Advantage</p>
          <p className="text-lg font-bold text-indigo-400">
            +{formatAtom(compoundAdvantage)} ATOM
          </p>
          <p className="text-xs text-indigo-400/60">
            Extra vs. simple staking
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-card rounded-xl p-5 overflow-x-auto">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Period Comparison</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-2 px-3 text-xs text-gray-400 font-medium">Period</th>
              <th className="text-right py-2 px-3 text-xs text-gray-400 font-medium">
                With Compounding
              </th>
              <th className="text-right py-2 px-3 text-xs text-gray-400 font-medium">
                Without Compounding
              </th>
              <th className="text-right py-2 px-3 text-xs text-gray-400 font-medium">
                Bonus
              </th>
            </tr>
          </thead>
          <tbody>
            {TIME_PERIODS.map((period) => {
              const pData = projectGrowth(
                stakedAtom,
                apr,
                validatorCommission,
                compoundingFrequency,
                period.days
              );
              const last = pData[pData.length - 1];
              if (!last) return null;
              const cGain = last.withCompounding - stakedAtom;
              const sGain = last.withoutCompounding - stakedAtom;
              return (
                <tr
                  key={period.label}
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-3 px-3 text-gray-300">{period.label}</td>
                  <td className="py-3 px-3 text-right text-cyan-400 font-medium">
                    +{formatAtom(cGain)} ATOM
                  </td>
                  <td className="py-3 px-3 text-right text-gray-300">
                    +{formatAtom(sGain)} ATOM
                  </td>
                  <td className="py-3 px-3 text-right text-emerald-400 font-medium">
                    +{formatAtom(cGain - sGain)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
