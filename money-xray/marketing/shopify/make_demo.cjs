// Renders the Money X-Ray header wordmark and the frames of a short walkthrough video (an illustration with
// the fictional test family's numbers; no real account). Then: ffmpeg joins the frames (see README).
// Usage: node make_demo.cjs <out dir>
const fs = require('fs'), path = require('path'); const { chromium } = require('playwright');
const out = process.argv[2]; fs.mkdirSync(out, { recursive: true });
const fonts = path.resolve(__dirname, '../../guide/fonts');
const CSS = `
@font-face{font-family:PF;font-weight:900;src:url(file://${fonts}/playfair-display-latin-900-normal.woff2)}
@font-face{font-family:PF;font-weight:700;font-style:italic;src:url(file://${fonts}/playfair-display-latin-700-italic.woff2)}
@font-face{font-family:PP;font-weight:400;src:url(file://${fonts}/poppins-latin-400-normal.woff2)}
@font-face{font-family:PP;font-weight:600;src:url(file://${fonts}/poppins-latin-600-normal.woff2)}
*{box-sizing:border-box}html,body{margin:0;background:transparent}body{font-family:PP;color:#161514}
.f{width:1080px;height:1080px;background:radial-gradient(circle at 50% 30%,#f8f5f0,#efe9e1 75%);position:relative;overflow:hidden}
.cap{position:absolute;top:56px;left:0;right:0;text-align:center;font-family:PF;font-weight:900;font-size:56px}
.cap em{font-style:italic;font-weight:700;color:#8b735f}
.step{position:absolute;top:150px;left:0;right:0;text-align:center;font-size:24px;color:#4a453f}
.phone{position:absolute;left:290px;top:220px;width:500px;height:800px;background:#161514;border-radius:56px;padding:16px;box-shadow:0 30px 70px rgba(0,0,0,.25)}
.scr{width:100%;height:100%;background:#fff;border-radius:42px;padding:34px 22px;display:flex;flex-direction:column;gap:14px;overflow:hidden;font-size:23px;line-height:1.42}
.me{align-self:flex-end;background:#161514;color:#fff;border-radius:20px 20px 4px 20px;padding:12px 16px;max-width:80%}
.ai{align-self:flex-start;background:#f1ede7;border-radius:20px 20px 20px 4px;padding:14px 16px;max-width:92%}
.file{display:flex;gap:10px;align-items:center;background:#fff;color:#161514;border-radius:12px;padding:9px 12px;margin-bottom:7px;font-size:19px}
.file i{font-style:normal;width:30px;height:36px;border:2px solid #161514;border-radius:4px;font-size:8px;display:flex;align-items:flex-end;justify-content:center}
.row{display:flex;justify-content:space-between;font-size:21px;margin-top:6px}.ok{color:#1f7a5a;font-weight:600}
.bar{height:14px;border-radius:6px;background:#1f7a5a;margin:3px 0 8px}
.lab{position:absolute;bottom:24px;left:0;right:0;text-align:center;font-size:18px;color:#6d665e}
.logo{display:inline-block;font-family:PF;font-weight:900;font-size:120px;letter-spacing:-.01em;color:#161514;padding:10px 20px;line-height:1}
.logo span{color:#1f7a5a}
`;
const frame = (cap, step, chat) => `<div class="f"><div class="cap">${cap}</div><div class="step">${step}</div><div class="phone"><div class="scr">${chat}</div></div><div class="lab">Illustration with a fictional household. Your report uses your own statements.</div></div>`;
const prompt = `<div class="me"><div class="file"><i>PDF</i>2 - Money X-Ray Prompt.pdf</div>Start</div>`;
const ask = `<div class="ai">I'll find where your money goes, from your own statements. Educational, not financial advice.<br><br><b>Upload the last 3 months</b> of statements for every checking, savings and credit card account.</div>`;
const files = `<div class="me">${['Checking · Aug','Checking · Sep','Checking · Oct','Visa · Aug','Visa · Sep'].map(n=>`<div class="file"><i>PDF</i>${n}</div>`).join('')}+ 10 more · done</div>`;
const check = `<div class="ai"><b>The $0.00 Check</b><br>${[['Everyday checking','$1,680.50'],['Joint checking','$5,699.99'],['Visa card','$6,477.85'],['Mastercard','$1,112.91'],['Amex card','$645.65']].map(([a,v])=>`<div class="row"><span>${a}</span><span class="ok">$0.00 ✓</span></div>`).join('')}<br>Rows add up to every statement.</div>`;
const report = `<div class="ai"><b>The answer</b><br>You take home <b>$7,290</b> a month and spend about <b>$5,407</b>. About <b>$1,400</b> is left over on paper, but it sits in checking while the Visa grows.<br><br>
<div class="row"><span>Housing</span><span>$1,385</span></div><div class="bar" style="width:100%"></div>
<div class="row"><span>Groceries</span><span>$586</span></div><div class="bar" style="width:42%"></div>
<div class="row"><span>Dining out</span><span>$326</span></div><div class="bar" style="width:24%"></div>
<b>9 subscriptions</b>, two pairs doing the same job.<br><b>$522</b> in fees and interest.</div>`;
const plan = `<div class="ai"><b>Your debt plan (avalanche)</b><br>1. Discover, 27.24%<br>2. Visa, 22.99%<br>3. Car loan, 6.9%<br><br>Debt-free in <b>23 months</b> instead of 62, about <b>$5,500</b> less interest.</div><div class="me">fill my kit</div>`;
const frames = [
  ['Attach the prompt', 'Step 1 · In ChatGPT or Claude, free plans work', prompt],
  ['It asks for <em>one thing</em>', 'Step 2 · No questionnaire', prompt + ask],
  ['Upload your <em>statements</em>', 'Step 3 · Three months, every account', ask + files],
  ['Every account <em>to $0.00</em>', 'It checks the math before it tells you anything', files.replace(/<div class="file">.*?<\/div>/g,'').replace('+ 10 more · done','15 statements · done') + check],
  ['Where it <em>all goes</em>', 'Step 4 · Read your report', report],
  ['Your plan, <em>filled in</em>', 'Then pick what you want next', plan],
];
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1080 } });
  const tmp = path.join(out, '.f.html');
  for (const [i, [c, s, chat]] of frames.entries()) {
    fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${CSS}</style>${frame(c, s, chat)}`);
    await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready);
    await p.locator('.f').screenshot({ path: path.join(out, `demo-${i + 1}.png`) });
  }
  fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${CSS}</style><div class="logo" id="l">Money X<span>-</span>Ray</div>`);
  await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready);
  await p.locator('#l').screenshot({ path: path.join(out, 'mx-logo.png'), omitBackground: true });
  fs.unlinkSync(tmp); await b.close(); console.log('frames', frames.length);
})();
