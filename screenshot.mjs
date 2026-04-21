import puppeteer from 'puppeteer';
import { mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const outDir = join(__dirname, 'temporary screenshots');

mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Auto-increment screenshot number
const existing = readdirSync(outDir).filter(f => f.endsWith('.png'));
let n = 1;
if (existing.length > 0) {
  const nums = existing
    .map(f => parseInt(f.replace('screenshot-', '').replace(/-.*/, '').replace('.png', '')))
    .filter(n => !isNaN(n));
  if (nums.length > 0) n = Math.max(...nums) + 1;
}

const filename = label
  ? `screenshot-${n}-${label}.png`
  : `screenshot-${n}.png`;
const outPath = join(outDir, filename);

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

// Wait for fonts and images to settle
await new Promise(r => setTimeout(r, 1200));

// Scroll through the page to trigger IntersectionObserver reveals
const height = await page.evaluate(() => document.body.scrollHeight);
const steps = Math.ceil(height / 800);
for (let i = 0; i <= steps; i++) {
  await page.evaluate((i) => window.scrollTo(0, i * 800), i);
  await new Promise(r => setTimeout(r, 120));
}

// Force-reveal any elements that the IntersectionObserver may have missed
await page.evaluate(() => {
  document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
  document.querySelectorAll('h1, h2, .cta-title, .form-title, .faq-title').forEach(el => el.setAttribute('data-lines-revealed', ''));
});

await page.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 900)); // Wait for all transitions (max 300ms delay + 700ms duration)

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: temporary screenshots/${filename}`);
