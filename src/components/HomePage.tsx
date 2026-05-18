import { useEffect, useRef } from 'react';
import {
  Calculator,
  TrendingUp,
  TrendingDown,
  Shield,
  Lock,
  Zap,
  BarChart3,
  PieChart,
  Wallet,
  ChevronRight,
  Star,
  Users,
  Globe,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import { PriceStatus } from '../hooks/useLivePrice';
import { LivePriceData } from '../utils/priceApi';

interface Props {
  onNavigate: (page: string) => void;
  livePriceData: LivePriceData | null;
  livePriceStatus: PriceStatus;
  currency: 'USD' | 'EUR';
  apr: number;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="glass-card rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage({
  onNavigate,
  livePriceData,
  livePriceStatus,
  currency,
  apr,
}: Props) {
  const heroRef = useRef<HTMLDivElement>(null);

  const symbol = currency === 'EUR' ? '€' : '$';
  const livePrice = livePriceData ? (currency === 'EUR' ? livePriceData.eur : livePriceData.usd) : null;
  const liveChange = livePriceData
    ? currency === 'EUR'
      ? livePriceData.eurChange24h
      : livePriceData.usdChange24h
    : null;
  const isPriceUp = (liveChange ?? 0) >= 0;
  const priceLabel =
    livePrice !== null
      ? `${symbol}${livePrice.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })}`
      : livePriceStatus === 'loading'
        ? 'Loading...'
        : 'Unavailable';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0 animate-fade-in">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(6,182,212,0.4) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative px-6 py-16 sm:py-24 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />
            Free. Private. No Signup Required.
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 dark:text-white leading-tight mb-6 tracking-tight">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent font-black">
              Cosmos ATOM
            </span>{' '}
            Staking Rewards
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            The most accurate ATOM staking calculator on the web. Project your rewards
            with compounding, track your portfolio, and optimize your validator strategy —
            all in your browser, with zero data collection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-8 py-3.5 text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Calculator className="w-4 h-4" />
              Launch Calculator
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('education')}
              className="flex items-center gap-2 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700 text-gray-300 hover:text-white font-medium rounded-xl px-8 py-3.5 text-sm transition-all cursor-pointer w-full sm:w-auto justify-center"
            >
              <BookOpen className="w-4 h-4" />
              Learn About Staking
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>No Data Collection</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Works Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIVE PRICE TICKER ===== */}
      <section className="py-4">
        <div className="glass-card rounded-xl p-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">Live Market Data</span>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">⚛️ ATOM</span>
            <span className="text-gray-400">—</span>
            <span className="text-white font-semibold">{priceLabel}</span>
            {liveChange !== null && (
              <span
                className={`text-xs font-medium flex items-center gap-0.5 ${
                  isPriceUp ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {isPriceUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {isPriceUp ? '+' : ''}
                {liveChange.toFixed(2)}%
              </span>
            )}
            <span className="text-[10px] text-gray-500">CoinGecko</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Calculator APR:</span>
            <span className="text-cyan-400 font-semibold text-xs">{apr.toFixed(2)}%</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Unbonding:</span>
            <span className="text-amber-400 font-semibold text-xs">21 days</span>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section id="features" className="py-8 scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Everything You Need to Optimize Your ATOM Staking
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            A complete toolkit for Cosmos stakers — from reward projections to portfolio tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            icon={Calculator}
            title="Staking Rewards Calculator"
            description="Calculate daily, weekly, monthly, and yearly rewards. Factor in validator commission and compare compounding vs. simple staking."
            color="bg-cyan-500/20 text-cyan-400"
          />
          <FeatureCard
            icon={TrendingUp}
            title="Growth Projections"
            description="Visualize your portfolio growth over 30 days, 90 days, 6 months, 1 year, 3 years, and 5 years with interactive charts."
            color="bg-emerald-500/20 text-emerald-400"
          />
          <FeatureCard
            icon={Wallet}
            title="Portfolio Tracker"
            description="Track your total ATOM, staked vs. unstaked balance, initial investment, current value, profit/loss, and ROI."
            color="bg-indigo-500/20 text-indigo-400"
          />
          <FeatureCard
            icon={BarChart3}
            title="Reward Tracker"
            description="Manually log every reward claim with dates and notes. See cumulative rewards and monthly breakdown charts."
            color="bg-amber-500/20 text-amber-400"
          />
          <FeatureCard
            icon={PieChart}
            title="Transaction History"
            description="Record buys, sells, stakes, unstakes, restakes, and claims. Export everything to CSV for tax reporting."
            color="bg-purple-500/20 text-purple-400"
          />
          <FeatureCard
            icon={Lock}
            title="100% Private & Offline"
            description="All data stays in your browser. No accounts, no cloud storage, no tracking. Works even without an internet connection."
            color="bg-rose-500/20 text-rose-400"
          />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-8 scroll-mt-24">
        <div className="glass-card rounded-2xl p-6 sm:p-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How It Works
            </h2>
            <p className="text-sm text-gray-400">
              Get your staking projections in under 60 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Enter Your Holdings"
              description="Input your total ATOM balance, how much is staked, your average buy price, and the current ATOM price."
            />
            <StepCard
              number="2"
              title="Set Your Parameters"
              description="Enter your validator's APR and commission rate. Choose your compounding frequency: daily, weekly, monthly, or none."
            />
            <StepCard
              number="3"
              title="See Your Projections"
              description="Instantly view your reward estimates, growth charts, portfolio value, and ROI — all updated in real time."
            />
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-8 py-3 text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              Start Calculating Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY STAKE ATOM ===== */}
      <section className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Stake Cosmos ATOM?
            </h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Cosmos ATOM is one of the most popular staking assets in crypto. By staking your
              ATOM with a validator, you help secure the Cosmos Hub network and earn passive
              income in return — typically between 15% and 20% APR.
            </p>
            <div className="space-y-3">
              {[
                'Earn passive income while holding your ATOM',
                'Participate in network governance and voting',
                'Compounding rewards can significantly boost long-term returns',
                'No minimum stake amount — stake any amount of ATOM',
                'Support decentralization by choosing smaller validators',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('education')}
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
            >
              Read the full staking guide
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Example: 1,000 ATOM Staked</h3>
            <div className="space-y-3">
              {[
                { label: 'Staked Amount', value: '1,000 ATOM' },
                { label: 'APR', value: '18.5%' },
                { label: 'Validator Commission', value: '5%' },
                { label: 'Net APR', value: '17.58%' },
                { label: 'Yearly Rewards (Simple)', value: '~175.8 ATOM' },
                { label: 'Yearly Rewards (Compounded Daily)', value: '~191.4 ATOM' },
                { label: 'Compounding Bonus', value: '+15.6 ATOM extra' },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0"
                >
                  <span className="text-sm text-gray-400">{row.label}</span>
                  <span className="text-sm font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              *Estimates only. Actual rewards depend on network conditions and validator performance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TRUST SIGNALS ===== */}
      <section className="py-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, label: 'Active Users', value: '10,000+' },
              { icon: Star, label: 'Average Rating', value: '4.9 / 5' },
              { icon: Globe, label: 'Countries', value: '120+' },
              { icon: Shield, label: 'Data Never Leaves Browser', value: '100% Private' },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <Icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400">
            Quick answers to common questions about ATOM staking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            {
              q: 'What is ATOM staking?',
              a: 'Staking ATOM means locking your tokens with a validator to help secure the Cosmos Hub network. In return, you earn staking rewards paid in additional ATOM.',
            },
            {
              q: 'How are staking rewards calculated?',
              a: 'Rewards depend on your staked amount, the network APR, and your validator\'s commission rate. Our calculator factors all of these automatically.',
            },
            {
              q: 'What is compounding in staking?',
              a: 'Compounding means restaking your earned rewards so they also generate rewards. Over time, this can significantly increase your total returns compared to simple staking.',
            },
            {
              q: 'Is this calculator accurate?',
              a: 'Our calculator uses standard financial formulas. However, actual blockchain rewards can vary due to network inflation changes, validator performance, and slashing events.',
            },
          ].map((faq, i) => (
            <div key={i} className="glass-card rounded-xl p-5">
              <h4 className="text-sm font-bold text-white mb-2 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                {faq.q}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('faq')}
            className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
          >
            View all FAQs
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 p-8 sm:p-12 text-center">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Calculate Your Staking Rewards?
            </h2>
            <p className="text-sm text-cyan-100 mb-6 max-w-lg mx-auto">
              Start projecting your ATOM returns in seconds. No signup, no wallet connection,
              no data collection — just pure math.
            </p>
            <button
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 font-bold rounded-xl px-8 py-3.5 text-sm transition-all shadow-xl cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              Open the Calculator
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER STRIP ===== */}
      <section className="py-4">
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/15">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-amber-300/80 font-medium mb-1">Disclaimer</p>
            <p className="text-xs text-gray-500 leading-relaxed">
              This calculator provides estimates only and does not constitute financial advice.
              Actual staking rewards may vary. Cryptocurrency investments carry risk of loss.
              Always do your own research before staking.{' '}
              <button
                onClick={() => onNavigate('disclaimer')}
                className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
              >
                Read full disclaimer
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
