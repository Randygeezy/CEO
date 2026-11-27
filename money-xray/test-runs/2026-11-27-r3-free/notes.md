# Notes from the no-code, free-plan run (v3 flow)

## Customer effort

- **13 customer messages in all:** pasting the prompt, then 12 replies. Those were: "done" with the uploads, "go" x3 (accounts, then report part 2), the question answers, the menu picks, and "go" x6 to step through the export.
- Of those, **9 were bare "go"**. 6 of them came from the export alone, because the prompt says "one account per message" for no-code mode.
- Without option 5 (export) it would have been 7 messages in all: the paste plus 6 replies.

## Results (all by hand)

- Balance check: $0.00 on all five accounts. 3 exact duplicate rows removed from the Visa; without removing them, the Visa would be off by $51.44.
- Spending from statements: $5,422.16 a month before the answers. After the answers it was $5,407.16, or $5,630.49 with customer-reported cash spending.
- Debt plan (avalanche): a $2,587.08 lump from Joint pays off Discover ($2,140) and puts $447.08 on the Visa. Then the Visa gets $560 a month, clear in about 11 months (~Sep 2027, rough). The plan is flagged as not working while the Visa takes about $794 a month in new purchases.
- Net worth $162,554.08, liquid $154.08. From the statements alone it was −$855.92.

## Unclear, contradictory, or too heavy for a free plan with no code

1. **Export "one account per message" in no-code mode is the heaviest part.**
   - Line: "Without one, give CSV in a code block, one account per message."
   - Cost: 6 extra "go" turns and about 230 hand-typed 17-column rows, which comes to around 60 KB of output. On a real free plan this would likely hit message-length or daily limits.
   - The prompt also never says to end each export message with "Reply go", so I had to infer it from the general rule.
2. **Wrong example for "next" accounts.**
   - Line: "End each with one line, 'Next: Visa and Amex. Reply go.'"
   - The example hard-codes account names. It also doesn't say whether the summary file (statement_summaries.csv) counts as an "account" in the two-per-message rule.
   - With 5 accounts, the third message holds Amex plus report part 1. That message is very long.
3. **Where the question list goes is ambiguous.**
   - Lines: "The question list (Step 4) comes right after the report", "Print a save block … right after the report (before the question list)", and "Right after the report, in one message, ask …"
   - It's unclear whether report part 2, the save block and the questions share one message. I put them together to save a turn. That made the longest message in the chat.
4. **The APR estimate formula doesn't fit multi-month downloads.**
   - Line: "estimate it as that month's interest divided by the average of the statement's opening and closing balance".
   - Here the "statement" is a 3-month CSV with only 3-month opening and closing balances, so I had to rebuild month-end balances by hand.
   - Card interest posts on the 25th, not at month end, so the estimate (23.2%) is rough. The real APR was 22.99%.
5. **Trends rule doesn't say which months to compare.**
   - Line: "categories that rose or fell more than 15% and $25"
   - It doesn't say whether to compare month to month, first to last, or against the average. I used month to month.
6. **The debt plan ignores what the customer already pays.**
   - Lines: "Every debt gets its minimum, all extra money goes to one target" and "Tell me how much extra you can put toward debt".
   - Today they pay the Visa about $817 a month and Discover $175. Minimums plus $300 extra comes to less than that.
   - CUSTOMER.md has an answer for "keep paying Discover $175?", but nothing in the prompt makes the AI ask it. "Run the plan without another round of questions" also forbids asking.
7. **Which bills to subtract from idle cash is unclear.**
   - Line: "subtract bills about to come out of that account, such as a card balance it pays in full next; if you can't tell whether one was paid, leave money for it"
   - It doesn't say whether to also reserve the regular debits (Toyota, childcare) that land before the next payday. I reserved only the Mastercard balance ($1,112.91).
8. **No-code payoff output is too thin for the debts CSV.**
   - Lines: "Without one: give the order, this month's payment for each debt, and a rough time for the first target" and the debts CSV column `payoff_month`.
   - In no-code mode the CSV can't be filled honestly for later debts. Toyota is left as "not estimated".
   - Here the lump sum clears the first target right away, so the "rough time" has to apply to the second target.
9. **Privacy rule conflicts with the export column name.**
   - Lines: Rule 6, "Other people's names … become initials … including exported descriptions", plus "ending in 1234 at most", against the export column `description_raw`.
   - Raw descriptions contain masked account digits (XXXX8812) and a name ("JORDAN M"), so `description_raw` can't really be raw. I removed the digits and used initials.
   - The prompt doesn't say whether masked last-4 digits in raw text are allowed.
10. **Some export field formats aren't defined.**
    - Line: "`txn_id`: account nickname + date + amount + row number". No separator or format is given.
    - Line: "one row per month for weekly or monthly items". No date is given for those cash rows. I used the month end.
    - The `category` values for Income, Unknown Inflow and Reimbursement rows aren't specified.
11. **First message word limit can't be met.**
    - Line: "Keep it short, about 150 to 180 words", with long quoted text that must be included.
    - The required quote and the "where to find them" line already take about 140 words. The message came out at about 190.
12. **The manual-check rule is heavy for about 220 rows with no code.**
    - Line: "add in small groups and check each total by adding it a second time in a different order".
    - It's doable, but it means re-adding every month of every account twice. Checking by account totals against category totals worked as the second order.
13. **Budget leftover isn't explained.**
    - Line: "Show the total against their income."
    - After the targets, about $1,303 a month is still "left over" on paper. The prompt gives no guidance on explaining that or sending it toward debt or savings.
    - It also doesn't say whether card minimums and extra debt payments count in the budget total. I added the $560 Visa payment as its own line.
14. **Customer data conflict (not the prompt).**
    - In Step 3B the customer says Mom lent $600; in the menu reply they say they owe $450.
    - I treated $600 as the amount borrowed and $450 as what's left. The prompt has no rule for this kind of conflict.
15. **No-code mode still doesn't flag where it's weakest.** The report includes hand-made text bars and many tables. On a real free plan, rounding slips are likely; the averages column summed to $5,422.15 against a true $5,422.16, and that has to be explained.
