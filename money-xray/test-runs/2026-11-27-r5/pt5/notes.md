# Notes: continue-from-save-block run (free plan, no code tool)

## Result
Finished everything except the transactions CSV export. No statements were needed for the question list, savings plan, debt plan, net worth or budget. All arithmetic done by hand, each sum checked a second way (the save block's three monthly totals were re-added and matched; category averages were checked both by summing averages and by summing 3-month totals: $16,891.46 / 3 = $5,630.49).

## Message count
- Customer: 6 messages (paste + continue, answers, menu picks, go, go, "I don't have those handy").
- Money X-Ray: 6 messages (question list; update + menu; savings + debt; net worth + budget; export ask; refusal + 2 CSVs + final save block).
- 12 total. Messages 2 and 3 are long for a free plan; message 6 is long because of the save block.

## What the save block lacked to continue
1. **No record of where the flow stopped.** It holds "Open questions" but no flag saying the question list was or wasn't sent, or answered. I inferred "report done, questions not yet asked".
2. **Which bills come out of Joint checking.** Needed for the idle-cash lump sum. Only "Joint to Mastercard" is listed; the mortgage, utilities etc. have no paying account. I subtracted the Mastercard bill and flagged the rest.
3. **Frequency/dates of the $175 Discover and $300 savings transfers.** Listed once with no "monthly"; I assumed monthly.
4. **Which Apple charge is Apple Music.** Two Apple lines ($2.99, $10.99); I guessed $10.99.
5. **Visa purchases vs payments split.** Derived by hand from opening/closing and the payment lines (charges + interest = $2,747.85 over 3 months), but the block doesn't record new purchases per card, which the debt-plan caution needs.
6. **Toyota loan balance and savings balance** (expected, asked).
7. **Transactions.** Export impossible by design ("never rebuild rows from a save block").
8. **Report text itself** (trends, subscription notes, the three findings). Not needed for the remaining steps, but the "update showing only what changed" had to be written without seeing what the customer had already been shown.
9. Category of the Oct 25 Venmo $60 / J.M. $45 were in "Paybacks" as unconfirmed, fine.

## What I had to refuse or estimate
- **Refused:** transactions CSV (customer couldn't re-upload). Gave debts CSV and net worth CSV instead, built from this chat's numbers. Did not do cash/manual rows or ATM row edits since those need the original rows.
- **Estimated:** Visa payoff ~11 months ($6,030.77 / $560, rounded up, labelled optimistic); no Toyota payoff date (prompt says without code give only the first target; first target Discover is cleared by the lump, so I gave the next one). Mom 9 months by division.
- **Guesses:** Halloween cash as Shopping; $10.99 Apple = Apple Music; $300 extra = minimums + $300 (Discover's current $175 not counted as extra) and said so; savings transfer monthly.
- **Not asked (but in CUSTOMER.md "if asked"):** "Keep paying Discover $175?" I flagged the ambiguity in the plan instead of asking, since Step 5 says run the plan without another round of questions.

## Unclear prompt lines
1. "Begin: say in one line where you're picking up, and continue." Doesn't say how to tell which step was reached from a save block; the save block format has no step marker.
2. Step 7 "print a save block once right after the report (before the question list)". In a continued chat the report is already done; I didn't reprint it before the questions. Unclear whether that's expected.
3. Step 4 "Then update the report, showing only what changed" in a new chat where the original report isn't visible.
4. Budget: "card payments and transfers aren't budget lines" plus "plus any extra toward debt". The card minimums' principal on the old Visa/Discover balances fit nowhere; I left them out and mentioned them under the unassigned remainder. The prompt also doesn't say whether savings transfers get a line (I added one).
5. Debt plan "If you already pay more than the minimums, say how much you pay now." Visa is paid ~$817/month but takes ~$790 of new purchases, so "how much you pay now" is misleading for a card in daily use. The plan payment ($560) is less than the current payment; I explained, but the prompt doesn't cover this case.
6. Debt plan without code: "rough time for the first target". When a lump sum clears the first target immediately, should the rough time go to the next target? I did.
7. Step 6 export: "If this is a new chat started from a save block, ask them to upload the statements again". No fallback if they can't; whether debts/net worth CSVs are still allowed isn't stated (I gave them).
8. Mom debt: CUSTOMER.md has $450 owed (interview) and "$600 I borrowed" (cash answer); consistent as borrowed vs remaining, but the prompt has no rule for a family loan paid in cash both as spending (Debt Payments) and as a debt in the payoff plan.
9. Liquid net worth: unclear whether savings and the jar count as "cash and bank" (I counted them) and whether money owed to family is a "short-term debt" (I counted it).

## Other observations
- Customer menu reply in CUSTOMER.md includes 5 (export) though the task named picks 1-4; I followed CUSTOMER.md.
- Key finding surfaced only after the answers: liquid net worth $154.08 vs net worth $162,554.08, and $1,063 to $1,869 a month left over sitting in Joint checking, which is bigger than the $300 goal.
