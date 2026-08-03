import { ContentBlock } from '../types';

export const atomStakingRisksSlashingAndUnbonding: ContentBlock[] = [
  {
    type: 'intro',
    text: 'Staking rewards are lucrative, but they represent payment for undertaking specific network risks. Here, we explore the realities of slashing parameters and liquidity constraints.',
  },
  {
    type: 'heading',
    level: 2,
    text: '1. Slashing Risks: Double-Signing vs. Downtime',
    icon: 'zap',
  },
  {
    type: 'paragraph',
    text: 'Slashing is a protocol-level penalty used to punish validator misbehavior. If a validator double-signs (proposing two conflicting blocks at the same time), the network slashes 5% of all delegated tokens permanently and tombstonables the validator node.',
  },
  {
    type: 'paragraph',
    text: 'If a validator experiences prolonged downtime (misses over 95% of consecutive 10,000 blocks), they get jailed and lose 0.01% of delegations. While downtime slashing is negligible, being jailed means the node generates zero rewards until the operator unjails it manually.',
  },
  {
    type: 'heading',
    level: 2,
    text: '2. The 21-Day Unbonding lockup',
    icon: 'clock',
  },
  {
    type: 'paragraph',
    text: 'When undelegating ATOM, the network imposes a strict 21-day unbonding freeze. During these 21 days, your ATOM does not earn staking rewards, cannot be transferred, and cannot be traded. This prevents malicious stakers from unstaking instantly during a governance attack.',
  },
  {
    type: 'paragraph',
    text: 'Be absolutely certain you do not need quick capital liquidity before initiating the delegation lockup. For complete transparency on these liabilities and browser data saving protocols, consult our official Disclaimer Page.',
  },
];
