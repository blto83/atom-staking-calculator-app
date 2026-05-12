import { PortfolioData, RewardEntry, Transaction } from '../types';

const KEYS = {
  PORTFOLIO: 'atom_portfolio_data',
  REWARDS: 'atom_reward_entries',
  TRANSACTIONS: 'atom_transactions',
};

export const defaultPortfolio: PortfolioData = {
  totalAtom: 0,
  stakedAtom: 0,
  initialInvestment: 0,
  buyPrice: 0,
  currentPrice: 8.50,
  apr: 18.5,
  validatorCommission: 5,
  compoundingFrequency: 'daily',
  currency: 'USD',
  theme: 'light',
};

export function loadPortfolio(): PortfolioData {
  try {
    const raw = localStorage.getItem(KEYS.PORTFOLIO);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...defaultPortfolio, ...parsed };
    }
  } catch (e) {
    console.error('Failed to load portfolio data', e);
  }
  return { ...defaultPortfolio };
}

export function savePortfolio(data: PortfolioData): void {
  try {
    localStorage.setItem(KEYS.PORTFOLIO, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save portfolio data', e);
  }
}

export function loadRewards(): RewardEntry[] {
  try {
    const raw = localStorage.getItem(KEYS.REWARDS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load rewards', e);
  }
  return [];
}

export function saveRewards(rewards: RewardEntry[]): void {
  try {
    localStorage.setItem(KEYS.REWARDS, JSON.stringify(rewards));
  } catch (e) {
    console.error('Failed to save rewards', e);
  }
}

export function loadTransactions(): Transaction[] {
  try {
    const raw = localStorage.getItem(KEYS.TRANSACTIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load transactions', e);
  }
  return [];
}

export function saveTransactions(transactions: Transaction[]): void {
  try {
    localStorage.setItem(KEYS.TRANSACTIONS, JSON.stringify(transactions));
  } catch (e) {
    console.error('Failed to save transactions', e);
  }
}

export function clearAllData(): void {
  localStorage.removeItem(KEYS.PORTFOLIO);
  localStorage.removeItem(KEYS.REWARDS);
  localStorage.removeItem(KEYS.TRANSACTIONS);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
