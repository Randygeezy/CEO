# Money X-Ray: session transcript

---

**Money X-Ray:**

Hi, I'm Money X-Ray. I help you find out where your money actually goes, using statements you download from your own bank and card accounts. We'll work through it in phases, and every number I give you will come from a calculation over your own transactions.

One note before we start: I'm not a licensed accountant, auditor or financial adviser, and this isn't a professional audit. It's an educational self-analysis.

**Privacy first.** Before you upload anything later on:
- Black out or delete full account numbers, your address, and anything else that identifies you that I don't need. The last 4 digits are fine.
- Download CSV files where your bank offers them. They are easier for me to read accurately than PDFs.
- Redaction lowers your privacy risk, but it doesn't remove it. Your AI provider's data policy applies to whatever you upload.
- I will never ask for passwords, logins, full account numbers or your Social Security number. If anything ever asks you for those, don't give them.

I can run code in this session, so every parse, total, match and reconciliation will be calculated, not estimated.

**Phase 1: Interview.** I'll ask seven short questions, one at a time. You can say "skip" to any of them.

**Question 1:** What should I call you? A first name or nickname is fine.

---

**Customer:** Call me Sam.

---

**Money X-Ray:**

Thanks, Sam.

**Question 2:** Roughly what comes in each month after tax, and from where (job, side work, benefits)? How often are you paid?

---

**Customer:** I take home about $4,370 a month from Acme Logistics, paid on the 1st and 15th. My spouse takes home about $2,920 a month from Wake County Schools, also the 1st and 15th.

---

**Money X-Ray:**

Got it: about $7,290 a month combined, paid twice a month.

**Question 3:** List every account you use: checking, savings, credit cards, buy-now-pay-later, loans. Give each a nickname like "Everyday Checking" or "Blue Card." No account numbers, please.

---

**Customer:** Accounts: Everyday Checking, Joint Checking, Visa Rewards (credit card), Mastercard Cash Back (credit card), Amex Blue (credit card).

---

**Money X-Ray:**

**Question 4:** Which accounts pay which? For example, "Everyday Checking pays all three cards."

---

**Customer:** Everyday Checking pays the Visa and the Amex, and moves $400 a month to Joint Checking. Joint Checking pays the Mastercard.

---

**Money X-Ray:**

**Question 5:** Any debts with a balance: cards you carry month to month, car loan, student loan, personal loan? Interest rates too, if you know them.

---

**Customer:** Debts: a Toyota car loan, and we carry a balance on the Visa, around $6,000. I don't know the rate.

---

**Money X-Ray:**

That's fine. The rate (the APR, or annual percentage rate: the yearly cost of borrowing on that card) is printed on each card statement, so you can look it up later. We don't need it to get started.

**Question 6:** Do you share expenses with anyone, or get paid back by friends or family through Zelle, Venmo or similar?

---

**Customer:** Friends sometimes Zelle us back when we split dinner.

---

**Money X-Ray:**

Good to know. When I see one of those, I'll ask what it was rather than count it as income.

**Question 7:** What do you want out of this? For example: "find where my paycheck goes," "cut subscriptions," "save $500 a month," "pay off a card."

---

**Customer:** We make decent money but never seem to get ahead. I want to know where it goes and find about $300 a month to free up.

---

**Money X-Ray:**

Clear goal: **see where the money goes, and find about $300 a month to free up.**

Here's your account map as I understand it. I'll check the statements against this.

| Nickname | Type | Paid from / funded by | Notes |
|---|---|---|---|
| Everyday Checking | Checking | Sam's Acme Logistics pay (1st and 15th) | Pays Visa Rewards and Amex Blue. Sends $400 a month to Joint Checking |
| Joint Checking | Checking | $400 a month from Everyday Checking | Pays Mastercard Cash Back |
| Visa Rewards | Credit card | Paid by Everyday Checking | Carries a balance of about $6,000. Rate unknown |
| Mastercard Cash Back | Credit card | Paid by Joint Checking | |
| Amex Blue | Credit card | Paid by Everyday Checking | |
| Toyota car loan | Loan | Not stated yet | Balance and rate unknown |

You didn't say which account your spouse's pay lands in, or which account pays the Toyota loan. The statements should show both, and I'll confirm them when they do.

Does this look right?

---

**Customer:** Yes, that's right.

---

**Money X-Ray:**

**Phase 2: Statement collection.**

Please upload **3 to 6 months** of statements for **every account on the map**: Everyday Checking, Joint Checking, Visa Rewards, Mastercard Cash Back, Amex Blue, and the Toyota loan if you can get it. Fewer than 3 months makes repeating charges hard to spot.

- CSV or Excel downloads are best. Readable (not scanned) PDFs work but are more error-prone.
- Include the statement summary (opening and closing balance) if the bank gives one. I need it to reconcile, which means checking that the transactions add up exactly to the bank's own totals.
- Use the same date range for every account if you can.
- Reminder: black out full account numbers and your address first.

---

**Customer:** *(uploads six files)* `amex_blue.csv`, `everyday_checking.csv`, `joint_checking.csv`, `mastercard_cashback.csv`, `statement_summaries.csv`, `visa_rewards.csv`. That's everything I have.

---

**Money X-Ray:**

Thanks, Sam. I read all six files in code. Here's what arrived.

**File inventory**

| File | Account | Date range (transaction dates) | Rows | Sign convention I detected |
|---|---|---|---:|---|
| `everyday_checking.csv` | Everyday Checking | 2026-08-01 to 2026-10-31 | 53 | One Amount column. Money in is positive (payroll +2,185.00), money out negative. Has a running Balance column. Dates MM/DD/YYYY |
| `joint_checking.csv` | Joint Checking | 2026-08-01 to 2026-10-28 | 45 | Separate Debit and Credit columns, both positive. Has a running Balance column. Dates YYYY-MM-DD |
| `visa_rewards.csv` | Visa Rewards | 2026-08-02 to 2026-10-30 (posted through 10-31) | 55 | **Purchases are negative**, payments and returns positive. Has the bank's own Category, a Type and a Reference ID. Dates MM/DD/YYYY |
| `mastercard_cashback.csv` | Mastercard Cash Back | 2026-08-07 to 2026-10-29 | 30 | **Purchases are positive**, payments negative ("AUTOPAY PAYMENT - THANK YOU" is -450.00). Reference ID. Dates YYYY-MM-DD |
| `amex_blue.csv` | Amex Blue | 2026-08-02 to 2026-10-29 | 39 | **Purchases are positive**, payments negative ("ONLINE PAYMENT - THANK YOU" is -250.00). Reference ID. Dates like "02 Aug 2026" |
| `statement_summaries.csv` | All five accounts | Each period 2026-08-01 to 2026-10-31 | 5 | Opening and closing balance plus total debits and credits for each account. Not transactions |

That's 222 transaction rows and three full months (August, September, October 2026) for each of the five accounts. The file names make the accounts obvious, so I don't need you to confirm them.

Two things I matched by amount rather than by name, so you know: Everyday Checking's "CHASE CARD EPAY" payments ($700, $800, $750) match the Visa Rewards payments exactly, and Joint Checking's "CITI AUTOPAY" payments ($450, $875, $450) match the Mastercard Cash Back payments exactly. I'm treating those as the Visa and Mastercard payments. Tell me if that's wrong.

The statements also confirmed two things from the map: your spouse's pay (WAKE CO SCHOOLS PAYROLL, $1,460.00 on the 1st and 15th) lands in Joint Checking, and the Toyota loan ($419.00 a month, TOYOTA FINANCIAL PMT) is paid from Joint Checking.

**Coverage check.** No gaps in dates: every file covers August 1 to October 31, and the summaries agree. But I found three things that don't match the map:

1. **DISCOVER E-PAYMENT**, $175.00 from Everyday Checking on 2026-08-20, 2026-09-20 and 2026-10-20 ($525.00 total). There's no Discover card on your map. Is this a card you forgot to list? If so, can you get its statements?
2. **TRANSFER TO SAVINGS XXXX8812**, $300.00 from Everyday Checking on 2026-08-28, 2026-09-28 and 2026-10-28 ($900.00 total). There's no savings account on the map. Is this your own savings account?
3. **Toyota car loan:** no statement was uploaded. I can see the $419.00 monthly payments, so this doesn't hide any spending. Without the loan statement I can't show the balance or how much of each payment is interest. Do you want to add it, or go ahead without it?

I'll wait for your answers before I continue.

---

**Customer:** Discover: Oh right, I forgot. We have a Discover card. I don't have that statement handy, go ahead without it.

Savings XXXX8812: Yes, that's our savings account.

Toyota loan statement: I'm not sure. Use your best judgment and mark it for review.

---

**Money X-Ray:**

Thanks. Here's how I'll handle each one:

- **Discover card:** added to the map. The $175.00 payments are **Card Payments**, not spending. Paying off a card isn't spending; the purchases on the card are. Since I can't see the Discover statement, **anything bought on Discover is invisible to this analysis**. That's a stated limitation in the report.
- **Savings XXXX8812:** added to the map as your savings account. The $300.00 transfers are **savings**, not spending, and I'll report them separately. I don't have that statement, so I can only see money going in from Everyday Checking.
- **Toyota loan:** I'll go ahead without the statement and mark it for review. The payments go in Debt Payments. I won't be able to split principal from interest.

Updated map: Everyday Checking, Joint Checking, Savings (XXXX8812, no statement), Visa Rewards, Mastercard Cash Back, Amex Blue, Discover (no statement), Toyota car loan (no statement).

**Phase 3: Normalize.**

In code, I put all 222 rows into one ledger with the same shape for every account: `date, account_alias, description_raw, amount, direction, source_file, source_row`.

- Every date is now YYYY-MM-DD. For Visa I used the transaction date and kept the post date for payment matching.
- Every amount is positive, and the direction says which way money moved for that account. On a card, a purchase is an Outflow (you owe more) and a payment or return is an Inflow (you owe less).
- I checked the conventions on known rows: the payroll deposits come out as Inflows on both checking accounts, and every "PAYMENT THANK YOU" comes out as an Inflow on its card.
- I ignored the Visa file's own Category column as a source of truth. For example, it calls Costco "Shopping" and Costco Gas "Shopping." I'm treating the warehouse club as Groceries and the gas as Gas.
- Every row keeps its source file and row number so you can find it in the original.

**Phase 4: Verify.**

I ran every check in code. Results:

| # | Check | Result | What I found |
|---|---|---|---|
| 1 | Export duplicates | **Fixed** | 3 rows in `visa_rewards.csv` are exact copies, with the same date, amount, description and reference ID: row 37 (SHELL OIL 57442, $39.80, R100714) copies row 34; row 38 (CHIPOTLE 2291, $38.75, R100847) copies row 36; row 39 (AMAZON MKTPL return, $129.99, R100945) copies row 35. This looks like one export overlapping the next. I kept one of each and marked the copies `Excluded - Duplicate`. The two checking files have no reference IDs, so I would not remove anything there on my own. I searched them for same-day, same-amount, same-description pairs and found none. |
| 2 | Possible merchant double charges | **Needs you** | `mastercard_cashback.csv` rows 15 and 16: DOORDASH*THAI BASIL, $34.50 each, both on 2026-09-12, with different reference IDs (R101141 and R101148). These are real charges, so I kept both. Did you order once or twice? |
| 3 | Card payments | **Pass** (9) / **Needs you** (3) | All 9 payments to the three cards match the card side exactly, 1 to 2 days apart: Everyday to Visa $700.00, $800.00, $750.00; Everyday to Amex $250.00, $825.00, $400.00; Joint to Mastercard $450.00, $875.00, $450.00. Both sides are marked Card Payment and not counted as spending. The 3 Discover payments ($525.00) have no card statement to match. They're not spending, but Discover purchases are invisible. |
| 4 | Internal transfers | **Pass** | 3 transfers from Everyday to Joint, $400.00 each, matched 1 day apart (Aug 8 to 9, Sep 8 to 9, Oct 8 to 9). Not spending. The 3 savings transfers ($300.00 each, $900.00 total) are savings, reported separately; there's no savings statement to match them against. |
| 5 | Refunds and reimbursements | **Pass** (2) / **Needs you** (2) | KROGER #0412 REFUND, $18.99 on 2026-10-20 (Joint), offsets Groceries. The Amazon return of $129.99 on 2026-09-29 (Visa) offsets the $129.99 Amazon purchase on 2026-09-22, in Shopping. Two pieces of money from people need you: a Zelle and a Venmo cashout (questions below). |
| 6 | Reconciliation | **Pass, all 5 accounts** | See the table below. |
| 7 | Coverage | **Gaps stated** | No date gaps. Missing statements: Discover card, Savings XXXX8812, Toyota loan. |

**Reconciliation** (opening balance + money in - money out must equal the closing balance to the cent; for cards, opening owed + charges - payments and credits):

| Account | Opening | + In / charges | - Out / payments | Calculated closing | Statement closing | Difference | Running balance |
|---|---:|---:|---:|---:|---:|---:|---|
| Everyday Checking | $1,840.55 | +$13,215.00 in | -$13,175.05 out | $1,880.50 | $1,880.50 | **$0.00** | all rows match |
| Joint Checking | $960.00 | +$9,978.99 in | -$5,239.00 out | $5,699.99 | $5,699.99 | **$0.00** | all rows match |
| Visa Rewards | $6,180.00 owed | +$2,695.68 charges | -$2,379.99 payments/credits | $6,495.69 | $6,495.69 | **$0.00** | n/a (no balance column) |
| Mastercard Cash Back | $1,120.00 owed | +$1,767.91 charges | -$1,775.00 payments/credits | $1,112.91 | $1,112.91 | **$0.00** | n/a (no balance column) |
| Amex Blue | $640.00 owed | +$1,480.65 charges | -$1,475.00 payments/credits | $645.65 | $645.65 | **$0.00** | n/a (no balance column) |

All five accounts reconcile to $0.00, and both checking accounts match the bank's running balance on every row. One check that confirms the duplicate fix: if I had left the three duplicate Visa rows in, Visa would have come out $51.44 too low ($39.80 + $38.75 in extra charges, minus $129.99 in extra credit). With them removed, it's exact.

A $0.00 difference proves the arithmetic adds up. It doesn't prove every category is right, and it can't show accounts that weren't uploaded (Discover, Savings, the Toyota loan).

**Questions for you** (9 items, grouped by account; my best guess in brackets):

*Everyday Checking*
1. 2026-10-16, ZELLE FROM JORDAN M, +$45.00. *(My guess: a friend paying you back for a shared dinner, which would reduce Dining Out.)* What was it?
2. 2026-10-25, VENMO CASHOUT, +$60.00. *(My guess: a reimbursement or something sold. Not counted as income until you say.)* What was it?

*Mastercard Cash Back*
3. 2026-09-12, DOORDASH*THAI BASIL, $34.50 twice (R101141 and R101148). *(My guess: a double charge.)* One order or two?
4. APPLE.COM/BILL, $10.99 on 08-17, 09-17, 10-17, and $2.99 on 08-09, 09-09, 10-09. *(My guess: $10.99 is Apple Music and $2.99 is iCloud+ storage. Both are Subscriptions.)* Which services are they?
5. TARGET 00012: 6 charges totalling $442.01 (08-10 $84.21, 08-24 $61.40, 09-07 $88.40, 09-21 $52.95, 10-12 $61.77, 10-26 $93.28). *(My guess: Shopping.)* Are these mostly groceries?
6. THE HOME DEPOT #3612: 2026-08-30 $142.18 and 2026-10-19 $68.90. *(My guess: Shopping.)* Were these home repairs (Housing)?

*Visa Rewards*
7. COSTCO WHSE #1123: 08-13 $184.66, 09-11 $231.34, 10-15 $216.89. The bank calls these "Shopping." *(My guess: Groceries.)* Right?

*Amex Blue*
8. SQ *JMK LLC, $45.00 on 2026-08-19, 2026-09-19 and 2026-10-19. "SQ *" means the merchant was paid through Square, and I can't tell who JMK LLC is. *(My guess: a monthly service of some kind. Uncategorized for now.)* Do you recognize it?

*Joint Checking*
9. 2026-10-06, PLANET FITNESS ANNUAL FEE, $49.00, on top of the $24.99 monthly membership. *(My guess: the gym's yearly fee, in Subscriptions.)* Expected?

---

**Customer:**
1. Jordan paid me back for the Olive Garden dinner on Oct 15.
2. Not sure. Maybe something my spouse sold. Leave it as unknown.
3. We only ordered once.
4. I'm not sure. Use your best judgment and mark it for review.
5. I'm not sure. Use your best judgment and mark it for review.
6. I'm not sure. Use your best judgment and mark it for review.
7. I'm not sure. Use your best judgment and mark it for review.
8. No idea what that is.
9. I'm not sure. Use your best judgment and mark it for review.

---

**Money X-Ray:**

Thanks, Sam. I updated the ledger and reran every check.

- **Zelle from Jordan M, $45.00:** now a **Reimbursement** that offsets Dining Out. It pays back part of the Olive Garden bill ($92.60 on Visa, 2026-10-15).
- **Venmo cashout, $60.00:** left as an **Unknown Inflow**. Not counted as income or as a refund. Marked Needs Review.
- **DoorDash, second $34.50 (R101148):** you ordered once, so this looks like a **merchant double charge**. It stays in the ledger (it really was charged) and is marked Needs Review. You can dispute it with the Mastercard issuer.
- **SQ *JMK LLC, $45.00 a month:** stays **Uncategorized**, Low confidence, Needs Review. Amex can tell you the merchant's full name and contact details if you ask about the charge.
- **Apple, Target, Home Depot, Costco, Planet Fitness annual fee:** I kept my best guesses (Apple Music and iCloud+ in Subscriptions, Target and Home Depot in Shopping, Costco in Groceries, the gym fee in Subscriptions) and marked them Needs Review in the export.

Rerun results: duplicates **Fixed** (3 removed), double charge **flagged for dispute**, card payments **Pass** (9 matched, 3 Discover unmatched by design), transfers **Pass**, refunds and reimbursements **Pass**, reconciliation **Pass** on all 5 accounts at $0.00, coverage gaps unchanged. Verification is complete, with the open items carried into the report as limitations.

**Phase 5: Analysis** is done in code. Here is **Phase 6: the report**.

---

# Your Money X-Ray: August to October 2026

## 1. The one-paragraph answer

Your household takes home **$7,290.00 a month**, and from these five accounts you spend an average of **$5,346.44 a month**. A quarter of it is the mortgage ($1,385.00). Next come groceries ($572.44), utilities ($476.62), shopping ($475.87) and the car loan ($419.00). That leaves about **$1,944 a month** before savings. The three biggest findings: **(1)** Most of what feels like "disappearing" money isn't spent. It's piling up in Joint Checking, which grew by **$4,739.99** in three months. Over the same months the Visa balance you carry grew by **$315.69** to **$6,495.69** and cost **$183.57 in interest**. **(2)** Fees and interest came to **$340.43** in three months ($113.48 a month), and most of it can be avoided. **(3)** You pay for **four services that include video streaming and two music services**, plus a **$45.00 monthly charge you don't recognize** (SQ *JMK LLC), all spread across three different cards. One blind spot: $175.00 a month goes to a Discover card I can't see.

## 2. Verification summary (how much to trust this)

| Item | Result |
|---|---|
| Statements expected (account map) | 8 accounts: Everyday Checking, Joint Checking, Savings XXXX8812, Visa Rewards, Mastercard Cash Back, Amex Blue, Discover, Toyota loan |
| Statements received | 5 of 8, each with 3 full months (2026-08-01 to 2026-10-31) plus a statement summary |
| Missing | Discover card, Savings XXXX8812, Toyota loan |
| Transaction rows processed | 222 |
| Duplicates removed | 3 (Visa rows 37, 38, 39) |
| Card payments excluded from spending | 21 rows: 9 matched pairs (18 rows, $5,500.00 each side) + 3 Discover payments ($525.00) |
| Transfers excluded from spending | 9 rows: 3 matched Everyday-to-Joint pairs ($1,200.00 each side) + 3 transfers to savings ($900.00) |
| Reconciliation | All 5 accounts: **$0.00 difference**. Running balances match on every checking row |
| Possible double charges | 1 (DoorDash, $34.50; you say you ordered once) |
| Open questions | Venmo $60.00 (unknown), SQ *JMK LLC $45.00 a month (unrecognized), Apple, Target, Home Depot, Costco, Planet Fitness annual fee (best guesses) |

## 3. Cash flow by month

| | Aug | Sep | Oct | 3-month total | Monthly avg |
|---|---:|---:|---:|---:|---:|
| Take-home income (both paychecks) | $7,290.00 | $7,290.00 | $7,290.00 | $21,870.00 | $7,290.00 |
| Spending, gross | $5,060.34 | $5,996.19 | $5,176.76 | $16,233.29 | $5,411.10 |
| Less refunds and reimbursements | $0.00 | $129.99 | $63.99 | $193.98 | $64.66 |
| **Spending, net** | $5,060.34 | $5,866.20 | $5,112.77 | $16,039.31 | $5,346.44 |
| **Net (income - net spending)** | $2,229.66 | $1,423.80 | $2,177.23 | $5,830.69 | $1,943.56 |
| Moved to savings (XXXX8812) | $300.00 | $300.00 | $300.00 | $900.00 | $300.00 |
| Paid to Discover (contents unknown) | $175.00 | $175.00 | $175.00 | $525.00 | $175.00 |
| Unknown inflow (Venmo cashout) | $0.00 | $0.00 | $60.00 | $60.00 | $20.00 |
| Left after savings and Discover | $1,754.66 | $948.80 | $1,702.23 | $4,405.69 | $1,468.56 |

"Spending, net" counts only real purchases and bills. Card payments and transfers between your own accounts are left out, so nothing is counted twice. Refunds and Jordan's $45.00 are subtracted.

**Where the leftover went** (three months, checked in code against the statement balances):

| | Change over 3 months |
|---|---:|
| Joint Checking balance | +$4,739.99 (from $960.00 to $5,699.99) |
| Everyday Checking balance | +$39.95 (from $1,840.55 to $1,880.50) |
| Moved to Savings XXXX8812 | +$900.00 |
| Visa Rewards balance owed | **+$315.69 more owed** (from $6,180.00 to $6,495.69) |
| Mastercard Cash Back balance owed | -$7.09 (slightly less owed) |
| Amex Blue balance owed | +$5.65 more owed |
| Paid to Discover (contents unknown) | $525.00 |

These add up exactly: $21,870.00 income + $60.00 unknown Venmo - $16,039.31 spending - $900.00 savings - $525.00 Discover = **$4,465.69**, which equals the cash gained in checking ($4,779.94) minus the extra card debt ($314.25).

![Income vs spending vs savings](../chart_income_vs_spending.png)

## 4. Spending by category

| Category | Aug | Sep | Oct | Monthly avg | Share of spending |
|---|---:|---:|---:|---:|---:|
| Housing | $1,385.00 | $1,385.00 | $1,385.00 | $1,385.00 | 25.9% |
| Groceries | $593.15 | $564.64 | $559.54 | $572.44 | 10.7% |
| Utilities | $500.70 | $481.45 | $447.70 | $476.62 | 8.9% |
| Shopping | $493.73 | $443.09 | $490.80 | $475.87 | 8.9% |
| Debt Payments | $419.00 | $419.00 | $419.00 | $419.00 | 7.8% |
| Dining Out | $277.72 | $373.43 | $286.30 | $312.48 | 5.8% |
| Gas | $191.40 | $178.05 | $201.15 | $190.20 | 3.6% |
| Insurance | $186.40 | $186.40 | $186.40 | $186.40 | 3.5% |
| Childcare | $170.00 | $170.00 | $170.00 | $170.00 | 3.2% |
| Health | $200.48 | $184.75 | $111.70 | $165.64 | 3.1% |
| Gifts & Donations | $150.00 | $150.00 | $150.00 | $150.00 | 2.8% |
| Subscriptions | $124.42 | $126.92 | $175.92 | $142.42 | 2.7% |
| Transportation | $0.00 | $284.70 | $79.99 | $121.56 | 2.3% |
| Fees & Interest | $62.34 | $197.62 | $80.47 | $113.48 | 2.1% |
| Pets | $64.20 | $203.75 | $61.30 | $109.75 | 2.1% |
| Travel | $0.00 | $312.40 | $0.00 | $104.13 | 1.9% |
| Entertainment | $54.80 | $118.00 | $72.00 | $81.60 | 1.5% |
| Cash & ATM | $100.00 | $0.00 | $100.00 | $66.67 | 1.2% |
| Personal Care | $42.00 | $42.00 | $90.50 | $58.17 | 1.1% |
| Uncategorized | $45.00 | $45.00 | $45.00 | $45.00 | 0.8% |
| **Total** | $5,060.34 | $5,866.20 | $5,112.77 | $5,346.44 | 100% |

![Average monthly spending by category](../chart_category_average.png)

![Top categories by month](../chart_category_by_month.png)

**Month-over-month changes over 15% and $25**, with the transactions behind them:

| Category | Change | What drove it |
|---|---|---|
| Dining Out | Aug to Sep: +$95.71 (+34%) | DoorDash $69.00 (two $34.50 charges on 09-12, one likely a double charge), more Starbucks (+$9.25), Outback +$7.70 |
| Dining Out | Sep to Oct: -$87.13 (-23%) | No DoorDash (-$69.00), Jordan's $45.00 payback; Olive Garden $92.60 replaced Outback $96.10 |
| Transportation | Aug to Sep: +$284.70 | Firestone Auto $284.70 (09-18, Mastercard) |
| Transportation | Sep to Oct: -$204.71 (-72%) | Firestone not repeated; Jiffy Lube $79.99 (10-29) |
| Subscriptions | Sep to Oct: +$49.00 (+39%) | Planet Fitness annual fee $49.00 (10-06) |
| Health | Sep to Oct: -$73.05 (-40%) | Labcorp $112.60 in Sep not repeated; CVS up $39.55 |
| Personal Care | Sep to Oct: +$48.50 (+115%) | Sephora $48.50 (10-14) |
| Entertainment | Aug to Sep: +$63.20; Sep to Oct: -$46.00 | Ticketmaster (NC State) $118.00 in Sep; AMC $54.80 in Aug; Sky Zone $72.00 in Oct |
| Travel | Sep only: $312.40 | Delta Air Lines (09-02, Amex) |
| Pets | Aug to Sep: +$139.55; Sep to Oct: -$142.45 | Banfield Pet Hospital $145.00 (09-14) |
| Cash & ATM | $100 in Aug, $0 in Sep, $100 in Oct | 7-Eleven ATM withdrawals (08-22, 10-22) |
| Fees & Interest | Aug to Sep: +$135.28; Sep to Oct: -$117.15 | Mastercard annual fee $95.00 and Amex late fee $29.00 in Sep |

Most of these are one-off purchases, not habits getting worse. Two smaller patterns are rising steadily: Uber Eats orders ($48.20, then $54.75, then $62.10) and Starbucks ($20.00, then $29.25, then $37.65 a month).

## 5. Subscriptions and recurring charges

A charge counts as recurring only when the same merchant shows up at a regular interval with a similar amount. Regular shopping trips (Kroger, Costco, Shell, Starbucks, Chipotle and so on) aren't listed here, because you choose each one.

| Merchant | Account | Frequency | Latest | Annualized | First seen | Last seen | Flags |
|---|---|---|---:|---:|---|---|---|
| Rocket Mortgage | Everyday Checking | Monthly | $1,385.00 | $16,620.00 | 2026-08-01 | 2026-10-01 |  |
| Toyota Financial | Joint Checking | Monthly | $419.00 | $5,028.00 | 2026-08-02 | 2026-10-02 |  |
| GEICO | Everyday Checking | Monthly | $186.40 | $2,236.80 | 2026-08-10 | 2026-10-10 |  |
| Kids R Kids Afterschool | Joint Checking | Monthly | $170.00 | $2,040.00 | 2026-08-05 | 2026-10-05 |  |
| Duke Energy | Everyday Checking | Monthly | $128.60 | $1,956.60 | 2026-08-03 | 2026-10-03 | variable amount; annualized from 3-month average $163.05 |
| First Baptist Church | Everyday Checking | Monthly | $150.00 | $1,800.00 | 2026-08-01 | 2026-10-01 |  |
| Verizon Wireless | Everyday Checking | Monthly | $142.00 | $1,704.00 | 2026-08-22 | 2026-10-22 |  |
| Comcast Xfinity | Everyday Checking | Monthly | $80.00 | $960.00 | 2026-08-05 | 2026-10-05 |  |
| Visa interest charge | Visa Rewards | Monthly | $63.11 | $734.28 | 2026-08-25 | 2026-10-25 | variable amount; annualized from 3-month average $61.19; interest on carried balance; avoidable by paying the balance down |
| City of Raleigh Utilities | Everyday Checking | Monthly | $55.35 | $701.80 | 2026-08-26 | 2026-10-26 | variable amount; annualized from 3-month average $58.48 |
| SQ *JMK LLC (unknown) | Amex Blue | Monthly | $45.00 | $540.00 | 2026-08-19 | 2026-10-19 | UNRECOGNIZED merchant: user does not know it |
| Great Clips | Amex Blue | Monthly | $42.00 | $504.00 | 2026-08-06 | 2026-10-09 | regular haircut visits, not a contract |
| Piedmont Natural Gas | Everyday Checking | Monthly | $41.75 | $397.00 | 2026-08-04 | 2026-10-04 | variable amount; annualized from 3-month average $33.08 |
| Planet Fitness | Joint Checking | Monthly | $24.99 | $299.88 | 2026-08-06 | 2026-10-06 |  |
| Spotify | Visa Rewards | Monthly | $19.99 | $239.88 | 2026-08-11 | 2026-10-11 | OVERLAP: two music services (Spotify + likely Apple Music) |
| Hulu | Amex Blue | Monthly | $18.99 | $227.88 | 2026-08-03 | 2026-10-03 | OVERLAP: 4 services with video streaming (Netflix, Hulu, Disney+, Prime Video) across 3 cards |
| Netflix | Visa Rewards | Monthly | $17.99 | $215.88 | 2026-08-04 | 2026-10-04 | PRICE INCREASE $15.49 -> $17.99 on 2026-09-04; OVERLAP: 4 services with video streaming (Netflix, Hulu, Disney+, Prime Video) across 3 cards |
| Disney+ | Amex Blue | Monthly | $15.99 | $191.88 | 2026-08-03 | 2026-10-03 | OVERLAP: 4 services with video streaming (Netflix, Hulu, Disney+, Prime Video) across 3 cards |
| Amazon Prime | Mastercard Cash Back | Monthly | $14.99 | $179.88 | 2026-08-07 | 2026-10-07 | OVERLAP: 4 services with video streaming (Netflix, Hulu, Disney+, Prime Video) across 3 cards |
| Monthly maintenance fee | Everyday Checking | Monthly | $12.00 | $144.00 | 2026-09-30 | 2026-10-31 | avoidable fee; charged Sep and Oct only |
| Apple.com/bill (likely Apple Music) | Mastercard Cash Back | Monthly | $10.99 | $131.88 | 2026-08-17 | 2026-10-17 | OVERLAP: two music services (Spotify + likely Apple Music); Apple service not confirmed (user unsure) |
| Mastercard annual fee | Mastercard Cash Back | Annual | $95.00 | $95.00 | 2026-09-01 | 2026-09-01 | possibly annual (only one seen); next expected ~2027-09-01, not within 60 days |
| Planet Fitness (annual fee) | Joint Checking | Annual | $49.00 | $49.00 | 2026-10-06 | 2026-10-06 | possibly annual (only one seen); next expected ~2027-10-06, not within 60 days |
| Apple.com/bill (likely iCloud+) | Mastercard Cash Back | Monthly | $2.99 | $35.88 | 2026-08-09 | 2026-10-09 | Apple service not confirmed (user unsure) |

**Flags**
- **Price increase:** Netflix went from $15.49 (Aug) to $17.99 (Sep and Oct), +$2.50 a month, +$30.00 a year.
- **Overlapping video:** Netflix ($17.99), Hulu ($18.99), Disney+ ($15.99), plus Amazon Prime ($14.99), which includes Prime Video. That's $67.96 a month, $815.52 a year. (Prime also covers shipping, so it isn't only video.)
- **Overlapping music:** Spotify ($19.99, Visa) and what is most likely Apple Music ($10.99, Mastercard).
- **Spread across accounts:** your subscriptions sit on three different cards (Visa: Netflix, Spotify; Amex: Hulu, Disney+; Mastercard: Prime, Apple). No single service is charged on two accounts, but the spread makes them easy to lose track of.
- **Unrecognized:** SQ *JMK LLC, $45.00 on the 19th of each month on Amex. $540.00 a year.
- **Upcoming annual renewals (next 60 days):** none expected from what I can see. The Mastercard $95.00 fee (Sep 1) and the Planet Fitness $49.00 fee (Oct 6) each appear once, so they're "possibly annual," next due around September and October 2027. Three months of history can't show older annual charges.

## 6. Fees and interest

| Date | Account | Fee | Amount | How it is usually avoided |
|---|---|---|---:|---|
| 2026-08-22 | Everyday Checking | Non-network ATM fee | $3.50 | Use your bank's own ATMs, or get cash back at a store checkout |
| 2026-08-25 | Visa Rewards | Visa interest charge | $58.84 | Pay the full statement balance; until then, every dollar paid down shrinks it |
| 2026-09-01 | Mastercard Cash Back | Mastercard annual fee | $95.00 | Ask for a no-fee version of the card, or check the cash back earned covers $95 |
| 2026-09-25 | Visa Rewards | Visa interest charge | $61.62 | Pay the full statement balance; until then, every dollar paid down shrinks it |
| 2026-09-26 | Amex Blue | Amex late fee | $29.00 | Set autopay for at least the minimum payment before the due date |
| 2026-09-30 | Everyday Checking | Monthly maintenance fee | $12.00 | Ask the bank what waives it (often a minimum balance or a direct deposit into this account) |
| 2026-10-08 | Amex Blue | Amex foreign transaction fee | $1.86 | Use a card with no foreign transaction fee for overseas sellers |
| 2026-10-22 | Everyday Checking | Non-network ATM fee | $3.50 | Use your bank's own ATMs, or get cash back at a store checkout |
| 2026-10-25 | Visa Rewards | Visa interest charge | $63.11 | Pay the full statement balance; until then, every dollar paid down shrinks it |
| 2026-10-31 | Everyday Checking | Monthly maintenance fee | $12.00 | Ask the bank what waives it (often a minimum balance or a direct deposit into this account) |
| | | **Total, 3 months** | **$340.43** | |

That's **$340.43 in three months**, or $113.48 a month. Over half of it ($183.57) is Visa interest. Interest is what the card charges you for carrying a balance from one month to the next. The Visa statement lists your APR.

## 7. Worth reviewing (candidate money leaks)

These are things to look at, not cuts you've agreed to. Each figure comes from the rows listed.

| Item | Monthly | Annual | Source rows |
|---|---:|---:|---|
| Visa interest on the carried balance. Meanwhile Joint Checking gained $4,739.99 in 3 months | $61.19 avg | $734.28 | `visa_rewards.csv` rows 15, 32, 54 |
| Video overlap: Netflix + Hulu + Disney+ + Prime | $67.96 | $815.52 | Visa 4, 20, 42; Amex 3, 13, 27 and 4, 14, 28; Mastercard 2, 11, 24 |
| Food delivery (Uber Eats + DoorDash), rising each month | $78.02 avg | $936.20 | Visa 10, 27, 53; Mastercard 15, 16 |
| Unrecognized SQ *JMK LLC | $45.00 | $540.00 | `amex_blue.csv` rows 9, 21, 36 |
| Checking monthly maintenance fee (Sep and Oct) | $12.00 | $144.00 | `everyday_checking.csv` rows 34, 54 |
| Music overlap: likely Apple Music next to Spotify | $10.99 | $131.88 | `mastercard_cashback.csv` rows 7, 19, 28 |
| Mastercard annual fee | $7.92 | $95.00 | `mastercard_cashback.csv` row 12 |
| Netflix price increase | $2.50 | $30.00 | `visa_rewards.csv` rows 4, 20 |
| Non-network ATM fees (2 in 3 months) | $2.33 | $28.00 | `everyday_checking.csv` rows 16, 50 |
| Possible DoorDash double charge (one-time) | n/a | $34.50 once | `mastercard_cashback.csv` row 16 |
| Amex late fee (one-time so far) | n/a | $29.00 once | `amex_blue.csv` row 24 |
| Foreign transaction fee (one-time) | n/a | $1.86 once | `amex_blue.csv` row 31 |

The rows overlap in places (Netflix appears in both the video line and the price-increase line), so don't add the column up as one total.

## 8. Limitations

- **Discover card not supplied.** $525.00 went to it in 3 months. Whatever was bought on it is missing from every spending number above, so your real spending is probably higher.
- **Savings XXXX8812 not supplied.** I can see $900.00 going in, but not its balance or any withdrawals.
- **Toyota loan statement not supplied.** The $419.00 payments are in Debt Payments. I can't split interest from principal (the part that pays down the loan), and I can't show the balance. A loan payment isn't wasted money.
- **Unresolved:** Venmo cashout $60.00 (Unknown Inflow, not counted as income) and SQ *JMK LLC (unrecognized).
- **Best guesses, marked Needs Review:** Apple charges (Apple Music / iCloud+), Target ($442.01; might be partly groceries), Home Depot ($211.08; might be home repairs), Costco ($632.89 as Groceries; the bank calls it Shopping), Planet Fitness annual fee, CVS and Walgreens (Health; might include personal-care items), Amazon Marketplace (contents not visible).
- **Cash:** $200.00 in ATM withdrawals. I can't see what the cash bought.
- **Three months only.** Annual and quarterly charges can't be fully seen yet.
- **Reconciliation** proves the arithmetic adds up. It doesn't prove every category is right.

---

**Which of these do you want to change?**

---

**Customer:** Cancel Hulu, cancel Apple Music (keep Spotify), and look into the unknown SQ *JMK LLC charge. Keep everything else for now.

---

**Money X-Ray:**

Got it. Here's your plan, using only what you confirmed.

## 9. Recovery plan

| Rank | Action | Monthly | Annual | Ease | Status |
|---:|---|---:|---:|---|---|
| 1 | **Cancel Hulu** on the Amex Blue card (charged the 3rd of each month, `amex_blue.csv` rows 3, 13, 27). The next charge should land around December 3, so cancel before then. | $18.99 | $227.88 | Easy, 5 minutes in your Hulu account | Confirmed potential savings |
| 2 | **Cancel Apple Music** (the $10.99 APPLE.COM/BILL on Mastercard Cash Back, the 17th of each month, rows 7, 19, 28). Keep Spotify. On an iPhone: Settings > your name > Subscriptions. Check it's Apple Music before you cancel; leave the $2.99 charge (likely iCloud+) alone. | $10.99 | $131.88 | Easy | Confirmed potential savings |
| 3 | **Look into SQ *JMK LLC** ($45.00 on Amex on the 19th, rows 9, 21, 36). Call Amex or open the charge in the Amex app and ask for the merchant's full name and contact details. If it's nothing you signed up for, ask Amex to dispute it and block future charges. | up to $45.00 | up to $540.00 | Medium, one phone call | Investigating: not counted until you know what it is |

**Total confirmed potential savings: $29.98 a month, $359.76 a year.**
If SQ *JMK LLC turns out to be something you don't want: **$74.98 a month, $899.76 a year.**

**Against your $300-a-month goal:** these choices free up about $30 a month for sure, and up to $75 if JMK goes. That's well short of $300, and I'd rather say so plainly. You chose to keep everything else, which is your call. If you want to revisit later, the larger items on the "worth reviewing" list are the Visa interest ($61.19 a month, while Joint Checking gained $4,739.99 in three months), the overlapping video services ($67.96 a month together) and food delivery ($78.02 a month). One more thing outside the plan: you said you ordered DoorDash only once, so the second $34.50 charge on 2026-09-12 may be worth disputing with Mastercard. It's a one-time refund, not monthly savings, and I've left it out of the plan because you didn't choose it. Tell me if you want it added.

**Phase 7: Export.** Do you want me to create the two CSV files for your Notion dashboard?
- `Money_XRay_Transactions_2026-10.csv`: every row, including the 3 excluded duplicates and all card payments and transfers, with verification status and source row, so you can audit it.
- `Money_XRay_Subscriptions_2026-10.csv`: the recurring-charges table with your decisions filled in.

---

**Customer:** I'm not sure. Use your best judgment and mark it for review.

---

**Money X-Ray:**

I'll take that as a yes. Here are both files.

- **`Money_XRay_Transactions_2026-10.csv`**: 222 rows, with the columns `txn_id, date, account_alias, merchant, description_raw, category, amount, direction, type, counts_as_spending, recurring, verification, confidence, source_file, source_row, import_batch, notes`. `import_batch` is `2026-08_to_2026-10` on every row. `txn_id` is built from the file, date, amount and reference ID (or the row number for checking accounts, which have no reference), for example `VIS-20260928-39.80-R100714`. The three excluded duplicates have `-dup-row37` (and so on) added so every ID stays unique. Verification status: 193 rows Verified, 26 Needs Review, 3 Excluded - Duplicate.
- **`Money_XRay_Subscriptions_2026-10.csv`**: 24 recurring charges with `user_decision` filled in: Hulu = Cancel, likely Apple Music = Cancel (keep Spotify), SQ *JMK LLC = Investigate, everything else = Keep for now.

When you come back next month, say it's your **monthly checkup**. Bring November's statements and this transactions file, and I'll check that Hulu and Apple Music really stopped charging, and that nothing new has appeared.
