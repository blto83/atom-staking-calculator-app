import { ContentBlock } from '../types';

export const atomStakingScenarios100_1000_10000AtomRewards: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Abstract percentages are hard to plan around. Knowing that ATOM staking yields "14-20% APR" doesn\'t tell you much until you see what that actually means for a specific amount of ATOM you might realistically hold. This guide walks through three concrete scenarios — 100 ATOM, 1,000 ATOM, and 10,000 ATOM — showing projected rewards under different validator commission rates and compounding approaches, so you can see real numbers rather than abstract rates.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'Setting Up the Assumptions'
  },
  {
    type: 'paragraph',
    text: 'Before diving into the scenarios, it\'s worth being explicit about the assumptions used throughout this guide, since your actual results will vary based on real network conditions and your specific validator choice.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Base APR assumption: 15%.', text: 'This sits within the commonly cited 14-20% range for Cosmos Hub staking, used here as a representative middle figure for illustration.' },
      { label: 'Commission scenarios: 5%, 10%, and 20%.', text: 'These span the typical range most established validators charge, letting you see how commission choice alone changes your outcome.' },
      { label: 'Time horizon: one year, with a five-year comparison for compounding.', text: 'Long enough to show meaningful differences, without extending so far that rate assumptions become unrealistic.' },
      { label: 'ATOM price held constant.', text: 'All figures are shown in ATOM terms, not fiat, since price fluctuation is a separate variable from the staking mechanics this guide focuses on.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'Real network APR fluctuates over time based on total staked supply and protocol parameters. These scenarios use a fixed 15% for clarity, but your actual rate will vary — always check current network APR and your specific validator\'s commission before relying on these figures for planning.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: 'Scenario 1: Staking 100 ATOM'
  },
  {
    type: 'paragraph',
    text: 'A 100 ATOM position is a common starting point for stakers testing the process before committing larger amounts. Here\'s what a year of staking looks like at this scale, before compounding.'
  },
  {
    type: 'example-calculation',
    introText: 'Staking 100 ATOM at a 15% network APR for one year, before compounding.',
    rows: [
      { rate: '5% validator commission', net: '14.25 ATOM/year', color: 'emerald' },
      { rate: '10% validator commission', net: '13.5 ATOM/year', color: 'cyan' },
      { rate: '20% validator commission', net: '12 ATOM/year', color: 'amber' }
    ],
    footnote: 'At this scale, the difference between a 5% and 20% commission validator is 2.25 ATOM per year — a real but modest amount that grows more significant at larger staked amounts or over longer horizons.'
  },
  {
    type: 'paragraph',
    text: 'At 100 ATOM, the absolute reward differences between commission tiers are small in ATOM terms, though the percentage impact on your net yield is identical regardless of scale. This is a reasonable amount to use for learning the staking process, evaluating a validator, and getting comfortable with wallet mechanics before committing a larger position.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: 'Scenario 2: Staking 1,000 ATOM'
  },
  {
    type: 'paragraph',
    text: 'At 1,000 ATOM, the numbers become large enough that commission choice starts to represent a meaningfully different amount of ATOM per year, even though the underlying percentages are unchanged.'
  },
  {
    type: 'example-calculation',
    introText: 'Staking 1,000 ATOM at a 15% network APR for one year, before compounding.',
    rows: [
      { rate: '5% validator commission', net: '142.5 ATOM/year', color: 'emerald' },
      { rate: '10% validator commission', net: '135 ATOM/year', color: 'cyan' },
      { rate: '20% validator commission', net: '120 ATOM/year', color: 'amber' }
    ],
    footnote: 'The gap between the lowest and highest commission scenario is now 22.5 ATOM per year — enough to be a meaningful consideration when comparing validators, rather than a rounding error.'
  },
  {
    type: 'paragraph',
    text: 'At this scale, it becomes worth spending real time evaluating validators rather than delegating to whichever option is most prominently displayed in your wallet\'s staking interface. A few percentage points of commission difference now represents dozens of ATOM annually.'
  },
  {
    type: 'internal-link',
    prefix: 'For the criteria worth evaluating before choosing, see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: 'Scenario 3: Staking 10,000 ATOM'
  },
  {
    type: 'paragraph',
    text: 'At 10,000 ATOM, the absolute reward figures become substantial, and commission choice, validator reliability, and compounding strategy all compound into meaningfully different outcomes.'
  },
  {
    type: 'example-calculation',
    introText: 'Staking 10,000 ATOM at a 15% network APR for one year, before compounding.',
    rows: [
      { rate: '5% validator commission', net: '1,425 ATOM/year', color: 'emerald' },
      { rate: '10% validator commission', net: '1,350 ATOM/year', color: 'cyan' },
      { rate: '20% validator commission', net: '1,200 ATOM/year', color: 'amber' }
    ],
    footnote: 'The difference between lowest and highest commission is now 225 ATOM per year — a substantial amount that makes careful validator selection genuinely consequential at this scale, and may justify splitting the position across multiple validators for risk diversification as well.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'At larger staked amounts, diversifying across several well-vetted validators rather than concentrating everything with one becomes increasingly worth the added tracking complexity, since it reduces your exposure to any single validator\'s slashing or downtime risk.'
  },
  {
    type: 'internal-link',
    prefix: 'For more on the risks a concentrated position exposes you to, see our guide on',
    linkText: 'slashing and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: 'How Compounding Changes These Numbers Over Time'
  },
  {
    type: 'paragraph',
    text: 'The scenarios above show a single year without compounding — meaning rewards are earned but never claimed and restaked. In practice, many stakers periodically claim and redelegate their rewards, which meaningfully changes the picture over longer time horizons.'
  },
  {
    type: 'table',
    headers: ['Time Horizon', '1,000 ATOM, No Compounding', '1,000 ATOM, Monthly Compounding'],
    rows: [
      ['1 year', '1,142.5 ATOM total (at 5% commission)', '~1,153 ATOM total'],
      ['3 years', '1,427.5 ATOM total', '~1,502 ATOM total'],
      ['5 years', '1,712.5 ATOM total', '~1,955 ATOM total']
    ]
  },
  {
    type: 'paragraph',
    text: 'The gap between compounded and non-compounded totals widens meaningfully over longer horizons — this is the same mathematical principle behind compound interest generally, just applied to ATOM staking rewards specifically. For a full mathematical breakdown of exactly how this works, including the difference between simple APR and effective APY, see our dedicated guide on the topic.'
  },
  {
    type: 'internal-link',
    prefix: 'See our full guide on',
    linkText: 'staking APR vs APY and the mathematics of compounding',
    suffix: 'for the complete calculation methodology.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: 'Comparing All Three Scenarios Side by Side'
  },
  {
    type: 'table',
    headers: ['Staked Amount', 'Net Reward/Year (5% commission)', 'Net Reward/Year (20% commission)'],
    rows: [
      ['100 ATOM', '14.25 ATOM', '12 ATOM'],
      ['1,000 ATOM', '142.5 ATOM', '120 ATOM'],
      ['10,000 ATOM', '1,425 ATOM', '1,200 ATOM']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'This side-by-side view makes clear that the underlying percentage impact of commission is identical at every scale — but the absolute ATOM difference scales linearly with your position size. A commission difference that\'s barely noticeable at 100 ATOM becomes genuinely significant at 10,000 ATOM.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: 'Working Backward: What If You Have a Target Reward in Mind?'
  },
  {
    type: 'paragraph',
    text: 'The scenarios above work forward from a specific ATOM amount to a projected reward. If instead you\'re starting from a target income figure and want to work backward to determine how much ATOM you\'d need to stake, that calculation follows the same underlying math in reverse.'
  },
  {
    type: 'internal-link',
    prefix: 'For that full walkthrough, see our guide on',
    linkText: 'how much ATOM you need to make passive income',
    suffix: 'from staking.',
    articleSlug: 'how-much-atom-to-make-passive-income'
  },
  {
    type: 'paragraph',
    text: 'Between these two approaches — forward projection from a known amount, and backward calculation from a target — you should be able to model most planning scenarios relevant to your own staking goals.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'Frequently Asked Questions'
  },
  {
    type: 'faq',
    items: [
      {
        question: 'How much can I earn staking 100 ATOM?',
        answer: 'At a representative 15% network APR, staking 100 ATOM yields roughly 12 to 14.25 ATOM per year before compounding, depending on your validator\'s commission rate (assuming a 5% to 20% range).'
      },
      {
        question: 'How much can I earn staking 1,000 ATOM?',
        answer: 'Under the same assumptions, 1,000 ATOM would yield roughly 120 to 142.5 ATOM per year before compounding, depending on validator commission.'
      },
      {
        question: 'Does staking a larger amount get a better interest rate?',
        answer: 'No. The Cosmos Hub network APR and validator commission rates apply as percentages regardless of your staked amount — there\'s no tiered bonus rate for larger positions. Absolute ATOM rewards simply scale proportionally with your stake size.'
      },
      {
        question: 'Should I split a large staking position across multiple validators?',
        answer: 'Many stakers with larger positions choose to diversify across several reputable validators to reduce concentration risk from any single validator\'s potential slashing or downtime, at the cost of slightly more tracking complexity.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Validator commission has an identical percentage impact regardless of your staked amount, but the absolute ATOM difference scales with position size.',
      'At 100 ATOM, commission differences amount to a few ATOM per year; at 10,000 ATOM, the same percentage difference represents hundreds of ATOM.',
      'Compounding widens the gap between staking approaches significantly over multi-year horizons compared to a single year.',
      'Larger staked positions generally warrant more careful validator research and consideration of diversification across multiple validators.',
      'The same underlying math works both forward (amount to reward) and backward (target reward to required amount), depending on your planning approach.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Want to model your own exact numbers instead of these general scenarios?',
    suffix: 'Use the ATOM Staking Calculator to input your specific amount, APR, and commission rate.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. All figures shown are illustrative projections based on stated assumptions, not guarantees. Actual staking rewards depend on real network conditions, validator performance, and commission rates, which can change over time.'
  }
];
