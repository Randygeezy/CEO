# Notes: prompt behavior with one month (October only)

Verdict: the prompt degrades gracefully on the math (balance checks, categories, debt plan, net worth all correct and reproducible), and it has one explicit one-month hook (Step 4: make "upload the 2 earlier months" the first question). But it gives no one-month instructions for sections 4 to 6 (averages, trends, subscriptions) or the budget, so the AI has to improvise, and several prompt rules read oddly or invite overclaiming when n = 1.

## What was right

1. **Balance checks.** Step 2.6 works on one month exactly as on three. All five accounts $0.00 (statement totals and every running-balance row). Card PDFs had summaries, so no "not balance-checked" cases.
2. **Step 1 ask.** "A single monthly statement only shows one month" is in the first message. Good, short warning; the impatient buyer still ignored it.
3. **Question list item 1.** Step 4 tells the AI to put "Upload the 2 earlier months... (optional)" first. That fired correctly. "I'll do it later, keep going" was handled with no re-asking.
4. **Subscription rule for single sightings.** Step 2.7 says flag typical subscription merchants "even if it appears once" and put "one-time sightings under possible subscriptions". This is the right instinct for one month; overlaps (3 video streamers + Prime; Spotify + Apple) were still found.
5. **Card payment / transfer matching** works within one month (all four payments matched within 1 to 2 days; Discover and savings flagged as missing).
6. **Debt plan and net worth** need only latest balances, so one month is enough. Results matched the guide's worked example to the cent ($2,587.08 lump; avalanche 23 months / $2,007.48; snowball $2,061.33; minimums 62 months / $7,503.15; net worth $162,554.08, liquid $154.08).
7. **Interest estimate rule.** One month is exactly the case the formula targets: $124.06 / avg($6,336.73, $6,477.85) x 12 = 23.23% est. (true 22.99%, close). Minimum guess $188.84 vs true $195.
8. **Cash rules.** Weekly-to-monthly conversion and ATM reassignment worked. The customer's August ATM answer referred to a month not uploaded; the AI set it aside (prompt has no rule for this; judgment needed).

## What was overclaimed, or where the prompt invites it

1. **"Average" with one month.** Section 4 and the Budget say "the average" / "monthly average from the statements". With one month, the "average" is October, including a $49 annual gym fee and a $79.99 oil change. The prompt doesn't say to label it "one month, not an average" or to strip annual/irregular items. A literal run calls October an average. The budget (built "from your averages") inherits this: the Subscriptions target dropped $79 partly because an annual fee "won't repeat", which is not a real saving.
2. **Trends section has no fallback.** Section 5 requires month-to-month comparison; the prompt never says what to do with one month. I wrote "not possible", but a less careful run might invent within-month "trends" or omit the section silently.
3. **Yearly cost from one sighting.** Section 6 says yearly cost = latest amount (x12 implied) for fixed charges. With one sighting nothing proves the charge is monthly (Prime could be monthly or annual; SQ *JMK $45 x12 = $540 is pure assumption). The prompt asks for "possible subscriptions" in Step 2.7 but then section 6 asks for yearly cost of everything. Risk: $2,124 "per year" headline built on single sightings. Annual fee x12 ($588) is an easy trap.
4. **Price increases** are silently impossible. The guide's sample's Netflix increase (p.34) can't be found. Prompt doesn't instruct the AI to say so.
5. **"Probably paid in full" test fails with one month.** Section 8 rule: no interest AND payments covered the previous balance. October's Mastercard payment ($450) and Amex payment ($400) were less than previous balances ($1,117.54, $640.36), yet no interest. Strictly, the prompt makes these debts; the customer actually pays them in full. With 3 months the AI could see the pattern; with one it can't. I used "no interest" as the tiebreaker and asked; the customer replied "ok" (CUSTOMER.md has no follow-up answer for this). A literal run would list both as debt, include them in avalanche/snowball with unknown APRs, and the idle-cash calculation (which reserves the Mastercard bill) would contradict it.
6. **CSV `recurring` column** has no one-month rule. Marking "Yes" from one sighting overclaims; the prompt has no "Possible" value. `import_batch` "2026-10_to_2026-10" is valid but odd.
7. **Save block "Recurring:" line** asks for monthly/annual and dates; with one date per item it implies confirmed recurring. No field for "months covered: 1".
8. **Money in vs. out "by month"** and "If money is left over on paper but they'd likely feel broke" are fine for one month, but "where it went" (Joint growing $1,752.66) might be a payday/timing artifact. One month can't tell a pattern from timing; the prompt doesn't ask for that caveat.
9. **Debt plan uses less than current payments.** Not one-month specific, but one month hides it: October showed $1,000 to cards; plan pays $560 to cards. The prompt asks "if you already pay more than the minimums, say how much", but the customer script doesn't, and the AI must notice it from the statements. With one month you can't tell if $825 to the Visa is typical. I flagged it and simulated the current level (16 months, $1,303.21).
10. **Visa "new charges exceed payment"** warning ($842.06 vs $825) rests on one month; prompt says "say so plainly", which can overstate a one-month blip.

## Suggested prompt fixes (small)

- Add one line: "If only one month per account was uploaded, say so in section 2; label section 4 'October' (not average); replace section 5 with one line saying trends need 2+ months; in section 6 mark every item 'seen once' and give yearly cost as 'if monthly'; never x12 an annual fee; skip price-increase checks and say so."
- In section 8: "With one month, if no interest was charged but payment was below the previous balance, don't decide; ask."
- Budget: "Leave out annual and one-off charges from the monthly average and list them separately."
- CSV: allow `recurring` = `Possible`.

## Customer-script gaps noticed

- CUSTOMER.md has no follow-up answer for "are Mastercard and Amex paid in full?" (it's only in the interview answers), so the v3 flow forces "ok".
- Step 3B cash answer references August ATM cash; with October-only uploads it can't be applied.
- Cash answer says Mom loan was $600; the menu reply says $450 left. Consistent only if read as remaining balance; AI must reconcile.
- No DoorDash double charge exists in October data, so that answer was never used.
