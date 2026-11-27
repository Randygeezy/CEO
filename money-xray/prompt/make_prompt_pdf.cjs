const fs = require('fs');
const { chromium } = require('playwright');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
(async () => {
  const prompt = fs.readFileSync(process.argv[2], 'utf8');
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { size: Letter; margin: 0.6in; }
  body { font-family: Helvetica, Arial, sans-serif; color: #1a1a1a; font-size: 10.5pt; line-height: 1.45; }
  h1 { font-size: 22pt; margin: 0 0 2pt; } .sub { color:#555; margin:0 0 14pt; }
  .how { border: 1.5px solid #1f6f5c; border-radius: 8px; padding: 10pt 14pt; background:#f2f8f6; margin-bottom: 14pt; }
  .how h2 { font-size: 12.5pt; margin: 0 0 6pt; color:#1f6f5c; } .how ol { margin: 0; padding-left: 18pt; } .how li { margin: 3pt 0; }
  .label { font-weight: bold; font-size: 11pt; margin: 10pt 0 6pt; color:#1f6f5c; }
  pre { white-space: pre-wrap; word-wrap: break-word; font-family: "DejaVu Sans Mono", Menlo, monospace; font-size: 8.6pt; line-height: 1.4; margin: 0; }
  .note { color:#555; font-size: 9pt; margin-top: 8pt; }
  </style></head><body>
  <h1>Money X-Ray</h1><p class="sub">Find out where your money really goes. Educational self-analysis, not financial advice.</p>
  <div class="how"><h2>How to use it</h2><ol>
  <li>Open a new chat in ChatGPT, Claude or Gemini. Free plans work.</li>
  <li>Copy the whole prompt below, from "You are Money X-Ray" to "send the Step 1 message now." Paste it and send.</li>
  <li>Upload the last 3 months of statements for every checking, savings and credit card account: 3 statements per account, one for each month. CSV files from your bank's website work best and usually have no account number, name or address.</li>
  <li>That's it. It does the audit, then asks a few short questions with its best guesses. Reply "ok" to keep them.</li>
  <li>Save the SAVE block it gives you. If the chat runs out, open a new chat, paste this prompt and the block, and type "continue".</li>
  </ol></div>
  <div class="label">The prompt (copy everything below)</div>
  <pre>${esc(prompt)}</pre>
  <p class="note">If copying from this PDF breaks the text on your phone, use the plain-text file "2 - Money X-Ray Prompt.txt" instead.</p>
  </body></html>`;
  const b = await chromium.launch(); const p = await b.newPage();
  await p.setContent(html, { waitUntil: 'load' });
  await p.pdf({ path: process.argv[3], format: 'Letter', printBackground: true });
  await b.close();
})();
