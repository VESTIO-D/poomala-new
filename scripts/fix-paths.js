#!/usr/bin/env node
/**
 * Post-build script to fix asset paths for GitHub Pages deployment.
 *
 * Next.js static export with basePath doesn't always prefix paths in
 * RSC (React Server Component) data — both in separate .txt files AND
 * in inline <script> tags embedded in HTML. This script fixes ALL of them.
 *
 * Strategy: Use a single comprehensive regex approach that catches
 * ALL internal path references regardless of where they appear.
 *
 * Usage: node scripts/fix-paths.js
 * This is automatically run as part of the "build:ghpages" npm script.
 */

const fs = require('fs');
const path = require('path');

const BASE_PATH = '/poomala-new';
const OUT_DIR = path.join(__dirname, '..', 'out');

// All internal path prefixes that need basePath
const INTERNAL_PATHS = [
  'places', 'gallery', 'blog', 'about', 'contact',
  'IMG-', 'poomala_', 'vattayi', 'cheppara',
  'logo', 'favicon',
];

function findFiles(dir, extensions) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(fullPath, extensions));
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function fixPaths() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('Output directory not found. Run "next build" first.');
    process.exit(1);
  }

  const files = findFiles(OUT_DIR, ['.html', '.txt']);
  let totalFixes = 0;

  for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // === PATTERN 1: Quoted paths in RSC/JSON data ===
    // Matches: "href":"/places", "src":"/IMG-...", "url":"/about" etc.
    // These appear in both .txt RSC files AND inline <script> tags in HTML
    const internalPathPattern = INTERNAL_PATHS.join('|');
    const quotedPathRegex = new RegExp(
      `("(?:href|src|url)"):"/(?!poomala-new/)(${internalPathPattern})`,
      'g'
    );
    content = content.replace(quotedPathRegex, `$1:"${BASE_PATH}/$2`);

    // === PATTERN 2: HTML attribute paths ===
    // Matches: src="/IMG-...", href="/places", content="/about"
    const htmlAttrRegex = new RegExp(
      `(src|href|content|action)="/(?!poomala-new/)(${internalPathPattern})`,
      'g'
    );
    content = content.replace(htmlAttrRegex, `$1="${BASE_PATH}/$2`);

    // === PATTERN 3: Preload link href for images ===
    const preloadRegex = new RegExp(
      `href="/(?!poomala-new/)(IMG-|poomala_|vattayi|cheppara)`,
      'g'
    );
    content = content.replace(preloadRegex, `href="${BASE_PATH}/$1`);

    // === PATTERN 4: Any remaining bare "/" + internal path in JSON strings ===
    // This is a catch-all for paths like "/places/poomala-dam" that might appear
    // in nested JSON structures where the key isn't "href"/"src"/"url"
    const barePathRegex = new RegExp(
      `"/(?!poomala-new/)(places/|gallery/|blog/|about/|contact/|IMG-|poomala_|vattayi|cheppara|favicon)`,
      'g'
    );
    content = content.replace(barePathRegex, `"${BASE_PATH}/$1`);

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      const relativePath = path.relative(OUT_DIR, filePath);
      console.log(`  Fixed: ${relativePath}`);
      totalFixes++;
    }
  }

  if (totalFixes > 0) {
    console.log(`\nFixed paths in ${totalFixes} file(s)`);
  } else {
    console.log('\nAll paths already correct - no fixes needed');
  }
}

console.log(`Fixing asset paths for GitHub Pages (basePath: ${BASE_PATH})...\n`);
fixPaths();
