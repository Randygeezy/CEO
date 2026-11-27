# Money X-Ray prompt: financial-logic review (CFP lens)

Scope: `Money_XRay_Prompt.txt` only (cold read). Ranked by how much harm the issue could do to a US consumer who follows the output. Line numbers refer to the .txt file.

## Summary

The core plumbing is sound. It excludes card payments and transfers so nothing is counted twice, uses one net-spending formula, separates balances that carry different rates, and keeps the mortgage out of the payoff order. Avalanche and snowball are defined correctly, and the CARD Act payment-allocation rule is stated. The serious gaps are in edge cases that real US households hit often: deferred-interest promos, P2P apps and accounts that weren't uploaded, cash cushions, federal student loans, and directive "pay $X" wording. Those are where a user could lose real money or read the output as personal advice.

---

## High severity

### 1. Deferred-interest promos are treated like 0% intro APRs (L66, L101)
The prompt says a promo balance "starts costing the regular rate on its end date." That holds for a true 0% intro APR. It is wrong for **deferred interest** ("no interest if paid in full in 12 months"), which is common on store cards, CareCredit and furniture or electronics financing. If even $1 is left at the end date, interest is charged back to the purchase date on the full original amount, often at 25 to 30% APR. The avalanche ordering ranks this balance at 0%, so it goes last, which is exactly the wrong order.
**Fix:** In Step 2 #8 and section 8, tell the two apart. The statement wording "deferred interest", "no interest if paid in full" or "accrued interest" marks a deferred-interest balance. For one of those, show the end date, the interest that will be charged if it isn't cleared (statements usually show it), and the monthly payment needed to clear it in time: balance / months left. In the debt plan, pay that amount each month ahead of the avalanche or snowball target. Add the CARD Act exception: in the last 2 billing cycles before a deferred-interest promo ends, payments above the minimum go to that balance first, and the person can ask the issuer to apply them there earlier.

### 2. Payments to apps and accounts that weren't uploaded disappear from spending (L45, L61)
"A payment or transfer to an account that wasn't uploaded... don't count it as spending." For an unseen *credit card* that is defensible. For Venmo, Cash App, PayPal, Apple Cash or Zelle-to-app, the outflow usually *is* the spending: rent to a roommate, a babysitter, splitting bills. Excluding it understates spending, overstates "left over," and makes the budget and the debt "extra money" look larger than they are. Unseen cards cause the same error: their spending is invisible, so "left over" is overstated by about the amount paid to them.
**Fix:** If an app statement wasn't uploaded, count the outflows to it as Expense (Uncategorized, "my guess") and put them on the question list. Payments to a card that wasn't uploaded go on a separate "Paid to accounts I can't see" line in section 3, below spending and before "left over," so the leftover isn't inflated. Never drop them silently.

### 3. Idle-cash and cushion rules can leave someone with $0 (L91, L101)
The menu asks "how much cushion to keep" but gives no default, and "idle cash" only subtracts a card balance that's about to be paid. Someone who sends all of their checking money to a card overdrafts on rent, then charges the next month to the card. That loop is the most common way debt plans fail.
**Fix:** Before calling any cash idle, subtract the next 30 days of known fixed outflows from that account: rent, loan payments, card balances it pays in full, and recurring bills from the report. Default the cushion to at least one month of average spending from the statements unless the person names a number. Describe it as a common rule of thumb (starter emergency funds of $1,000 up to 3 to 6 months of expenses are widely cited), not a recommendation. Never put lump sums toward a true 0% balance while higher-rate debt or a thin cushion remains. A deferred-interest balance under #1 can be the exception.

### 4. Directive wording reads as personalized advice (L104, L109, L90-92)
"Pay $X to <target>; pay the minimum on the others", "Debt-free date", "reply ok for my suggestions" and cut targets are specific, individualized instructions. A disclaimer footer doesn't change how this reads. Debt and budget guidance isn't securities advice, so the Advisers Act risk is low. The consumer-protection and marketing risk is real, though, especially with promises like a "debt-free date."
**Fix:** Frame every output as a scenario: "If you follow avalanche with $X extra, the plan puts $Y toward Card A this month." Use "projected payoff month under these assumptions," not "debt-free date." Keep "Targets are examples based on your averages, not advice." Add one line pointing to free help: a nonprofit credit counselor (NFCC member) or a fee-only planner, when debt exceeds what the plan can clear in about 5 years or when the minimums alone exceed what's left over.

### 5. Federal student loans and extra payments to loans (L101)
The debt plan treats student loans like any other installment debt. Extra payments on federal loans can be wasted for someone on an income-driven repayment plan heading toward forgiveness, or anyone pursuing Public Service Loan Forgiveness (PSLF). Separately, many loan servicers apply extra payments to future installments ("paid ahead") rather than to principal unless told otherwise, which saves no interest.
**Fix:** Before a federal student loan gets extra money, ask whether it's federal or private and whether they're on IDR or PSLF. If they are, leave it out of the extra-payment order and say why. In the cautions, add: "Tell the lender to apply extra payments to principal."

---

## Medium severity

### 6. APR estimate is unreliable in common cases (L49)
Interest / ((opening + closing) / 2) x 12 ignores:
- the average daily balance method issuers actually use, and timing (a big mid-cycle payment or purchase distorts the average)
- the grace period: purchases on a card paid in full accrue no interest, so they inflate the denominator
- cycle length: APR = daily rate x 365, and cycles run 28 to 31 days
- trailing or residual interest
- mixed balances: a 0% promo balance in the denominator makes a 27% card look like 9%, which breaks the "never blend" rule
The multi-month instruction ("balance on the interest date and a month earlier") is vague and will be applied inconsistently. The CARD Act requires PDF statements to print each APR and an "Interest Charge Calculation" table, so estimating should rarely be needed.
**Fix:** Read the APR from the PDF's interest table first. Estimate only when there's no PDF, never when the card has a promo or cash-advance balance, and show it as a range. An estimated APR should put the card on the question list, and the avalanche order should be marked provisional until it's confirmed.

### 7. Minimum-payment guess lacks floor and fees (L49)
"1% of the balance + interest" matches several large issuers but leaves out late fees and the past-due amount, and the floor (usually $25 to $40, or the full balance if it's lower). Some issuers use 2 to 3%. The guess also understates the minimum after a late fee, which is when it matters most.
**Fix:** "Greater of $35 or (1% of balance + interest + fees), plus any past-due amount; the full balance if it's under $35. My guess." Prefer the PDF's printed minimum, which is required on statements.

### 8. "The highest balance is not the first target in either" is false (L66)
When the largest balance also has the highest APR, it *is* the avalanche target. An agent following this line literally will reorder the plan wrongly.
**Fix:** "Balance size never decides the avalanche order; only the rate does."

### 9. Income is only take-home pay, and paycheck counting misleads (L39, L61, L109)
- 401(k)/403(b), HSA and health premiums come out before the deposit. "Saved" and the savings rate are understated, and someone with an employer match may look as if they save nothing.
- With biweekly pay, some months have 3 paychecks. A 3-month window can show a fake surplus. Monthly income = per-paycheck x 26 / 12.
- Tax refunds, bonuses, gig, 1099 and side income, child support, rewards redemptions and interest earned have no clear label.
- There is no **Taxes** category. Estimated tax payments (IRS, state) land in Uncategorized and distort spending for anyone self-employed.
**Fix:** Add a Taxes category and an "Irregular income" label so one-offs aren't averaged into income. Normalize biweekly pay. In section 3, say: "Income is take-home pay. Anything taken out of your paycheck first (retirement, health premiums) isn't visible here."

### 10. Three months misses annual and irregular costs, and the budget has no savings line (L57-67, L109)
Car insurance premiums every 6 months, annual subscriptions, registration, property tax if it isn't escrowed, holidays and tuition either don't appear or land in one month and inflate it. The budget has no savings or emergency-fund line, only "extra toward debt." Treating groceries, gas and health as flexible with a 5 to 15% cut can produce an unrealistic budget for someone already at the bone.
**Fix:** List the known annual or irregular items from the statements as a "set aside monthly" (sinking fund) row at amount / 12. Add a Savings row, even if it's $0. Suggest cuts only in discretionary categories (Dining Out, Shopping, Entertainment, Subscriptions), never Groceries, Health or Childcare unless the person asks. If spending exceeds income, say so plainly; a 5 to 15% cut may not close the gap.

### 11. No distress signals or dispute guidance (L45-49, L65)
The prompt doesn't look for the patterns that most predict a crisis: recurring overdraft or NSF fees, payday lenders, earned-wage or cash-advance apps (Earnin, Dave, Brigit, whose "tips" and fees work out to very high APRs), BNPL installments (Affirm, Klarna, Afterpay), past-due notices, over-limit fees, collections. Unknown merchants and possible double charges are flagged, but nothing mentions the time limit for disputing them.
**Fix:** In Step 2 #8, detect those merchants and list them in sections 7 and 8. BNPL plans go into the debt list. Note neutrally that free nonprofit credit counseling exists. For unknown or duplicate charges, add: "Dispute with the bank or card issuer soon; US rules give you about 60 days from the statement date."

### 12. Cash advances and card-funded inflows can be mistaken for income (L41-44)
A cash advance or convenience check deposited into checking, or a balance transfer sent to checking, shows up as an inflow. Under these labels it becomes Unknown Inflow or even Income, so new debt looks like money earned. Cash advances also carry a fee (usually 3 to 5%), have no grace period, and usually a higher APR.
**Fix:** Add an inflow label, "Borrowed (card or loan)," excluded from income. Match it to the card's cash-advance line, and flag the fee and the rate.

### 13. Card balance check formula is incomplete (L47)
"Opening + charges - payments and credits = closing." Statements list interest, fees, cash advances and balance transfers as separate lines. If the agent reads "charges" as purchases only, a correct card fails the check, and the agent then "fixes" its own arithmetic.
**Fix:** "Previous balance - payments - credits + purchases + cash advances + balance transfers + fees + interest = new balance."

---

## Lower severity

### 14. Liquid net worth definition and claim (L67, L107)
- The definition counts cash only. The usual definition also counts taxable brokerage. Either include it or call the metric "cash after card balances."
- "It's the money really free right now" overstates it, because rent and bills due before the next paycheck aren't subtracted.
- Balances come from different closing dates. A card's statement balance may differ from its current balance.
- Pre-tax retirement balances include tax that hasn't been paid yet. Add one neutral line saying so, which isn't investment advice.
**Fix:** Adjust the wording, show the as-of date per account, and put the pre-tax caveat in Full net worth.

### 15. "Saved" isn't defined net, and there's no cash-flow cross-check (L11, L61)
Transfers *out of* savings back to checking aren't subtracted, and contributions to brokerage or retirement accounts aren't named as saving.
**Fix:** Saved = net transfers into savings and investment accounts. Add a sanity check per month: income - spending - net saved ≈ change in bank balances + card debt paid down (or - card debt added). A large gap points to an unseen account or a mislabel.

### 16. Loan payments count as spending (L46)
This is acceptable for a cash-flow view. Principal still builds net worth, though, so say once that "Debt Payments" includes principal and that loan payments shrink debt rather than vanish.

### 17. Payoff simulation simplifications (L102)
Monthly APR/12 slightly understates interest compared with daily compounding. Fixed minimums understate how long a "minimums only" payoff really takes (the prompt notes this, which is good). Add: "Payoff months are estimates; a lender's calculator is the final word."

### 18. "This month's interest = balance x APR / 12" (L66)
Use the interest actually printed on the statement when it's there, and compute only as a fallback.

### 19. Wording: "audit" (L96)
"Fill in its trackers from this audit" contradicts L1, "this is not a professional audit." Use "analysis."

---

## What's right (keep)
- Card payment vs purchase handling and the one net-spending formula.
- Separate lines per rate, with no blended APR.
- The CARD Act allocation note, the "probably paid in full" test, and keeping the mortgage out of the payoff order.
- The debt-plan assumption that new charges stop, with a plain warning if they don't.
- "Worth reviewing" until the person confirms a cut, and no national averages quoted from memory.
- Balance transfers and consolidation loans described as things to look into, not recommendations.
