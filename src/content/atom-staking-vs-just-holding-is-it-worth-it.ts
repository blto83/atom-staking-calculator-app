import { ContentBlock } from '../types';

export const atomStakingVsJustHoldingIsItWorthIt: ContentBlock[] = [
  {
    type: 'intro',
    text: 'If you hold ATOM, you have a choice: stake it and earn ongoing rewards, or simply hold it unstaked and keep full, instant liquidity. Both are legitimate strategies, and the right choice depends on factors beyond just the headline APR. This guide walks through the real tradeoffs — inflation, opportunity cost, liquidity, and risk — so you can decide with a full picture rather than just chasing the highest advertised yield.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'The Core Tradeoff'
  },
  {
    type: 'paragraph',
    text: 'Staking ATOM means delegating it to a validator to help secure the Cosmos Hub, in exchange for a share of network rewards. Holding ATOM unstaked means it sits in your wallet, fully liquid, earning nothing extra, but available to move, trade, or spend at any moment.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'The decision isn\'t simply "staking is better" or "holding is better" — it\'s a genuine tradeoff between yield and liquidity, with real considerations on both sides depending on your goals and time horizon.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: 'Why Staking Rewards Exist: Understanding Inflation'
  },
  {
    type: 'paragraph',
    text: 'Cosmos Hub staking rewards are funded primarily through network inflation — new ATOM is minted and distributed to stakers as an incentive for securing the network. This is an important detail often missed by beginners: the "yield" from staking isn\'t created from nothing, it\'s newly issued supply.'
  },
  {
    type: 'paragraph',
    text: 'This has a direct implication for holders who choose not to stake: if the total ATOM supply grows through inflation and you\'re not staking, your unstaked ATOM represents a shrinking percentage of total supply over time, even though the number of tokens you hold stays the same.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'This is sometimes framed as "staking to keep pace with inflation" rather than purely "staking for profit." Not staking doesn\'t just mean missing out on extra rewards — it can mean your relative share of the total network gradually dilutes as new ATOM is issued to those who do stake.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: 'The Numbers: A Direct Comparison'
  },
  {
    type: 'paragraph',
    text: 'Consider two people, each holding 1,000 ATOM at the start of the year. One stakes; one doesn\'t.'
  },
  {
    type: 'example-calculation',
    introText: 'Starting position: 1,000 ATOM each, at a 15% network APR, 5% validator commission for the staker.',
    rows: [
      { rate: 'Holder (unstaked)', net: '1,000 ATOM after one year', color: 'amber' },
      { rate: 'Staker (net of commission)', net: '1,142.5 ATOM after one year', color: 'emerald' },
      { rate: 'Difference', net: '142.5 ATOM', color: 'cyan' }
    ],
    footnote: 'In pure ATOM-count terms, the staker ends the year with meaningfully more tokens. The holder\'s 1,000 ATOM, however, also represents a smaller share of total network supply than it did a year earlier, since new ATOM was issued to reward stakers during that period.'
  },
  {
    type: 'paragraph',
    text: 'To see exactly how this plays out for your own holdings and time horizon, you can model the numbers directly rather than relying on illustrative figures.'
  },
  {
    type: 'calculator-cta',
    prefix: 'Curious what this looks like for your specific holdings?',
    suffix: 'Use the ATOM Staking Calculator to project your own numbers.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: 'What You Give Up by Staking: Liquidity'
  },
  {
    type: 'paragraph',
    text: 'The most significant tradeoff staking introduces is liquidity. Unstaked ATOM can be sold, transferred, or spent instantly. Staked ATOM requires initiating an unstake and then waiting through the Cosmos Hub\'s mandatory 21-day unbonding period before it becomes liquid again — during which it also earns no rewards.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of how this unbonding period works, see our guide on',
    linkText: 'ATOM staking risks and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'paragraph',
    text: 'This matters most for ATOM you might need access to on short notice. Funds earmarked for near-term spending, trading opportunities, or emergencies are generally poor candidates for staking, regardless of how attractive the yield looks, simply because of this illiquidity window.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: 'What You Give Up by Not Staking: Governance Voice'
  },
  {
    type: 'paragraph',
    text: 'Beyond rewards, staking is also how you participate in Cosmos Hub governance. Only staked ATOM carries voting weight on network proposals — unstaked, liquid ATOM has no say in how the protocol evolves, regardless of how much of it you hold.'
  },
  {
    type: 'paragraph',
    text: 'For holders who care about the direction of the network — software upgrades, parameter changes, ecosystem funding decisions — this is a meaningful consideration entirely separate from the reward rate itself.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: 'Risk Considerations: Staking Isn\'t Risk-Free Either'
  },
  {
    type: 'paragraph',
    text: 'It\'s worth being clear-eyed that staking introduces risks that simply holding does not. Validators can be slashed for misbehavior, which affects delegators proportionally, and the unbonding period itself creates exposure to price movement you can\'t react to during that window.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Slashing risk.', text: 'A validator double-signing or experiencing severe downtime can result in a portion of your delegated stake being penalized, something that simply doesn\'t exist for unstaked holdings.' },
      { label: 'Illiquidity risk during unbonding.', text: 'Once you initiate an unstake, you\'re committed to the full 21-day wait with no way to exit early, regardless of what happens to ATOM\'s price during that window.' },
      { label: 'Validator selection risk.', text: 'Your returns and risk exposure depend meaningfully on which validator you choose, adding a layer of decision-making that simply holding doesn\'t require.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of these risks and how to minimize them, see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: 'When Holding Without Staking Makes Sense'
  },
  {
    type: 'table',
    headers: ['Situation', 'Holding Unstaked Makes Sense'],
    rows: [
      ['You may need funds within the next few weeks', 'Yes — the 21-day unbonding window makes staking impractical for near-term needs'],
      ['You\'re actively trading or rebalancing frequently', 'Yes — staking adds friction that conflicts with frequent transactions'],
      ['You\'re still researching validators and not ready to commit', 'Yes — better to hold briefly than delegate hastily to an unresearched validator'],
      ['You want maximum flexibility above all else', 'Yes — this is a reasonable, valid preference on its own']
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: 'When Staking Makes Sense'
  },
  {
    type: 'table',
    headers: ['Situation', 'Staking Makes Sense'],
    rows: [
      ['You\'re holding ATOM as a longer-term position', 'Yes — capturing rewards and keeping pace with inflation over time outweighs short-term liquidity needs'],
      ['You want a voice in network governance', 'Yes — only staked ATOM carries voting weight'],
      ['You\'ve researched and are comfortable with a validator', 'Yes — informed delegation meaningfully reduces the main risks involved'],
      ['You don\'t anticipate needing the funds for at least a month or more', 'Yes — comfortably outside the unbonding window, so illiquidity isn\'t a practical concern']
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: 'A Middle Ground: Partial Staking'
  },
  {
    type: 'paragraph',
    text: 'Many holders don\'t treat this as an all-or-nothing decision. A common approach is staking the majority of a long-term position while keeping a smaller portion liquid for flexibility, trading, or emergencies — capturing most of the staking benefit while retaining some optionality.'
  },
  {
    type: 'internal-link',
    prefix: 'For a fuller discussion of how to think about this allocation, see our guide on',
    linkText: 'ATOM portfolio planning',
    suffix: '.',
    articleSlug: 'maximized-atom-portfolio-planning-passive-income-strategy'
  },
  {
    type: 'paragraph',
    text: 'This partial approach is worth considering rather than viewing the decision as strictly binary — most real portfolios benefit from at least some liquid buffer regardless of how committed you are to staking the rest.'
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
        question: 'Is it better to stake ATOM or just hold it?',
        answer: 'It depends on your goals. Staking captures ongoing rewards and helps offset network inflation, but sacrifices instant liquidity due to the 21-day unbonding period. Holding keeps full liquidity but earns no additional yield.'
      },
      {
        question: 'Do I lose value by not staking ATOM?',
        answer: 'You don\'t lose your tokens, but since staking rewards are funded by network inflation, not staking means your holdings represent a gradually shrinking share of total network supply over time compared to those who do stake.'
      },
      {
        question: 'Can I stake only part of my ATOM?',
        answer: 'Yes. Many holders stake the majority of their position while keeping a smaller portion liquid for flexibility, which is a common and reasonable middle-ground approach.'
      },
      {
        question: 'Why is Cosmos staking APR relatively high compared to other assets?',
        answer: 'Cosmos Hub staking rewards are funded through network inflation designed specifically to incentivize sufficient staking participation to keep the network secure — the rate reflects this issuance mechanism rather than being an arbitrary yield figure.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Staking rewards on the Cosmos Hub are funded primarily by network inflation, not created from nothing.',
      'Not staking means your holdings gradually represent a shrinking share of total network supply over time.',
      'Staking\'s main tradeoff is liquidity — a 21-day unbonding period applies if you later choose to unstake.',
      'Only staked ATOM carries governance voting weight.',
      'Staking introduces real risks (slashing, validator selection) that simply holding does not.',
      'Partial staking — keeping some ATOM liquid while staking the rest — is a reasonable middle ground many holders use.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Ready to see the real numbers for your own situation?',
    suffix: 'Use the ATOM Staking Calculator to compare staking versus holding with your specific amount and timeline.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking rewards, network inflation rates, and validator performance can change over time, and the decision to stake or hold should reflect your own goals, risk tolerance, and liquidity needs.'
  }
];
