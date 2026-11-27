// Renders the customer's prompt PDF: a short how-to box, then the full prompt.
// Usage: node make_prompt_pdf.cjs "2 - Money X-Ray Prompt.txt" "2 - Money X-Ray Prompt.pdf"
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fonts = path.resolve(__dirname, '../guide/fonts');
(async () => {
  const prompt = fs.readFileSync(process.argv[2], 'utf8');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Money X-Ray Prompt</title><style>
  @font-face { font-family: PF; font-weight: 900; src: url(file://${fonts}/playfair-display-latin-900-normal.woff2); }
  @font-face { font-family: PF; font-weight: 700; font-style: italic; src: url(file://${fonts}/playfair-display-latin-700-italic.woff2); }
  @font-face { font-family: PP; font-weight: 400; src: url(file://${fonts}/poppins-latin-400-normal.woff2); }
  @font-face { font-family: PP; font-weight: 600; src: url(file://${fonts}/poppins-latin-600-normal.woff2); }
  @page { size: Letter; margin: 0.6in 0.65in; }
  body { font-family: PP, sans-serif; color: #161514; font-size: 10pt; line-height: 1.5; margin: 0; }
  h1 { font-family: PF; font-weight: 900; font-size: 30pt; margin: 0; letter-spacing: -.01em; }
  .sub { font-family: PF; font-style: italic; font-weight: 700; color: #8b735f; font-size: 15pt; margin: 0 0 14pt; }
  .how { border-left: 4px solid #1f7a5a; background: #e3efe8; padding: 12pt 16pt; margin-bottom: 16pt; border-radius: 0 6px 6px 0; }
  .how h2 { font-size: 11pt; letter-spacing: .14em; text-transform: uppercase; margin: 0 0 6pt; color: #1f7a5a; }
  .how ol { margin: 0; padding-left: 16pt; } .how li { margin: 4pt 0; }
  .label { font-size: 9pt; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; color: #1f7a5a; margin: 0 0 6pt; border-bottom: 1px solid #161514; padding-bottom: 3pt; }
  pre { white-space: pre-wrap; overflow-wrap: anywhere; font-family: "DejaVu Sans Mono", Menlo, monospace; font-size: 8.4pt; line-height: 1.42; margin: 0; }
  .note { color: #555; font-size: 8.6pt; margin-top: 10pt; }
  </style></head><body>
  <h1>Money X-Ray</h1><p class="sub">The prompt</p>
  <div class="how"><h2>How to use it</h2><ol>
  <li>Open a new chat in ChatGPT or Claude, on your phone or computer. Free plans work.</li>
  <li><b>Easiest:</b> attach this PDF with the + button and send it with the word "Start". Or copy the prompt below, from "You are Money X-Ray" to "send the Step 1 message now.", paste it and send.</li>
  <li>When it asks, upload the last 3 months of statements for every checking, savings and credit card account. For credit cards, the PDF statements work best.</li>
  <li>It does the audit on its own, then asks a few questions with its best guesses. Reply "ok" to keep them.</li>
  <li>Copy the save block it gives you into a note. If the chat runs out, open a new chat, attach this PDF again, paste the block and type "continue".</li>
  </ol></div>
  <div class="label">The prompt</div>
  <pre>${esc(prompt)}</pre>
  <p class="note">Educational self-analysis, not financial advice. Help: trypersimosupport@gmail.com. The Complete Guide explains every step.</p>
  </body></html>`;
  const b = await chromium.launch(); const p = await b.newPage();
  const tmp = path.join(path.dirname(path.resolve(process.argv[3])), '.prompt.html'); fs.writeFileSync(tmp, html);
  await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); fs.unlinkSync(tmp);
  await p.pdf({ path: process.argv[3], format: 'Letter', printBackground: true, tagged: true });
  await b.close();
})();
