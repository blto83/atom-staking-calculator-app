import { ContentBlock } from '../types';

export const howToSetUpKeplrWalletForAtomStaking2026: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Keplr is the most widely used wallet for interacting with the Cosmos Hub and staking ATOM directly, without relying on a centralized exchange. This guide walks through installing Keplr, securing your wallet correctly, funding it, and delegating your first ATOM to a validator — step by step, with the security practices that matter most for beginners.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'check-circle',
    text: '1. Installing Keplr'
  },
  {
    type: 'paragraph',
    text: 'Keplr is available as a browser extension for Chrome, Brave, and other Chromium-based browsers, as well as a mobile app for iOS and Android. For staking on a desktop, the browser extension is the most common setup.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Go to the official Keplr website or your browser\'s extension store.', text: 'Search for "Keplr Wallet" directly — always verify you\'re installing from the official source, not a lookalike extension.' },
      { label: 'Add the extension to your browser.', text: 'Once installed, a Keplr icon will appear in your browser toolbar.' },
      { label: 'Open Keplr and choose to create a new wallet.', text: 'If you already have an existing wallet from another Cosmos-ecosystem app, you can import it instead using your existing seed phrase.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take-warning',
    label: 'Quick Take',
    text: 'Only ever download Keplr from its official website or your browser\'s legitimate extension store. Fake wallet extensions designed to steal seed phrases are a common scam — double-check the developer name and review count before installing.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'help-circle',
    text: '2. Securing Your Seed Phrase'
  },
  {
    type: 'paragraph',
    text: 'When you create a new wallet, Keplr generates a 12- or 24-word recovery phrase (also called a seed phrase or mnemonic). This phrase is the master key to your wallet — anyone who has it can access and move your funds, and if you lose it with no backup, your funds are permanently unrecoverable.'
  },
  {
    type: 'bullet-list',
    items: [
      { label: 'Write it down physically.', text: 'Use pen and paper, not a digital note, screenshot, or cloud storage file — digital copies are far more vulnerable to hacking or accidental exposure.' },
      { label: 'Store it somewhere secure and private.', text: 'A safe, a locked drawer, or a fireproof document holder are all reasonable options depending on how much you\'re staking.' },
      { label: 'Never share it with anyone.', text: 'No legitimate support team, validator, or service will ever ask for your seed phrase. Anyone who does is attempting to steal your funds.' },
      { label: 'Consider a backup copy in a second location.', text: 'This protects against fire, water damage, or loss of a single copy, at the cost of slightly more exposure — weigh this based on your own risk tolerance.' }
    ]
  },
  {
    type: 'callout',
    variant: 'quick-take',
    label: 'Quick Take',
    text: 'Your seed phrase is the single most important piece of information in this entire process. Take the time to secure it properly before moving any meaningful amount of ATOM into the wallet.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'zap',
    text: '3. Funding Your Wallet'
  },
  {
    type: 'paragraph',
    text: 'Once your wallet is set up, Keplr automatically detects and displays the Cosmos Hub network alongside other Cosmos-ecosystem chains it supports. To fund your wallet, you\'ll need to transfer ATOM to your Keplr wallet address, either from a centralized exchange withdrawal or from another wallet you control.'
  },
  {
    type: 'paragraph',
    text: 'Your Keplr wallet address is visible directly in the extension interface. Copy it carefully, and always send a small test amount first if you\'re transferring a large sum for the first time — this confirms the address and network are correct before committing your full balance.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'trending-up',
    text: '4. Choosing a Validator and Delegating'
  },
  {
    type: 'paragraph',
    text: 'With ATOM in your wallet, open Keplr\'s staking interface (usually accessible directly from the wallet\'s main dashboard for the Cosmos Hub network). You\'ll see a list of active validators, along with their commission rates and voting power.'
  },
  {
    type: 'paragraph',
    text: 'Rather than defaulting to the largest or most prominently listed validator, take a moment to evaluate uptime, commission, and decentralization before delegating.'
  },
  {
    type: 'internal-link',
    prefix: 'For the full criteria to evaluate before choosing, see our guide on',
    linkText: 'choosing the right Cosmos validator',
    suffix: '.',
    articleSlug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics'
  },
  {
    type: 'paragraph',
    text: 'Once you\'ve selected a validator, enter the amount of ATOM you want to delegate and confirm the transaction. This will require a small amount of ATOM for the network gas fee, so make sure you keep a small liquid buffer rather than delegating your entire balance.'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'clock',
    text: '5. Managing and Claiming Rewards'
  },
  {
    type: 'paragraph',
    text: 'Once delegated, your staking rewards begin accruing continuously and are visible directly in Keplr\'s staking dashboard. Rewards don\'t automatically compound — you\'ll need to manually claim them and choose whether to restake (redelegate) them to grow your position over time.'
  },
  {
    type: 'paragraph',
    text: 'Keep in mind that unstaking triggers the Cosmos Hub\'s mandatory 21-day unbonding period, during which your ATOM earns no rewards and cannot be transferred.'
  },
  {
    type: 'internal-link',
    prefix: 'For a full breakdown of this and other staking risks, see our guide on',
    linkText: 'slashing and the unbonding period',
    suffix: '.',
    articleSlug: 'atom-staking-risks-slashing-and-unbonding-period-explained'
  },
  {
    type: 'heading',
    level: 2,
    icon: 'chart-bar',
    text: '6. Keplr vs Other Wallet Options'
  },
  {
    type: 'table',
    headers: ['Wallet', 'Best For'],
    rows: [
      ['Keplr', 'Most widely adopted; broad Cosmos-ecosystem app support'],
      ['Leap', 'Similar feature set to Keplr with an alternative interface'],
      ['Cosmostation', 'Mobile-first users; also operates as a validator']
    ]
  },
  {
    type: 'paragraph',
    text: 'All three are non-custodial and support Cosmos Hub staking directly. The choice largely comes down to interface preference, since the underlying security model is the same across all of them.'
  },
  {
    type: 'internal-link',
    prefix: 'For a more detailed comparison, see our guide on',
    linkText: 'the best Cosmos wallets for ATOM staking',
    suffix: '.',
    articleSlug: 'best-cosmos-wallets-for-atom-staking-2026'
  },
  {
    type: 'paragraph',
    text: 'If you\'re also weighing self-custody wallets against staking through a centralized exchange instead, that\'s a related but distinct decision worth understanding before you commit to either path.'
  },
  {
    type: 'internal-link',
    prefix: 'See our comparison on',
    linkText: 'self-custody vs exchange staking',
    suffix: 'for that broader tradeoff.',
    articleSlug: 'self-custody-vs-exchange-staking-atom-which-is-safer'
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
        question: 'Is Keplr wallet safe to use for ATOM staking?',
        answer: 'Yes, when used correctly. Keplr is non-custodial, meaning your private keys and funds stay under your control. Safety depends primarily on how well you secure your own seed phrase, not on Keplr itself.'
      },
      {
        question: 'Do I need to pay to use Keplr?',
        answer: 'Keplr itself is free to install and use. You\'ll only pay standard Cosmos Hub network gas fees for transactions like delegating or claiming rewards.'
      },
      {
        question: 'Can I use Keplr on mobile?',
        answer: 'Yes, Keplr offers mobile apps for iOS and Android in addition to the browser extension, with similar staking functionality available on both.'
      },
      {
        question: 'What happens if I lose my seed phrase?',
        answer: 'If you lose your seed phrase and don\'t have a backup, and you also lose access to the device with your wallet installed, your funds become permanently unrecoverable. There is no password reset or customer support recovery option for a non-custodial wallet.'
      }
    ]
  },
  {
    type: 'key-takeaways',
    items: [
      'Only install Keplr from official sources to avoid fake wallet scams designed to steal your seed phrase.',
      'Your seed phrase should be written physically and stored securely — never digitally, and never shared with anyone.',
      'Send a small test transaction first when funding your wallet for the first time.',
      'Evaluate validators on uptime, commission, and decentralization rather than defaulting to the most prominent option.',
      'Rewards must be claimed and restaked manually — they don\'t automatically compound.',
      'Unstaking triggers a mandatory 21-day unbonding period with no rewards and no liquidity.'
    ]
  },
  {
    type: 'calculator-cta',
    prefix: 'Ready to estimate what your staking rewards could look like?',
    suffix: 'Use the ATOM Staking Calculator to model your returns before you delegate.'
  },
  {
    type: 'callout',
    variant: 'disclaimer',
    text: 'This article is for educational purposes only and does not constitute financial advice. Always independently verify you are downloading wallet software from official sources, and never share your seed phrase with anyone.'
  }
];
