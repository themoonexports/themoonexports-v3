#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Essential assets that should be present
const requiredAssets = [
  'public/favicon.ico',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/BingSiteAuth.xml',
  'public/images/logo.png',
  'public/images/dropdown.jpg',
  'public/images/Horn-Crafts.JPG',
  'public/images/pizza-cutter.jpg',
  'public/images/resin-bangle.jpg',
  'public/images/one.jpg',
  'public/images/german.png',
  'public/images/english.png',
  'public/images/paypal-secured.png',
];

console.log('🔍 Verifying Next.js assets...\n');

let allPresent = true;

requiredAssets.forEach(asset => {
  const fullPath = path.join(process.cwd(), asset);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${asset}`);
  } else {
    console.log(`❌ ${asset} - MISSING`);
    allPresent = false;
  }
});

console.log('\n📊 Asset verification summary:');
if (allPresent) {
  console.log('🎉 All essential assets are present and ready for Next.js!');
  console.log('📝 Total images available:', fs.readdirSync('public/images').length);
} else {
  console.log('⚠️  Some assets are missing. Please copy them from the original project.');
  process.exit(1);
}
