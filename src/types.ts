export interface PortfolioData {
  totalAtom: number;
  stakedAtom: number;
  initialInvestment: number;
  buyPrice: number;
  currentPrice: number;
  apr: number;
  validatorCommission: number;
  compoundingFrequency: 'none' | 'daily' | 'weekly' | 'monthly';
  currency: 'USD' | 'EUR';
  theme: 'dark' | 'light';
}

export interface RewardEntry {
  id: string;
  date: string;
  amount: number;
  notes: string;
}

export interface Transaction {
  id: string;
  date: string;
  type: 'buy' | 'stake' | 'unstake' | 'reward_claim' | 'restake' | 'sell';
  amount: number;
  price: number;
  notes: string;
}

export interface GrowthDataPoint {
  day: number;
  label: string;
  withCompounding: number;
  withoutCompounding: number;
}

export interface RewardCalculation {
  dailyRewards: number;
  weeklyRewards: number;
  monthlyRewards: number;
  yearlyRewards: number;
  netApr: number;
  compoundedYearlyRewards: number;
}
