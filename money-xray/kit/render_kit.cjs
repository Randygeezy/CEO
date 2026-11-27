// Renders kit_<edition>.html to kit_<edition>_layout.pdf and writes fields_<edition>.json (each box's page
// and position in PDF points, origin top-left). Paper editions: fixed pages; fails if any page overflows.
// Phone edition: each section becomes its own page, as tall as its content.
// Usage: node render_kit.cjs letter|a4|print|phone
const path = require('path'), fs = require('fs'); const { chromium } = require('playwright');
(async () => {
  const ed = process.argv[2], here = __dirname, b = await chromium.launch(), p = await b.newPage({ viewport: { width: 900, height: 1200 } });
  await p.goto('file://' + path.join(here, `kit_${ed}.html`)); await p.evaluate(() => document.fonts.ready);
  const info = await p.evaluate(() => [...document.querySelectorAll('.pg')].map((pg, i) => {
    const o = pg.getBoundingClientRect(), c = pg.querySelector('.content');
    const over = c && getComputedStyle(c).position === 'absolute' && [...c.querySelectorAll('*')].some(e => e.getBoundingClientRect().bottom > c.getBoundingClientRect().bottom + 0.5);
    return { w: o.width, h: o.height, over, fields: [...pg.querySelectorAll('[data-f]')].map(e => { const r = e.getBoundingClientRect();
      return { name: e.dataset.f, page: i, check: e.classList.contains('c'), multi: e.classList.contains('m'),
        x0: (r.left - o.left) * .75, y0: (r.top - o.top) * .75, x1: (r.right - o.left) * .75, y1: (r.bottom - o.top) * .75 }; }) };
  }));
  const bad = info.map((x, i) => x.over ? i + 1 : 0).filter(Boolean);
  if (bad.length) { console.error(ed, 'pages overflow:', bad); process.exit(1); }
  const fields = info.flatMap(x => x.fields), names = fields.map(f => f.name), dup = names.filter((n, i) => names.indexOf(n) !== i);
  if (dup.length) { console.error('duplicate field names:', dup); process.exit(1); }
  fs.writeFileSync(path.join(here, `fields_${ed}.json`), JSON.stringify(fields));
  const out = path.join(here, `kit_${ed}_layout.pdf`);
  if (ed !== 'phone') {
    await p.pdf({ path: out, preferCSSPageSize: false, width: info[0].w + 'px', height: info[0].h + 'px', printBackground: true });
  } else {
    // one PDF per section at its own height, then merge (add_fields.py merges)
    const parts = [];
    for (let i = 0; i < info.length; i++) {
      await p.evaluate(k => document.querySelectorAll('.pg').forEach((pg, j) => pg.style.display = j === k ? '' : 'none'), i);
      const f = path.join(here, `.phone_${i}.pdf`); parts.push(f);
      await p.pdf({ path: f, width: info[i].w + 'px', height: Math.ceil(info[i].h) + 1 + 'px', printBackground: true, pageRanges: '1' });
    }
    fs.writeFileSync(path.join(here, '.phone_parts.json'), JSON.stringify(parts));
  }
  console.log(ed, 'pages:', info.length, 'fields:', fields.length); await b.close();
})();
