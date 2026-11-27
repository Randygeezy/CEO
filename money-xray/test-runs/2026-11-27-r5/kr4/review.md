# Money X-Ray Action Kit: CFP-style review

Cold read of `Money_XRay_Action_Kit.pdf` (17 pages, 841 form fields), with all pages viewed as images and the two "For the AI" pages read in full.

**Overall verdict:** the trackers are mostly sound, practical and well chosen. The debt list splits balances that carry different APRs, the sinking funds come from real yearly charges, the no-spend challenge leaves essentials out of its rules, and nothing asks for account numbers. The serious problems are not on any single page. The kit never says how the money it frees up should be split, and several fill rules can produce numbers that look right but double-count money or ask for money the person doesn't have. It also leaves out retirement, insurance and irregular income, which a planner would expect in any "turn your audit into a plan" kit.

Ranked by harm to the user: **High** findings can lead to bad money decisions, **Medium** findings are misleading or a real gap, and **Low** findings are polish.

---

## HIGH

### H1. The same freed-up dollars are spent four times (no allocation rule)
Four pages each draw on "the money you freed up" or the money left over, and none of them knows about the others:
- p8: `debt_extra` (extra to debt each month)
- p12: `ef_monthly` (save each month) and `sf_n_monthly` (sinking funds)
- p13: `ch_goal`, which is 3 months of the money freed up

If freed-up money is $200 a month, the kit can show $200 extra to debt, $200 into the emergency fund and a $600 challenge all at once. Someone who follows every page overcommits and ends up back on the card.
**Fix:** add an "Where the freed-up money goes" box on p7 or p12. The rows are starter emergency fund, debt extra, sinking funds and challenge, and they must add up to no more than the money freed up plus the room left each month. In the AI rules, add: "debt_extra + ef_monthly + sum(sf monthly) + ch_goal/3 must be ≤ freed up + bud_room; if not, fill in that order of priority and leave the rest empty." Also state that the 12-week challenge is the emergency-fund or sinking-fund deposit, not extra money on top of it. Default `ch_for` to "Emergency fund" when that fund is below target.

### H2. The 12-week challenge's $300 minimum can force a shortfall
`ch_goal = 3 × freed up, rounded up to $25, at least $300.` If someone freed up $40 a month (or $0), the goal becomes $300 when the cuts only cover $120. The rest has to come from money that is already committed, so the risk is an overdraft or new card debt.
**Fix:** set the goal to `min(max(3 × freed up, $300), 3 × (freed up + max(bud_room, 0)))`. If freed up is $0 and the room left is zero or negative, leave the challenge empty and add a note such as "Free up money first (p5/p7)".

### H3. The spending-plan total double-counts debt and misses non-card loans
`bud_planned = target total + savings + card minimums + extra to debt`.
- The 16 category rows are averages of the money actually spent, and those averages often already include card and loan payments (a "Debt payments" or "Loans" category). When they do, the minimums are counted twice and `bud_room` comes out too low.
- Only **card** minimums are added. Car, student and personal loan payments are left out unless they happen to be a category, so `bud_room` comes out too high.

**Fix:** rule: "Categories exclude all debt payments and transfers to savings. bud_planned = category targets + savings + all debt minimums (every row on p8) + debt_extra." Also tell the AI to move any debt or transfer category out of the rows. When `bud_room` is negative, show it as "$X short".

### H4. A one-time debt payment can drain the cushion, and there's no floor
p8 has "One-time payment now" and "Cushion kept", but no rule says how big the cushion must be. If the AI or the user puts most of their cash toward debt, the next car repair goes back on the card at about 25% APR.
**Fix:** rule: "debt_lump only from cash above a cushion of at least one month of essential spending (or $1,000, whichever is greater); debt_cushion must show that amount." Add a line on the page: "Don't pay down debt with your last month of bills money."

### H5. The debt plan ignores which debts matter most beyond APR
Avalanche and snowball only sort by rate or balance. A planner first checks for **priority debts**: back taxes, child support, secured loans you're behind on (car repossession, foreclosure), and rent or utilities in arrears. The plan also misses things that change the order:
- 0% and deferred-interest promotions: the order should change before the promo ends, and with deferred interest, back-interest lands all at once if the balance isn't cleared.
- Federal student loans: income-driven repayment or PSLF can make extra payments a poor use of money.
- Collection accounts: making a payment can restart the time limit for being sued in some states.

**Fix:** add a `promo ends` column (a date) on p8. Add a `debt_warning` rule that flags any promo ending inside the plan, any past-due secured debt or taxes (these go first, whatever the method), and federal student loans ("check income-driven repayment before paying extra"). Also add a one-line footer: "In collections, behind on taxes, or considering bankruptcy or debt settlement? Talk to a nonprofit credit counselor (NFCC) first."

### H6. Missing retirement: the employer match can be worth more than extra debt payments
The kit has no field for a 401(k) or 403(b) contribution or an employer match. A common plan this kit could produce is "cut retirement contributions to pay debt faster," which gives up an instant 50% to 100% return from the match. Retirement balances also have no defined place on the net-worth page.
**Fix:** add to p3 or p7 a line: "Retirement: contributing __% / employer matches up to __%" with a rule: "If they're contributing below the match, the first action is to raise it to the match. Never suggest cutting below the match to fund extra debt payments." On p11, put retirement accounts under "What you own" with a note that they are not liquid and are pre-tax.

---

## MEDIUM

### M1. Insurance is missing entirely
A plan meant to stop "surprises" has nothing on insurance: health, auto, renters or home, disability, and term life if anyone depends on the person's income. One uninsured event can wipe out every tracker in the kit. Insurance is also a common thing to cut costs on (shopping premiums, bundling, raising deductibles, but only once the emergency fund covers the deductible).
**Fix:** add a short "Protection check" block (p12 has space): one row per coverage with a Have? / Premium / Deductible / Review by date. The AI fills in the premiums it found in the statements. Add a rule tying a raised deductible to having an emergency fund at least that size.

### M2. Irregular or self-employed income isn't handled
`snap_income` and `bud_income` are a single monthly average. For gig, commission, seasonal or freelance earners, budgeting on the average means a shortfall in every below-average month. Self-employed people also owe quarterly estimated tax, which bank statements show only as a lump (or not at all).
**Fix:** if income varies by more than about 15% from month to month, fill `bud_income` with the **lowest** month and say so, and use the extra in good months for the emergency fund or debt. If income arrives without tax withheld, add a sinking-fund row "Taxes (set aside 25–30% of untaxed income)" and an action to check estimated payments.

### M3. The emergency fund is sized on the wrong base and has no starter step
"Goal (months of spending)" uses total average spending, which includes the discretionary spending the kit is trying to cut. The usual rule is **3–6 months of essential expenses** (6 or more for one-income households and irregular earners). There's also no starter goal, such as $1,000 or one month, before the extra debt payments start (see H4). "Kept in" gives no guidance.
**Fix:** relabel the field "months of essential costs" and base `ef_target` on housing, utilities, groceries, insurance, transport and debt minimums. Add a starter milestone line. Add a hint on the page: "Kept in: a separate FDIC/NCUA-insured high-yield savings account."

### M4. The sinking-fund rule creates a payment spike and misses most irregular costs
- `monthly = amount / months left until due` turns a bill due next month into a one-month spike for the full amount, and never says what to do after the bill is paid.
- It only lists yearly charges **found in the statements**. If the audit covers 1 to 3 months, most annual costs won't show up.

**Fix:** show two amounts, "catch-up this time" and "every month after (= amount/12)". Have the AI add common irregular costs as rows the user can confirm: car insurance (often every 6 months), registration, car maintenance, holidays and gifts, medical deductible, property tax if not in escrow, and annual memberships. Mark them as estimates and leave the amounts empty if they're unknown.

### M5. The payoff schedule and thermometers only show four debts
The debt list holds 8 debts, but the schedule only has columns for d1–d4 and there are only 4 thermometers. With 5 or more debts, the p9 "Total" column can't match the debt-free date and total debt on p8 (it's unclear whether it includes debts 5–8).
**Fix:** state that `plan_mk_total` = **all** debts, and rename the fourth column to "Debts 4+ combined" when there are more than four debts. Note that the thermometers cover the first four in payoff order.

### M6. The minimums-only comparison can overstate the benefit
Card minimums usually fall as the balance falls (often 1% plus interest, or a fixed floor). If the AI models the minimums-only case at a minimum that shrinks over time and the plan at fixed payments, the "interest saved" gap is real but much larger than a fair comparison. That's fine, but say so. If it keeps the minimum fixed, the comparison understates the gap. The rules don't say which method to use.
**Fix:** rule: "Minimums-only = today's minimum held fixed (conservative); say so in debt_warning." Also add "assumes no new charges on these cards" to the page.

### M7. "Liquid net worth" uses a nonstandard definition with no guidance on values
The definition (cash minus card balances and short-term bills) is reasonable, but it's not the usual one. Taxable brokerage money is normally counted as liquid. The rules also don't say how to value cars (purchase price vs private-party value) or homes, or whether retirement counts (it does, but at its pre-tax amount).
**Fix:** relabel the field "Cash cushion (cash – card debt)", or include taxable investments. On p11, add the note: "Car = private-party value (KBB), home = conservative estimate minus about 6% selling costs, retirement = current balance (before tax)."

### M8. There's no "educational, not advice" line or guidance on when to get help
The kit gives specific payoff orders and dollar targets but never says it's educational, or when someone should see a professional (bankruptcy, debt settlement offers, tax debt, collections, divorce).
**Fix:** add one line in the p2 footer, plus the NFCC pointer from H5.

---

## LOW

- **L1. The checkup log doesn't track savings.** p15 tracks spending, debt and net worth, but not emergency fund or savings balance, which is the main thing the kit builds. Add a "Saved / EF" column (or swap "vs. target" for it).
- **L2. The no-spend challenge can backfire.** Add one line: "Move what you didn't spend to savings the same week, or it disappears," plus a rule that medical, kids' needs and pre-paid commitments are always allowed. Thirty days straight can lead to rebound spending, so offer a 2-week version.
- **L3. Thermometers assume the balance only goes down.** Add: "Balance went up? Stop using this card and check the date of any new charge." Interest and new charges can move the balance back below a mark you've already colored.
- **L4. Action plan units are mixed.** Debt actions list interest saved per month next to cuts that free up cash, in the same "saves / month" column. Mark debt rows "(interest)" so users don't count them as spendable cash. Excluding them from `todo_total` is already correct.
- **L5. Averages include one-off and annual charges.** Spending averages over 1 to 3 months are distorted by annual charges, so tell the AI to take annual items out of the category averages (they belong in sinking funds) to avoid counting them twice.
- **L6. Taxes and credit health aren't mentioned.** There's no line for the size of the tax refund or bill (large refunds mean too much is being withheld, which is money they could use now) or for a free credit-report check (annualcreditreport.com). One action-plan suggestion each would cover these.

---

## What's already right (keep)
- Each separately priced balance gets its own row, the mortgage is kept out of the payoff order but stays in net worth, and the debt-free date and interest are shown next to the minimums-only case.
- The "Stopped?" column checks that a cancelled subscription really stopped charging, a step most budget kits skip.
- Bigger 12-week deposits right after payday line up with cash flow.
- The no-spend rules leave out bills, groceries and gas.
- The privacy rules are clear: no account numbers, and initials for other people's names.
- "Never invent a value; leave a choice empty if they didn't make it."
