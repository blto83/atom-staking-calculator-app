// New article: how-cosmos-hub-governance-works-voting-with-staked-atom
// Category: Validator Guides
// Format matches the exact ContentBlock schema from src/types.ts.
// TARGET: 2,500-3,000 actual rendered words.
//
// ARTICLE METADATA (for articles.ts):
// title: 'How Cosmos Hub Governance Works: Voting With Your Staked ATOM'
// slug: 'how-cosmos-hub-governance-works-voting-with-staked-atom'
// date: 'October 9, 2026'
// author: 'ATOM Staking Calculator Team'
// readTime: '11 min read'
// category: 'Validator Guides'
// seoTitle: 'Cosmos Hub Governance: How to Vote With Staked ATOM'
// seoDescription: 'Learn how Cosmos Hub governance works, from proposals and deposits to voting options, quorum, and how delegators vote.'
// ogImage: '' (uses site default)
// featured: false
//
// Bolt: verify export name pattern against an existing article's import in
// EducationPage.tsx before naming it. Append metadata to articles.ts array
// (don't re-read/re-print other articles). Create content file at
// src/content/how-cosmos-hub-governance-works-voting-with-staked-atom.ts
// Wire EducationPage.tsx via ArticleBody. Run npm run build:prerender.
//
// WORD COUNT: Insert this content exactly as written. Do not pad, shorten, or
// paraphrase to hit any particular number. Report the honest actual count.

import { ContentBlock } from '../types';

export const howCosmosHubGovernanceWorksVotingWithStakedAtom: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Staking ATOM does more than earn rewards. It also gives you a vote in how the Cosmos Hub itself evolves, from software upgrades to how the community pool is spent. Most stakers never use that vote, and many don\'t realize their validator may already be voting on their behalf. This guide explains how Cosmos Hub governance works from start to finish: who can vote, how a proposal moves through the process, what the four voting options mean, how a result is decided, and how delegators and validators share voting power.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. Why Governance Matters to Stakers'
  },
  {
    type: 'paragraph',
    text: 'The Cosmos Hub is run by its community rather than a central company. Changes to the network, including software upgrades, adjustments to economic parameters, and spending from the community pool, are proposed and decided through on-chain governance. The outcome of a vote is executed by the network itself, not by any single team.'
  },
  {
    type: 'paragraph',
    text: 'For a staker, this has two practical consequences. First, decisions made through governance can directly affect the network you are staking on, including parameters that influence rewards and how the network operates. Second, your staked ATOM is the only thing that carries voting weight, which means the same tokens that earn you rewards also give you a say.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Staking does two jobs at once: it earns rewards and it gives your ATOM voting weight. Unstaked ATOM earns nothing and votes on nothing.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '2. Who Can Vote'
  },
  {
    type: 'paragraph',
    text: 'On the Cosmos Hub, participation in governance is tied to bonded ATOM, meaning ATOM that is currently staked with a validator. Holders whose ATOM is unstaked, and users who hold no ATOM at all, do not get a vote. Your voting weight is simply the amount of ATOM you have delegated.'
  },
  {
    type: 'paragraph',
    text: 'Validators vote too, using the combined stake delegated to them. This is where the system becomes interesting for ordinary delegators, because a validator\'s voting power is largely made up of the ATOM that delegators have entrusted to it. The next sections explain how that works in practice.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '3. The Life of a Proposal'
  },
  {
    type: 'paragraph',
    text: 'Every governance proposal passes through two stages before a result is reached: a deposit period and a voting period. Each stage has its own requirements, designed to filter out spam and give the community enough time to respond.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'The Deposit Period'
  },
  {
    type: 'paragraph',
    text: 'A proposal cannot be voted on until it has attracted a minimum deposit of ATOM. The deposit can come from the person who submitted the proposal, from other community members who support it, or from both. If the minimum is not reached within the deposit period, the proposal never reaches a vote and the deposit is burned.'
  },
  {
    type: 'heading',
    level: 3,
    text: 'The Voting Period'
  },
  {
    type: 'paragraph',
    text: 'Once the minimum deposit is reached, the proposal immediately enters a fixed voting period. During this window, stakers and validators can cast their votes, and votes can be changed at any point before the period closes. The votes are tallied when the period ends.'
  },
  {
    type: 'table',
    headers: ['Governance Parameter', 'Cosmos Hub Value (at time of writing)'],
    rows: [
      ['Minimum deposit', '250 ATOM'],
      ['Maximum deposit period', '14 days'],
      ['Voting period', '14 days'],
      ['Quorum', '40% of total staked ATOM must vote'],
      ['Pass threshold', 'More than 50% of votes, excluding Abstain'],
      ['Veto threshold', '33.4% of votes cast']
    ],
    highlightColumn: 0
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'These numbers are governance parameters, which means governance itself can change them. Treat the table above as a snapshot and check a Cosmos block explorer such as Mintscan for the live values before relying on any specific figure.'
  },
  {
    type: 'paragraph',
    text: 'One detail worth knowing: the 14-day voting period is deliberately shorter than the 21-day unbonding period. This prevents someone from voting, unstaking, moving their tokens, and then voting again with the same ATOM on the same proposal.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '4. The Types of Proposals You\'ll See'
  },
  {
    type: 'paragraph',
    text: 'Not every proposal does the same thing. Proposals commonly fall into a few broad types, and knowing which one you are looking at tells you what a Yes vote would actually cause.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Text proposals.', text: 'These express the community\'s opinion or signal a direction, such as support for a strategy or a statement of priorities. They do not change any code or parameter by themselves, so passing one simply records where the community stands.' },
      { label: 'Parameter changes.', text: 'These adjust a setting that the network runs on, for example a value connected to staking, slashing, or governance itself. Because they can affect rewards, risk, or the voting process, they deserve careful reading from stakers.' },
      { label: 'Software upgrades.', text: 'These coordinate a network upgrade at an agreed point in time. If one passes, validators are expected to update their software so the whole network moves to the new version together.' },
      { label: 'Community pool spending.', text: 'The community pool is a shared treasury funded by a small share of the network\'s newly issued tokens and fees. A spend proposal asks the community to approve sending a specific amount from that pool for a stated purpose, such as development work or ecosystem support.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'Reading the first lines of a proposal usually reveals its type. A software upgrade names a version and a timeline, a spend proposal names an amount and a recipient, and a parameter change names the exact setting and its new value. If a proposal is hard to categorize, that is a good reason to read it more closely before voting.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '5. The Four Ways to Vote'
  },
  {
    type: 'paragraph',
    text: 'When a proposal is open, each voter chooses one of four options. They are not interchangeable, and understanding the difference matters, especially between No and NoWithVeto.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Yes.', text: 'You support the proposal passing as written. Yes votes count toward the pass threshold.' },
      { label: 'No.', text: 'You oppose the proposal, but you consider it a legitimate proposal that deserved a vote. No votes count against passing.' },
      { label: 'NoWithVeto.', text: 'You oppose the proposal and also consider it harmful, for example because it looks like spam, is irrelevant to the Hub, disproportionately harms minority interests, or breaks the rules of engagement set by the community. It counts as a No vote and also adds to the veto total.' },
      { label: 'Abstain.', text: 'You take part without taking a side. Abstain votes count toward quorum, which helps a proposal reach a valid result, but they are left out when the Yes percentage is calculated.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Abstain is useful when you want to help a vote reach quorum without influencing the outcome. NoWithVeto is a stronger statement and is generally reserved for proposals a voter believes should not have been submitted at all.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '6. How a Result Is Decided'
  },
  {
    type: 'paragraph',
    text: 'When the voting period ends, the network runs a series of checks in order. A proposal must clear all of them to pass. First, quorum: enough of the total staked ATOM must have taken part in the vote for the result to count as valid. Second, the veto check: if the NoWithVeto share of all votes cast is above the veto threshold, the proposal is rejected and its deposit is burned. Third, the pass threshold: more than half of the votes, once Abstain votes are set aside, must be Yes.'
  },
  {
    type: 'example-calculation',
    introText: 'Illustration: a proposal where 50% of all staked ATOM takes part. Of the votes cast, 55% are Yes, 30% are No, 10% are NoWithVeto, and 5% are Abstain.',
    rows: [
      { rate: 'Quorum check: 50% of staked ATOM voted', net: 'Passes (needs at least 40%)', color: 'emerald' },
      { rate: 'Veto check: NoWithVeto is 10% of votes cast', net: 'Passes (must stay at or below 33.4%)', color: 'cyan' },
      { rate: 'Threshold check: Yes is about 57.9% of votes excluding Abstain (55 out of 95)', net: 'Passes (needs more than 50%)', color: 'amber' }
    ],
    footnote: 'In this illustration the proposal passes all three checks. Change any one result, for example by pushing participation below 40% or the veto share above 33.4%, and the proposal fails regardless of the other two.'
  },
  {
    type: 'paragraph',
    text: 'What happens to the deposit depends on the outcome. In general, deposits are returned when a proposal runs its course normally, whether it passes or is rejected by an ordinary No majority. Deposits are burned when a proposal is vetoed or never reaches the minimum deposit, and a failure to reach quorum can also put the deposit at risk depending on how the chain\'s parameters are set. This is one reason proposers tend to gather community feedback before submitting.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '7. What Happens After a Proposal Passes'
  },
  {
    type: 'paragraph',
    text: 'A passed proposal does not always do something immediately, and what follows depends on its type. A text proposal changes nothing on its own, because it only records the community\'s position. Parameter changes and community pool spends are carried out by the network once the proposal has passed, without any individual having to execute them. Software upgrades are different in practice: the vote approves the upgrade, but validators still have to install the new software before the agreed point, and the network moves to the new version when that point is reached.'
  },
  {
    type: 'paragraph',
    text: 'For you as a delegator, this means a successful vote can quietly change the environment you are staking in. A parameter change might alter a limit that applies to validators, and an upgrade might introduce new features or new requirements. It is worth skimming the result of any proposal that touched staking, then checking whether your validator is keeping up with the change.'
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Low turnout makes every vote count for more. Because a proposal needs quorum to be valid, a few active stakers and validators can decide outcomes simply by showing up when others do not.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '8. Delegators and Validators: Who Votes for Whom'
  },
  {
    type: 'paragraph',
    text: 'This is the part most delegators miss. By default, your validator votes on proposals using all of the ATOM delegated to it, including yours. If you do nothing, your voting weight follows your validator\'s choice. But your vote always takes priority: if you cast your own vote on a proposal, it overrides your validator\'s vote for your share of the stake, and your validator\'s voting weight is reduced by that amount.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'If you do not vote,', text: 'your stake counts toward whichever option your validator chose.' },
      { label: 'If you vote yourself,', text: 'your choice applies to your own delegated ATOM, even when it differs from your validator\'s vote.' },
      { label: 'If your validator does not vote,', text: 'and you do not either, that portion of voting power does not take part, which can make quorum harder to reach.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'This is why a validator\'s governance record is worth checking when you choose where to delegate. A validator that votes consistently, explains its reasoning, and tends to vote in line with your own views is acting as a reasonable proxy for you. One that never votes leaves your stake sitting idle on governance questions.'
  },
  {
    type: 'internal-link',
    prefix: 'For how governance participation fits alongside uptime, commission, and decentralization when picking a validator, see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '9. How to Vote Step by Step'
  },
  {
    type: 'paragraph',
    text: 'Voting is straightforward once you know where to look. The exact menu names vary between wallets, but the process is similar everywhere.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Find the active proposals.', text: 'Open the governance or proposals section of your staking wallet, or browse them on a Cosmos block explorer such as Mintscan, which lists every proposal with its status, deposit, and current vote tally.' },
      { label: 'Read the proposal itself.', text: 'Open the full description, not just the title. Look at what is actually being changed, who is proposing it, and what the supporting argument is.' },
      { label: 'Check the community discussion.', text: 'Proposals are usually debated in public forums before and during the vote. Reading the arguments for and against helps you decide.' },
      { label: 'Cast your vote.', text: 'Choose Yes, No, NoWithVeto, or Abstain and confirm the transaction. You need a small amount of liquid ATOM to pay the network fee, the same as for any other on-chain action.' },
      { label: 'Change your mind if needed.', text: 'You can update your vote any time before the voting period ends. Only your final vote is counted.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '10. How to Evaluate a Proposal'
  },
  {
    type: 'paragraph',
    text: 'You do not need to be a developer to vote sensibly. A few questions cover most proposals, whether the topic is a software upgrade, a parameter change, or a community pool spend.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'What exactly changes?', text: 'A clear proposal states precisely what will happen if it passes. Vague wording is itself a warning sign.' },
      { label: 'Who benefits, and who bears the cost?', text: 'For spending proposals, consider how much is requested, what it is for, and whether there is a plan to measure the result.' },
      { label: 'Could it affect staking economics?', text: 'Some parameter changes can influence rewards, commission limits, or unbonding rules. Those deserve extra attention from stakers.' },
      { label: 'Is it well documented and discussed?', text: 'Proposals that were debated openly and revised in response to feedback tend to be stronger than ones that appear without any prior discussion.' },
      { label: 'What do validators you trust think?', text: 'Many validators publish their vote and reasoning. They are not always right, but their explanations can help you work through an unfamiliar topic.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '11. Governance, Unstaking, and Switching Validators'
  },
  {
    type: 'paragraph',
    text: 'Because voting weight comes from staked ATOM, your staking decisions affect your governance influence. If you begin unstaking, the ATOM stops counting toward your vote, since it is no longer bonded and also stops earning rewards for the 21-day unbonding period. Unstaking in the middle of a voting period can therefore reduce or remove your say on proposals that are still open.'
  },
  {
    type: 'internal-link',
    prefix: 'For the full details of how that waiting period works, see our guide on',
    linkText: 'slashing and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'paragraph',
    text: 'This is one more factor in the broader question of whether to stake at all. For long-term holders who care about the direction of the network, the governance voice is a genuine benefit that unstaked ATOM simply does not have.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full comparison of the two approaches, see our guide on',
    linkText: 'staking versus just holding ATOM',
    suffix: '.',
    articleSlug: 'atom-staking-vs-just-holding-is-it-worth-it'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '12. Common Mistakes to Avoid'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Assuming your validator always votes the way you would.', text: 'Delegating does not mean agreeing with every vote your validator casts. If a proposal matters to you, check how your validator voted or vote yourself.' },
      { label: 'Using NoWithVeto casually.', text: 'Veto is meant for proposals that are harmful or abusive, not simply ones you disagree with. A plain No is the right choice for ordinary disagreement.' },
      { label: 'Voting from the title alone.', text: 'Proposal titles can be broad or optimistic. The substance is in the full text.' },
      { label: 'Forgetting the fee.', text: 'Voting is an on-chain transaction. If you have staked everything and kept no liquid ATOM, you may be unable to pay the small fee required to vote.' },
      { label: 'Treating figures as permanent.', text: 'Deposit sizes, voting periods, and thresholds can all be changed by governance. Confirm current values before you rely on them.' }
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
        question: 'Do I need to vote to keep earning staking rewards?',
        answer: 'No. Staking rewards and governance voting are separate. You earn rewards whether or not you ever vote on a proposal.'
      },
      {
        question: 'What happens if I do not vote?',
        answer: 'Your stake follows your validator\'s vote by default. If your validator does not vote either, that voting power does not take part in the proposal.'
      },
      {
        question: 'Can I vote differently from my validator?',
        answer: 'Yes. Your own vote overrides your validator\'s vote for your share of the stake, and your validator\'s weight is reduced by that amount.'
      },
      {
        question: 'Does voting cost anything?',
        answer: 'Casting a vote is an on-chain transaction, so it requires a small network fee paid in ATOM. There is no other cost to vote.'
      },
      {
        question: 'Can I change my vote after submitting it?',
        answer: 'Yes. You can update your vote at any time before the voting period closes, and only your final vote is counted.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Only staked ATOM carries voting weight on the Cosmos Hub; unstaked ATOM has no say.',
      'Proposals pass through a deposit period and then a voting period, and the current Hub values are 250 ATOM, 14 days, and 14 days, though governance can change them.',
      'The four options are Yes, No, NoWithVeto, and Abstain, and Abstain counts toward quorum but not toward the Yes percentage.',
      'A proposal must clear quorum, stay under the veto threshold, and win more than half of the non-abstaining votes.',
      'By default your validator votes with your stake, but your own vote always overrides it for your share.',
      'Unstaking during a voting period can reduce or remove your influence on proposals still open.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Want to see what your staked ATOM could earn while it also carries your vote?',
    suffix: 'Use the ATOM Staking Calculator to project your rewards.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Governance parameters and procedures are set by the Cosmos Hub community and can change over time, so confirm current values on an official source or block explorer before relying on them.'
  }
];
