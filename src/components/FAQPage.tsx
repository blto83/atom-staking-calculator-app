import { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

const FAQS = [
  {
    category: 'Getting Started',
    items: [
      {
        q: 'What is ATOM staking?',
        a: 'ATOM staking is the process of locking your Cosmos (ATOM) tokens with a validator to help secure the Cosmos Hub blockchain network. In exchange for delegating your tokens, you earn staking rewards — additional ATOM paid out periodically by the network. Staking is a form of passive income that supports network decentralization.',
      },
      {
        q: 'How do I start staking ATOM?',
        a: 'To stake ATOM, you need a wallet that supports Cosmos (such as Keplr, Leap, or Cosmostation). Transfer ATOM to your wallet, connect to a validator through the wallet interface, and delegate your tokens. Your ATOM remains in your wallet — you are not sending it to the validator, only delegating your voting/staking power.',
      },
      {
        q: 'Is this calculator free to use?',
        a: 'Yes, completely free. There is no signup, no subscription, and no hidden fees. All calculations happen in your browser and your data is stored locally on your device.',
      },
      {
        q: 'Do I need to connect my wallet?',
        a: 'No. This calculator does not require any wallet connection. You manually enter your holdings and parameters, and the tool calculates projections. This keeps your funds completely safe — the calculator never touches your actual crypto.',
      },
    ],
  },
  {
    category: 'Staking Mechanics',
    items: [
      {
        q: 'How are staking rewards calculated?',
        a: 'Staking rewards are calculated based on three main factors: (1) the amount of ATOM you have staked, (2) the network APR (annual percentage rate), and (3) your validator\'s commission fee. The formula is: Net APR = Gross APR × (1 − Validator Commission%). Your daily reward = Staked Amount × Net APR ÷ 365.',
      },
      {
        q: 'What is APR vs APY?',
        a: 'APR is the annual rate before considering compounding. APY is the effective annual return after rewards are compounded. For example, if you restake ATOM rewards daily, your effective return can be higher than the displayed APR because new rewards also start earning rewards.',
      },
      {
        q: 'Are validator commissions included?',
        a: 'Yes. The calculator includes validator commission when computing net rewards. If gross APR is 18% and validator commission is 5%, the estimated net APR is 17.1% because the validator keeps 5% of the rewards earned.',
      },
      {
        q: 'What is validator commission?',
        a: 'Validator commission is the percentage of your rewards that the validator keeps as compensation for running the infrastructure. Typical commissions range from 0% to 10%. A 5% commission means the validator keeps 5% of your gross rewards, and you receive 95%. Lower commission does not always mean better — consider validator uptime, reputation, and community contribution.',
      },
      {
        q: 'What is the unbonding period?',
        a: 'The Cosmos Hub has a 21-day unbonding period. When you unstake (undelegate) your ATOM, it takes 21 days before the tokens become liquid and transferable again. During this period, you do not earn staking rewards. Plan your liquidity needs accordingly.',
      },
      {
        q: 'What is compounding in staking?',
        a: 'Compounding means taking your earned staking rewards and restaking them so they also generate rewards. For example, if you earn 1 ATOM today and restake it, tomorrow that 1 ATOM will also earn rewards. Over time, compounding can significantly increase your total returns compared to letting rewards sit unstaked.',
      },
      {
        q: 'How often are rewards distributed?',
        a: 'On the Cosmos Hub, rewards are typically distributed every block (approximately every 6–7 seconds). However, validators may have different payout frequencies. Many validators auto-compound rewards for delegators, while others require manual claims.',
      },
    ],
  },
  {
    category: 'Calculator Features',
    items: [
      {
        q: 'How accurate is this calculator?',
        a: 'The calculator uses standard mathematical formulas for APR and compound interest calculations. However, actual blockchain rewards can vary due to: network inflation parameter changes, validator performance (missed blocks = lower rewards), slashing events, and changes in total staked supply. Use the calculator as a planning tool, not a guarantee.',
      },
      {
        q: 'Where does the live ATOM price come from?',
        a: 'Live ATOM prices are fetched from the CoinGecko public API. Prices update automatically every 60 seconds. You can also manually override the price if you want to use a different source or simulate scenarios.',
      },
      {
        q: 'Can I export my data?',
        a: 'Yes. You can export your transaction history and reward entries as CSV files from the Settings page. This is useful for tax reporting and record-keeping.',
      },
      {
        q: 'Is my data saved?',
        a: 'Yes — all data is saved locally in your browser\'s localStorage. It persists across browser sessions and works offline. If you clear your browser data or use incognito mode, your data will be lost. We recommend exporting CSV backups periodically.',
      },
      {
        q: 'Can I use this on mobile?',
        a: 'Absolutely. The calculator is fully responsive and works on desktop, tablet, and mobile browsers. On mobile, you get a bottom navigation bar for easy access to all features.',
      },
      {
        q: 'Is this financial advice?',
        a: 'No. This website is for informational and educational purposes only. It does not recommend buying, selling, staking, unstaking, or choosing any validator. You are responsible for your own research and decisions.',
      },
    ],
  },
  {
    category: 'Risks & Considerations',
    items: [
      {
        q: 'What are the risks of staking ATOM?',
        a: 'Key risks include: (1) Slashing — if your validator misbehaves (double-signs or goes offline), a portion of your staked ATOM can be slashed. (2) Liquidity risk — the 21-day unbonding period means you cannot access your funds immediately. (3) Price risk — ATOM price can go down, reducing the fiat value of your holdings and rewards. (4) Validator risk — choosing a unreliable validator can result in missed rewards or slashing.',
      },
      {
        q: 'What is slashing?',
        a: 'Slashing is a penalty mechanism on the Cosmos Hub. If a validator double-signs (tries to cheat the network), both the validator and their delegators lose a significant portion of staked tokens (typically 5%). If a validator is offline for too long, a smaller penalty applies. Choose validators with strong track records and avoid those with history of downtime.',
      },
      {
        q: 'Should I stake all my ATOM?',
        a: 'Not necessarily. Consider keeping some ATOM unstaked for liquidity needs, trading opportunities, or unexpected expenses. A common approach is staking 70–90% of holdings while keeping 10–30% liquid. The right balance depends on your personal financial situation and risk tolerance.',
      },
      {
        q: 'How do I choose a validator?',
        a: 'Consider: (1) Uptime — validators with 100% uptime are ideal. (2) Commission — balance low fees with validator quality. (3) Decentralization — consider delegating to smaller validators to support network health. (4) Community contribution — some validators actively contribute to Cosmos development. (5) Self-bonded amount — validators with significant skin in the game are more aligned with delegators.',
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
          Everything you need to know about ATOM staking and how to use this calculator.
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
