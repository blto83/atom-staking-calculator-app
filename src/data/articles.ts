/**
 * Centralized article metadata for SEO infrastructure.
 *
 * This module serves as the single source of truth for article metadata,
 * enabling consumption by both React frontend and future Vercel Edge Middleware.
 *
 * Future integrations:
 * - Vercel Edge Middleware for server-side metadata injection
 * - Sitemap automation
 * - SEO mesh systems
 */

// Centralized category configuration - all category usage derives from here
export const CATEGORY_CONFIG = [
  { id: 'beginner-guides', label: 'Beginner Guides' },
  { id: 'apr-apy-education', label: 'APR / APY Education' },
  { id: 'validator-guides', label: 'Validator Guides' },
  { id: 'risk-safety', label: 'Risk & Safety' },
  { id: 'portfolio-growth', label: 'Portfolio Growth' },
] as const;

export type ArticleCategory = (typeof CATEGORY_CONFIG)[number]['label'];

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  date: string;
  readTime: string;
  thumbnailGradient: string;
  emoji: string;
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
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
    seoTitle: 'What Is Cosmos ATOM Staking? Complete Beginner Guide 2026',
    seoDescription: 'Learn Cosmos ATOM staking basics in 2026. Understand proof-of-stake delegation, how to earn 14-20% APR rewards, and secure passive income on the Cosmos Hub network.',
    featured: true,
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
    seoTitle: 'ATOM Staking APR vs APY: Compounding Mathematics Explained',
    seoDescription: 'Understand the difference between APR and APY for ATOM staking. Learn how daily compounding increases returns and use our calculator to compare yields.',
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
    seoTitle: 'How to Choose a Cosmos Validator: 5 Key Metrics for ATOM Staking',
    seoDescription: 'Learn the 5 core metrics for selecting Cosmos validators: uptime, commission, self-bonded stake, voting power, and slashing history. Secure your ATOM delegation.',
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
    seoTitle: 'ATOM Staking Risks: Slashing, Unbonding Period & Security Guide',
    seoDescription: 'Understand ATOM staking risks including slashing penalties, 21-day unbonding periods, validator downtime, and how to protect your Cosmos delegation.',
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
    seoTitle: 'ATOM Portfolio Planning: Passive Income Strategy for Cosmos Staking',
    seoDescription: 'Build a passive income strategy with ATOM staking. Learn optimal liquid ratios, gas allocation, redelegation timing, and portfolio management for Cosmos.',
  },
  {
    id: '6',
    slug: 'best-cosmos-wallets-for-atom-staking-2026',
    title: 'Best Cosmos Wallets for ATOM Staking (2026): Keplr vs Leap vs Cosmostation',
    excerpt: 'Compare the best Cosmos wallets for ATOM staking in 2026 including Keplr, Leap, and Cosmostation. Learn security differences, validator management features, mobile usability, and staking workflows.',
    category: 'Validator Guides',
    author: 'ATOM Staking Calculator Team',
    date: 'May 19, 2026',
    readTime: '8 min read',
    thumbnailGradient: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20 border-blue-500/30',
    emoji: '👛',
    seoTitle: 'Best Cosmos Wallets for ATOM Staking 2026: Keplr vs Leap vs Cosmostation',
    seoDescription: 'Compare Keplr, Leap, and Cosmostation wallets for ATOM staking in 2026. Features, security, mobile access, validator management, and staking workflows reviewed.',
  },
  {
    id: '7',
    slug: 'best-atom-validators-cosmos-staking-2026',
    title: 'Best ATOM Validators for Cosmos Staking (2026)',
    excerpt: 'Learn how validator selection impacts rewards, security, decentralization, and long-term staking performance on Cosmos Hub. Compare commission, uptime, and slashing risk.',
    category: 'Validator Guides',
    author: 'ATOM Staking Calculator Team',
    date: 'May 20, 2026',
    readTime: '9 min read',
    thumbnailGradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 border-violet-500/30',
    emoji: '🏛️',
    seoTitle: 'Best ATOM Validators for Cosmos Staking 2026: Top Selection Guide',
    seoDescription: 'Find the best ATOM validators for Cosmos staking in 2026. Compare commission fees, uptime ratings, voting power, and decentralization metrics.',
  },
  {
    id: '8',
    slug: 'can-you-lose-money-staking-atom',
    title: 'Can You Lose Money Staking Cosmos ATOM? Risks Explained (2026)',
    excerpt: 'Understand the real risks of staking Cosmos ATOM, including slashing, validator failures, unbonding periods, inflation, and wallet security mistakes.',
    category: 'Risk & Safety',
    author: 'ATOM Staking Calculator Team',
    date: 'May 21, 2026',
    readTime: '8 min read',
    thumbnailGradient: 'from-rose-500/20 via-red-500/20 to-orange-500/20 border-rose-500/30',
    emoji: '🛡️',
    seoTitle: 'Can You Lose Money Staking ATOM? Cosmos Staking Risks Explained',
    seoDescription: 'Learn the real risks of staking Cosmos ATOM: slashing, validator downtime, 21-day unbonding locks, inflation erosion, and wallet security failures.',
  },
  {
    id: '9',
    slug: 'how-much-atom-to-make-passive-income',
    title: 'How Much ATOM Do You Need to Make Passive Income From Staking? (2026)',
    excerpt: 'Wondering how much Cosmos ATOM you need to generate passive income from staking? Learn realistic income expectations, reward projections, compounding strategies, and long-term portfolio growth in 2026.',
    category: 'Portfolio Growth',
    author: 'ATOM Staking Calculator Team',
    date: 'May 22, 2026',
    readTime: '9 min read',
    thumbnailGradient: 'from-amber-500/20 via-emerald-500/20 to-teal-500/20 border-emerald-500/30',
    emoji: '💸',
    seoTitle: 'How Much ATOM for Passive Income? Staking Calculator & Projections',
    seoDescription: 'Calculate how much ATOM you need for passive income. Project staking rewards, compounding returns, and monthly earnings with our Cosmos calculator.',
  },
  {
    id: '10',
    slug: 'is-cosmos-atom-staking-safe-for-beginners',
    title: 'Is Cosmos ATOM Staking Safe for Beginners? (2026)',
    excerpt: 'Is Cosmos ATOM staking safe for beginners in 2026? Learn the real risks, wallet safety, validator selection, slashing protection, and how to stake ATOM more securely.',
    category: 'Beginner Guides',
    author: 'ATOM Staking Calculator Team',
    date: 'May 23, 2026',
    readTime: '9 min read',
    thumbnailGradient: 'from-sky-500/20 via-cyan-500/20 to-emerald-500/20 border-sky-500/30',
    emoji: '🔐',
    seoTitle: 'Is Cosmos ATOM Staking Safe for Beginners? 2026 Security Guide',
    seoDescription: 'Learn if ATOM staking is safe for beginners. Understand wallet security, validator selection, slashing risks, and best practices for secure Cosmos delegation.',
  },
  {
    id: '11',
    slug: 'does-daily-compounding-increase-atom-staking-rewards',
    title: 'Does Daily Compounding Increase ATOM Staking Rewards? (2026)',
    excerpt: 'Does daily compounding really boost your ATOM staking rewards? Compare daily, weekly, and monthly restaking strategies, gas tradeoffs, and long-term APY effects.',
    category: 'APR / APY Education',
    author: 'ATOM Staking Calculator Team',
    date: 'May 24, 2026',
    readTime: '9 min read',
    thumbnailGradient: 'from-teal-500/20 via-cyan-500/20 to-blue-500/20 border-teal-500/30',
    emoji: '🔁',
    seoTitle: 'Does Daily Compounding Boost ATOM Staking Rewards? APY Comparison',
    seoDescription: 'Compare ATOM staking rewards with daily, weekly, and monthly compounding. Calculate the APY difference and learn optimal restaking strategies for Cosmos.',
  },
];

/**
 * Helper to find article by slug.
 * Used by both frontend and future middleware for article lookup.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

/**
 * Get all article slugs for sitemap/SEO mesh generation.
 */
export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((article) => article.slug);
}

/**
 * Site URL constant for canonical URLs.
 */
export const SITE_URL = 'https://www.atomstakingcalculator.com';
