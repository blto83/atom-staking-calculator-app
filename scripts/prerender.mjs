#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = 'https://www.atomstakingcalculator.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

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

  // Replace title
  result = result.replace(
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

  // Replace og:image
  result = result.replace(
    /<meta property="og:image" content="[^"]*"/,
    `<meta property="og:image" content="${ogImageUrl}"`
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

  // Replace twitter:image
  result = result.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${ogImageUrl}"`
  );

  // Replace canonical link
  result = result.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  return result;
}

async function validateBuild(articles) {
  console.log('\n🔍 Validating build output...\n');

  const errors = [];
  const distPath = path.join(__dirname, '..', 'dist');

  // Check homepage
  const homePath = path.join(distPath, 'index.html');
  try {
    const homeHtml = await fs.readFile(homePath, 'utf-8');

    // Check for bolt.new placeholders
    if (homeHtml.includes('bolt.new')) {
      errors.push('Homepage still contains bolt.new references in og:image or twitter:image');
    }

    // Check required tags exist
    const requiredTags = [
      { pattern: /<meta property="og:title" content="[^"]+"/, name: 'og:title' },
      { pattern: /<meta property="og:image" content="[^"]+"/, name: 'og:image' },
      { pattern: /<link rel="canonical" href="[^"]+"/, name: 'canonical' },
    ];

    for (const tag of requiredTags) {
      if (!tag.pattern.test(homeHtml)) {
        errors.push(`Homepage missing ${tag.name}`);
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

      // Check for bolt.new placeholders
      if (articleHtml.includes('bolt.new')) {
        errors.push(`Article "${article.slug}" still contains bolt.new references`);
      }

      // Check required tags
      const requiredTags = [
        { pattern: /<meta property="og:title" content="[^"]+"/, name: 'og:title' },
        { pattern: /<meta property="og:image" content="[^"]+"/, name: 'og:image' },
        { pattern: /<meta property="og:url" content="[^"]+"/, name: 'og:url' },
        { pattern: /<link rel="canonical" href="[^"]+"/, name: 'canonical' },
      ];

      for (const tag of requiredTags) {
        if (!tag.pattern.test(articleHtml)) {
          errors.push(`Article "${article.slug}" missing ${tag.name}`);
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
