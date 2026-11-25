#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { escapeHtml, loadArticles, loadContentBlocks, renderArticleBodyHtml, renderLearnIndexHtml } from './content-html.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.atomstakingcalculator.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

// Titles/descriptions mirror the runtime meta map in src/App.tsx
const ROUTES = [
  { path: '/calculator', title: 'ATOM Staking Rewards Calculator | Cosmos APR and APY Tool', description: 'Calculate daily, monthly, yearly, simple, and compounded ATOM staking rewards after validator commission.', robots: 'index, follow' },
  { path: '/growth', title: 'ATOM Growth Projection Tool | Cosmos Staking Calculator', description: 'Project ATOM staking growth over 30 days, 1 year, 3 years, and 5 years with and without compounding.', robots: 'index, follow' },
  { path: '/learn', title: 'Cosmos ATOM Staking Guide | Learn ATOM Rewards', description: 'Learn how Cosmos ATOM staking works, how to choose validators, understand risks, and compare compounding outcomes.', robots: 'index, follow' },
  { path: '/faq', title: 'ATOM Staking FAQ | Cosmos Rewards, APR, APY, Risks & Beginner Guide', description: 'Comprehensive beginner-friendly FAQ about Cosmos ATOM staking. Learn about rewards, APR vs APY, validator commission, slashing risks, wallet setup, and common mistakes.', robots: 'index, follow' },
  { path: '/about', title: 'About | ATOM Staking Calculator & Portfolio Tracker', description: 'Learn the mission behind the ATOM staking calculator and how it helps users understand Cosmos rewards and validator fees.', robots: 'index, follow' },
  { path: '/dashboard', title: 'ATOM Portfolio Dashboard | ATOM Staking Calculator', description: 'Track ATOM holdings, staked balances, portfolio value, profit and loss, ROI, and live ATOM price locally.', robots: 'noindex, follow' },
  { path: '/rewards', title: 'ATOM Reward Tracker | Cosmos Staking Calculator', description: 'Track manual ATOM staking reward claims locally with dates, notes, charts, and CSV export.', robots: 'noindex, follow' },
  { path: '/transactions', title: 'ATOM Transaction Log | Cosmos Portfolio Tracker', description: 'Log ATOM buys, sells, stakes, unstakes, reward claims, and restakes locally in your browser.', robots: 'noindex, follow' },
  { path: '/settings', title: 'Settings | ATOM Staking Calculator', description: 'Manage theme, currency, CSV exports, local data, and privacy settings for the ATOM staking calculator.', robots: 'noindex, follow' },
  { path: '/privacy-policy', title: 'Privacy Policy | ATOM Staking Calculator', description: 'Read how the ATOM staking calculator handles local browser data, privacy, live price requests, and wallet safety.', robots: 'index, follow' },
  { path: '/terms-of-use', title: 'Terms of Use | ATOM Staking Calculator', description: 'Terms for using the ATOM staking calculator, including educational estimates, user responsibility, and no guarantees.', robots: 'index, follow' },
  { path: '/disclaimer', title: 'Disclaimer | ATOM Staking Calculator', description: 'Important disclaimer for ATOM staking estimates, cryptocurrency risks, privacy, and educational use.', robots: 'index, follow' },
];

// Pages included in the sitemap. Private/app pages (dashboard, rewards,
// transactions, settings) and legal pages are intentionally excluded.
const SITEMAP_PAGES = ['/', '/calculator', '/growth', '/learn', '/faq', '/about'];

function normalizeArticle(raw) {
  return {
    slug: raw.slug,
    title: raw.title,
    author: raw.author || 'Atom Staking Calculator Team',
    seoTitle: raw.seoTitle,
    seoDescription: raw.seoDescription,
    ogImage: raw.ogImage || null,
    date: raw.date || null,
  };
}

async function getArticleMetadata() {
  const rawArticles = await loadArticles();
  const articles = rawArticles.map(normalizeArticle);

  if (articles.length === 0) {
    throw new Error('No article slugs found in articles.ts');
  }

  return articles;
}

function injectMetadata(html, article) {
  const fullTitle = `${article.seoTitle} | ATOM Staking Calculator`;
  const canonicalUrl = `${SITE_URL}/learn/${article.slug}`;
  const ogImageUrl = article.ogImage || DEFAULT_OG_IMAGE;

  const titleAttr = escapeHtml(fullTitle);
  const seoTitleAttr = escapeHtml(article.seoTitle);
  const seoDescAttr = escapeHtml(article.seoDescription);

  let result = html;

  // <title> keeps the full "seoTitle | ATOM Staking Calculator" form
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${titleAttr}</title>`
  );

  // meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${seoDescAttr}"`
  );

  // og:site_name — replace if present, inject after og:type otherwise
  if (/<meta property="og:site_name"/.test(result)) {
    result = result.replace(
      /<meta property="og:site_name" content="[^"]*"/,
      `<meta property="og:site_name" content="ATOM Staking Calculator"`
    );
  } else {
    result = result.replace(
      /(<meta property="og:type"[^>]*>)/,
      `$1\n    <meta property="og:site_name" content="ATOM Staking Calculator" />`
    );
  }

  // og:title — use seoTitle directly (no suffix) to stay under 60 chars
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${seoTitleAttr}"`
  );

  // og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${seoDescAttr}"`
  );

  // og:url
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  );

  // og:image
  result = result.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${ogImageUrl}"`
  );

  // twitter:title — use seoTitle directly (no suffix) to stay under 60 chars
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${seoTitleAttr}"`
  );

  // twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${seoDescAttr}"`
  );

  // twitter:image
  result = result.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${ogImageUrl}"`
  );

  // canonical
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  return result;
}

function injectRouteMetadata(html, route) {
  const canonicalUrl = `${SITE_URL}${route.path}`;
  const titleAttr = escapeHtml(route.title);
  const descAttr = escapeHtml(route.description);

  let result = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${titleAttr}</title>`
  );

  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${descAttr}"`
  );

  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${titleAttr}"`
  );

  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${descAttr}"`
  );

  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  );

  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${titleAttr}"`
  );

  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${descAttr}"`
  );

  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  result = result.replace(
    /<meta name="robots" content="[^"]*"/,
    `<meta name="robots" content="${route.robots}"`
  );

  return result;
}

function extractTagContent(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1] : null;
}

async function validateBuild(articles) {
  console.log('\n🔍 Validating build output...\n');

  const errors = [];
  const distPath = path.join(__dirname, '..', 'dist');

  // Check homepage
  const homePath = path.join(distPath, 'index.html');
  try {
    const homeHtml = await fs.readFile(homePath, 'utf-8');

    if (homeHtml.includes('bolt.new')) {
      errors.push('Homepage still contains bolt.new references');
    }

    const requiredTags = [
      { pattern: /<meta property="og:title" content="([^"]+)"/, name: 'og:title', maxLen: 60 },
      { pattern: /<meta property="og:description" content="([^"]+)"/, name: 'og:description', maxLen: 125 },
      { pattern: /<meta property="og:site_name" content="([^"]+)"/, name: 'og:site_name', maxLen: null },
      { pattern: /<meta property="og:image" content="([^"]+)"/, name: 'og:image', maxLen: null },
      { pattern: /<link rel="canonical" href="([^"]+)"/, name: 'canonical', maxLen: null },
    ];

    for (const tag of requiredTags) {
      const content = extractTagContent(homeHtml, tag.pattern);
      if (!content) {
        errors.push(`Homepage missing ${tag.name}`);
      } else if (tag.maxLen && content.length > tag.maxLen) {
        errors.push(`Homepage ${tag.name} too long (${content.length} chars, max ${tag.maxLen}): "${content}"`);
      }
    }

    console.log('✓ Homepage validation passed');
  } catch (e) {
    errors.push(`Homepage index.html not found: ${e.message}`);
  }

  // Check each article
  for (const article of articles) {
    const articlePath = path.join(distPath, 'learn', article.slug, 'index.html');

    try {
      const articleHtml = await fs.readFile(articlePath, 'utf-8');

      const h1Count = (articleHtml.match(/<h1[\s>]/g) || []).length;
      if (h1Count !== 1) {
        errors.push(`Article "${article.slug}" must contain exactly 1 <h1>, found ${h1Count}`);
      }
      if (!article.firstH2Text) {
        errors.push(`Article "${article.slug}" has no first <h2> heading in its content blocks`);
      } else if (!articleHtml.includes(`<h2>${article.firstH2Text}</h2>`)) {
        errors.push(`Article "${article.slug}" first <h2> text mismatch: expected "${article.firstH2Text}"`);
      }
      const internalLinkCount = (articleHtml.match(/href="(\/learn\/|\/calculator)/g) || []).length;
      if (internalLinkCount < 3) {
        errors.push(`Article "${article.slug}" must contain at least 3 links to /learn/ or /calculator, found ${internalLinkCount}`);
      }

      if (articleHtml.includes('bolt.new')) {
        errors.push(`Article "${article.slug}" still contains bolt.new references`);
      }

      const requiredTags = [
        { pattern: /<meta property="og:title" content="([^"]+)"/, name: 'og:title', maxLen: 60 },
        { pattern: /<meta property="og:description" content="([^"]+)"/, name: 'og:description', maxLen: 125 },
        { pattern: /<meta property="og:site_name" content="([^"]+)"/, name: 'og:site_name', maxLen: null },
        { pattern: /<meta property="og:image" content="([^"]+)"/, name: 'og:image', maxLen: null },
        { pattern: /<meta property="og:url" content="([^"]+)"/, name: 'og:url', maxLen: null },
        { pattern: /<link rel="canonical" href="([^"]+)"/, name: 'canonical', maxLen: null },
      ];

      for (const tag of requiredTags) {
        const content = extractTagContent(articleHtml, tag.pattern);
        if (!content) {
          errors.push(`Article "${article.slug}" missing ${tag.name}`);
        } else if (tag.maxLen && content.length > tag.maxLen) {
          errors.push(`Article "${article.slug}" ${tag.name} too long (${content.length} chars, max ${tag.maxLen}): "${content}"`);
        }
      }

      console.log(`✓ Article "${article.slug}" validation passed`);
    } catch (e) {
      errors.push(`Article "${article.slug}" index.html not found`);
    }
  }

  // Check each static route page
  for (const route of ROUTES) {
    const routePath = path.join(distPath, route.path.replace(/^\//, ''), 'index.html');

    try {
      const routeHtml = await fs.readFile(routePath, 'utf-8');
      const canonicalUrl = `${SITE_URL}${route.path}`;

      const canonicalMatches = routeHtml.match(/<link rel="canonical" href="([^"]+)"/g) || [];
      const canonicalContent = extractTagContent(routeHtml, /<link rel="canonical" href="([^"]+)"/);
      if (canonicalMatches.length !== 1 || canonicalContent !== canonicalUrl) {
        errors.push(`Route "${route.path}" must have exactly one canonical equal to ${canonicalUrl} (found ${canonicalMatches.length}: ${canonicalContent})`);
      }

      const twitterCardMatches = routeHtml.match(/<meta name="twitter:card" content="([^"]+)"/g) || [];
      if (twitterCardMatches.length !== 1) {
        errors.push(`Route "${route.path}" must have exactly one twitter:card (found ${twitterCardMatches.length})`);
      }

      const robotsContent = extractTagContent(routeHtml, /<meta name="robots" content="([^"]+)"/);
      if (route.robots === 'noindex, follow' && !/noindex/.test(robotsContent || '')) {
        errors.push(`Route "${route.path}" must contain noindex (found: "${robotsContent}")`);
      }

      console.log(`✓ Route "${route.path}" validation passed`);
    } catch (e) {
      errors.push(`Route "${route.path}" index.html not found`);
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ Build validation failed:\n');
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    console.error('');
    process.exit(1);
  }

  console.log('\n✅ All build validations passed!\n');
}

function formatDateLastmod(dateStr) {
  if (!dateStr) return null;
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

function generateSitemap(articles) {
  const urls = [];
  const buildDate = new Date().toISOString().slice(0, 10);

  // Add static pages with the build date as lastmod
  for (const pagePath of SITEMAP_PAGES) {
    urls.push(`  <url>
    <loc>${SITE_URL}${pagePath}</loc>
    <lastmod>${buildDate}</lastmod>
  </url>`);
  }

  // Add all article pages with their published date as lastmod
  for (const article of articles) {
    const lastmod = formatDateLastmod(article.date);
    const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    urls.push(`  <url>
    <loc>${SITE_URL}/learn/${article.slug}</loc>${lastmodTag}
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

function injectHtmlIntoRoot(html, bodyHtml) {
  const rootIndex = html.indexOf('<div id="root">');
  if (rootIndex === -1) {
    throw new Error('dist/index.html has no <div id="root"> to inject into');
  }
  const openTagEnd = html.indexOf('>', rootIndex);
  const closeIndex = html.indexOf('</div>', openTagEnd);
  if (closeIndex === -1) {
    throw new Error('dist/index.html has no closing </div> for #root');
  }
  return html.slice(0, closeIndex) + bodyHtml + html.slice(closeIndex);
}

// A few content files contain no internal-link/calculator-cta blocks. Content
// files are immutable, so the prerender appends a small related-guides section
// at build time to satisfy the minimum cross-link requirement.
function appendRelatedLinksIfUnderMinimum(slug, bodyHtml) {
  const linkCount = (bodyHtml.match(/href="(\/learn\/|\/calculator)/g) || []).length;
  if (linkCount >= 3) return bodyHtml;

  const related = [
    { href: '/calculator', label: 'ATOM Staking Calculator' },
    { href: '/learn/what-is-cosmos-atom-staking-beginner-guide-2026', label: 'What Is Cosmos ATOM Staking? Beginner Guide' },
    { href: '/learn/how-to-choose-the-right-cosmos-validator-5-core-metrics', label: 'How to Choose the Right Cosmos Validator' },
  ];
  const links = related
    .map((r) => `<a href="${r.href}">${r.label}</a>`)
    .join(', ');
  return `${bodyHtml}
    <aside class="article-related"><strong>Related:</strong> ${links}</aside>`;
}

function validateInjectedArticleHtml(slug, html, article) {
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) {
    throw new Error(`Article "${slug}": expected exactly 1 <h1>, found ${h1Count}`);
  }

  // A trailing backslash means an escaped quote (\' or \") in the source
  // string was cut mid-escape; a very short title means extraction failed.
  const injectedTitle = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || '';
  const decodedTitle = injectedTitle
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  if (decodedTitle.endsWith('\\')) {
    throw new Error(`Article "${slug}": injected title ends with a backslash (likely a truncated escape): "${decodedTitle}"`);
  }
  if (decodedTitle.trim().length < 15) {
    throw new Error(`Article "${slug}": injected title too short (${decodedTitle.trim().length} chars): "${decodedTitle}"`);
  }
  if (article.title && decodedTitle !== article.title) {
    throw new Error(`Article "${slug}": injected <h1> title does not match article title.\n  expected: "${article.title}"\n  found:    "${decodedTitle}"`);
  }

  const firstHeadingBlockMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const firstH2Text = firstHeadingBlockMatch ? firstHeadingBlockMatch[1].replace(/<[^>]+>/g, '').trim() : null;
  if (!firstH2Text || !html.includes(`<h2>${firstH2Text}</h2>`) || !article.firstH2Text || article.firstH2Text !== firstH2Text) {
    throw new Error(`Article "${slug}": first <h2> text mismatch or missing (found: "${firstH2Text}")`);
  }

  const internalLinkCount = (html.match(/href="(\/learn\/|\/calculator)/g) || []).length;
  if (internalLinkCount < 3) {
    throw new Error(`Article "${slug}": expected at least 3 links to /learn/ or /calculator, found ${internalLinkCount}`);
  }
}

async function main() {
  console.log('🔨 ATOM Staking Calculator - Article Prerender\n');

  try {
    // Get article metadata from source
    console.log('📖 Reading article metadata from src/data/articles.ts...');
    const articles = await getArticleMetadata();
    console.log(`✓ Found ${articles.length} articles to prerender\n`);

    // Read the built index.html
    const distIndexPath = path.join(__dirname, '..', 'dist', 'index.html');
    const baseHtml = await fs.readFile(distIndexPath, 'utf-8');

    console.log(`📚 Prerendering ${articles.length} articles...\n`);

    // Compute each article's first <h2> heading text from its content blocks so
    // validation can compare it against the injected HTML.
    const articleBodies = new Map();
    for (const article of articles) {
      const blocks = await loadContentBlocks(article.slug);
      const firstHeading = blocks.find((b) => b.type === 'heading' && b.level === 2);
      article.firstH2Text = firstHeading ? firstHeading.text : null;
      articleBodies.set(article.slug, renderArticleBodyHtml(article, blocks));
    }

    for (const article of articles) {
      const outDir = path.join(__dirname, '..', 'dist', 'learn', article.slug);
      await fs.mkdir(outDir, { recursive: true });

      const articleHtml = injectMetadata(baseHtml, article);
      const withBody = appendRelatedLinksIfUnderMinimum(article.slug, articleBodies.get(article.slug));
      const injected = injectHtmlIntoRoot(articleHtml, withBody);
      validateInjectedArticleHtml(article.slug, injected, article);
      await fs.writeFile(path.join(outDir, 'index.html'), injected);

      const imageSource = article.ogImage ? 'custom' : 'default';
      console.log(`✓ Generated: /learn/${article.slug}/index.html (og:image: ${imageSource})`);
    }

    console.log(`\n✅ Successfully prerendered ${articles.length} articles!\n`);

    console.log('📄 Prerendering static route pages...\n');

    for (const route of ROUTES) {
      const outDir = path.join(__dirname, '..', 'dist', route.path.replace(/^\//, ''));
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(path.join(outDir, 'index.html'), injectRouteMetadata(baseHtml, route));
      console.log(`✓ Generated: ${route.path}/index.html`);
    }

    console.log(`\n✅ Successfully prerendered ${ROUTES.length} static route pages!\n`);

    // Inject a static article index into /learn
    console.log('📄 Injecting article index into /learn...');
    const learnIndexPath = path.join(__dirname, '..', 'dist', 'learn', 'index.html');
    const learnHtml = await fs.readFile(learnIndexPath, 'utf-8');
    const learnRoute = ROUTES.find((r) => r.path === '/learn');
    const learnWithIndex = injectHtmlIntoRoot(learnHtml, renderLearnIndexHtml(articles));
    await fs.writeFile(learnIndexPath, learnWithIndex);
    console.log(`✓ Injected ${articles.length} article links into /learn/index.html (title source: ${learnRoute ? 'route metadata' : 'fallback'})\n`);

    // Generate dynamic sitemap
    console.log('🗺️  Generating sitemap.xml...');
    const sitemap = generateSitemap(articles);
    await fs.writeFile(path.join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    const sitemapUrlCount = (sitemap.match(/<loc>/g) || []).length;
    const expectedUrlCount = SITEMAP_PAGES.length + articles.length;
    if (sitemapUrlCount !== expectedUrlCount) {
      throw new Error(`Sitemap URL count mismatch: expected ${expectedUrlCount} (${SITEMAP_PAGES.length} static + ${articles.length} articles), found ${sitemapUrlCount}`);
    }
    console.log(`✓ Generated sitemap with ${sitemapUrlCount} URLs (${SITEMAP_PAGES.length} static + ${articles.length} articles)\n`);

    console.log('📊 Output:');
    console.log('   - dist/index.html (homepage)');
    console.log(`   - dist/<route>/index.html (${ROUTES.length} static route pages)`);
    console.log(`   - dist/learn/*/index.html (${articles.length} article pages)`);
    console.log('   - dist/robots.txt');
    console.log('   - dist/sitemap.xml');

    // Validate the build
    await validateBuild(articles);

  } catch (error) {
    console.error('\n❌ Prerender failed:', error.message);
    process.exit(1);
  }
}

main();
