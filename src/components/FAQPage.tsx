import { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const FAQS = [
  {
    category: 'Basics',
    items: [
      {
        q: 'What is Cosmos ATOM staking?',
        a: 'Cosmos ATOM staking means delegating your ATOM tokens to a validator who helps secure the Cosmos Hub blockchain. In return, you earn staking rewards paid in additional ATOM — typically between 14% and 20% APR. Your tokens stay in your wallet; you are only delegating your voting power, not transferring ownership.',
      },
      {
        q: 'How do ATOM staking rewards work?',
        a: 'The Cosmos Hub mints new ATOM tokens as inflation rewards to incentivize network security. These rewards are distributed proportionally to all stakers based on how much ATOM they have delegated. Your validator takes a commission percentage, and the rest goes to you as a delegator. Rewards accumulate continuously and can be claimed or restaked at any time.',
      },
      {
        q: 'What is APR vs APY in staking?',
        a: 'APR (Annual Percentage Rate) is the simple annual return before compounding — for example, 18% APR on 100 ATOM means roughly 18 ATOM per year. APY (Annual Percentage Yield) factors in compounding, so if you restake rewards daily, your effective return could be closer to 19–20% APY. The difference grows larger over longer time periods.',
      },
      {
        q: 'What is validator commission?',
        a: 'Validator commission is the percentage of your staking rewards that the validator keeps as payment for running infrastructure. A 5% commission on 18% APR means your net return is approximately 17.1%. Commissions typically range from 0% to 10%, and extremely low commissions may indicate unsustainable operations.',
      },
    ],
  },
  {
    category: 'Risks',
    items: [
      {
        q: 'Is ATOM staking safe?',
        a: 'Staking ATOM is generally considered safe when you choose a reputable validator with strong uptime and no slashing history. However, it is not risk-free — slashing, price volatility, and the 21-day unbonding period are real risks you should understand before staking. Never stake more than you can afford to have illiquid for at least 21 days.',
      },
      {
        q: 'What is validator slashing?',
        a: 'Slashing is a penalty that destroys a portion of staked tokens when a validator misbehaves. Double-signing can slash 5% of all delegated tokens, while extended downtime can slash 0.01%. As a delegator, you share in your validator\'s slashing penalty, which is why choosing a reliable validator matters.',
      },
      {
        q: 'What happens during the 21-day unbonding period?',
        a: 'When you undelegate ATOM, it enters a 21-day unbonding period during which you earn zero rewards and cannot transfer or sell the tokens. This is a protocol-level security mechanism and cannot be bypassed or sped up. Plan your liquidity needs carefully before initiating an undelegation.',
      },
      {
        q: 'Can staking rewards change over time?',
        a: 'Yes. The Cosmos Hub APR fluctuates based on network inflation parameters and the total amount of ATOM staked across all validators. When more ATOM is staked, the APR tends to decrease because rewards are spread across more delegators. Governance proposals can also change inflation rates, which directly impacts your rewards.',
      },
      {
        q: 'Is ATOM staking taxable?',
        a: 'In many jurisdictions, staking rewards are treated as taxable income at the time you receive or claim them. The tax treatment varies significantly by country — some treat rewards as ordinary income, others as capital gains, and some have no clear guidance. This is not tax advice; consult a qualified tax professional familiar with cryptocurrency in your jurisdiction.',
      },
    ],
  },
  {
    category: 'Practical Guide',
    items: [
      {
        q: 'How do I choose a validator?',
        a: 'Look for validators with 99.9%+ uptime, reasonable commission (3–10%), and a clean slashing history. Consider delegating to smaller validators to support network decentralization rather than always choosing the largest ones. Check the validator\'s self-bonded amount — higher self-stake means more aligned incentives with delegators.',
      },
      {
        q: 'Keplr vs Cosmostation: which wallet should I use?',
        a: 'Both are excellent Cosmos wallets with strong security and staking features. Keplr is the most popular and widely used, with a clean interface and broad chain support. Cosmostation offers advanced features like multi-chain portfolio management and detailed validator analytics. Try both and use whichever feels more comfortable for your needs.',
      },
      {
        q: 'Can I manually compound staking rewards?',
        a: 'Yes. You can claim your accumulated rewards through your wallet and then delegate them again to start earning rewards on your rewards. This manual compounding process takes just a few clicks in wallets like Keplr or Cosmostation. Some wallets and services also offer auto-compounding features that handle this automatically.',
      },
      {
        q: 'Should I keep some ATOM unstaked for gas fees?',
        a: 'Yes, always keep a small amount of ATOM unstaked for transaction fees — typically 0.1 to 0.5 ATOM is sufficient for most operations. If you stake 100% of your ATOM, you will not be able to claim rewards, redelegate, or perform any on-chain actions because you need unstaked ATOM to pay gas fees. This is one of the most common beginner mistakes.',
      },
      {
        q: 'Can I switch validators?',
        a: 'Yes, you can redelegate your ATOM from one validator to another instantly without going through the 21-day unbonding period. However, you cannot redelegate from the same validator more than once within a short cooldown window (typically 21 days for the same source-validator pair). Plan your redelegations carefully if you are testing multiple validators.',
      },
      {
        q: 'How do I start staking ATOM?',
        a: 'Download a Cosmos wallet like Keplr or Cosmostation, transfer ATOM to your wallet address, then use the wallet\'s staking interface to choose a validator and delegate your tokens. Your ATOM never leaves your wallet — you are only delegating your staking power. The entire process takes just a few minutes.',
      },
      {
        q: 'Is this calculator free to use?',
        a: 'Yes, completely free with no signup, no subscription, and no hidden fees. All calculations happen locally in your browser and your data is stored only on your device. We do not collect, store, or transmit any personal or financial information.',
      },
      {
        q: 'Do I need to connect my wallet to use this calculator?',
        a: 'No. This calculator never asks for wallet connections, seed phrases, or private keys. You manually enter your ATOM amount, APR, and validator commission, and the tool calculates projections. This design keeps your funds completely safe.',
      },
    ],
  },
  {
    category: 'Beginner Mistakes',
    items: [
      {
        q: 'Should I stake 100% of my ATOM?',
        a: 'No, staking 100% of your ATOM is generally not recommended because you need unstaked ATOM for transaction fees and emergency liquidity. A common approach is staking 80–95% while keeping 5–20% liquid. Remember that once staked, your ATOM is locked for 21 days if you need to undelegate.',
      },
      {
        q: 'What happens if my validator goes offline?',
        a: 'If your validator goes offline temporarily, you simply miss out on rewards during that period — your staked ATOM is not at risk from brief downtime. However, extended downtime can result in a small slashing penalty (0.01%) and the validator being jailed. If this happens, you can redelegate to another validator to resume earning rewards.',
      },
      {
        q: 'What are the most common beginner mistakes in ATOM staking?',
        a: 'The most common mistakes include: staking 100% of ATOM with nothing left for gas fees, choosing validators based only on the lowest commission without checking uptime, not understanding the 21-day unbonding period before staking, and forgetting to claim or restake rewards regularly. Take time to understand these mechanics before committing your tokens.',
      },
      {
        q: 'How accurate is this calculator?',
        a: 'This calculator uses standard APR and compound interest formulas, but actual blockchain rewards can vary due to network inflation changes, validator performance, slashing events, and total staked supply fluctuations. Use these projections for planning and comparison purposes, not as guaranteed returns. Always verify with on-chain data.',
      },
      {
        q: 'Is this financial advice?',
        a: 'No. This website is for informational and educational purposes only and does not constitute financial, investment, or tax advice. We do not recommend buying, selling, staking, or unstaking any cryptocurrency. You are solely responsible for your own research and financial decisions.',
      },
    ],
  },
];

export default function FAQPage({ onNavigate }: Props) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  const filtered = FAQS.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          Help Center
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          Comprehensive answers about Cosmos ATOM staking — from basics and risks to practical guides and common beginner mistakes.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800/60 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white w-full focus:outline-none focus:border-cyan-500 transition-colors"
          placeholder="Search questions..."
        />
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No matching questions found.</p>
        ) : (
          filtered.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.items.map((item, idx) => {
                  const key = `${cat.category}-${idx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div
                      key={key}
                      className="glass-card rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                      >
                        <span className="text-sm font-semibold text-white">{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-500 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 animate-fade-in">
                          <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* CTA */}
      <div className="glass-card rounded-xl p-6 text-center">
        <p className="text-sm text-gray-300 mb-3">
          Still have questions? Try the calculator and see the numbers for yourself.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-6 py-2.5 text-sm transition-all cursor-pointer"
        >
          Open Calculator
        </button>
      </div>
    </div>
  );
}
