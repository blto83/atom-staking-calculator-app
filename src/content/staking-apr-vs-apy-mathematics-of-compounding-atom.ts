import { ContentBlock } from '../types';

export const stakingAprVsApyMathematicsOfCompounding: ContentBlock[] = [
  // Intro
  {
    type: 'intro',
    text: 'Staking yield on Cosmos is commonly expressed as a simple baseline percentage (APR). However, by implementing an optimized compounding strategy, you transition into the domain of exponential interest (APY), which dramatically shifts your long-term ATOM accumulation. In this guide, we break down the exact differences, validator fee impacts, and variables that define your real returns.',
  },

  // Early CTA Block 1
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Scenario Simulator',
    text: 'Use our ATOM Staking Calculator to compare APR vs APY instantly.',
  },

  // Introduction: Why Stakers Misunderstand ATOM APR
  {
    type: 'heading',
    level: 2,
    text: 'Introduction: Why Stakers Misunderstand ATOM APR',
    icon: 'trending-up',
  },
  {
    type: 'paragraph',
    text: 'Delegating ATOM tokens to help secure the Cosmos Hub network is one of the most popular yield-generation strategies in the entire digital asset ecosystem. However, a significant portion of participants struggle to distinguish between the advertised Annual Percentage Rate (APR) and the real Annual Percentage Yield (APY) they eventually capture. This misunderstanding frequently leads to inefficient delegation frequencies, poorly chosen validator partnerships, and missed compounding potential.',
  },
  {
    type: 'paragraph',
    text: 'Staking is not a static bank deposit. In Delegated Proof-of-Stake (DPoS) networks, returns are dynamic, fluid, and highly responsive to strategic decisions. By understanding the underlying mathematics, you can optimize your claim schedules, minimize validator drag, and harness the exponential power of compounding to secure your financial goals.',
  },
  {
    type: 'paragraph',
    text: 'Over a multi-year timeline, even a single percentage variance grows into a significant reward gap. By applying a consistent reinvestment cadence, you transition your yield from a simple linear projection to an accelerated compounding curve. Let\'s unpack the mathematical logic that dictates these results.',
  },

  // 1. What Is Staking APR?
  {
    type: 'heading',
    level: 2,
    text: '1. What Is Staking APR?',
    icon: 'calculator',
  },
  {
    type: 'paragraph',
    text: 'Annual Percentage Rate (APR) represents the simple interest rate distributed directly by the Cosmos Hub protocol over one year, without factoring in the reinvestment of earned rewards. When you delegate your ATOM to a validator, you validate block transactions, and in return, the protocol mints new tokens to pay out block rewards.',
  },
  {
    type: 'paragraph',
    text: 'The gross APR is determined at the network level based on target staking ratios and block inflation parameters. However, the actual return you receive as a delegator is always lower than this gross figure. Validators charge a commission fee for hosting validator servers, maintaining high-availability node software, and preventing downtime.',
  },
  {
    type: 'paragraph',
    text: 'Staking rewards accumulate per block (every 6–7 seconds) in a separate on-chain reward balance. Under simple APR, these rewards sit idle and do not generate any additional return. For example, if you leave your rewards unclaimed for 12 months, your return is strictly bound by your initial staked principal multiplied by your net APR.',
  },

  // Quick Math: Simple APR
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Math: Simple APR',
    text: '• Principal Staked: 1,000 ATOM\n• Gross Network APR: 18.0%\n• Validator Commission: 5.0%\n• Net Staking APR: 17.1% (18.0% * 0.95)\n• Yearly Simple Returns: 171.0 ATOM',
  },

  // 2. What Is Staking APY?
  {
    type: 'heading',
    level: 2,
    text: '2. What Is Staking APY?',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Annual Percentage Yield (APY) represents the total interest return over one year when compounding is active. On the Cosmos Hub, rewards are minted and accumulated per block (every 6–7 seconds), meaning they are ready to be reinvested almost instantly.',
  },
  {
    type: 'paragraph',
    text: 'Reinvesting rewards adds to your staked principal. Over time, this results in a "yield on yield" snowball effect. A 18% APR with daily compounding yields an effective return of over 19.7% APY. On a multi-year timeline, this tiny variance changes the output from simple linear expansion to accelerated compounding growth.',
  },
  {
    type: 'paragraph',
    text: 'The power of APY lies in the compounding frequency. If you claim and restake your ATOM daily, your effective daily rate is compounded 365 times in a year. This daily reinvestment loop creates an exponential growth rate that dramatically outperforms standard APR over longer time horizons.',
  },

  // 3. APR vs APY — Core Mathematical Difference
  {
    type: 'heading',
    level: 2,
    text: '3. APR vs APY — Core Mathematical Difference',
    icon: 'clock',
  },
  {
    type: 'paragraph',
    text: 'The mathematical difference between APR and APY is defined by the compounding frequency:',
  },
  {
    type: 'formula',
    text: 'A = P * (1 + r)',
  },
  {
    type: 'formula',
    text: 'A = P * (1 + r / n)^(n * t)',
  },
  {
    type: 'paragraph',
    text: 'Let\'s look at a side-by-side mathematical comparison of different holding sizes over 1, 3, and 5 years, factoring in a standard 18.5% gross APR and a 5% validator commission (17.58% net APR).',
  },

  // Table 1: Principal Comparison Table
  {
    type: 'table',
    headers: ['Principal', 'Time Horizon', 'Simple Staking', 'Daily Compounded', 'Staking Advantage'],
    rows: [
      ['100 ATOM', '1 Year', '117.58 ATOM', '119.21 ATOM', '+1.63 ATOM'],
      ['100 ATOM', '5 Years', '187.90 ATOM', '240.77 ATOM', '+52.87 ATOM'],
      ['500 ATOM', '1 Year', '587.90 ATOM', '596.07 ATOM', '+8.17 ATOM'],
      ['500 ATOM', '5 Years', '939.50 ATOM', '1,203.87 ATOM', '+264.37 ATOM'],
      ['1,000 ATOM', '1 Year', '1,175.80 ATOM', '1,192.15 ATOM', '+16.35 ATOM'],
      ['1,000 ATOM', '5 Years', '1,879.00 ATOM', '2,407.75 ATOM', '+528.75 ATOM'],
    ],
  },

  // 4. Staking Compounding Frequencies and Gas Fee Tradeoffs
  {
    type: 'heading',
    level: 2,
    text: '4. Staking Compounding Frequencies and Gas Fee Tradeoffs',
    icon: 'clock',
  },
  {
    type: 'paragraph',
    text: 'You might assume that compounding as frequently as possible (e.g., every hour) is always the best strategy. In reality, you must consider on-chain gas costs. Every time you claim and delegate on the Cosmos blockchain, you pay a transaction fee. Overcompounding a small balance will eat your profits.',
  },

  // Table 2: Compounding Frequencies Table
  {
    type: 'table',
    headers: ['Compounding Frequency', 'Compounding Events / Yr', 'Estimated APY', 'Yearly Output', 'Net Rewards (est.)'],
    rows: [
      ['Daily Restaking', '365', '19.21%', '1,192.15 ATOM', '192.15 ATOM'],
      ['Weekly Restaking', '52', '19.17%', '1,191.78 ATOM', '191.78 ATOM'],
      ['Monthly Restaking', '12', '19.03%', '1,190.34 ATOM', '190.34 ATOM'],
      ['No Compounding (Simple)', '0', '17.58%', '1,175.80 ATOM', '175.80 ATOM'],
    ],
  },

  // Mid CTA Block
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Validator Analytics & Math',
    text: 'Compare validator commission scenarios with live calculations.',
  },

  // 5. Validator Commission Fees and Compounding Power Drag
  {
    type: 'heading',
    level: 2,
    text: '5. Validator Commission Fees and Compounding Power Drag',
    icon: 'help-circle-violet',
  },
  {
    type: 'paragraph',
    text: 'When choosing validators, pay close attention to the commission rate. This is the percentage fee the node runner keeps to cover operation expenses. Even a small commission fee will slowly compound into a significant drag on your rewards.',
  },

  // Quick Math Example Box 2
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Validator Fee Impact (18.5% Gross APR)',
    text: '• 5% Commission: Net APR is 17.58%. Yields 19.21% APY with daily compounding.\n• 10% Commission: Net APR is 16.65%. Yields 18.11% APY with daily compounding.\n• 20% Commission: Net APR is 14.80%. Yields 15.95% APY with daily compounding.',
  },

  {
    type: 'paragraph',
    text: 'Chasing validators that advertise a 0% commission is not always the best long-term strategy. Often, these operators will raise their commission fees later once they attract delegations. They also have less incentive to maintain high-quality infrastructure, increasing your risk of downtime or slashing.',
  },

  // 6. Staking Variables You Cannot Ignore
  {
    type: 'heading',
    level: 2,
    text: '6. Staking Variables You Cannot Ignore',
    icon: 'chart-bar',
  },
  {
    type: 'paragraph',
    text: 'Before delegating, keep these key variables in mind:',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Gas Fees:', text: 'You must pay gas for every transaction. Ensure your claim rewards are larger than the gas fee required to execute the claim and redelegation.' },
      { label: 'Price Volatility:', text: 'Earning high ATOM staking yields will not prevent losses in fiat value if the market price of ATOM drops significantly.' },
      { label: 'Unbonding Periods:', text: 'Unstaking ATOM triggers a strict 21-day unbonding freeze. During these 21 days, you earn no rewards and cannot move or sell your tokens.' },
    ],
  },

  // Common Mistake Warning Box
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Common Mistake Alert',
    text: 'Never stake 100% of your ATOM balance. Staking transactions leave zero liquid funds in your wallet to pay for gas fees. If you stake everything, your wallet will be locked out, and you will be unable to claim rewards or undelegate without first buying or transferring more ATOM to pay for the transaction fee.',
  },

  // 7. Optimized Compounding Strategy Examples
  {
    type: 'heading',
    level: 2,
    text: '7. Optimized Compounding Strategy Examples',
    icon: 'check-circle',
  },
  {
    type: 'paragraph',
    text: 'How often should you compound? The right compounding interval depends on the size of your staking pool:',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Under 100 ATOM:', text: 'Compound monthly or bi-weekly. Compounding daily will spend too much in gas fees relative to the tiny yield increment.' },
      { label: '100 to 1,000 ATOM:', text: 'Compound weekly or bi-weekly. This balance range hits the sweet spot for compounding advantages without wasting too much gas.' },
      { label: 'Over 1,000 ATOM:', text: 'Compound daily or weekly. The large size of your staking pool makes the daily gas fee negligible relative to the compounding returns.' },
    ],
  },

  {
    type: 'paragraph',
    text: 'To learn more about how these variables interact, we highly recommend exploring our other dedicated staking guides below.',
  },
];
