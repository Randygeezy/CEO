# Notes on filling the Action Kit

Filled with pypdf 6.17 as the kit's "For the AI" page shows (clone_from, update_page_form_field_values with auto_regenerate=False, NeedAppearances true). 490 of 841 fields filled. Pages 3-15 rendered with pdftoppm at 80 dpi and checked by eye: every value fits its box (the kit's fields auto-size their font, so long values such as "City of Raleigh utilities", "Overlaps Netflix, Disney+", "Nov 2026 (lump sum)" and "Up to $45.00" print smaller than their neighbours, but nothing is clipped). Every short field is 25 characters or fewer; snap_answer is 40 words, debt_warning 24, ns_rules 17.

Debt schedule (p9) came from a month-by-month simulation that reproduces the chat exactly: avalanche $2,007.48 interest and debt-free Sep 2028; snowball $2,061.33; minimums only $7,503.15 and Dec 2031; same payoff months for each debt.

## Unclear kit rules (and what I chose)

1. **Field names don't match the field list on p10.** The list says `thn_name`, `thn_start`, `thn_p10`; the PDF's fields are `th1_name` ... `th4_p90`. I used the PDF's names.
2. **p3 income, savings and spending: statements only, or with the customer-reported cash?** I used the updated figures from the chat: income $7,636.67 (pay $7,290 + cash $346.67), saved $423.34 (savings + jar), spending $5,630.49, left over $1,582.84.
3. **p3 snap_fix_1..3 are 504pt wide but fall under the 25-character limit.** I kept them to 25 characters, so they read as headlines rather than actions.
4. **p3 snap_period:** "Aug 1, 2026 to Oct 31, 2026" is 27 characters, so I used the month format: "Aug 2026 to Oct 2026".
5. **p5 "cancelled (date, if they said so)":** the customer said "cancel Hulu and Apple Music" but never said it was done. The save block's 2026-11-27 is the date they decided. I left the cancelled dates empty.
6. **p5 rows with annual charges:** Planet Fitness shows $24.99 monthly, $348.88 yearly (includes the $49 fee, as in the report) and flags the fee. The Mastercard $95 annual fee has its monthly box left empty. sub_total_monthly ($834.93) is the sum of the monthly boxes only: 9 subscriptions ($171.92) + 6 bills ($663.01). This total isn't in the chat. It's the kit's own "sum of the rows listed".
7. **p7 what counts as a chosen action, and its "saves" value:**
   - The Dining Out $280 target saves $219.15 (from the chat) and comes first. It's a budget target, not a cut from option 1, so I kept todo_total at the chat's $29.98 (Hulu + Apple Music) and the gap at "$270.02 short". The rows therefore don't add up to the total (the debt rows wouldn't either). Counting the dining target too would make the total $249.13 and the gap $50.87, numbers the chat never gave.
   - For debt actions, "saves" is interest per month. Discover is $48.58 (chat). The $447.08 Visa lump sum ($8.57) and the $365 above the Visa minimum ($6.99) are my calculations from chat numbers at 22.99% / 12. They aren't in the chat.
   - SQ *JMK LLC is listed with "Up to $45.00" but isn't counted in the total, since they're still checking it.
   - Left out because the customer never chose them: disputing the DoorDash double charge, and moving everyday spending off the Visa (that's on p8's Watch out instead).
   - "Do by" for this month's Visa payment and the minimums is "Nov 30, 2026", the end of plan month 1. No due dates appear on the statements.
8. **p8 Discover payoff:** the chat says "now (lump sum)". Written as "Nov 2026 (lump sum)" to fit the month format.
9. **p11 date:** statement balances are as of Oct 31, 2026 and typed-in values as of Nov 27, 2026. The box takes one date, so I used "Oct 31, 2026" (latest statement). The kit's printed footnote covers typed-in values.
10. **p12 sinking funds:** the due dates (Sep 1, 2027 Mastercard fee; Oct 6, 2027 Planet Fitness fee) assume each fee repeats on the same date a year later. That's my guess. I counted months left from Nov 2026: 10 months gives $9.50, and 11 months gives $4.46 (rounded up from $4.4545 so 11 payments cover $49).
11. **p13:** freed up = $29.98 a month. Three months is $89.94, which rounds up to $100, so the $300 minimum applies. The weeks alternate $35 and $15 (bigger in payday weeks; pay comes on the 1st and 15th). Week 1 is assumed to be a payday week because the start date is left empty.
12. **p14:** I picked Dining Out ($499.15) and Shopping ($495.87). Groceries and gas are excluded by the kit. The other flexible categories are small or one-offs (vet, Firestone, Delta). Dining Out includes $173.33 of cash lunches. The merchants named in the rules (Amazon, Home Depot, Wayfair) are from the chat.
13. **p15 ck_1_debt "total debt, no mortgage":** I used the p8 debt list, $23,667.85 (Discover + Visa + Toyota + Mom). Counting the Mastercard and Amex statement balances (which the report treats as "probably paid in full", not debt) would make it $25,426.41.

## Fields left empty, and why

- p4 cat_n_m1..m3 and cat_total_m1..m3: the kit says to leave them empty (actual spending to come).
- p5 decision for Netflix, Disney+, Amazon Prime, iCloud, Planet Fitness and all bills: the customer made no choice. Cancelled dates: not done yet (see 5). Stopped ticks: kit says leave empty. Rows are full at 16.
- p7 done ticks, rows 9-12: no more chosen actions.
- p8 rows 5-8: only 4 debts. The Mastercard and Amex are paid in full (guess), and the mortgage stays out.
- p9 plan_mk_done: kit says leave empty.
- p11 asset row 10, liability rows 8-10: nothing more to list.
- p12 ef_* (all 6): no emergency fund goal given. sf_n_saved: kit says leave empty. Rows 3-8: only 2 yearly charges were found.
- p13 ch_start, ch_for, done ticks: kit says leave empty.
- p14 ns_start, ns_end, ns_instead, ns_saved, day ticks: kit says leave empty.
- p15 rows 2-12: for future checkups.

## Fit

Nothing overflows. The smallest auto-sized text is in sub flag/name boxes (108pt wide), fee_4_item, debt_1_payoff, todo_3_saves and todo_7/8_by. These are readable at 100% but noticeably smaller than the rest of the row.
