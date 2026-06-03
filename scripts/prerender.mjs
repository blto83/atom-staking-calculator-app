#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let SERVER_PORT = 4173;
let SERVER_URL = `http://localhost:${SERVER_PORT}`;

async function waitForServer(url, maxAttempts = 60) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === 404) {
        return true;
      }
    } catch (e) {
      // Server not ready yet
    }
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error(`Server on ${url} did not start within ${maxAttempts * 0.5}s`);
}

async function startPreviewServer() {
  console.log('🚀 Starting Vite preview server...');

  return new Promise((resolve) => {
    const server = spawn('npm', ['run', 'preview'], {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'pipe',
    });

    let portDetected = false;

    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(`[preview] ${output.trim()}`);

      const portMatch = output.match(/localhost:(\d+)/);
      if (portMatch && !portDetected) {
        const detectedPort = parseInt(portMatch[1], 10);
        SERVER_PORT = detectedPort;
        SERVER_URL = `http://localhost:${detectedPort}`;
        portDetected = true;
        setTimeout(() => resolve(server), 500);
      }
    });

    server.stderr.on('data', (data) => {
      console.error(`[preview] ${data}`);
    });

    setTimeout(() => {
      if (!portDetected) resolve(server);
    }, 5000);
  });
}

async function prerenderArticle(browser, slug) {
  const url = `${SERVER_URL}/learn/${slug}`;
  console.log(`📄 Prerendering: ${slug}`);

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 1000));

    const html = await page.content();
    const outDir = path.join(__dirname, '..', 'dist', 'learn', slug);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, 'index.html'), html);

    console.log(`✓ Generated: /learn/${slug}/index.html`);
    await page.close();
  } catch (error) {
    console.error(`✗ Failed to prerender ${slug}:`, error.message);
    throw error;
  }
}

async function getArticleSlugs() {
  // Dynamically import the articles module from the built dist folder
  // During prerender, we import the TypeScript compiled version
  const articlesPath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');

  // For runtime execution, we need to read and parse the TypeScript file
  // Since this is ES module and runs during build, we parse the file directly
  try {
    const content = await fs.readFile(articlesPath, 'utf-8');

    // Extract all slug values using regex to avoid TS compilation
    // Pattern: slug: 'slug-value',
    const slugPattern = /slug:\s*'([^']+)'/g;
    const slugs = [];
    let match;

    while ((match = slugPattern.exec(content)) !== null) {
      slugs.push(match[1]);
    }

    if (slugs.length === 0) {
      throw new Error('No article slugs found in articles.ts');
    }

    // Return only unique slugs (filter out any duplicates from type defs)
    return [...new Set(slugs)];
  } catch (error) {
    throw new Error(`Failed to read article slugs from articles.ts: ${error.message}`);
  }
}

async function main() {
  console.log('🔨 ATOM Staking Calculator - Article Prerender\n');

  let previewServer = null;
  let browser = null;

  try {
    // Get article slugs from source
    console.log('📖 Reading article slugs from src/data/articles.ts...');
    const ARTICLE_SLUGS = await getArticleSlugs();
    console.log(`✓ Found ${ARTICLE_SLUGS.length} articles to prerender\n`);

    previewServer = await startPreviewServer();
    await waitForServer(SERVER_URL);

    console.log('🌐 Launching Puppeteer...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    console.log(`\n📚 Prerendering ${ARTICLE_SLUGS.length} articles...\n`);
    for (const slug of ARTICLE_SLUGS) {
      await prerenderArticle(browser, slug);
    }

    console.log(`\n✅ Successfully prerendered ${ARTICLE_SLUGS.length} articles!\n`);
    console.log('📊 Output:');
    console.log(`   - dist/index.html (homepage)`);
    console.log(`   - dist/learn/*/index.html (${ARTICLE_SLUGS.length} article pages)`);
    console.log(`   - dist/robots.txt`);
    console.log(`   - dist/sitemap.xml\n`);
  } catch (error) {
    console.error('\n❌ Prerender failed:', error.message);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
    if (previewServer) previewServer.kill();
  }
}

main();
