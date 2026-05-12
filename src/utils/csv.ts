import { Transaction, RewardEntry } from '../types';

export function exportTransactionsCSV(transactions: Transaction[]): void {
  const headers = ['Date', 'Type', 'Amount (ATOM)', 'Price (USD)', 'Notes'];
  const rows = transactions.map(t => [
    t.date,
    t.type,
    t.amount.toString(),
    t.price.toString(),
    `"${t.notes.replace(/"/g, '""')}"`,
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadCSV(csv, 'atom_transactions.csv');
}

export function exportRewardsCSV(rewards: RewardEntry[]): void {
  const headers = ['Date', 'Amount (ATOM)', 'Notes'];
  const rows = rewards.map(r => [
    r.date,
    r.amount.toString(),
    `"${r.notes.replace(/"/g, '""')}"`,
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadCSV(csv, 'atom_rewards.csv');
}

function downloadCSV(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
