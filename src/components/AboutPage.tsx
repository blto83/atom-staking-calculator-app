import { Calculator, CheckCircle2, Shield, TrendingUp, Users } from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: Props) {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <Users className="w-3.5 h-3.5" />
          About the Platform
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Clear ATOM Staking Calculations for Everyday Cosmos Users
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          ATOM Staking Calculator & Portfolio Tracker helps users understand Cosmos ATOM staking rewards,
          APR, validator fees, compounding, and long-term portfolio projections in a simple,
          beginner-friendly way.
        </p>
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Our Mission</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          Cosmos staking can be powerful, but many users struggle to understand how APR, APY,
          validator commission, reward claims, restaking frequency, and price changes affect their
          real results. This platform exists to make those numbers easier to understand before users
          make decisions with their own wallets.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed">
          The goal is not to predict the future or tell anyone what to buy. The goal is to provide a
          practical, transparent calculator that helps users compare scenarios, track their local
          portfolio records, and learn how ATOM staking rewards work.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: TrendingUp,
            title: 'Reward Clarity',
            text: 'Estimate daily, monthly, yearly, simple, and compounded ATOM staking rewards.',
            color: 'bg-emerald-500/20 text-emerald-400',
          },
          {
            icon: Shield,
            title: 'Privacy First',
            text: 'No login, no wallet connection, and portfolio data is stored locally in your browser.',
            color: 'bg-cyan-500/20 text-cyan-400',
          },
          {
            icon: Users,
            title: 'Beginner Friendly',
            text: 'Plain-language explanations for APR, APY, validator commission, and compounding.',
            color: 'bg-indigo-500/20 text-indigo-400',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass-card rounded-xl p-5">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
            </div>
          );
        })}
      </section>

      <section className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-5">What You Can Do Here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Calculate estimated ATOM rewards after validator commission.',
            'Compare APR and APY-style compounding outcomes.',
            'Project ATOM growth over 30 days, 1 year, 3 years, and 5 years.',
            'Track staked and unstaked ATOM balances locally.',
            'Log reward claims and staking-related transactions.',
            'Export reward and transaction records to CSV.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 p-6 sm:p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to run your own ATOM numbers?</h2>
        <p className="text-sm text-cyan-100 max-w-xl mx-auto mb-5">
          Open the calculator, enter your ATOM amount, APR, and validator commission, and compare
          simple staking against compounding.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold rounded-xl px-6 py-3 text-sm transition-colors cursor-pointer"
        >
          Launch Calculator
        </button>
      </section>
    </div>
  );
}