// New article: atom-liquid-staking-vs-native-staking-pros-cons-risks
// Category: Risk & Safety
// Format matches the exact ContentBlock schema from src/types.ts.
// TARGET: 2,500-3,000 actual rendered words.
//
// ARTICLE METADATA (for articles.ts):
// title: 'ATOM Liquid Staking vs Native Staking: Pros, Cons, and Risks'
// slug: 'atom-liquid-staking-vs-native-staking-pros-cons-risks'
// date: 'October 20, 2026'
// author: 'ATOM Staking Calculator Team'
// readTime: '11 min read'
// category: 'Risk & Safety'
// seoTitle: 'ATOM Liquid Staking vs Native Staking: Key Differences'
// seoDescription: 'Compare ATOM liquid staking and native staking, including liquidity, governance, fees, and the risks of each approach.'
// ogImage: '' (uses site default)
// featured: false
//
// Bolt: verify export name pattern against an existing article's import in
// EducationPage.tsx before naming it. Append metadata to articles.ts array
// (don't re-read/re-print other articles). Create content file at
// src/content/atom-liquid-staking-vs-native-staking-pros-cons-risks.ts
// Wire EducationPage.tsx via ArticleBody. Run npm run build:prerender.
//
// This article links to these existing slugs. Confirm every one exists in
// articles.ts before wiring, and tell me if any are missing:
//   what-is-cosmos-atom-staking-beginner-guide-2026
//   atom-staking-risks-slashing-and-unbonding-period-explained
//   how-cosmos-hub-governance-works-voting-with-staked-atom
//   atom-staking-tax-implications-and-reporting-guide
//   atom-staking-vs-just-holding-is-it-worth-it
//
// WORD COUNT: Insert this content exactly as written. Do not pad, shorten, or
// paraphrase to hit any particular number. Report the honest actual count.

import { ContentBlock } from '../types';

export const atomLiquidStakingVsNativeStakingProsConsRisks: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Native staking is the standard way to earn rewards on ATOM, but it has one well-known drawback: once you delegate, your tokens are locked in the sense that getting them back takes 21 days. Liquid staking was created to soften that tradeoff. It gives you a token that represents your staked ATOM, which you can hold, trade, or use elsewhere while the underlying ATOM keeps earning rewards. That flexibility comes with extra risks and costs that native staking does not have. This guide explains how each approach works, compares them side by side, and lists the questions worth answering before you use any liquid staking service.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'Liquid staking providers, supply caps, and fees change over time. The providers named in this guide are examples that have offered liquid staked ATOM, not recommendations, so check each one\'s current status, fees, and security record yourself before using it.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. A Quick Recap of Native Staking'
  },
  {
    type: 'paragraph',
    text: 'With native staking, you delegate ATOM from your own wallet to a validator on the Cosmos Hub. Your tokens stay under your control, your delegation earns a share of network rewards minus the validator\'s commission, and your staked ATOM carries governance voting weight. In exchange, the tokens cannot be spent or transferred while staked, and unstaking starts a mandatory 21-day unbonding period during which they earn nothing and cannot move.'
  },
  {
    type: 'internal-link',
    prefix: 'If you are new to the basics, start with our',
    linkText: 'beginner guide to Cosmos ATOM staking',
    suffix: 'before comparing it with liquid staking.',
    articleSlug: 'what-is-cosmos-atom-staking-beginner-guide-2026'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '2. What Liquid Staking Is'
  },
  {
    type: 'paragraph',
    text: 'Liquid staking separates two things that native staking bundles together: earning staking rewards and keeping your tokens locked. When you liquid stake, your ATOM is staked with validators on your behalf, and you receive a liquid staking token in return. That token represents your claim on the staked ATOM plus the rewards it earns. Because the token is a normal transferable asset, you can hold it, trade it, or use it in decentralized finance while the ATOM behind it continues to earn staking rewards.'
  },
  {
    type: 'paragraph',
    text: 'On the Cosmos Hub, liquid staked ATOM has been offered by several independent protocols. Stride (stATOM), Persistence\'s pSTAKE (stkATOM), and Quicksilver (qATOM) are among the providers that have offered it. Each one runs its own system for staking your ATOM and issuing the token, so their fees, risks, and track records differ.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'The Liquid Staking Module'
  },
  {
    type: 'paragraph',
    text: 'In September 2023, the Hub\'s Gaia v12 upgrade added a feature called the Liquid Staking Module, usually shortened to LSM. Before it existed, anyone who wanted liquid staked ATOM had to unstake first and wait out the unbonding period, which meant giving up weeks of rewards. The LSM lets people convert ATOM that is already staked into a liquid form without that wait.'
  },
  {
    type: 'paragraph',
    text: 'The module also includes protections because liquid staking can concentrate voting power. The Hub introduced a cap on how much ATOM could be liquid staked, set at 25% of staked ATOM at launch and adjustable through governance, with the stated aim of stopping liquid staking providers from collectively gaining a third of the Hub\'s voting power. It also requires validators who want to receive liquid staking delegations to put up a self-bond of their own ATOM. Check current values before relying on either figure, since governance can change them.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '3. How Liquid Staking Works in Practice'
  },
  {
    type: 'paragraph',
    text: 'The details depend on the provider, but the process generally follows the same outline.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Choose a provider.', text: 'Research the protocol\'s fees, security audits, track record, and how long it has operated before depositing anything.' },
      { label: 'Deposit or convert your ATOM.', text: 'You either send ATOM to the provider, or, where the LSM route is supported, convert ATOM you have already staked.' },
      { label: 'Receive a liquid staking token.', text: 'The token appears in your wallet and represents your share of the staked ATOM and its rewards.' },
      { label: 'Hold it or use it.', text: 'Many holders simply keep the token and let its value grow as rewards accrue. Others use it in DeFi, which adds further risk on top of the liquid staking itself.' },
      { label: 'Exit when you choose to.', text: 'You can usually sell the token on a market or redeem it through the provider, and the two routes have different speeds and costs.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Unlike native staking, rewards are usually not paid out to you as separate tokens that you have to claim and restake. In many designs, the token itself gradually becomes worth more ATOM as rewards accumulate, which means compounding happens automatically inside the token rather than through manual claiming.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '4. Liquid Staking vs Native Staking Side by Side'
  },
  {
    type: 'table',
    headers: ['Factor', 'Native Staking', 'Liquid Staking'],
    rows: [
      ['Custody', 'Your own wallet', 'A protocol handles the staking; you hold a token'],
      ['Liquidity', 'Locked; 21-day unbonding to exit', 'Token can usually be traded at any time'],
      ['Governance vote', 'Your own votes on Hub proposals', 'Usually not exercised by you personally on the Hub'],
      ['Compounding', 'Manual claim and restake', 'Often built into the token\'s value'],
      ['Extra fees', 'Validator commission only', 'Validator commission plus the provider\'s own fee'],
      ['Main added risks', 'Slashing and validator choice', 'Smart contract, provider, and price-gap risks on top of slashing']
    ],
    highlightColumn: 0
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '5. The Real Benefits of Liquid Staking'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Flexibility without giving up rewards.', text: 'Your ATOM keeps earning while you hold a token you can sell if your plans change, instead of waiting through the unbonding period.' },
      { label: 'Use in DeFi.', text: 'Liquid staking tokens can often be used as collateral, provided to liquidity pools, or deployed in other strategies, letting the same capital do two jobs.' },
      { label: 'Automatic compounding.', text: 'When rewards are built into the token\'s value, there is no need to claim and restake manually or pay repeated gas fees to compound.' },
      { label: 'Simplicity for some users.', text: 'Holding one token can be easier to manage than tracking several delegations, particularly for people who do not want to follow validator performance.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'The core appeal of liquid staking is optionality: you keep earning rewards while keeping a way out that does not depend on a 21-day wait. The price of that optionality is additional risk and an additional layer of fees.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '6. The Risks Specific to Liquid Staking'
  },
  {
    type: 'paragraph',
    text: 'Native staking already carries slashing and unbonding risk. Liquid staking keeps those risks, because real ATOM is still staked with real validators, and adds several of its own.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Smart contract and protocol risk.', text: 'The provider\'s code and infrastructure sit between you and your ATOM. A bug, exploit, or operational failure could affect the token\'s value or your ability to redeem it, a risk that does not exist when you delegate directly.' },
      { label: 'Price gap (depeg) risk.', text: 'The token is meant to track the value of the ATOM behind it, but it trades on markets. In stressed conditions it can trade below the value of its underlying ATOM, which matters if you need to sell quickly.' },
      { label: 'Redemption delays.', text: 'Selling the token on a market can be quick, but redeeming through the provider can involve waiting, since the underlying ATOM may still need to unbond.' },
      { label: 'Layered DeFi risk.', text: 'Using the token in lending or liquidity strategies adds the risks of those platforms on top, and losses there are separate from the staking itself.' },
      { label: 'Validator selection by someone else.', text: 'The provider chooses which validators receive the stake, so you lose the direct control native staking gives you over where your ATOM is delegated.' },
      { label: 'Concentration of voting power.', text: 'Large amounts of liquid staked ATOM can concentrate influence in a few protocols, which is the reason the Hub placed a cap on it in the first place.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'Slashing and unbonding still apply underneath liquid staking, so it helps to understand them first. See our guide on',
    linkText: 'slashing and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '7. How Fees Change What You Actually Earn'
  },
  {
    type: 'paragraph',
    text: 'Liquid staking providers generally take a fee for running the service, usually as a share of the rewards. That fee sits on top of the validator commission already deducted from native staking rewards, so the net return you keep is lower than the same stake delegated directly, all else being equal. The illustration below uses a hypothetical provider fee purely to show the effect. Real fees vary by provider and can change.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration: 1,000 ATOM at a 15% network APR with a 5% validator commission, over one year before compounding. The liquid staking provider fee here is a hypothetical 10% of rewards.',
    rows: [
      { rate: 'Native staking (5% validator commission)', net: '142.5 ATOM/year', color: 'emerald' },
      { rate: 'Liquid staking (same commission, plus hypothetical 10% provider fee)', net: '128.25 ATOM/year', color: 'amber' },
      { rate: 'Difference from the provider fee', net: '14.25 ATOM/year', color: 'cyan' }
    ],
    footnote: 'Automatic compounding inside a liquid staking token can recover some of this gap over time, but whether it fully offsets the extra fee depends on the provider\'s actual fee and how often you would compound manually. Always compare the provider\'s current published fee against your own native staking numbers.'
  },
  {
    type: 'calculator-cta',
    prefix: 'To test your own numbers with different commission rates and compounding frequencies,',
    suffix: 'use the ATOM Staking Calculator.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '8. What an Exit Actually Looks Like'
  },
  {
    type: 'paragraph',
    text: 'The clearest way to see the difference between the two approaches is to imagine needing your money back at a bad moment, for example during a sharp market drop. The first reaction is usually to think of liquid staking as an instant exit and native staking as a trap. The reality is more nuanced, because each route has its own catch.'
  },
  {
    type: 'table',
    headers: ['Exit Route', 'Speed', 'The Main Catch'],
    rows: [
      ['Native unstake', '21 days', 'No rewards and no access to the tokens during the wait, while the price keeps moving'],
      ['Sell a liquid staking token on a market', 'Usually fast', 'The market price can sit below the value of the underlying ATOM, especially in stressed conditions'],
      ['Redeem a liquid staking token through the provider', 'Can involve a wait', 'Depends on the provider\'s process, and the underlying ATOM may still need to unbond']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'In calm conditions, selling a liquid staking token on a market is usually the fastest way out, and the price tends to stay close to the value of the ATOM behind it. The risk appears when many people want to leave at once. A token that normally trades near its backing value can drift below it, so the speed of the exit can come at the cost of a worse price. With native staking, you take no such discount, but you also cannot act for three weeks.'
  },
  {
    type: 'paragraph',
    text: 'Neither route is strictly better. If your biggest worry is being unable to react quickly, liquid staking addresses it at the cost of price and provider risk. If your biggest worry is getting back exactly the ATOM you put in, native staking is more direct, as long as you can live with the wait.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '9. What Happens to Your Governance Vote'
  },
  {
    type: 'paragraph',
    text: 'With native staking, your delegated ATOM carries voting weight on Hub proposals, and you can vote yourself or let your validator vote for you. Liquid staking changes this. Because the provider is the one delegating the underlying ATOM, holding the liquid staking token does not usually give you a personal vote on Cosmos Hub proposals. How the underlying stake is voted depends on the provider\'s own policy.'
  },
  {
    type: 'internal-link',
    prefix: 'To see what you would be giving up, read our guide on',
    linkText: 'how Cosmos Hub governance works',
    suffix: '.',
    articleSlug: 'how-cosmos-hub-governance-works-voting-with-staked-atom'
  },
  {
    type: 'paragraph',
    text: 'For holders who care about the network\'s direction, this is a real cost. For holders who treat ATOM purely as an investment and have never voted, it may matter very little. It is worth deciding which group you belong to before choosing.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '10. A Note on Taxes'
  },
  {
    type: 'paragraph',
    text: 'Moving from ATOM into a liquid staking token can be treated differently from simply delegating. In some jurisdictions, swapping one asset for another is a taxable disposal, while delegating your own tokens to a validator is generally not. Because tax rules vary by country and keep changing, whether converting to a liquid staking token triggers a taxable event for you is something to confirm with a qualified professional before you do it.'
  },
  {
    type: 'internal-link',
    prefix: 'For the general concepts behind staking and tax records, see our guide on',
    linkText: 'ATOM staking tax implications and reporting',
    suffix: '.',
    articleSlug: 'atom-staking-tax-implications-and-reporting-guide'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '11. Which Approach Fits Which Situation'
  },
  {
    type: 'table',
    headers: ['Your Situation', 'Likely Better Fit'],
    rows: [
      ['You want the simplest, lowest-risk way to earn rewards and keep governance rights', 'Native staking'],
      ['You expect to hold for the long term and rarely need to move the tokens', 'Native staking'],
      ['You want your staked capital to stay usable in DeFi', 'Liquid staking, with careful provider research'],
      ['You value the ability to exit quickly over the lowest possible fees', 'Liquid staking, accepting the added risks'],
      ['You are new to crypto and still learning wallet basics', 'Native staking, since it has fewer moving parts']
    ],
    highlightColumn: 1
  },
  {
    type: 'internal-link',
    prefix: 'If you are still deciding whether to stake at all, see our comparison of',
    linkText: 'staking versus just holding ATOM',
    suffix: '.',
    articleSlug: 'atom-staking-vs-just-holding-is-it-worth-it'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '12. Questions to Ask Before Using a Liquid Staking Provider'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Has the protocol been audited, and by whom?', text: 'Independent audits do not guarantee safety, but a protocol without any is a warning sign.' },
      { label: 'How long has it operated?', text: 'A longer track record with real money at stake tells you more than a polished website.' },
      { label: 'What exactly is the fee?', text: 'Find out how it is charged, whether it can change, and how it compares with simply paying a validator commission.' },
      { label: 'How do I get out, and how fast?', text: 'Understand both the market route and the provider\'s own redemption process, including any waiting period or cost.' },
      { label: 'How does the token trade relative to its underlying ATOM?', text: 'A persistent gap between the token\'s market price and its backing is worth noticing before you buy in.' },
      { label: 'Who chooses the validators, and how?', text: 'A provider that spreads stake across many reputable validators is better for network health than one that concentrates it.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '13. Common Mistakes to Avoid'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Assuming the token is always worth exactly one ATOM.', text: 'A liquid staking token usually tracks ATOM plus accumulated rewards, and its market price can differ from that backing value, particularly under stress.' },
      { label: 'Ignoring the provider fee when comparing yields.', text: 'A headline reward rate means little until you subtract both validator commission and the provider\'s own fee.' },
      { label: 'Stacking strategies you do not fully understand.', text: 'Using a liquid staking token as collateral or in a liquidity pool adds the risks of each extra layer, and losses at those layers are separate from the staking.' },
      { label: 'Treating popularity as proof of safety.', text: 'A well-known provider can still suffer a technical failure. Audits, track record, and transparency matter more than name recognition.' },
      { label: 'Believing liquid staking removes slashing risk.', text: 'Real ATOM is still staked with real validators underneath, so validator misbehavior can still affect the value behind your token.' },
      { label: 'Committing everything at once.', text: 'Many people test a provider with a small amount first, including the exit process, before deciding whether to trust it with more.' }
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
        question: 'Is liquid staking safer than native staking?',
        answer: 'Generally no. It keeps the slashing and validator risks of native staking and adds smart contract, provider, and price-gap risks on top. Its advantage is flexibility, not safety.'
      },
      {
        question: 'Do I still earn staking rewards with liquid staking?',
        answer: 'Yes, the underlying ATOM keeps earning rewards, but the provider usually takes a fee, so your net return is typically lower than the same amount staked natively with the same validator.'
      },
      {
        question: 'Can I vote on Cosmos Hub proposals with liquid staked ATOM?',
        answer: 'Usually not personally. Because the provider delegates the underlying ATOM, how that stake is voted depends on the provider\'s own policy rather than on your choice.'
      },
      {
        question: 'Does liquid staking avoid the 21-day unbonding period?',
        answer: 'It lets you exit by selling the token on a market instead of waiting. Redeeming directly through the provider can still involve a wait, because the underlying ATOM may need to unbond.'
      },
      {
        question: 'Is it better to use liquid staking or native staking as a beginner?',
        answer: 'Most beginners are better served by native staking first. It has fewer moving parts and fewer risks, and you can always explore liquid staking later once you understand the basics.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Native staking locks your ATOM behind a 21-day unbonding period, while liquid staking gives you a tradable token that represents your staked ATOM.',
      'The Hub\'s Liquid Staking Module, launched with Gaia v12, lets already-staked ATOM be converted to a liquid form without waiting, and it includes a governance-adjustable cap.',
      'Liquid staking adds smart contract, provider, price-gap, and redemption risks on top of the slashing risk that native staking already has.',
      'Provider fees reduce your net return compared with native staking, so compare the real numbers.',
      'Holding a liquid staking token usually means you do not vote on Hub proposals yourself.',
      'For most beginners, native staking is the simpler and lower-risk starting point.'
    ]
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial, tax, or investment advice. Liquid staking involves additional risks, including loss of funds, and providers, fees, and network parameters change over time. Always do your own research and consider speaking with a qualified professional.'
  }
];
