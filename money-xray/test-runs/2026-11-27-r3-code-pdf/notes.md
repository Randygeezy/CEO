# Notes from the blind run (v3 flow, code tool)

## Customer effort

The customer sent **4 messages** in all: (1) pasting the prompt, (2) uploading the 15 PDFs and typing "done", (3) answering the 8-item question list, (4) picking menu items 1 to 5 with the details. That's 3 messages after the prompt. No "go" was needed, because the code tool let everything fit in one go. The customer never had to ask "where's my money going", "are you done" or "double check".

## Unclear, contradictory or hard to follow (with source line)

1. **Lines 3, 57, 69 and 129: message boundaries can't be followed literally.** The report, then the save block "right after the report (before the question list)", then the question list "in one message". A chat AI can't send several messages in a row without a customer turn in between. I put all three in one reply. The prompt should say "same reply, in this order".

2. **Line 3 ("Ask questions only once, after the report") vs Step 5 (lines 88 to 92).** The menu is a second round of asking for details (debt extra, cushion, Toyota balance, Mom's balance, home values). It isn't framed as questions, but in practice it is one. Items such as the Toyota loan balance and what's left owed to Mom couldn't fit in the 8-item list (line 71). They only arrived with the menu reply. As a result the report's Debt and Net worth sections are mostly "unknown".

3. **Line 66: the debt section asks for an avalanche and snowball order in the first report.** Before the answers, only one debt (Visa) can be measured. The Discover balance and the Toyota balance are unknown. Both orders end up as "Visa only". The section doesn't say what to do when most balances are unknown.

4. **Line 66: the "probably paid in full" rule gives a doubtful label.** Mastercard and Amex carry balances with no interest charged, so the rule says "probably paid in full". But the payments are often smaller than the previous statement balance (Mastercard paid $450 against $1,110.42 in Aug and Oct; Amex paid $250 against $640). The rule ignores that evidence. Also there was a $29 Amex late fee.

5. **Line 45: payment matching on amount alone has no tie-break.** In September the Visa and the Mastercard both received $875 within 5 days of two $875 payments. The prompt says banks "name the issuer", but here the names don't match the statement issuers ("CHASE CARD EPAY" pays the "Summit Visa"; "CITI AUTOPAY" pays the "Crescent Mastercard"). I settled it with date order (the Citi payment left after the Visa payment had already arrived). The prompt should say how to break ties.

6. **Line 100: "subtract bills about to come out of that account" is vague.** For the Joint checking lump sum, it's unclear whether to hold back only the card balance it pays next (Mastercard $1,112.91), or also the next month's regular bills (Toyota $419, after-school $170 and so on). I held back the card only and said I assumed the next paychecks cover the regular bills. Another model might give a different lump sum.

7. **Line 100: timing of the lump sum vs. month 1 isn't exact.** "Month 1 = the month after the latest statement and any lump sum paid now." I applied the lump before month 1's interest. It's stated but easy to read either way.

8. **Line 92 and the customer's "$300 extra": what counts as the monthly debt budget is unclear.** The customer pays Discover $175 now, against a $65 minimum, and pays the Visa about $817 a month, against a $195 minimum, mostly to cover new Visa spending. The prompt says "every debt gets its minimum, all extra money goes to one target". It doesn't say whether the current overpayments count as part of the extra. I used minimums + $300 = $1,029 and explained it.

9. **Line 46 vs line 11: loan payments count as spending ("Debt Payments") but card payments don't.** Toyota and Mom payments sit in spending and in the budget. The same debts are also in the payoff plan. That's not double counting in totals, but the budget (line 108) doesn't say how to show card minimums and extra debt money next to the "Debt Payments" category. I added separate lines for them.

10. **Line 108: budget "fixed bills (housing, insurance, loans, utilities)" leaves out childcare, giving, health and the unknown charge.** I kept those at average without being told to. And "Fees & Interest" has no rule: it's partly unavoidable interest, partly avoidable fees.

11. **Line 61: "saved" isn't defined for cash.** Is the jar money (rest of the lawn cash, $123.34 a month) "saved"? I counted it, but the prompt only mentions money moved to savings.

12. **Lines 117 to 119: export rules leave gaps.** The prompt doesn't say:
    - which category Income and Unknown Inflow rows get (I left it blank);
    - which date a "one row per month" cash item gets (I used the month's last day);
    - how to record the jar (I used Transfer);
    - whether `source_row` and the row number in `txn_id` count per file or across the whole export (I counted per file).

13. **Line 14 (privacy) vs descriptions:** the account-number redaction is clear for "XXXX4471", but store numbers in descriptions (GREAT CLIPS #4471, STARBUCKS STORE 08812) happen to match account digits. The prompt doesn't say whether to strip store numbers. I kept them, since they're merchant IDs.

14. **Line 134 vs line 149: save block format contradicts itself.** "One line per item" sits next to template lines that list many items on one line ("<Category> $x, ..."). The "Payments & transfers" line, if every payment is listed, is very long for 3 months × 5 accounts. I summarized by month.

15. **Line 71: the 8-item cap forced choices.** Several things that change numbers stayed as guesses: the two Apple charges (which one is Apple Music matters for the "cancel Apple Music" pick), whether Mastercard and Amex are really paid in full, and why a maintenance fee started in September.

16. **Line 49: the minimum-payment guess formula** (1% of balance + interest) gave $188.84 vs the real $195. That's fine, but it means the first report's minimum is labelled a guess, and the customer has to correct it.

17. **Line 62: "use a chart if you have a tool".** With a code tool the AI could draw a chart, but a chat transcript can't hold one. I used the text bars. It's unclear which the prompt prefers when both are possible.

18. **Line 5 vs Step 2 (line 53):** clear enough. With code, everything goes in one message, which made the first reply very long (report + save block + 8 questions). The "keep messages short" goal (line 5) conflicts with "deliver everything in one go".

## Test-harness notes (CUSTOMER.md, not the prompt)

- CUSTOMER.md line 14 says "the six files in uploads/", but there are 15 PDFs (5 accounts × 3 months).
- The "Answers to follow-up questions" section ends with "Anything else: use your best judgment", while the v3 section says uncovered items get "ok". Every one of my 8 questions had a matching answer, so this didn't matter.
- Mom: Step 3B says "$600 I borrowed", the net worth answer says "I owe Mom $450". These fit together ($600 borrowed, $450 left), but only the menu reply gave the $450.
