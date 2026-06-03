#!/usr/bin/env node
import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ARTICLE_SLUGS = [
  'what-is-cosmos-atom-staking-beginner-guide-2026',
  'staking-apr-vs-apy-mathematics-of-compounding-atom',
  'how-to-choose-the-right-cosmos-validator-5-core-metrics',
  'atom-staking-risks-slashing-and-unbonding-period-explained',
  'maximized-atom-portfolio-planning-passive-income-strategy',
  'best-cosmos-wallets-for-atom-staking-2026',
  'best-atom-validators-cosmos-staking-2026',
  'can-you-lose-money-staking-atom',
  'how-much-atom-to-make-passive-income',
  'is-cosmos-atom-staking-safe-for-beginners',
  'does-daily-compounding-increase-atom-staking-rewards',
  'atom-staking-tax-implications-and-reporting-guide',
];

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

async function main() {
  console.log('🔨 ATOM Staking Calculator - Article Prerender\n');

  let previewServer = null;
  let browser = null;

  try {
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
