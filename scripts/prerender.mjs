#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.atomstakingcalculator.com';

async function getArticleSlugs() {
  const articlesPath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
  const content = await fs.readFile(articlesPath, 'utf-8');

  // Extract article metadata using regex to avoid TS compilation
  // Pattern: slug: 'slug-value', seoTitle: '...', seoDescription: '...'
  const articles = [];
  const articlePattern = /{\s*id:\s*'[^']+',\s*slug:\s*'([^']+)',[\s\S]*?seoTitle:\s*'([^']+)',\s*seoDescription:\s*'([^']+)'/g;

  let match;
  while ((match = articlePattern.exec(content)) !== null) {
    articles.push({
      slug: match[1],
      seoTitle: match[2],
      seoDescription: match[3],
    });
  }

  if (articles.length === 0) {
    throw new Error('No article slugs found in articles.ts');
  }

  return articles;
}

function injectMetadata(html, article) {
  const fullTitle = `${article.seoTitle} | ATOM Staking Calculator`;
  const canonicalUrl = `${SITE_URL}/learn/${article.slug}`;

  // Replace title
  let result = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${fullTitle}</title>`
  );

  // Replace meta description
  result = result.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${article.seoDescription}"`
  );

  // Replace og:title
  result = result.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${fullTitle}"`
  );

  // Replace og:description
  result = result.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${article.seoDescription}"`
  );

  // Replace og:url
  result = result.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${canonicalUrl}"`
  );

  // Replace twitter:title
  result = result.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${fullTitle}"`
  );

  // Replace twitter:description
  result = result.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${article.seoDescription}"`
  );

  // Replace canonical link
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  return result;
}

async function main() {
  console.log('🔨 ATOM Staking Calculator - Article Prerender\n');

  try {
    // Get article metadata from source
    console.log('📖 Reading article slugs from src/data/articles.ts...');
    const articles = await getArticleSlugs();
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

      console.log(`✓ Generated: /learn/${article.slug}/index.html`);
    }

    console.log(`\n✅ Successfully prerendered ${articles.length} articles!\n`);
    console.log('📊 Output:');
    console.log('   - dist/index.html (homepage)');
    console.log(`   - dist/learn/*/index.html (${articles.length} article pages)`);
    console.log('   - dist/robots.txt');
    console.log('   - dist/sitemap.xml\n');
  } catch (error) {
    console.error('\n❌ Prerender failed:', error.message);
    process.exit(1);
  }
}

main();
