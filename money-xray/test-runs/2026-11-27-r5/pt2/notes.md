# Notes: blind run, v3 prompt, free plan, no-code mode

## Results
- Balance checks: all 5 accounts $0.00 (Visa only after removing 3 export duplicates with identical reference IDs; with them in, it's off by $51.44).
- Spending (statements only): Aug $5,121.24, Sep $5,926.51, Oct $5,218.72, average $5,422.16.
- After answers (cash lunches $173.33/mo and Mom $50/mo added, ATM cash reallocated, $45 Zelle reimbursement): Aug $5,344.57, Sep $6,149.84, Oct $5,397.05, average $5,630.49.
- Income $7,290/mo from pay, plus $346.67/mo cash (Customer-reported).
- Debt: Discover $2,140 @ 27.24% (customer), Visa $6,477.85 @ 22.99%, Toyota $14,600 @ 6.9%, Mom $450 @ 0%. Avalanche with $2,587.08 lump from Joint (after $2,000 cushion and $1,112.91 Mastercard reserve): Discover paid off now, Visa gets $1,007.08 in Nov then $560/mo, done around Sep 2027 (rough, ignores interest).
- Net worth $162,554.08; liquid $154.08. Statements-only net worth was -$855.92.
- Cuts: Hulu + Apple Music = $29.98/mo ($359.76/yr), $270.02/mo short of the $300 goal.
- Budget: targets total $5,171.66 spending (-$458.83 vs average); with $560 card-debt plan and $423.33 savings, $1,481.68 left of $7,636.67.

## Message count
28 messages: 14 customer, 14 assistant. Breakdown: intro 1, account passes 3 (the third also starts the report), report part 2 + save block + questions 1, update + menu 1, menu picks 1-4 in 2 messages, exports 6 (one per account, plus cash, debts CSV, net worth CSV and final save block in the last).

## Unclear prompt lines
1. **APR estimate has two methods and no rule for which balance.** "average of that month's opening and closing balance" vs "for a multi-month download, use the balance on the interest date and a month earlier". It doesn't say before or after the interest posts. Results: 23.2% (month average), 23.5% (after interest), 23.9% (before interest). Running balances by hand for the multi-month method was the slowest step.
2. **"Probably paid in full" test doesn't fit a 3-month CSV.** The rule needs "payments covered the previous balance", but CSVs have no statement cycles. Mastercard ($450 paid against a $1,120 opening) and Amex ($250 against $640, plus a $29 late fee) fail the test literally, yet show no interest. The late fee rules Amex out on paper. I called both "probably paid in full (my guess)" and noted the Amex late fee.
3. **Excluded duplicates vs. counts_as_spending.** The rule is "Yes only for Expense", but no `type` is given for a duplicate row. I kept the original type with counts_as_spending No. It works, but it contradicts the rule as written.
4. **Idle cash for the debt plan.** "Subtract bills about to come out of that account, such as a card balance it pays in full next" is vague. Should I reserve the whole Mastercard balance ($1,112.91) or the usual payment? Also Toyota and childcare come out on the 2nd and 5th. I reserved only the Mastercard balance.
5. **No-code rough payoff time when a lump sum clears the first target.** "Rough time for the first target (balance / payment)" makes no sense when the lump sum pays off Discover on day one. I gave the rough time for the second target (Visa) instead.
6. **Budget lines.** "Card payments and transfers aren't budget lines" but "plus any extra toward debt". The minimums on the debts being paid down (Visa $195, Discover $65) fall in neither. I added one line for the card debt plan ($560).
7. **Cash and family debt.** Step 3B says $600 borrowed and $50/mo in cash; menu 3 says $450 owed. The prompt doesn't say whether cash paid to a family lender is Debt Payments spending (I treated it like the Toyota). The jar ($123.33/mo) has no slot in "Saved" or the export (export says leave the jar out, which reads as the balance, not the monthly flow).
8. **Menu 2 doesn't ask for loan balances.** The Toyota balance came only from menu 3. A customer who picks only 2 gives a plan with no loan balance.
9. **Discover's current $175 payment.** "If you already pay more than the minimums, say how much you pay now" has no rule for what to do with it. Here the customer redirected it, but the prompt doesn't say what to do by default.
10. **Unknown inflows in "Money in vs. money out".** The prompt has no column for them. I added "Other money in". The save block "Paybacks" line has no place for an unconfirmed or unknown inflow.

## Too heavy for a free plan
- **Exports.** 13 + 53 + 45 + 55 + 30 + 39 = 235 rows x 17 columns, typed by hand in code blocks. The Visa block alone is about 10 KB. On a real free plan that's 6 long messages and likely hits output limits. Splitting accounts makes it worse (more "go" turns).
- **Hand arithmetic.** About 230 transactions summed by month and category, each total checked twice (by category and by account), plus running balances for the APR method. Doable, but error-prone and long.
- **Report part 1** (four accounts' worth of tables plus sections 1-5) is very long once Amex is folded in with "don't stop in between".
- **Save block** is about 3 KB and printed twice. The spending lines with 18 categories x 3 months are the bulk.
- **Category table** (20 categories x 3 months + average + share) plus text bars duplicates the same numbers.
- 28 messages total is a lot for free-plan message caps. 9 of them are just "go".

## Top 3 prompt problems
1. Exports in no-code mode: one account per message, 17 columns, hundreds of rows. This is the heaviest part and the most likely to hit limits.
2. The APR estimate rule is ambiguous (two methods, no before/after-interest rule), and the "probably paid in full" test can't be applied to multi-month CSVs.
3. Debt plan edge cases: the idle cash reserve is vague, the rough-time rule breaks when a lump sum clears the first target, and menu 2 doesn't ask for loan balances.
