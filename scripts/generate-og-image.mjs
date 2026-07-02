#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const WIDTH = 1200;
const HEIGHT = 630;

// Color palette from the app's Tailwind theme
const COLORS = {
  darkBg: '#030712',
  cosmosPurple: '#6c5ce7',
  brandGreen: '#10b981',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  emerald400: '#34d399',
  white: '#ffffff',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
};

// Create SVG with the OG image design
const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Main gradient background -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#030712"/>
      <stop offset="50%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#030712"/>
    </linearGradient>

    <!-- Cosmos purple glow -->
    <radialGradient id="purpleGlow" cx="30%" cy="40%" r="50%">
      <stop offset="0%" style="stop-color:#6c5ce7;stop-opacity:0.3"/>
      <stop offset="70%" style="stop-color:#6c5ce7;stop-opacity:0"/>
    </radialGradient>

    <!-- Cyan accent glow -->
    <radialGradient id="cyanGlow" cx="80%" cy="60%" r="40%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.25"/>
      <stop offset="60%" style="stop-color:#06b6d4;stop-opacity:0"/>
    </radialGradient>

    <!-- Emerald accent glow -->
    <radialGradient id="emeraldGlow" cx="60%" cy="30%" r="35%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2"/>
      <stop offset="70%" style="stop-color:#10b981;stop-opacity:0"/>
    </radialGradient>

    <!-- Atom orbit gradient -->
    <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#22d3ee;stop-opacity:0"/>
      <stop offset="30%" style="stop-color:#22d3ee;stop-opacity:0.8"/>
      <stop offset="70%" style="stop-color:#34d399;stop-opacity:0.8"/>
      <stop offset="100%" style="stop-color:#34d399;stop-opacity:0"/>
    </linearGradient>

    <!-- Text gradient -->
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#22d3ee"/>
      <stop offset="100%" style="stop-color:#34d399"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bgGradient)"/>

  <!-- Glow effects -->
  <rect width="100%" height="100%" fill="url(#purpleGlow)"/>
  <rect width="100%" height="100%" fill="url(#cyanGlow)"/>
  <rect width="100%" height="100%" fill="url(#emeraldGlow)"/>

  <!-- Decorative atom rings -->
  <g transform="translate(950, 315)">
    <!-- Outer ring -->
    <ellipse cx="0" cy="0" rx="180" ry="70" fill="none" stroke="url(#orbitGradient)" stroke-width="2" opacity="0.6" transform="rotate(-30)"/>
    <!-- Middle ring -->
    <ellipse cx="0" cy="0" rx="140" ry="55" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.4" transform="rotate(30)"/>
    <!-- Inner ring -->
    <ellipse cx="0" cy="0" rx="100" ry="40" fill="none" stroke="#34d399" stroke-width="1" opacity="0.5" transform="rotate(-60)"/>

    <!-- Core/nucleus -->
    <circle cx="0" cy="0" r="25" fill="url(#textGradient)" opacity="0.8"/>
    <circle cx="0" cy="0" r="18" fill="#030712"/>
    <circle cx="0" cy="0" r="12" fill="url(#textGradient)" opacity="0.9"/>
  </g>

  <!-- Left side decorative chart bars -->
  <g transform="translate(80, 280)">
    <rect x="0" y="120" width="32" height="80" rx="4" fill="#22d3ee" opacity="0.7"/>
    <rect x="44" y="80" width="32" height="120" rx="4" fill="#10b981" opacity="0.8"/>
    <rect x="88" y="40" width="32" height="160" rx="4" fill="#6c5ce7" opacity="0.6"/>
  </g>

  <!-- Main title -->
  <text x="80" y="200" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="72" font-weight="700" fill="${COLORS.white}">
    ATOM Staking
  </text>
  <text x="80" y="285" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="72" font-weight="700" fill="url(#textGradient)">
    Calculator
  </text>

  <!-- Tagline -->
  <text x="80" y="360" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="32" font-weight="400" fill="${COLORS.gray300}">
    Calculate Cosmos ATOM Staking Rewards
  </text>

  <!-- Feature badges -->
  <g transform="translate(80, 420)">
    <!-- Badge 1 -->
    <rect x="0" y="0" width="200" height="50" rx="25" fill="#22d3ee" fill-opacity="0.15" stroke="#22d3ee" stroke-opacity="0.5" stroke-width="1"/>
    <text x="100" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="600" fill="#22d3ee" text-anchor="middle">14-20% APR</text>

    <!-- Badge 2 -->
    <rect x="220" y="0" width="200" height="50" rx="25" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.5" stroke-width="1"/>
    <text x="320" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="600" fill="#34d399" text-anchor="middle">Free Calculator</text>

    <!-- Badge 3 -->
    <rect x="440" y="0" width="200" height="50" rx="25" fill="#6c5ce7" fill-opacity="0.15" stroke="#6c5ce7" stroke-opacity="0.5" stroke-width="1"/>
    <text x="540" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="600" fill="#a78bfa" text-anchor="middle">Instant Results</text>
  </g>

  <!-- Website URL at bottom -->
  <text x="80" y="580" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="400" fill="${COLORS.gray400}">
    atomstakingcalculator.com
  </text>
</svg>
`;

async function main() {
  console.log('🎨 Generating OG image...\n');

  const outputPath = path.join(__dirname, '..', 'public', 'og-default.png');

  try {
    // Convert SVG to PNG
    const pngBuffer = await sharp(Buffer.from(svg))
      .resize(WIDTH, HEIGHT)
      .png()
      .toBuffer();

    // Write to file
    await fs.writeFile(outputPath, pngBuffer);

    // Verify the output
    const metadata = await sharp(outputPath).metadata();

    console.log('✅ OG image generated successfully!\n');
    console.log('📊 Image details:');
    console.log(`   - Path: public/og-default.png`);
    console.log(`   - Dimensions: ${metadata.width}x${metadata.height}px`);
    console.log(`   - Format: ${metadata.format}`);
    console.log(`   - Size: ${(pngBuffer.length / 1024).toFixed(1)} KB\n`);

    if (metadata.width !== WIDTH || metadata.height !== HEIGHT) {
      throw new Error(`Dimensions mismatch: expected ${WIDTH}x${HEIGHT}, got ${metadata.width}x${metadata.height}`);
    }
  } catch (error) {
    console.error('❌ Failed to generate OG image:', error.message);
    process.exit(1);
  }
}

main();
