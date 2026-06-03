#!/usr/bin/env node
/**
 * Post-build script to fix asset paths for GitHub Pages deployment.
 * 
 * When using Next.js static export with basePath + unoptimized images,
 * some paths in the RSC (React Server Component) data inside <script> tags
 * don't get the basePath prefix. This script fixes them.
 * 
 * Usage: node scripts/fix-paths.js
 * 
 * This is automatically run as part of the "build:ghpages" npm script.
 */

const fs = require('fs');
const path = require('path');

const BASE_PATH = '/poomala-new';
const OUT_DIR = path.join(__dirname, '..', 'out');

function findHtmlFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
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

  const htmlFiles = findHtmlFiles(OUT_DIR);
  let totalFixes = 0;

  for (const filePath of htmlFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix img src attributes that are missing basePath
    const imgSrcRegex = /src="\/(?!poomala-new\/)(_next|IMG-|poomala_|vattayi|cheppara|logo)/g;
    if (imgSrcRegex.test(content)) {
      content = content.replace(imgSrcRegex, `src="${BASE_PATH}/$1`);
      modified = true;
    }

    // Fix href attributes for internal links in RSC data
    const hrefInRscRegex = /"href":"\/(?!poomala-new\/)(places|gallery|blog|about|contact|favicon)/g;
    if (hrefInRscRegex.test(content)) {
      content = content.replace(hrefInRscRegex, `"href":"${BASE_PATH}/$1`);
      modified = true;
    }

    // Fix src in RSC JSON data (image references in React Server Component payloads)
    const srcInRscRegex = /"src":"\/(?!poomala-new\/)(IMG-|poomala_|vattayi|cheppara|logo)/g;
    if (srcInRscRegex.test(content)) {
      content = content.replace(srcInRscRegex, `"src":"${BASE_PATH}/$1`);
      modified = true;
    }

    // Fix preload href for images
    const preloadRegex = /href="\/(?!poomala-new\/)(IMG-|poomala_|vattayi|cheppara)/g;
    if (preloadRegex.test(content)) {
      content = content.replace(preloadRegex, `href="${BASE_PATH}/$1`);
      modified = true;
    }

    if (modified) {
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
