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

// Article content block types for structured content rendering
export type HeadingIcon = 'calculator' | 'trending-up' | 'chart-bar' | 'zap' | 'help-circle' | 'help-circle-violet' | 'clock' | 'check-circle';

export type ContentBlock =
  | { type: 'intro'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string; icon?: HeadingIcon }
  | { type: 'paragraph'; text: string }
  | { type: 'formula'; text: string }
  | { type: 'callout'; variant: 'quick-take' | 'quick-take-warning' | 'disclaimer'; label?: string; text: string }
  | { type: 'example-calculation'; introText: string; rows: { rate: string; net: string; color: 'emerald' | 'cyan' | 'amber' }[]; footnote?: string }
  | { type: 'table'; headers: string[]; rows: string[][]; highlightColumn?: number }
  | { type: 'bullet-list'; items: { label: string; text: string }[] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'key-takeaways'; items: string[] }
  | { type: 'internal-link'; prefix: string; linkText: string; suffix: string; articleSlug: string }
  | { type: 'calculator-cta'; prefix: string; suffix: string };

