import { useMemo } from 'react';
import { Calculator as CalcIcon, Info } from 'lucide-react';
import { PortfolioData } from '../types';
import { calculateRewards, formatAtom, formatCurrency } from '../utils/calculations';

interface Props {
  portfolio: PortfolioData;
  onUpdatePortfolio: (updates: Partial<PortfolioData>) => void;
}

export default function Calculator({ portfolio, onUpdatePortfolio }: Props) {
  const { stakedAtom, apr, validatorCommission, compoundingFrequency, currentPrice, currency } = portfolio;

  const rewards = useMemo(
    () => calculateRewards(stakedAtom, apr, validatorCommission, compoundingFrequency),
    [stakedAtom, apr, validatorCommission, compoundingFrequency]
  );

  const compoundBonus = rewards.compoundedYearlyRewards - rewards.yearlyRewards;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
          <CalcIcon className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Staking Rewards Calculator</h2>
          <p className="text-xs text-gray-400">
            Calculate your ATOM staking rewards based on APR and compounding
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Calculator Inputs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Staked ATOM Amount</label>
            <input
              type="number"
              value={stakedAtom || ''}
              onChange={(e) =>
                onUpdatePortfolio({ stakedAtom: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="e.g. 100"
              step="0.01"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Annual APR (%)</label>
            <input
              type="number"
              value={apr || ''}
              onChange={(e) =>
                onUpdatePortfolio({ apr: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="e.g. 18.5"
              step="0.1"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Validator Commission (%)</label>
            <input
              type="number"
              value={validatorCommission || ''}
              onChange={(e) =>
                onUpdatePortfolio({ validatorCommission: parseFloat(e.target.value) || 0 })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="e.g. 5"
              step="0.1"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Compounding Frequency</label>
            <select
              value={compoundingFrequency}
              onChange={(e) =>
                onUpdatePortfolio({
                  compoundingFrequency: e.target.value as PortfolioData['compoundingFrequency'],
                })
              }
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="none">No Compounding</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-cyan-100/95 border border-cyan-300 rounded-xl p-4 flex items-start gap-3 shadow-sm">
        <Info className="w-5 h-5 text-cyan-700 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-950 font-bold">How it works</p>
          <p className="text-xs text-gray-900 font-semibold mt-1 leading-relaxed">
            Gross APR is reduced by the validator commission to compute net APR.
            Compounding assumes you restake rewards at the selected frequency.
            Actual rewards may vary based on network conditions.
          </p>
        </div>
      </div>

      {/* Ad Banner — placed before reward results */}
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

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Simple Rewards */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-1">Simple Rewards (No Compounding)</h3>
          <p className="text-xs text-gray-500 mb-4">Based on net APR of {rewards.netApr.toFixed(2)}%</p>
          <div className="space-y-3">
            {[
              { label: 'Daily Reward', atom: rewards.dailyRewards },
              { label: 'Weekly Reward', atom: rewards.weeklyRewards },
              { label: 'Monthly Reward', atom: rewards.monthlyRewards },
              { label: 'Yearly Reward', atom: rewards.yearlyRewards },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between py-2.5 px-3 bg-gray-800/40 rounded-lg"
              >
                <span className="text-sm text-gray-300">{r.label}</span>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">{formatAtom(r.atom)} ATOM</p>
                  <p className="text-xs text-gray-500">
                    ≈ {formatCurrency(r.atom * currentPrice, currency)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compounded Rewards */}
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-1">Compounded Rewards</h3>
          <p className="text-xs text-gray-500 mb-4">
            Frequency: {compoundingFrequency === 'none' ? 'None' : compoundingFrequency.charAt(0).toUpperCase() + compoundingFrequency.slice(1)}
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2.5 px-3 bg-gray-800/40 rounded-lg">
              <span className="text-sm text-gray-300">Yearly (Compounded)</span>
              <div className="text-right">
                <p className="text-sm font-bold text-cyan-400">
                  {formatAtom(rewards.compoundedYearlyRewards)} ATOM
                </p>
                <p className="text-xs text-gray-500">
                  ≈ {formatCurrency(rewards.compoundedYearlyRewards * currentPrice, currency)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2.5 px-3 bg-gray-800/40 rounded-lg">
              <span className="text-sm text-gray-300">Yearly (Simple)</span>
              <div className="text-right">
                <p className="text-sm font-bold text-white">
                  {formatAtom(rewards.yearlyRewards)} ATOM
                </p>
                <p className="text-xs text-gray-500">
                  ≈ {formatCurrency(rewards.yearlyRewards * currentPrice, currency)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2.5 px-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <span className="text-sm text-emerald-300">Compounding Bonus</span>
              <div className="text-right">
                <p className="text-sm font-bold text-emerald-400">
                  +{formatAtom(compoundBonus)} ATOM
                </p>
                <p className="text-xs text-emerald-400/60">
                  +{formatCurrency(compoundBonus * currentPrice, currency)}
                </p>
              </div>
            </div>
          </div>

          {/* Effective APY */}
          <div className="mt-5 p-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg border border-cyan-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Effective APY</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  (with {compoundingFrequency} compounding)
                </p>
              </div>
              <p className="text-2xl font-bold text-cyan-400">
                {stakedAtom > 0
                  ? ((rewards.compoundedYearlyRewards / stakedAtom) * 100).toFixed(2)
                  : '0.00'}
                %
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Fee Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/40 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Gross APR</p>
            <p className="text-xl font-bold text-white">{apr.toFixed(2)}%</p>
          </div>
          <div className="bg-gray-800/40 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Validator Commission</p>
            <p className="text-xl font-bold text-red-400">-{validatorCommission.toFixed(2)}%</p>
            <p className="text-xs text-gray-500 mt-1">
              (= {(apr * validatorCommission / 100).toFixed(2)}% of APR)
            </p>
          </div>
          <div className="bg-gray-800/40 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Net APR</p>
            <p className="text-xl font-bold text-emerald-400">{rewards.netApr.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
