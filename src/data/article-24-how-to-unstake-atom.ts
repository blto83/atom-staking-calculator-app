// New article: how-to-unstake-atom-step-by-step-undelegating-guide
// Category: Beginner Guides
// Format matches the exact ContentBlock schema from src/types.ts.
// TARGET: 2,500-3,000 actual rendered words.
//
// ARTICLE METADATA (for articles.ts):
// title: 'How to Unstake ATOM: Step-by-Step Guide to Undelegating'
// slug: 'how-to-unstake-atom-step-by-step-undelegating-guide'
// date: 'November 10, 2026'
// author: 'ATOM Staking Calculator Team'
// readTime: '11 min read'
// category: 'Beginner Guides'
// seoTitle: 'How to Unstake ATOM: Step-by-Step Undelegating Guide'
// seoDescription: 'How to unstake ATOM safely: the steps, the 21-day unbonding wait, what happens to your rewards, and mistakes to avoid.'
// ogImage: '' (uses site default)
// featured: false
//
// Bolt: verify export name pattern against an existing article's import in
// EducationPage.tsx before naming it. Append metadata to articles.ts array
// (don't re-read/re-print other articles). Create content file at
// src/content/how-to-unstake-atom-step-by-step-undelegating-guide.ts
// Wire EducationPage.tsx via ArticleBody. Run npm run build:prerender.
//
// This article links to these existing slugs. Confirm every one exists in
// articles.ts before wiring, and tell me which are missing (if any) instead of
// guessing or removing links:
//   atom-staking-risks-slashing-and-unbonding-period-explained
//   how-to-redelegate-atom-switch-validators-without-losing-rewards
//   atom-staking-tax-implications-and-reporting-guide
//   atom-liquid-staking-vs-native-staking-pros-cons-risks
//   common-atom-staking-mistakes-and-how-to-avoid-them
//   atom-staking-vs-just-holding-is-it-worth-it
//   how-to-set-up-keplr-wallet-for-atom-staking-2026
//
// WORD COUNT: Insert this content exactly as written. Do not pad, shorten, or
// paraphrase to hit any particular number. Report the honest actual count.

import { ContentBlock } from '../types';

export const howToUnstakeAtomStepByStepUndelegatingGuide: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Staking ATOM is easy to start and slower to undo. When you decide to get your tokens back, the process is called unstaking or undelegating, and it is not instant. Your tokens enter a mandatory waiting period before they return to your wallet, and a few details along the way catch people off guard: what happens to your pending rewards, why you cannot always unstake in several small pieces, and why the wait cannot be shortened. This guide walks through exactly how to unstake ATOM, what happens at each stage, what to expect from your wallet, and the mistakes worth avoiding.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Unstaking starts a 21-day clock. Your tokens stop earning rewards the moment you confirm, you cannot move them during the wait, and they return to your wallet automatically when it ends. Plan your unstaking around that timeline.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. What Unstaking Actually Means'
  },
  {
    type: 'paragraph',
    text: 'When you stake ATOM, you delegate it to a validator. Unstaking is the reverse: you undelegate, which tells the network that you want your tokens back. The network does not hand them over at once. It places them into an unbonding state for a fixed period, which on the Cosmos Hub is 21 days. Only when that period ends do the tokens become spendable again.'
  },
  {
    type: 'paragraph',
    text: 'The delay is a deliberate security feature. If staked tokens could leave instantly, a validator or delegator who misbehaved could withdraw before facing any consequence. The waiting period keeps their stake at risk long enough for problems to be detected and penalized.'
  },
  {
    type: 'internal-link',
    prefix: 'For the full reasoning behind the waiting period and the risks that remain during it, see our guide on',
    linkText: 'slashing and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '2. What Happens to Your Tokens and Rewards'
  },
  {
    type: 'paragraph',
    text: 'It helps to picture unstaking as three stages rather than a single click. Knowing what each stage means removes most of the confusion people feel the first time they do it.'
  },
  {
    type: 'table',
    headers: ['Stage', 'What Happens'],
    rows: [
      ['You confirm the unstake', 'The amount you chose stops earning rewards immediately. In Keplr, pending rewards on that delegation are claimed automatically and added to your available balance.'],
      ['The unbonding period (21 days)', 'Your unstaked tokens cannot be transferred, traded, or restaked. They earn nothing and carry no governance voting weight.'],
      ['The period ends', 'The tokens return to your available balance automatically. You do not need to claim or confirm anything.']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'The most important point is that the wait costs you rewards as well as time. For the 21 days your tokens would otherwise have been staked, you earn nothing on them, which is worth putting a number on before you decide.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration: unstaking 1,000 ATOM that was earning at a 15% network APR through a validator charging 5% commission.',
    rows: [
      { rate: 'Net rewards if the ATOM stayed staked for a full year', net: '142.5 ATOM', color: 'emerald' },
      { rate: 'Share of that year covered by the 21-day wait', net: 'About 5.8% of the year', color: 'cyan' },
      { rate: 'Rewards not earned during the 21 days', net: 'About 8.2 ATOM', color: 'amber' }
    ],
    footnote: 'This is a simple estimate that ignores compounding and any change in the network rate during the wait. It is not a fee. It is income you give up for three weeks, and it is usually small compared with the stake itself, but it is real.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '3. How to Unstake ATOM Step by Step'
  },
  {
    type: 'paragraph',
    text: 'The steps are very similar in all the major Cosmos wallets. Menu names differ slightly between Keplr, Leap, and Cosmostation, and between the browser and mobile versions, so look for the equivalent option if a label below is not an exact match.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Make sure you have liquid ATOM for the fee.', text: 'Every on-chain action needs a small network fee. Keplr\'s own guidance is to keep a small amount of unstaked ATOM, around 0.1, available for this. If you have staked everything, you may need to send a little ATOM to your wallet first.' },
      { label: 'Open the staking section of your wallet.', text: 'Look for a Stake, Staking, or Dashboard area and select the Cosmos Hub. You should see a list of the validators you have delegated to and the amount staked with each.' },
      { label: 'Choose the validator you want to unstake from.', text: 'If you have delegated to more than one, pick the correct one. Check the name carefully, since validators can have similar names.' },
      { label: 'Select Undelegate or Unstake.', text: 'This is different from Redelegate or Switch Validator, which moves your stake elsewhere without the wait. Make sure you are choosing the option that returns tokens to you.' },
      { label: 'Enter the amount.', text: 'You can undelegate the full amount or only part of it. Partial unstaking leaves the rest staked and still earning.' },
      { label: 'Review the fee and the completion time.', text: 'Your wallet should show the network fee and, in many cases, when the tokens will be available. Take a moment to read it.' },
      { label: 'Confirm and sign.', text: 'Some wallets ask you to sign two transactions, one for the unstake itself and one to withdraw pending rewards. Approve both if prompted.' },
      { label: 'Check that the unbonding entry appears.', text: 'After a short delay, the wallet should list a pending or unbonding amount with an estimated completion date. If it does not, check the transaction in a block explorer before trying again.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Once the entry appears, there is nothing more to do. When the period ends, the tokens move into your available balance on their own. You do not need to come back and claim them, although it is sensible to check on the day.'
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'If your goal is only to change validators, you do not need to unstake. Redelegating moves your stake to a new validator without the 21-day wait, which is almost always the better choice for switching.'
  },
  {
    type: 'internal-link',
    prefix: 'See our guide on',
    linkText: 'redelegating ATOM between validators',
    suffix: 'for how that works.',
    articleSlug: 'how-to-redelegate-atom-switch-validators-without-losing-rewards'
  },
  {
    type: 'internal-link',
    prefix: 'If you have not yet set up a wallet for staking, start with our guide to',
    linkText: 'setting up Keplr for ATOM staking',
    suffix: '.',
    articleSlug: 'how-to-set-up-keplr-wallet-for-atom-staking-2026'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '4. Partial Unstaking and the Limit on Simultaneous Entries'
  },
  {
    type: 'paragraph',
    text: 'Each time you unstake from a validator, the network records a separate unbonding entry with its own 21-day clock. Starting a second unstake later does not reset or extend the first. Each one completes on its own date.'
  },
  {
    type: 'paragraph',
    text: 'There is a catch. The network limits how many unbonding entries you can have at once with the same validator. According to the documentation I checked, the Cosmos Hub allows up to 7 per delegator and validator pair. If you try to unstake small amounts repeatedly from the same validator, you can reach that limit and have to wait for an earlier entry to finish before starting another. The limit is a network setting, so confirm the current value if you plan to unstake in many small pieces.'
  },
  {
    type: 'table',
    headers: ['Approach', 'What to Know'],
    rows: [
      ['Unstake everything at once', 'Simplest, with a single entry and a single completion date, but all of it is locked together'],
      ['Unstake one portion now and keep the rest staked', 'Keeps earning on the remainder, with one clock for the portion you are withdrawing'],
      ['Unstake many small amounts over time', 'Each creates its own entry, and you can hit the per-validator limit if you do it too often']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'If you need funds in stages, a better approach is usually to plan it: unstake a larger portion in one go, or spread requests across different validators if you have delegated to several, rather than chopping a single delegation into many tiny withdrawals.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '5. Can You Cancel or Speed Up Unbonding?'
  },
  {
    type: 'paragraph',
    text: 'There is no way to shorten the 21 days. It is a fixed network rule, and neither wallets nor validators can change it for you. Be wary of anyone who claims they can speed it up, since that is a common feature of scams.'
  },
  {
    type: 'paragraph',
    text: 'Cancelling is more nuanced. The staking software the Hub is built on includes a feature that lets a delegator cancel an unbonding entry before it completes and put the tokens back into staking. Whether you can actually use it depends on your wallet. Keplr\'s help pages note that some chains support a cancel option from its dashboard, while its older guides state plainly that once unbonding starts it cannot be interrupted. Treat cancellation as something that may or may not be available to you for ATOM, and do not plan around it.'
  },
  {
    type: 'paragraph',
    text: 'The practical lesson is to decide before you confirm, not after. A change of mind during the wait may leave you with no option other than waiting it out.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '6. Risks and Surprises During the Wait'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'You can still be affected by slashing.', text: 'If your validator is penalized for something it did before you unstaked, your unbonding tokens can be reduced along with everyone else\'s. Leaving does not wipe out earlier exposure.' },
      { label: 'You cannot react to price moves.', text: 'Locked tokens cannot be sold, so if the market moves sharply during the 21 days you have no way to act on it with those tokens.' },
      { label: 'Your tokens are unavailable in an emergency.', text: 'Anything you might need at short notice should not be in the unbonding queue.' },
      { label: 'You have no governance vote on those tokens.', text: 'Unstaked ATOM does not carry voting weight, so any proposal that closes during the wait is one you cannot influence with them.' },
      { label: 'Fees still apply.', text: 'You need liquid ATOM to start the unstake, and you will want some for any later transactions once the tokens return.' }
    ]
  },
  {
    type: 'heading',
    level: 3,
    text: 'Using the Waiting Time Well'
  },
  {
    type: 'paragraph',
    text: 'Three weeks is a long time to leave tokens in limbo without a plan. The wait is a good moment to decide what comes next so that you are not making rushed choices on the day the tokens return.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Decide what you will do with the tokens.', text: 'Restake them, keep them unstaked for flexibility, or move them elsewhere. Having an answer in advance avoids hasty decisions.' },
      { label: 'Tidy your records.', text: 'Note the date you started unstaking, the amount, and any rewards that were paid out to your balance at the time.' },
      { label: 'Research before you restake.', text: 'If you intend to delegate again, use the wait to compare validators calmly rather than choosing in a hurry later.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '7. Unstaking and Taxes'
  },
  {
    type: 'paragraph',
    text: 'Because pending rewards are often paid out to your balance when you unstake, the act of unstaking can coincide with a reward receipt that you may need to record. Whether the unstaking itself is a taxable event, and how the rewards received are treated, depends on where you live and on your individual circumstances. Keeping a note of the date, the amount of ATOM, and the value at the time makes reporting much easier later.'
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
    icon: 'trending-up',
    text: '8. Alternatives to Unstaking'
  },
  {
    type: 'paragraph',
    text: 'Before you commit to the wait, it is worth asking whether unstaking is really what you need. A few alternatives cover common reasons people consider it.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'You only want a different validator.', text: 'Redelegate. It avoids the wait and keeps your tokens earning.' },
      { label: 'You need a small amount of spending money.', text: 'Unstake only what you need, not the whole position. The rest keeps earning.' },
      { label: 'You want to stay exposed to rewards but keep an exit that is not a 21-day wait.', text: 'Liquid staking can offer that, at the cost of extra fees and risks that native staking does not have.' },
      { label: 'You are unsure whether to stake at all.', text: 'Consider the broader tradeoff between earning rewards and keeping instant liquidity before you lock anything up.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'To understand what you would be trading away, see our guide on',
    linkText: 'liquid staking versus native staking',
    suffix: '.',
    articleSlug: 'atom-liquid-staking-vs-native-staking-pros-cons-risks'
  },
  {
    type: 'internal-link',
    prefix: 'For the larger question of whether to stake, read our comparison of',
    linkText: 'staking versus just holding ATOM',
    suffix: '.',
    articleSlug: 'atom-staking-vs-just-holding-is-it-worth-it'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '9. Common Unstaking Mistakes'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Unstaking without any liquid ATOM.', text: 'Without enough for the fee, the transaction will fail, and you may have to send in a little ATOM first.' },
      { label: 'Choosing the wrong validator or amount.', text: 'Double-check both before you sign. Mistakes cannot be reversed once the unbonding has started.' },
      { label: 'Unstaking in a panic.', text: 'A sharp price move is a poor reason to start a 21-day lock during which you cannot act on any further price change.' },
      { label: 'Forgetting that the clock has started.', text: 'People sometimes expect to use the tokens a few days later, or plan a purchase around a date that is still weeks away.' },
      { label: 'Falling for offers to speed things up.', text: 'No legitimate service can shorten the unbonding period. Messages offering to do so are a standard scam pattern, and sharing your recovery phrase is never part of any real process.' }
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
    icon: 'clock',
    text: '10. A Checklist Before You Unstake'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Do you really need to unstake?', text: 'Check whether redelegating or unstaking only part of your position would do the job.' },
      { label: 'Can you live without these tokens for 21 days?', text: 'Do not unstake anything you might need before the period ends.' },
      { label: 'Is there liquid ATOM for the fee?', text: 'Keep a small balance available for the transaction.' },
      { label: 'Are the validator and amount correct?', text: 'Confirm both before you sign.' },
      { label: 'Do you know the completion date?', text: 'Write it down so you are not surprised by it.' },
      { label: 'Have you noted the details for your records?', text: 'Record the date, amount, and any rewards paid out.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '11. What to Do When the Tokens Return'
  },
  {
    type: 'paragraph',
    text: 'On the completion date, check your available balance. The tokens should appear without any action from you. Compare the amount with what you expected. If it is slightly lower, look up your validator on a block explorer to see whether it was penalized while your tokens were unbonding, since slashing can reduce an unbonding entry just as it reduces an active stake.'
  },
  {
    type: 'paragraph',
    text: 'Once you have confirmed the amount, you have three straightforward choices, and none is wrong. It depends on why you unstaked in the first place.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Restake.', text: 'Delegate the tokens again, to the same validator or a different one, and remember to keep a small liquid buffer for fees.' },
      { label: 'Keep them unstaked.', text: 'This is the simplest option and keeps full flexibility, at the cost of earning no rewards.' },
      { label: 'Move them elsewhere.', text: 'If you are sending the tokens to an exchange or another wallet, send a small test amount first and confirm that the address, the network, and any required memo are correct before sending the rest.' }
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'To see what the waiting period could cost you in rewards on your own stake,',
    suffix: 'use the ATOM Staking Calculator.'
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
        question: 'How long does it take to unstake ATOM?',
        answer: 'The unbonding period on the Cosmos Hub is 21 days. Your tokens return to your available balance automatically at the end of it.'
      },
      {
        question: 'Do I earn rewards while my ATOM is unbonding?',
        answer: 'No. The amount you unstake stops earning as soon as you confirm, and it earns nothing for the full 21 days.'
      },
      {
        question: 'What happens to my pending rewards when I unstake?',
        answer: 'In Keplr, pending rewards on that delegation are claimed automatically and added to your available balance when you start unbonding. Other wallets may handle it as a separate step, and some ask you to sign two transactions.'
      },
      {
        question: 'Can I cancel unstaking once it has started?',
        answer: 'It depends on your wallet. The underlying software supports cancelling before completion, but some wallets do not offer it for ATOM and older guides say it cannot be interrupted. Do not rely on being able to cancel.'
      },
      {
        question: 'Can I unstake only part of my ATOM?',
        answer: 'Yes. You can undelegate any amount up to what you have staked with that validator, and the remainder keeps earning rewards.'
      },
      {
        question: 'Why can I not start another unstake from the same validator?',
        answer: 'The network limits how many unbonding entries you can have at once per validator, and the documentation I checked lists 7 for the Hub. Wait for an earlier entry to complete or use a different validator.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Unstaking, also called undelegating, starts a mandatory 21-day unbonding period on the Cosmos Hub.',
      'The unstaked amount stops earning immediately, cannot be moved during the wait, and returns automatically when the period ends.',
      'Pending rewards are typically paid out to your available balance when you unstake, though wallets differ in how they present this.',
      'Each unstake creates its own entry with its own clock, and the network limits how many you can have at once with one validator.',
      'The wait cannot be shortened, and cancelling may not be available, so decide before you confirm.',
      'If you only want a different validator, redelegate instead of unstaking.'
    ]
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial or tax advice. Network parameters, wallet features, and menu names change over time, so confirm the current details in your own wallet and on an official source before you act. Never share your recovery phrase with anyone.'
  }
];
