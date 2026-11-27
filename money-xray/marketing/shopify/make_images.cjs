// Renders the Money X-Ray product images (carousel slides and page-section images) from HTML.
// All numbers are the fictional test family's (see the guide's sample report). Nothing from a real account.
// Usage: node make_images.cjs <dir with rendered guide/kit pages> <out dir>
const fs = require('fs'), path = require('path'); const { chromium } = require('playwright');
const src = process.argv[2], out = process.argv[3]; fs.mkdirSync(out, { recursive: true });
const fonts = path.resolve(__dirname, '../../guide/fonts');
const img = f => 'file://' + path.join(src, f);

const CSS = `
@font-face{font-family:PF;font-weight:900;src:url(file://${fonts}/playfair-display-latin-900-normal.woff2)}
@font-face{font-family:PF;font-weight:700;src:url(file://${fonts}/playfair-display-latin-700-normal.woff2)}
@font-face{font-family:PF;font-weight:700;font-style:italic;src:url(file://${fonts}/playfair-display-latin-700-italic.woff2)}
@font-face{font-family:PP;font-weight:400;src:url(file://${fonts}/poppins-latin-400-normal.woff2)}
@font-face{font-family:PP;font-weight:600;src:url(file://${fonts}/poppins-latin-600-normal.woff2)}
@font-face{font-family:PP;font-weight:700;src:url(file://${fonts}/poppins-latin-700-normal.woff2)}
*{box-sizing:border-box}html,body{margin:0}
body{font-family:PP;color:#161514}
.s{position:relative;width:1200px;height:1200px;overflow:hidden;background:radial-gradient(circle at 50% 35%,#f8f5f0 0,#efe9e1 75%)}
.s.wide{width:1600px;height:1200px}
h1{font-family:PF;font-weight:900;font-size:64px;line-height:1.05;text-align:center;margin:70px 60px 0;letter-spacing:-.01em}
h1 em{font-style:italic;font-weight:700;color:#8b735f}
.sub{text-align:center;font-size:24px;color:#4a453f;margin:14px 80px 0}
.card{background:#fff;border-radius:22px;box-shadow:0 14px 40px rgba(60,40,20,.13)}
.chip{position:absolute;display:flex;align-items:center;gap:14px;background:#fff;border-radius:16px;padding:16px 22px;box-shadow:0 10px 26px rgba(60,40,20,.12);font-weight:600;font-size:22px;line-height:1.2}
.ic{width:46px;height:46px;border-radius:50%;background:#161514;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;flex:none}
.pill{position:absolute;left:50%;transform:translateX(-50%);background:#161514;color:#fff;border-radius:40px;padding:16px 34px;font-weight:600;font-size:26px;white-space:nowrap}
.pill b{color:#7fd1a8}
.phone{position:absolute;width:330px;height:660px;border-radius:46px;background:#161514;padding:14px;box-shadow:0 24px 60px rgba(0,0,0,.28)}
.screen{width:100%;height:100%;border-radius:34px;background:#fff;overflow:hidden;padding:30px 22px;font-size:15px;line-height:1.4}
.screen h4{font-family:PF;font-size:22px;margin:0 0 8px}
.screen .tag{display:inline-block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8b735f;font-weight:600;margin-bottom:6px}
.bar{height:16px;border-radius:8px;background:#1f7a5a;margin:4px 0 10px}
.row{display:flex;justify-content:space-between;font-size:14px;margin-top:4px}
.ok{color:#1f7a5a;font-weight:700}
.book{position:absolute;box-shadow:0 26px 60px rgba(0,0,0,.25);border-radius:6px}
.note{position:absolute;left:0;right:0;text-align:center;font-size:20px;color:#5f5951}
table{border-collapse:collapse;width:100%}
`;
const wrap = (body, cls = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="s ${cls}">${body}</div></body></html>`;
const reportScreen = `<div class="screen"><span class="tag">Money X-Ray · Aug to Oct</span><h4>The answer</h4>
<p style="margin:0 0 12px">You take home <b>$7,290</b> a month and spend about <b>$5,407</b>. About <b>$1,400</b> is left over on paper, but it sits in checking while the Visa grows.</p>
<span class="tag">Where it goes</span>
<div class="row"><span>Housing</span><span>$1,385</span></div><div class="bar" style="width:100%"></div>
<div class="row"><span>Groceries</span><span>$586</span></div><div class="bar" style="width:42%"></div>
<div class="row"><span>Utilities</span><span>$477</span></div><div class="bar" style="width:34%"></div>
<div class="row"><span>Shopping</span><span>$476</span></div><div class="bar" style="width:34%"></div>
<div class="row"><span>Dining out</span><span>$326</span></div><div class="bar" style="width:24%"></div>
<span class="tag" style="margin-top:6px">$0.00 Check</span>
<div class="row"><span>5 accounts</span><span class="ok">✓ all $0.00</span></div></div>`;

const slides = {
  'mx-c1-offer': wrap(`
<h1 style="margin-top:62px">Money X-Ray</h1><div class="sub" style="font-family:PF;font-style:italic;font-weight:700;font-size:44px;color:#8b735f;margin-top:4px">The No-App Money Audit</div>
<img class="book" src="${img('g1-01.png')}" style="left:300px;top:270px;width:400px;transform:rotate(-4deg)">
<div class="phone" style="left:610px;top:330px;width:290px;height:580px">${reportScreen}</div>
<div class="chip" style="left:44px;top:330px"><span class="ic">✦</span>The prompt</div>
<div class="chip" style="left:44px;top:440px"><span class="ic">▤</span>46-page guide</div>
<div class="chip" style="left:44px;top:550px"><span class="ic">✓</span>Action Kit</div>
<div class="chip" style="right:44px;top:360px;flex-direction:column;gap:8px;text-align:center;width:180px"><span class="ic">$</span>Works on free plans</div>
<div class="chip" style="right:44px;top:560px;flex-direction:column;gap:8px;text-align:center;width:180px"><span class="ic">✉</span>Email support</div>
<div class="pill" style="bottom:70px">ChatGPT or Claude · <b>$27</b> · Instant download</div>`),

  'mx-c2-before-after': wrap(`
<div style="position:absolute;inset:0;width:50%;background:#efe9e1"></div>
<div style="position:absolute;left:50%;top:0;bottom:0;right:0;background:#1f7a5a"></div>
<div class="pill" style="top:50px;font-size:22px">15 STATEMENTS → ONE CLEAR REPORT</div>
<div style="position:absolute;left:70px;top:230px;width:440px">
 ${[0,1,2,3].map(i=>`<div class="card" style="position:absolute;left:${i*18}px;top:${i*26}px;width:380px;height:460px;padding:28px;transform:rotate(${(i-2)*3}deg)">
   <div style="font-size:14px;letter-spacing:.12em;color:#8b735f;font-weight:600">STATEMENT</div>
   ${Array.from({length:11}).map((_,k)=>`<div style="display:flex;justify-content:space-between;margin-top:14px"><span style="display:block;height:10px;width:${120+((k*37+i*11)%90)}px;background:#e5ddd2;border-radius:5px"></span><span style="display:block;height:10px;width:60px;background:#e5ddd2;border-radius:5px"></span></div>`).join('')}
 </div>`).join('')}
 <div style="position:absolute;left:30px;top:600px;font-family:PF;font-weight:900;font-size:40px;line-height:1.1;width:420px">"Where does it all go?"</div>
</div>
<div class="phone" style="left:735px;top:200px;width:340px;height:680px">${reportScreen}</div>
<div class="pill" style="left:25%;bottom:60px;background:#fff;color:#161514;font-size:20px">BEFORE</div>
<div class="pill" style="left:75%;bottom:60px;background:#fff;color:#1f7a5a;font-size:20px">AFTER</div>`),

  'mx-c3-benefits': wrap(`
<h1>What you'll see <em>in one report</em></h1>
<div class="phone" style="left:435px;top:250px">${reportScreen}</div>
${[['$','Where every dollar goes','left:60px;top:300px'],['✂','Subscriptions and fees you forgot','left:60px;top:620px'],['◷','Your debt-free date','right:60px;top:300px'],['▲','Your net worth','right:60px;top:620px']].map(([i,t,pos])=>`
<div style="position:absolute;${pos};width:300px;text-align:center"><div class="ic" style="width:96px;height:96px;font-size:40px;margin:0 auto 16px;background:#fff;color:#161514;border:2px solid #161514">${i}</div><div style="font-weight:600;font-size:26px;line-height:1.25">${t}</div></div>`).join('')}
<div class="note" style="bottom:60px">Every account checked to $0.00 before the report is written.</div>`),

  'mx-c4-how': wrap(`
<h1>Paste. Upload. <em>Read.</em></h1>
<div class="sub">No app, no bank login, no monthly fee.</div>
<div class="card" style="position:absolute;left:50px;top:380px;width:330px;height:480px;padding:26px;font-family:monospace;font-size:17px;line-height:1.5">
 <div style="font-family:PP;font-size:14px;letter-spacing:.12em;color:#8b735f;font-weight:600;margin-bottom:12px">THE PROMPT</div>
 You are <b>Money X-Ray</b>, a personal financial investigator. You help one person find out where their money actually goes, using statements they download from their own bank and card accounts…</div>
<div style="position:absolute;left:392px;top:590px;font-size:44px;color:#1f7a5a">→</div>
<div class="card" style="position:absolute;left:440px;top:380px;width:320px;height:480px;padding:26px">
 <div style="font-size:14px;letter-spacing:.12em;color:#8b735f;font-weight:600;margin-bottom:16px">YOUR STATEMENTS</div>
 ${['Checking · Aug','Checking · Sep','Checking · Oct','Visa · Aug','Visa · Sep','Visa · Oct','Mastercard · Oct'].map(n=>`<div style="display:flex;gap:12px;align-items:center;margin-bottom:14px;font-size:19px"><span style="width:30px;height:38px;border:2px solid #161514;border-radius:4px;flex:none;font-size:9px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:2px">PDF</span>${n}</div>`).join('')}</div>
<div style="position:absolute;left:772px;top:590px;font-size:44px;color:#1f7a5a">→</div>
<div class="phone" style="left:830px;top:340px;width:300px;height:580px">${reportScreen}</div>
${[['1 · Paste the prompt',215],['2 · Upload statements',600],['3 · Read your report',980]].map(([t,x])=>`<div style="position:absolute;left:${x-160}px;width:320px;top:950px;text-align:center;font-weight:600;font-size:24px">${t}</div>`).join('')}
<div class="note" style="bottom:70px">Works in ChatGPT or Claude. Free plans work; paid plans are faster.</div>`),

  'mx-c5-check': wrap(`
<h1>Every account <em>checked to $0.00</em></h1>
<div class="sub">It adds up the rows it read and shows you both numbers, so you can see the math holds.</div>
<div class="card" style="position:absolute;left:80px;right:80px;top:380px;padding:40px 44px">
<table style="font-size:25px">
<tr style="font-size:15px;letter-spacing:.1em;color:#8b735f;text-align:left"><th style="padding-bottom:14px">ACCOUNT</th><th>ROWS</th><th>ROWS ADD UP TO</th><th>STATEMENT SAYS</th><th style="text-align:right">CHECK</th></tr>
${[['Everyday checking',53,'$1,680.50'],['Joint checking',45,'$5,699.99'],['Visa card',55,'$6,477.85'],['Mastercard',30,'$1,112.91'],['Amex card',39,'$645.65']].map(([a,r,v])=>`<tr style="border-top:1px solid #e5ddd2"><td style="padding:26px 0">${a}</td><td>${r}</td><td>${v}</td><td>${v}</td><td style="text-align:right" class="ok">$0.00 ✓</td></tr>`).join('')}
</table>
<div style="margin-top:22px;font-size:19px;color:#4a453f">Also caught: 3 repeated download rows, a possible double charge, and a card nobody uploaded.</div></div>
<div class="note" style="bottom:70px">From testing on a fictional household built from US spending averages.</div>`),

  'mx-c6-compare': wrap(`
<h1>The usual way vs <em>Money X-Ray</em></h1>
<div class="card" style="position:absolute;left:70px;right:70px;top:300px;padding:40px 44px">
<table style="font-size:22px">
<tr style="font-size:15px;letter-spacing:.1em;text-align:left"><th style="padding-bottom:16px">TO SEE WHERE YOUR MONEY GOES</th><th>BUDGETING APP</th><th>MONEY PLANNER</th><th style="color:#1f7a5a">MONEY X-RAY</th></tr>
${[['Bank login','Usually','Paperwork','✓ Not needed'],['What it costs','Every month','Per session','✓ $27 once'],['Checks the math to $0.00','Rarely','Varies','✓ Every account'],['Finds forgotten subscriptions','Some','Sometimes','✓ On purpose'],['Debt payoff order','Some','Yes','✓ Two ways'],['Works from your own statements','No','Yes','✓ Yes']].map(([a,b,c,d])=>`<tr style="border-top:1px solid #e5ddd2"><td style="padding:27px 0;font-weight:600">${a}</td><td style="font-family:monospace;font-size:20px;color:#5f5951">${b}</td><td style="font-family:monospace;font-size:20px;color:#5f5951">${c}</td><td style="font-weight:700">${d}</td></tr>`).join('')}
</table></div>
<div class="note" style="bottom:70px">A general comparison of methods, not of any named product. Plus your AI plan (free plans work).</div>`),

  'mx-c7-guide': wrap(`
<h1>Look inside <em>the guide</em></h1>
<div class="sub">46 pages, step by step, with a full sample report.</div>
<img class="book" src="${img('g6-06.png')}" style="left:70px;top:330px;width:380px;transform:rotate(-5deg)">
<img class="book" src="${img('g27-27.png')}" style="left:760px;top:330px;width:380px;transform:rotate(5deg)">
<img class="book" src="${img('g33-33.png')}" style="left:400px;top:290px;width:420px">
<div class="note" style="bottom:60px">Getting statements · privacy · reading the report · subscriptions · debt · net worth · budget</div>`),

  'mx-c8-kit': wrap(`
<h1>Your plan, <em>filled in by your AI</em></h1>
<div class="sub">Upload the Action Kit and type "fill my kit".</div>
<img class="book" src="${img('kit-05.png')}" style="left:70px;top:330px;width:370px;transform:rotate(-5deg)">
<img class="book" src="${img('kit-12.png')}" style="left:770px;top:330px;width:370px;transform:rotate(5deg)">
<img class="book" src="${img('kit-08.png')}" style="left:405px;top:290px;width:400px">
<div class="note" style="bottom:60px">Subscriptions · action plan · debt plan · savings plan · monthly checkup log</div>`),

  'mx-c9-everything': wrap(`
<h1>Everything in <em>one download</em></h1>
<img class="book" src="${img('g1-01.png')}" style="left:90px;top:290px;width:360px;transform:rotate(-3deg)">
${[['▤','The 46-page Complete Guide'],['✦','The Money X-Ray prompt, ready to paste'],['✓','The Action Kit, a fillable planner'],['✉','Email support'],['↺','72-hour refund if it doesn\'t work for you']].map(([i,t],k)=>`<div class="chip" style="left:540px;top:${290+k*104}px;width:600px"><span class="ic">${i}</span>${t}</div>`).join('')}
<div style="position:absolute;left:90px;right:90px;bottom:70px;background:#161514;color:#fff;border-radius:18px;padding:24px 30px;font-size:22px;line-height:1.4"><b>You need:</b> ChatGPT or Claude (free plans work) and your last 3 months of bank and card statements.</div>`),
};

const sections = {
  'mx-s1-problem': wrap(`
<h1 style="font-size:62px;margin-top:150px">Apps charge monthly.<br><em>Audits cost hundreds.</em></h1>
${[['Budgeting app','$5–15','every month, plus your bank login','left:90px'],['Money planner','$150+','per session, plus paperwork','left:450px'],['Money X-Ray','$27','once, from statements you download','left:810px']].map(([t,p,s,pos],k)=>`
<div class="card" style="position:absolute;${pos};top:470px;width:300px;height:460px;padding:34px;text-align:center;${k==2?'outline:4px solid #1f7a5a':''}">
<div style="font-weight:600;font-size:24px">${t}</div><div style="font-family:PF;font-weight:900;font-size:80px;margin:40px 0 14px;color:${k==2?'#1f7a5a':'#161514'}">${p}</div><div style="font-size:21px;color:#4a453f">${s}</div></div>`).join('')}
<div class="note" style="bottom:110px">General prices for comparison, not any named product.</div>`),
  'mx-s2-report': wrap(`
<img class="book" src="${img('g33-33.png')}" style="left:110px;top:120px;width:640px;transform:rotate(-3deg)">
<div class="phone" style="left:760px;top:330px;width:330px;height:660px">${reportScreen}</div>`),
  'mx-s3-tested': wrap(`
<h1>Tested, <em>blind</em></h1>
<div class="sub">AI agents ran the prompt on a fictional household's statements without seeing the answers.</div>
${[['219 / 219','transactions sorted correctly'],['$0.00','balance check on every account'],['14','planted problems caught'],['To the cent','debt plan and net worth']].map(([b,t],k)=>`
<div class="card" style="position:absolute;left:${k%2?620:110}px;top:${360+Math.floor(k/2)*300}px;width:470px;height:250px;padding:34px;text-align:center"><div style="font-family:PF;font-weight:900;font-size:68px;color:#1f7a5a">${b}</div><div style="font-size:24px;margin-top:10px">${t}</div></div>`).join('')}
<div class="note" style="bottom:50px">Free-plan and paid-plan runs, CSV and PDF statements. Real households are messier: a good sign, not a guarantee.</div>`),
  'mx-look-guide': wrap(`
<img class="book" src="${img('g23-23.png')}" style="left:70px;top:150px;width:470px;transform:rotate(-4deg)">
<img class="book" src="${img('g6-06.png')}" style="left:640px;top:170px;width:470px;transform:rotate(4deg)">
<img class="book" src="${img('g1-01.png')}" style="left:340px;top:330px;width:520px">`),
  'mx-sample': wrap(`
<img class="book" src="${img('g34-34.png')}" style="left:90px;top:110px;width:560px;transform:rotate(-3deg)">
<img class="book" src="${img('g33-33.png')}" style="left:560px;top:180px;width:560px;transform:rotate(3deg)">`),
  'mx-kit': wrap(`
<img class="book" src="${img('kit-03.png')}" style="left:70px;top:170px;width:440px;transform:rotate(-5deg)">
<img class="book" src="${img('kit-12.png')}" style="left:690px;top:170px;width:440px;transform:rotate(5deg)">
<img class="book" src="${img('kit-08.png')}" style="left:350px;top:120px;width:500px">`),
};

(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 1200 } });
  for (const [name, html] of Object.entries({ ...slides, ...sections })) {
    const f = path.join(out, '.tmp.html'); fs.writeFileSync(f, html);
    await p.goto('file://' + f); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(150);
    await p.locator('.s').screenshot({ path: path.join(out, name + '.png') });
    fs.unlinkSync(f); console.log(name);
  }
  await b.close();
})();
