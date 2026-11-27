# Money X-Ray Action Kit: form-field review (cold read)

Method: PyMuPDF listed all 841 widgets (pages 3-15); pypdf read DA/flags; the "For the AI"
text (p16-17) was extracted and every pattern expanded in code (`chk.py`). A fill with
25-char strings via the exact snippet on p16 (`fill.py`) measured the font size pypdf
picks per box (DA is `/Helv 0 Tf`, auto-size, so overlong text shrinks, it doesn't clip).

## Coverage: clean
- Every field the instructions name exists (0 missing after expanding n/k/m patterns,
  th1-4_p10..p90, plan_m1-24_d1-4, cat_n_m1-3, etc.).
- Not mentioned (108), all clearly the person's: `todo_n_done` (12), `ns_d1..30` (30,
  "day boxes"), `ck_2..12_*` (66, "fill the next empty row" on update).
- Checkbox on-state really is `/Yes`. Thermometer field order matches the 90%..10% labels;
  p15 column order matches MONTH / SPENDING / VS. TARGET / DEBT LEFT / NET WORTH / WHAT CHANGED.
- Minor: `ns_start`/`ns_end` only covered by "the dates"; `todo_n_done` never mentioned.
  Fix: name them ("leave ns_start ns_end todo_n_done empty").

## Length limits vs measured boxes (main problem)
Flat "at most 25 characters" does not fit the narrow columns. 25 chars of text shrinks to:

| Box (width pt) | Font at 25 chars |
|---|---|
| debt_n_order (39) | 4.0 |
| sub_n_monthly / yearly (50) | 4.0 |
| sub_n_decision, debt_n_apr (55) | 4.5 |
| sub_n_cancelled, ck_n_month, ck_n_target (60) | 4.9 |
| todo_n_by, debt_n_min, plan_mk_label, ck_n_spending, cat_mk_label (66) | 5.4 |
| cat_n_avg/target/m1-3 (68), todo_n_saves, sf_n_target, plan_mk_total, ck_n_debt/networth (71) | 5.6-5.8 |
| plan_dN_name (74 x 11) | 6.1 |
| fee/debt balance, plan_mk_dN (76), th_n_start (72) | 5.9-6.3 |

Realistic values ($12,345.67, "Nov 3, 2026", "22.99%", "Keep") fit legibly; the risk is
text. Worst real case: `plan_d1..4_name` (74 pt) takes about 20 characters before dropping
below 7 pt, so "Capital One Quicksilver" (23) shrinks to ~6.5 pt.
Fix: replace the flat rule with "money, %, dates and Keep/Cut/Check in the narrow
columns; plan_dN_name at most 18 characters (short name, e.g. 'Chase card')".
Inverse case: the rule is needlessly tight for wide boxes: `fee_n_avoid` (276 pt, ~70
chars), `snap_fix_n` (504 pt), `todo_n_task` (286 pt), and `snap_missing`, a 3-line
multiline box (524x43) that gets no exemption. Fix: allow ~60 chars on fee_n_avoid /
todo_n_task / snap_fix_n and 25 words on snap_missing.

## Contradictions
1. **p4 rows vs "no gaps"**: "row 16 = Everything else" breaks "rows numbered from 1
   with no gaps" when there are <15 categories. Fix: "Everything else goes in the row
   after the last category."
2. **bud_planned vs its label**: instruction adds "card minimums"; label says
   TARGETS + SAVINGS + EXTRA TO DEBT. Card payments are probably already a spending
   category, so this may double-count. Fix one or the other; also say bud_planned and
   bud_room stay empty when targets are empty, and bud_room = bud_income - bud_planned.
3. **p9 page text vs no-code mode**: p9 says "without [a code tool] it fills the order and
   the rough months", and p17 says "otherwise fill labels", but the no-code mode (p16) only outputs
   p3/7/8/11/15. Same for p10/p12/p13 text ("The AI writes / lists / sets").
   Fix p9 text to "Without one, the rough months are on page 8" and drop "otherwise fill labels".
4. **todo_total vs todo_n_saves**: debt rows' "saves" = interest saved, but todo_total =
   "only the cuts they chose", so the total is not the column sum, and "Freed up" (cuts)
   feeds p13. Fix: state whether debt-interest rows count; label the total to match.
5. **ch_goal floor vs "never fill a default"**: "at least $300" fills $300 when nothing
   was freed up. Fix: "leave p13 empty if they chose no cuts".
6. **p13 "bigger amounts right after payday"** can't be followed: ch_start must stay
   empty and payday isn't asked. Fix: drop the payday clause or allow ch_start from pay dates.
7. **p15 "VS. TARGET" vs ck_1_target**: label reads as a difference, field name and
   instruction suggest the target itself. Fix: "ck_n_target = spending minus target,
   e.g. '$120 over'" or relabel "TARGET".
8. **p8 mortgage**: label says the mortgage stays out of the payoff order; p17's debt
   list rule doesn't say so (only ck_1_debt does). Add "no mortgage" to p8 rule.

## Undefined values (add a phrase each)
- `snap_date` ("Fill date") never defined: today's date? `snap_period` range format
  ("Aug-Oct 2026"?) not given.
- `sub_n_flag` content undefined; `sub_total_monthly` "MONTHLY TOTAL NOW": before or after
  cuts?; `sub_saved_monthly` presumably = sum of Cut rows (say so). Label "KEEP / CUT"
  lacks "Check", which the rule allows.
- `todo_goal` source not given. `debt_n_order` value (just 1,2,3?) not given.
- p9 with >4 debts: is `plan_mk_total` all debts or the four columns? p10 likewise
  only 4 thermometers for up to 8 debts.
- `sf_n_monthly` = amount / months left: divide by zero when due this month.
- pypdf snippet uses `clone_from="kit.pdf"`; the upload has another name. It also
  prints "No fields to update on this page" for pages 1-2 and 16-17 (harmless).
