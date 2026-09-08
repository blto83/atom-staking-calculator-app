import { ContentBlock } from '../types';

export const howToRedelegateAtomSwitchValidatorsWithoutLosingRewards: ContentBlock[] = [
  {
    type: 'intro',
    text: 'If you want to switch which validator secures your ATOM — because commission rates changed, uptime dropped, or you simply found a better option — you don\'t need to unstake and wait through the 21-day unbonding period. Redelegation lets you move your stake directly to a new validator while it stays actively earning rewards the entire time. This guide covers exactly how redelegation works, its one key limitation, and when it makes sense to use it.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: 'What Is Redelegation?'
  },
  {
    type: 'paragraph',
    text: 'Redelegation is a Cosmos Hub feature that moves your delegated ATOM from one validator directly to another, without passing through the unbonding period. Unlike a full unstake, your tokens never become liquid or stop earning rewards during a redelegation — they transition from being staked with one validator to being staked with another in a single transaction.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Redelegation is not the same as unstaking and restaking. Unstaking triggers a 21-day unbonding period with zero rewards; redelegation keeps your ATOM actively staked and earning the entire time.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: 'How Redelegation Works: Step by Step'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Open your wallet\'s staking interface.', text: 'In Keplr, Leap, or Cosmostation, navigate to your current delegation for the validator you want to move away from.' },
      { label: 'Select "Redelegate" rather than "Undelegate."', text: 'This option moves your stake directly to a new validator instead of unstaking it entirely.' },
      { label: 'Choose the destination validator.', text: 'Select the validator you want to switch to, using the same evaluation criteria you\'d use for any new delegation.' },
      { label: 'Enter the amount and confirm.', text: 'You can redelegate your full delegation or just a portion of it to a new validator.' },
      { label: 'Pay the small network gas fee.', text: 'Redelegation is a standard transaction and requires a small amount of liquid ATOM for gas, same as any other on-chain action.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Once confirmed, your ATOM immediately begins earning rewards under the new validator — there\'s no gap in earning, unlike a full unstake-then-restake cycle.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: 'The One Real Limitation: The 21-Day Redelegation Cooldown'
  },
  {
    type: 'paragraph',
    text: 'Redelegation has a single significant restriction: for any given delegation, you can only redelegate it once every 21 days. This isn\'t the same as the unbonding period — your ATOM stays staked and earning the entire time — but you cannot chain multiple redelegations back to back on the same tokens within that window.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'This cooldown exists to prevent a specific attack pattern where stake could be rapidly moved between validators to avoid accountability. In normal use, it rarely matters — most stakers don\'t need to switch validators more than once every few weeks anyway.'
  },
  {
    type: 'paragraph',
    text: 'There\'s also a related technical rule: you cannot redelegate ATOM that itself arrived via a redelegation that\'s still within its own cooldown window (sometimes called a "redelegation chain" restriction). In practice, this only becomes relevant if you\'re redelegating very frequently, which is uncommon for most stakers.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: 'When Redelegation Makes Sense'
  },
  {
    type: 'table',
    headers: ['Situation', 'Redelegate?'],
    rows: [
      ['Your validator raised its commission significantly', 'Yes — good reason to move to a lower-commission option'],
      ['Your validator has degrading uptime or was jailed', 'Yes — reduces future downtime/slashing exposure'],
      ['You found a validator better supporting decentralization', 'Yes — supports network health at little cost to you'],
      ['You need liquid ATOM for spending or trading', 'No — use a full unstake instead, since redelegation keeps funds staked'],
      ['You want to briefly test different validators repeatedly', 'Be cautious — the 21-day cooldown limits how often you can switch']
    ],
    highlightColumn: 1
  },
  {
    type: 'paragraph',
    text: 'If your goal is switching where your stake is delegated, redelegation is almost always the better choice over a full unstake — you avoid the 21-day rewards gap entirely. If your goal is accessing liquid ATOM, redelegation doesn\'t help, since your funds remain staked throughout.'
  },
  {
    type: 'internal-link',
    prefix: 'For the full criteria to evaluate when choosing a destination validator, see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: 'Redelegation and Commission: A Common Trigger'
  },
  {
    type: 'paragraph',
    text: 'One of the most common reasons stakers redelegate is a validator raising their commission rate. Since commission directly reduces your net reward, a validator that increases from, say, 5% to 15% can meaningfully change your expected returns going forward — even though your existing rewards up to that point aren\'t affected retroactively.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of how commission works and typical rate ranges, see our guide on',
    linkText: 'validator commission',
    suffix: '.',
    articleSlug: 'cosmos-validator-commission-explained-how-it-affects-atom-rewards'
  },
  {
    type: 'paragraph',
    text: 'Periodically checking your validator\'s current commission rate — rather than assuming it\'s fixed at whatever it was when you first delegated — is good practice, and redelegation is the low-friction way to act on it if a rate change no longer suits you.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: 'Does Redelegation Reset Your Slashing Risk?'
  },
  {
    type: 'paragraph',
    text: 'Redelegation moves your exposure from your old validator to your new one going forward — but it doesn\'t retroactively protect you from an offense the old validator already committed before you redelegated. If you\'re redelegating specifically because of a recent slashing event or reliability concern, understand that any penalty tied to a past offense may still apply to the affected portion of your stake.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of how slashing works, see our guide on',
    linkText: 'ATOM staking risks and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
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
        question: 'Does redelegating ATOM trigger the 21-day unbonding period?',
        answer: 'No. Redelegation moves your stake directly to a new validator without unbonding — your ATOM stays actively staked and earning rewards throughout.'
      },
      {
        question: 'How often can I redelegate the same ATOM?',
        answer: 'Once every 21 days per delegation. This cooldown prevents rapid, repeated validator-hopping with the same tokens, but doesn\'t affect your ability to earn rewards during that window.'
      },
      {
        question: 'Can I redelegate only part of my staked ATOM?',
        answer: 'Yes. Most wallets let you specify a partial amount to redelegate, leaving the remainder staked with your original validator.'
      },
      {
        question: 'Is there a fee for redelegating?',
        answer: 'Only the standard small network gas fee required for any Cosmos Hub transaction — there\'s no additional penalty or special cost for redelegating specifically.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Redelegation moves your stake to a new validator without triggering the 21-day unbonding period or losing rewards.',
      'You can only redelegate a given delegation once every 21 days.',
      'Redelegation is ideal for switching validators, but doesn\'t provide liquid ATOM — use a full unstake for that.',
      'A common trigger for redelegating is a validator raising their commission rate significantly.',
      'Redelegating doesn\'t retroactively undo slashing risk already incurred with your previous validator.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Curious how a lower commission rate would affect your rewards after switching validators?',
    suffix: 'Use the ATOM Staking Calculator to compare scenarios.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking mechanics, validator behavior, and network parameters can change over time.'
  }
];
