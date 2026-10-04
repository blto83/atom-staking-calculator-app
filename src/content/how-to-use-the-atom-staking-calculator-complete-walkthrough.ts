import { ContentBlock } from '../types';

export const howToUseTheAtomStakingCalculatorCompleteWalkthrough: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Every guide on this site points you toward the ATOM Staking Calculator, but the tool itself has more depth than a single reward estimate. This walkthrough covers each part of the calculator suite — the core rewards calculator, growth projection, reward tracking, and transaction logging — so you can use it to actually plan your staking strategy, not just check a single number.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '1. The Core Calculator: Estimating Your Rewards'
  },
  {
    type: 'paragraph',
    text: 'The main Calculator tool is where most people start. It takes a handful of inputs and projects your expected staking rewards based on them. Understanding what each input actually controls makes the output far more useful than just glancing at a final number.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Staked amount.', text: 'The quantity of ATOM you\'re planning to stake, or already have staked. This is the base your reward projection scales from.' },
      { label: 'APR.', text: 'The annual percentage rate you expect to earn, before compounding. You can use the current network rate or test different scenarios to see how sensitivity to rate changes affects your outcome.' },
      { label: 'Validator commission.', text: 'The percentage your chosen validator deducts from your gross rewards. Entering your actual validator\'s rate gives you a realistic net projection rather than an idealized gross figure.' },
      { label: 'Compounding frequency.', text: 'How often you plan to claim and restake rewards — daily, weekly, monthly, or not at all. This input is where the calculator\'s real value shows up, since compounding frequency meaningfully changes your effective return over time.' },
      { label: 'Time horizon.', text: 'How far into the future you want to project — a single year, or a multi-year outlook for longer-term planning.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'The single most common mistake is leaving validator commission at a default or placeholder value instead of entering your actual validator\'s real rate. Since commission directly reduces your net reward, an inaccurate commission input is the fastest way to get a misleading projection.'
  },
  {
    type: 'paragraph',
    text: 'For the underlying math behind how these inputs combine — particularly how compounding frequency changes your effective yield — it\'s worth understanding the mechanics directly rather than treating the calculator as a black box.'
  },
  {
    type: 'internal-link',
    prefix: 'See our guide on',
    linkText: 'staking APR vs APY and the mathematics of compounding',
    suffix: 'for the full breakdown.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '2. Growth Projection: Modeling Longer-Term Outcomes'
  },
  {
    type: 'paragraph',
    text: 'While the core calculator gives you a snapshot, the Growth tool is built for visualizing how your position evolves over a longer horizon — typically shown as a chart tracking your staked balance across months or years under your chosen assumptions.'
  },
  {
    type: 'paragraph',
    text: 'This view is particularly useful for comparing scenarios side by side: what does your position look like in three years at a 5% commission validator versus a 15% commission validator? Seeing the trajectory visually, rather than just a single end-point number, makes the long-term impact of small input differences much more intuitive.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'Growth projections are only as accurate as their underlying assumptions. Network APR fluctuates over time based on total staked supply, so treat multi-year projections as illustrative scenarios rather than guaranteed outcomes.'
  },
  {
    type: 'paragraph',
    text: 'For a sense of how concrete amounts translate into real projected rewards at different scales, it can help to see worked examples alongside using the tool yourself.'
  },
  {
    type: 'internal-link',
    prefix: 'See our guide on',
    linkText: 'ATOM staking scenarios at 100, 1,000, and 10,000 ATOM',
    suffix: 'for worked examples at different position sizes.',
    articleSlug: 'atom-staking-scenarios-100-1000-10000-atom-rewards'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '3. Reward Tracking: Monitoring What You\'ve Actually Earned'
  },
  {
    type: 'paragraph',
    text: 'The Rewards tool shifts from projection to tracking — rather than modeling a hypothetical scenario, it\'s meant for logging and monitoring rewards you\'ve actually received over time. This is useful for two distinct purposes: confirming your real-world returns are tracking close to what was projected, and building a running record that can help with later tax reporting.'
  },
  {
    type: 'paragraph',
    text: 'Given how many individual reward events active staking can generate — especially if you\'re claiming frequently to compound — having a running log you update as you go is far easier than reconstructing a full history later.'
  },
  {
    type: 'internal-link',
    prefix: 'For more on why this record-keeping matters, see our guide on',
    linkText: 'ATOM staking tax implications and reporting',
    suffix: '.',
    articleSlug: 'atom-staking-tax-implications-and-reporting-guide'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '4. Transaction Log: Keeping a Full History'
  },
  {
    type: 'paragraph',
    text: 'The Transactions tool is built for recording the broader set of staking-related actions beyond just reward claims — delegations, redelegations, and unstaking events. Together with the Rewards tracker, this gives you a more complete picture of your staking activity over time than relying on memory or digging back through wallet history later.'
  },
  {
    type: 'paragraph',
    text: 'If you\'ve redelegated between validators — for example, after a commission change or to diversify your position — logging those events here keeps a clear record of when and why you moved your stake, which can be genuinely useful context months later when you\'re trying to remember your own reasoning.'
  },
  {
    type: 'internal-link',
    prefix: 'If you\'re considering switching validators, see our guide on',
    linkText: 'redelegating ATOM without losing rewards',
    suffix: 'for how that process works.',
    articleSlug: 'how-to-redelegate-atom-switch-validators-without-losing-rewards'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '5. The Dashboard: Your Overall Snapshot'
  },
  {
    type: 'paragraph',
    text: 'The Dashboard pulls together a summary view across your staking activity — a consolidated look rather than the single-purpose focus of the individual tools. This is typically the best starting point once you\'ve already logged some real activity, since it gives you an at-a-glance overview before drilling into any specific tool for more detail.'
  },
  {
    type: 'paragraph',
    text: 'For someone just getting started, it makes more sense to begin with the core Calculator to understand projected rewards, then return to the Dashboard periodically once you have real staking history to track against those projections.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: 'Putting the Tools Together: A Practical Workflow'
  },
  {
    type: 'paragraph',
    text: 'Rather than treating each tool in isolation, here\'s a practical sequence for using the full calculator suite as part of an actual staking decision.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Start with the Calculator to model your decision.', text: 'Before delegating, enter your planned amount, a realistic APR, and your candidate validator\'s actual commission rate to see a net projection.' },
      { label: 'Use Growth to compare scenarios.', text: 'If you\'re deciding between two validators or compounding strategies, model both side by side to see how the difference compounds over your actual time horizon.' },
      { label: 'Delegate, then log it in Transactions.', text: 'Once you\'ve made a decision and delegated, record the action so you have a clear reference point going forward.' },
      { label: 'Track real rewards in Rewards as they accrue.', text: 'Periodically log actual rewards received, both to confirm they\'re tracking close to your original projection and to build a record for tax purposes.' },
      { label: 'Check the Dashboard periodically for the full picture.', text: 'Once you have ongoing activity logged, the Dashboard becomes the easiest way to see your overall position at a glance without digging through individual tools.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'The calculator tools are most valuable when used as an ongoing habit rather than a one-time check before your first delegation. Revisiting your projections periodically — especially after a validator commission change or a redelegation — keeps your expectations grounded in current numbers rather than assumptions from months ago.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'Common Questions About Using the Calculator'
  },
  {
    type: 'paragraph',
    text: 'A few points of confusion come up repeatedly for people using the calculator for the first time, worth addressing directly.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'The projection isn\'t a guarantee.', text: 'Every output is based on the APR and other assumptions you entered — if actual network conditions differ, your real results will too. Treat projections as planning tools, not promises.' },
      { label: 'Compounding requires action on your part.', text: 'Selecting a compounding frequency in the calculator models what would happen if you claim and restake at that cadence — it doesn\'t automatically do this for you on-chain. You still need to manually claim and redelegate your rewards for the modeled compounding to actually occur.' },
      { label: 'Commission can change.', text: 'If your validator adjusts their commission rate, your real returns will shift accordingly — it\'s worth periodically re-checking your calculator inputs against your validator\'s current rate rather than assuming it\'s fixed.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: 'Frequently Asked Questions'
  },
  {
    type: 'faq',
    items: [
      {
        question: 'Is the ATOM Staking Calculator free to use?',
        answer: 'Yes, the calculator and all related tools are free to use, require no signup, and run entirely in your browser with no data collection.'
      },
      {
        question: 'Does the calculator automatically compound my rewards?',
        answer: 'No. The calculator projects what compounding at your chosen frequency would produce, but actually compounding your real rewards requires manually claiming and restaking them through your wallet — the calculator doesn\'t perform on-chain actions.'
      },
      {
        question: 'How accurate are the calculator\'s projections?',
        answer: 'Projections are as accurate as the assumptions you enter. Since network APR and validator commission can both change over time, treat longer-term projections as illustrative scenarios rather than guaranteed outcomes.'
      },
      {
        question: 'Can I track multiple validators in the Rewards and Transactions tools?',
        answer: 'Yes, you can log activity across different validators if you\'ve diversified your stake or redelegated over time, giving you a complete picture rather than a single-validator view.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'The core Calculator projects rewards based on staked amount, APR, validator commission, and compounding frequency — always use your real validator\'s commission rate for accuracy.',
      'Growth visualizes longer-term trajectories, useful for comparing different validator or compounding scenarios side by side.',
      'Rewards and Transactions are built for tracking real activity over time, not just projecting hypothetical scenarios.',
      'The Dashboard gives a consolidated overview once you have real staking activity logged.',
      'The tools work best as an ongoing habit — revisit your projections periodically, especially after a commission change or redelegation.',
      'Compounding modeled in the calculator requires you to manually claim and restake on-chain — it doesn\'t happen automatically.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Ready to put this into practice?',
    suffix: 'Start with the ATOM Staking Calculator and work through your own numbers.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Calculator projections are based on user-provided assumptions and do not guarantee actual future staking returns, which depend on real network conditions and validator performance.'
  }
];
