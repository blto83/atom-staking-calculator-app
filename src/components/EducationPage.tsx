import { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Atom,
  Shield,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Search,
  Calendar,
  User,
  Calculator,
  Lock,
  ChevronLeft,
} from 'lucide-react';

interface Props {
  onNavigate: (page: string) => void;
}

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Beginner Guides' | 'APR / APY Education' | 'Validator Guides' | 'Risk & Safety' | 'Portfolio Growth';
  author: string;
  date: string;
  readTime: string;
  thumbnailGradient: string;
  emoji: string;
}

const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'what-is-cosmos-atom-staking-beginner-guide-2026',
    title: 'What Is Cosmos ATOM Staking? Beginner Guide (2026)',
    excerpt: 'Understand the fundamentals of Cosmos Hub, how delegation secures the ecosystem, and the simple steps to earn secure proof-of-stake passive income in 2026.',
    category: 'Beginner Guides',
    author: 'Atom Staking Calculator Team',
    date: 'January 18, 2026',
    readTime: '5 min read',
    thumbnailGradient: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20 border-cyan-500/30',
    emoji: '⚛️',
  },
  {
    id: '2',
    slug: 'staking-apr-vs-apy-mathematics-of-compounding-atom',
    title: 'Staking APR vs APY: The Mathematics of Compounding ATOM',
    excerpt: 'Simple interest vs. compound growth. Discover how restaking compounding intervals work and how daily redelegating dramatically maximizes your returns.',
    category: 'APR / APY Education',
    author: 'Atom Staking Calculator Team',
    date: 'January 22, 2026',
    readTime: '7 min read',
    thumbnailGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border-emerald-500/30',
    emoji: '📈',
  },
  {
    id: '3',
    slug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics',
    title: 'How to Choose the Right Cosmos Validator: 5 Core Metrics',
    excerpt: 'Not all validators are equal. Evaluate server uptime, self-bonded stake, and commission fee thresholds to make secure delegations.',
    category: 'Validator Guides',
    author: 'Atom Staking Calculator Team',
    date: 'January 24, 2026',
    readTime: '6 min read',
    thumbnailGradient: 'from-purple-500/20 via-indigo-500/20 to-pink-500/20 border-purple-500/30',
    emoji: '🛡️',
  },
  {
    id: '4',
    slug: 'atom-staking-risks-slashing-and-unbonding-period-explained',
    title: 'ATOM Staking Risks: Slashing and the 21-Day Unbonding Period',
    excerpt: 'An in-depth look at staking risks. Protect your ATOM from validator double-signing, jailing, and network unbonding constraints.',
    category: 'Risk & Safety',
    author: 'Atom Staking Calculator Team',
    date: 'January 26, 2026',
    readTime: '8 min read',
    thumbnailGradient: 'from-red-500/20 via-orange-500/20 to-amber-500/20 border-red-500/30',
    emoji: '⚠️',
  },
  {
    id: '5',
    slug: 'maximized-atom-portfolio-planning-passive-income-strategy',
    title: 'Maximized ATOM Portfolio Planning: Passive Income Strategy',
    excerpt: 'Learn optimal liquid ratios, gas allocation rules, and redelegation strategies to manage a premium staking portfolio.',
    category: 'Portfolio Growth',
    author: 'Atom Staking Calculator Team',
    date: 'January 28, 2026',
    readTime: '6 min read',
    thumbnailGradient: 'from-amber-500/20 via-yellow-500/20 to-orange-500/20 border-amber-500/30',
    emoji: '💼',
  },
];

export default function EducationPage({ onNavigate }: Props) {
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/learn/')) {
      return path.replace('/learn/', '');
    }
    return null;
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.startsWith('/learn/')) {
        setSelectedArticleSlug(path.replace('/learn/', ''));
      } else {
        setSelectedArticleSlug(null);
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('locationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('locationchange', handleLocationChange);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Beginner Guides', 'APR / APY Education', 'Validator Guides', 'Risk & Safety', 'Portfolio Growth'];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = useMemo(() => {
    return ARTICLES[0]; // "What Is Cosmos ATOM Staking? Beginner Guide (2026)" is the featured one
  }, []);

  const currentArticle = useMemo(() => {
    if (!selectedArticleSlug) return null;
    return ARTICLES.find((a) => a.slug === selectedArticleSlug);
  }, [selectedArticleSlug]);

  const handleArticleClick = (slug: string) => {
    window.history.pushState({ page: 'education' }, '', `/learn/${slug}`);
    setSelectedArticleSlug(slug);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    window.history.pushState({ page: 'education' }, '', `/learn`);
    setSelectedArticleSlug(null);
    window.scrollTo(0, 0);
  };

  if (currentArticle) {
    return (
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
        {/* Back button */}
        <button
          onClick={handleBackToList}
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Education Hub
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
            {currentArticle.category}
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {currentArticle.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500 border-b border-gray-800 pb-6">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {currentArticle.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {currentArticle.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {currentArticle.readTime}
            </span>
          </div>
        </div>

        {/* Render Full Structured Article Content based on slug */}
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6 leading-relaxed text-sm sm:text-base">
          {currentArticle.slug === 'what-is-cosmos-atom-staking-beginner-guide-2026' && (
            <>
              <p className="text-base text-gray-400 italic">
                Staking ATOM is the foundation of securing the Interchain ecosystem. In this beginner-friendly guide, we will unpack exactly what Cosmos is, how proof-of-stake delegation works, and how you can securely earn passive yields.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Atom className="w-5 h-5 text-cyan-400" />
                1. Understanding the Cosmos (ATOM) Network
              </h2>
              <p>
                Cosmos is a decentralized network of independent parallel blockchains, each powered by BFT consensus algorithms like Tendermint. ATOM is the native utility and governance token of the Cosmos Hub — the primary router block that serves as the heart of the Cosmos ecosystem.
              </p>
              <p>
                Unlike many legacy cryptocurrencies, ATOM is primarily designed as a security and governance token. Its value proposition comes from securing the Hub, participating in governance voting, and receiving continuous staking inflation rewards.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Lock className="w-5 h-5 text-indigo-400" />
                2. What is Staking?
              </h2>
              <p>
                Staking is the process of locking up cryptocurrency tokens to secure block validation on a blockchain network. In Delegated Proof-of-Stake (DPoS) chains like Cosmos, you delegate your ATOM to a trusted validator who runs network server nodes.
              </p>
              <p>
                Your tokens never actually leave your custody — they remain completely secured in your non-custodial wallet. You are simply delegating your voting power to a node runner, who splits earned minting rewards with you proportionally.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Zap className="w-5 h-5 text-emerald-400" />
                3. Core Staking Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-white mb-1.5">Passive Income Yield</h4>
                  <p className="text-xs text-gray-400">
                    Stakers earn typically between 14% and 20% APR in newly minted ATOM tokens, helping you combat inflation.
                  </p>
                </div>
                <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-white mb-1.5">Ecosystem Governance</h4>
                  <p className="text-xs text-gray-400">
                    Staked ATOM grants you a direct vote on governance updates, ecosystem spend parameters, and software proposals.
                  </p>
                </div>
              </div>

              <p>
                By delegation, you actively secure the Cosmos Hub against governance attacks and help validate transaction blocks. If you want to model scenarios for your own holdings, you can use our live{' '}
                <button onClick={() => onNavigate('dashboard')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  Staking Portfolio Dashboard
                </button>
                . For a quick list of frequently asked questions about wallet setup and unbonding, explore our complete{' '}
                <button onClick={() => onNavigate('faq')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  ATOM FAQ Help Center
                </button>
                .
              </p>
            </>
          )}

          {currentArticle.slug === 'staking-apr-vs-apy-mathematics-of-compounding-atom' && (
            <>
              <p className="text-base text-slate-600 dark:text-slate-300 italic font-medium leading-relaxed mb-6">
                Staking yield on Cosmos is commonly expressed as a simple baseline percentage (APR). However, by implementing an optimized compounding strategy, you transition into the domain of exponential interest (APY), which dramatically shifts your long-term ATOM accumulation. In this guide, we break down the exact differences, validator fee impacts, and variables that define your real returns.
              </p>

              {/* Early CTA Block 1 */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/35 rounded-xl p-5 my-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Scenario Simulator</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-semibold">
                    Use our ATOM Staking Calculator to compare APR vs APY instantly.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg px-4 py-2 text-xs transition-colors cursor-pointer shrink-0 shadow"
                >
                  Open Calculator
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <TrendingUp className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                Introduction: Why Stakers Misunderstand ATOM APR
              </h2>
              <p>
                Delegating ATOM tokens to help secure the Cosmos Hub network is one of the most popular yield-generation strategies in the entire digital asset ecosystem. However, a significant portion of participants struggle to distinguish between the advertised Annual Percentage Rate (APR) and the real Annual Percentage Yield (APY) they eventually capture. This misunderstanding frequently leads to inefficient delegation frequencies, poorly chosen validator partnerships, and missed compounding potential.
              </p>
              <p>
                Staking is not a static bank deposit. In Delegated Proof-of-Stake (DPoS) networks, returns are dynamic, fluid, and highly responsive to strategic decisions. By understanding the underlying mathematics, you can optimize your claim schedules, minimize validator drag, and harness the exponential power of compounding to secure your financial goals.
              </p>
              <p>
                Over a multi-year timeline, even a single percentage variance grows into a significant reward gap. By applying a consistent reinvestment cadence, you transition your yield from a simple linear projection to an accelerated compounding curve. Let\\'s unpack the mathematical logic that dictates these results.
              </p>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Atom className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                1. What Is Staking APR?
              </h2>
              <p>
                Annual Percentage Rate (APR) represents the simple interest rate distributed directly by the Cosmos Hub protocol over one year, without factoring in the reinvestment of earned rewards. When you delegate your ATOM to a validator, you validate block transactions, and in return, the protocol mints new tokens to pay out block rewards.
              </p>
              <p>
                The gross APR is determined at the network level based on target staking ratios and block inflation parameters. However, the actual return you receive as a delegator is always lower than this gross figure. Validators charge a commission fee for hosting validator servers, maintaining high-availability node software, and preventing downtime.
              </p>
              <p>
                Staking rewards accumulate per block (every 6–7 seconds) in a separate on-chain reward balance. Under simple APR, these rewards sit idle and do not generate any additional return. For example, if you leave your rewards unclaimed for 12 months, your return is strictly bound by your initial staked principal multiplied by your net APR.
              </p>

              {/* Quick Math Example Box 1 */}
              <div className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40 my-6">
                <div className="flex items-center gap-2 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                  <span>Quick Math: Simple APR</span>
                </div>
                <ul className="space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">
                  <li>• Principal Staked: <span className="text-slate-900 dark:text-white font-bold">1,000 ATOM</span></li>
                  <li>• Gross Network APR: <span className="text-slate-900 dark:text-white font-bold">18.0%</span></li>
                  <li>• Validator Commission: <span className="text-slate-900 dark:text-white font-bold">5.0%</span></li>
                  <li>• Net Staking APR: <span className="text-emerald-600 dark:text-emerald-400 font-bold">17.1%</span> (18.0% * 0.95)</li>
                  <li>• Yearly Simple Returns: <span className="text-slate-900 dark:text-white font-bold">171.0 ATOM</span></li>
                </ul>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Lock className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                2. What Is Staking APY?
              </h2>
              <p>
                Annual Percentage Yield (APY) represents the total interest return over one year when compounding is active. On the Cosmos Hub, rewards are minted and accumulated per block (every 6–7 seconds), meaning they are ready to be reinvested almost instantly.
              </p>
              <p>
                Reinvesting rewards adds to your staked principal. Over time, this results in a "yield on yield" snowball effect. A 18% APR with daily compounding yields an effective return of over 19.7% APY. On a multi-year timeline, this tiny variance changes the output from simple linear expansion to accelerated compounding growth.
              </p>
              <p>
                The power of APY lies in the compounding frequency. If you claim and restake your ATOM daily, your effective daily rate is compounded 365 times in a year. This daily reinvestment loop creates an exponential growth rate that dramatically outperforms standard APR over longer time horizons.
              </p>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Clock className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                3. APR vs APY — Core Mathematical Difference
              </h2>
              <p>
                The mathematical difference between APR and APY is defined by the compounding frequency:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40">
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Simple APR Formula</span>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white mt-2 font-mono">A = P * (1 + r)</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
                    P = principal, r = simple interest rate. Growth scales linearly with time.
                  </p>
                </div>
                <div className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40">
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">Compounded APY Formula</span>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white mt-2 font-mono">A = P * (1 + r / n)^(n * t)</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed font-semibold">
                    n = compounding events per year, t = years. Growth scales exponentially.
                  </p>
                </div>
              </div>

              <p>
                Let\\'s look at a side-by-side mathematical comparison of different holding sizes over 1, 3, and 5 years, factoring in a standard 18.5% gross APR and a 5% validator commission (17.58% net APR).
              </p>

              {/* Table 1: Principal Comparison Table */}
              <div className="glass-card rounded-xl p-5 my-6 overflow-x-auto shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Compounding vs. Simple Yield Over Time (Net APR: 17.58%)
                </h4>
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="text-left py-2 text-slate-500 font-bold">Principal</th>
                      <th className="text-left py-2 text-slate-500 font-bold">Time Horizon</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Simple Staking</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Daily Compounded</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Staking Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">100 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">1 Year</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">117.58 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">119.21 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+1.63 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">100 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">5 Years</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">187.90 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">240.77 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+52.87 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">500 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">1 Year</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">587.90 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">596.07 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+8.17 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">500 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">5 Years</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">939.50 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">1,203.87 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+264.37 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">1,000 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">1 Year</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,175.80 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">1,192.15 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+16.35 ATOM</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-bold">1,000 ATOM</td>
                      <td className="py-2 text-slate-500 font-semibold">5 Years</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,879.00 ATOM</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">2,407.75 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">+528.75 ATOM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Clock className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                4. Staking Compounding Frequencies and Gas Fee Tradeoffs
              </h2>
              <p>
                You might assume that compounding as frequently as possible (e.g., every hour) is always the best strategy. In reality, you must consider on-chain gas costs. Every time you claim and delegate on the Cosmos blockchain, you pay a transaction fee. Overcompounding a small balance will eat your profits.
              </p>

              {/* Table 2: Compounding Frequencies Table */}
              <div className="glass-card rounded-xl p-5 my-6 overflow-x-auto shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Compounding Frequency Comparison (1,000 ATOM Staked, 17.58% net APR)
                </h4>
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800">
                      <th className="text-left py-2 text-slate-500 font-bold">Compounding Frequency</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Compounding Events / Yr</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Estimated APY</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Yearly Output</th>
                      <th className="text-right py-2 text-slate-500 font-bold">Net Rewards (est.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-semibold">Daily Restaking</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">365</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">19.21%</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,192.15 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">192.15 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-semibold">Weekly Restaking</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">52</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">19.17%</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,191.78 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">191.78 ATOM</td>
                    </tr>
                    <tr className="border-b border-slate-200/60 dark:border-slate-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-semibold">Monthly Restaking</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">12</td>
                      <td className="py-2 text-right text-cyan-600 dark:text-cyan-400 font-bold">19.03%</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,190.34 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">190.34 ATOM</td>
                    </tr>
                    <tr className="border-b border-gray-800/50">
                      <td className="py-2 text-slate-900 dark:text-white font-semibold">No Compounding (Simple)</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">0</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">17.58%</td>
                      <td className="py-2 text-right text-slate-700 dark:text-slate-300">1,175.80 ATOM</td>
                      <td className="py-2 text-right text-emerald-600 dark:text-emerald-400 font-bold">175.80 ATOM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mid CTA Block */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/35 rounded-xl p-5 my-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Validator Analytics & Math</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-semibold">
                    Compare validator commission scenarios with live calculations.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg px-4 py-2 text-xs transition-colors cursor-pointer shrink-0"
                >
                  Open Dashboard
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Users className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                5. Validator Commission Fees and Compounding Power Drag
              </h2>
              <p>
                When choosing validators, pay close attention to the commission rate. This is the percentage fee the node runner keeps to cover operation expenses. Even a small commission fee will slowly compound into a significant drag on your rewards.
              </p>

              {/* Quick Math Example Box 2 */}
              <div className="border border-slate-200 dark:border-slate-800/60 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/40 my-6">
                <div className="flex items-center gap-2 text-xs font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                  <span>Validator Fee Impact (18.5% Gross APR)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">
                  <li>
                    • <span className="text-slate-900 dark:text-white font-bold">5% Commission:</span> Net APR is <span className="text-cyan-600 dark:text-cyan-400 font-bold">17.58%</span>. Yields <span className="text-emerald-600 dark:text-emerald-400 font-bold">19.21% APY</span> with daily compounding.
                  </li>
                  <li>
                    • <span className="text-slate-900 dark:text-white font-bold">10% Commission:</span> Net APR is <span className="text-cyan-600 dark:text-cyan-400 font-bold">16.65%</span>. Yields <span className="text-emerald-600 dark:text-emerald-400 font-bold">18.11% APY</span> with daily compounding.
                  </li>
                  <li>
                    • <span className="text-slate-900 dark:text-white font-bold">20% Commission:</span> Net APR is <span className="text-cyan-600 dark:text-cyan-400 font-bold">14.80%</span>. Yields <span className="text-emerald-600 dark:text-emerald-400 font-bold">15.95% APY</span> with daily compounding.
                  </li>
                </ul>
              </div>

              <p>
                Chasing validators that advertise a 0% commission is not always the best long-term strategy. Often, these operators will raise their commission fees later once they attract delegations. They also have less incentive to maintain high-quality infrastructure, increasing your risk of downtime or slashing.
              </p>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400" />
                6. Staking Variables You Cannot Ignore
              </h2>
              <p>
                Before delegating, keep these key variables in mind:
              </p>
              <ul className="space-y-3 my-4 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">Gas Fees:</strong> You must pay gas for every transaction. Ensure your claim rewards are larger than the gas fee required to execute the claim and redelegation.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">Price Volatility:</strong> Earning high ATOM staking yields will not prevent losses in fiat value if the market price of ATOM drops significantly.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">Unbonding Periods:</strong> Unstaking ATOM triggers a strict 21-day unbonding freeze. During these 21 days, you earn no rewards and cannot move or sell your tokens.
                </li>
              </ul>

              {/* Common Mistake Warning Box */}
              <div className="border border-red-200 dark:border-red-500/25 rounded-xl p-5 bg-red-50 dark:bg-red-500/5 my-6 flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-red-800 dark:text-red-400 uppercase tracking-wider">Common Mistake Alert</h4>
                  <p className="text-xs sm:text-sm text-red-700 dark:text-red-300/90 mt-1 leading-relaxed font-semibold">
                    Never stake 100% of your ATOM balance. Staking transactions leave zero liquid funds in your wallet to pay for gas fees. If you stake everything, your wallet will be locked out, and you will be unable to claim rewards or undelegate without first buying or transferring more ATOM to pay for the transaction fee.
                  </p>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5 mt-8 mb-4">
                <Shield className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                7. Optimized Compounding Strategy Examples
              </h2>
              <p>
                How often should you compound? The right compounding interval depends on the size of your staking pool:
              </p>
              <ul className="space-y-3 my-4 text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">Under 100 ATOM:</strong> Compound monthly or bi-weekly. Compounding daily will spend too much in gas fees relative to the tiny yield increment.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">100 to 1,000 ATOM:</strong> Compound weekly or bi-weekly. This balance range hits the sweet spot for compounding advantages without wasting too much gas.
                </li>
                <li>
                  <strong className="text-slate-900 dark:text-white font-bold">Over 1,000 ATOM:</strong> Compound daily or weekly. The large size of your staking pool makes the daily gas fee negligible relative to the compounding returns.
                </li>
              </ul>

              <p>
                To learn more about how these variables interact, we highly recommend reading our introductory{' '}
                <button onClick={() => onNavigate('education')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  ATOM Staking Beginner Guide
                </button>
                . You can also check out our validator selection guide,{' '}
                <button onClick={() => onNavigate('education')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  5 Core Validator Metrics
                </button>
                , or read more about risk management on our{' '}
                <button onClick={() => onNavigate('education')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  ATOM Staking Risks Page
                </button>
                .
              </p>
            </>
          )}

          {currentArticle.slug === 'how-to-choose-the-right-cosmos-validator-5-core-metrics' && (
            <>
              <p className="text-base text-gray-400 italic">
                Delegating your tokens is a vote of trust. Choosing a validator is not just about selecting the lowest fee; you must evaluate performance and decentralization metrics to protect your capital.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Users className="w-5 h-5 text-purple-400" />
                1. Key Validator Metrics
              </h2>
              <p>
                When selecting validators through non-custodial interfaces like Keplr, Cosmostation, or Leap wallet, analyze these vital characteristics:
              </p>
              <ul className="space-y-3 my-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Uptime and Infrastructure:</strong> Target node operators maintaining 99.9% uptime. Missed validation blocks reduce your rewards.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Commission Fee Structure:</strong> Commissions usually range from 2% to 10%. Avoid 0% commission nodes as they are often financially unsustainable, and avoid 100% commission nodes unless they are specific institutional networks.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Decentralization Support:</strong> Consider delegating to top-20 to top-100 range validators. Spreading stake down the ranks boosts the overall security and Nakamoto coefficient of the Cosmos Hub.
                  </div>
                </li>
              </ul>

              <p>
                For a deep dive on validator slashing, unbonding lockups, and general wallet tips, please visit the full{' '}
                <button onClick={() => onNavigate('faq')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  ATOM Staking FAQ
                </button>
                . To model your portfolio returns with customized validator commission adjustments, open the{' '}
                <button onClick={() => onNavigate('dashboard')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  Portfolio Tracker
                </button>
                .
              </p>
            </>
          )}

          {currentArticle.slug === 'atom-staking-risks-slashing-and-unbonding-period-explained' && (
            <>
              <p className="text-base text-gray-400 italic">
                Staking rewards are lucrative, but they represent payment for undertaking specific network risks. Here, we explore the realities of slashing parameters and liquidity constraints.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                1. Slashing Risks: Double-Signing vs. Downtime
              </h2>
              <p>
                Slashing is a protocol-level penalty used to punish validator misbehavior. If a validator double-signs (proposing two conflicting blocks at the same time), the network slashes 5% of all delegated tokens permanently and tombstonables the validator node.
              </p>
              <p>
                If a validator experiences prolonged downtime (misses over 95% of consecutive 10,000 blocks), they get jailed and lose 0.01% of delegations. While downtime slashing is negligible, being jailed means the node generates zero rewards until the operator unjails it manually.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Shield className="w-5 h-5 text-amber-400" />
                2. The 21-Day Unbonding lockup
              </h2>
              <p>
                When undelegating ATOM, the network imposes a strict 21-day unbonding freeze. During these 21 days, your ATOM does not earn staking rewards, cannot be transferred, and cannot be traded. This prevents malicious stakers from unstaking instantly during a governance attack.
              </p>
              <p>
                Be absolutely certain you do not need quick capital liquidity before initiating the delegation lockup. For complete transparency on these liabilities and browser data saving protocols, consult our official{' '}
                <button onClick={() => onNavigate('disclaimer')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  Disclaimer Page
                </button>
                .
              </p>
            </>
          )}

          {currentArticle.slug === 'maximized-atom-portfolio-planning-passive-income-strategy' && (
            <>
              <p className="text-base text-gray-400 italic">
                Efficient capital allocation is critical in crypto finance. Let\\'s review the strategy of maintaining liquid reserves, managing gas parameters, and tracking active returns.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5 mt-8">
                <Users className="w-5 h-5 text-cyan-400" />
                1. Portfolio Allocation and Gas Reserves
              </h2>
              <p>
                Staking 100% of your ATOM is a common beginner trap. On the Cosmos Hub, you need unstaked ATOM in your wallet to pay for fee gas on all transactions, including reward claims, delegations, and redelegations. Always leave a small buffer of 0.1 to 0.5 ATOM liquid to prevent your wallet from being locked out.
              </p>
              <p>
                A balanced staking strategy involves dedicating 80–90% of holdings to secure validators, keeping 10–20% liquid for market trading, governance proposals, or emergency liquidity. To help visualize your portfolio allocation ratios (Staked vs. Unstaked), visit the interactive pie graphs on the{' '}
                <button onClick={() => onNavigate('dashboard')} className="text-cyan-400 hover:text-cyan-300 underline cursor-pointer font-medium">
                  ATOM Portfolio Dashboard
                </button>
                .
              </p>
            </>
          )}
        </div>

        {/* CTA Card */}
        <section className="rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 p-8 text-center shadow-xl mt-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Calculate your ATOM staking rewards now
          </h2>
          <p className="text-sm text-cyan-100 mb-6 max-w-md mx-auto">
            Input your exact staked amount, APR, and validator commission variables to estimate simple and compounded reward growths.
          </p>
          <button
            onClick={() => onNavigate('dashboard')}
            className="inline-flex items-center gap-2 bg-white text-cyan-700 hover:bg-cyan-50 font-bold rounded-xl px-8 py-3.5 text-sm transition-all cursor-pointer shadow-md"
          >
            <Calculator className="w-4 h-4" />
            Calculate Rewards
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          Educational Resource Center
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Learn About Cosmos ATOM Staking
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
          Your master resource hub for understanding Cosmos Hub delegations, rewards, validator performance, and portfolio risk management.
        </p>
      </div>

      {/* Featured Article Spotlight at Top */}
      <div
        onClick={() => handleArticleClick(featuredArticle.slug)}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 via-indigo-50/40 to-slate-50 dark:from-cyan-950/70 dark:via-slate-900/95 dark:to-indigo-950/70 border border-cyan-200 dark:border-cyan-500/30 p-6 sm:p-8 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 cursor-pointer group flex flex-col lg:flex-row gap-6 items-center shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/10"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className={`w-20 h-20 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center shrink-0 text-4xl sm:text-6xl bg-gradient-to-br ${featuredArticle.thumbnailGradient} border shadow-sm`}>
          {featuredArticle.emoji}
        </div>
        <div className="space-y-3 flex-1 w-full">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/15 border border-cyan-200 dark:border-cyan-500/30 px-2.5 py-0.5 rounded-md">
              Featured Guide
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">• {featuredArticle.readTime}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
            {featuredArticle.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 font-medium">
            {featuredArticle.excerpt}
          </p>
          <div className="flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 font-bold pt-1 group-hover:underline">
            Read Featured Article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Categories and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 border-t border-gray-800/50 pt-6">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800/40 text-gray-400 hover:bg-gray-800/80 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-800/60 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white w-full md:w-64 focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Search articles..."
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredArticles.length === 0 ? (
          <div className="col-span-full text-center py-10 text-slate-500 dark:text-slate-400 text-sm">
            No articles found matching your criteria.
          </div>
        ) : (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => handleArticleClick(article.slug)}
              className="glass-card rounded-2xl border border-slate-200 dark:border-slate-800/65 overflow-hidden hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              <div className={`h-40 w-full bg-gradient-to-br ${article.thumbnailGradient} border-b border-slate-200 dark:border-slate-800/65 flex items-center justify-center text-5xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5 dark:bg-black/10 opacity-20 group-hover:opacity-0 transition-opacity" />
                <span className="group-hover:scale-110 transition-transform duration-300">{article.emoji}</span>
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 dark:bg-slate-900/90 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 uppercase tracking-wider shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-medium">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/65 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>Calculator Team</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
