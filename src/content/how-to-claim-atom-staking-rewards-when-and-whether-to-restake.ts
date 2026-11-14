// New article: how-to-claim-atom-staking-rewards-when-and-whether-to-restake
// Category: APR / APY Education
// Format matches the exact ContentBlock schema from src/types.ts.
// TARGET: 2,500-3,000 actual rendered words.
//
// ARTICLE METADATA (for articles.ts):
// title: 'How to Claim ATOM Staking Rewards: When, How, and Whether to Restake'
// slug: 'how-to-claim-atom-staking-rewards-when-and-whether-to-restake'
// date: 'November 14, 2026'
// author: 'ATOM Staking Calculator Team'
// readTime: '11 min read'
// category: 'APR / APY Education'
// seoTitle: 'How to Claim ATOM Staking Rewards: A Step-by-Step Guide'
// seoDescription: 'Learn how ATOM staking rewards accrue, how to claim them in your wallet, and when claiming and restaking is worth the fee.'
// ogImage: '' (uses site default)
// featured: false
//
// Bolt: verify export name pattern against an existing article's import in
// EducationPage.tsx before naming it. Append metadata to articles.ts array
// (don't re-read/re-print other articles). Create content file at
// src/content/how-to-claim-atom-staking-rewards-when-and-whether-to-restake.ts
// Wire EducationPage.tsx via ArticleBody. Run npm run build:prerender.
//
// This article links to these existing slugs. Confirm every one exists in
// articles.ts before wiring, and tell me which are missing (if any) instead of
// guessing or removing links:
//   cosmos-validator-commission-explained-how-it-affects-atom-rewards
//   how-to-unstake-atom-step-by-step-undelegating-guide
//   does-daily-compounding-increase-atom-staking-rewards
//   staking-apr-vs-apy-mathematics-of-compounding-atom
//   atom-staking-tax-implications-and-reporting-guide
//   common-atom-staking-mistakes-and-how-to-avoid-them
//   maximized-atom-portfolio-planning-passive-income-strategy
//
// WORD COUNT: Insert this content exactly as written. Do not pad, shorten, or
// paraphrase to hit any particular number. Report the honest actual count.

import { ContentBlock } from '../types';

export const howToClaimAtomStakingRewardsWhenAndWhetherToRestake: ContentBlock[] = [
  {
    type: 'intro',
    text: 'When you stake ATOM, rewards begin to build up almost immediately, but they do not land in your spendable balance by themselves. They sit in a pending balance until you claim them, and what you do next, whether you leave them, spend them, or restake them, shapes how your position grows. This guide explains how staking rewards accrue, how to see what you have earned, how to claim them step by step, what actions claim them for you automatically, and how to decide how often claiming is actually worth the network fee.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Rewards accrue continuously but stay pending until you claim them. Unclaimed rewards do not earn rewards of their own, so claiming and restaking is what turns simple earnings into compounding growth.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. How Staking Rewards Accrue'
  },
  {
    type: 'paragraph',
    text: 'On the Cosmos Hub, rewards are calculated block by block. Every time a block is produced, your share of the rewards for that block is added to a pending balance attached to each of your delegations. You do not have to do anything for this to happen, and you do not receive a notification each time. The amount simply grows in the background for as long as your ATOM stays staked with an active validator.'
  },
  {
    type: 'paragraph',
    text: 'The figure your wallet shows as pending is what is left for you after your validator has taken its commission. If a validator charges 5%, you are shown the remaining 95% of your share. Because each delegation is tracked separately, a stake spread across three validators has three separate pending balances.'
  },
  {
    type: 'internal-link',
    prefix: 'For how commission changes what you keep, see our guide on',
    linkText: 'validator commission',
    suffix: '.',
    articleSlug: 'cosmos-validator-commission-explained-how-it-affects-atom-rewards'
  },
  {
    type: 'paragraph',
    text: 'Two features of this system matter in practice. First, pending rewards are not earning anything. They are a running tally of what you are owed, not extra tokens added to your stake, so the amount that earns rewards remains your original delegation until you choose to add to it. Second, in standard Cosmos staking there is no built-in expiry on pending rewards. They stay in your pending balance until you claim them.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '2. Where to See What You Have Earned'
  },
  {
    type: 'paragraph',
    text: 'The simplest place to check is the staking section of your wallet. Keplr, Leap, and Cosmostation all display a pending rewards figure alongside your staked amount, and most show it per validator as well as in total. The numbers tick upward as new blocks arrive, so what you see is a snapshot at the moment you look.'
  },
  {
    type: 'paragraph',
    text: 'You can also look up your wallet address on a block explorer such as Mintscan. This is useful for confirming your delegations, seeing your pending rewards independently of any single wallet app, and reviewing past reward withdrawals when you need to rebuild your records. Estimates in wallets can differ slightly from what you eventually receive, so treat the displayed number as accurate to within small rounding and timing differences.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '3. How to Claim Your Rewards Step by Step'
  },
  {
    type: 'paragraph',
    text: 'Claiming turns your pending balance into spendable ATOM in your wallet. Menu names vary a little between wallets and between browser and mobile versions, but the sequence is the same everywhere.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Check that you have liquid ATOM for the fee.', text: 'Claiming is an on-chain transaction, so it needs a small network fee paid from your available balance. Keplr\'s own guidance is to keep a small amount unstaked, around 0.1 ATOM, for this purpose.' },
      { label: 'Open the staking section.', text: 'Select the Cosmos Hub and look for a list of your validators with the pending reward shown against each one.' },
      { label: 'Choose what to claim.', text: 'You can usually claim from a single validator or use a claim-all option that withdraws from every validator in one go. If you only have one delegation, there is nothing to choose.' },
      { label: 'Review the fee.', text: 'The wallet shows the network fee before you sign. Claiming from several validators at once is usually bundled into one transaction, so the fee may be somewhat higher than for a single claim but typically lower than claiming separately.' },
      { label: 'Confirm and sign.', text: 'Approve the transaction in your wallet. It normally completes within a few seconds.' },
      { label: 'Check your available balance.', text: 'The rewards should now appear as spendable ATOM, and the pending figure for that validator should drop back to nearly zero.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Claimed rewards are paid in ATOM and arrive in your available balance. From there they are ordinary tokens. They are not staked and not earning anything until you decide what to do with them.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '4. Actions That Claim Rewards for You Automatically'
  },
  {
    type: 'paragraph',
    text: 'You do not always have to press a claim button. Several other staking actions trigger a payout of the pending rewards on the delegation they affect. Keplr\'s help documentation describes this directly: if you redelegate, delegate more ATOM to the same validator, or start unbonding, your pending rewards are automatically claimed and added to your available balance.'
  },
  {
    type: 'table',
    headers: ['Action', 'What Happens to Pending Rewards on That Delegation'],
    rows: [
      ['Claim rewards', 'Paid to your available balance'],
      ['Delegate more ATOM to the same validator', 'Claimed automatically and added to your available balance, but not restaked'],
      ['Redelegate to another validator', 'Claimed automatically and added to your available balance'],
      ['Start unstaking', 'Claimed automatically and added to your available balance']
    ],
    highlightColumn: 0
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'The automatic payout does not restake anything. If you add more ATOM to a validator, the rewards that are released go to your available balance, not into the delegation. To compound them, you still need to delegate that balance yourself.'
  },
  {
    type: 'internal-link',
    prefix: 'For how this fits into the unstaking process, see our guide on',
    linkText: 'how to unstake ATOM',
    suffix: '.',
    articleSlug: 'how-to-unstake-atom-step-by-step-undelegating-guide'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '5. Claim, Restake, or Leave Them: What Each Choice Does'
  },
  {
    type: 'paragraph',
    text: 'Once rewards are claimed you have a decision to make, and each option has a different effect on how your position grows. None of them is wrong in itself, and the right one depends on what you want from your ATOM.'
  },
  {
    type: 'table',
    headers: ['Choice', 'What It Means', 'Effect on Growth'],
    rows: [
      ['Leave rewards pending', 'They stay in your pending balance, unclaimed', 'No compounding, since unclaimed rewards earn nothing'],
      ['Claim and keep as liquid ATOM', 'The rewards sit in your available balance', 'No compounding, but the tokens are available to spend or hold'],
      ['Claim and restake', 'You delegate the claimed ATOM again', 'Compounding, since the new stake also earns rewards']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'Restaking is what produces the compounding effect described in discussions of APY, because the ATOM you add to your stake earns its own rewards from then on. Claiming without restaking gives you income you can use, and leaving rewards pending gives you neither.'
  },
  {
    type: 'internal-link',
    prefix: 'For the mathematics behind this, see our guide on',
    linkText: 'staking APR versus APY and compounding',
    suffix: '.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '6. How Often Is Claiming Worth the Fee?'
  },
  {
    type: 'paragraph',
    text: 'Every claim and every restake is a separate transaction with a fee. The Hub\'s fees are small in absolute terms, but they are the same whether you are claiming a tiny amount or a large one, which means frequent claiming from a small stake can spend a surprising share of what you are collecting. The useful question is not whether a fee is cheap but how big it is relative to the reward in front of you.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration: a 100 ATOM stake earning 15% APR with a 5% validator commission, which nets about 14.25 ATOM a year. The fee here is a hypothetical 0.005 ATOM per claim. Real fees vary with network conditions.',
    rows: [
      { rate: 'Claiming every day (about 0.039 ATOM of rewards each time)', net: 'Fee is about 12.8% of the reward', color: 'amber' },
      { rate: 'Claiming every week (about 0.273 ATOM each time)', net: 'Fee is about 1.8% of the reward', color: 'cyan' },
      { rate: 'Claiming every month (about 1.19 ATOM each time)', net: 'Fee is about 0.4% of the reward', color: 'emerald' }
    ],
    footnote: 'The fee does not change, but the reward it is measured against does. For a small stake, claiming daily gives away a noticeable slice of what you earn, while a monthly cadence makes the fee almost irrelevant. A much larger stake earns more per day, so it can justify claiming more often.'
  },
  {
    type: 'paragraph',
    text: 'The practical rule is to claim when the reward is large enough that the fee is a trivial fraction of it. For smaller stakes that often means weekly or monthly rather than daily. For larger stakes, more frequent claiming can make sense, but the extra growth from compounding more often shrinks quickly, so there is rarely a strong reason to go to the extreme.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'What Restaking Monthly Actually Adds'
  },
  {
    type: 'paragraph',
    text: 'Claiming is only half of compounding. To make the rewards grow, you also have to delegate them again, which is a second transaction with its own fee. So a monthly claim-and-restake routine means up to two fees a month, or about 24 over a year. Here is what that looks like for the same 100 ATOM stake, again using a hypothetical fee of 0.005 ATOM per transaction.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration: 100 ATOM at about 14.25% net APR over one year, with a hypothetical 0.005 ATOM fee on each of 24 transactions.',
    rows: [
      { rate: 'No claiming or restaking (simple rewards for the year)', net: '14.25 ATOM', color: 'amber' },
      { rate: 'Claim and restake monthly, before fees', net: 'About 15.22 ATOM', color: 'emerald' },
      { rate: 'Claim and restake monthly, after the 24 fees', net: 'About 15.10 ATOM', color: 'cyan' }
    ],
    footnote: 'After fees, monthly restaking adds roughly 0.85 ATOM over the year on this small stake. The fees stay the same as a stake gets bigger, while the benefit grows with it. On 1,000 ATOM the same routine would add roughly 9.6 ATOM after the same fees.'
  },
  {
    type: 'paragraph',
    text: 'The lesson is that restaking is worthwhile but not dramatic, and it becomes more worthwhile the larger your stake is. For a very small stake, the gain is real but modest. There is no need to chase an elaborate schedule. A consistent, sensible rhythm captures most of the benefit.'
  },
  {
    type: 'internal-link',
    prefix: 'To see how much extra growth more frequent compounding actually adds, read our guide on',
    linkText: 'whether daily compounding increases your rewards',
    suffix: '.',
    articleSlug: 'does-daily-compounding-increase-atom-staking-rewards'
  },
  {
    type: 'calculator-cta',
    prefix: 'To test different claiming and compounding frequencies against your own stake,',
    suffix: 'use the ATOM Staking Calculator.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '7. Claiming Across Several Validators'
  },
  {
    type: 'paragraph',
    text: 'If you have spread your stake across more than one validator, each delegation builds up its own pending rewards and each needs to be claimed. Claim-all features save effort, but they do not make the rewards pool together. They simply send multiple withdrawals in a single transaction.'
  },
  {
    type: 'paragraph',
    text: 'This changes the fee arithmetic a little. A bundled claim across three validators costs more than a claim from one, but it is usually cheaper than three separate claims, and the total reward in front of you is larger. For anyone who has diversified, claiming from everything at once on a regular schedule is generally the simplest approach.'
  },
  {
    type: 'internal-link',
    prefix: 'For how diversification fits into overall planning, see our guide on',
    linkText: 'ATOM portfolio planning',
    suffix: '.',
    articleSlug: 'maximized-atom-portfolio-planning-passive-income-strategy'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '8. Special Situations to Know About'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Your validator is jailed.', text: 'A jailed validator stops earning rewards until it is restored, so your pending balance stops growing. Rewards you had already accrued are generally still there to claim, and it may be a reason to look at redelegating.' },
      { label: 'You are unstaking.', text: 'Tokens that are unbonding earn nothing for the full 21 days. Pending rewards on the delegation you are unstaking from are paid out when you start, as described above.' },
      { label: 'Your validator changes its commission.', text: 'A change affects what you earn going forward, not what you have already accrued. It is worth checking your validator\'s rate from time to time.' },
      { label: 'You have just delegated.', text: 'A new delegation begins accruing from the moment the transaction is confirmed. There is no waiting period before rewards start.' },
      { label: 'You have not claimed for a long time.', text: 'Your pending balance keeps accumulating, so there is nothing urgent about it, but you are not compounding while it sits there.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '9. Rewards and Taxes'
  },
  {
    type: 'paragraph',
    text: 'In many places, staking rewards count as income, and the moment that counts, whether it is when they accrue or when you claim them, depends on local rules. That makes the timing and size of each claim worth recording. A simple log of the date, the amount of ATOM received, and its value at the time is far easier to keep as you go than to rebuild later.'
  },
  {
    type: 'internal-link',
    prefix: 'For the general concepts behind staking records, see our guide on',
    linkText: 'ATOM staking tax implications',
    suffix: '.',
    articleSlug: 'atom-staking-tax-implications-and-reporting-guide'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '10. Common Mistakes With Rewards'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Staking everything and having no gas.', text: 'Without a small liquid balance, you cannot pay the fee to claim, and you may have to send in a little ATOM first.' },
      { label: 'Claiming too often on a small stake.', text: 'Frequent claims can lose a meaningful share of your rewards to fees, as the illustration above shows.' },
      { label: 'Assuming rewards compound on their own.', text: 'They do not. Pending and claimed rewards both sit idle until you delegate them.' },
      { label: 'Using a link from a stranger to claim.', text: 'Fake claim pages and "bonus reward" messages are a common scam pattern. Your rewards are claimed from your own wallet\'s staking screen and never require you to share your recovery phrase.' },
      { label: 'Forgetting to keep records.', text: 'Each claim can matter for reporting, and the details are easiest to capture at the time.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'For the wider list of beginner pitfalls, see our guide on',
    linkText: 'common ATOM staking mistakes',
    suffix: '.',
    articleSlug: 'common-atom-staking-mistakes-and-how-to-avoid-them'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '11. A Simple Claiming Routine'
  },
  {
    type: 'paragraph',
    text: 'Most stakers do best with a routine they can keep up rather than a perfect optimization. A reasonable approach is to pick a rhythm that suits the size of your stake, follow it consistently, and revisit it occasionally.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Choose a cadence.', text: 'Monthly is a sensible starting point for a smaller stake, and larger stakes can shorten it as the fee becomes a smaller share of each claim.' },
      { label: 'Claim from all validators together.', text: 'If you have more than one, use the claim-all option to keep the fee overhead low.' },
      { label: 'Decide whether to restake.', text: 'If you want compounding, delegate the claimed ATOM, keeping a small liquid buffer for future fees.' },
      { label: 'Record what you did.', text: 'Log the date, the amount, and the value at the time.' },
      { label: 'Review the setup now and then.', text: 'Check your validator\'s commission and whether your cadence still makes sense for the size of your stake.' }
    ]
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
        question: 'Do I have to claim my staking rewards?',
        answer: 'No. They stay in your pending balance until you claim them, and in standard Cosmos staking there is no built-in expiry. But unclaimed rewards do not earn anything and do not compound.'
      },
      {
        question: 'Do staking rewards compound automatically on the Cosmos Hub?',
        answer: 'No. Rewards are not added to your stake on their own. You need to claim them and delegate them again to compound.'
      },
      {
        question: 'How often should I claim ATOM staking rewards?',
        answer: 'There is no single right answer. A good guide is to claim when the reward is large enough that the network fee is a trivial share of it. For small stakes that is often weekly or monthly.'
      },
      {
        question: 'Do I pay a fee to claim rewards?',
        answer: 'Yes. Claiming is an on-chain transaction that costs a small network fee paid in ATOM, which is why you should keep a little unstaked.'
      },
      {
        question: 'Are my rewards claimed automatically if I redelegate or unstake?',
        answer: 'In Keplr, yes. Pending rewards on that delegation are claimed and added to your available balance when you redelegate, delegate more to the same validator, or start unbonding. They are not restaked automatically.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Rewards accrue block by block into a pending balance and stay there until you claim them.',
      'Your wallet shows the pending amount after your validator\'s commission has already been taken.',
      'Redelegating, adding to a delegation, or unstaking claims your pending rewards automatically, but does not restake them.',
      'Only rewards that you delegate again compound. Pending and claimed rewards sit idle.',
      'Every claim costs a fixed fee, so how often you claim should depend on the size of your stake.',
      'Keep a small liquid ATOM balance for fees, and record each claim for your own reporting.'
    ]
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial or tax advice. Network fees, wallet features, and menu names change over time, so check the current details in your own wallet. The fee used in the illustration is hypothetical. Never share your recovery phrase with anyone.'
  }
];
