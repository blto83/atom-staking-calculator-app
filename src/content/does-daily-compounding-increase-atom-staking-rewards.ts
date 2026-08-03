import { ContentBlock } from '../types';

export const doesDailyCompoundingIncreaseAtomStakingRewards: ContentBlock[] = [
  // Intro
  {
    type: 'intro',
    text: 'The short answer: yes — daily compounding does increase ATOM staking rewards. But the size of that increase is often smaller than beginners expect, and the practical decision depends on your portfolio size, gas costs, and personal staking discipline.',
  },

  // Intro paragraphs
  {
    type: 'paragraph',
    text: 'In Cosmos, the difference between simple APR and compounded APY exists because rewards do not automatically restake themselves. Until you actively claim and delegate your rewards, those tokens sit idle and stop participating in the compounding curve. Each restake nudges your effective return higher — but each restake also costs gas.',
  },
  {
    type: 'paragraph',
    text: 'This article breaks down exactly how much daily compounding actually adds, when it makes sense, when it does not, and how to think about restaking cadence as a long-term staking strategy rather than a short-term yield hack.',
  },

  // 1. Quick Refresher: APR vs APY
  {
    type: 'heading',
    level: 2,
    text: '1. Quick Refresher: APR vs APY',
    icon: 'trending-up',
  },
  {
    type: 'paragraph',
    text: 'Annual Percentage Rate (APR) is the raw, simple yearly reward rate without compounding. Annual Percentage Yield (APY) is the effective return after reinvested rewards begin earning their own rewards. The two figures look similar but diverge meaningfully over multi-year horizons.',
  },
  {
    type: 'internal-link',
    prefix: 'For a full mathematical breakdown of APR vs APY in Cosmos, including formulas and projections, read our dedicated ',
    linkText: 'Staking APR vs APY: The Mathematics of Compounding ATOM',
    suffix: ' guide.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom',
  },

  // 2. How Compounding Actually Works on Cosmos
  {
    type: 'heading',
    level: 2,
    text: '2. How Compounding Actually Works on Cosmos',
    icon: 'calculator',
  },
  {
    type: 'paragraph',
    text: 'On the Cosmos Hub, staking rewards accumulate continuously — block by block, roughly every 6–7 seconds. However, these rewards sit in a separate on-chain reward balance. Until you explicitly claim and re-delegate them, they do not contribute to compound growth.',
  },
  {
    type: 'paragraph',
    text: '"Compounding" in Cosmos is therefore a manual or semi-automated process. Each time you claim rewards and restake them, you increase your delegated principal, and every subsequent block calculates your share based on that slightly larger balance. Over time, this creates the snowball effect characteristic of compound interest.',
  },

  // 3. Does Daily Compounding Really Boost Rewards?
  {
    type: 'heading',
    level: 2,
    text: '3. Does Daily Compounding Really Boost Rewards?',
    icon: 'clock',
  },
  {
    type: 'paragraph',
    text: 'Yes — but the boost is smaller than most beginners expect. Compounding daily versus annually does change your effective APY, but the differential between daily, weekly, and monthly restaking is surprisingly narrow. Here is an approximate breakdown using a 17.58% net APR (18.5% gross minus 5% validator commission), based on 1,000 ATOM staked over 1 year:',
  },
  {
    type: 'table',
    headers: ['Restaking Frequency', 'Effective APY', 'Yearly Output', 'Bonus vs Simple'],
    rows: [
      ['No Compounding (Simple)', '17.58%', '1,175.80 ATOM', '—'],
      ['Monthly Restaking', '~19.03%', '~1,190.34 ATOM', '+14.54 ATOM'],
      ['Weekly Restaking', '~19.17%', '~1,191.78 ATOM', '+15.98 ATOM'],
      ['Daily Restaking', '~19.21%', '~1,192.15 ATOM', '+16.35 ATOM'],
    ],
  },
  {
    type: 'paragraph',
    text: 'Notice the diminishing returns. Going from no compounding to monthly restaking captures most of the available upside. Going from monthly to daily adds only a small extra bonus. This pattern is critical when evaluating whether daily compounding is actually worth your effort and gas cost.',
  },

  // 4. The Gas Fee Tradeoff
  {
    type: 'heading',
    level: 2,
    text: '4. The Gas Fee Tradeoff',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Every restaking operation requires two on-chain actions: claiming your rewards, then re-delegating them. Both require gas. On Cosmos, gas costs are usually very small, but compounded daily across a year that is 365 claims and 365 redelegations — 730 transactions in total.',
  },
  {
    type: 'paragraph',
    text: 'For a small portfolio, those gas costs can quietly consume a meaningful portion of your daily reward. If you are earning fractions of an ATOM per day but spending gas every time you claim, the math may favor weekly or monthly compounding instead. Always check that the reward per cycle comfortably exceeds the gas cost per cycle.',
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Gas Discipline Reminder',
    text: 'Never compound when the gas cost per claim exceeds the reward generated since your last restake. Restaking should always be net-positive after fees.',
  },

  // 5. Compounding Cadence by Portfolio Size
  {
    type: 'heading',
    level: 2,
    text: '5. Compounding Cadence by Portfolio Size',
    icon: 'help-circle-violet',
  },
  {
    type: 'paragraph',
    text: 'There is no one-size-fits-all answer — the right restaking frequency depends entirely on the size of your delegated balance:',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Under 100 ATOM:', text: 'Compound monthly. Daily compounding adds very little compared to gas spent.' },
      { label: '100 – 1,000 ATOM:', text: 'Compound weekly or bi-weekly. A balanced sweet spot.' },
      { label: '1,000 – 10,000 ATOM:', text: 'Compound weekly to daily, depending on personal preference.' },
      { label: '10,000+ ATOM:', text: 'Daily compounding becomes mathematically efficient since gas costs are negligible compared to rewards.' },
    ],
  },
  {
    type: 'paragraph',
    text: 'If you want to model your own portfolio at different compounding frequencies, our live ATOM Staking Calculator lets you toggle restaking intervals instantly. For broader income planning context, see How Much ATOM Do You Need to Make Passive Income From Staking?.',
  },

  // 6. Auto-Compounding Tools
  {
    type: 'heading',
    level: 2,
    text: '6. Auto-Compounding Tools',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Several Cosmos ecosystem tools and services can automate restaking on your behalf using on-chain authorization grants (Authz). These tools let you delegate the routine claim-and-restake cycle without giving up custody of your tokens — your wallet remains in full control of the underlying ATOM at all times.',
  },
  {
    type: 'paragraph',
    text: 'Auto-compounding is particularly useful for medium and large portfolios where consistent daily or weekly compounding compounds meaningfully over time but manual execution becomes tedious. Always research the reputation and security model of any auto-compounding service before granting Authz permissions.',
  },

  // 7. Validator Quality Still Matters Most
  {
    type: 'heading',
    level: 2,
    text: '7. Validator Quality Still Matters Most',
    icon: 'check-circle',
  },
  {
    type: 'paragraph',
    text: 'No amount of compounding optimization can outperform poor validator choice. A validator with strong uptime, sustainable commission, and clean operational history delivers more value over a multi-year horizon than a flashy 0% commission validator with weak infrastructure.',
  },
  {
    type: 'internal-link',
    prefix: 'Before optimizing your restaking cadence, ensure your delegation is placed with a high-quality operator. For a structured evaluation framework, read our ',
    linkText: 'How to Choose the Right Cosmos Validator: 5 Core Metrics',
    suffix: ' guide.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics',
  },

  // 8. Risks That Erode Compounding Benefits
  {
    type: 'heading',
    level: 2,
    text: '8. Risks That Erode Compounding Benefits',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Compounding is powerful, but it does not exist in a vacuum. Several factors can quietly erode the benefits of an aggressive compounding schedule:',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Slashing events:', text: 'A slashing penalty wipes out compounded gains instantly.' },
      { label: 'Validator downtime:', text: 'No rewards generated = nothing to compound.' },
      { label: 'Commission increases:', text: 'A sudden validator fee hike reduces every future reward.' },
      { label: 'Gas mismanagement:', text: 'Over-compounding small balances destroys the math.' },
      { label: 'Market volatility:', text: 'Reward count grows, but fiat value can still fall.' },
    ],
  },
  {
    type: 'paragraph',
    text: 'For a complete review of staking risk surfaces, see our ATOM Staking Risks: Slashing and the 21-Day Unbonding Period article and our Can You Lose Money Staking Cosmos ATOM? Risks Explained (2026) guide.',
  },

  // 9. Verdict: Is Daily Compounding Worth It?
  {
    type: 'heading',
    level: 2,
    text: '9. Verdict: Is Daily Compounding Worth It?',
    icon: 'check-circle',
  },
  {
    type: 'paragraph',
    text: 'Daily compounding does improve ATOM staking rewards — but the size of the improvement is typically modest, and the right cadence depends heavily on portfolio size. For large stakers, daily restaking is efficient and mathematically optimal. For small stakers, monthly compounding usually captures most of the benefit without unnecessary gas overhead.',
  },
  {
    type: 'internal-link',
    prefix: 'The most important lesson is consistency, not frequency. A staker who reliably compounds monthly for five years will dramatically outperform a staker who compounds daily for two months before giving up. Choose a cadence you can sustain, then let time and compounding do the heavy lifting. If you are new to Cosmos staking entirely, start with our ',
    linkText: 'What Is Cosmos ATOM Staking? Beginner Guide (2026)',
    suffix: ' first.',
    articleSlug: 'what-is-cosmos-atom-staking-beginner-guide-2026',
  },

  // FAQ
  {
    type: 'heading',
    level: 2,
    text: 'Frequently Asked Questions',
    icon: 'help-circle',
  },
  {
    type: 'faq',
    items: [
      { question: 'Does daily compounding double my staking rewards?', answer: 'No. Daily compounding typically adds only about 1–2 percentage points of effective APY on top of the base APR. The gain is meaningful over years but not transformational on a yearly basis.' },
      { question: 'Is weekly compounding nearly as good as daily?', answer: 'Yes. The difference between weekly and daily restaking is very small — typically a fraction of a percent of effective APY. For most users, weekly compounding offers an excellent balance of compounding gains and reduced operational overhead.' },
      { question: 'Are auto-compounding tools safe to use?', answer: 'Reputable auto-compounding services that rely on on-chain Authz permissions never take custody of your ATOM. However, you should always verify the service\'s reputation, security history, and exact permission scope before granting access.' },
      { question: 'Should I daily-compound a small portfolio?', answer: 'Usually not. For portfolios under ~100 ATOM, gas costs from daily compounding can eat into the small additional yield. Monthly compounding is typically the most efficient cadence for small stakers.' },
    ],
  },

  // Disclaimer
  {
    type: 'callout',
    variant: 'disclaimer',
    label: 'Disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking APR, network conditions, and validator performance can change over time. Always conduct your own research before making financial decisions.',
  },
];
