# Money X-Ray prompt: cold-read review

Scope: `Money_XRay_Prompt.txt` (162 lines, about 4,300 words), judged for how reliably ChatGPT, Claude and Gemini, on free and paid plans, would follow it. Line numbers refer to that file.

## Verdict

The prompt is strong on substance. The accounting rules are correct, privacy is handled well and most tool-dependent steps have a fallback. Reliability problems come from three places. The order of turn-by-turn outputs is described four different ways. Some rules are worded as absolutes and then contradicted further down ("never guess", "ask once"). And the steps most likely to be fabricated (the balance check without code, the definition of "month") are the least pinned down. A strong paid model with code will mostly get it right. A free model without code will skip the save block, mis-order the question list, report a $0.00 balance check it did not actually compute, and produce month totals that disagree with another model's totals on the same data.

Findings are ranked by how likely they are to cause a wrong or missing result.

---

## 1. Balance check can be faked in no-code mode (high)

> L10: "If you don't, add in small groups and check each total by adding it a second time in a different order, showing only subtotals and the final check. The balance check is your proof."

> L47: "Use the statement's summary or balance column. The difference should be $0.00."

**Problem.** Without code, the cheapest way for a model to get "$0.00" is to read opening, total debits, total credits and closing off the PDF summary and subtract. The result is always $0.00 and proves nothing about the rows it labeled. L47 actually invites this ("Use the statement's summary"). "Showing only subtotals" also hides the work, so a reader cannot catch it. This is the prompt's main claim of trustworthiness, so it is the most damaging failure.

**Rewrite (L47, first sentences):**
> Check the balance from the rows you read, not from the statement's totals. Add up the money in and money out from your own rows, then compare: opening + your money in - your money out should equal the statement's closing balance. Report both numbers: "rows give $4,212.40 out; statement says $4,212.40 out; difference $0.00." If you only copied the statement's totals, the account is "not balance-checked".

## 2. "Never guess" contradicts "use a best guess" (high)

> L9: "**Never guess and never invent.**"
> L12: "Use a best guess for anything unclear, label it "my guess""
> L49, L66, L73-76: "my guess" used six times.

**Problem.** The first rule, in bold, forbids what Rule 4 requires. Literal models (Gemini, and smaller free models in particular) resolve the conflict by refusing to guess and asking in the middle, which breaks L3 and L12. Others guess numbers, which breaks L9.

**Rewrite (L9):**
> 1. **Never invent a number.** Every amount comes from the transactions or from what the person tells you. You may guess a *label* (a category, whether a payment is a reimbursement, an APR or minimum when the statement leaves it out, using the formulas below). Always mark it "my guess". If something is missing or unreadable, say exactly what, and continue with what you have.

## 3. Output order is described four ways, and the save block falls outside "Steps 2 to 4" (high)

> L3: "Deliver everything in Steps 2 to 4 on your own, in order"
> L57: "The save block and the question list (Step 4) come right after the report, in the same reply when they fit; the menu (Step 5) comes after their answers."
> L71: "Right after the report, in one message, ask only what changes the numbers"
> L134: "Print a save block twice: once right after the report (before the question list), and an updated one at the very end"

**Problem.** L3 lists the auto-delivered steps as 2 to 4, and the save block is Step 7, the second-to-last section of the prompt. L71 says the questions come "right after the report", but L134 puts the save block between them. L57's "(Step 4)" reads as if it labels both items. Several turns later, when the save block is due, the model will not have Step 7 in mind, so it is likely to be skipped. That is especially true on free plans, where the report is split across "go" replies. It is also unclear whether the update after L78 and the menu (Step 5) go in the same message.

**Rewrite.** Add a fixed sequence near the top, just after L5, and point every step back to it:
> **The order of the whole session** (never skip or reorder):
> 1. Step 1 message. Wait for files.
> 2. Work through the files (Step 2). Show nothing in this step unless you're in no-code mode.
> 3. The report (Step 3).
> 4. Save block (Step 7 format).
> 5. Question list (Step 4).
> 6. After their answers: the changes to the report, then the menu (Step 5), in the same message.
> 7. The options they pick (Step 6), then a final, updated save block.

Then change L3 to "Deliver items 2 to 5 of that order on your own" and L71 to "Right after the save block, …".

## 4. "Ask once" competes with at least six later instructions to ask (medium-high)

> L3: "Ask questions only once, after the report, and only about things that change the numbers."
> L83: "If you can't tell which, ask."
> L88: "If they pick a number without the details, ask for everything those picks need in one message"
> L91: "If the statements don't show a card's exact APR or minimum, ask for them here too."
> L124: "ask them to upload the statements again"
> L128: "If they pick 7 without uploading it, ask them to upload it."
> L158: "ask only for last month's statements"

**Problem.** Read literally, L3 forbids all of these. Models handle the conflict unpredictably. Some suppress the needed follow-up. Others decide the rule is soft and start asking in the middle of the analysis as well.

**Rewrite (L3, the asking sentences):**
> Don't ask anything while you analyze. Questions about the statements go in one list after the report (Step 4). After that, ask only when an option they picked can't be done without the missing information (Steps 4 to 6 say when). Put everything you need in a single message.

## 5. "Month" is never defined (medium-high)

> L35: "its statement period (accounts often cover different dates; keep each one's own)"
> L61: "**Money in vs. money out**, by month"
> L139: "<YYYY-MM> spending: … (one line per month, all accounts)"

**Problem.** Card statement cycles (for example Sep 14 to Oct 13) do not line up with calendar months, and accounts cover different dates. One model will total by statement cycle and another by calendar month. Partial edge months will look like big drops, and those drops then set off L64 "Trends" (>15% and $25). The numbers will differ from run to run on the same data.

**Rewrite (add after L51):**
> **Months** mean calendar months, grouped by transaction date. Treat a month as complete only if every uploaded account covers all of it. Label partial months "partial", leave them out of averages and trends, and say so in "How much to trust this".

## 6. Duplicate removal depends on the balance check, which depends on duplicate removal (medium)

> L36: "With no reference ID, use the balance check to decide: remove the repeat only if the account balances without it"
> L47: "If it's off, look for duplicates or missing days. If a file has no balances at all (common in card CSVs), mark that account "not balance-checked""

**Problem.** The logic is circular, and card CSVs (the commonest case) have neither a reference ID nor balances, so no rule covers them. Two real $5.25 coffees on the same day in one file will be deleted as "export duplicates".

**Rewrite (L36):**
> **Remove export duplicates.** Only rows that appear in *two different files* whose dates overlap can be export duplicates. Keep one copy of a row with the same date, amount and description (and reference ID, if there is one). Identical rows inside one file are real: keep them, and flag them as a possible double charge if the merchant isn't one people use twice a day. If the account doesn't balance afterwards, say which rows you'd check.

## 7. Subscription detection catches habits that are excluded later (medium)

> L48: "any merchant charging 2 or more times at a regular interval"
> L64: "Frequent visits to the same restaurant or store are a habit, not a subscription; put those under trends."

**Problem.** A weekly coffee shop is "2 or more times at a regular interval". L48 comes first and says "on purpose", so models will list Starbucks and Kroger as subscriptions and then contradict themselves in section 6.

**Rewrite (L48, first clause):**
> any merchant charging about the same amount (within 10%) at a regular interval (weekly, monthly, yearly), *except* restaurants, groceries, gas and stores, which are habits and go under trends;

## 8. Monthly checkup and resume both start from the same "Begin" line, which handles only one (medium)

> L97: "come back next month, paste this prompt and your save block, and upload the new month."
> L158: "If they paste a save block and say "monthly checkup", ask only for last month's statements."
> L162: "If the person pasted a save block with this prompt, say in one line where you're picking up, and continue."

**Problem.** L162 is the line the model acts on first, and it treats every save block as a resume. A checkup user who follows L97 (save block plus statements, without the words "monthly checkup") gets "continue", which does not say what to do. A resume after the chat ran out has no transactions, so "continue" with Steps 2 to 4 cannot work, and the model may try to rebuild them from the save block (L124 forbids this for the export only).

**Rewrite (L162):**
> If the person pasted a save block with this prompt:
> - With new statements, or the words "checkup": run the Monthly checkup.
> - Without statements: say in one line where you're picking up (from the save block's Open questions and Method lines). Continue only with things the save block holds (questions, menu options, debt plan, budget). For anything that needs transactions (export, PDF of rows, re-categorizing), ask them to upload the statements again.
> Otherwise, send the Step 1 message now.

## 9. The question list's 8-item cap competes with things required to be on it (medium)

> L71: "At most 8 items"
> L78: "If they sent only one month per account, make the first item: …"
> L46, L47, L45: unrecognized merchants, "not balance-checked" accounts and missing accounts each go "on the question list".

**Problem.** A realistic upload (four accounts, five unknown Square merchants, two card CSVs without balances, one missing Discover card) gives more than 10 required items. The prompt doesn't say which to drop. Models either break the cap or silently drop required items, often the "not balance-checked" ones, which matter most.

**Rewrite (L71, after "At most 8 items"):**
> If more than 8 qualify, keep them in this order: missing accounts, accounts that didn't balance or weren't balance-checked, the one-month upload request, then the largest-dollar unknowns. Merge the remaining unknown merchants into one line ("5 small charges I couldn't identify, $62 total: …").

## 10. Inflows other than Income have no place in "Money in vs. money out" (medium)

> L44: "Unknown Inflow: money from a person or app you can't explain yet."
> L61: "income, spending, saved, and what's left over"
> L51: "Net spending … = expenses - refunds - confirmed reimbursements"

**Problem.** It isn't said whether Unknown Inflow and unconfirmed reimbursements count as income, reduce spending or sit outside both. "Saved" isn't defined either: is it transfers to savings, or the net change in the savings balance? Results will vary between models, and "left over" won't reconcile.

**Rewrite (add to L61):**
> Income = rows labeled Income only. Show Unknown Inflow on its own line under money in, not as income. Saved = transfers into savings accounts minus transfers out of them. Left over = income - net spending - saved.

## 11. Steps 1's word limit is smaller than its required content (medium-low)

> L19: "Keep it short, about 150 to 200 words"

**Problem.** The five items (L21 to L25) add up to about 220 words of instructions, about 105 of them verbatim quotes. The model must either break the limit or cut required content, usually the "where to find them" line or the privacy line.

**Rewrite.** Either raise the limit to "about 200 to 250 words", or cut L23's quote: drop "A single monthly statement only shows one month." (already implied) and move the "Optional: retirement…" sentence to the Step 4 question list, where it is asked only once the core accounts are in.

## 12. No-code mode depends on the model judging its own tools correctly (medium-low)

> L5: "if you can't run code or a data-analysis tool, follow the no-code instructions"
> L130: "If you can create files"

**Problem.** Models often misjudge their own tools. They claim to have run code they didn't run (and print a fake "computed" table), or they don't use a tool they have. Free plans on all three products give tools inconsistently.

**Rewrite (L5):**
> **No-code mode:** before Step 2, try to run one line of code (for example, summing two amounts). If it actually runs and you see its output, use code for every sum. If not, you are in no-code mode: say so in one line. Never present a result as computed by code unless code produced it in this chat.

## 13. Action Kit has no fallback when the PDF can't be read or written (medium-low)

> L96: "upload the Money X-Ray Action Kit PDF and I'll fill in its trackers"
> L128: "read its "For the AI" pages at the end and follow them"

**Problem.** This depends on two things, reading a long PDF to its last pages and producing a filled file, and neither has a fallback. Free plans often truncate long PDFs, so the model never sees the "For the AI" pages at the end and improvises. Unlike the PDF report (L130), nothing covers the case where the model can't write files.

**Rewrite (L128, append):**
> If you can't find or read its "For the AI" pages, say so and ask them to paste those pages as text. If you can't create files, give each tracker's filled-in values as a table, labeled with the page and tracker name, so they can copy them in by hand.

## 14. Two different "this month's interest" figures (low)

> L66: "this month's interest (balance x APR / 12)"
> L49: card statements already show the interest charged.

**Problem.** When the statement shows the interest charged, the formula gives a different number and the report disagrees with the statement. "This month" isn't defined either.

**Rewrite (L66):**
> …and interest in the latest statement month (the amount the statement charged; only if it shows none, estimate balance x APR / 12 and label it "estimated").

## 15. Over-specified or hard-to-parse spots (low)

- L49, the APR estimate is nested three parentheses deep inside a list item: "(if the statement doesn't show the APR but interest was charged, estimate it as … (for a multi-month download, use …), times 12, and label it "estimated"; if it doesn't show the minimum, …)". Models drop the inner clauses. **Rewrite** it as two sub-bullets after item 8: "Missing APR: interest that month ÷ average of that month's opening and closing balance × 12, labeled "estimated"." / "Missing minimum: 1% of balance + that month's interest, labeled "my guess"."
- L90 has a misplaced parenthetical: "Build the savings plan from their picks only: (an item they only want to look into doesn't count toward the total) each action, monthly and yearly…". **Rewrite:** "Build the savings plan from the items they chose to cut. Items they only want to look into don't count toward the total. Show each action's monthly and yearly savings, the total, and how far it is above or below their goal."
- L31 "Got 3 files." and L53 "Next: Visa and Amex." Models copy these examples word for word. **Rewrite** with placeholders: "Got <n> files…", "Next: <next two accounts>. Reply **go**."
- L15 "no dashes between clauses" is ambiguous (em dash? hyphen? en dash?), and the prompt itself uses " - " in "Excluded - Duplicate" (L116). **Rewrite:** "no em dashes (—) joining clauses; use a period or comma."
- L101 packs eight separate conditions into one paragraph (lump sum, idle cash minus upcoming bills, cushion, shrinking minimums, new spending). It is correct, but it is read once at the start and needed many turns later. **Rewrite** as a bulleted "Before you run the plan, check:" list of five items, so each condition is applied.
- L117 `txn_id` "account nickname + date + amount + row number": in no-code mode, "row number" in a PDF has no stable meaning. Add: "row number = the order of the row within that account's file, starting at 1."

## 16. Length and position (applies to the whole prompt)

About 4,300 words fits in every model's context, but instructions placed late and needed later in the session get skipped: Step 6 export rules, the Step 7 save block format, and the cash rules at L80 to L84. Rule 7 (style) and the bold on most lines of the prompt work against each other: models copy the bolding they see. The sequence block (finding 3) does the most to fix position-related skipping. Beyond that, the Step 7 format block could move to just after Step 3, where it is first used.
