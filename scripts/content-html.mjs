// Loads ContentBlock[] from src/content/<slug>.ts and converts blocks to
// plain semantic HTML for build-time prerendering. Pure Node via esbuild
// (ships with Vite); no runtime dependencies and no browser.
import path from 'path';
import { fileURLToPath } from 'url';
import esbuild from 'esbuild';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

export function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Bundles a TS source file to CJS in memory and evaluates it, returning its
// exports. Avoids regex-parsing source files, which breaks on escaped quotes.
async function loadTsModule(entry) {
  let result;
  try {
    result = await esbuild.build({
      entryPoints: [entry],
      bundle: true,
      format: 'cjs',
      platform: 'node',
      write: false,
      logLevel: 'silent',
    });
  } catch (e) {
    throw new Error(`Failed to load TypeScript file "${entry}": ${e.message}`);
  }

  const code = result.outputFiles[0].text;
  const mod = { exports: {} };
  try {
    new Function('module', 'exports', 'require', code)(mod, mod.exports, () => ({}));
  } catch (e) {
    throw new Error(`Failed to evaluate TypeScript file "${entry}": ${e.message}`);
  }
  return mod.exports;
}

// Loads the ContentBlock[] array from src/content/<slug>.ts (export names vary
// between content files, so pick the first non-empty array).
export async function loadContentBlocks(slug) {
  const entry = path.join(CONTENT_DIR, `${slug}.ts`);
  const exports = await loadTsModule(entry);
  const blocks = Object.values(exports).find((v) => Array.isArray(v) && v.length > 0);
  if (!blocks) {
    throw new Error(`Content file for article "${slug}" exports no ContentBlock[] array`);
  }
  return blocks;
}

// Loads the Article[] metadata from src/data/articles.ts.
export async function loadArticles() {
  const entry = path.join(DATA_DIR, 'articles.ts');
  const exports = await loadTsModule(entry);
  const articles = exports.ARTICLES;
  if (!Array.isArray(articles) || articles.length === 0) {
    throw new Error('articles.ts exports no non-empty ARTICLES array');
  }
  return articles;
}

function renderExampleCalculation(block) {
  const rows = block.rows
    .map((row) => `      <tr><td>${escapeHtml(row.rate)}</td><td>Net: ${escapeHtml(row.net)}</td></tr>`)
    .join('\n');
  const footnote = block.footnote ? `\n    <p><em>${escapeHtml(block.footnote)}</em></p>` : '';
  return `<aside class="article-example">
    <p>${escapeHtml(block.introText)}</p>
    <table>
      <thead><tr><th>Rate</th><th>Net Rewards</th></tr></thead>
      <tbody>
${rows}
      </tbody>
    </table>${footnote}
  </aside>`;
}

function renderTable(block) {
  const head = block.headers
    .map((h) => `        <th>${escapeHtml(h)}</th>`)
    .join('');
  const body = block.rows
    .map((row) => `        <tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`)
    .join('\n');
  return `<table>
      <thead>
        <tr>${head}</tr>
      </thead>
      <tbody>
${body}
      </tbody>
    </table>`;
}

export function renderBlockToHtml(block) {
  switch (block.type) {
    case 'intro':
    case 'paragraph':
      return `<p>${escapeHtml(block.text)}</p>`;
    case 'heading':
      return block.level === 2
        ? `<h2>${escapeHtml(block.text)}</h2>`
        : `<h3>${escapeHtml(block.text)}</h3>`;
    case 'bullet-list':
      return `<ul>\n${block.items
        .map((item) => `  <li><strong>${escapeHtml(item.label)}</strong> ${escapeHtml(item.text)}</li>`)
        .join('\n')}\n</ul>`;
    case 'key-takeaways':
      return `<ul>\n${block.items
        .map((item) => `  <li>${escapeHtml(item)}</li>`)
        .join('\n')}\n</ul>`;
    case 'table':
      return renderTable(block);
    case 'faq':
      return block.items
        .map((item) => `<h3>${escapeHtml(item.question)}</h3>\n    <p>${escapeHtml(item.answer)}</p>`)
        .join('\n    ');
    case 'callout': {
      const label = block.label || (block.variant === 'disclaimer' ? 'Disclaimer' : 'Quick Take');
      return `<aside class="article-callout"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(block.text)}</aside>`;
    }
    case 'formula':
      return `<aside class="article-formula"><p>${escapeHtml(block.text)}</p></aside>`;
    case 'example-calculation':
      return renderExampleCalculation(block);
    case 'internal-link': {
      const space = block.suffix && block.suffix !== '.' ? ' ' : '';
      return `<p>${escapeHtml(block.prefix)} <a href="/learn/${escapeHtml(block.articleSlug)}">${escapeHtml(block.linkText)}</a>${space}${escapeHtml(block.suffix)}</p>`;
    }
    case 'calculator-cta': {
      const space = block.suffix && !/^[.,;:!?]/.test(block.suffix) ? ' ' : '';
      return `<p>${escapeHtml(block.prefix)} <a href="/calculator">ATOM Staking Calculator</a>${space}${escapeHtml(block.suffix)}</p>`;
    }
    default:
      throw new Error(`Unknown content block type: ${block.type}`);
  }
}

// One <h1> with the article title plus an author/date line, then the body.
export function renderArticleBodyHtml(article, blocks) {
  const parts = [
    `<h1>${escapeHtml(article.title)}</h1>`,
    `<p class="article-byline">By ${escapeHtml(article.author)} · ${escapeHtml(article.date)}</p>`,
  ];
  for (const block of blocks) {
    parts.push(`    ${renderBlockToHtml(block)}`);
  }
  return parts.join('\n    ');
}

export function renderLearnIndexHtml(articles) {
  const items = articles
    .map((a) => `  <li><a href="/learn/${escapeHtml(a.slug)}">${escapeHtml(a.title)}</a></li>`)
    .join('\n');
  return `<h1>Cosmos ATOM Staking Guides</h1>
    <p class="article-byline">By ${escapeHtml(articles[0]?.author || 'Atom Staking Calculator Team')}</p>
    <ul>
${items}
    </ul>`;
}
