#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.atomstakingcalculator.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

// Static pages to include in sitemap (besides articles)
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/dashboard', changefreq: 'weekly', priority: 0.8 },
  { path: '/calculator', changefreq: 'weekly', priority: 0.9 },
  { path: '/growth', changefreq: 'weekly', priority: 0.8 },
  { path: '/rewards', changefreq: 'monthly', priority: 0.7 },
  { path: '/transactions', changefreq: 'monthly', priority: 0.6 },
  { path: '/about', changefreq: 'monthly', priority: 0.7 },
  { path: '/learn', changefreq: 'monthly', priority: 0.8 },
  { path: '/faq', changefreq: 'monthly', priority: 0.8 },
  { path: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { path: '/terms-of-use', changefreq: 'yearly', priority: 0.5 },
  { path: '/disclaimer', changefreq: 'yearly', priority: 0.5 },
  { path: '/settings', changefreq: 'yearly', priority: 0.3 },
];

async function getArticleMetadata() {
  const articlesPath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
  const content = await fs.readFile(articlesPath, 'utf-8');

  const articles = [];

  // Parse each article object from the TypeScript file
  // Match article blocks starting from { id: to the closing },
  const articleBlockPattern = /{\s*id:\s*'([^']+)',\s*slug:\s*'([^']+)',[\s\S]*?seoTitle:\s*'([^']+)',\s*seoDescription:\s*'([^']+)'[\s\S]*?},?\n\s*}/g;

  // Simpler approach: extract each article object
  const slugPattern = /slug:\s*'([^']+)'/g;
  const seoTitlePattern = /seoTitle:\s*'([^']+)'/g;
  const seoDescPattern = /seoDescription:\s*'([^']+)'/g;
  const ogImagePattern = /ogImage:\s*'([^']+)'/g;

  // Split by article objects
  const articleObjects = content.match(/{\s*id:\s*'[^']+',[\s\S]*?(?:featured:\s*(?:true|false),?\s*)?}/g) || [];

  for (const obj of articleObjects) {
    const slugMatch = obj.match(/slug:\s*'([^']+)'/);
    const seoTitleMatch = obj.match(/seoTitle:\s*'([^']+)'/);
    const seoDescMatch = obj.match(/seoDescription:\s*'([^']+)'/);
    const ogImageMatch = obj.match(/ogImage:\s*'([^']+)'/);

    if (slugMatch && seoTitleMatch && seoDescMatch) {
      articles.push({
        slug: slugMatch[1],
        seoTitle: seoTitleMatch[1],
        seoDescription: seoDescMatch[1],
        ogImage: ogImageMatch ? ogImageMatch[1] : null,
      });
    }
  }

  if (articles.length === 0) {
    throw new Error('No article slugs found in articles.ts');
  }

  return articles;
}

function injectMetadata(html, article) {
  const fullTitle = `${article.seoTitle} | ATOM Staking Calculator`;
  const canonicalUrl = `${SITE_URL}/learn/${article.slug}`;
  const ogImageUrl = article.ogImage || DEFAULT_OG_IMAGE;

  let result = html;

  // <title> keeps the full "seoTitle | ATOM Staking Calculator" form
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`
  );

  // meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${article.seoDescription}"`
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
    `<meta property="og:title" content="${article.seoTitle}"`
  );

  // og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${article.seoDescription}"`
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
    `<meta name="twitter:title" content="${article.seoTitle}"`
  );

  // twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${article.seoDescription}"`
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

function generateSitemap(articles) {
  const urls = [];

  // Add static pages
  for (const page of STATIC_PAGES) {
    urls.push(`  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  // Add all article pages
  for (const article of articles) {
    urls.push(`  <url>
    <loc>${SITE_URL}/learn/${article.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
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

    for (const article of articles) {
      const outDir = path.join(__dirname, '..', 'dist', 'learn', article.slug);
      await fs.mkdir(outDir, { recursive: true });

      const articleHtml = injectMetadata(baseHtml, article);
      await fs.writeFile(path.join(outDir, 'index.html'), articleHtml);

      const imageSource = article.ogImage ? 'custom' : 'default';
      console.log(`✓ Generated: /learn/${article.slug}/index.html (og:image: ${imageSource})`);
    }

    console.log(`\n✅ Successfully prerendered ${articles.length} articles!\n`);

    // Generate dynamic sitemap
    console.log('🗺️  Generating sitemap.xml...');
    const sitemap = generateSitemap(articles);
    await fs.writeFile(path.join(__dirname, '..', 'dist', 'sitemap.xml'), sitemap);
    const totalUrls = STATIC_PAGES.length + articles.length;
    console.log(`✓ Generated sitemap with ${totalUrls} URLs (${STATIC_PAGES.length} static + ${articles.length} articles)\n`);

    console.log('📊 Output:');
    console.log('   - dist/index.html (homepage)');
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
