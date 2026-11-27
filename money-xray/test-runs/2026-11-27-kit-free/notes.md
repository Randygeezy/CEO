# Notes: filling the Action Kit on a free plan with no code tool

## How many messages

- 7 AI messages for the kit (pages 3-4, 5-6, 7-8, 9-10, 11-12, 13-14, 15), with 6 "go" replies between them.
- That's on top of 13 AI messages already in the chat, so the whole session reaches 20 AI messages. On a tight free plan, the kit could hit the message cap before page 15.

## What was unclear in the instructions

1. **Page 4, "n 1-16, the rest as Everything else".** It doesn't say whether "Everything else" is row 16 or a 17th row. Only 16 rows exist, so I used rows 1-15 for categories and row 16 for "Everything else". The budget had 21 lines, because the prompt's rule keeps cash (Customer-reported) on its own line and the budget split Debt Payments into Toyota and Mom. So "Everything else" holds 6 lines, one of them Mom's cash loan payment.
2. **Page 4, "the next three months".** Today is Nov 27, 2026 and the latest statement ends Oct 31. I used Nov 2026, Dec 2026, Jan 2027 to match "month 1 = the month after the latest statement" on page 9, but November is almost over. Dec to Feb would arguably be more useful.
3. **Page 4, "Targets + savings + extra to debt".** The report's own line was the whole $560 Visa payment, not just the $300 extra, because a card payment isn't a budget category. I used the report's $6,333.58, so "Room left" matches the report ($1,303.09). The label suggests $300 rather than $560, which would give a different number.
4. **Page 5, "Subscriptions and bills".** The page title says bills too, but the fields only list subscription columns (16 rows). Section 6 had 11 subscription-type rows plus 12 recurring bills, too many for 16. I listed only subscriptions and annual fees; the bills are covered by the page 4 categories. Also unclear: whether SQ *JMK LLC (unknown, not counted as a subscription in the report) belongs in the "monthly total now". I included it, giving $171.92, which doesn't match the report's "$127 a month" subscriptions total. A customer may notice the mismatch.
5. **Page 5, Keep/Cut/Check for items the customer never mentioned.** The customer only decided Hulu (cut), Apple Music (cut), Spotify (keep) and SQ *JMK LLC (check). I wrote "Keep" for the rest and said so, but strictly that's a default, not their answer. The rule says never invent.
6. **Page 7, what counts in "These actions save / month".** The goal of $300 came from Cut costs, where the report counted only the two confirmed cuts ($29.98, $270.02 short). Paying off Discover stops about $48.58 a month in interest, and the budget targets lower spending by another $250.27. The kit doesn't say whether interest savings or budget targets count. I kept the report's numbers so page 7 matches the chat, and left the saves column empty for debt rows, which means rows aren't strictly "biggest saving first" past row 2.
7. **Page 7, "Do by".** The audit says "now" and "from November", not dates. I used the day before each next billing date for cancellations (derived from the statements) and "Now" / "Monthly" text elsewhere, which breaks the "Nov 3, 2026" date format.
8. **Page 8, debt-free date and interest.** The no-code rule in the prompt gives only a rough time for the first target. The kit has boxes for overall debt-free date, total interest and minimums-only figures, which can't be done by hand. Left empty. The Toyota payoff month also left empty (the report said "not estimated").
9. **Page 10, rounding.** The Visa's 10% marks come out with half cents. I used whole dollars for the marks (allowed by "$1,234") and cents for start balances. The kit doesn't say which. The Discover thermometer is pointless because the lump sum clears it at once.
10. **Page 12, emergency fund.** The customer never gave a goal in months, so Goal, Target and Reach it by stay empty. I assumed the savings account is the emergency fund for Saved now ($3,200), Save each month ($300) and Kept in; that's an assumption the kit doesn't settle. Sinking funds: the kit doesn't say whether "set aside / month" is amount / 12 or enough to be ready by the due date. I used ready-by-due-date ($9.50 over 10 months, $4.46 over 11 months) and said so. Amount / 12 would give $7.92 and $4.08.
11. **Page 13, "money they freed up".** I used confirmed cuts only ($29.98), giving a $100 goal, which is very small next to the $1,303 a month left on paper. If "freed up" includes Discover's interest or the budget targets, the goal would be very different. Start date and "Saving for" have no audit answer, so the payday weighting assumes they start in a payday week.
12. **Page 14.** "Top 2-3 flexible categories" is a judgment call. I picked Shopping, Dining Out (card plus cash lunches) and Entertainment; Pets and Travel were bigger than Entertainment but aren't really flexible (vet bill, one flight). Start and end dates have no audit answer.
13. **Page 15, row 1 "Month".** The audit covers 3 months, so I wrote "Aug to Oct 2026" and averages. "Debt left" isn't defined (with or without mortgage, cards paid in full, before or after the lump sum). I used the four plan debts before the lump: $23,667.85.
14. **No-code format.** "Two pages per message" makes page 15 a message of its own. "Ending each with Reply go" was applied to every message except the last.

## Fields left empty, and why

- p4 cat_n_m1..m3 (by design: actual spending to come).
- p5 cancelled (customer hasn't said they cancelled), stopped (by design), rows 12-16 (nothing else qualifies), monthly for the two annual fees (they're yearly).
- p6 rows 7-12 (only 6 fees found). Discover interest not listed: no statement.
- p7 saves for rows 3-12 (not monthly spending cuts, see above), done (by design).
- p8 debt_free, debt_interest, debt_min_free, debt_min_interest: need a month-by-month simulation (code tool or payoff calculator). Toyota payoff: not estimated in the report. Rows 5-8: no more debts.
- p9 every balance (plan_mk_d1..d4), plan_mk_total and done: the kit says fill only with a code tool.
- p11 asset row 10, liability rows 8-10: nothing more.
- p12 ef_months, ef_target, ef_date: no goal given. sf rows 3-8: only two yearly charges found. sf_n_saved: by design.
- p13 ch_for, ch_start: no audit answer. ch_wk_done: by design.
- p14 ns_start, ns_end: no audit answer. ns_instead, ns_saved, day boxes: by design.
- p15 rows 2-12: future checkups.

## Could a person on a phone really type this in?

Realistically, no, not all of it. By my count the replies ask them to type about 360 boxes: page 4 alone is about 56, page 5 about 56, page 10 about 48, page 11 about 37, page 9 about 28 (24 month labels). On a phone that means switching between the chat app and a PDF app hundreds of times, zooming into small form fields, and typing dollar amounts with cents on a phone keyboard. Expect an hour or more and many typos (for example $6,477.85 vs $6,447.85).

What would work on a phone: pages 3, 7, 8, 11 and 15 (the snapshot, the action plan, the debt list, net worth and the checkup row) are short and the most useful. Page 9 month labels, page 10 thermometers and the page 4 table are the parts most people would skip. Printing the kit and writing by hand is easier than typing into form fields on a phone, but still a lot. A code-tool plan, or a version of the kit where the AI's message can be pasted once, would fix this.

Other phone issues:
- Many phone PDF viewers (some Files/Books apps) don't save typed form fields reliably, or don't show them in other apps.
- The page 3 "answer" paragraph is 3 sentences and may not fit the box at the PDF's font size.
- Several values I gave are wider than a small field ("Oct 31, 2026 (typed-in: Nov 27, 2026)", "$2,587.08 (Discover $2,140.00, Visa $447.08)").
