import { ContentBlock } from '../types';

export const cosmosValidatorCommissionExplained: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Validator commission is the single biggest factor most ATOM stakers overlook, even though it directly determines how much of your staking reward you actually keep. Every validator on the Cosmos Hub sets its own commission rate, and understanding how that rate works can mean the difference between an average return and an optimized one. This guide explains exactly what validator commission is, how it\'s calculated, why rates vary so widely, and how to use it to your advantage when choosing where to delegate.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'What Is Validator Commission?'
  },
  {
    type: 'paragraph',
    text: 'When you delegate ATOM to a validator, that validator does the technical work of running infrastructure, signing blocks, and helping secure the Cosmos Hub network. In exchange for that work, the validator takes a percentage cut of the staking rewards your delegation earns — this cut is the commission.'
  },
  {
    type: 'paragraph',
    text: 'The rest of the reward — the portion after commission is deducted — is paid out to you, the delegator. Commission is set individually by each validator and is publicly visible before you delegate, so it\'s always a known, transparent number rather than a hidden fee.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'How Commission Is Calculated'
  },
  {
    type: 'paragraph',
    text: 'The math is straightforward:'
  },
  {
    type: 'formula',
    text: 'Your net reward = Gross staking reward × (1 − commission rate)'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'A 5% commission means you keep 95% of the gross reward. A 10% commission means you keep 90%. The difference sounds small in percentage terms, but it compounds meaningfully over time, especially with larger stakes or longer holding periods.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: 'Example Calculation: Commission in Practice'
  },
  {
    type: 'example-calculation',
    introText: 'Assume the network-wide staking APR is 15%, and you\'re staking 1,000 ATOM.',
    rows: [
      { rate: '5% commission validator', net: '142.5 ATOM/year', color: 'emerald' },
      { rate: '10% commission validator', net: '135 ATOM/year', color: 'cyan' },
      { rate: '20% commission validator', net: '120 ATOM/year', color: 'amber' }
    ],
    footnote: 'That\'s a difference of up to 22.5 ATOM per year between the lowest and highest commission validator in this example — purely from commission rate, with everything else held constant.'
  },
  {
    type: 'paragraph',
    text: 'To see how this plays out with your own staking amount and a specific validator\'s commission rate, run the numbers through the ATOM Staking Calculator.'
  },
  {
    type: 'calculator-cta',
    prefix: 'Ready to run your own numbers?',
    suffix: 'Use our live ATOM Staking Calculator to compare commission rates side by side.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: 'Typical Commission Rates on the Cosmos Hub'
  },
  {
    type: 'paragraph',
    text: 'Commission rates across Cosmos Hub validators typically range from 0% to 20%, though most established validators sit somewhere between 5% and 10%.'
  },
  {
    type: 'table',
    headers: ['Commission Range', 'What It Usually Means'],
    rows: [
      ['0%', 'Rare — often unsustainable long-term, or a temporary promotional rate'],
      ['1–5%', 'Common among competitive, established validators'],
      ['5–10%', 'The most typical range for reliable, professional validator operations'],
      ['10–20%', 'Higher end — sometimes justified by additional services, sometimes not'],
      ['20%+', 'Uncommon — worth extra scrutiny before delegating']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'A validator like Cosmostation, for example, has historically run commission rates in the low-to-mid single digits, which is fairly representative of a competitive, established operator. Rates can and do change over time, so it\'s worth checking a validator\'s current commission before delegating rather than relying on rates you\'ve seen quoted elsewhere.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: 'Why Commission Rates Vary So Much'
  },
  {
    type: 'paragraph',
    text: 'Validators set commission based on several factors:'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Infrastructure and operating costs.', text: 'Running reliable validator infrastructure — redundant servers, monitoring, security — costs money. Some validators price that in through commission rather than external funding.' },
      { label: 'Competitive positioning.', text: 'Newer validators sometimes set lower commission temporarily to attract delegators and build stake before raising rates later.' },
      { label: 'Business model.', text: 'Some validators are backed by exchanges, foundations, or businesses with other revenue streams, letting them run leaner commission rates than an independent operator might need.' },
      { label: 'Perceived value-add.', text: 'A minority of validators offer extra services — governance participation summaries, community support, educational content — and price commission slightly higher to reflect that.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: 'Should You Always Choose the Lowest Commission?'
  },
  {
    type: 'paragraph',
    text: 'Not necessarily. Commission is important, but it shouldn\'t be the only factor in your decision.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'The cheapest validator isn\'t automatically the best choice if it has poor uptime, inconsistent performance, or represents a security risk to network decentralization.'
  },
  {
    type: 'paragraph',
    text: 'A validator charging 2% but missing blocks regularly due to downtime can actually cost you more in missed rewards than a well-run validator charging 6%. Similarly, if a low-commission validator already holds a large share of total network stake, delegating more to it can work against network decentralization — a factor many stakers care about beyond pure yield.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of what else to evaluate alongside commission — uptime, decentralization, governance participation — see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: 'Can Validators Change Their Commission Rate?'
  },
  {
    type: 'paragraph',
    text: 'Yes. Validators can adjust their commission rate, though the Cosmos Hub protocol includes a safeguard: a validator can only increase their commission by a limited amount within a 24-hour period (governed by their "max change rate" parameter, set when the validator was created). This prevents a validator from suddenly spiking their commission from 5% to 50% overnight without delegators having a chance to react.'
  },
  {
    type: 'paragraph',
    text: 'That said, rates do shift over time, and it\'s good practice to periodically check the commission rate of validators you\'ve delegated to, rather than assuming it\'s fixed forever.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: 'Commission and Compounding: A Long-Term View'
  },
  {
    type: 'paragraph',
    text: 'Commission\'s impact grows more noticeable the longer you stake and the more frequently you compound. Because your net reward (after commission) is what actually gets restaked or accumulates, a lower commission means a slightly larger base compounding forward each cycle.'
  },
  {
    type: 'paragraph',
    text: 'Over a single year, the difference between a 5% and 10% commission validator might only be a few percentage points of total yield. Over five or ten years of compounding, that gap widens. If you\'re planning a long-term ATOM accumulation strategy, commission is worth weighing carefully rather than treating as a minor detail.'
  },
  {
    type: 'internal-link',
    prefix: 'Our guide on',
    linkText: 'staking APR vs APY and the mathematics of compounding',
    suffix: 'explains how compounding frequency interacts with your net rate in more depth.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom'
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
        question: 'What is a typical validator commission for Cosmos ATOM staking?',
        answer: 'Most established validators charge somewhere between 5% and 10%, though rates as low as 1% and as high as 20% do exist across the network.'
      },
      {
        question: 'Does lower validator commission always mean higher rewards?',
        answer: 'Generally yes, in terms of the percentage you keep from a given gross reward — but validator reliability (uptime, avoiding slashing events) also affects your actual realized rewards, so commission shouldn\'t be evaluated in isolation.'
      },
      {
        question: 'Can a validator\'s commission rate change after I delegate?',
        answer: 'Yes. Validators can adjust commission over time, subject to a protocol-level limit on how much they can raise it within a 24-hour window. It\'s worth periodically checking your validator\'s current rate.'
      },
      {
        question: 'Why do delegators often choose validators with lower commission?',
        answer: 'Because commission is deducted directly from staking rewards, a lower rate means a delegator keeps a larger share of the gross reward — all else being equal, this makes lower-commission validators more attractive purely from a yield perspective.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Validator commission is the percentage of your staking reward a validator keeps for running their infrastructure.',
      'Typical Cosmos Hub commission rates range from 0% to 20%, with most established validators between 5% and 10%.',
      'Commission directly reduces your net reward, and the impact compounds over longer staking periods.',
      'Commission isn\'t the only factor — uptime, reliability, and decentralization matter too.',
      'Validators can change commission rates over time, within protocol-defined limits, so it\'s worth periodic review.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Use the',
    suffix: 'to model your expected net rewards under different commission rates and staking amounts, so you can compare validators using your own real numbers.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking rewards, validator commission rates, and network conditions can change over time.'
  }
];
