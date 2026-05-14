import { useState, useEffect, useCallback } from 'react';
import {
  Home,
  LayoutDashboard,
  Calculator,
  TrendingUp,
  Gift,
  List,
  Settings as SettingsIcon,
  Menu,
  X,
  ChevronRight,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Info,
  Scale,
  Shield,
} from 'lucide-react';
import { PortfolioData, RewardEntry, Transaction } from './types';
import {
  loadPortfolio,
  savePortfolio,
  loadRewards,
  saveRewards,
  loadTransactions,
  saveTransactions,
  clearAllData,
  defaultPortfolio,
} from './utils/localStorage';
import { useLivePrice } from './hooks/useLivePrice';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import CalculatorPage from './components/Calculator';
import GrowthProjection from './components/GrowthProjection';
import RewardTracker from './components/RewardTracker';
import TransactionLog from './components/TransactionLog';
import SettingsPage from './components/Settings';
import FAQPage from './components/FAQPage';
import EducationPage from './components/EducationPage';
import DisclaimerPage from './components/DisclaimerPage';
import AboutPage from './components/AboutPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import LivePriceBadge from './components/LivePriceBadge';
import Footer from './components/Footer';

type Page =
  | 'home'
  | 'dashboard'
  | 'calculator'
  | 'growth'
  | 'rewards'
  | 'transactions'
  | 'settings'
  | 'about'
  | 'faq'
  | 'education'
  | 'privacy'
  | 'terms'
  | 'disclaimer';

const TOOL_PAGES: Page[] = ['dashboard', 'calculator', 'growth', 'rewards', 'transactions'];

const NAV_ITEMS: {
  id: Page;
  label: string;
  icon: React.ElementType;
  shortLabel: string;
  section: 'main' | 'tools' | 'resources';
}[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: Home, section: 'main' },
  { id: 'dashboard', label: 'Dashboard', shortLabel: 'Dash', icon: LayoutDashboard, section: 'tools' },
  { id: 'calculator', label: 'Calculator', shortLabel: 'Calc', icon: Calculator, section: 'tools' },
  { id: 'growth', label: 'Growth', shortLabel: 'Growth', icon: TrendingUp, section: 'tools' },
  { id: 'rewards', label: 'Rewards', shortLabel: 'Rewards', icon: Gift, section: 'tools' },
  { id: 'transactions', label: 'Transactions', shortLabel: 'Txns', icon: List, section: 'tools' },
  { id: 'about', label: 'About', shortLabel: 'About', icon: Info, section: 'resources' },
  { id: 'education', label: 'Learn', shortLabel: 'Learn', icon: BookOpen, section: 'resources' },
  { id: 'faq', label: 'FAQ', shortLabel: 'FAQ', icon: HelpCircle, section: 'resources' },
  { id: 'privacy', label: 'Privacy', shortLabel: 'Privacy', icon: Shield, section: 'resources' },
  { id: 'terms', label: 'Terms', shortLabel: 'Terms', icon: Scale, section: 'resources' },
  { id: 'disclaimer', label: 'Disclaimer', shortLabel: 'Legal', icon: AlertTriangle, section: 'resources' },
  { id: 'settings', label: 'Settings', shortLabel: 'Settings', icon: SettingsIcon, section: 'resources' },
];

const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  dashboard: '/dashboard',
  calculator: '/calculator',
  growth: '/growth',
  rewards: '/rewards',
  transactions: '/transactions',
  settings: '/settings',
  about: '/about',
  faq: '/faq',
  education: '/learn',
  privacy: '/privacy-policy',
  terms: '/terms-of-use',
  disclaimer: '/disclaimer',
};

function getPageFromPath(pathname: string): Page {
  const found = (Object.entries(PAGE_PATHS) as [Page, string][]).find(
    ([, path]) => path === pathname
  );
  return found?.[0] ?? 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname)
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioData>(() => loadPortfolio());
  const [rewards, setRewards] = useState<RewardEntry[]>(() => loadRewards());
  const [transactions, setTransactions] = useState<Transaction[]>(() => loadTransactions());

  // Persist data
  useEffect(() => {
    savePortfolio(portfolio);
  }, [portfolio]);

  useEffect(() => {
    saveRewards(rewards);
  }, [rewards]);

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
      setSidebarOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (portfolio.theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [portfolio.theme]);

  useEffect(() => {
    const meta: Record<Page, { title: string; description: string }> = {
      home: {
        title: 'ATOM Staking Calculator & Portfolio Tracker | Free Cosmos Rewards Tool',
        description: 'Free ATOM staking calculator for Cosmos rewards, validator fees, APR, APY-style compounding, and portfolio projections.',
      },
      dashboard: {
        title: 'ATOM Portfolio Dashboard | ATOM Staking Calculator',
        description: 'Track ATOM holdings, staked balances, portfolio value, profit and loss, ROI, and live ATOM price locally.',
      },
      calculator: {
        title: 'ATOM Staking Rewards Calculator | Cosmos APR and APY Tool',
        description: 'Calculate daily, monthly, yearly, simple, and compounded ATOM staking rewards after validator commission.',
      },
      growth: {
        title: 'ATOM Growth Projection Tool | Cosmos Staking Calculator',
        description: 'Project ATOM staking growth over 30 days, 1 year, 3 years, and 5 years with and without compounding.',
      },
      rewards: {
        title: 'ATOM Reward Tracker | Cosmos Staking Calculator',
        description: 'Track manual ATOM staking reward claims locally with dates, notes, charts, and CSV export.',
      },
      transactions: {
        title: 'ATOM Transaction Log | Cosmos Portfolio Tracker',
        description: 'Log ATOM buys, sells, stakes, unstakes, reward claims, and restakes locally in your browser.',
      },
      settings: {
        title: 'Settings | ATOM Staking Calculator',
        description: 'Manage theme, currency, CSV exports, local data, and privacy settings for the ATOM staking calculator.',
      },
      about: {
        title: 'About | ATOM Staking Calculator & Portfolio Tracker',
        description: 'Learn the mission behind the ATOM staking calculator and how it helps users understand Cosmos rewards and validator fees.',
      },
      faq: {
        title: 'ATOM Staking FAQ | Cosmos Rewards, APR, APY and Fees',
        description: 'Beginner-friendly answers about ATOM staking, rewards, APR vs APY, validator commission, wallet connections, and risks.',
      },
      education: {
        title: 'Cosmos ATOM Staking Guide | Learn ATOM Rewards',
        description: 'Learn how Cosmos ATOM staking works, how to choose validators, understand risks, and compare compounding outcomes.',
      },
      privacy: {
        title: 'Privacy Policy | ATOM Staking Calculator',
        description: 'Read how the ATOM staking calculator handles local browser data, privacy, live price requests, and wallet safety.',
      },
      terms: {
        title: 'Terms of Use | ATOM Staking Calculator',
        description: 'Terms for using the ATOM staking calculator, including educational estimates, user responsibility, and no guarantees.',
      },
      disclaimer: {
        title: 'Disclaimer | ATOM Staking Calculator',
        description: 'Important disclaimer for ATOM staking estimates, cryptocurrency risks, privacy, and educational use.',
      },
    };

    document.title = meta[currentPage].title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', meta[currentPage].description);
  }, [currentPage]);

  const handleUpdatePortfolio = useCallback((updates: Partial<PortfolioData>) => {
    setPortfolio((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleAddReward = useCallback((reward: RewardEntry) => {
    setRewards((prev) => [reward, ...prev]);
  }, []);

  const handleDeleteReward = useCallback((id: string) => {
    setRewards((prev) => prev.filter((r) => r.id !== id));
  }, []);

  const handleAddTransaction = useCallback((tx: Transaction) => {
    setTransactions((prev) => [tx, ...prev]);
  }, []);

  const handleDeleteTransaction = useCallback((id: string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleUpdateTransaction = useCallback((updated: Transaction) => {
    setTransactions((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  }, []);

  const handleResetAll = useCallback(() => {
    clearAllData();
    setPortfolio({ ...defaultPortfolio });
    setRewards([]);
    setTransactions([]);
  }, []);

  // Live price
  const livePrice = useLivePrice(undefined, portfolio.currency);

  const applyLivePrice = useCallback(() => {
    if (!livePrice.data) return;
    const price = portfolio.currency === 'EUR' ? livePrice.data.eur : livePrice.data.usd;
    setPortfolio((prev) => ({ ...prev, currentPrice: Number(price.toFixed(4)) }));
  }, [livePrice.data, portfolio.currency]);

  const navigateTo = (page: Page) => {
    const nextPath = PAGE_PATHS[page];
    if (window.location.pathname !== nextPath || window.location.hash) {
      window.history.pushState({ page }, '', nextPath);
    }
    setCurrentPage(page);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToHomeSection = (sectionId: string) => {
    window.history.pushState({ page: 'home' }, '', `/#${sectionId}`);
    setCurrentPage('home');
    setSidebarOpen(false);
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const isToolPage = TOOL_PAGES.includes(currentPage);
  const isHomePage = currentPage === 'home';
  const currentNav = NAV_ITEMS.find((n) => n.id === currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={(p) => navigateTo(p as Page)}
            livePriceData={livePrice.data}
            livePriceStatus={livePrice.status}
            currency={portfolio.currency}
            apr={portfolio.apr}
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            portfolio={portfolio}
            rewards={rewards}
            onUpdatePortfolio={handleUpdatePortfolio}
            livePriceSlot={
              <LivePriceBadge
                data={livePrice.data}
                status={livePrice.status}
                error={livePrice.error}
                currency={portfolio.currency}
                autoRefresh={livePrice.autoRefresh}
                onRefresh={() => livePrice.refresh(true)}
                onToggleAuto={() => livePrice.setAutoRefresh(!livePrice.autoRefresh)}
                onApplyToPortfolio={applyLivePrice}
              />
            }
          />
        );
      case 'calculator':
        return <CalculatorPage portfolio={portfolio} onUpdatePortfolio={handleUpdatePortfolio} />;
      case 'growth':
        return <GrowthProjection portfolio={portfolio} />;
      case 'rewards':
        return (
          <RewardTracker
            rewards={rewards}
            portfolio={portfolio}
            onAddReward={handleAddReward}
            onDeleteReward={handleDeleteReward}
          />
        );
      case 'transactions':
        return (
          <TransactionLog
            transactions={transactions}
            portfolio={portfolio}
            onAddTransaction={handleAddTransaction}
            onDeleteTransaction={handleDeleteTransaction}
            onUpdateTransaction={handleUpdateTransaction}
          />
        );
      case 'settings':
        return (
          <SettingsPage
            portfolio={portfolio}
            transactions={transactions}
            rewards={rewards}
            onUpdatePortfolio={handleUpdatePortfolio}
            onResetAll={handleResetAll}
          />
        );
      case 'about':
        return <AboutPage onNavigate={(p) => navigateTo(p as Page)} />;
      case 'faq':
        return <FAQPage onNavigate={(p) => navigateTo(p as Page)} />;
      case 'education':
        return <EducationPage onNavigate={(p) => navigateTo(p as Page)} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfUsePage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      default:
        return null;
    }
  };

  const renderNavGroup = (section: 'main' | 'tools' | 'resources') => {
    const items = NAV_ITEMS.filter((n) => n.section === section);
    const labels: Record<string, string> = {
      main: 'Main',
      tools: 'Calculator Tools',
      resources: 'Resources',
    };

    return (
      <div className="mb-2">
        <p className="px-3 py-1.5 text-[10px] font-bold text-gray-600 uppercase tracking-wider">
          {labels[section]}
        </p>
        <div className="space-y-0.5">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-400'
                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Top Header */}
      {isHomePage ? (
        <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-sm font-bold shadow-lg shadow-cyan-500/20">
                ⚛️
              </div>
              <div className="text-left">
                <h1 className="text-sm sm:text-base font-bold text-white leading-tight">
                  ATOM Staking Calculator
                </h1>
                <p className="text-[10px] text-gray-500 leading-tight">Calculate. Track. Compound.</p>
              </div>
            </button>

            <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
              <button
                onClick={() => navigateToHomeSection('features')}
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => navigateToHomeSection('how-it-works')}
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => navigateTo('about')}
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => navigateTo('education')}
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Learn
              </button>
              <button
                onClick={() => navigateTo('faq')}
                className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="hidden lg:block">
                <LivePriceBadge
                  compact
                  data={livePrice.data}
                  status={livePrice.status}
                  error={livePrice.error}
                  currency={portfolio.currency}
                  autoRefresh={livePrice.autoRefresh}
                  onRefresh={() => livePrice.refresh(true)}
                  onToggleAuto={() => livePrice.setAutoRefresh(!livePrice.autoRefresh)}
                />
              </div>
              <button
                onClick={() => navigateTo('dashboard')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-4 py-2 text-sm transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Launch App
              </button>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </header>
      ) : (
        <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
          <div className="flex items-center justify-between px-4 h-14">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2.5 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-sm font-bold">
                  ⚛️
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-sm font-bold text-white leading-tight">
                    ATOM Staking Calculator
                  </h1>
                  <p className="text-[10px] text-gray-500 leading-tight">Calculate. Track. Compound.</p>
                </div>
              </button>
            </div>

            {/* Breadcrumb */}
            <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
              <button onClick={() => navigateTo('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Home
              </button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-cyan-400">{currentNav?.label}</span>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <LivePriceBadge
                  compact
                  data={livePrice.data}
                  status={livePrice.status}
                  error={livePrice.error}
                  currency={portfolio.currency}
                  autoRefresh={livePrice.autoRefresh}
                  onRefresh={() => livePrice.refresh(true)}
                  onToggleAuto={() => livePrice.setAutoRefresh(!livePrice.autoRefresh)}
                />
                {isToolPage && (
                  <div className="text-xs">
                    <span className="text-gray-500">Staked: </span>
                    <span className="text-cyan-400 font-semibold">
                      {portfolio.stakedAtom.toLocaleString()} ATOM
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={() => navigateTo('settings')}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:opacity-90 transition-opacity"
              >
                A
              </button>
            </div>
          </div>
        </header>
      )}

      {isHomePage && sidebarOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-4 right-4 top-3 glass-card rounded-2xl p-3 shadow-2xl animate-fade-in">
            <button
              onClick={() => navigateToHomeSection('features')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => navigateToHomeSection('how-it-works')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => navigateTo('education')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Learn About Staking
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => navigateTo('faq')}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => navigateTo('dashboard')}
              className="w-full mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer"
            >
              Launch App
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — Desktop */}
        {!isHomePage && <aside className="hidden lg:flex flex-col w-56 bg-gray-950 border-r border-gray-800/50 shrink-0 overflow-y-auto">
          <nav className="flex-1 py-4 px-3">
            {renderNavGroup('main')}
            {renderNavGroup('tools')}
            {renderNavGroup('resources')}
          </nav>

          {/* Sidebar Ad */}
          <div className="p-3 m-3 border border-dashed border-gray-800 rounded-lg text-center">
            <p className="text-[10px] text-gray-700">Ad Space</p>
          </div>
        </aside>}

        {/* Mobile Sidebar Overlay */}
        {!isHomePage && sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSidebarOpen(false)} />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-gray-950 border-r border-gray-800/50 animate-fade-in overflow-y-auto">
              <div className="p-4 border-b border-gray-800/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-sm">
                    ⚛️
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-white">ATOM Staking</h1>
                    <p className="text-[10px] text-gray-500">Calculate. Track. Compound.</p>
                  </div>
                </div>
              </div>
              <nav className="py-4 px-3">
                {renderNavGroup('main')}
                {renderNavGroup('tools')}
                {renderNavGroup('resources')}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className={`${isHomePage ? 'max-w-7xl' : 'max-w-6xl'} mx-auto px-4 py-6 min-h-0`}>
            {renderPage()}
          </div>
          <Footer onNavigate={(p) => navigateTo(p as Page)} />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      {!isHomePage && <nav className="lg:hidden sticky bottom-0 bg-gray-950/95 backdrop-blur-md border-t border-gray-800/50 z-30">
        <div className="flex items-center justify-around px-1 py-1">
          {NAV_ITEMS.filter((n) => ['home', 'dashboard', 'calculator', 'growth', 'settings'].includes(n.id)).map(
            (item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg text-[10px] font-medium transition-all cursor-pointer min-w-0 ${
                    isActive ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]' : ''}`} />
                  <span className="truncate">{item.shortLabel}</span>
                </button>
              );
            }
          )}
        </div>
      </nav>}
    </div>
  );
}
