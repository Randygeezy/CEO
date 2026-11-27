# Notes from the blind run

## Customer message count

4 customer messages: (1) paste the prompt, (2) upload all files + "done", (3) answers to the question list, (4) menu picks 1-5 with details. No "go" was needed (code tool, everything fit). Counting only messages after the prompt paste: 3.

## Results

- Balance checks: all 5 accounts $0.00 (Visa only after removing 3 export duplicates).
- Spending: $5,422.16/mo from statements; $5,630.49/mo after cash answers and the J.M. payback.
- Debt (avalanche, $2,587.08 lump from Joint, $1,139/mo): debt-free Jul 2028 (21 months), interest $1,759.33; snowball $1,811.17; minimums only 62 months, $7,503.20.
- Net worth $162,554.08; liquid $154.08. Statement-only: -$855.92.

## Unclear or contradictory prompt lines

1. **Discover overpayment vs "extra".** Step 5 option 2: "If you already pay more than the minimums, say how much you pay now." The prompt never says whether money already paid above the minimum adds to the stated extra or is part of it. The customer said "$300 extra" and, about Discover's $175, "put that toward the plan". I used $300 + $110 = $410 extra. With $300 only: debt-free Sep 2028, interest $2,007.47. Same problem for Visa: they pay $750-875/month but most is new spending; the prompt doesn't say how to treat that.

2. **"Probably paid in full" test can't be run on CSVs.** Step 3 section 8: "A card that carries a statement balance but charged no interest or late fee, and whose payments covered the previous balance, is usually paid in full". CSV card exports have no statement closing balances, so "payments covered the previous balance" can't be tested (Mastercard's Aug payment $450 < $1,120 opening; Amex $250 < $640). Amex also had a late fee, which by the letter disqualifies it, yet no interest was charged. I called both "probably paid in full (my guess)", noting the Amex late fee.

3. **APR estimate: which balance?** Step 2.8: "use the balance on the interest date and a month earlier". Before or after the interest posts is not said. Before: 23.94%; after: 23.47%.

4. **Idle cash rule is vague.** Step 6: "subtract bills about to come out of that account, such as a card balance it pays in full next". Joint also pays Toyota, childcare, groceries, but gets paychecks. The prompt doesn't say which bills to reserve, or whether the card's full current balance or the statement amount. I reserved the whole Mastercard balance only.

5. **Question list cap vs needed items.** Step 4: "At most 8 items". This dataset needed 9-10 (Discover, savings, Visa APR/min, Toyota loan, Zelle, Venmo, SQ, DoorDash, cash). I had to group Visa APR with the Toyota loan. The Toyota loan is not something the prompt says to ask about in the question list ("Without a loan statement you won't know the loan balance; say so"), so its balance only arrives via option 3 unless the AI improvises.

6. **Mom loan balance has no home.** The cash answer said "$600 I borrowed"; the remaining $450 only appears in pick 3. Option 2's ask doesn't request family loans, though Step 6 includes "money owed to family" in the debt plan. I added "what's left on the loan from your mom?" to option 2.

7. **Debts CSV / Net worth CSV belong to option 5?** Step 6 Spreadsheet export lists "Debts CSV" and "Net worth CSV" headers, but "make one CSV file with every account" implies one file. Unclear whether these are separate files, blocks, or columns. I gave them as code blocks.

8. **Refunds/reimbursements and `counts_as_spending`.** "`counts_as_spending`: Yes only for Expense" but refunds and reimbursements reduce spending. A spreadsheet summing Yes rows overstates spending unless it also subtracts Refund/Reimbursement rows. Not explained to the user.

9. **Unknown Inflow category in the export.** No rule for the `category` of Unknown Inflow or Refund rows. I used the category for refunds/reimbursements and blank for unknown.

10. **Report section order vs "how much to trust" first.** Step 3 says "Don't add sections ahead of section 1", but Step 2.1 "Identify it" output (file list) naturally comes first. I put a small "What I received" table before section 1, which arguably breaks that rule.

11. **Budget leaves out card minimums.** "card payments and transfers aren't budget lines", so the Visa/Discover minimums ($260) aren't in the budget, yet the debt plan needs them. I added a line under the table.

12. **"Cash kept at home (a jar) isn't spending: leave it out of the export"** but lawn cash income rows are in the export, so the export's Income exceeds tracked outflows by the jar amount with no row explaining it.
