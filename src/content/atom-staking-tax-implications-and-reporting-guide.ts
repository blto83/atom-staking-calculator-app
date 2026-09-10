import { ContentBlock } from '../types';

export const atomStakingTaxImplicationsAndReportingGuide: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Staking ATOM generates ongoing rewards, and in most jurisdictions, those rewards carry tax implications you should understand before you start accumulating a large staking history. Tax treatment of staking rewards varies significantly by country, and rules are still evolving as regulators catch up with proof-of-stake networks. This guide explains the general concepts that tend to apply across most jurisdictions, what kind of records you should be keeping from day one, and why staking\'s continuous, granular reward structure makes it meaningfully more complex to track than a simple buy-and-hold position.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article provides general educational information only and is not tax advice. Tax treatment of cryptocurrency and staking rewards varies by country, state, and individual circumstances, and rules change frequently. Always consult a qualified tax professional familiar with cryptocurrency in your specific jurisdiction before making decisions or filing.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '1. Are Staking Rewards Taxable?'
  },
  {
    type: 'paragraph',
    text: 'In most jurisdictions that have issued formal guidance on cryptocurrency, the general answer is yes — staking rewards are typically treated as taxable income at the point you gain control over them, separate from any tax that later applies when you eventually sell or trade the ATOM. This two-stage treatment is one of the most important concepts to understand: staking can create two separate taxable events for the same tokens, at two different times, taxed under two different rules.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Event one: receiving the reward.', text: 'In many jurisdictions, the fair market value of ATOM at the moment you receive (or gain the ability to claim) a staking reward is treated as ordinary income, valued in your local currency at that specific moment.' },
      { label: 'Event two: later disposing of the ATOM.', text: 'When you eventually sell, trade, or spend the ATOM you received as a reward, any change in value between when you received it and when you disposed of it is typically treated separately, often as a capital gain or loss.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'This two-stage treatment means the value you received a reward at becomes your "cost basis" for that specific batch of tokens going forward. If ATOM\'s price rises after you receive a reward and you later sell, you may owe capital gains tax on that increase — on top of the income tax already owed on the reward itself when it was received.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '2. When Exactly Is the Taxable Event?'
  },
  {
    type: 'paragraph',
    text: 'This is one of the more nuanced points, and treatment can differ depending on your jurisdiction and the specific guidance that applies to you. Broadly, there are two common approaches regulators have taken toward proof-of-stake rewards:'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Taxable upon receipt.', text: 'Some jurisdictions treat rewards as taxable the moment they\'re credited to your delegation, even if you haven\'t manually claimed or moved them yet — the reasoning being that you have effective control over the asset at that point.' },
      { label: 'Taxable upon claim.', text: 'Other jurisdictions, or interpretations, treat the taxable moment as when you actually claim and gain direct custody of the reward — since on the Cosmos Hub, rewards accrue continuously but require a manual claim transaction to move them into your spendable balance.' }
    ]
  },
  {
    type: 'paragraph',
    text: 'This distinction matters practically. Because Cosmos Hub rewards accrue continuously in small increments rather than arriving as periodic lump sums, the "taxable upon receipt" interpretation can create an enormous number of small taxable events — technically, a new one every single block. In practice, most people track this at a more manageable interval (such as whenever they claim), but this is exactly the kind of jurisdiction-specific detail where professional guidance matters most.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '3. Why Staking Records Are Harder to Track Than a Simple Trade'
  },
  {
    type: 'paragraph',
    text: 'Buying and later selling ATOM once is a straightforward two-point calculation. Staking is fundamentally different because it generates many small reward events over time, each with its own fair-market-value cost basis at the moment received. If you\'re claiming rewards weekly, monthly, or letting them accrue over a long period before claiming, you can end up with dozens or hundreds of individual cost-basis lots to track across a single tax year.'
  },
  {
    type: 'example-calculation',
    introText: 'Consider a simplified example of how quickly this can add up over just one year of active staking.',
    rows: [
      { rate: 'Claiming rewards monthly', net: '~12 taxable events/year', color: 'cyan' },
      { rate: 'Claiming rewards weekly', net: '~52 taxable events/year', color: 'amber' },
      { rate: 'Redelegating to multiple validators over time', net: 'Additional cost-basis lots per redelegation', color: 'emerald' }
    ],
    footnote: 'Each of these events, in jurisdictions using a "taxable upon receipt" approach, potentially represents a separate income event with its own value at time of receipt — and later, its own capital gain or loss when eventually sold.'
  },
  {
    type: 'paragraph',
    text: 'This is why many active stakers rely on dedicated crypto tax software rather than attempting to track everything manually in a spreadsheet — the volume of individual events makes manual tracking genuinely impractical once you\'ve been staking for more than a few months.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '4. What Records You Should Keep'
  },
  {
    type: 'paragraph',
    text: 'Regardless of which specific jurisdiction\'s rules apply to you, the underlying data you\'ll need tends to be consistent. Building the habit of recording this information as you go is far easier than trying to reconstruct it a year later.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Date and time of each reward claim.', text: 'This establishes exactly when the taxable event occurred under most interpretations.' },
      { label: 'The amount of ATOM received.', text: 'The precise quantity for each individual claim or reward batch.' },
      { label: 'The fair market value in your local currency at that moment.', text: 'This becomes both your taxable income figure for that event and your cost basis for future disposal calculations.' },
      { label: 'Validator commission deducted.', text: 'Useful for reconciling gross versus net reward figures, and understanding your actual realized amounts.' },
      { label: 'Any redelegation events and dates.', text: 'Since redelegating doesn\'t typically trigger a taxable event itself in most interpretations, but the underlying reward history should still be traceable across validators.' },
      { label: 'Dates and amounts of any disposals.', text: 'When you eventually sell, trade, or spend ATOM, recording exactly which "batch" (by original acquisition date and cost basis) you\'re disposing of matters for accurate capital gains calculation.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Exporting your wallet\'s transaction history periodically — rather than only at tax time — makes reconstruction dramatically easier. Blockchain data is permanent and publicly verifiable, but pairing it with the correct historical price at each exact moment becomes harder to do accurately the longer you wait.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '5. General Approaches Across Different Jurisdictions'
  },
  {
    type: 'paragraph',
    text: 'Tax treatment of staking rewards differs meaningfully by country, and guidance continues to evolve. The table below reflects commonly discussed general approaches as of this writing — not a complete or current legal reference for any specific country. Always verify current rules directly with an official source or tax professional, since this area changes frequently.'
  },
  {
    type: 'table',
    headers: ['Region (General)', 'Commonly Discussed Approach'],
    rows: [
      ['United States', 'Rewards often treated as ordinary income at fair market value upon receipt; later disposal treated as a separate capital gain/loss event'],
      ['United Kingdom', 'Rewards commonly treated as miscellaneous income upon receipt, with capital gains rules applying upon later disposal'],
      ['European Union (varies by member state)', 'Treatment varies significantly by country — some tax on receipt, others primarily on disposal; no single EU-wide standard'],
      ['Other jurisdictions', 'Approaches vary widely; some countries have minimal specific crypto-staking guidance at all']
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'This table is a simplified, general summary for educational orientation only — it is not current legal guidance for any jurisdiction, and rules in every region listed continue to evolve. Confirm current requirements with an official government resource or a qualified local tax professional before relying on any of this for a real filing.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '6. Common Mistakes to Avoid'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Assuming staking rewards aren\'t taxable until sold.', text: 'This is one of the most common misconceptions, and in most jurisdictions with formal guidance, it\'s incorrect — the receipt of the reward itself is frequently a separate taxable event.' },
      { label: 'Not tracking cost basis per reward batch.', text: 'Treating your entire staking history as one lump sum, rather than individual dated batches, can lead to significant errors when calculating gains or losses upon disposal.' },
      { label: 'Ignoring validator commission in record-keeping.', text: 'Confusing gross rewards (before commission) with net rewards (after commission) can throw off your income figures if not tracked consistently.' },
      { label: 'Waiting until tax season to reconstruct records.', text: 'Historical price data and precise claim timing become significantly harder to reconstruct accurately months or years later.' },
      { label: 'Assuming rules are the same as they were last year.', text: 'Cryptocurrency tax guidance is a genuinely fast-moving area — approaches that applied in prior years may have changed.' }
    ]
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle-violet',
    text: '7. Tools That Can Help'
  },
  {
    type: 'paragraph',
    text: 'Given the volume of individual reward events active staking can generate, many stakers use dedicated crypto tax software that connects to wallet addresses or exchange accounts, automatically pulling transaction history and applying historical pricing data to calculate cost basis and gains. These tools vary in how well they support Cosmos Hub staking specifically, so it\'s worth confirming a given tool explicitly supports Cosmos-ecosystem transactions before relying on it, rather than assuming general crypto tax software automatically handles every chain\'s staking mechanics correctly.'
  },
  {
    type: 'paragraph',
    text: 'Regardless of the tool, cross-referencing its output against your own manually tracked records — at least periodically — is a reasonable practice, since automated tools can occasionally misclassify certain transaction types, especially for less common actions like redelegation or partial unstaking.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'calculator',
    text: '8. How Compounding Affects Your Tax Picture'
  },
  {
    type: 'paragraph',
    text: 'If you\'re compounding your staking rewards — regularly claiming and restaking to maximize growth — it\'s worth understanding that this doesn\'t defer or reduce your tax obligations on the original reward. In most jurisdictions, the taxable event around receiving the reward has already occurred by the time you decide to restake it; restaking is simply what you choose to do with tokens you\'ve already, for tax purposes, received.'
  },
  {
    type: 'internal-link',
    prefix: 'For a deeper look at how compounding frequency affects your actual returns (separate from the tax treatment), see our guide on',
    linkText: 'daily compounding and ATOM staking rewards',
    suffix: '.',
    articleSlug: 'does-daily-compounding-increase-atom-staking-rewards'
  },
  {
    type: 'paragraph',
    text: 'This means a highly active compounding strategy — while potentially maximizing your ATOM accumulation over time — also tends to maximize the number of individual taxable events you need to track, reinforcing the importance of good record-keeping habits from the start rather than an afterthought.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '9. Does Redelegation Trigger a Taxable Event?'
  },
  {
    type: 'paragraph',
    text: 'This is a commonly asked question, and the general (though not universal) position in many interpretations is that redelegation itself — moving your existing staked ATOM from one validator to another — does not create a new taxable disposal event, since you\'re not selling, trading, or otherwise disposing of the underlying tokens. However, any rewards that continue to accrue and get claimed after a redelegation are treated the same as any other reward income, regardless of which validator they came from.'
  },
  {
    type: 'internal-link',
    prefix: 'For the mechanics of how redelegation actually works, see our guide on',
    linkText: 'redelegating ATOM between validators',
    suffix: '.',
    articleSlug: 'how-to-redelegate-atom-switch-validators-without-losing-rewards'
  },
  {
    type: 'paragraph',
    text: 'As with everything in this guide, this general position may not apply uniformly in every jurisdiction, and confirming the specific treatment for redelegation events where you live is worthwhile if you switch validators frequently.'
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
        question: 'Are ATOM staking rewards taxable?',
        answer: 'In most jurisdictions with formal cryptocurrency guidance, yes — staking rewards are commonly treated as taxable income at the time received, separate from any tax that applies later if you sell the ATOM. Rules vary by jurisdiction, so confirm with a local tax professional.'
      },
      {
        question: 'Do I owe tax twice on the same staking rewards?',
        answer: 'Not exactly twice on the same value — you typically owe income tax on the value at the time you received the reward, and separately, capital gains tax only on any additional increase in value between receipt and eventual sale, not on the original amount again.'
      },
      {
        question: 'Does redelegating ATOM trigger a taxable event?',
        answer: 'In many interpretations, redelegation itself is not treated as a taxable disposal since you\'re not selling or trading the tokens — but this can vary by jurisdiction, and any rewards claimed afterward remain taxable as income regardless of which validator they came from.'
      },
      {
        question: 'What records should I keep for staking taxes?',
        answer: 'At minimum: the date, ATOM amount, and fair market value of each reward received, along with dates and amounts of any later disposals. Keeping records continuously, rather than reconstructing them later, makes accurate reporting significantly easier.'
      },
      {
        question: 'Should I use crypto tax software for staking rewards?',
        answer: 'Many active stakers do, given how many individual reward events staking can generate compared to a simple buy-and-hold position. Confirm any tool you consider explicitly supports Cosmos Hub staking transactions before relying on it fully.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'In most jurisdictions, staking rewards are treated as taxable income at the time received, separate from capital gains tax that may apply later upon disposal.',
      'Whether the taxable moment is "receipt" or "claim" can vary by jurisdiction — this distinction matters given how continuously Cosmos Hub rewards accrue.',
      'Staking generates far more individual cost-basis events to track than a simple one-time purchase, especially with frequent claiming or compounding.',
      'Keep detailed records of dates, amounts, and fair market values for every reward as you go, rather than reconstructing them at tax time.',
      'Redelegation is commonly treated as not triggering a taxable event itself in many interpretations, though rules vary and should be confirmed for your jurisdiction.',
      'Tax treatment of cryptocurrency staking is an evolving area — always confirm current rules with a qualified professional rather than relying solely on general guides like this one.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Want to estimate your staking rewards to help plan ahead for tax season?',
    suffix: 'Use the ATOM Staking Calculator to project your expected rewards over time.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for general educational purposes only and does not constitute tax, legal, or financial advice. Tax treatment of cryptocurrency staking rewards varies significantly by jurisdiction and individual circumstances, and the rules described here are general summaries that may not reflect current law in any specific location. Always consult a qualified tax professional familiar with cryptocurrency in your jurisdiction before making decisions or filing returns.'
  }
];
