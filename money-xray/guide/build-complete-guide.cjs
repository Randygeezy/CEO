// Builds Money_XRay_Complete_Guide.pdf from complete-guide.html (pages laid out by paginate.js).
// Usage (from this folder): node build-complete-guide.cjs   (needs playwright)
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const here = __dirname;
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const prompt = fs.readFileSync(path.join(here, '..', 'prompt', 'Money_XRay_Prompt.txt'), 'utf8');
const html = fs.readFileSync(path.join(here, 'complete-guide.html'), 'utf8').replace('{{PROMPT}}', require('./prompt-blocks.cjs')(prompt).map(t => '<pre class="prompt">' + esc(t) + '</pre>').join('\n'));
const tmp = path.join(here, '.build.html'), out = path.join(here, 'Money_XRay_Complete_Guide.pdf');
(async () => {
  fs.writeFileSync(tmp, html);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + tmp, { waitUntil: 'load' });
  await p.waitForFunction(() => window.__result, null, { timeout: 180000 });
  const r = await p.evaluate(() => window.__result);
  await p.pdf({ path: out, width: '210mm', height: '297mm', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close(); fs.unlinkSync(tmp);
  console.log('pages:', r.pages); console.log('chapters:', JSON.stringify(r.pageOf)); console.log('pages under 40% full:', JSON.stringify(r.lowFill));
  if (r.warn.length) console.log('WARN:\n' + r.warn.join('\n'));
})();
