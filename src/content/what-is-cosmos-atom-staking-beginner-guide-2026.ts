import { ContentBlock } from '../types';

export const whatIsCosmosAtomStakingBeginnerGuide: ContentBlock[] = [
  // Intro
  {
    type: 'intro',
    text: 'Staking ATOM is the foundation of securing the Interchain ecosystem. In this beginner-friendly guide, we will unpack exactly what Cosmos is, how proof-of-stake delegation works, and how you can securely earn passive yields.',
  },

  // 1. Understanding the Cosmos (ATOM) Network
  {
    type: 'heading',
    level: 2,
    text: '1. Understanding the Cosmos (ATOM) Network',
    icon: 'calculator',
  },
  {
    type: 'paragraph',
    text: 'Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint. ATOM is the native utility and governance token of the Cosmos Hub — the primary router block that serves as the heart of the Cosmos ecosystem.',
  },
  {
    type: 'paragraph',
    text: 'Unlike many legacy cryptocurrencies, ATOM is primarily designed as a security and governance token. Its value proposition comes from securing the Hub, participating in governance voting, and receiving continuous staking inflation rewards.',
  },

  // 2. What is Staking?
  {
    type: 'heading',
    level: 2,
    text: '2. What is Staking?',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Staking is the process of locking up cryptocurrency tokens to secure block validation on a blockchain network. In Delegated Proof-of-Stake (DPoS) chains like Cosmos, you delegate your ATOM to a trusted validator who runs network server nodes.',
  },
  {
    type: 'paragraph',
    text: 'Your tokens never actually leave your custody — they remain completely secured in your non-custodial wallet. You are simply delegating your voting power to a node runner, who splits earned minting rewards with you proportionally.',
  },

  // 3. Core Staking Benefits
  {
    type: 'heading',
    level: 2,
    text: '3. Core Staking Benefits',
    icon: 'trending-up',
  },
  {
    type: 'paragraph',
    text: 'Passive Income Yield: Stakers earn typically between 14% and 20% APR in newly minted ATOM tokens, helping you combat inflation.',
  },
  {
    type: 'paragraph',
    text: 'Ecosystem Governance: Staked ATOM grants you a direct vote on governance updates, ecosystem spend parameters, and software proposals.',
  },
  {
    type: 'calculator-cta',
    prefix: 'By delegation, you actively secure the Cosmos Hub against governance attacks and help validate transaction blocks. If you want to model scenarios for your own holdings, you can use our live ',
    suffix: '. For a quick list of frequently asked questions about wallet setup and unbonding, explore our complete ATOM FAQ Help Center.',
  },
];
