import {
  BookOpen,
  Atom,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Lock,
  Clock,
  Users,
  Zap,
} from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

function Section({
  icon: Icon,
  title,
  children,
  color,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  color: string;
}) {
  return (
    <section className="glass-card rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function EducationPage({ onNavigate }: Props) {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          Education Hub
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Understanding Cosmos ATOM Staking
        </h1>
        <p className="text-sm text-gray-400 max-w-lg mx-auto">
          A beginner-friendly guide to staking ATOM, how it works, and how to maximize your returns.
        </p>
      </div>

      {/* What is Cosmos */}
      <Section icon={Atom} title="What is Cosmos (ATOM)?" color="bg-cyan-500/20 text-cyan-400">
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Cosmos is a decentralized network of independent parallel blockchains, each powered by
          Byzantine Fault-Tolerant (BFT) consensus algorithms like Tendermint. ATOM is the native
          token of the Cosmos Hub — the first blockchain in the Cosmos ecosystem.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Unlike many cryptocurrencies, ATOM is primarily a staking and governance token. Its value
          proposition comes from securing the network, participating in governance decisions, and
          earning staking rewards. The Cosmos ecosystem has grown to include hundreds of interconnected
          chains, making ATOM one of the most important infrastructure tokens in crypto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { label: 'Token Symbol', value: 'ATOM' },
            { label: 'Consensus', value: 'Tendermint BFT' },
            { label: 'Typical APR', value: '15% – 20%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-800/40 rounded-lg p-3 text-center">
              <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
              <p className="text-sm font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What is Staking */}
      <Section icon={Lock} title="What is Staking?" color="bg-indigo-500/20 text-indigo-400">
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Staking is the process of locking up cryptocurrency tokens to support the operations of a
          blockchain network. In proof-of-stake networks like Cosmos, staked tokens are used to
          validate transactions and secure the network. In return for this service, stakers receive
          rewards — typically paid in the same token they staked.
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'Delegation',
              desc: 'You delegate your ATOM to a validator who runs the network infrastructure. You retain ownership of your tokens.',
            },
            {
              title: 'Validation',
              desc: 'Validators use delegated tokens to participate in consensus — proposing and voting on blocks.',
            },
            {
              title: 'Rewards',
              desc: 'The network mints new ATOM as inflation rewards, which are distributed to validators and their delegators.',
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section icon={TrendingUp} title="Benefits of Staking ATOM" color="bg-emerald-500/20 text-emerald-400">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: Zap,
              title: 'Passive Income',
              desc: 'Earn 15–20% APR on your holdings without selling. Rewards compound over time for even greater returns.',
            },
            {
              icon: Shield,
              title: 'Network Security',
              desc: 'By staking, you help secure the Cosmos Hub. A more decentralized stake distribution makes the network more resilient.',
            },
            {
              icon: Users,
              title: 'Governance Rights',
              desc: 'Staked ATOM gives you voting power on protocol upgrades, parameter changes, and community spend proposals.',
            },
            {
              icon: TrendingUp,
              title: 'Compound Growth',
              desc: 'Restaking your rewards creates a snowball effect. Over 5 years, compounding can add 10–20% more ATOM than simple staking.',
            },
          ].map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-gray-800/30 rounded-xl p-4">
                <Icon className="w-5 h-5 text-emerald-400 mb-2" />
                <p className="text-sm font-semibold text-white mb-1">{benefit.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Risks */}
      <Section icon={AlertTriangle} title="Risks to Consider" color="bg-red-500/20 text-red-400">
        <div className="space-y-4">
          {[
            {
              title: 'Slashing Risk',
              desc: 'If your validator double-signs or is offline for extended periods, a portion of your staked ATOM can be slashed (permanently lost). Choose validators with strong uptime records.',
            },
            {
              title: 'Unbonding Period',
              desc: 'Cosmos has a 21-day unbonding period. Once you initiate unstaking, you must wait 21 days before your ATOM becomes liquid. During this time, you earn no rewards.',
            },
            {
              title: 'Price Volatility',
              desc: 'ATOM price can fluctuate significantly. Even with high staking rewards, a sharp price drop can result in a net loss when measured in fiat terms.',
            },
            {
              title: 'Validator Risk',
              desc: 'Not all validators are equal. Some may have poor infrastructure, high commission, or questionable practices. Research validators before delegating.',
            },
          ].map((risk) => (
            <div key={risk.title} className="flex gap-3">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">{risk.title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{risk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to Choose Validator */}
      <Section icon={Users} title="How to Choose a Validator" color="bg-purple-500/20 text-purple-400">
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Your choice of validator directly impacts your rewards and risk exposure. Here are the key
          factors to evaluate:
        </p>
        <div className="space-y-3">
          {[
            {
              title: 'Uptime & Performance',
              desc: 'Look for validators with 99.9%+ uptime. Missed blocks = missed rewards for you.',
            },
            {
              title: 'Commission Rate',
              desc: 'Lower is not always better. Extremely low commissions (0–1%) may indicate unsustainable operations. 3–7% is a healthy range.',
            },
            {
              title: 'Self-Bonded Amount',
              desc: 'Validators who stake their own ATOM have more skin in the game. Higher self-bond = more aligned incentives.',
            },
            {
              title: 'Decentralization',
              desc: 'Consider delegating to smaller validators. This strengthens network decentralization and often comes with lower commissions.',
            },
            {
              title: 'Community Contribution',
              desc: 'Some validators contribute code, run public infrastructure, or fund ecosystem projects. Supporting them benefits the whole network.',
            },
          ].map((tip, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">{tip.title}</p>
                <p className="text-sm text-gray-400">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Compounding Explained */}
      <Section icon={Clock} title="The Power of Compounding" color="bg-amber-500/20 text-amber-400">
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Compounding is one of the most powerful forces in investing — and it applies to staking too.
          When you restake your rewards, those rewards start generating their own rewards, creating a
          snowball effect over time.
        </p>
        <div className="glass-card rounded-xl p-5 mb-4">
          <h4 className="text-sm font-bold text-white mb-3">Example: 1,000 ATOM at 18.5% APR</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-xs text-gray-500 font-medium">Period</th>
                <th className="text-right py-2 text-xs text-gray-500 font-medium">Simple</th>
                <th className="text-right py-2 text-xs text-gray-500 font-medium">Daily Compound</th>
                <th className="text-right py-2 text-xs text-gray-500 font-medium">Bonus</th>
              </tr>
            </thead>
            <tbody>
              {[
                { period: '1 Year', simple: '1,185.0', compound: '1,202.8', bonus: '+17.8' },
                { period: '2 Years', simple: '1,370.0', compound: '1,446.7', bonus: '+76.7' },
                { period: '3 Years', simple: '1,555.0', compound: '1,740.1', bonus: '+185.1' },
                { period: '5 Years', simple: '1,925.0', compound: '2,512.9', bonus: '+587.9' },
              ].map((row) => (
                <tr key={row.period} className="border-b border-gray-800/50">
                  <td className="py-2 text-gray-300">{row.period}</td>
                  <td className="py-2 text-right text-gray-300">{row.simple}</td>
                  <td className="py-2 text-right text-cyan-400 font-semibold">{row.compound}</td>
                  <td className="py-2 text-right text-emerald-400 font-semibold">{row.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-3">
            *Assumes 5% validator commission (net APR ~17.58%). Numbers are illustrative.
          </p>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Over 5 years, daily compounding can earn you nearly 30% more ATOM than simple staking.
          This is why many stakers use auto-compounding services or manually restake rewards regularly.
        </p>
      </Section>

      {/* CTA */}
      <div className="glass-card rounded-2xl p-8 text-center">
        <h3 className="text-lg font-bold text-white mb-2">
          Ready to Calculate Your Returns?
        </h3>
        <p className="text-sm text-gray-400 mb-5 max-w-md mx-auto">
          Use our free calculator to project your ATOM staking rewards with real-time prices
          and compounding options.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-8 py-3 text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
        >
          Launch Calculator
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
