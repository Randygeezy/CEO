# Notes: blind run pt3 (v3 flow, code tool)

## Customer message count
4 customer messages: (1) paste the prompt, (2) upload 15 PDFs + "done", (3) answers to the 8-item question list, (4) menu picks "1, 2, 3, 4, 5 and 6" with details. No "go" was needed (code tool, everything in one go). 4 assistant messages.

## Results
- Balance checks: all 15 statements $0.00 (summary totals and running balance column also matched row by row). 219 rows, 0 export duplicates, 1 flagged double charge (DoorDash $34.50 x2, 09-12).
- Spending: $5,422.16/month from statements alone; $5,630.49/month after the cash answers (Aug $5,344.57, Sep $6,149.84, Oct $5,397.05). Income $7,290 pay + $346.67 cash.
- Debt (avalanche, $3,249.99 lump from Joint after $2,000 cushion and a $450 Mastercard autopay reserve, $1,046.59/month): debt-free Sep 2028 (23 months), interest $1,790.12; snowball same date, $2,246.76; avalanche saves $456.64. Minimums only: Feb 2035, $7,503.15.
- Net worth: statements only -$855.92 (liquid the same); full $162,554.08, liquid $154.08.
- Savings plan: Hulu + Apple Music = $29.98/month, $270.02 short of the $300 goal.
- Files: export.csv (232 rows = 219 statement + 13 Customer-reported cash rows; sums reproduce the monthly totals), debts.csv, net_worth.csv, Money_XRay_report.pdf (8 pages, footer on every page, save block last page). Work scripts in work/.

## Unclear or conflicting prompt lines
1. **Balances carried with no interest.** Mastercard and Amex carry ~$1,113 and ~$646 month to month, payments don't cover the previous balance, yet no interest is charged. The prompt only covers "probably paid in full" (payments covered the previous balance) or debt with an APR. I guessed a 0% promo. The fallback minimum rule (1% of balance + interest) then gives $11.13 and $6.46, which is unrealistic and makes "minimums only" run 100 months.
2. **Idle cash reserve.** "Subtract bills about to come out of that account, such as a card balance it pays in full next" doesn't say what to do when the account pays a card a fixed amount that's not the full balance (Joint pays Mastercard $450/$875). I reserved $450 and applied it to the Mastercard in month 1, by judgement.
3. **Debt-plan budget.** Option 2 asks how much they pay now, but the customer script doesn't say, and the prompt doesn't say whether the plan budget is minimums + extra or current payments + extra. The household actually sends ~$1,800/month to cards, mostly covering new spending. Also unclear what happens to the freed $175 Discover payment (the customer script has an answer for it, but nothing in the prompt makes the auditor ask).
4. **Debts CSV and net worth CSV vs "one CSV file".** The export says one CSV file with every account, then defines two more CSV layouts. I made export.csv plus debts.csv and net_worth.csv.
5. **Cash rows in the export.** "One row per month ... dated the 1st" doesn't say which months (I used the 3 statement months), or what type/category cash income gets (I used Income/Income).
6. **Family loan balance.** The cash answers say "$600 I borrowed"; the menu answer says Mom $450. The prompt's debt menu line doesn't list family-loan balances among things to ask for, so the report had to say "balance unknown" until option 2.
7. **Budget lines.** "Card payments and transfers aren't budget lines" but the debt plan's minimums + extra on old card balances and the $300 savings transfer need somewhere to go to compare the total with income. I added "Savings + jar" and "Card debt plan" rows.
8. **Trend rule with $0 months** (Travel, Transportation): ">15%" is undefined from $0; I treated new or vanished categories over $25 as trends.
9. **txn_id row number**: row within the file or within the account? I used month + row within the file (e.g. EVERYDAYCHK-20260801-2185.00-AUG1).
10. **Findings after answers.** Section 1's three findings can change once cash answers arrive (dining out jumped to $499). The prompt says "update the report, showing only what changed" but doesn't say whether the PDF's page-1 findings should be re-ranked. I re-ranked them in the PDF.
11. **"Keep messages short"** conflicts with delivering a 9-section report plus save block plus 8 questions in one message when a code tool is available.
12. **Annual membership fees**: Planet Fitness annual fee (Subscriptions?) and the card annual fee (Fees & Interest?) have no explicit home; I split them that way.
