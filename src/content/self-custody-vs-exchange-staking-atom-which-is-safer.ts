import { ContentBlock } from '../types';

export const selfCustodyVsExchangeStakingAtomWhichIsSafer: ContentBlock[] = [
  {
    type: 'intro',
    text: 'When you decide to stake ATOM, you\'re not just choosing a validator — you\'re also choosing where your tokens live while they\'re staked. Broadly, you have two paths: self-custody staking through a wallet like Keplr, Leap, or Cosmostation, or staking directly through a centralized exchange. Each comes with a different balance of convenience, control, and risk.',
  },
  {
    type: 'paragraph',
    text: 'Neither option is universally "correct." The right choice depends on how much control you want over your private keys, how comfortable you are managing a wallet, and how much you trust a third party with your assets. This guide breaks down the real differences so you can decide with confidence.',
  },

  {
    type: 'heading',
    level: 2,
    text: 'What Self-Custody Staking Actually Means',
    icon: 'calculator',
  },
  {
    type: 'paragraph',
    text: 'Self-custody staking means your ATOM stays in a wallet where you hold the private keys — nobody else. Wallets like Keplr, Leap, and Cosmostation let you connect directly to the Cosmos Hub network and delegate your tokens to a validator of your choice, without ever handing your assets to a third party.',
  },
  {
    type: 'paragraph',
    text: 'Technically, staking is a delegation, not a transfer. Your tokens never leave your wallet address. You\'re granting a validator the right to use your staking weight to help secure the network, and in exchange, you earn a proportional share of the rewards. You retain the ability to redelegate, undelegate, or vote on governance proposals at any time.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'How Self-Custody Staking Works',
  },
  {
    type: 'bullet-list',
    items: [
      { label: '1', text: 'Install a non-custodial wallet (Keplr, Leap, or Cosmostation)' },
      { label: '2', text: 'Fund the wallet with ATOM' },
      { label: '3', text: 'Choose a validator based on commission, uptime, and decentralization' },
      { label: '4', text: 'Delegate your tokens directly from the wallet interface' },
      { label: '5', text: 'Track and claim rewards, or let them accumulate' },
    ],
  },
  {
    type: 'paragraph',
    text: 'Because you control the private keys, no one — not even the wallet developer — can move your funds without your signature.',
  },

  {
    type: 'heading',
    level: 2,
    text: 'What Exchange Staking Actually Means',
    icon: 'calculator',
  },
  {
    type: 'paragraph',
    text: 'Exchange staking works differently. When you stake ATOM through a centralized exchange, you\'re not delegating from your own wallet. Instead, the exchange holds custody of your tokens and stakes them on your behalf, often pooling many users\' ATOM together under exchange-controlled validators.',
  },
  {
    type: 'paragraph',
    text: 'You still earn staking rewards, usually shown as a simple APY on the exchange\'s staking page, but you don\'t interact with the Cosmos Hub network directly. The exchange manages validator selection, claims rewards, and credits your account balance accordingly.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'How Exchange Staking Works',
  },
  {
    type: 'bullet-list',
    items: [
      { label: '1', text: 'Deposit ATOM into your exchange account' },
      { label: '2', text: 'Opt into the exchange\'s staking product' },
      { label: '3', text: 'The exchange delegates pooled funds to its own or partner validators' },
      { label: '4', text: 'Rewards are credited automatically, often after the exchange takes a fee' },
      { label: '5', text: 'Unstaking follows the exchange\'s own withdrawal terms, which may differ from the network\'s native unbonding period' },
    ],
  },

  {
    type: 'heading',
    level: 2,
    text: 'Comparing the Two: Control vs Convenience',
    icon: 'chart-bar',
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'The core tradeoff is simple: self-custody gives you control over your keys and validator choice, while exchange staking gives you simplicity at the cost of that control.',
  },
  {
    type: 'table',
    headers: ['Factor', 'Self-Custody', 'Exchange Staking'],
    rows: [
      ['Who holds the private keys', 'You', 'The exchange'],
      ['Validator choice', 'You choose', 'Exchange decides'],
      ['Setup complexity', 'Moderate (wallet setup required)', 'Low (a few clicks)'],
      ['Governance voting', 'Available', 'Usually unavailable'],
      ['Withdrawal timing', "Network's native unbonding period", "Exchange's own policy"],
      ['Counterparty risk', 'None', 'Exists (exchange solvency, security)'],
    ],
  },

  {
    type: 'heading',
    level: 2,
    text: 'The Core Risk Difference: Custody',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'The single biggest difference between these two approaches is counterparty risk. When you self-custody, the only real risks are validator-related — slashing, downtime, or picking a validator with a poor track record. Your assets themselves are never exposed to a third party\'s solvency or security practices.',
  },
  {
    type: 'paragraph',
    text: 'When you stake through an exchange, you add another layer of risk: the exchange itself. If the exchange is hacked, mismanages funds, freezes withdrawals, or becomes insolvent, your staked ATOM can become inaccessible or lost entirely — independent of anything happening on the Cosmos network itself. This isn\'t a hypothetical concern; the crypto industry has seen multiple exchange failures where staked or custodied assets were frozen or lost.',
  },
  {
    type: 'internal-link',
    prefix: 'For a deeper look at the network-level risks that apply regardless of custody method — like slashing and unbonding — see our guide on ',
    linkText: 'ATOM staking risks and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained',
  },

  {
    type: 'heading',
    level: 2,
    text: 'Validator Choice and Decentralization',
    icon: 'check-circle',
  },
  {
    type: 'paragraph',
    text: 'Self-custody staking gives you direct control over which validator secures your stake. This matters for two reasons. First, different validators charge different commission rates, which directly affects your net rewards. Second, spreading stake across many independent validators — rather than concentrating it with a few large ones — helps keep the network decentralized and resistant to censorship or collusion.',
  },
  {
    type: 'internal-link',
    prefix: 'Exchange staking typically removes this choice. Your ATOM is usually delegated to validators the exchange operates or has a business relationship with. This can contribute to validator centralization if a small number of exchanges end up controlling a large share of total staked ATOM. If validator selection matters to you, our guide on ',
    linkText: 'choosing the right Cosmos validator',
    suffix: ' walks through the key metrics to evaluate.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics',
  },

  {
    type: 'heading',
    level: 2,
    text: 'Rewards: Is One Actually More Profitable?',
    icon: 'trending-up',
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Example Calculation',
    text: 'Say the network-wide staking APR is 15%.\n\nSelf-custody: You delegate directly, choose a validator charging 5% commission, and receive close to the full net rate — around 14.25% effective APR.\n\nExchange staking: The exchange stakes on your behalf but takes its own cut on top of validator commission, often bringing your effective rate down to somewhere between 10–13%, depending on the platform.\n\nThe exact numbers vary by exchange and validator, but the pattern is consistent: extra intermediaries generally mean extra fees. Self-custody staking tends to preserve more of the network\'s advertised reward rate, simply because there\'s one less party taking a cut.',
  },
  {
    type: 'calculator-cta',
    prefix: 'To see how commission and compounding frequency affect your specific numbers, run your own scenario through the ',
    suffix: ' — you can compare different commission rates side by side.',
  },

  {
    type: 'heading',
    level: 2,
    text: 'Unbonding and Liquidity Differences',
    icon: 'clock',
  },
  {
    type: 'paragraph',
    text: 'Both paths are subject to the Cosmos Hub\'s native 21-day unbonding period once you initiate an unstake — this is a network rule, not something either wallets or exchanges can bypass. However, exchanges sometimes add their own processing time on top of this, or batch withdrawal requests, which can make the effective wait longer than the protocol minimum. Self-custody unstaking, by contrast, follows the network\'s unbonding timer directly with no additional processing layer.',
  },
  {
    type: 'paragraph',
    text: 'If liquidity timing matters to your strategy, it\'s worth checking an exchange\'s specific staking terms before committing funds, since these details aren\'t always prominently displayed.',
  },

  {
    type: 'heading',
    level: 2,
    text: 'Which Option Makes Sense for You?',
    icon: 'help-circle',
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Self-custody staking tends to suit you if:', text: 'You\'re comfortable managing a wallet and safeguarding a seed phrase' },
      { label: '', text: 'You want to choose your own validator and maximize decentralization' },
      { label: '', text: 'You want to participate in Cosmos governance voting' },
      { label: '', text: 'You want to avoid exchange counterparty risk' },
    ],
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Exchange staking tends to suit you if:', text: 'You\'re already holding ATOM on an exchange and want simplicity' },
      { label: '', text: 'You\'re less comfortable with wallet setup or seed phrase management' },
      { label: '', text: 'You value one-click staking over manual validator research' },
      { label: '', text: 'You\'re staking a smaller amount where the fee difference is less significant to you' },
    ],
  },
  {
    type: 'internal-link',
    prefix: 'Neither path is inherently reckless, but they carry meaningfully different risk profiles. If you\'re new to staking altogether, our ',
    linkText: 'beginner\'s guide to Cosmos ATOM staking',
    suffix: ' is a good starting point before deciding which custody model fits your comfort level.',
    articleSlug: 'what-is-cosmos-atom-staking-beginner-guide-2026',
  },

  {
    type: 'heading',
    level: 2,
    text: 'Key Takeaways',
    icon: 'check-circle',
  },
  {
    type: 'key-takeaways',
    items: [
      'Self-custody staking keeps your private keys and validator choice in your hands, with no third-party counterparty risk.',
      'Exchange staking trades some control and potential yield for convenience and simplicity.',
      'Both paths share the same 21-day network unbonding period, though exchanges may add their own processing delays.',
      'Fees compound across intermediaries — self-custody staking generally preserves more of the network\'s advertised reward rate.',
      'The "safer" option depends on what risk you\'re more willing to accept: technical self-management, or trusting a third party.',
    ],
  },
  {
    type: 'calculator-cta',
    prefix: 'Before choosing a path, use the ',
    suffix: ' to model your expected rewards under different commission and compounding assumptions, so you can compare the real numbers for your specific staking amount.',
  },

  {
    type: 'callout',
    variant: 'disclaimer',
    label: 'Disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Staking rewards can vary based on validator commission, network conditions, and compounding frequency, and staking — whether self-custodied or through an exchange — carries risk.',
  },
];
