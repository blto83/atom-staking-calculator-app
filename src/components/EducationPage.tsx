import { useState, useMemo, useEffect } from 'react';
import { BookOpen, ArrowRight, Search, Calendar, User, Clock, Calculator, ChevronLeft } from 'lucide-react';
import { useSEOMetadata, getArticleSEOData, getDefaultLearnHubSEO } from '../hooks/useSEOMetadata';
import { ARTICLES, CATEGORY_CONFIG, Article, ArticleCategory } from '../data/articles';
import ShareButtons from './ShareButtons';
import ArticleBody from './ArticleBody';
import { ContentBlock } from '../types';
import { whatIsCosmosAtomStakingBeginnerGuide } from '../content/what-is-cosmos-atom-staking-beginner-guide-2026';
import { stakingAprVsApyMathematicsOfCompounding } from '../content/staking-apr-vs-apy-mathematics-of-compounding-atom';
import { howToChooseTheRightCosmosValidator } from '../content/how-to-choose-the-right-cosmos-validator-5-core-metrics';
import { atomStakingRisksSlashingAndUnbonding } from '../content/atom-staking-risks-slashing-and-unbonding-period-explained';
import { maximizedAtomPortfolioPlanningPassiveIncomeStrategy } from '../content/maximized-atom-portfolio-planning-passive-income-strategy';
import { bestCosmosWalletsForAtomStaking2026 } from '../content/best-cosmos-wallets-for-atom-staking-2026';
import { bestAtomValidatorsCosmosStaking2026 } from '../content/best-atom-validators-cosmos-staking-2026';
import { canYouLoseMoneyStakingAtom } from '../content/can-you-lose-money-staking-atom';
import { howMuchAtomToMakePassiveIncome } from '../content/how-much-atom-to-make-passive-income';
import { isCosmosAtomStakingSafeForBeginners } from '../content/is-cosmos-atom-staking-safe-for-beginners';
import { doesDailyCompoundingIncreaseAtomStakingRewards } from '../content/does-daily-compounding-increase-atom-staking-rewards';
import { selfCustodyVsExchangeStakingAtomWhichIsSafer } from '../content/self-custody-vs-exchange-staking-atom-which-is-safer';
import { cosmosValidatorCommissionExplained } from '../content/cosmos-validator-commission-explained-how-it-affects-atom-rewards';

interface Props {
  onNavigate: (page: string) => void;
}

const ARTICLE_CONTENT: Record<string, ContentBlock[]> = {
  'what-is-cosmos-atom-staking-beginner-guide-2026': whatIsCosmosAtomStakingBeginnerGuide,
  'staking-apr-vs-apy-mathematics-of-compounding-atom': stakingAprVsApyMathematicsOfCompounding,
  'how-to-choose-the-right-cosmos-validator-5-core-metrics': howToChooseTheRightCosmosValidator,
  'atom-staking-risks-slashing-and-unbonding-period-explained': atomStakingRisksSlashingAndUnbonding,
  'maximized-atom-portfolio-planning-passive-income-strategy': maximizedAtomPortfolioPlanningPassiveIncomeStrategy,
  'best-cosmos-wallets-for-atom-staking-2026': bestCosmosWalletsForAtomStaking2026,
  'best-atom-validators-cosmos-staking-2026': bestAtomValidatorsCosmosStaking2026,
  'can-you-lose-money-staking-atom': canYouLoseMoneyStakingAtom,
  'how-much-atom-to-make-passive-income': howMuchAtomToMakePassiveIncome,
  'is-cosmos-atom-staking-safe-for-beginners': isCosmosAtomStakingSafeForBeginners,
  'does-daily-compounding-increase-atom-staking-rewards': doesDailyCompoundingIncreaseAtomStakingRewards,
  'self-custody-vs-exchange-staking-atom-which-is-safer': selfCustodyVsExchangeStakingAtomWhichIsSafer,
  'cosmos-validator-commission-explained-how-it-affects-atom-rewards': cosmosValidatorCommissionExplained,
};

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

  const categories = useMemo(() => ['All', ...CATEGORY_CONFIG.map((c) => c.label)], []);

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
    // Find the explicitly marked featured article, fallback to first article for safety
    return ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  }, []);

  const currentArticle = useMemo(() => {
    if (!selectedArticleSlug) return null;
    return ARTICLES.find((a) => a.slug === selectedArticleSlug);
  }, [selectedArticleSlug]);

  // Dynamic SEO metadata based on current article
  const seoData = useMemo(() => {
    if (currentArticle) {
      return getArticleSEOData(currentArticle);
    }
    return getDefaultLearnHubSEO();
  }, [currentArticle]);

  useSEOMetadata(seoData);

  // Smart related articles selection: same-category first, up to 4 total
  const relatedArticles = useMemo(() => {
    if (!currentArticle) return [];

    const sameCategory = ARTICLES.filter(
      (a) => a.slug !== currentArticle.slug && a.category === currentArticle.category
    );
    const otherArticles = ARTICLES.filter(
      (a) => a.slug !== currentArticle.slug && a.category !== currentArticle.category
    );

    // Combine same-category first, then fill with others, max 4 total
    return [...sameCategory, ...otherArticles].slice(0, 4);
  }, [currentArticle]);

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
    const contentBlocks = ARTICLE_CONTENT[currentArticle.slug];

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
          {contentBlocks && (
            <ArticleBody
              blocks={contentBlocks}
              onNavigate={onNavigate}
              onArticleClick={handleArticleClick}
            />
          )}
        </div>

        {/* Social Share */}
        <ShareButtons slug={currentArticle.slug} title={currentArticle.title} />

        {/* Related ATOM Staking Guides */}
        <div className="border-t border-slate-200 dark:border-slate-800/60 pt-10 mt-16 space-y-5">
          <h3 className="text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Related ATOM Staking Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
            {relatedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article.slug)}
                className="glass-card rounded-xl border border-slate-200 dark:border-slate-800/60 p-5 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base">{article.emoji}</span>
                    <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 px-2.5 py-0.5 rounded uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug mb-3">
                    {article.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 font-bold pt-3.5 group-hover:underline mt-auto border-t border-slate-200 dark:border-slate-800/40">
                  Read Guide
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            ))}
          </div>
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
