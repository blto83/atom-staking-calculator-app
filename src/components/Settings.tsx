import { useState } from 'react';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  Trash2,
  Download,
  Upload,
  Info,
  AlertTriangle,
  Shield,
} from 'lucide-react';
import { PortfolioData, Transaction, RewardEntry } from '../types';
import { exportTransactionsCSV, exportRewardsCSV } from '../utils/csv';

interface Props {
  portfolio: PortfolioData;
  transactions: Transaction[];
  rewards: RewardEntry[];
  onUpdatePortfolio: (updates: Partial<PortfolioData>) => void;
  onResetAll: () => void;
}

export default function Settings({
  portfolio,
  transactions,
  rewards,
  onUpdatePortfolio,
  onResetAll,
}: Props) {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-gray-500/20 flex items-center justify-center">
          <SettingsIcon className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Settings</h2>
          <p className="text-xs text-gray-400">Configure your preferences</p>
        </div>
      </div>

      {/* Currency */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Display Currency</h3>
        <div className="flex gap-3">
          {['USD', 'EUR'].map((c) => (
            <button
              key={c}
              onClick={() => onUpdatePortfolio({ currency: c as 'USD' | 'EUR' })}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                portfolio.currency === c
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60'
              }`}
            >
              {c === 'USD' ? '$ USD' : '€ EUR'}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Theme</h3>
        <div className="flex gap-3">
          <button
            onClick={() => onUpdatePortfolio({ theme: 'dark' })}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              portfolio.theme === 'dark'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60'
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
          <button
            onClick={() => onUpdatePortfolio({ theme: 'light' })}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              portfolio.theme === 'light'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60'
            }`}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Switch between dark and light mode. Your preference is saved automatically.
        </p>
      </div>

      {/* Data Export */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Data Management</h3>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-white font-medium">Export Transactions</p>
              <p className="text-xs text-gray-500">
                Download all {transactions.length} transactions as CSV
              </p>
            </div>
            <button
              onClick={() => exportTransactionsCSV(transactions)}
              disabled={transactions.length === 0}
              className="flex items-center gap-1.5 bg-gray-800/60 border border-gray-700 text-gray-300 hover:text-cyan-400 rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3 border-b border-gray-800">
            <div>
              <p className="text-sm text-white font-medium">Export Rewards</p>
              <p className="text-xs text-gray-500">
                Download all {rewards.length} reward entries as CSV
              </p>
            </div>
            <button
              onClick={() => exportRewardsCSV(rewards)}
              disabled={rewards.length === 0}
              className="flex items-center gap-1.5 bg-gray-800/60 border border-gray-700 text-gray-300 hover:text-cyan-400 rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-3">
            <div>
              <p className="text-sm text-white font-medium">Import Data</p>
              <p className="text-xs text-gray-500">Import from CSV (coming soon)</p>
            </div>
            <button
              disabled
              className="flex items-center gap-1.5 bg-gray-800/60 border border-gray-700 text-gray-500 rounded-lg px-4 py-2 text-sm cursor-not-allowed opacity-50"
            >
              <Upload className="w-4 h-4" />
              Import CSV
            </button>
          </div>
        </div>
      </div>

      {/* Reset Data */}
      <div className="glass-card rounded-xl p-5 border-red-500/20">
        <h3 className="text-sm font-semibold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Danger Zone
        </h3>
        {showResetConfirm ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <p className="text-sm text-red-300 mb-3">
              Are you sure you want to delete ALL data? This includes portfolio settings,
              all transactions, and all reward entries. This action cannot be undone.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onResetAll();
                  setShowResetConfirm(false);
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer"
              >
                Yes, Delete Everything
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 rounded-lg px-4 py-2.5 text-sm transition-colors cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
            Reset All Data
          </button>
        )}
      </div>

      {/* Premium Placeholder */}
      <div className="glass-card rounded-xl p-5 border-amber-500/20">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-semibold text-amber-400">Premium Features</h3>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Upgrade to Premium to unlock advanced features:
        </p>
        <ul className="text-xs text-gray-500 space-y-1.5 mb-4">
          <li>• Multi-chain portfolio tracking</li>
          <li>• Price alerts & notifications</li>
          <li>• Advanced analytics & tax reports</li>
          <li>• Priority support</li>
          <li>• Ad-free experience</li>
        </ul>
        <button
          disabled
          className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-lg px-6 py-2.5 text-sm opacity-60 cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>

      {/* About */}
      <div className="glass-card rounded-xl p-5">
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 w-full cursor-pointer"
        >
          <Info className="w-4 h-4 text-cyan-400" />
          About This App
        </button>
        {showAbout && (
          <div className="mt-4 text-sm text-gray-400 space-y-2 animate-fade-in">
            <p>
              <strong className="text-white">ATOM Staking Calculator & Portfolio Tracker</strong>
            </p>
            <p className="text-xs italic text-cyan-400/70">"Calculate. Track. Compound."</p>
            <p>
              A free, open-source tool to help Cosmos (ATOM) stakers calculate rewards,
              track holdings, and project portfolio growth. All data is stored locally in
              your browser — no accounts, no cloud storage, no tracking.
            </p>
            <p>
              Built with React, TypeScript, Vite, Tailwind CSS, and Recharts.
            </p>
            <p className="text-xs text-gray-500">Version 1.0.0</p>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="glass-card rounded-xl p-5">
        <button
          onClick={() => setShowDisclaimer(!showDisclaimer)}
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 w-full cursor-pointer"
        >
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          Disclaimer
        </button>
        {showDisclaimer && (
          <div className="mt-4 text-xs text-gray-500 space-y-2 animate-fade-in">
            <p>
              This application is provided for informational and educational purposes only.
              It does not constitute financial advice, investment advice, or any other kind
              of advice.
            </p>
            <p>
              Staking rewards, APR, and projections shown are estimates and may differ from
              actual blockchain rewards. Cryptocurrency investments carry inherent risks,
              including the potential loss of principal.
            </p>
            <p>
              All data is stored locally in your browser. We do not collect, store, or
              transmit any personal or financial information. You are solely responsible
              for the accuracy of the data you enter.
            </p>
            <p>
              Always do your own research (DYOR) before making any investment decisions.
              Past performance is not indicative of future results.
            </p>
          </div>
        )}
      </div>

      {/* Ad Placeholder */}
      <div className="glass-card rounded-xl p-3 text-center border-dashed border-gray-700">
        <p className="text-xs text-gray-600">Sidebar Ad Placeholder — 300×250</p>
      </div>
    </div>
  );
}
