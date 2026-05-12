import { useState } from 'react';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Lock,
  Unlock,
  Gift,
  RefreshCw,
  Plus,
  Trash2,
  Download,
  Search,
  Edit2,
  Check,
  X,
} from 'lucide-react';
import { Transaction, PortfolioData } from '../types';
import { formatAtom, formatCurrency } from '../utils/calculations';
import { generateId } from '../utils/localStorage';
import { exportTransactionsCSV } from '../utils/csv';

interface Props {
  transactions: Transaction[];
  portfolio: PortfolioData;
  onAddTransaction: (tx: Transaction) => void;
  onDeleteTransaction: (id: string) => void;
  onUpdateTransaction: (tx: Transaction) => void;
}

const TX_TYPES = [
  { value: 'buy', label: 'Buy', icon: ArrowDownCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { value: 'sell', label: 'Sell', icon: ArrowUpCircle, color: 'text-red-400', bg: 'bg-red-500/20' },
  { value: 'stake', label: 'Stake', icon: Lock, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { value: 'unstake', label: 'Unstake', icon: Unlock, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { value: 'reward_claim', label: 'Reward Claim', icon: Gift, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { value: 'restake', label: 'Restake', icon: RefreshCw, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
] as const;

function getTxMeta(type: string) {
  return TX_TYPES.find((t) => t.value === type) || TX_TYPES[0];
}

export default function TransactionLog({
  transactions,
  portfolio,
  onAddTransaction,
  onDeleteTransaction,
  onUpdateTransaction,
}: Props) {
  const [showForm, setShowForm] = useState(false);
  const [txType, setTxType] = useState<Transaction['type']>('buy');
  const [txAmount, setTxAmount] = useState('');
  const [txPrice, setTxPrice] = useState(portfolio.currentPrice.toString());
  const [txDate, setTxDate] = useState(new Date().toISOString().split('T')[0]);
  const [txNotes, setTxNotes] = useState('');
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editNotes, setEditNotes] = useState('');

  const handleAdd = () => {
    const amt = parseFloat(txAmount);
    const price = parseFloat(txPrice);
    if (!amt || amt <= 0) return;

    onAddTransaction({
      id: generateId(),
      date: txDate,
      type: txType,
      amount: amt,
      price: price || 0,
      notes: txNotes.trim(),
    });

    setTxAmount('');
    setTxNotes('');
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    onDeleteTransaction(id);
    setConfirmDeleteId(null);
  };

  const handleSaveEdit = (tx: Transaction) => {
    onUpdateTransaction({ ...tx, notes: editNotes });
    setEditingId(null);
  };

  const filtered = transactions
    .filter((tx) => {
      if (filterType !== 'all' && tx.type !== filterType) return false;
      if (search) {
        const s = search.toLowerCase();
        return (
          tx.notes.toLowerCase().includes(s) ||
          tx.type.includes(s) ||
          tx.date.includes(s) ||
          tx.amount.toString().includes(s)
        );
      }
      return true;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Transaction Log</h2>
            <p className="text-xs text-gray-400">Record all your ATOM transactions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {transactions.length > 0 && (
            <button
              onClick={() => exportTransactionsCSV(transactions)}
              className="flex items-center gap-1.5 text-xs bg-gray-800/60 border border-gray-700 text-gray-300 hover:text-cyan-400 rounded-lg px-3 py-2 transition-colors cursor-pointer"
            >
              <Download className="w-3 h-3" />
              Export CSV
            </button>
          )}
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg px-4 py-2 text-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Add Transaction Form */}
      {showForm && (
        <div className="glass-card rounded-xl p-5 animate-fade-in">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">New Transaction</h3>

          {/* Type Selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            {TX_TYPES.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.value}
                  onClick={() => setTxType(t.value as Transaction['type'])}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    txType === t.value
                      ? `${t.bg} ${t.color} ring-1 ring-current`
                      : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">Date</label>
              <input
                type="date"
                value={txDate}
                onChange={(e) => setTxDate(e.target.value)}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">Amount (ATOM)</label>
              <input
                type="number"
                value={txAmount}
                onChange={(e) => setTxAmount(e.target.value)}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="0.00"
                step="0.0001"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">
                Price ({portfolio.currency})
              </label>
              <input
                type="number"
                value={txPrice}
                onChange={(e) => setTxPrice(e.target.value)}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1.5">Notes</label>
              <input
                type="text"
                value={txNotes}
                onChange={(e) => setTxNotes(e.target.value)}
                className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Optional note"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={handleAdd}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg px-6 py-2.5 text-sm transition-colors cursor-pointer"
            >
              Save Transaction
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg px-6 py-2.5 text-sm transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-800/60 border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Search transactions..."
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-gray-800/60 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer sm:w-40"
          >
            <option value="all">All Types</option>
            {TX_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Transaction List */}
      <div className="glass-card rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-300 mb-4">
          Transactions ({filtered.length})
        </h3>
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-8">
            {transactions.length === 0
              ? 'No transactions yet. Click "Add Transaction" to get started!'
              : 'No matching transactions found.'}
          </p>
        ) : (
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {filtered.map((tx) => {
              const meta = getTxMeta(tx.type);
              const Icon = meta.icon;
              return (
                <div
                  key={tx.id}
                  className="flex items-center justify-between py-3 px-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-full ${meta.bg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-4 h-4 ${meta.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold uppercase ${meta.color}`}>
                          {meta.label}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {formatAtom(tx.amount)} ATOM
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                        <span>{new Date(tx.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>
                          @ {formatCurrency(tx.price, portfolio.currency)}
                        </span>
                        {editingId === tx.id ? (
                          <input
                            type="text"
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            className="bg-gray-700 border border-gray-600 rounded px-2 py-0.5 text-xs text-white ml-1 w-32"
                            autoFocus
                          />
                        ) : (
                          tx.notes && (
                            <>
                              <span>•</span>
                              <span className="truncate">{tx.notes}</span>
                            </>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {editingId === tx.id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(tx)}
                          className="text-emerald-400 hover:text-emerald-300 p-1 cursor-pointer"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-gray-400 hover:text-gray-300 p-1 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    ) : confirmDeleteId === tx.id ? (
                      <>
                        <button
                          onClick={() => handleDelete(tx.id)}
                          className="text-xs bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(null)}
                          className="text-xs bg-gray-600 text-white px-2 py-1 rounded cursor-pointer"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingId(tx.id);
                            setEditNotes(tx.notes);
                          }}
                          className="text-gray-500 hover:text-cyan-400 p-1 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(tx.id)}
                          className="text-gray-500 hover:text-red-400 p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
