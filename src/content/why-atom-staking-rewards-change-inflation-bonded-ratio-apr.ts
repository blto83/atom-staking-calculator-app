// New article: why-atom-staking-rewards-change-inflation-bonded-ratio-apr
// Category: APR / APY Education
// Format matches the exact ContentBlock schema from src/types.ts.
// TARGET: 2,500-3,000 actual rendered words.
//
// ARTICLE METADATA (for articles.ts):
// title: 'Why ATOM Staking Rewards Change: Inflation, Bonded Ratio, and Your APR'
// slug: 'why-atom-staking-rewards-change-inflation-bonded-ratio-apr'
// date: 'October 31, 2026'
// author: 'ATOM Staking Calculator Team'
// readTime: '11 min read'
// category: 'APR / APY Education'
// seoTitle: 'Why ATOM Staking APR Changes: Inflation Explained'
// seoDescription: 'Learn why ATOM staking rewards rise and fall, how inflation and the bonded ratio set your APR, and what governance changes.'
// ogImage: '' (uses site default)
// featured: false
//
// Bolt: verify export name pattern against an existing article's import in
// EducationPage.tsx before naming it. Append metadata to articles.ts array
// (don't re-read/re-print other articles). Create content file at
// src/content/why-atom-staking-rewards-change-inflation-bonded-ratio-apr.ts
// Wire EducationPage.tsx via ArticleBody. Run npm run build:prerender.
//
// This article links to these existing slugs. Confirm every one exists in
// articles.ts before wiring, and tell me which are missing (if any) instead of
// guessing or removing links:
//   staking-apr-vs-apy-mathematics-of-compounding-atom
//   cosmos-validator-commission-explained-how-it-affects-atom-rewards
//   atom-staking-vs-just-holding-is-it-worth-it
//   how-cosmos-hub-governance-works-voting-with-staked-atom
//   atom-staking-scenarios-100-1000-10000-atom-rewards
//   how-to-use-the-atom-staking-calculator-complete-walkthrough
//
// WORD COUNT: Insert this content exactly as written. Do not pad, shorten, or
// paraphrase to hit any particular number. Report the honest actual count.

import { ContentBlock } from '../types';

export const whyAtomStakingRewardsChangeInflationBondedRatioApr: ContentBlock[] = [
  {
    type: 'intro',
    text: 'If you have looked at ATOM staking for more than a few weeks, you have probably noticed that the advertised reward rate does not stay put. One month it looks like one number, a few months later it looks like another, and different websites quote different figures on the same day. That is not a glitch. Staking rewards on the Cosmos Hub are produced by a formula that responds to how much of the supply is staked, and the formula can itself be changed by governance. This guide explains where the rewards come from, how inflation and the bonded ratio determine your APR, why the rate moves, and how to plan around a number that is never fixed.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'ATOM staking rewards are not a fixed interest rate set by a bank. They are newly issued tokens shared among everyone who stakes, so your rate depends on how much ATOM is issued and on how many people are staking.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. Where Staking Rewards Come From'
  },
  {
    type: 'paragraph',
    text: 'There is no company paying you interest on your staked ATOM. Rewards come from the network itself, mainly in two forms. The first and largest is newly minted ATOM: the Hub creates new tokens at a controlled rate, which is what people mean by inflation. The second is a share of transaction fees paid by users of the network.'
  },
  {
    type: 'paragraph',
    text: 'A small percentage of what is minted goes to the community pool, a shared treasury the community can spend through governance proposals. The rest is distributed to validators and the people who delegate to them, in proportion to how much each has staked. Validators then take their commission before your share reaches you.'
  },
  {
    type: 'paragraph',
    text: 'This matters because it means staking rewards are a distribution of a fixed-size pie among a variable number of participants. If the amount issued stays the same and more people stake, each person\'s slice gets smaller. If fewer people stake, each slice gets larger. That single idea explains most of why the rate moves.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '2. How Inflation Is Set: The Bonded Ratio and the Goal'
  },
  {
    type: 'paragraph',
    text: 'The Hub does not mint tokens at a flat, unchanging rate. It uses a dynamic model built around one number, the bonded ratio, which is the percentage of all ATOM that is currently staked. The network also has a target for that number, called the goal bonded ratio. The rule is simple in principle.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'If less ATOM is staked than the goal,', text: 'inflation rises, which increases rewards in order to attract more people to stake.' },
      { label: 'If the staked share is right at the goal,', text: 'inflation stays where it is.' },
      { label: 'If more ATOM is staked than the goal,', text: 'inflation falls, since the network is already well secured and does not need to pay as much to attract stakers.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Inflation can only move within a band set by a minimum and a maximum, and it changes gradually rather than jumping. The idea is to nudge the amount of staked ATOM toward the target. The higher the share staked, the more secure the network is considered to be, which is why the model rewards staking when the share is low.'
  },
  {
    type: 'table',
    headers: ['Parameter', 'Value (as last verified)'],
    rows: [
      ['Goal bonded ratio', '67% of all ATOM staked'],
      ['Minimum inflation', '7% per year'],
      ['Maximum inflation', '10% per year'],
      ['Community pool share of minted ATOM', 'A small percentage, around 2% (check the current value)']
    ],
    highlightColumn: 0
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'These are governance parameters, not laws of nature. They reflect the most recent figures I could verify, and the community can change them by vote. Check a Cosmos block explorer such as Mintscan for the live values before relying on any of them.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'A Short History: Why the Maximum Is 10%'
  },
  {
    type: 'paragraph',
    text: 'Under the Cosmos SDK defaults the maximum inflation was 20%, and for a long time the Hub operated in that wider band. In November 2023, the community passed Proposal 848, which lowered the maximum from 20% to 10%. The proposal argued that the Hub was paying more for security than it needed to, and it passed narrowly in what was then the highest-turnout vote in the Hub\'s history.'
  },
  {
    type: 'paragraph',
    text: 'A follow-up proposal in January 2024 tried to lower the minimum inflation from 7% to 0%. It was rejected, so the minimum stayed at 7%. The two outcomes show how directly governance shapes your rewards: a single vote moved the maximum rate by half, and another vote kept the floor in place.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'What the 7% Floor Means'
  },
  {
    type: 'paragraph',
    text: 'The minimum inflation setting has a consequence that is easy to miss. Even if every single ATOM were staked, the network would still mint new tokens at the minimum rate each year. In that extreme case the staking rate would be roughly the 7% inflation rate adjusted for the community pool share, which works out to about 6.9% before commission. In other words, the formula does not push the reward toward zero as participation rises. It slows down and then levels off at a floor.'
  },
  {
    type: 'paragraph',
    text: 'Supporters of keeping the floor argued that the network needs a dependable reward to keep validators and delegators securing it. Supporters of lowering it argued that permanent issuance dilutes holders and that other income, such as fees, could eventually replace it. Both arguments are about the same trade-off, and the community has so far chosen to keep the floor where it is.'
  },
  {
    type: 'internal-link',
    prefix: 'For how these votes work and how you can take part, see our guide on',
    linkText: 'how Cosmos Hub governance works',
    suffix: '.',
    articleSlug: 'how-cosmos-hub-governance-works-voting-with-staked-atom'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '3. From Inflation to Your APR'
  },
  {
    type: 'paragraph',
    text: 'Once you know the inflation rate and the bonded ratio, you can estimate the reward rate stakers receive. All the newly minted ATOM, minus the community pool share, is divided among the staked tokens only. So the staking rate is roughly the inflation rate, adjusted for the community pool share, divided by the bonded ratio.'
  },
  {
    type: 'formula',
    text: 'Staking APR (before commission) ≈ Inflation × (1 − community pool share) ÷ Bonded ratio'
  },
  {
    type: 'paragraph',
    text: 'The division by the bonded ratio is the key. Because the rewards are shared only among those who stake, a smaller staked share means each staked token earns more, and a larger staked share means each earns less. Here is what that looks like at three different levels of participation, using the maximum and minimum inflation figures above and a 2% community pool share.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration of the formula, before validator commission and ignoring transaction fees.',
    rows: [
      { rate: 'Bonded ratio 55%, inflation at the 10% maximum', net: 'About 17.8% APR', color: 'emerald' },
      { rate: 'Bonded ratio 67% (the goal), inflation at 10%', net: 'About 14.6% APR', color: 'cyan' },
      { rate: 'Bonded ratio 80%, inflation at the 7% minimum', net: 'About 8.6% APR', color: 'amber' }
    ],
    footnote: 'In practice inflation moves gradually, so these are snapshots of the logic rather than predictions. The point is the direction: a lower staked share raises the rate, and a higher staked share lowers it.'
  },
  {
    type: 'paragraph',
    text: 'This also shows why you should be careful with any single quoted figure. A rate in the high teens and a rate in the low teens can both be correct for the Hub at different moments, depending on how much ATOM was staked at the time and where inflation sat within its band.'
  },
  {
    type: 'paragraph',
    text: 'What you actually keep is lower again, because your validator takes its commission from the rate above. A validator charging 5% commission would leave you with about 95% of the gross figure.'
  },
  {
    type: 'internal-link',
    prefix: 'For the details of how commission reduces your return, see our guide on',
    linkText: 'validator commission',
    suffix: '.',
    articleSlug: 'cosmos-validator-commission-explained-how-it-affects-atom-rewards'
  },
  {
    type: 'heading',
    level: 3,
    text: 'Why Different Websites Quote Different Rates'
  },
  {
    type: 'paragraph',
    text: 'If you compare several staking pages on the same day, you will often see different figures, and several ordinary reasons can account for the gap without anyone being wrong. Some sites quote the rate before validator commission, while others quote what a typical staker keeps after it. Some show APR and others show APY, which includes the effect of compounding. Some include transaction fee income and some do not. And each site measures the bonded ratio and inflation at a slightly different moment, which matters because both keep moving.'
  },
  {
    type: 'paragraph',
    text: 'When you see two numbers that do not match, ask which basis each one uses before deciding which to trust. The most useful figure for your own planning is the one that reflects your actual validator\'s commission and the compounding habits you really follow.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '4. Why the Rate Keeps Moving'
  },
  {
    type: 'paragraph',
    text: 'With the mechanism in view, the reasons your rate changes over time become easy to list. None of them require anything unusual to happen.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'More people stake.', text: 'When the share of staked ATOM climbs, the same pool of new tokens is divided among more stakers, so the rate per token falls.' },
      { label: 'People unstake.', text: 'When the staked share drops, each remaining staker\'s slice grows, and inflation may also be pushed upward if the share falls below the goal.' },
      { label: 'Inflation moves within its band.', text: 'As the bonded ratio shifts relative to the goal, inflation adjusts upward or downward, which feeds directly into the rate.' },
      { label: 'Governance changes the parameters.', text: 'A passed proposal can change the maximum, the minimum, or other settings, which changes the rate for everyone after it takes effect.' },
      { label: 'Fee income varies.', text: 'Transaction fees add to rewards, and fee volume rises and falls with network activity.' },
      { label: 'Your validator changes its commission.', text: 'Even if the network rate holds still, your own net rate shifts if your validator raises or lowers its fee.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '5. A High Rate Is Not the Same as a High Real Return'
  },
  {
    type: 'paragraph',
    text: 'A staking rate in the teens looks generous, and it is worth understanding what is paying for it. The rewards come from newly issued tokens, which means the total supply of ATOM grows every year. If you hold ATOM without staking, your tokens do not grow, but the supply around them does, so your share of the total shrinks.'
  },
  {
    type: 'table',
    headers: ['Approach', 'What Happens to Your Share of Total Supply (at 10% inflation, illustrative)'],
    rows: [
      ['Holding unstaked', 'Shrinks by roughly 9% over a year, since the supply grows 10% and your token count does not'],
      ['Staking at about 14.6% (before commission)', 'Grows by roughly 4%, since your tokens grow faster than the supply does']
    ],
    highlightColumn: 0
  },
  {
    type: 'paragraph',
    text: 'This is why staking is often described as a way to keep pace with inflation rather than purely as a source of profit. A staker earning a rate close to the inflation rate is mostly just keeping their slice of the network the same size. Only the part of the rate above inflation increases that slice. These figures describe your share of the supply, not the price of ATOM, which moves for entirely separate reasons.'
  },
  {
    type: 'internal-link',
    prefix: 'For the full comparison of the two choices, see our guide on',
    linkText: 'staking versus just holding ATOM',
    suffix: '.',
    articleSlug: 'atom-staking-vs-just-holding-is-it-worth-it'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '6. Planning Around a Rate That Is Never Fixed'
  },
  {
    type: 'paragraph',
    text: 'Understanding why the rate moves changes how you should plan. The aim is not to predict the exact number, which no one can do, but to build plans that hold up across a reasonable range of outcomes.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Model a range, not a single figure.', text: 'Run your projections at a conservative rate, a middle rate, and an optimistic one. If your plan only works at the highest rate, it is fragile.' },
      { label: 'Check the live numbers before you act.', text: 'Look at the current inflation, bonded ratio, and reward rate on a block explorer rather than relying on a number from an article, including this one.' },
      { label: 'Remember commission on top.', text: 'Your net return is the network rate minus your validator\'s cut, so always use your own validator\'s actual commission.' },
      { label: 'Revisit your assumptions periodically.', text: 'A projection made months ago may no longer reflect current conditions, so re-run it from time to time.' },
      { label: 'Treat unusually high rates with suspicion.', text: 'On the Hub, the formula keeps the base rate within a limited band. A far higher advertised return usually comes with extra risk or a catch.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'To see how different rates turn into actual amounts, see our guide on',
    linkText: 'ATOM staking scenarios at 100, 1,000, and 10,000 ATOM',
    suffix: '.',
    articleSlug: 'atom-staking-scenarios-100-1000-10000-atom-rewards'
  },
  {
    type: 'internal-link',
    prefix: 'For the compounding effect on top of the base rate, read our guide on',
    linkText: 'staking APR versus APY',
    suffix: '.',
    articleSlug: 'staking-apr-vs-apy-mathematics-of-compounding-atom'
  },
  {
    type: 'calculator-cta',
    prefix: 'To test your own plan across a range of rates and commissions,',
    suffix: 'use the ATOM Staking Calculator.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '7. Common Misreadings of Staking Rates'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Treating today\'s rate as a promise.', text: 'A rate is a snapshot of how the formula is behaving at a moment in time, not a commitment about the future.' },
      { label: 'Comparing rates across networks without comparing inflation.', text: 'A network paying a high rate through heavy token issuance is not necessarily better than one paying less, since the dilution can offset the reward.' },
      { label: 'Ignoring commission.', text: 'The headline rate is before your validator\'s cut. The number that matters to you is the one after it.' },
      { label: 'Assuming a higher rate is automatically better news.', text: 'A rising rate can mean fewer people are staking, which is the network\'s way of attracting more, not necessarily a sign of strength.' },
      { label: 'Forgetting that rewards do not compound by themselves.', text: 'A quoted APR assumes no reinvestment. You only capture compounding by claiming and restaking.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '8. Where to Check the Live Numbers'
  },
  {
    type: 'paragraph',
    text: 'You do not need to calculate everything by hand. The live figures are published openly, and a few places make them easy to find.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Block explorers such as Mintscan.', text: 'These typically show the current inflation rate, the bonded ratio, and the estimated staking rate for the Hub.' },
      { label: 'Your wallet\'s staking screen.', text: 'Wallets usually display an estimated rate and each validator\'s commission when you choose where to delegate.' },
      { label: 'Governance proposals.', text: 'Any proposal that changes inflation or related settings is public. Reading the discussion tells you what is about to change before it does.' }
    ]
  },
  {
    type: 'internal-link',
    prefix: 'To enter these live figures into a projection, follow our',
    linkText: 'walkthrough of the ATOM Staking Calculator',
    suffix: '.',
    articleSlug: 'how-to-use-the-atom-staking-calculator-complete-walkthrough'
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
        question: 'Why does the ATOM staking rate change?',
        answer: 'Because rewards are newly issued tokens shared among everyone who stakes. The rate depends on how much is issued, which moves with the share of ATOM that is staked, and on how many tokens are staked, so it changes whenever participation changes. Governance can also alter the rules.'
      },
      {
        question: 'What is the bonded ratio?',
        answer: 'It is the percentage of all ATOM that is currently staked. The Hub compares it with a goal, and the result determines whether inflation rises, holds, or falls.'
      },
      {
        question: 'Is the ATOM staking rate guaranteed?',
        answer: 'No. It is the output of a formula that responds to network conditions and governance decisions, so it can rise or fall. Treat any quoted rate as a current estimate rather than a promise.'
      },
      {
        question: 'Why is the ATOM staking rate relatively high?',
        answer: 'It is paid mainly through new token issuance designed to encourage enough staking to secure the network. That higher rate is partly offset by dilution for anyone who does not stake, so it is not free money created from nothing.'
      },
      {
        question: 'Can the inflation rate be changed?',
        answer: 'Yes. Inflation settings are governance parameters. The community has changed them before, for example by lowering the maximum from 20% to 10%, and can vote to change them again.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'ATOM staking rewards come mainly from newly issued tokens, plus a share of transaction fees, divided among those who stake.',
      'Inflation rises when less than the goal share of ATOM is staked and falls when more is staked, within a minimum and maximum band.',
      'Your approximate rate is inflation, adjusted for the community pool share, divided by the bonded ratio, and your validator\'s commission comes off after that.',
      'The rate moves because participation, inflation, fees, governance, and commission all change over time.',
      'A high rate is partly funded by dilution, so staking is as much about keeping your share of the network as about earning extra.',
      'Plan with a range of rates, check live figures on an explorer, and re-run your projections periodically.'
    ]
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Rates and parameters shown are illustrative and based on the most recent figures verifiable at the time of writing. They are controlled by governance and can change at any time, so confirm current values on an official source or block explorer.'
  }
];
