import { ContentBlock } from '../types';

export const howToChooseTheRightCosmosValidator: ContentBlock[] = [
  // Intro
  {
    type: 'intro',
    text: 'Delegating your tokens is a vote of trust. Choosing a validator is not just about selecting the lowest fee; you must evaluate performance and decentralization metrics to protect your capital.',
  },

  // 1. Key Validator Metrics
  {
    type: 'heading',
    level: 2,
    text: '1. Key Validator Metrics',
    icon: 'help-circle-violet',
  },
  {
    type: 'paragraph',
    text: 'When selecting validators through non-custodial interfaces like Keplr, Cosmostation, or Leap wallet, analyze these vital characteristics:',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Uptime and Infrastructure:', text: 'Target node operators maintaining 99.9% uptime. Missed validation blocks reduce your rewards.' },
      { label: 'Commission Fee Structure:', text: 'Commissions usually range from 2% to 10%. Avoid 0% commission nodes as they are often financially unsustainable, and avoid 100% commission nodes unless they are specific institutional networks.' },
      { label: 'Decentralization Support:', text: 'Consider delegating to top-20 to top-100 range validators. Spreading stake down the ranks boosts the overall security and Nakamoto coefficient of the Cosmos Hub.' },
    ],
  },

  // Closing paragraph with FAQ link (text) and Dashboard link (calculator-cta)
  {
    type: 'calculator-cta',
    prefix: 'For a deep dive on validator slashing, unbonding lockups, and general wallet tips, please visit the full ATOM Staking FAQ. To model your portfolio returns with customized validator commission adjustments, open the ',
    suffix: '.',
  },
];
