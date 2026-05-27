/**
 * Vercel Edge Middleware for SEO Metadata Injection
 *
 * This middleware intercepts article routes and injects server-visible metadata
 * before HTML reaches crawlers. This solves the SPA crawler metadata problem.
 *
 * Architecture Flow:
 * 1. Intercept /learn/* routes at the edge
 * 2. Extract article slug from URL
 * 3. Look up article metadata
 * 4. Inject metadata into HTML response
 * 5. Return modified HTML to client/crawler
 *
 * Current Phase: Foundation scaffold with safe interception and lookup.
 * Next Phase: Full HTML metadata injection.
 */

import { NextResponse } from 'npm:@vercel/edge';

// Article metadata imported from shared module
// This is the same data used by the React frontend
const SITE_URL = 'https://www.atomstakingcalculator.com';

// Article metadata structure (subset for middleware)
interface Article {
  id: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
}

// Article metadata - must stay in sync with src/data/articles.ts
// This duplication is intentional for edge runtime compatibility
// Edge functions cannot import from src/ directory
const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'what-is-cosmos-atom-staking-beginner-guide-2026',
    seoTitle: 'What Is Cosmos ATOM Staking? Complete Beginner Guide 2026',
    seoDescription: 'Learn Cosmos ATOM staking basics in 2026. Understand proof-of-stake delegation, how to earn 14-20% APR rewards, and secure passive income on the Cosmos Hub network.',
  },
  {
    id: '2',
    slug: 'staking-apr-vs-apy-mathematics-of-compounding-atom',
    seoTitle: 'ATOM Staking APR vs APY: Compounding Mathematics Explained',
    seoDescription: 'Understand the difference between APR and APY for ATOM staking. Learn how daily compounding increases returns and use our calculator to compare yields.',
  },
  {
    id: '3',
    slug: 'how-to-choose-the-right-cosmos-validator-5-core-metrics',
    seoTitle: 'How to Choose a Cosmos Validator: 5 Key Metrics for ATOM Staking',
    seoDescription: 'Learn the 5 core metrics for selecting Cosmos validators: uptime, commission, self-bonded stake, voting power, and slashing history. Secure your ATOM delegation.',
  },
  {
    id: '4',
    slug: 'atom-staking-risks-slashing-and-unbonding-period-explained',
    seoTitle: 'ATOM Staking Risks: Slashing, Unbonding Period & Security Guide',
    seoDescription: 'Understand ATOM staking risks including slashing penalties, 21-day unbonding periods, validator downtime, and how to protect your Cosmos delegation.',
  },
  {
    id: '5',
    slug: 'maximized-atom-portfolio-planning-passive-income-strategy',
    seoTitle: 'ATOM Portfolio Planning: Passive Income Strategy for Cosmos Staking',
    seoDescription: 'Build a passive income strategy with ATOM staking. Learn optimal liquid ratios, gas allocation, redelegation timing, and portfolio management for Cosmos.',
  },
  {
    id: '6',
    slug: 'best-cosmos-wallets-for-atom-staking-2026',
    seoTitle: 'Best Cosmos Wallets for ATOM Staking 2026: Keplr vs Leap vs Cosmostation',
    seoDescription: 'Compare Keplr, Leap, and Cosmostation wallets for ATOM staking in 2026. Features, security, mobile access, validator management, and staking workflows reviewed.',
  },
  {
    id: '7',
    slug: 'best-atom-validators-cosmos-staking-2026',
    seoTitle: 'Best ATOM Validators for Cosmos Staking 2026: Top Selection Guide',
    seoDescription: 'Find the best ATOM validators for Cosmos staking in 2026. Compare commission fees, uptime ratings, voting power, and decentralization metrics.',
  },
  {
    id: '8',
    slug: 'can-you-lose-money-staking-atom',
    seoTitle: 'Can You Lose Money Staking ATOM? Cosmos Staking Risks Explained',
    seoDescription: 'Learn the real risks of staking Cosmos ATOM: slashing, validator downtime, 21-day unbonding locks, inflation erosion, and wallet security failures.',
  },
  {
    id: '9',
    slug: 'how-much-atom-to-make-passive-income',
    seoTitle: 'How Much ATOM for Passive Income? Staking Calculator & Projections',
    seoDescription: 'Calculate how much ATOM you need for passive income. Project staking rewards, compounding returns, and monthly earnings with our Cosmos calculator.',
  },
  {
    id: '10',
    slug: 'is-cosmos-atom-staking-safe-for-beginners',
    seoTitle: 'Is Cosmos ATOM Staking Safe for Beginners? 2026 Security Guide',
    seoDescription: 'Learn if ATOM staking is safe for beginners. Understand wallet security, validator selection, slashing risks, and best practices for secure Cosmos delegation.',
  },
  {
    id: '11',
    slug: 'does-daily-compounding-increase-atom-staking-rewards',
    seoTitle: 'Does Daily Compounding Boost ATOM Staking Rewards? APY Comparison',
    seoDescription: 'Compare ATOM staking rewards with daily, weekly, and monthly compounding. Calculate the APY difference and learn optimal restaking strategies for Cosmos.',
  },
];

/**
 * Extract slug from /learn/* path
 * Returns null if not a valid article route
 */
function extractSlug(pathname: string): string | null {
  // Match /learn/{slug} pattern
  const match = pathname.match(/^\/learn\/([^/]+)$/);
  return match ? match[1] : null;
}

/**
 * Find article by slug
 * Returns undefined if not found
 */
function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

/**
 * Main middleware function
 * Intercepts requests and injects metadata for article routes
 */
export async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Only process /learn/* routes
  const slug = extractSlug(pathname);

  if (!slug) {
    // Not an article route - pass through to normal handling
    return NextResponse.next();
  }

  // Look up article metadata
  const article = getArticleBySlug(slug);

  if (!article) {
    // Article not found - pass through (React will show 404 or redirect)
    // This maintains current SPA behavior
    return NextResponse.next();
  }

  // Article found - prepare for metadata injection
  // PHASE 2: This is where HTML metadata injection will happen
  // For now, we establish the interception and lookup flow

  // Get the original HTML response
  const response = await fetch(request);

  // Check if response is HTML
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    // Not HTML - return as-is
    return response;
  }

  // Read the HTML content
  const html = await response.text();

  // PHASE 2: Inject metadata into HTML <head>
  // This scaffold establishes the flow; injection logic comes next
  // For now, we verify interception works correctly

  // Return modified HTML with proper headers
  return new Response(html, {
    status: response.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': response.headers.get('Cache-Control') || 'public, max-age=0, must-revalidate',
    },
  });
}

/**
 * Middleware configuration
 * Define which routes this middleware should run on
 */
export const config = {
  // Match all routes (middleware will filter internally)
  // This allows us to intercept /learn/* while passing through others
  matcher: '/:path*',
};
