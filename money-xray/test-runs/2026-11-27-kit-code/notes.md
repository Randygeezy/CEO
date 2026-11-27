# Notes from filling the kit (kitA)

Filled 513 text fields with pypdf 6.17.0 (clone_from, update_page_form_field_values with auto_regenerate=False, NeedAppearances true). No checkboxes set. Every name I wrote exists in the PDF (script asserts it). Helper scripts left in this folder: sim.py (debt simulation), cats.py (category averages check), fill.py (the fill).

## Checks against the chat
- Debt simulation (interest added then payments, rounded to cents) reproduces the chat exactly: avalanche debt-free Sep 2028 (23 months), interest $2,007.48; minimums only 62 months / Dec 2031, $7,503.15; payoff months Discover now, Mom Jul 2027, Visa Oct 2027, Toyota Sep 2028.
- Category averages recomputed from the final save block's three monthly lines match the budget table; targets total $5,152.01; budget planned $6,012.01, room $1,624.66; net worth totals and liquid $154.08 match; fees total $522.59.

## Unclear in the prompt or the kit's instructions
1. p7 savings total: the chat said cancellations + dining target "brings the total to $294.13, $5.87 under your goal", but $29.98 + $219.15 = $249.13. $294.13 only holds if SQ *JMK LLC ($45, "only counts if it stops") is included. I used $249.13 / "$50.87 short" (prompt rule 5: unconfirmed cuts aren't savings) and corrected it in the reply. This is an error in the prior chat turn.
2. "Payoff order" on p8/p9/p10: the avalanche target order (by APR: Discover, Visa, Toyota, Mom) differs from the order debts actually reach $0 (Discover, Mom Jul 2027, Visa, Toyota). I used the target order, matching the chat's debts CSV "order" column. The kit doesn't say which.
3. p8 debt_asof is one date but balances have two dates (Visa statement Oct 31; typed-in values Nov 27). Wrote "Oct 31 / Nov 27, 2026".
4. p10 thermometer start: statement balance ($6,477.85) or balance after the lump sum ($6,030.77)? Used the p8 list balances so pages agree.
5. p5 holds 16 rows but section 6 has 9 subscriptions + 11 recurring bills (20). I kept all 9 subscriptions and 7 bills, leaving out mortgage, Toyota loan (both on debt/net worth pages), Kids R Kids and church giving. No rule says which to drop. sub_total_monthly ($834.93) is the sum of the listed rows' monthly amounts (varying bills at average, Mastercard annual fee excluded, Planet Fitness annual fee excluded); the kit doesn't define what "monthly total now" covers (subscriptions only would be $171.92).
6. p5 decision for items the person never mentioned: no rule. Used Keep for those, Cut for Hulu/Apple Music, Check for SQ *JMK LLC. "Cancelled on" left empty: they decided to cancel on Nov 27 but never said they had cancelled.
7. p5 monthly field for an annual-only charge (Mastercard fee): no format given; wrote "yearly".
8. p7 "saves / month" for debt actions (Discover payoff ends ~$48.58/mo interest) is unclear; I left saves empty for debt actions so the column total matches the goal comparison, and put the interest in the task text. "Do by" has no source in the audit; used "Now", "Each month" or "Nov 2026" (plan month 1).
9. p4 "Everything else" row: rows 16+ are Travel, Entertainment, Personal Care, Uncategorized ($288.90 avg / $265 target). Cash & ATM is $0 after the cash answers, so omitted. bud_planned label is "targets + savings + extra to debt" but the chat's $6,012.01 also includes $260 card minimums; used the chat figure.
10. p3 snap_income/spending/savings: the original report (pay only $7,290, savings $300) vs the updated totals with customer-reported cash ($7,636.67, $5,630.49, $423.34 incl. jar). Used the updated ones with the cash split shown, since the kit should hold final choices.
11. p13 goal "3 months of the money they freed up": unclear whether "freed up" means the confirmed cancellations ($29.98, giving $100) or also the dining target ($249.13, giving $750). Used $29.98 (the only confirmed cuts, and the save block's "Cancelled or cut" line). Payday weeks get bigger amounts ($13 vs $3-4), 1st and 15th from the statements.
12. Start dates (ch_start, ns_start, ns_end) have no source in the audit; the kit asks for them anyway. Used Dec 1, 2026 (next payday) to Dec 30, 2026 and said in the reply it's a suggestion.
13. p14 "top 2-3 flexible categories": used Dining Out and Shopping ($995.02). Travel ($104.13) is technically bigger than Entertainment but was a one-off flight; the kit doesn't say whether one-offs count.
14. p12 sinking fund "monthly": the kit doesn't say whether to divide by 12 or by months until due. Used months until the guessed next charge (Mastercard $95 / 10 = $9.50, Planet Fitness $49 / 11 = $4.45). Due months are guesses (annual repeat). No insurance or holiday annual charges appear in the statements.
15. Date formats: the kit wants "Nov 2026" / "Nov 3, 2026"; p15 ck_1_month is 61pt wide and covers a 3-month audit, so wrote "Aug to Oct 26".
16. The prompt says to print an updated save block "at the very end, after the menu options they chose". The kit changed no audit numbers, so I said the last one is still current instead of reprinting it. Unclear if the prompt wants a reprint after option 7.
17. The kit's "For the AI" page says to "list the field names you filled, page by page, in one short message". With 513 fields that can't be short; I listed them as name ranges.

## Fields not filled, and why
- p12 ef_months, ef_target, ef_date: no emergency fund goal was ever discussed; leaving empty per "never invent". (ef_current $3,200, ef_monthly $300 current transfer, ef_where filled.)
- p13 ch_for: the person never said what they'd save for.
- p4 cat_n_m1..m3 and cat_total_m1..m3; p5 sub_n_cancelled and sub_n_stopped; p12 sf_n_saved; p14 ns_instead, ns_saved, ns_d1..30; all *_done / plan_mk_done checkboxes: left for the person, as instructed.
- Rows with no data: cat none spare, sub all 16 used, fee_7..12, todo_12, debt_5..8, nw_a10, nw_l8..10, sf_3..8, ck_2..12.

## Field names: instructions vs the PDF
- No instruction name was missing from the PDF once the placeholders are expanded: thn_* = th1_*..th4_*, nw_an_* = nw_a1_*, plan_mk_* = plan_m1_*, ch_wk_* = ch_w1_*, sub_n_* = sub_1_* etc.
- Shorthand that needed guessing: p5 line "sub_n_name monthly yearly flag decision cancelled stopped" means sub_n_monthly etc.; p8 "debt_n_order name balance apr min payoff" likewise; p7 "todo_n_task saves by".
- In the PDF but not in the instructions: cat_total_m1..m3 (p4) and todo_n_done (p7). ns_d1..ns_d30 are only called "the day boxes". All checkboxes use on-state /Yes, as the instructions say.
- The AcroForm has no /DR font resources, so pypdf warns "Font dictionary for /Helv not found" on every field; appearances rely on NeedAppearances. Rendered fine in poppler.
