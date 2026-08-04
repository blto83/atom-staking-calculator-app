// Replacement content for: atom-staking-risks-slashing-and-unbonding-period-explained
// Full rewrite — expanded from 181 words to ~1,900 words
// Format: ContentBlock[] matching the existing schema in src/types.ts
// Bolt: replace the entire contents of src/content/atom-staking-risks-slashing-and-unbonding-period-explained.ts
// with this array. Do not modify articles.ts metadata (title, slug, date, category, SEO fields stay as-is).

import { ContentBlock } from '../types';

export const content: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Staking ATOM earns you rewards for helping secure the Cosmos Hub network, but that reward comes attached to real, well-defined risks. Two of the most important to understand before you delegate are slashing — a protocol-level penalty for validator misbehavior — and the 21-day unbonding period that governs how quickly you can access your funds after unstaking. Neither risk is hypothetical, and both are worth understanding in detail rather than glossing over.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'shield-alert',
    text: '1. What Is Slashing?'
  },
  {
    type: 'paragraph',
    text: 'Slashing is a punishment mechanism built directly into the Cosmos Hub protocol. It exists to discourage validators from acting maliciously or carelessly, since their behavior directly affects network security. When a validator is slashed, a percentage of the ATOM delegated to that validator — including tokens delegated by regular stakers, not just the validator\'s own stake — is permanently destroyed (burned). This is why validator selection matters: as a delegator, you share in the consequences of your validator\'s actions, not just their rewards.'
  },
  {
    type: 'paragraph',
    text: 'There are two distinct types of slashing on the Cosmos Hub, and they carry very different severity.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'Double-Signing (Equivocation)'
  },
  {
    type: 'paragraph',
    text: 'Double-signing happens when a validator signs two conflicting blocks at the same block height — effectively trying to validate two different versions of the blockchain at once. This is treated as the most serious offense a validator can commit, since it directly threatens the network\'s consensus integrity. If double-signing is detected, the validator is immediately and permanently removed from the active set (a process called "tombstoning" — the validator can never rejoin under that same validator key), and a significant portion of all delegated ATOM is slashed. On the Cosmos Hub, this penalty is set at 5% of delegated stake.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'A 5% double-sign slash isn\'t something that happens to the validator alone — every delegator sharing that validator loses 5% of their delegated ATOM too, proportionally. This is why choosing a validator with strong operational security (proper key management, redundant infrastructure) matters as much as chasing a low commission rate.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'Downtime'
  },
  {
    type: 'paragraph',
    text: 'The second, much less severe category is downtime slashing. If a validator fails to sign a sufficiently high percentage of blocks within a rolling window (missing more than roughly 5% of the last 10,000 blocks), the protocol considers them unreliable and takes action. Unlike double-signing, downtime slashing is minor — typically around 0.01% of delegated stake — but it comes with an additional consequence: the validator is "jailed," meaning they\'re temporarily removed from the active validator set.'
  },
  {
    type: 'paragraph',
    text: 'While a validator is jailed, delegations to that validator earn zero rewards until the validator operator manually unjails their node and it resumes normal participation. For a delegator, this doesn\'t cause direct token loss beyond the small slash, but it does mean lost opportunity cost — your ATOM sits idle instead of earning rewards during the jailed period.'
  },
  {
    type: 'table',
    headers: ['Offense', 'Slash Amount', 'Additional Consequence'],
    rows: [
      ['Double-signing', '5% of delegated stake', 'Validator permanently tombstoned'],
      ['Downtime (missed blocks)', '~0.01% of delegated stake', 'Validator jailed until manually restored']
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '2. The 21-Day Unbonding Period'
  },
  {
    type: 'paragraph',
    text: 'When you decide to undelegate (unstake) your ATOM, the tokens don\'t become available immediately. The Cosmos Hub enforces a mandatory 21-day unbonding period between the moment you initiate an unstake and the moment your ATOM becomes liquid again.'
  },
  {
    type: 'paragraph',
    text: 'This delay is a deliberate security feature, not a technical limitation. Proof-of-stake networks are vulnerable to a specific attack pattern where a malicious validator (or group of validators) could theoretically attack the network and then instantly withdraw their stake to avoid any consequences. The unbonding period closes that loophole — if a validator or delegator misbehaves and gets slashed, there\'s still a stake at risk during that 21-day window, giving the network a way to enforce accountability.'
  },
  {
    type: 'bullet-list',
    items: [
      'Your ATOM stops earning any staking rewards the moment you initiate undelegation — the clock starts immediately, not at the end of the 21 days.',
      'Your ATOM cannot be transferred, traded, or moved during the unbonding period, regardless of which wallet or exchange you used to stake.',
      'You remain exposed to slashing risk during unbonding — if the validator you were delegated to gets slashed for an offense that occurred before you undelegated, your unbonding stake can still be affected.',
      'At the end of the 21 days, your ATOM is automatically released to your wallet — no manual claim step is required.'
    ]
  },
  {
    type: 'heading',
    level: 3,
    text: 'Redelegation as an Alternative'
  },
  {
    type: 'paragraph',
    text: 'If your goal is simply to switch from one validator to another — rather than to fully exit staking — the Cosmos Hub offers a redelegation feature that skips the 21-day unbonding wait entirely. Redelegating moves your stake directly from one validator to another without an idle period. The tradeoff: you can only redelegate the same tokens once every 21 days, and redelegating does not give you liquid ATOM — your tokens remain staked the entire time, just with a different validator.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-down',
    text: '3. Price Volatility Risk During Unbonding'
  },
  {
    type: 'paragraph',
    text: 'Because your ATOM is completely illiquid for 21 days once you begin unstaking, you\'re also exposed to whatever happens to ATOM\'s market price during that window — and you have no way to react. If the price drops significantly partway through your unbonding period, you cannot sell, hedge, or exit early. This is sometimes called "price risk" or "opportunity cost risk," and it\'s distinct from slashing risk, though the two compound each other during the same window.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Because of this 21-day lock, unstaking ATOM should be a deliberate decision, not a quick reaction to short-term price movement. By the time your tokens are liquid again, the market condition that motivated the decision may have already changed.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'shield-check',
    text: '4. How to Reduce These Risks'
  },
  {
    type: 'paragraph',
    text: 'Neither slashing risk nor unbonding illiquidity can be eliminated entirely — they\'re built into how the Cosmos Hub secures itself. But there are concrete steps that meaningfully reduce your exposure to both.'
  },
  {
    type: 'bullet-list',
    items: [
      'Choose validators with a strong, established uptime track record rather than the newest or highest-APR option — consistent uptime is the best predictor of avoiding downtime slashing.',
      'Diversify your stake across multiple reputable validators instead of concentrating it with one. This limits how much of your total stake is exposed if any single validator is slashed for double-signing.',
      'Avoid validators running unusual or experimental infrastructure setups without a public track record — operational security failures are the leading cause of accidental double-signing.',
      'Plan your unstaking decisions in advance rather than reactively, since you\'ll be committed to the full 21-day window with no way to exit early.',
      'If you only want to switch validators (not exit staking entirely), use redelegation instead of a full unstake-then-restake cycle, avoiding an unnecessary unbonding wait.'
    ]
  },
  {
    type: 'paragraph',
    text: 'For a deeper look at how to evaluate validators specifically — beyond just avoiding slashing risk — see our guide on choosing the right Cosmos validator.'
  },
  {
    type: 'internal-link',
    text: 'How to Choose the Right Cosmos Validator: 5 Core Metrics',
    slug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'paragraph',
    text: 'If you\'re weighing whether self-custody staking or exchange-based staking better fits your risk tolerance, our comparison of the two approaches covers custody-related risk in more depth alongside the network-level risks discussed here.'
  },
  {
    type: 'internal-link',
    text: 'Self-Custody vs Exchange Staking: Which Is Safer for ATOM Holders?',
    slug: 'self-custody-vs-exchange-staking-atom-which-is-safer'
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
        question: 'How long is the Cosmos Hub unbonding period?',
        answer: 'The unbonding period is 21 days. Once you initiate an unstake, your ATOM is locked for this full duration before becoming liquid again, with no way to shorten or bypass it.'
      },
      {
        question: 'Does ATOM earn rewards during the unbonding period?',
        answer: 'No. Rewards stop accruing the moment you initiate undelegation, not at the end of the 21 days. Your ATOM sits idle and non-earning for the entire unbonding window.'
      },
      {
        question: 'Can my ATOM be slashed during the unbonding period?',
        answer: 'Yes. If the validator you were delegated to is found to have committed a slashable offense that occurred before you undelegated, ATOM still in the unbonding process can be affected, even though it\'s no longer actively staked.'
      },
      {
        question: 'What is the difference between slashing for double-signing and downtime?',
        answer: 'Double-signing is treated as a severe, intentional-or-critical offense, resulting in a 5% slash and permanent removal (tombstoning) of the validator. Downtime is a much smaller penalty (around 0.01%) with temporary jailing rather than permanent removal.'
      },
      {
        question: 'Can I avoid the 21-day unbonding period if I just want to switch validators?',
        answer: 'Yes — use redelegation instead of a full unstake. Redelegating moves your stake to a new validator without the 21-day liquidity wait, though your tokens remain staked (not liquid) throughout.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Slashing penalizes validator misbehavior, and delegators share proportionally in the loss — not just the validator.',
      'Double-signing results in a 5% slash and permanent validator removal; downtime results in a much smaller ~0.01% slash and temporary jailing.',
      'Unstaking triggers a mandatory 21-day unbonding period during which your ATOM earns no rewards and cannot be transferred or traded.',
      'You remain exposed to slashing risk even during unbonding if your validator is penalized for a prior offense.',
      'Redelegation lets you switch validators without triggering the 21-day unbonding wait, as long as you\'re not trying to fully exit staking.',
      'Choosing validators with strong uptime and diversifying across several reputable validators are the most effective ways to reduce your exposure to these risks.'
    ]
  },
  {
    type: 'paragraph',
    text: 'Understanding these risks doesn\'t mean staking ATOM is unsafe — it means going in with realistic expectations about timing, liquidity, and validator selection. Use the calculator below to model your expected net rewards after accounting for your chosen validator\'s commission, and plan your unstaking timeline with the 21-day window in mind.'
  },
  {
    type: 'calculator-cta',
    text: 'Calculate your ATOM staking rewards now'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking rewards, slashing parameters, and unbonding periods are governed by the Cosmos Hub protocol and can change with network upgrades or governance decisions.'
  }
];
