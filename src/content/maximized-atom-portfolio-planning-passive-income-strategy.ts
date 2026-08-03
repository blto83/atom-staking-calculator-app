import { ContentBlock } from '../types';

export const maximizedAtomPortfolioPlanningPassiveIncomeStrategy: ContentBlock[] = [
  // Intro
  {
    type: 'intro',
    text: 'Efficient capital allocation is critical in crypto finance. Let\'s review the strategy of maintaining liquid reserves, managing gas parameters, and tracking active returns.',
  },

  // 1. Portfolio Allocation and Gas Reserves
  {
    type: 'heading',
    level: 2,
    text: '1. Portfolio Allocation and Gas Reserves',
    icon: 'trending-up',
  },
  {
    type: 'paragraph',
    text: 'Staking 100% of your ATOM is a common beginner trap. On the Cosmos Hub, you need unstaked ATOM in your wallet to pay for fee gas on all transactions, including reward claims, delegations, and redelegations. Always leave a small buffer of 0.1 to 0.5 ATOM liquid to prevent your wallet from being locked out.',
  },
  {
    type: 'calculator-cta',
    prefix: 'A balanced staking strategy involves dedicating 80–90% of holdings to secure validators, keeping 10–20% liquid for market trading, governance proposals, or emergency liquidity. To help visualize your portfolio allocation ratios (Staked vs. Unstaked), visit the interactive pie graphs on the ',
    suffix: '.',
  },
];
