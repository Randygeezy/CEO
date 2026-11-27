# Money X-Ray Complete Guide: cold read before sale

Read: all 46 pages as images, with every embedded screenshot pulled out at full resolution and zoomed. Checked against Money_XRay_Prompt.txt, and all sample-report arithmetic recomputed.

## 1. Verdict

**Not ready to sell yet.** Screenshots on pages 9 and 13 still show the author's full name, home address, bank name and account numbers on statement thumbnails that were never blurred. The images are embedded at about 900 ppi, so anyone who zooms in or extracts them can read these details, and the guide says three times that this information was blacked out. The rest is close: the TOC is correct, the sample-report math checks out, and the appendix matches the prompt word for word. After the screenshots are fixed and about ten wording changes are made, it can ship.

---

## 2. Where the guide contradicts the prompt

| Page | Problem | Fix |
|---|---|---|
| 4, 6 | "each account balanced to $0.00" (p4) and "Every account is balance-checked to $0.00 before the report is written" (p6). The prompt lets an account be "not balance-checked" when a file has no balances, and the report goes ahead anyway. Page 9 of the guide says the same thing, and the p14 caption admits "one account was still pending". | p6 box: "Every account it can check is balance-checked to $0.00, and any it can't check is named in the report." p4: "each account balance-checked, or flagged if it couldn't be." |
| 12 | Step 1 says "attach the prompt PDF". The buyer files are this guide (PDF) and a .txt. Page 7 says "The PDF and text file", which is ambiguous. A buyer may attach the 46-page guide. The AI would then read the sample report, worksheets and "earlier version" text as instructions. | "Paste the prompt from the text file, or attach the .txt file itself. Don't attach this guide." If a separate prompt PDF really exists, name it exactly. |
| 31, 39 | Monthly checkup says: step 2, paste prompt + save block; step 3, type "monthly checkup". Under the prompt's Begin rule, a save block pasted alone makes the AI "say where you're picking up, and continue". If the buyer sends step 2 as its own message, the AI resumes the old session (menu, questions) and does not ask for last month's statements. | Merge steps 2 and 3: "In one message, paste the prompt, your save block and the words monthly checkup." Make the same change on p19 and in the p39 checklist. |
| 28–29 | Page 28 says the budget gives "the total against your income". The example on p29 has no total and no income line. It also leaves out Gas, Insurance and Debt payments (car loan, $419), which the prompt treats as fixed. Fees get the target "falling", which isn't a number. Page 17 says "A target for every category". | Add Gas, Insurance, Car loan and Everything else rows, a Total row (about $5,407 average) and an Income row ($7,290). Give Fees a dollar target. |
| 33–35 | The sample report doesn't follow the prompt's report format. Sections 3 and 4 give only monthly averages; the prompt and p14 say "each month". Section 7 lists fees with no "how to avoid each". Section 8 has no debt table (balance, APR, minimum, this month's interest) and is labelled "after menu options 2 and 3", although debt and net worth belong in the base report. | Add a 3-month column table to sections 3 and 4, one avoidance line per fee, and a short debt table. Label 8 and 9 "Debt and net worth (base report, with the debt plan and full net worth added from the menu)". |
| 16 | The example question leaves out "and APR". The prompt asks for "balance and APR", and p31 says "balance and APR". | "Upload it, or tell me the balance and APR." |
| 17 | "It tells you which days look off" (p31 has the same line). The prompt only says to look for duplicates or missing days. | "It looks for a missing month or repeated rows and tells you what it found." |
| 12, 14, 16, 19, 25, 28 | Most screenshots come from an earlier prompt that behaves differently. p12: "redact full account numbers", while p10 says covering is optional. p14: Dunkin shown as its own category, and a "where the money goes" chart with only 3 slices. p16: questions as a form with no guesses. p19: a save block with "Recovery plan: 30, 60 and 90 days" and no `SAVE |` line. A buyer comparing their run with these will think something is broken. | Re-record on the current prompt (fictional data is fine, and it removes the PII problem below). At minimum, replace p19 with a typed example of the current SAVE block for the fictional family. |

Checked and consistent: menu options 1–7 and their numbering (p17 vs Step 5), what each option asks for, the free-plan rows (p7, p18, p26 vs no-code mode), save block timing (after the report and before the questions, then again at the end), 3 vs 6 months, card CSV balances, the cash rules, and the appendix text (identical to the .txt).

---

## 3. Numbers

All of these recompute correctly: 7,290 − 5,407.16 − 300 − 175 = 1,407.84; category rows sum to $5,407.16 and each share rounds as shown; fees $522.59 ÷ 3 = $174.20; every subscription yearly figure; subscriptions average ≈ $142 (with the Netflix rise and $49 ÷ 3); 142 − 29.98 = $112; $29.98 → $359.76 a year and "$270 short of $300"; $7,503 − $2,007 ≈ "$5,500 less interest"; net worth 10,980 + 60,500 + 364,500 − 273,426 = $162,554; $15.99 → $191.88; and $312 × 0.9 ≈ $280.

Problems a careful reader will notice:

| Page | Problem | Fix |
|---|---|---|
| 33 | Joint Checking grew "$4,740 in three months", but total left over is only 3 × $1,407.84 = $4,223.52. Spare cash looks larger than all the spare money. It is possible, because the growing Visa balance adds cash, but the paragraph doesn't say so. | "…piles up in Joint Checking ($4,740 in three months, partly because purchases went on the Visa instead of being paid from checking)…" |
| 33 | "Fees and interest came to $522.59 in three months, and they pay for three video streaming services…" reads as if the fees pay for the streaming. | Split it: "Fees and interest came to $522.59 in three months. They also pay for three video streaming services plus Amazon Prime, and two music services that overlap." |
| 29, 35 | The $142 subscriptions average spreads the $49 Planet Fitness annual fee over 3 months ($16.33 a month), so the $112 target builds that fee in every month. The ongoing figure is about $97 + $4 a month for the annual fee ≈ $101. The $174 fees average also includes a once-a-year $95 card fee. | Add a note: "Averages include once-a-year fees, so the real monthly figure is lower," or set the target at about $101. |
| 35 | Fees list: Visa interest about $366 + $95 + $29 + $12 (or $24) leaves only $9–$21 for "out-of-network ATM fees" (plural) and a foreign transaction fee. This is tight but possible. | Give the ATM and FX amounts so the $522.59 adds up on the page. |
| 25 vs 35 | Page 25 shows snowball also at 23 months. Page 35 says only "debt-free in 23 months instead of 62", so a reader may think snowball is slower. | Fine as is. Optionally add "(snowball: also 23 months, $54 more interest)". |

---

## 4. Layout

| Page | Problem | Fix |
|---|---|---|
| 18–19 | The Chapter 10 heading sits in the bottom quarter of p18 with three lines under it. Page 19 is then about 55% empty: one short list and a small screenshot. | Start Chapter 10 on p19, or put the save-block example next to the text on p18 and drop the leftover page. |
| 41 | About 60% empty. "Then, for every file, on your own:" is stranded at the bottom of a box, and the list it introduces starts on p42. | Let the code boxes break across pages, or keep the lead-in line with its list. |
| 40, 43–46 | The appendix boxes don't break across pages, which leaves 25–45% blank on most of them. The monospace text is about 7 pt: readable in print, but not on a phone without zooming. | Let boxes flow and set the text at 8.5–9 pt. Add a note at the top of the appendix: "On a phone, copy from the .txt file instead." |
| 45 | The CSV header wraps in the middle (`…recurring` / `,verification…`). Copying it from the PDF adds a line break or space, and the header breaks. | Turn off wrapping for that line (smaller font or a horizontal scroll box), or add "copy from the .txt, not this page". |
| 12, 13 | The phone screenshots are only about 230 px wide on the page, so their text is about 5 pt and unreadable in print or on a phone. | Show one screenshot per step at full column width, or crop each to the part that matters. |
| 13, 15, 22, 26, 35 | 30–55% of each page is empty (p26 is the worst). | Acceptable for a chapter ending. If you want fewer pages, pull the next chapter up on p26 and p22. |
| 28–29 | The "Targets that stick" table starts with one row at the bottom of p28 and continues on p29. | Move it whole to p29. |
| 5, 11, 20, 30 | Full-black part divider pages use a lot of ink, and the guide tells readers to print it (p4). | Offer a printer-friendly version, or mention that these pages can be skipped when printing. |
| 2 | Contents page numbers are all correct (3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 18, 21, 23, 24, 27, 28, 31, 31, 32, 33, 36, 38, 39, 40). | None needed. |

---

## 5. Personal information in screenshots (fix all before sale)

The images are embedded at about 900 ppi, so a blur on the page doesn't help when a detail is sharp in the source image. Anyone can extract the images from the PDF. The details are described here, not copied.

| Page | What's visible | Fix |
|---|---|---|
| **9**, screenshot 5 ("Pick a folder and tap Save") | Bottom-right file thumbnail, not blurred. When zoomed you can read: **[bank] logo, the account holder's full name, street address with apartment number, city/state/ZIP, a [card product] account number line and statement dates.** The "Save as" thumbnail at bottom left shows the same statement header (logo plus name and address block). The top row has a thumbnail with a readable **[brokerage]** logo (a tax form). | Black out both thumbnails and the top strip completely, or replace the screenshot. |
| **9**, screenshot 4 ("Choose Save to Files") | The document thumbnail at top left shows a [bank] statement header with a name/address block. The filename is already covered. | Black out the thumbnail. |
| **13**, left ("Selecting statements on the phone") | About 9 statement thumbnails, not blurred: **[bank] logo, account names ("Adv Plus Banking", "Regular Savings"), the holder's full name and address block, account numbers and account summary balances.** One statement from a second bank has its logo covered, but the **bank's name is readable** in the customer-service address block, along with another name/address block and account number. The same view also shows thumbnails of unrelated personal documents, a "Money X-Ray" draft and a "Masked Minds: research & clipping" document. | Replace it with a re-shoot using renamed dummy files, or black out every thumbnail. Blurring the file names alone is not enough. |
| 8 | The bank is identifiable from the app itself: the assistant greeting "Hi, I'm ___ How can I help?" and the bottom bar (Accounts / Pay & Transfer / Deposit Checks / Invest). Statement closing dates are visible. The caption claims "the bank's name blurred". | Acceptable if you're comfortable naming the bank. Otherwise crop the greeting and the nav bar, and change the caption to "personal details and account numbers covered". |
| 21 | A dollar amount ("$350.…") shows behind the "…" button at top right, next to a partial "…bile" line. Page 12 says dollar amounts are blacked out. Merchant names (Comcast/Xfinity, YMCA, PlayStation, ChatGPT, Canva) are visible. They aren't IDs, but they are the author's own. | Cover the amount. Decide whether the merchants are fine to show. |
| 14 | "Dunkin, 48 transactions" from the author's real spending. Not an ID. | Your call. |
| 12 | Attached filename "Money XRay Prompt(3)". | Harmless. Rename it for polish. |
| 3 | The letter is signed with the author's full name. Combined with the leaks above, it ties the seller to a home address. | Keep the byline only if intended. Fixing the screenshots removes the link either way. |

The claims on p8 ("bank's name blurred"), p10 ("That's exactly how the screenshots in this guide were prepared") and p12 ("Personal details, bank names and dollar amounts are blacked out") are currently false. They become true once the fixes above are made.

---

## 6. Overpromises a buyer could hold against you

| Page | Claim | Fix |
|---|---|---|
| 10 | "Bank PDFs usually show only the last 4 digits… Covering your name and address is optional." The author's own statements (p13 thumbnails) print a full account number. Many US banks do this. The prompt's Step 1 repeats the claim. | "Many bank PDFs show your full account number, name and address. CSV files usually don't. If you upload PDFs, consider covering them." Change the prompt's Step 1 privacy line the same way. |
| 4, 6 | "each account balanced to $0.00" and "Every account is balance-checked…" (see section 2). | Same fix as section 2. |
| 6 | "so nothing big was missed or counted twice in that account". A balance check can't catch a transfer labelled as spending, or two errors that cancel each other out. | "so no transaction was left out or read twice in that account." |
| 18 | "Tested without code… balanced every account to $0.00 and matched every monthly total to the cent." This was one fictional household that the prompt was tuned against, but the box reads as a general result. | Add "on one fictional household" and keep the p32 caveat in view. |
| 13 | "On a paid plan this happens in one go." Paid plans can still hit message length limits. The prompt itself plans for "Reply go". | "usually in one go". |
| 7, 39 | "Both were tested". Page 32 shows the automated tests didn't name a model, and the real-statement run in the screenshots is ChatGPT only. | Say which models ran the automated tests. |
| 31 | "about 10 minutes" a month. On a free plan with several accounts it takes longer. | "about 10 minutes on a paid plan". |

Good as is: the "not financial advice" and "never promises savings" lines (p4, p32), balance transfers framed as research (p26), and "Targets are examples, not advice".

---

## 7. Confusing for a beginner on a phone

| Page | Issue | Fix |
|---|---|---|
| 7, 12, 40 | "The text file copies most cleanly on a phone", but there's no help opening a .txt on a phone. | Add 3 steps: open it in Files (iPhone) or Files/Drive (Android) → press and hold → Select All → Copy. Or tell them to attach the .txt with + instead. |
| 4, 9 | Bank CSV export ("Download/Export") is usually a website feature, often missing on mobile sites and apps. | "CSV export usually needs a computer. On a phone, the app's PDF statements are fine." |
| 7, 18 | The term "code tool" / "data analysis" tool is used, but there's no way for the buyer to find out whether their app has one. | One line: "Not sure? Ask your app: 'Can you run code on files I upload?'" |
| 17 | "Copy each block into a text file saved as .csv" is hard on a phone. | "On a phone: paste the block into a new Google Sheet and use Data → Split text to columns, or do this step on a computer." |
| 9 | "Name files clearly" without saying how. | "On iPhone: press and hold the file → Rename." |
| 31, 39 | The checkup message order trap (see section 2). | Send everything in one message. |
| 12–14 | The screenshots look different from what the buyer will see (an earlier version, dark mode, a Spanish keyboard). | Re-record on the current prompt, in light mode if possible. |
| 15 | "Fix the files and it reruns the check". It doesn't say how. | "Upload the missing or corrected file and type: recheck <account>." |

---

## Must-fix before sale (short list)
1. Re-redact or replace the screenshots on p9 (both) and p13 (left), and cover the dollar amount on p21.
2. Fix "every account balance-checked" (p4, p6) and "Bank PDFs usually show only the last 4 digits" (p10, and in the prompt's Step 1).
3. p12: tell buyers to paste or attach the .txt, not "the prompt PDF".
4. Monthly checkup: prompt, save block and "monthly checkup" go in one message (p19, p31, p39).
5. p33 sentence about fees paying for streaming, and the $4,740 explanation.
6. p18–19 and p41 page breaks, and the wrapped CSV header on p45.
