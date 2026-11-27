// Renders the fictional family's transactions as 15 monthly PDF bank statements (5 accounts x Aug-Oct 2026),
// each with a statement period, opening and closing balance and a transaction table, the way bank PDFs look.
// Real monthly statements don't contain the CSV export-overlap duplicates, so those rows are left out.
// Usage: node make_pdf_statements.cjs <out_dir>
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const here = __dirname, out = process.argv[2] || path.join(here, 'pdf-statements');
fs.mkdirSync(out, { recursive: true });
const rows = fs.readFileSync(path.join(here, 'answer-key', 'ground_truth_transactions.csv'), 'utf8').trim().split('\n');
const head = rows.shift().split(',');
const parse = line => { const o = []; let cur = '', q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(cur); cur = ''; } else cur += ch; } o.push(cur); return Object.fromEntries(head.map((h, i) => [h, o[i]])); };
const tx = rows.map(parse).filter(r => r.export_duplicate === 'No');
const summ = Object.fromEntries(fs.readFileSync(path.join(here, 'statements', 'statement_summaries.csv'), 'utf8').trim().split('\n').slice(1)
  .map(l => l.split(',')).map(c => [c[1], { name: c[0], type: c[2], opening: parseFloat(c[5]) }]));
const banks = { 'everyday_checking.csv': 'First Harbor Bank', 'joint_checking.csv': 'Lakeside Credit Union', 'visa_rewards.csv': 'Summit Visa', 'mastercard_cashback.csv': 'Crescent Mastercard', 'amex_blue.csv': 'Blue Card Services' };
const months = [['2026-08', 'August', '08/01/2026', '08/31/2026'], ['2026-09', 'September', '09/01/2026', '09/30/2026'], ['2026-10', 'October', '10/01/2026', '10/31/2026']];
const money = v => (v < 0 ? '-' : '') + '$' + Math.abs(v).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  for (const [file, info] of Object.entries(summ)) {
    const isCard = info.type === 'credit card';
    let bal = info.opening;
    for (const [ym, label, from, to] of months) {
      const list = tx.filter(r => r.source_file === file && r.date.startsWith(ym)).sort((a, c) => a.date.localeCompare(c.date) || (+a.source_row - +c.source_row));
      const open = bal; let ins = 0, outs = 0;
      const lines = list.map(r => {
        const amt = parseFloat(r.amount), inflow = r.direction === 'Inflow';
        if (inflow) ins += amt; else outs += amt;
        bal = isCard ? bal + (inflow ? -amt : amt) : bal + (inflow ? amt : -amt);
        const [y, m, d] = r.date.split('-');
        return `<tr><td>${m}/${d}</td><td>${r.description_raw}</td><td class="r">${inflow ? '' : money(amt)}</td><td class="r">${inflow ? money(amt) : ''}</td>${isCard ? '' : `<td class="r">${money(bal)}</td>`}</tr>`;
      }).join('');
      const html = `<!doctype html><meta charset="utf-8"><style>
        body{font-family:Arial,sans-serif;font-size:9pt;margin:16mm;color:#111} h1{font-size:15pt;margin:0} .sub{color:#555;margin:2mm 0 6mm}
        table{width:100%;border-collapse:collapse} td,th{padding:1.4mm 2mm;border-bottom:1px solid #ddd;text-align:left} th{background:#eee;font-size:8pt} .r{text-align:right}
        .sum{width:60%;margin:0 0 6mm} .sum td{border:none;padding:1mm 2mm}</style>
        <h1>${banks[file]}</h1><div class="sub">${info.name} &middot; Account ending 0000 &middot; Statement period ${from} to ${to}</div>
        <table class="sum">
          <tr><td>${isCard ? 'Previous balance' : 'Beginning balance'}</td><td class="r">${money(open)}</td></tr>
          <tr><td>${isCard ? 'Payments and credits' : 'Deposits and credits'}</td><td class="r">${money(ins)}</td></tr>
          <tr><td>${isCard ? 'Purchases, fees and interest' : 'Withdrawals and debits'}</td><td class="r">${money(outs)}</td></tr>
          <tr><td><b>${isCard ? 'New balance' : 'Ending balance'}</b></td><td class="r"><b>${money(bal)}</b></td></tr>
        </table>
        <table><tr><th>Date</th><th>Description</th><th class="r">${isCard ? 'Charges' : 'Withdrawals'}</th><th class="r">${isCard ? 'Payments/Credits' : 'Deposits'}</th>${isCard ? '' : '<th class="r">Balance</th>'}</tr>${lines}</table>
        <p style="color:#777;font-size:7.5pt;margin-top:6mm">Fictional statement for testing Money X-Ray. Not a real account.</p>`;
      await p.setContent(html);
      const name = `${info.name.replace(/ /g, '_')}_${label}_2026.pdf`;
      await p.pdf({ path: path.join(out, name), format: 'Letter', printBackground: true });
      console.log(name, money(open), '->', money(bal));
    }
  }
  await b.close();
})();
