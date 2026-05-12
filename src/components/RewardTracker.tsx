import { useState } from 'react';
import { Gift, Plus, Trash2, Download, Search } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { RewardEntry, PortfolioData } from '../types';
import { formatAtom, formatCurrency } from '../utils/calculations';
import { generateId } from '../utils/localStorage';
import { exportRewardsCSV } from '../utils/csv';

interface Props {
  rewards: RewardEntry[];
  portfolio: PortfolioData;
  onAddReward: (reward: RewardEntry) => void;
  onDeleteReward: (id: string) => void;
}

export default function RewardTracker({
  rewards,
  portfolio,
  onAddReward,
  onDeleteReward,
}: Props) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [search, setSearch] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState<string | null>(null);

  const totalRewards = rewards.reduce((sum, r) => sum + r.amount, 0);

  const handleAdd = () => {
    const amt = parseFloat(amount);
    if (!amt || amt <= 0) return;
    onAddReward({
      id: generateId(),
      date,
      amount: amt,
      notes: notes.trim(),
    });
    setAmount('');
    setNotes('');
  };

  const handleDelete = (id: string) => {
    onDeleteReward(id);
    setShowConfirmDelete(null);
  };

  const filteredRewards = rewards
    .filter(
      (r) =>
        r.notes.toLowerCase().includes(search.toLowerCase()) ||
        r.date.includes(search) ||
        r.amount.toString().includes(search)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Aggregate by month for chart
  const monthlyData = rewards.reduce<Record<string, number>>((acc, r) => {
    const month = r.date.substring(0, 7);
    acc[month] = (acc[month] || 0) + r.amount;
    return acc;
  }, {});

  const chartData = Object.entries(monthlyData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, total]) => ({
      month: month.substring(2),
      rewards: Math.round(total * 10000) / 10000,
    }));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <Gift className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Reward Tracker</h2>
          <p className="text-xs text-gray-400">
            Manually log your claimed staking rewards
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Total Rewards Claimed</p>
          <p className="text-xl font-bold text-amber-400">{formatAtom(totalRewards)} ATOM</p>
          <p className="text-xs text-gray-500">
            ≈ {formatCurrency(totalRewards * portfolio.currentPrice, portfolio.currency)}
          </p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Reward Entries</p>
          <p className="text-xl font-bold text-white">{rewards.length}</p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <p className="text-xs text-gray-400 mb-1">Avg per Entry</p>
          <p className="text-xl font-bold text-white">
            {rewards.length > 0 ? formatAtom(totalRewards / rewards.length) : '0'} ATOM
          </p>
        </div>
      </div>

      {/* Chart */}
      {chartData.length > 0 && (
        <div className="glass-card rounded-xl p-5">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Monthly Rewards</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#475569" fontSize={11} />
              <YAxis stroke="#475569" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #1e293b',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                formatter={(value) => [`${value} ATOM`]}
              />
              <Bar dataKey="rewards" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Add Form */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">Add Reward Entry</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Amount (ATOM)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="0.00"
              step="0.0001"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1.5">Notes (optional)</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="e.g. Validator XYZ"
            />
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg px-4 py-2.5 text-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Reward
          </button>
        </div>
      </div>

      {/* Reward List */}
      <div className="glass-card rounded-xl p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-sm font-semibold text-gray-300">Reward History</h3>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-800/60 border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white w-full sm:w-48 focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Search..."
              />
            </div>
            {rewards.length > 0 && (
              <button
                onClick={() => exportRewardsCSV(rewards)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-cyan-400 transition-colors bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 cursor-pointer"
              >
                <Download className="w-3 h-3" />
                CSV
              </button>
            )}
          </div>
        </div>

        {filteredRewards.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">
            {rewards.length === 0
              ? 'No rewards logged yet. Add your first reward above!'
              : 'No matching rewards found.'}
          </p>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredRewards.map((r) => (
              <div
                key={r.id}
                className="flex items-center justify-between py-3 px-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Gift className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      +{formatAtom(r.amount)} ATOM
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(r.date).toLocaleDateString()} {r.notes && `• ${r.notes}`}
                    </p>
                  </div>
                </div>
                {showConfirmDelete === r.id ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="text-xs bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => setShowConfirmDelete(null)}
                      className="text-xs bg-gray-600 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowConfirmDelete(r.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
