# Notes: messy-customer run (r5/pt4)

Setup: code-tool chat, all six files uploaded at once, then "done". The customer was messy on purpose: partial answers, three "idk"s, one wrong fact corrected later (Visa APR 24.99 → 22.99), a bare menu pick ("1 and 2"), an off-topic question (crypto), and a late "can i get a spreadsheet".

## Did the numbers stay right?

Yes. Every figure was computed in code and checked again afterwards:
- All 5 accounts balance to $0.00. The 3 exact Visa repeats were removed (Visa only balances without them).
- Monthly spending in the report, the save blocks and export.csv agree: statements Aug $5,121.24, Sep $5,926.51, Oct $5,218.72 → $5,173.72 after the J.M. payback, and with the Customer-reported cash lines $5,344.57 / $6,149.84 / $5,397.05.
- The wrong Visa APR (24.99%) reached exactly one figure, the interim "interest this month $134.90" in Turn 5. The debt simulation ran only after the correction, at 22.99% ($124.10, which matches the $124.06 actually charged). No save block ever carried 24.99%.
- Debt plan (avalanche, $2,587.08 lump, $1,029/mo): debt-free Sep 2028, $2,007.48 interest. Snowball $2,061.33. Minimums only: Dec 2031, $7,503.15.

## Cost of the mess in turns

Ideal flow: done → report+questions → answers → menu picks with details → results (4 customer turns). This run took 6 customer turns:
- "1 and 2" without details: **+1 turn** (Turn 7 had to ask for everything).
- "idk avalanche or snowball": **+½ turn**. The prompt made the AI show both and ask; the pick came back together with the spreadsheet request.
- The wrong fact, partial cash answer, idk's and crypto cost **0 turns**. They were absorbed into replies that were already happening.

Net: about 1.5 extra turns, plus one interim figure that was wrong because the customer's number was wrong.

## Where the prompt handled the mess well

- **Bare menu pick.** Step 5: "If they pick a number without the details, ask for everything those picks need in one message." This gave one tidy follow-up (Turn 7) instead of a drip of questions.
- **Partial answers.** "Every question comes with your best guess, so 'ok' is always a valid answer" plus "Then update the report, showing only what changed" let the AI keep its guesses for the idk items (SQ *JMK LLC, Venmo $60, ATM cash) and move on. Turn 5 is a short change table, not a re-sent report.
- **Half a cash answer.** The customer gave the lawn income ("like 80 a week") but not where it went. Cash rule 3, "If you can't tell which, ask", made the AI ask once. The answer came back inside the menu reply, so it cost no turn. The rule "Turn weekly amounts into monthly ones... and show the math" gave clean lines ($80 × 52 ÷ 12 = $346.67).
- **Idle cash.** "Before counting idle cash as available, subtract bills about to come out of that account" caught the $1,112.91 Mastercard bill Joint pays next. The lump was $2,587.08, not $3,699.99.
- **Card still taking new charges.** The Step 6 line "if a card is still taking more new spending than it gets paid, say so plainly" put the most important caveat up front: Visa takes $959/mo in new charges and gets $817 in payments.
- **Late spreadsheet request.** Step 6 spells out the header, initials, manual cash rows and how to handle duplicates, so the late "can i get a spreadsheet" took no clarifying turn.

## Where the prompt handled it badly, or not at all

1. **No rule for off-topic questions.** For "also is crypto a good idea??" the prompt says nothing beyond "not financial advice" in Step 1. The AI improvised: "that's an investment question, and I can't tell you whether to buy it... paying that down is a sure return of that rate". That works, but the closing comparison drifts toward advice, and a different run could easily give a crypto opinion or ignore the question. A one-line rule would fix this: "Off-topic or investment questions: one sentence saying it's outside this audit, then point back to the relevant number."
2. **No rule for checking customer numbers against the statements, or for corrections.** The customer said "visa apr is 24.99". The statements' own interest implies about 23.5%. The prompt's Rule 1 ("every number comes from the transactions or from what they tell you") lets either number win. The AI flagged the gap on its own initiative ("worth a glance at the statement"), but nothing in the prompt asks for that check. When the correction came ("oh wait... no sorry 22.99"), the prompt also had no rule to restate every figure the old number touched. Suggested line: "If a number they give conflicts with the statements, use theirs but say so in one line; if they correct a number, redo everything it fed and list what changed."
3. **The "extra toward debt" wording clashes with what they already pay.** Option 2 asks "If you already pay more than the minimums, say how much you pay now", but the statements already show it: Visa about $817/mo, Discover $175. The plan math (minimums + $300 = $1,029) is lower than the $1,461 they pay now. The AI had to explain the mismatch itself ("most of the Visa payment just covers new charges"). The customer's "discover just put it toward the plan like everything else" was also ambiguous: is the $110 above Discover's minimum added to the $300 or not? The prompt gives no guidance. Better: tell the AI to read current payments from the statements, state the assumption, and show "you pay $X now; the plan needs $Y once new charges stop".

Smaller issues:
- **"Probably paid in full" test.** "whose payments covered the previous balance" can't be judged from a 3-month CSV without statement-cycle balances. The Aug payments were smaller than the Aug 1 balances, so the test fails on paper and costs a question even though no interest was charged.
- **Method "idk".** Step 6 covers "asked for both" but not "doesn't know". The AI showed both, ran the avalanche to-do as the example, and had to ask again.
- **"Updated save block at the very end".** This is ambiguous when requests arrive after the chosen options. Here it was printed after the debt plan (Turn 9) and again after the late spreadsheet (Turn 11), so 3 blocks in total, one more than "twice".
- **Two Apple charges and "cancel apple music".** The prompt gives no rule for mapping a customer's service name to a merchant line. The AI had to label its pick (the $10.99 charge) as "my guess".
- **Mom's debt.** "$600 I borrowed" (cash answer) vs "$450" (debt answer) was reconciled correctly as the original amount vs what's left. The prompt doesn't help with this; it relied on the model's judgment.

## Quotes worth keeping

- Turn 5: "One check on the Visa: the interest it actually charged ($124.06 in Oct) works out to about 23.5%, a bit under 24.99%. I'm using your number; worth a glance at the statement." (good behavior, not prompted)
- Turn 9: "Corrections first. Visa APR is now 22.99% (not 24.99%)... which matches the $124.06 it actually charged in October." (correction propagated)
- Turn 9: "The Visa plan only works if new Visa spending stops or gets paid in full." (prompt-driven, high value)
