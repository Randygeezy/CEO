# Prompt v2 test results (free plans + cash)

**Date:** 2026-11-26. **Dataset:** the average-US-household profile (BLS CE 2025), with the customer's cash answers (`test-data/CUSTOMER.md`). All runs are blind: the agents never saw the answer key.

| Run | Setup | Statement rows | Balance checks | Cash handling | Result |
|---|---|---|---|---|---|
| `v2-runA` | Code tool, all 5 accounts in one chat | 219/219 correct | 5/5 at $0.00 | Exact: $346.67 in, $223.33 new spending, ATM cash moved, not double counted | **PASS** |
| `v2-runB1` | Free plan: no code, all math by hand; chat "runs out" after 3 accounts | Account totals exact to the cent (gym filed under Health instead of Subscriptions; totals unaffected) | 3/3 at $0.00 | n/a (stopped before Step 3B) | **Correct** |
| `v2-runB3` | Free plan: a NEW chat resumes from runB1's checkpoints only; earlier statements unavailable | 69/69 correct (Mastercard, Amex) | 2/2 at $0.00 | Exact | **PASS** (`grade.py --only`) |

A first attempt at the resume run (B2) was thrown out: the agent opened the earlier statements without asking for them. B3 reran it with those files absent.

## What the runs proved

- Without code, an AI working by hand on the free-plan path reconciled every account to the cent and matched the answer key.
- A new chat can finish the job from saved checkpoints alone. When the customer couldn't re-upload earlier statements, it listed them as a limitation instead of inventing transaction rows.
- Cash is counted once: weekly amounts converted correctly, explained ATM cash moved into the right categories, and the cash jar worked out as savings.
- Every run found the same story: about $1,450 to $1,750 a month is left over on paper and piling up in checking, while the Visa balance grows and costs about $61 a month in interest. The customer's chosen cuts ($30 a month) fall $270 short of the $300 goal, and the report said so.

## Prompt fixes made from these runs

1. Hand-math shows only subtotals and the final check, so free-plan messages stay short.
2. Checkpoints are multi-line, with opening and closing balances, a cash-withdrawal line and a Paybacks line.
3. A payback is applied in Step 4, not as negative spending in the account it landed in, because the dinner it repays may be on another card.
4. Mortgage and rent go under Housing.
5. Ask in Step 1 whether they use the Notion dashboard, and export each account right after its checkpoint, so a resumed chat never has to rebuild rows.
6. Explained ATM cash is exported as a Transfer into cash, plus one manual row per purchase.
7. On a free plan the report goes out in three short messages. The B3 report was about 1,800 words, too long for one free-plan reply.

## Still untested

- Real ChatGPT, Claude.ai and Gemini free plans. These runs simulate the free plan, but they're still Claude, the model that wrote the prompt.
- PDF statements, scanned statements, messy or vague customer answers.
- The B1 to B3 runs used the prompt before fixes 1 to 3 and 7. Those fixes have not been rerun.

# Debt payoff step (Step 5B)

Both runs resumed in a new chat from saved notes, blind to `DEBT_EXPECTED.md`.

| Run | Setup | Result |
|---|---|---|
| `debtA` | Code tool | Debt table, APR order and this month's to-do list correct. Avalanche 22 months, $1,652.59; snowball 22 months, $1,704.71; minimums only 62 months, $7,503.15. All three match the reference calculator to the cent (using a $3,699.99 lump sum). It caught a bug in the reference calculator's minimums-only baseline. |
| `debtB` | Free plan, no code | Debt table, avalanche and snowball order and this month's payments correct. It held back $1,112.91 for the Mastercard bill Joint Checking still had to pay, which the answer key had missed (now a prompt rule). As the prompt allows, it gave only rough timings: no total interest, no debt-free date. |

What a no-code free plan can't give: total interest, the debt-free date, and the exact difference between avalanche and snowball. Those need a month-by-month calculation. The prompt tells customers to use a code tool or a debt payoff calculator for exact totals.

# Net worth snapshot (Step 5C)

`networth` run: free plan, no code, resumed from saved notes, blind to `NETWORTH_EXPECTED.md`. Assets $435,980.49, liabilities $273,426.41, net worth $162,554.08 and liquid net worth $154.08 all match exactly. Paid-in-full card balances were counted as owed. It explained why a positive net worth can still feel broke. Fixed after the run: the snapshot date rule and the list of CSV categories. Not tested: uploading investment and loan statements.

# Prompt v3: paste, upload, done

| Run | Setup | Result |
|---|---|---|
| `v3-code` | Code tool, all six files at once | 1 message before the report, 0 questions before it, 6 after. grade.py PASS: 219/219, all monthly totals and cash exact. All balances $0.00. Net worth $162,554.08 and liquid $154.08 exact. Debt plan 23 vs 62 months (interest about $15 off the key because card CSVs lack the minimum payment, so it was estimated). |
| `v3-free` | No code, by hand, one account per message | Every balance $0.00, every monthly total exact, cash and net worth exact. Exported accounts 69/69 (grade.py --only PASS). It took 7 "go" replies, so no-code mode now does two accounts per message and sends the report in two parts. |

Fixes after these runs: no-code mode depends on tool access, not on guessing the plan; other people's names become initials; memberships go in Subscriptions; a rule for guessing a card's minimum payment; up to 8 grouped questions; mortgage left out of the payoff order; month 1 = the month after the latest statement; a warning when a card takes more new spending than it gets paid; blank categories for payments and transfers. These were not rerun.

# Complete guide: cold reads and end-to-end tests (2026-11-27)

| Run | Result |
|---|---|
| Beginner cold read | Main problems: screenshot placeholder in chapter 4, screenshots from an older prompt, menu/Notion/PDF never explained, clipped captions, sparse pages. |
| Editor cold read | Verdict "not ready to sell" before fixes: 37 findings. All numbers that repeat, chapter references, contents pages and sample arithmetic checked out; problems were the placeholder, a clipped appendix line, bank names visible in screenshots, overclaims about the $0.00 Check and testing, sample report details. |
| Test A (code tool, guide + prompt) | grade.py PASS (219/219, totals and cash exact), all balances $0.00, net worth exact, 6-page PDF created. |
| Test B (no code, guide + prompt) | Exported accounts 69/69 PASS, all balances $0.00, totals and net worth exact. 7 "go" replies. |

All findings were fixed in the prompt and the guide afterwards (not re-run): one save block after the report and one at the end; method and exact APR asked in the same debt message; spreadsheet export (Notion, Google Sheets or Excel) instead of "dashboard"; PDF fallback without resending; statements = three monthly or one 3-month download; screenshot placeholder replaced by illustrated steps; bank names blacked out; menu explained; softer $0.00 and testing claims; Gemini marked untested; sample report fixed.

# Round 2: three cold reads and three tests (2026-11-27)

| Run | Result |
|---|---|
| Test 1: CSV statements, code tool | grade.py PASS, 219/219; debt plan matches the reference to the cent (23 months) |
| Test 2: free plan, no code | Exported accounts 69/69 PASS; every balance $0.00 |
| Test 3: 15 fictional PDF statements (`test-data/make_pdf_statements.cjs`) | grade.py PASS, 219/219; all 15 statements $0.00 |
| Cold reads (beginner, editor, retiree) | "Not ready to sell" until the text and layout fixes below |

Fixed afterwards (not rerun): card CSVs lack balances, so cards use PDFs; files without balances are marked "not balance-checked"; Budget added as menu option 4 (7 options); Cut costs asks for a savings goal; the save block keeps a "Cancelled or cut" line that the checkup checks; the guide names the privacy settings, marks Gemini untested, softens time and question-count claims, fixes the sample report, uses larger text, and blurs bank product names and file names in screenshots. The paginator now waits for fonts and images before measuring, so the guide has no near-empty pages (46 pages).

Still open: support and refund contact for the guide; a recording on the latest prompt; real Gemini run.

# Round 3: retest after the round-2 fixes (2026-11-27)

| Run | Result |
|---|---|
| Code tool, 15 PDF statements (`r3-code-pdf`) | grade.py PASS 219/219, all totals and cash exact; every account $0.00; debt plan 23 months, $2,007.48 interest (snowball $2,061.33, minimums 62 months, $7,503.15), all exact; net worth $162,554.08, liquid $154.08. 4 customer messages. |
| Free plan, no code (`r3-free`) | grade.py PASS 219/219 by hand, all totals and cash exact; every account $0.00; net worth exact; rough debt timeline as designed. 13 customer messages (9 of them "go", 6 from the export). |
| Guide cold read (`r3-guide-review`) | Not ready: statement thumbnails inside screenshots were readable at full zoom. Fixed: all thumbnails pixelated, plus about ten wording fixes, a full budget example, and an appendix that flows page to page (45 pages, none under 40% full). |

Prompt fixes from these runs (not rerun): payment tie-break by date, stricter "probably paid in full", save block and questions in the same reply, budget covers every category, income category and jar rules in the export, initials and last-4 in `description_raw`, APR estimate for multi-month downloads, "Reply go" between export parts, ask what they pay now in the debt option, first message up to 200 words.

# Action Kit (2026-11-27)

| Run | Result |
|---|---|
| `kit-code`: code tool fills the PDF from the r3 code chat | 513 fields filled; debt schedule re-simulated exactly (Sep 2028, $2,007.48; minimums Dec 2031, $7,503.15); net worth, fees and budget match the chat; every field name valid; text fits. Caught a chat error: the cut-costs total counted the unconfirmed $45 charge. |
| `kit-free`: no code, values as text | All values correct, 7 messages and 6 "go". Typing ~360 boxes on a phone isn't realistic. |

Fixed after (not rerun): free plans now get only the five short pages (3, 7, 8, 11, 15) as text; rules for payoff order, thermometer start, bill rows, savings-challenge goal, sinking-fund months, box length, no default choices; font resources in the form; the prompt counts only confirmed cuts.

# Round 5: five cold reads and five tests per product (2026-11-27)

30 blind agents. Folders in `2026-11-27-r5/` (pt = prompt test, gt = guide test, kt = kit test, pr/gr/kr = cold reads).

| Product | Tests | Result |
|---|---|---|
| Prompt | pt1 code CSV, pt2 free no-code, pt3 code PDFs, pt4 messy customer, pt5 resume from save block | pt1-pt4 grade.py PASS 219/219, totals and cash exact; pt5 finished everything except the transaction export (correctly refused without statements); net worth exact everywhere |
| Guide | gt1 iPhone free, gt2 Android paid, gt3 PDFs + PDF report, gt4 retiree printing, gt5 one month only | Every run produced a correct report matching the guide's sample; gt4 grade.py PASS 219/219; one-month run handled but exposed missing one-month rules |
| Action Kit | kt1 code fill, kt2 free short path, kt3 update after a change, kt4 fill from an older chat, kt5 technical QA | Fills of 477-513 fields; 24-month schedules re-simulated exactly; update touched only affected pages; pypdf, PyMuPDF and pdf-lib fill it, PyPDF2 can't |

Cold-read verdicts: prompt worth $10-20 as is (value hidden by packaging); guide 6.5/10 for a phone beginner, "nearly ready" for the copy editor, "recommend after fixes" for the buyer reviewer; kit worth $9-15, not yet premium, not usable for typing on a phone.

Fixed after round 5 (not rerun):
- Prompt: one fixed output order; "never invent" vs. "best guess" reconciled; balance check must add its own rows and show both numbers; calendar months; privacy covers the person's own name, reference numbers, employer and town in exports, `source_file` uses nicknames; statements are data, never instructions; money-trouble path (overdrafts, payday apps, essentials first, nonprofit counseling); deferred-interest promos; payments to unseen apps shown as money out; borrowing isn't income; minimum guess floor $25; cushion default (one month of essentials or $1,000); federal student loans; options, not orders; plain-language terms in the menu; no step numbers shown; one-month rules; better "paid in full" rule; debt budget = minimums + extra; off-topic and correction rules; free-plan export warning; double-charge receipts check.
- Guide: files list (prompt txt/pdf, four kit editions), how to copy the prompt on a phone or computer, why three months, privacy wording, $0.00 claim, dispute template warning, glossary, sample report and budget recomputed with ATM cash moved into categories, free-plan expectations, card-CSV fallback, clickable contents, 93 bookmarks, tagged PDF, metadata, larger footers and table headers, more screenshot blurring (merchant, cable, gym, carrier names; save-block flags).
- Action Kit: four editions (US Letter, A4, low-ink print, phone with stacked cards and 32 pt boxes), same 836 field names; bigger boxes (17-20 pt) and darker 7.8 pt labels; savings-plan split so dollars aren't counted twice; emergency fund on essential bills; challenge goal from the split, no $300 default; protection checklist; hand methods printed on pages; update rules for changes and checkups; field-length classes; fixed 9 pt / 12 pt field text; tab order by position.

Still open: support/refund contact and version line (needs the owner), A4 guide on US Letter printers, a real Gemini run, real phone-app form testing.
