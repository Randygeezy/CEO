// Renders kit.html to kit_layout.pdf (US Letter) and writes fields.json: every box's page and
// position in PDF points (origin top-left), so add_fields.py can put a form field on it.
const path = require('path'), fs = require('fs'); const { chromium } = require('playwright');
(async () => {
  const here = __dirname, b = await chromium.launch(), p = await b.newPage();
  await p.goto('file://' + path.join(here, 'kit.html')); await p.evaluate(() => document.fonts.ready);
  const fields = await p.evaluate(() => [...document.querySelectorAll('.pg')].flatMap((pg, i) => {
    const o = pg.getBoundingClientRect();
    return [...pg.querySelectorAll('[data-f]')].map(e => { const r = e.getBoundingClientRect();
      return { name: e.dataset.f, page: i, check: e.classList.contains('c'), multi: e.classList.contains('m'), dark: e.classList.contains('hd'),
        x0: (r.left - o.left) * .75, y0: (r.top - o.top) * .75, x1: (r.right - o.left) * .75, y1: (r.bottom - o.top) * .75 }; });
  }));
  const names = fields.map(f => f.name), dup = names.filter((n, i) => names.indexOf(n) !== i);
  if (dup.length) { console.error('duplicate field names:', dup); process.exit(1); }
  fs.writeFileSync(path.join(here, 'fields.json'), JSON.stringify(fields));
  await p.pdf({ path: path.join(here, 'kit_layout.pdf'), width: '8.5in', height: '11in', printBackground: true });
  console.log('fields:', fields.length); await b.close();
})();
