# Money X-Ray transcript

**Money X-Ray:**

Hi, I'm Money X-Ray. I help you find out where your money actually goes, using statements you download from your own accounts.

Quick note: I'm not an accountant, auditor or financial adviser, and this isn't a professional audit. It's an educational look at your own money.

**Privacy tip:** before you upload anything, blank out full account numbers, your name and your address. Your AI provider's data policy applies to whatever you share here. I'll never ask for passwords, logins, full account numbers or Social Security numbers.

A few questions. Answer in one message; any answer can be "skip".

1. What should I call you?
2. About how much comes in each month after tax, from where, and on which days? Include money that never hits a bank: cash tips, side jobs paid in cash, selling things.
3. List every account you use with a nickname: checking, savings, credit cards, loans, buy-now-pay-later, and apps that hold money (Venmo, Cash App, PayPal). No account numbers.
4. Which account pays which? For example: "Everyday Checking pays the Visa."
5. Any debts you carry: card balances, car, student or personal loans?
6. Do friends or family pay you back through Zelle, Venmo or Cash App?
7. What do you want from this? For example: "find where my paycheck goes" or "free up $300 a month."

---

**Sam:**

1. Call me Sam.
2. I take home about $4,370 a month from Acme Logistics, paid on the 1st and 15th. My spouse takes home about $2,920 a month from Wake County Schools, also the 1st and 15th.
3. Accounts: Everyday Checking, Joint Checking, Visa Rewards (credit card), Mastercard Cash Back (credit card), Amex Blue (credit card).
4. Everyday Checking pays the Visa and the Amex, and moves $400 a month to Joint Checking. Joint Checking pays the Mastercard.
5. Debts: a Toyota car loan, and we carry a balance on the Visa, around $6,000. I don't know the rate.
6. Friends sometimes Zelle us back when we split dinner.
7. We make decent money but never seem to get ahead. I want to know where it goes and find about $300 a month to free up.

---

**Money X-Ray:**

Thanks, Sam. Here's your account map. Please confirm it or correct it.

| Nickname | Type | Paid from |
|---|---|---|
| Everyday Checking | Checking (your Acme pay lands here) | n/a. Pays Visa Rewards and Amex Blue; sends $400/month to Joint Checking |
| Joint Checking | Checking (spouse's Wake County pay lands here) | n/a. Pays Mastercard Cash Back |
| Visa Rewards | Credit card, carries a balance of about $6,000 | Everyday Checking |
| Mastercard Cash Back | Credit card | Joint Checking |
| Amex Blue | Credit card | Everyday Checking |
| Toyota car loan | Loan | Not stated yet; I'll find it in the statements |

Income on paper: $4,370 + $2,920 = **$7,290 a month**, paid on the 1st and 15th. No cash income listed yet.

Your goal: see where it goes and free up about **$300 a month**.

**Next: statements.** Please send 3 months (up to 6 is better) for every bank account and every credit card above. The car loan doesn't need one; the payments in checking are enough.

- **CSV is best.** Look for a "Download" or "Export" button on the transactions page. PDFs work if they're real text, not scans.
- **One account at a time.** That keeps each step inside free-plan limits.
- **If uploads are blocked or used up:** open the CSV in a text editor or spreadsheet, copy the rows and paste them here. If it's too long, send one month at a time.
- Include the opening and closing balance if the statement shows them.

If the map is right, start with **Everyday Checking**.

---

**Sam:**

The map is right. Here's Everyday Checking. *(uploads `everyday_checking.csv`, plus `statement_summaries.csv`, the balance summary page for all five accounts)*

---

**Money X-Ray:**

**Everyday Checking: read.** 2026-08-01 to 2026-10-31, 53 rows. Money in is positive, money out is negative, and there's a running balance column.

**Duplicates:** this file has no reference ID column, so I can't safely remove anything without asking. I checked for rows with the same date, amount and description and found none, so nothing to remove. **0 removed.**

**Balance check (done in code):** Opening $1,840.55 + money in $13,215.00 - money out $13,175.05 = $1,880.50. Statement closing $1,880.50. **Difference $0.00.** I also re-ran the running balance row by row; every row matches the bank's balance column.

**What I labelled (all sums in code):**
- **Income:** Acme Logistics pay, $2,185.00 on the 1st and 15th = $4,370.00 every month. Matches what you told me.
- **Card Payments (not spending):** CHASE CARD EPAY = Visa Rewards ($700 / $800 / $750). AMEX EPAYMENT = Amex Blue ($250 / $825 / $400).
- **Transfers (not spending):** $400 to Joint Checking each month.
- **Expenses:** Rocket Mortgage $1,385 (Housing; a mortgage is a loan, but I'm keeping it in Housing so your home cost is in one place), Duke Energy, Piedmont Natural Gas, Comcast, Verizon, City of Raleigh (Utilities), GEICO (Insurance), First Baptist giving (Gifts & Donations), ATM cash (Cash & ATM), ATM and maintenance fees (Fees & Interest).

**Questions (one list):**

| Date | Description | Amount | My best guess |
|---|---|---|---|
| 08-20, 09-20, 10-20 | DISCOVER E-PAYMENT | $175.00 each | A card payment, but there's no Discover card on your map. Is there a Discover card? |
| 08-28, 09-28, 10-28 | TRANSFER TO SAVINGS XXXX8812 | $300.00 each | Your own savings account (not on the map). Saving, not spending? |
| 10-16 | ZELLE FROM JORDAN M | +$45.00 | A friend paying you back for a dinner? Which one? |
| 10-25 | VENMO CASHOUT | +$60.00 | Money moved out of Venmo. From what? |
| 08-22, 10-22 | ATM WITHDRAWAL 7-ELEVEN | $100.00 each | Cash. I'll ask what it paid for after the last statement. |

---

**Sam:**

- Discover: "Oh right, I forgot. We have a Discover card. I don't have that statement handy, go ahead without it."
- Savings XXXX8812: "Yes, that's our savings account."
- Jordan M: "Jordan paid me back for the Olive Garden dinner on Oct 15."
- Venmo $60: "Not sure. Maybe something my spouse sold. Leave it as unknown."

---

**Money X-Ray:**

Updated:
- **Discover card** added to the map (credit card, paid from Everyday Checking, no statement). $175/month goes to it, so **anything bought on the Discover is invisible to me**. I'll list it in Limitations.
- **Savings XXXX8812** added to the map. $300/month = **saving**, not spending.
- **Jordan's $45** = **Reimbursement** for Olive Garden on 10-15. It reduces October Dining Out. (Olive Garden itself will be on a card, so this account shows Dining Out as -$45.00 for now; it nets out when I combine accounts.)
- **Venmo $60** stays **Unknown Inflow**, marked for review. I won't count it as income.

Net spending in this account, by month (expenses minus refunds and reimbursements):

| Category | 2026-08 | 2026-09 | 2026-10 |
|---|---|---|---|
| Housing | $1,385.00 | $1,385.00 | $1,385.00 |
| Utilities | $500.70 | $481.45 | $447.70 |
| Dining Out | $0.00 | $0.00 | -$45.00 |
| Insurance | $186.40 | $186.40 | $186.40 |
| Gifts & Donations | $150.00 | $150.00 | $150.00 |
| Cash & ATM | $100.00 | $0.00 | $100.00 |
| Fees & Interest | $3.50 | $12.00 | $15.50 |
| **Total** | **$2,325.60** | **$2,214.85** | **$2,239.60** |

```
CHECKPOINT | Everyday Checking | 2026-08-01 to 2026-10-31
Rows: 53 | Duplicates removed: 0 | Balance check: $0.00
Net spending by month: 2026-08: Housing $1,385.00; Utilities $500.70; Insurance $186.40; Gifts & Donations $150.00; Cash & ATM $100.00; Fees & Interest $3.50 | Total $2,325.60 || 2026-09: Housing $1,385.00; Utilities $481.45; Insurance $186.40; Gifts & Donations $150.00; Fees & Interest $12.00 | Total $2,214.85 || 2026-10: Housing $1,385.00; Utilities $447.70; Dining Out -$45.00; Insurance $186.40; Gifts & Donations $150.00; Cash & ATM $100.00; Fees & Interest $15.50 | Total $2,239.60
Income by month: 2026-08 $4,370.00; 2026-09 $4,370.00; 2026-10 $4,370.00
Card payments and transfers: 2026-08-08 out $400.00 TRANSFER TO JOINT CHK XXXX4471 (to Joint Checking); 2026-08-12 out $700.00 CHASE CARD EPAY (to Visa Rewards); 2026-08-18 out $250.00 AMEX EPAYMENT ACH PMT (to Amex Blue); 2026-08-20 out $175.00 DISCOVER E-PAYMENT (to Discover card - forgotten account, now on map, no statement); 2026-08-28 out $300.00 TRANSFER TO SAVINGS XXXX8812 (to savings XXXX8812 - confirmed savings, now on map); 2026-09-08 out $400.00 TRANSFER TO JOINT CHK XXXX4471 (to Joint Checking); 2026-09-12 out $800.00 CHASE CARD EPAY (to Visa Rewards); 2026-09-18 out $825.00 AMEX EPAYMENT ACH PMT (to Amex Blue); 2026-09-20 out $175.00 DISCOVER E-PAYMENT (to Discover card - forgotten account, now on map, no statement); 2026-09-28 out $300.00 TRANSFER TO SAVINGS XXXX8812 (to savings XXXX8812 - confirmed savings, now on map); 2026-10-08 out $400.00 TRANSFER TO JOINT CHK XXXX4471 (to Joint Checking); 2026-10-12 out $750.00 CHASE CARD EPAY (to Visa Rewards); 2026-10-18 out $400.00 AMEX EPAYMENT ACH PMT (to Amex Blue); 2026-10-20 out $175.00 DISCOVER E-PAYMENT (to Discover card - forgotten account, now on map, no statement); 2026-10-28 out $300.00 TRANSFER TO SAVINGS XXXX8812 (to savings XXXX8812 - confirmed savings, now on map)
Recurring: Rocket Mortgage $1,385.00 monthly (08-01, 09-01, 10-01); First Baptist Church $150.00 monthly (08-01, 09-01, 10-01); Duke Energy $189.40 / $171.15 / $128.60 monthly, varies (08-03, 09-03, 10-03); Piedmont Natural Gas $28.10 / $29.40 / $41.75 monthly, varies (08-04, 09-04, 10-04); Comcast Xfinity $80.00 monthly (08-05, 09-05, 10-05); GEICO $186.40 monthly (08-10, 09-10, 10-10); Verizon Wireless $142.00 monthly (08-22, 09-22, 10-22); City of Raleigh Utilities $61.20 / $58.90 / $55.35 monthly, varies (08-26, 09-26, 10-26); Monthly maintenance fee $12.00 monthly (09-30, 10-31)
Fees and interest: 2026-08-22 NON-NETWORK ATM FEE $3.50; 2026-09-30 MONTHLY MAINTENANCE FEE $12.00; 2026-10-22 NON-NETWORK ATM FEE $3.50; 2026-10-31 MONTHLY MAINTENANCE FEE $12.00
Flags: DISCOVER E-PAYMENT $175/mo to a card with no statement (spending invisible); Savings XXXX8812 not on original map (confirmed savings); ATM non-network fee twice; monthly maintenance fee charged in Sep and Oct but not Aug; Venmo cashout $60 unexplained
Open questions: Venmo cashout $60 on 10-25 (Sam unsure, left as Unknown Inflow); what the two $100 ATM withdrawals paid for (asked in Step 3B); Discover statement not provided
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

Next, please send **Joint Checking**.

---

**Sam:**

Here's Joint Checking. *(uploads `joint_checking.csv`)*

---

**Money X-Ray:**

**Joint Checking: read.** 2026-08-01 to 2026-10-28, 45 rows. Separate Debit and Credit columns, plus a running balance.

**Duplicates:** no reference IDs; no rows share the same date, amount and description. **0 removed.**

**Balance check:** Opening $960.00 + money in $9,978.99 - money out $5,239.00 = $5,699.99. Statement closing $5,699.99. **Difference $0.00.** The running balance matches on every row.

**Labels:**
- **Income:** Wake County Schools, $1,460.00 on the 1st and 15th = $2,920.00/month. Matches.
- **Transfer in:** $400 from Everyday Checking each month (matches the transfers out, 1 day later).
- **Card Payment:** CITI AUTOPAY ($450 / $875 / $450) = Mastercard Cash Back, per your map.
- **Toyota Financial $419.00** monthly = your car loan (Debt Payments). The statement doesn't show how much is interest.
- **Refund:** Kroger $18.99 on 10-20 reduces October Groceries.
- Kroger (Groceries), Kids R Kids Afterschool (Childcare), Planet Fitness $24.99/month plus a **$49.00 annual fee** on 10-06 (Subscriptions), Atrium Health, CVS, LabCorp, Smile Dental (Health).

| Category | 2026-08 | 2026-09 | 2026-10 |
|---|---|---|---|
| Groceries | $408.49 | $333.30 | $342.65 |
| Subscriptions | $24.99 | $24.99 | $73.99 |
| Health | $173.15 | $184.75 | $111.70 |
| Childcare | $170.00 | $170.00 | $170.00 |
| Debt Payments | $419.00 | $419.00 | $419.00 |
| **Total** | **$1,195.63** | **$1,132.04** | **$1,117.34** |

**Something to notice:** this account's balance went from $960.00 to $5,699.99, up $4,739.99 in three months. Money is building up here. I'll come back to this in the report.

No questions on this account. Everything here is clear.

```
CHECKPOINT | Joint Checking | 2026-08-01 to 2026-10-28
Rows: 45 | Duplicates removed: 0 | Balance check: $0.00
Net spending by month: 2026-08: Groceries $408.49; Subscriptions $24.99; Health $173.15; Childcare $170.00; Debt Payments $419.00 | Total $1,195.63 || 2026-09: Groceries $333.30; Subscriptions $24.99; Health $184.75; Childcare $170.00; Debt Payments $419.00 | Total $1,132.04 || 2026-10: Groceries $342.65; Subscriptions $73.99; Health $111.70; Childcare $170.00; Debt Payments $419.00 | Total $1,117.34
Income by month: 2026-08 $2,920.00; 2026-09 $2,920.00; 2026-10 $2,920.00
Card payments and transfers: 2026-08-09 in $400.00 TRANSFER FROM EVERYDAY XXXX2290 (from Everyday Checking); 2026-08-14 out $450.00 CITI AUTOPAY (to Mastercard Cash Back); 2026-09-09 in $400.00 TRANSFER FROM EVERYDAY XXXX2290 (from Everyday Checking); 2026-09-14 out $875.00 CITI AUTOPAY (to Mastercard Cash Back); 2026-10-09 in $400.00 TRANSFER FROM EVERYDAY XXXX2290 (from Everyday Checking); 2026-10-14 out $450.00 CITI AUTOPAY (to Mastercard Cash Back)
Recurring: Toyota Financial $419.00 monthly (08-02, 09-02, 10-02); Kids R Kids Afterschool $170.00 monthly (08-05, 09-05, 10-05); Planet Fitness $24.99 monthly (08-06, 09-06, 10-06); Planet Fitness annual fee $49.00 annual (10-06)
Fees and interest: none
Flags: Planet Fitness annual fee $49.00 on 10-06 on top of $24.99/mo; balance rose from $960.00 to $5,699.99
Open questions: none
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

Next, please send **Visa Rewards**.

---

**Sam:**

Here's Visa Rewards. *(uploads `visa_rewards.csv`)*

---

**Money X-Ray:**

**Visa Rewards: read.** 2026-08-02 to 2026-10-30, 55 rows. **Purchases are negative and payments/returns are positive in this file.** It also has the bank's own category column, which I treat as a hint only.

**Export duplicates removed: 3.** Same date, amount, description **and** reference ID, where two downloads overlapped. I kept one copy of each:

| Date | Description | Amount | Reference | File rows |
|---|---|---|---|---|
| 2026-09-28 | SHELL OIL 57442 | $39.80 | R100714 | rows 34 and 37 |
| 2026-09-30 | CHIPOTLE 2291 | $38.75 | R100847 | rows 36 and 38 |
| 2026-09-29 | AMAZON MKTPL*2K4TR8 | $129.99 | R100945 | rows 35 and 39 |

**Balance check (after removing duplicates):** Opening $6,180.00 + charges $2,695.68 - payments and credits $2,379.99 = $6,495.69. Statement closing $6,495.69. **Difference $0.00.**

**Labels:**
- **Card Payments:** $700 (08-13), $800 (09-13), $750 (10-13), all from Everyday Checking.
- **Refund:** Amazon return $129.99 on 09-29 reduces Shopping.
- **Costco Warehouse** is labelled "Shopping" by the bank. I put it in **Groceries** (a warehouse club is usually groceries). **Costco Gas** goes to **Gas**.
- **Purchase interest charge** every month: $58.84, $61.62, $63.11 (Fees & Interest). "Interest" is what the bank charges you for carrying a balance from month to month.
- Netflix and Spotify go to Subscriptions (the bank says Entertainment). **Netflix went up from $15.49 to $17.99 in September.**
- Restaurants and Uber Eats go to Dining Out; Shell to Gas; Amazon Marketplace to Shopping.

| Category | 2026-08 | 2026-09 | 2026-10 |
|---|---|---|---|
| Groceries | $184.66 | $231.34 | $216.89 |
| Dining Out | $257.72 | $275.18 | $293.65 |
| Gas | $191.40 | $178.05 | $201.15 |
| Subscriptions | $35.48 | $37.98 | $37.98 |
| Shopping | $109.61 | $38.64 | $92.39 |
| Fees & Interest | $58.84 | $61.62 | $63.11 |
| **Total** | **$837.71** | **$822.81** | **$905.17** |

**About the balance:** you paid $2,250.00 into this card over three months, but charges and interest were $2,695.68, so the balance went **up** from $6,180.00 to $6,495.69. Interest alone was $183.57.

No questions on this account.

```
CHECKPOINT | Visa Rewards | 2026-08-02 to 2026-10-30
Rows: 55 | Duplicates removed: 3 | Balance check: $0.00
Net spending by month: 2026-08: Groceries $184.66; Dining Out $257.72; Gas $191.40; Subscriptions $35.48; Shopping $109.61; Fees & Interest $58.84 | Total $837.71 || 2026-09: Groceries $231.34; Dining Out $275.18; Gas $178.05; Subscriptions $37.98; Shopping $38.64; Fees & Interest $61.62 | Total $822.81 || 2026-10: Groceries $216.89; Dining Out $293.65; Gas $201.15; Subscriptions $37.98; Shopping $92.39; Fees & Interest $63.11 | Total $905.17
Income by month: 2026-08 $0.00; 2026-09 $0.00; 2026-10 $0.00
Card payments and transfers: 2026-08-13 in $700.00 Payment Thank You-Mobile (from Everyday Checking); 2026-09-13 in $800.00 Payment Thank You-Mobile (from Everyday Checking); 2026-10-13 in $750.00 Payment Thank You-Mobile (from Everyday Checking)
Recurring: Netflix $15.49 / $17.99 / $17.99 monthly, varies (08-04, 09-04, 10-04); Spotify $19.99 monthly (08-11, 09-11, 10-11); Purchase interest charge $58.84 / $61.62 / $63.11 monthly, varies (08-25, 09-25, 10-25)
Fees and interest: 2026-08-25 PURCHASE INTEREST CHARGE $58.84; 2026-09-25 PURCHASE INTEREST CHARGE $61.62; 2026-10-25 PURCHASE INTEREST CHARGE $63.11
Flags: 3 export duplicates removed (R100714, R100847, R100945); Netflix price increase $15.49 -> $17.99 from 09-04; interest every month; balance grew $315.69 despite $2,250.00 in payments
Open questions: none
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

Next, please send **Mastercard Cash Back**.

---

**Sam:**

Here's the Mastercard. *(uploads `mastercard_cashback.csv`)*

---

**Money X-Ray:**

**Mastercard Cash Back: read.** 2026-08-07 to 2026-10-29, 30 rows. **Charges are positive, payments are negative** in this file.

**Duplicates:** none removed. But there's a **possible double charge**: DoorDash (Thai Basil), $34.50 twice on 09-12, with **different** reference IDs (R101141 and R101148). I kept both rows and flagged them.

**Balance check:** Opening $1,120.00 + charges $1,767.91 - payments and credits $1,775.00 = $1,112.91. Statement closing $1,112.91. **Difference $0.00.**

**Labels:**
- **Card Payments:** $450 / $875 / $450 from Joint Checking (CITI AUTOPAY matches each one, 1 day apart).
- **Annual membership fee $95.00** on 09-01 (Fees & Interest).
- Amazon Prime $14.99/month (Subscriptions). Target, Old Navy, Kohl's, Home Depot, Wayfair (Shopping). Firestone and Jiffy Lube (Transportation, car upkeep). Walgreens (Health). DoorDash (Dining Out).

| Category | 2026-08 | 2026-09 | 2026-10 |
|---|---|---|---|
| Dining Out | $0.00 | $69.00 | $0.00 |
| Transportation | $0.00 | $284.70 | $79.99 |
| Subscriptions | $28.97 | $28.97 | $28.97 |
| Shopping | $384.12 | $404.45 | $336.41 |
| Health | $27.33 | $0.00 | $0.00 |
| Fees & Interest | $0.00 | $95.00 | $0.00 |
| **Total** | **$440.42** | **$882.12** | **$445.37** |

**Questions:**

| Date | Description | Amount | My best guess |
|---|---|---|---|
| 09-12 | DOORDASH*THAI BASIL (x2) | $34.50 each | Possible double charge. Did you order once or twice? |
| 08-09, 09-09, 10-09 | APPLE.COM/BILL | $2.99 each | An Apple subscription. Which one? |
| 08-17, 09-17, 10-17 | APPLE.COM/BILL | $10.99 each | A second Apple subscription. Which one? |

---

**Sam:**

- DoorDash: "We only ordered once."
- Apple charges: "I'm not sure. Use your best judgment and mark it for review."

---

**Money X-Ray:**

Updated:
- **DoorDash:** both rows stay in (the bank did charge twice), flagged **Needs Review**. One $34.50 charge is worth disputing with the card or DoorDash. I can't promise a refund.
- **Apple $2.99 and $10.99:** kept in Subscriptions, marked **Needs Review**. I won't guess which services they are.

```
CHECKPOINT | Mastercard Cash Back | 2026-08-07 to 2026-10-29
Rows: 30 | Duplicates removed: 0 | Balance check: $0.00
Net spending by month: 2026-08: Subscriptions $28.97; Shopping $384.12; Health $27.33 | Total $440.42 || 2026-09: Dining Out $69.00; Transportation $284.70; Subscriptions $28.97; Shopping $404.45; Fees & Interest $95.00 | Total $882.12 || 2026-10: Transportation $79.99; Subscriptions $28.97; Shopping $336.41 | Total $445.37
Income by month: 2026-08 $0.00; 2026-09 $0.00; 2026-10 $0.00
Card payments and transfers: 2026-08-15 in $450.00 AUTOPAY PAYMENT - THANK YOU (from Joint Checking); 2026-09-15 in $875.00 AUTOPAY PAYMENT - THANK YOU (from Joint Checking); 2026-10-15 in $450.00 AUTOPAY PAYMENT - THANK YOU (from Joint Checking)
Recurring: Amazon Prime $14.99 monthly (08-07, 09-07, 10-07); Apple $2.99 / $10.99 / $2.99 / $10.99 / $2.99 / $10.99 monthly, varies (08-09, 08-17, 09-09, 09-17, 10-09, 10-17)
Fees and interest: 2026-09-01 ANNUAL MEMBERSHIP FEE $95.00
Flags: Possible double charge DoorDash Thai Basil $34.50 x2 on 09-12 (R101141, R101148), Sam ordered once; annual card fee $95.00; two Apple charges not identified
Open questions: What the Apple $2.99 and $10.99 charges are (Sam unsure, marked for review)
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

Last one: please send **Amex Blue**.

---

**Sam:**

Here's the Amex. *(uploads `amex_blue.csv`)*

---

**Money X-Ray:**

**Amex Blue: read.** 2026-08-02 to 2026-10-29, 39 rows. Dates are written like "02 Aug 2026". **Charges are positive, payments are negative.**

**Duplicates:** none. Every row has its own reference ID. **0 removed.**

**Balance check:** Opening $640.00 + charges $1,480.65 - payments and credits $1,475.00 = $645.65. Statement closing $645.65. **Difference $0.00.**

**Labels:**
- **Card Payments:** $250 / $825 / $400 from Everyday Checking (each matches an AMEX EPAYMENT 2 days earlier).
- Hulu $18.99 and Disney Plus $15.99 monthly (Subscriptions). Starbucks (Dining Out). Great Clips, Sephora (Personal Care). Petco, Banfield (Pets). AMC, Ticketmaster, Sky Zone (Entertainment). Delta (Travel). Etsy (Shopping).
- **Late fee $29.00** on 09-26 and a **foreign transaction fee $1.86** on 10-08 (on the Etsy order) (Fees & Interest).

| Category | 2026-08 | 2026-09 | 2026-10 |
|---|---|---|---|
| Dining Out | $20.00 | $29.25 | $37.65 |
| Subscriptions | $34.98 | $34.98 | $34.98 |
| Shopping | $0.00 | $0.00 | $62.00 |
| Personal Care | $42.00 | $42.00 | $90.50 |
| Entertainment | $54.80 | $118.00 | $72.00 |
| Pets | $64.20 | $203.75 | $61.30 |
| Travel | $0.00 | $312.40 | $0.00 |
| Fees & Interest | $0.00 | $29.00 | $1.86 |
| Uncategorized | $45.00 | $45.00 | $45.00 |
| **Total** | **$260.98** | **$814.38** | **$405.29** |

**Questions:**

| Date | Description | Amount | My best guess |
|---|---|---|---|
| 08-19, 09-19, 10-19 | SQ *JMK LLC | $45.00 each | A small business taking card payments through Square, billing the same amount monthly. Do you know it? |

---

**Sam:**

SQ *JMK LLC: "No idea what that is."

---

**Money X-Ray:**

Updated: **SQ *JMK LLC** stays **Uncategorized**, marked **Needs Review**. It's $45.00 on the 19th every month, which is $540.00 a year. Worth looking at your Amex app for the merchant details, or calling Amex to ask who it is.

```
CHECKPOINT | Amex Blue | 2026-08-02 to 2026-10-29
Rows: 39 | Duplicates removed: 0 | Balance check: $0.00
Net spending by month: 2026-08: Dining Out $20.00; Subscriptions $34.98; Personal Care $42.00; Entertainment $54.80; Pets $64.20; Uncategorized $45.00 | Total $260.98 || 2026-09: Dining Out $29.25; Subscriptions $34.98; Personal Care $42.00; Entertainment $118.00; Pets $203.75; Travel $312.40; Fees & Interest $29.00; Uncategorized $45.00 | Total $814.38 || 2026-10: Dining Out $37.65; Subscriptions $34.98; Shopping $62.00; Personal Care $90.50; Entertainment $72.00; Pets $61.30; Fees & Interest $1.86; Uncategorized $45.00 | Total $405.29
Income by month: 2026-08 $0.00; 2026-09 $0.00; 2026-10 $0.00
Card payments and transfers: 2026-08-20 in $250.00 ONLINE PAYMENT - THANK YOU (from Everyday Checking); 2026-09-20 in $825.00 ONLINE PAYMENT - THANK YOU (from Everyday Checking); 2026-10-20 in $400.00 ONLINE PAYMENT - THANK YOU (from Everyday Checking)
Recurring: Hulu $18.99 monthly (08-03, 09-03, 10-03); Disney+ $15.99 monthly (08-03, 09-03, 10-03); SQ *JMK LLC (unknown) $45.00 monthly (08-19, 09-19, 10-19)
Fees and interest: 2026-09-26 LATE FEE $29.00; 2026-10-08 FOREIGN TRANSACTION FEE $1.86
Flags: Unknown recurring merchant SQ *JMK LLC $45.00 monthly; late fee $29.00 on 09-26; foreign transaction fee $1.86 on Etsy; overlapping video streamers (Hulu, Disney+, and Netflix on the Visa)
Open questions: SQ *JMK LLC (Sam does not recognize it)
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

---

**Money X-Ray:**

That's every statement you have. One more question:

**Is there money that never shows up on these statements?** For example:
- **Cash coming in:** tips, side jobs, selling things, cash gifts.
- **Cash going out:** what the ATM cash paid for (you took out $100 on Aug 22 and $100 on Oct 22), cash bills (rent, babysitter, haircut), weekly cash habits.
- **Money apps without a statement:** Venmo or Cash App spending you couldn't export.
- **Informal debts:** money owed to or borrowed from family and friends, with any regular payments.
- **Bills someone else pays** for you, or that you pay for someone else.

List each item in one line: what it was, the amount, in or out, how often (once with a date, weekly, monthly), and how it was paid. Rough amounts are fine.

---

**Sam:**

- I mow lawns on weekends for cash, about $80 a week. I never deposit it.
- Out of that I spend about $40 a week on lunch out, and I give my mom $50 a month in cash to pay back $600 I borrowed from her. The rest goes in a jar at home.
- The $100 ATM cash in August: $60 went to the babysitter and $40 to the farmers market. The $100 in October: $60 on Halloween costumes and candy, $40 on pizza night.
- That's everything. No Venmo or Cash App spending beyond what's on the statements.

---

**Money X-Ray:**

Got it. Every item below is **Customer-reported**: I can't balance-check it, so I keep it on its own line, separate from the statement totals.

**Weekly to monthly (weekly x 52 / 12):**
- Lawn mowing cash in: $80 x 52 = $4,160 a year / 12 = **$346.67 a month**.
- Lunch out (from lawn cash): $40 x 52 = $2,080 a year / 12 = **$173.33 a month**.
- Cash to your mom: **$50.00 a month**, repaying a **$600** loan. That's an informal debt; at $50/month it's 12 payments in total. You didn't say how many are left.
- Into the jar: $346.67 - $173.33 - $50.00 = **$123.34 a month**. That's cash savings at home (my subtraction, from your numbers).

**Not counting cash twice:**
- The lunches and your mom's payments come from lawn cash you never deposited, so they are **new** spending that isn't on any statement. I add them as their own line.
- The two $100 ATM withdrawals are **already** on Everyday Checking as Cash & ATM. I'm **moving** them, not adding them:
  - August $100: **$60 Childcare** (babysitter) + **$40 Groceries** (farmers market).
  - October $100: **$60 Shopping** (Halloween costumes and candy) + **$40 Dining Out** (pizza night).
  - Cash & ATM drops to $0.00 in both months. The $3.50 ATM fees stay in Fees & Interest.
- Cash spent vs. cash available: lawn cash $346.67/month covers lunches + Mom ($223.33), and the ATM cash is fully explained. **No gap.**

```
CHECKPOINT | Manual entries | 2026-08 to 2026-10
Rows: 4 monthly items + 2 ATM reallocations | Duplicates removed: 0 | Balance check: n/a (Customer-reported, cannot be balance-checked)
Net spending by month (Customer-reported, new money from cash income): 2026-08: Dining Out $173.33; Debt Payments $50.00 | Total $223.33 || 2026-09: same | Total $223.33 || 2026-10: same | Total $223.33
Moved out of Cash & ATM (already in statement totals, not new spending; split is Customer-reported): 2026-08: Childcare $60.00; Groceries $40.00 || 2026-10: Shopping $60.00; Dining Out $40.00
Income by month (Customer-reported): 2026-08 $346.67; 2026-09 $346.67; 2026-10 $346.67 (lawn mowing, $80/week x 52 / 12, never deposited)
Card payments and transfers: cash jar savings $123.34/month (Customer-reported, derived: $346.67 - $173.33 - $50.00)
Recurring: Lunch out cash $173.33 monthly ($40/week); Mom loan repayment $50.00 monthly (on $600 borrowed)
Fees and interest: none
Flags: informal debt to Mom ($600 borrowed, $50/month)
Open questions: how much of the $600 is still owed to Mom
```

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

---

**Money X-Ray:**

All five statements are in. Here's the full picture.

## 1. The answer in one paragraph

You and your spouse bring home **$7,290 a month** on paper (plus about $346.67 in lawn cash). Statement spending averaged **$5,346.44 a month**, led by Housing ($1,385), Groceries, Shopping and Utilities. You also save $300 a month and pay $175 a month to a Discover card I can't see. That leaves about **$1,488.56 a month unspent on paper**, and it hasn't disappeared. **Three biggest findings:**
1. **The "missing" money is piling up in Joint Checking.** Its balance rose $4,739.99 in three months (from $960.00 to $5,699.99), while the Visa balance **grew** $315.69 to $6,495.69 and charged you **$183.57 in interest** in three months (about $61/month).
2. **Recurring charges and fees add up.** Subscriptions are $142.42/month on average across three cards and checking, with three video streamers, Spotify plus two unidentified Apple charges, a Netflix price increase and a $45/month merchant you don't recognize (SQ *JMK LLC). Fees and interest totalled **$340.43** in three months.
3. **Part of the picture is hidden.** $175/month goes to a Discover card with no statement, so whatever is bought on it is invisible here.

## 2. How much to trust this

| Item | Status |
|---|---|
| Accounts received vs. expected | 5 of 6 statements: Everyday Checking, Joint Checking, Visa Rewards, Mastercard Cash Back, Amex Blue. **Missing: Discover card.** Savings XXXX8812 not sent (only transfers in, not spending). |
| Balance check | Everyday Checking $0.00; Joint Checking $0.00; Visa Rewards $0.00; Mastercard Cash Back $0.00; Amex Blue $0.00. All add up. (That proves the math, not that every category is right.) |
| Duplicates removed | 3 export duplicates on the Visa. 1 possible DoorDash double charge kept and flagged. |
| Excluded as not spending | Card payments: Visa $2,250.00, Amex $1,475.00, Mastercard $1,775.00, Discover $525.00. Transfers: $1,200.00 Everyday -> Joint, $900.00 to savings. All Visa, Amex, Mastercard payments and Joint transfers matched on both sides (same amount, within 5 days). |
| Open questions | SQ *JMK LLC ($45/mo); two Apple charges ($2.99, $10.99); Venmo cashout $60 (Unknown Inflow); amount still owed to Mom. |
| Customer-reported share | Cash income $346.67/month and cash spending $223.33/month are Customer-reported: about **4.01%** of total spending. The ATM cash split ($200 over two months) is Customer-reported too, but its amount is on the statement. |

## 3. Money in vs. money out, by month

Statement figures first, then Customer-reported cash on its own.

| Month | Pay | Unknown inflow | Spending | Saved (to savings) | Discover payment (unseen card) | Left over | Cash in (CR) | Cash spent (CR) | Cash jar (CR) |
|---|---|---|---|---|---|---|---|---|---|
| 2026-08 | $7,290.00 | $0.00 | $5,060.34 | $300.00 | $175.00 | **$1,754.66** | $346.67 | $223.33 | $123.34 |
| 2026-09 | $7,290.00 | $0.00 | $5,866.20 | $300.00 | $175.00 | **$948.80** | $346.67 | $223.33 | $123.34 |
| 2026-10 | $7,290.00 | $60.00 | $5,112.77 | $300.00 | $175.00 | **$1,762.23** | $346.67 | $223.33 | $123.34 |

CR = Customer-reported. "Left over" = pay + unknown inflow - spending - savings - Discover payment.

**Where the "left over" went** (change in balances, from the statements):

| Month | Everyday Checking change | Joint Checking change | Card debt change (Visa+MC+Amex) | Left over (checks to the cent) |
|---|---|---|---|---|
| 2026-08 | $219.40 | $1,674.37 | $139.11 | $1,754.66 |
| 2026-09 | -$344.85 | $1,312.96 | $19.31 | $948.80 |
| 2026-10 | $165.40 | $1,752.66 | $155.83 | $1,762.23 |

So the money left over isn't lost. **Most of it is sitting in Joint Checking**, while the Visa balance keeps growing and costing interest. That's why it can feel like you never get ahead: the cash and the debt are in different accounts.

**Charts** (drawn in code from the numbers above; files `chart_months.png` and `chart_categories.png`):

```
2026-08 in    █████████████████████████████ $7,290.00
2026-08 spent ████████████████████ $5,060.34
2026-09 in    █████████████████████████████ $7,290.00
2026-09 spent ███████████████████████ $5,866.20
2026-10 in    █████████████████████████████ $7,290.00
2026-10 spent ████████████████████ $5,112.77
```

## 4. Spending by category (statements, ATM cash moved to what it bought)

| Category | Aug | Sep | Oct | Monthly avg | Share |
|---|---|---|---|---|---|
| Housing | $1,385.00 | $1,385.00 | $1,385.00 | $1,385.00 | 25.91% |
| Groceries | $633.15 | $564.64 | $559.54 | $585.78 | 10.96% |
| Shopping | $493.73 | $443.09 | $550.80 | $495.87 | 9.27% |
| Utilities | $500.70 | $481.45 | $447.70 | $476.62 | 8.91% |
| Debt Payments | $419.00 | $419.00 | $419.00 | $419.00 | 7.84% |
| Dining Out | $277.72 | $373.43 | $326.30 | $325.82 | 6.09% |
| Gas | $191.40 | $178.05 | $201.15 | $190.20 | 3.56% |
| Childcare | $230.00 | $170.00 | $170.00 | $190.00 | 3.55% |
| Insurance | $186.40 | $186.40 | $186.40 | $186.40 | 3.49% |
| Health | $200.48 | $184.75 | $111.70 | $165.64 | 3.10% |
| Gifts & Donations | $150.00 | $150.00 | $150.00 | $150.00 | 2.81% |
| Subscriptions | $124.42 | $126.92 | $175.92 | $142.42 | 2.66% |
| Transportation | $0.00 | $284.70 | $79.99 | $121.56 | 2.27% |
| Fees & Interest | $62.34 | $197.62 | $80.47 | $113.48 | 2.12% |
| Pets | $64.20 | $203.75 | $61.30 | $109.75 | 2.05% |
| Travel | $0.00 | $312.40 | $0.00 | $104.13 | 1.95% |
| Entertainment | $54.80 | $118.00 | $72.00 | $81.60 | 1.53% |
| Personal Care | $42.00 | $42.00 | $90.50 | $58.17 | 1.09% |
| Uncategorized | $45.00 | $45.00 | $45.00 | $45.00 | 0.84% |
| **Statement total** | **$5,060.34** | **$5,866.20** | **$5,112.77** | **$5,346.44** | 100% |
| Cash, Customer-reported: Dining Out (lunches) | $173.33 | $173.33 | $173.33 | $173.33 | - |
| Cash, Customer-reported: Debt Payments (Mom) | $50.00 | $50.00 | $50.00 | $50.00 | - |
| **Total incl. Customer-reported cash** | **$5,283.67** | **$6,089.53** | **$5,336.10** | **$5,569.77** |  |

Net spending = expenses - refunds - confirmed reimbursements. Groceries includes Costco Warehouse. Housing is the mortgage payment.

```
Housing            ██████████████████████████████ $1,385.00
Groceries          █████████████ $585.78
Shopping           ███████████ $495.87
Utilities          ██████████ $476.62
Debt Payments      █████████ $419.00
Dining Out         ███████ $325.82
Gas                ████ $190.20
Childcare          ████ $190.00
Insurance          ████ $186.40
Health             ████ $165.64
Gifts & Donations  ███ $150.00
Subscriptions      ███ $142.42
Transportation     ███ $121.56
Fees & Interest    ██ $113.48
Pets               ██ $109.75
Travel             ██ $104.13
Entertainment      ██ $81.60
Personal Care      █ $58.17
Uncategorized      █ $45.00
```

## 5. Trends (changes over 15% and over $25, month to month)

| Category | Months | From | To | Change | % | Behind it |
|---|---|---|---|---|---|---|
| Dining Out | 2026-08 -> 2026-09 | $277.72 | $373.43 | +$95.71 | 34.46% | DoorDash $69.00 (incl. the possible double charge) and a pricier Outback ($96.10 vs $88.40) |
| Transportation | 2026-08 -> 2026-09 | $0.00 | $284.70 | +$284.70 | new | Firestone Auto $284.70 (09-18) |
| Transportation | 2026-09 -> 2026-10 | $284.70 | $79.99 | -$204.71 | -71.90% | only Jiffy Lube $79.99 |
| Subscriptions | 2026-09 -> 2026-10 | $126.92 | $175.92 | +$49.00 | 38.61% | Planet Fitness annual fee $49.00 |
| Shopping | 2026-09 -> 2026-10 | $443.09 | $550.80 | +$107.71 | 24.31% | Kohl's $112.46, Etsy $62.00, Halloween $60 cash, Target $155.05; less Wayfair |
| Health | 2026-09 -> 2026-10 | $184.75 | $111.70 | -$73.05 | -39.54% | no LabCorp ($112.60 in Sep) |
| Personal Care | 2026-09 -> 2026-10 | $42.00 | $90.50 | +$48.50 | 115.48% | Sephora $48.50 |
| Entertainment | 2026-08 -> 2026-09 | $54.80 | $118.00 | +$63.20 | 115.33% | Ticketmaster NC State $118.00 |
| Entertainment | 2026-09 -> 2026-10 | $118.00 | $72.00 | -$46.00 | -38.98% | Sky Zone $72.00 replaced Ticketmaster |
| Pets | 2026-08 -> 2026-09 | $64.20 | $203.75 | +$139.55 | 217.37% | Banfield Pet Hospital $145.00 vet visit |
| Pets | 2026-09 -> 2026-10 | $203.75 | $61.30 | -$142.45 | -69.91% | no vet visit |
| Travel | 2026-08 -> 2026-09 | $0.00 | $312.40 | +$312.40 | new | Delta flight $312.40 |
| Travel | 2026-09 -> 2026-10 | $312.40 | $0.00 | -$312.40 | -100.00% | no travel |
| Childcare | 2026-08 -> 2026-09 | $230.00 | $170.00 | -$60.00 | -26.09% | August babysitter $60 (ATM cash) |
| Fees & Interest | 2026-08 -> 2026-09 | $62.34 | $197.62 | +$135.28 | 217.00% | Mastercard $95 annual fee, Amex $29 late fee, $12 maintenance fee |
| Fees & Interest | 2026-09 -> 2026-10 | $197.62 | $80.47 | -$117.15 | -59.28% | no annual or late fee |

**Habits (not subscriptions):** Kroger about weekly ($70-$102 a trip), Shell about weekly, Costco once a month ($185-$231), Starbucks 12 visits in 3 months ($86.90), Chipotle 6 visits ($226.45), Target 6 trips ($442.01), Amazon Marketplace orders every month. Dining out including cash lunches averages about **$499.15 a month**.

## 6. Subscriptions and recurring charges

Yearly cost uses the latest amount for fixed charges and the 3-month average for bills that vary.

| Charge | Category | Account | Amounts seen | Monthly | Yearly | Flags |
|---|---|---|---|---|---|---|
| Rocket Mortgage | Housing | Everyday Checking | $1,385.00 / $1,385.00 / $1,385.00 | $1,385.00 | $16,620.00 |  |
| Toyota Financial | Debt Payments | Joint Checking | $419.00 / $419.00 / $419.00 | $419.00 | $5,028.00 |  |
| GEICO | Insurance | Everyday Checking | $186.40 / $186.40 / $186.40 | $186.40 | $2,236.80 |  |
| Kids R Kids Afterschool | Childcare | Joint Checking | $170.00 / $170.00 / $170.00 | $170.00 | $2,040.00 |  |
| First Baptist Church | Gifts & Donations | Everyday Checking | $150.00 / $150.00 / $150.00 | $150.00 | $1,800.00 |  |
| Duke Energy | Utilities | Everyday Checking | $189.40 / $171.15 / $128.60 | $163.05 avg | $1,956.60 |  |
| Verizon Wireless | Utilities | Everyday Checking | $142.00 / $142.00 / $142.00 | $142.00 | $1,704.00 |  |
| Comcast Xfinity | Utilities | Everyday Checking | $80.00 / $80.00 / $80.00 | $80.00 | $960.00 |  |
| City of Raleigh Utilities | Utilities | Everyday Checking | $61.20 / $58.90 / $55.35 | $58.48 avg | $701.76 |  |
| Piedmont Natural Gas | Utilities | Everyday Checking | $28.10 / $29.40 / $41.75 | $33.08 avg | $396.96 |  |
| Purchase interest charge | Fees & Interest | Visa Rewards | $58.84 / $61.62 / $63.11 | $61.19 avg | $734.28 | cost of carrying the Visa balance |
| SQ *JMK LLC (unknown) | Uncategorized | Amex Blue | $45.00 / $45.00 / $45.00 | $45.00 | $540.00 | unknown merchant |
| Planet Fitness | Subscriptions | Joint Checking | $24.99 / $24.99 / $24.99 | $24.99 | $299.88 | plus $49.00 annual fee (Oct) |
| Spotify | Subscriptions | Visa Rewards | $19.99 / $19.99 / $19.99 | $19.99 | $239.88 | music; see Apple $10.99 |
| Hulu | Subscriptions | Amex Blue | $18.99 / $18.99 / $18.99 | $18.99 | $227.88 | overlapping video streamers |
| Netflix | Subscriptions | Visa Rewards | $15.49 / $17.99 / $17.99 | $17.99 | $215.88 | price increase $15.49 -> $17.99 (Sep); overlapping video streamers |
| Disney+ | Subscriptions | Amex Blue | $15.99 / $15.99 / $15.99 | $15.99 | $191.88 | overlapping video streamers |
| Amazon Prime | Subscriptions | Mastercard Cash Back | $14.99 / $14.99 / $14.99 | $14.99 | $179.88 |  |
| Monthly maintenance fee | Fees & Interest | Everyday Checking | $12.00 / $12.00 | $12.00 | $144.00 | charged Sep and Oct, not Aug |
| Apple $10.99 (unidentified) | Subscriptions | Mastercard Cash Back | $10.99 / $10.99 / $10.99 | $10.99 | $131.88 | not recognized; Needs Review |
| Apple $2.99 (unidentified) | Subscriptions | Mastercard Cash Back | $2.99 / $2.99 / $2.99 | $2.99 | $35.88 | not recognized; Needs Review |
| Planet Fitness annual fee | Subscriptions | Joint Checking | $49.00 (10-06) | annual | $49.00 | yearly |
| Mastercard annual membership fee | Fees & Interest | Mastercard Cash Back | $95.00 (09-01) | annual | $95.00 | card fee |
| Lunch out cash (Customer-reported) | Dining Out | Cash / manual | $40/week | $173.33 | $2,079.96 | from lawn cash |
| Mom loan repayment (Customer-reported) | Debt Payments | Cash / manual | $50.00 x3 | $50.00 | $600.00 | ends when $600 is repaid |

**Flags:**
- **Price increase:** Netflix $15.49 -> $17.99 (+$2.50/month, +$30/year).
- **Overlapping services:** three video streamers (Netflix, Hulu, Disney+) = $52.97/month, plus Amazon Prime (which includes Prime Video). Spotify $19.99 plus an Apple $10.99 charge that may also be a music or media service.
- **Spread across cards:** subscriptions sit on the Visa (Netflix, Spotify), Amex (Hulu, Disney+), Mastercard (Prime, Apple x2) and Joint Checking (Planet Fitness). Harder to keep track of.
- **Unrecognized:** SQ *JMK LLC $45/month; Apple $2.99 and $10.99.
- **Discover card:** $175/month in payments; I can't see what's on it.

## 7. Fees and interest ($340.43 in 3 months)

| Date | Fee | Account | Amount | How it could be avoided |
|---|---|---|---|---|
| 08-25, 09-25, 10-25 | Purchase interest | Visa Rewards | $183.57 | Pay the balance down. Some of the $5,699.99 in Joint Checking could do that. Interest stops once the card is paid in full each month. |
| 09-01 | Annual membership fee | Mastercard Cash Back | $95.00 | Ask the issuer for a no-fee version, or check the cash back you earn covers it. |
| 09-26 | Late fee | Amex Blue | $29.00 | Autopay for at least the minimum payment. You can also ask Amex to waive a first late fee. |
| 09-30, 10-31 | Monthly maintenance fee | Everyday Checking | $24.00 | August had none. Ask the bank what waives it (often a minimum balance or direct deposit amount). |
| 08-22, 10-22 | Non-network ATM fee | Everyday Checking | $7.00 | Use your own bank's ATMs or get cash back at a store. |
| 10-08 | Foreign transaction fee | Amex Blue | $1.86 | Pay for overseas-shop orders (this was Etsy) with a card without foreign fees. |

## 8. Worth reviewing

These are possibilities, not savings yet. Tell me which ones you want to change.

| Item | Monthly | Yearly |
|---|---|---|
| Visa interest (pay the balance down with idle Joint Checking cash) | about $61.19 | about $734.28 |
| SQ *JMK LLC (unknown, $45/month) | $45.00 | $540.00 |
| Overlapping streamers: Hulu | $18.99 | $227.88 |
| Overlapping streamers: Disney+ | $15.99 | $191.88 |
| Overlapping streamers: Netflix (just went up) | $17.99 | $215.88 |
| Music overlap: Spotify vs. Apple $10.99 (if that's music) | $10.99 or $19.99 | $131.88 or $239.88 |
| Apple $2.99 (unidentified) | $2.99 | $35.88 |
| Mastercard annual fee | $7.92 | $95.00 |
| Checking maintenance fee | $12.00 | $144.00 |
| Late fee and ATM fees (avoidable) | $36.00 over these 3 months ($12.00 avg) | depends on habits |
| DoorDash double charge (one-time dispute) | n/a | $34.50 once |
| Dining out incl. cash lunches (avg $499.15/month) | your call | your call |
| Shopping (avg $495.87/month; Target, Amazon, Old Navy, Kohl's) | your call | your call |

## 9. Limitations

- **Discover card not provided.** $525 in payments over 3 months went to it; the spending behind them is invisible.
- **Savings XXXX8812 not provided.** I only see $300/month going in.
- **Customer-reported items** (lawn cash, lunches, Mom, the jar, what the ATM cash bought) are rough amounts and can't be balance-checked.
- **Unresolved:** SQ *JMK LLC, the two Apple charges, Venmo $60 (left as Unknown Inflow, not counted as income).
- **Loans:** the mortgage and Toyota payments don't show the principal/interest split. I don't know the Visa interest rate; it's not on these statements.
- **3 months only** (Aug-Oct 2026). Yearly costs are projections from those 3 months. Joint Checking's last row is 10-28 and Visa's is 10-30, so a day or two at month end may not be shown.
- Categories are my judgment calls (Costco = Groceries, mortgage = Housing, Planet Fitness = Subscriptions). The balance checks prove the totals, not each label.

**Which of these do you want to change?**

---

**Sam:**

Cancel Hulu, cancel Apple Music (keep Spotify), and look into the unknown SQ *JMK LLC charge. Keep everything else for now.

---

**Money X-Ray:**

Quick check: "Apple Music" isn't named on your statements. The Apple charges are $10.99 and $2.99 a month on the Mastercard. I'm matching Apple Music to the **$10.99** charge. Please confirm that in your Apple subscriptions settings before cancelling, and tell me if it's the other one.

## Recovery Plan

| Action | Status | Monthly | Yearly |
|---|---|---|---|
| Cancel Hulu (Amex, $18.99 on the 3rd) | Confirmed by you | $18.99 | $227.88 |
| Cancel Apple Music (Mastercard, $10.99 on the 17th) | Confirmed by you | $10.99 | $131.88 |
| **Confirmed potential savings** | | **$29.98** | **$359.76** |
| Look into SQ *JMK LLC (Amex, $45.00 on the 19th) | Investigating. Only counts if it turns out to be something you don't want | up to $45.00 | up to $540.00 |
| If SQ *JMK LLC is cancelled too | | up to $74.98 | up to $899.76 |

**Against your goal of $300 a month:** the confirmed actions free up **$29.98 a month**, which is **$270.02 short**. Even if SQ *JMK LLC goes, you'd be at $74.98, still $225.02 short. I can't promise any of it; these are potential savings once you act.

**The biggest levers left** (you chose to keep them for now):
1. **The Visa balance.** About $61.19/month in interest (about $734.28/year). Joint Checking grew $4,739.99 in three months and now holds $5,699.99. Using some of it on the Visa would cut interest, and money you stop adding to the Visa can count toward your $300.
2. **Dining out:** about $499.15/month including cash lunches.
3. **Shopping:** about $495.87/month.
4. **Other streamers:** Disney+ $15.99, Netflix $17.99.
5. **Fees:** Mastercard $95/year, maintenance fee $12/month, late and ATM fees.
6. **The Discover card:** $175/month goes there. Its statement may show more to review.

Also worth doing (not counted as savings): dispute the duplicate DoorDash $34.50.

Do you use the Money X-Ray Notion template? If so, I can give you the transactions as CSV, one account at a time.

---

**Sam:**

"I'm not sure. Use your best judgment and mark it for review."

---

**Money X-Ray:**

I'll give it to you in case you use it. Paste each block into a plain text file, save it as `.csv`, and import it into the Notion transactions database. Every block has the same header, so you can import them one by one. Rows I'm unsure about are marked **Needs Review**; the 3 Visa export duplicates are included but marked **Excluded - Duplicate** and don't count as spending. The ATM withdrawals are marked as a Transfer to cash, because what that cash bought is in the Cash / manual block (so it isn't counted twice).

Block 1 of 6: **Everyday Checking**
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
EverydayChecking-2026-08-01-2185.00-2,2026-08-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,2,2026-08_to_2026-10,
EverydayChecking-2026-08-01-1385.00-3,2026-08-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,3,2026-08_to_2026-10,Mortgage payment (principal/interest split not shown)
EverydayChecking-2026-08-01-150.00-4,2026-08-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,4,2026-08_to_2026-10,
EverydayChecking-2026-08-03-189.40-5,2026-08-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,189.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,5,2026-08_to_2026-10,
EverydayChecking-2026-08-04-28.10-6,2026-08-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,28.10,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,6,2026-08_to_2026-10,
EverydayChecking-2026-08-05-80.00-7,2026-08-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,7,2026-08_to_2026-10,
EverydayChecking-2026-08-08-400.00-8,2026-08-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,8,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-08-10-186.40-9,2026-08-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,9,2026-08_to_2026-10,
EverydayChecking-2026-08-12-700.00-10,2026-08-12,Everyday Checking,Chase (Visa Rewards payment),CHASE CARD EPAY,,700.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,10,2026-08_to_2026-10,Pays Visa Rewards
EverydayChecking-2026-08-15-2185.00-11,2026-08-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,11,2026-08_to_2026-10,
EverydayChecking-2026-08-18-250.00-12,2026-08-18,Everyday Checking,Amex (Amex Blue payment),AMEX EPAYMENT ACH PMT,,250.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,12,2026-08_to_2026-10,Pays Amex Blue
EverydayChecking-2026-08-20-175.00-13,2026-08-20,Everyday Checking,Discover (card payment),DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,Yes,Needs Review,Medium,everyday_checking.csv,13,2026-08_to_2026-10,"Pays a Discover card Sam forgot; no statement, so its spending is invisible"
EverydayChecking-2026-08-22-142.00-14,2026-08-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,14,2026-08_to_2026-10,
EverydayChecking-2026-08-22-100.00-15,2026-08-22,Everyday Checking,ATM 7-Eleven,ATM WITHDRAWAL 7-ELEVEN #3381,Cash & ATM,100.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,15,2026-08_to_2026-10,Cash withdrawn to wallet; Sam reported what it bought (see Cash / manual rows). Not counted here so the cash is not counted twice
EverydayChecking-2026-08-22-3.50-16,2026-08-22,Everyday Checking,Non-network ATM fee,NON-NETWORK ATM FEE,Fees & Interest,3.50,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,16,2026-08_to_2026-10,
EverydayChecking-2026-08-26-61.20-17,2026-08-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,61.20,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,17,2026-08_to_2026-10,
EverydayChecking-2026-08-28-300.00-18,2026-08-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,18,2026-08_to_2026-10,"To savings XXXX8812 (confirmed by Sam) - saving, not spending"
EverydayChecking-2026-09-01-2185.00-19,2026-09-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,19,2026-08_to_2026-10,
EverydayChecking-2026-09-01-1385.00-20,2026-09-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,20,2026-08_to_2026-10,Mortgage payment (principal/interest split not shown)
EverydayChecking-2026-09-01-150.00-21,2026-09-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,21,2026-08_to_2026-10,
EverydayChecking-2026-09-03-171.15-22,2026-09-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,171.15,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,22,2026-08_to_2026-10,
EverydayChecking-2026-09-04-29.40-23,2026-09-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,29.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,23,2026-08_to_2026-10,
EverydayChecking-2026-09-05-80.00-24,2026-09-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,24,2026-08_to_2026-10,
EverydayChecking-2026-09-08-400.00-25,2026-09-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,25,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-09-10-186.40-26,2026-09-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,26,2026-08_to_2026-10,
EverydayChecking-2026-09-12-800.00-27,2026-09-12,Everyday Checking,Chase (Visa Rewards payment),CHASE CARD EPAY,,800.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,27,2026-08_to_2026-10,Pays Visa Rewards
EverydayChecking-2026-09-15-2185.00-28,2026-09-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,28,2026-08_to_2026-10,
EverydayChecking-2026-09-18-825.00-29,2026-09-18,Everyday Checking,Amex (Amex Blue payment),AMEX EPAYMENT ACH PMT,,825.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,29,2026-08_to_2026-10,Pays Amex Blue
EverydayChecking-2026-09-20-175.00-30,2026-09-20,Everyday Checking,Discover (card payment),DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,Yes,Needs Review,Medium,everyday_checking.csv,30,2026-08_to_2026-10,"Pays a Discover card Sam forgot; no statement, so its spending is invisible"
EverydayChecking-2026-09-22-142.00-31,2026-09-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,31,2026-08_to_2026-10,
EverydayChecking-2026-09-26-58.90-32,2026-09-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,58.90,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,32,2026-08_to_2026-10,
EverydayChecking-2026-09-28-300.00-33,2026-09-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,33,2026-08_to_2026-10,"To savings XXXX8812 (confirmed by Sam) - saving, not spending"
EverydayChecking-2026-09-30-12.00-34,2026-09-30,Everyday Checking,Monthly maintenance fee,MONTHLY MAINTENANCE FEE,Fees & Interest,12.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,34,2026-08_to_2026-10,
EverydayChecking-2026-10-01-2185.00-35,2026-10-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,35,2026-08_to_2026-10,
EverydayChecking-2026-10-01-1385.00-36,2026-10-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,36,2026-08_to_2026-10,Mortgage payment (principal/interest split not shown)
EverydayChecking-2026-10-01-150.00-37,2026-10-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,37,2026-08_to_2026-10,
EverydayChecking-2026-10-03-128.60-38,2026-10-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,128.60,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,38,2026-08_to_2026-10,
EverydayChecking-2026-10-04-41.75-39,2026-10-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,41.75,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,39,2026-08_to_2026-10,
EverydayChecking-2026-10-05-80.00-40,2026-10-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,40,2026-08_to_2026-10,
EverydayChecking-2026-10-08-400.00-41,2026-10-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,41,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-10-10-186.40-42,2026-10-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,42,2026-08_to_2026-10,
EverydayChecking-2026-10-12-750.00-43,2026-10-12,Everyday Checking,Chase (Visa Rewards payment),CHASE CARD EPAY,,750.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,43,2026-08_to_2026-10,Pays Visa Rewards
EverydayChecking-2026-10-15-2185.00-44,2026-10-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,Yes,Verified,High,everyday_checking.csv,44,2026-08_to_2026-10,
EverydayChecking-2026-10-16-45.00-45,2026-10-16,Everyday Checking,Jordan M (Zelle),ZELLE FROM JORDAN M,Dining Out,45.00,Inflow,Reimbursement,No,No,Verified,High,everyday_checking.csv,45,2026-08_to_2026-10,Jordan paid back share of Olive Garden 10/15 (confirmed)
EverydayChecking-2026-10-18-400.00-46,2026-10-18,Everyday Checking,Amex (Amex Blue payment),AMEX EPAYMENT ACH PMT,,400.00,Outflow,Card Payment,No,Yes,Verified,High,everyday_checking.csv,46,2026-08_to_2026-10,Pays Amex Blue
EverydayChecking-2026-10-20-175.00-47,2026-10-20,Everyday Checking,Discover (card payment),DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,Yes,Needs Review,Medium,everyday_checking.csv,47,2026-08_to_2026-10,"Pays a Discover card Sam forgot; no statement, so its spending is invisible"
EverydayChecking-2026-10-22-142.00-48,2026-10-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,48,2026-08_to_2026-10,
EverydayChecking-2026-10-22-100.00-49,2026-10-22,Everyday Checking,ATM 7-Eleven,ATM WITHDRAWAL 7-ELEVEN #3381,Cash & ATM,100.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,49,2026-08_to_2026-10,Cash withdrawn to wallet; Sam reported what it bought (see Cash / manual rows). Not counted here so the cash is not counted twice
EverydayChecking-2026-10-22-3.50-50,2026-10-22,Everyday Checking,Non-network ATM fee,NON-NETWORK ATM FEE,Fees & Interest,3.50,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,50,2026-08_to_2026-10,
EverydayChecking-2026-10-25-60.00-51,2026-10-25,Everyday Checking,Venmo cashout,VENMO CASHOUT,,60.00,Inflow,Unknown Inflow,No,No,Needs Review,Low,everyday_checking.csv,51,2026-08_to_2026-10,Sam unsure; maybe something spouse sold
EverydayChecking-2026-10-26-55.35-52,2026-10-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,55.35,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,52,2026-08_to_2026-10,
EverydayChecking-2026-10-28-300.00-53,2026-10-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,Yes,Verified,High,everyday_checking.csv,53,2026-08_to_2026-10,"To savings XXXX8812 (confirmed by Sam) - saving, not spending"
EverydayChecking-2026-10-31-12.00-54,2026-10-31,Everyday Checking,Monthly maintenance fee,MONTHLY MAINTENANCE FEE,Fees & Interest,12.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,54,2026-08_to_2026-10,
```

---

**Sam:**

Got it, next.

---

**Money X-Ray:**

Block 2 of 6: **Joint Checking**
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
JointChecking-2026-08-01-1460.00-2,2026-08-01,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,2,2026-08_to_2026-10,
JointChecking-2026-08-02-419.00-3,2026-08-02,Joint Checking,Toyota Financial,TOYOTA FINANCIAL PMT,Debt Payments,419.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,3,2026-08_to_2026-10,Car loan; principal/interest split not shown
JointChecking-2026-08-02-88.42-4,2026-08-02,Joint Checking,Kroger,KROGER #0412,Groceries,88.42,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,4,2026-08_to_2026-10,
JointChecking-2026-08-05-170.00-5,2026-08-05,Joint Checking,Kids R Kids Afterschool,KIDS R KIDS AFTERSCHOOL,Childcare,170.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,5,2026-08_to_2026-10,
JointChecking-2026-08-06-24.99-6,2026-08-06,Joint Checking,Planet Fitness,PLANET FITNESS,Subscriptions,24.99,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,6,2026-08_to_2026-10,
JointChecking-2026-08-09-400.00-7,2026-08-09,Joint Checking,Transfer from Everyday Checking,TRANSFER FROM EVERYDAY XXXX2290,,400.00,Inflow,Transfer,No,Yes,Verified,High,joint_checking.csv,7,2026-08_to_2026-10,From Everyday Checking
JointChecking-2026-08-09-76.18-8,2026-08-09,Joint Checking,Kroger,KROGER #0412,Groceries,76.18,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,8,2026-08_to_2026-10,
JointChecking-2026-08-12-40.00-9,2026-08-12,Joint Checking,Atrium Health,ATRIUM HEALTH COPAY,Health,40.00,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,9,2026-08_to_2026-10,
JointChecking-2026-08-12-38.15-10,2026-08-12,Joint Checking,CVS Pharmacy,CVS/PHARMACY #2207,Health,38.15,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,10,2026-08_to_2026-10,
JointChecking-2026-08-14-450.00-11,2026-08-14,Joint Checking,Citi (Mastercard payment),CITI AUTOPAY,,450.00,Outflow,Card Payment,No,Yes,Verified,High,joint_checking.csv,11,2026-08_to_2026-10,Pays Mastercard Cash Back
JointChecking-2026-08-15-1460.00-12,2026-08-15,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,12,2026-08_to_2026-10,
JointChecking-2026-08-16-92.65-13,2026-08-16,Joint Checking,Kroger,KROGER #0412,Groceries,92.65,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,13,2026-08_to_2026-10,
JointChecking-2026-08-23-81.30-14,2026-08-23,Joint Checking,Kroger,KROGER #0412,Groceries,81.30,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,14,2026-08_to_2026-10,
JointChecking-2026-08-27-95.00-15,2026-08-27,Joint Checking,Smile Dental Group,SMILE DENTAL GROUP,Health,95.00,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,15,2026-08_to_2026-10,
JointChecking-2026-08-30-69.94-16,2026-08-30,Joint Checking,Kroger,KROGER #0412,Groceries,69.94,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,16,2026-08_to_2026-10,
JointChecking-2026-09-01-1460.00-17,2026-09-01,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,17,2026-08_to_2026-10,
JointChecking-2026-09-02-419.00-18,2026-09-02,Joint Checking,Toyota Financial,TOYOTA FINANCIAL PMT,Debt Payments,419.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,18,2026-08_to_2026-10,Car loan; principal/interest split not shown
JointChecking-2026-09-05-170.00-19,2026-09-05,Joint Checking,Kids R Kids Afterschool,KIDS R KIDS AFTERSCHOOL,Childcare,170.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,19,2026-08_to_2026-10,
JointChecking-2026-09-06-24.99-20,2026-09-06,Joint Checking,Planet Fitness,PLANET FITNESS,Subscriptions,24.99,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,20,2026-08_to_2026-10,
JointChecking-2026-09-06-94.10-21,2026-09-06,Joint Checking,Kroger,KROGER #0412,Groceries,94.10,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,21,2026-08_to_2026-10,
JointChecking-2026-09-09-400.00-22,2026-09-09,Joint Checking,Transfer from Everyday Checking,TRANSFER FROM EVERYDAY XXXX2290,,400.00,Inflow,Transfer,No,Yes,Verified,High,joint_checking.csv,22,2026-08_to_2026-10,From Everyday Checking
JointChecking-2026-09-13-71.55-23,2026-09-13,Joint Checking,Kroger,KROGER #0412,Groceries,71.55,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,23,2026-08_to_2026-10,
JointChecking-2026-09-14-875.00-24,2026-09-14,Joint Checking,Citi (Mastercard payment),CITI AUTOPAY,,875.00,Outflow,Card Payment,No,Yes,Verified,High,joint_checking.csv,24,2026-08_to_2026-10,Pays Mastercard Cash Back
JointChecking-2026-09-15-1460.00-25,2026-09-15,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,25,2026-08_to_2026-10,
JointChecking-2026-09-15-32.15-26,2026-09-15,Joint Checking,CVS Pharmacy,CVS/PHARMACY #2207,Health,32.15,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,26,2026-08_to_2026-10,
JointChecking-2026-09-20-88.02-27,2026-09-20,Joint Checking,Kroger,KROGER #0412,Groceries,88.02,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,27,2026-08_to_2026-10,
JointChecking-2026-09-23-40.00-28,2026-09-23,Joint Checking,Atrium Health,ATRIUM HEALTH COPAY,Health,40.00,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,28,2026-08_to_2026-10,
JointChecking-2026-09-23-112.60-29,2026-09-23,Joint Checking,LabCorp,LABCORP,Health,112.60,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,29,2026-08_to_2026-10,
JointChecking-2026-09-27-79.63-30,2026-09-27,Joint Checking,Kroger,KROGER #0412,Groceries,79.63,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,30,2026-08_to_2026-10,
JointChecking-2026-10-01-1460.00-31,2026-10-01,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,31,2026-08_to_2026-10,
JointChecking-2026-10-02-419.00-32,2026-10-02,Joint Checking,Toyota Financial,TOYOTA FINANCIAL PMT,Debt Payments,419.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,32,2026-08_to_2026-10,Car loan; principal/interest split not shown
JointChecking-2026-10-04-86.77-33,2026-10-04,Joint Checking,Kroger,KROGER #0412,Groceries,86.77,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,33,2026-08_to_2026-10,
JointChecking-2026-10-05-170.00-34,2026-10-05,Joint Checking,Kids R Kids Afterschool,KIDS R KIDS AFTERSCHOOL,Childcare,170.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,34,2026-08_to_2026-10,
JointChecking-2026-10-06-24.99-35,2026-10-06,Joint Checking,Planet Fitness,PLANET FITNESS,Subscriptions,24.99,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,35,2026-08_to_2026-10,
JointChecking-2026-10-06-49.00-36,2026-10-06,Joint Checking,Planet Fitness annual fee,PLANET FITNESS ANNUAL FEE,Subscriptions,49.00,Outflow,Expense,Yes,Yes,Verified,High,joint_checking.csv,36,2026-08_to_2026-10,Annual fee
JointChecking-2026-10-07-41.80-37,2026-10-07,Joint Checking,CVS Pharmacy,CVS/PHARMACY #2207,Health,41.80,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,37,2026-08_to_2026-10,
JointChecking-2026-10-09-400.00-38,2026-10-09,Joint Checking,Transfer from Everyday Checking,TRANSFER FROM EVERYDAY XXXX2290,,400.00,Inflow,Transfer,No,Yes,Verified,High,joint_checking.csv,38,2026-08_to_2026-10,From Everyday Checking
JointChecking-2026-10-11-98.30-39,2026-10-11,Joint Checking,Kroger,KROGER #0412,Groceries,98.30,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,39,2026-08_to_2026-10,
JointChecking-2026-10-14-450.00-40,2026-10-14,Joint Checking,Citi (Mastercard payment),CITI AUTOPAY,,450.00,Outflow,Card Payment,No,Yes,Verified,High,joint_checking.csv,40,2026-08_to_2026-10,Pays Mastercard Cash Back
JointChecking-2026-10-15-1460.00-41,2026-10-15,Joint Checking,Wake County Schools,WAKE CO SCHOOLS PAYROLL,,1460.00,Inflow,Income,No,Yes,Verified,High,joint_checking.csv,41,2026-08_to_2026-10,
JointChecking-2026-10-18-74.41-42,2026-10-18,Joint Checking,Kroger,KROGER #0412,Groceries,74.41,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,42,2026-08_to_2026-10,
JointChecking-2026-10-20-18.99-43,2026-10-20,Joint Checking,Kroger,KROGER #0412 REFUND,Groceries,18.99,Inflow,Refund,No,No,Verified,High,joint_checking.csv,43,2026-08_to_2026-10,
JointChecking-2026-10-25-102.16-44,2026-10-25,Joint Checking,Kroger,KROGER #0412,Groceries,102.16,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,44,2026-08_to_2026-10,
JointChecking-2026-10-28-40.00-45,2026-10-28,Joint Checking,Atrium Health,ATRIUM HEALTH COPAY,Health,40.00,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,45,2026-08_to_2026-10,
JointChecking-2026-10-28-29.90-46,2026-10-28,Joint Checking,CVS Pharmacy,CVS/PHARMACY #2207,Health,29.90,Outflow,Expense,Yes,No,Verified,High,joint_checking.csv,46,2026-08_to_2026-10,
```

---

**Sam:**

Got it, next.

---

**Money X-Ray:**

Block 3 of 6: **Visa Rewards**
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
VisaRewards-2026-08-02-31.45-2,2026-08-02,Visa Rewards,Chick-fil-A,CHICK-FIL-A #01988,Dining Out,31.45,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,2,2026-08_to_2026-10,
VisaRewards-2026-08-03-48.20-3,2026-08-03,Visa Rewards,Shell,SHELL OIL 57442,Gas,48.20,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,3,2026-08_to_2026-10,
VisaRewards-2026-08-04-15.49-4,2026-08-04,Visa Rewards,Netflix,NETFLIX.COM,Subscriptions,15.49,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,4,2026-08_to_2026-10,
VisaRewards-2026-08-09-34.85-5,2026-08-09,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,34.85,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,5,2026-08_to_2026-10,
VisaRewards-2026-08-10-51.75-6,2026-08-10,Visa Rewards,Shell,SHELL OIL 57442,Gas,51.75,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,6,2026-08_to_2026-10,
VisaRewards-2026-08-11-19.99-7,2026-08-11,Visa Rewards,Spotify,SPOTIFY USA,Subscriptions,19.99,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,7,2026-08_to_2026-10,
VisaRewards-2026-08-13-184.66-8,2026-08-13,Visa Rewards,Costco,COSTCO WHSE #1123,Groceries,184.66,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,8,2026-08_to_2026-10,Bank says Shopping; warehouse club treated as Groceries
VisaRewards-2026-08-13-700.00-9,2026-08-13,Visa Rewards,Payment received,Payment Thank You-Mobile,,700.00,Inflow,Card Payment,No,Yes,Verified,High,visa_rewards.csv,9,2026-08_to_2026-10,
VisaRewards-2026-08-16-48.20-10,2026-08-16,Visa Rewards,Uber Eats,UBER *EATS,Dining Out,48.20,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,10,2026-08_to_2026-10,
VisaRewards-2026-08-17-44.10-11,2026-08-17,Visa Rewards,Shell,SHELL OIL 57442,Gas,44.10,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,11,2026-08_to_2026-10,
VisaRewards-2026-08-18-67.43-12,2026-08-18,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,67.43,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,12,2026-08_to_2026-10,
VisaRewards-2026-08-20-18.62-13,2026-08-20,Visa Rewards,McDonald's,MCDONALD'S F11872,Dining Out,18.62,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,13,2026-08_to_2026-10,
VisaRewards-2026-08-24-36.20-14,2026-08-24,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,36.20,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,14,2026-08_to_2026-10,
VisaRewards-2026-08-25-58.84-15,2026-08-25,Visa Rewards,Purchase interest charge,PURCHASE INTEREST CHARGE,Fees & Interest,58.84,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,15,2026-08_to_2026-10,
VisaRewards-2026-08-26-47.35-16,2026-08-26,Visa Rewards,Shell,SHELL OIL 57442,Gas,47.35,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,16,2026-08_to_2026-10,
VisaRewards-2026-08-27-42.18-17,2026-08-27,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,42.18,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,17,2026-08_to_2026-10,
VisaRewards-2026-08-29-88.40-18,2026-08-29,Visa Rewards,Outback Steakhouse,OUTBACK 4412,Dining Out,88.40,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,18,2026-08_to_2026-10,
VisaRewards-2026-09-03-29.10-19,2026-09-03,Visa Rewards,Chick-fil-A,CHICK-FIL-A #01988,Dining Out,29.10,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,19,2026-08_to_2026-10,
VisaRewards-2026-09-04-17.99-20,2026-09-04,Visa Rewards,Netflix,NETFLIX.COM,Subscriptions,17.99,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,20,2026-08_to_2026-10,
VisaRewards-2026-09-06-46.90-21,2026-09-06,Visa Rewards,Shell,SHELL OIL 57442,Gas,46.90,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,21,2026-08_to_2026-10,
VisaRewards-2026-09-07-35.40-22,2026-09-07,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,35.40,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,22,2026-08_to_2026-10,
VisaRewards-2026-09-11-19.99-23,2026-09-11,Visa Rewards,Spotify,SPOTIFY USA,Subscriptions,19.99,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,23,2026-08_to_2026-10,
VisaRewards-2026-09-11-231.34-24,2026-09-11,Visa Rewards,Costco,COSTCO WHSE #1123,Groceries,231.34,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,24,2026-08_to_2026-10,Bank says Shopping; warehouse club treated as Groceries
VisaRewards-2026-09-13-800.00-25,2026-09-13,Visa Rewards,Payment received,Payment Thank You-Mobile,,800.00,Inflow,Card Payment,No,Yes,Verified,High,visa_rewards.csv,25,2026-08_to_2026-10,
VisaRewards-2026-09-14-50.15-26,2026-09-14,Visa Rewards,Shell,SHELL OIL 57442,Gas,50.15,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,26,2026-08_to_2026-10,
VisaRewards-2026-09-19-54.75-27,2026-09-19,Visa Rewards,Uber Eats,UBER *EATS,Dining Out,54.75,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,27,2026-08_to_2026-10,
VisaRewards-2026-09-21-21.08-28,2026-09-21,Visa Rewards,McDonald's,MCDONALD'S F11872,Dining Out,21.08,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,28,2026-08_to_2026-10,
VisaRewards-2026-09-22-129.99-29,2026-09-22,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,129.99,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,29,2026-08_to_2026-10,
VisaRewards-2026-09-24-38.64-30,2026-09-24,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,38.64,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,30,2026-08_to_2026-10,
VisaRewards-2026-09-25-41.20-31,2026-09-25,Visa Rewards,Costco Gas,COSTCO GAS #1123,Gas,41.20,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,31,2026-08_to_2026-10,Bank says Shopping; Costco gas station
VisaRewards-2026-09-25-61.62-32,2026-09-25,Visa Rewards,Purchase interest charge,PURCHASE INTEREST CHARGE,Fees & Interest,61.62,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,32,2026-08_to_2026-10,
VisaRewards-2026-09-26-96.10-33,2026-09-26,Visa Rewards,Outback Steakhouse,OUTBACK 4412,Dining Out,96.10,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,33,2026-08_to_2026-10,
VisaRewards-2026-09-28-39.80-34,2026-09-28,Visa Rewards,Shell,SHELL OIL 57442,Gas,39.80,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,34,2026-08_to_2026-10,
VisaRewards-2026-09-29-129.99-35,2026-09-29,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,129.99,Inflow,Refund,No,No,Verified,High,visa_rewards.csv,35,2026-08_to_2026-10,Amazon return
VisaRewards-2026-09-30-38.75-36,2026-09-30,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,38.75,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,36,2026-08_to_2026-10,
VisaRewards-2026-09-28-39.80-37,2026-09-28,Visa Rewards,Shell,SHELL OIL 57442,Gas,39.80,Outflow,Expense,No,No,Excluded - Duplicate,High,visa_rewards.csv,37,2026-08_to_2026-10,"Export duplicate of source row 34 (same date, amount, description, reference)"
VisaRewards-2026-09-30-38.75-38,2026-09-30,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,38.75,Outflow,Expense,No,No,Excluded - Duplicate,High,visa_rewards.csv,38,2026-08_to_2026-10,"Export duplicate of source row 36 (same date, amount, description, reference)"
VisaRewards-2026-09-29-129.99-39,2026-09-29,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,129.99,Inflow,Refund,No,No,Excluded - Duplicate,High,visa_rewards.csv,39,2026-08_to_2026-10,"Export duplicate of source row 35 (same date, amount, description, reference); Amazon return"
VisaRewards-2026-10-02-34.12-40,2026-10-02,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,34.12,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,40,2026-08_to_2026-10,
VisaRewards-2026-10-03-33.60-41,2026-10-03,Visa Rewards,Chick-fil-A,CHICK-FIL-A #01988,Dining Out,33.60,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,41,2026-08_to_2026-10,
VisaRewards-2026-10-04-17.99-42,2026-10-04,Visa Rewards,Netflix,NETFLIX.COM,Subscriptions,17.99,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,42,2026-08_to_2026-10,
VisaRewards-2026-10-05-52.30-43,2026-10-05,Visa Rewards,Shell,SHELL OIL 57442,Gas,52.30,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,43,2026-08_to_2026-10,
VisaRewards-2026-10-08-41.40-44,2026-10-08,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,41.40,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,44,2026-08_to_2026-10,
VisaRewards-2026-10-11-19.99-45,2026-10-11,Visa Rewards,Spotify,SPOTIFY USA,Subscriptions,19.99,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,45,2026-08_to_2026-10,
VisaRewards-2026-10-12-45.60-46,2026-10-12,Visa Rewards,Shell,SHELL OIL 57442,Gas,45.60,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,46,2026-08_to_2026-10,
VisaRewards-2026-10-13-750.00-47,2026-10-13,Visa Rewards,Payment received,Payment Thank You-Mobile,,750.00,Inflow,Card Payment,No,Yes,Verified,High,visa_rewards.csv,47,2026-08_to_2026-10,
VisaRewards-2026-10-15-216.89-48,2026-10-15,Visa Rewards,Costco,COSTCO WHSE #1123,Groceries,216.89,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,48,2026-08_to_2026-10,Bank says Shopping; warehouse club treated as Groceries
VisaRewards-2026-10-15-92.60-49,2026-10-15,Visa Rewards,Olive Garden,OLIVE GARDEN #1590,Dining Out,92.60,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,49,2026-08_to_2026-10,
VisaRewards-2026-10-17-58.27-50,2026-10-17,Visa Rewards,Amazon Marketplace,AMAZON MKTPL*2K4TR8,Shopping,58.27,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,50,2026-08_to_2026-10,
VisaRewards-2026-10-19-58.40-51,2026-10-19,Visa Rewards,Shell,SHELL OIL 57442,Gas,58.40,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,51,2026-08_to_2026-10,
VisaRewards-2026-10-21-24.10-52,2026-10-21,Visa Rewards,McDonald's,MCDONALD'S F11872,Dining Out,24.10,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,52,2026-08_to_2026-10,
VisaRewards-2026-10-23-62.10-53,2026-10-23,Visa Rewards,Uber Eats,UBER *EATS,Dining Out,62.10,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,53,2026-08_to_2026-10,
VisaRewards-2026-10-25-63.11-54,2026-10-25,Visa Rewards,Purchase interest charge,PURCHASE INTEREST CHARGE,Fees & Interest,63.11,Outflow,Expense,Yes,Yes,Verified,High,visa_rewards.csv,54,2026-08_to_2026-10,
VisaRewards-2026-10-26-44.85-55,2026-10-26,Visa Rewards,Costco Gas,COSTCO GAS #1123,Gas,44.85,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,55,2026-08_to_2026-10,Bank says Shopping; Costco gas station
VisaRewards-2026-10-30-39.85-56,2026-10-30,Visa Rewards,Chipotle,CHIPOTLE 2291,Dining Out,39.85,Outflow,Expense,Yes,No,Verified,High,visa_rewards.csv,56,2026-08_to_2026-10,
```

---

**Sam:**

Got it, next.

---

**Money X-Ray:**

Block 4 of 6: **Mastercard Cash Back**
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
MastercardCashBack-2026-08-07-14.99-2,2026-08-07,Mastercard Cash Back,Amazon Prime,AMAZON PRIME*RT4K2,Subscriptions,14.99,Outflow,Expense,Yes,Yes,Verified,High,mastercard_cashback.csv,2,2026-08_to_2026-10,
MastercardCashBack-2026-08-09-2.99-3,2026-08-09,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,2.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,3,2026-08_to_2026-10,"Apple charge; Sam unsure what it is (likely an iCloud-type plan, unconfirmed)"
MastercardCashBack-2026-08-10-84.21-4,2026-08-10,Mastercard Cash Back,Target,TARGET 00012,Shopping,84.21,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,4,2026-08_to_2026-10,
MastercardCashBack-2026-08-14-96.33-5,2026-08-14,Mastercard Cash Back,Old Navy,OLD NAVY #6621,Shopping,96.33,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,5,2026-08_to_2026-10,
MastercardCashBack-2026-08-15-450.00-6,2026-08-15,Mastercard Cash Back,Payment received,AUTOPAY PAYMENT - THANK YOU,,450.00,Inflow,Card Payment,No,Yes,Verified,High,mastercard_cashback.csv,6,2026-08_to_2026-10,
MastercardCashBack-2026-08-17-10.99-7,2026-08-17,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,10.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,7,2026-08_to_2026-10,Apple charge; Sam unsure what it is. $10.99 later identified by Sam as Apple Music (cancelling)
MastercardCashBack-2026-08-20-27.33-8,2026-08-20,Mastercard Cash Back,Walgreens,WALGREENS #4410,Health,27.33,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,8,2026-08_to_2026-10,
MastercardCashBack-2026-08-24-61.40-9,2026-08-24,Mastercard Cash Back,Target,TARGET 00012,Shopping,61.40,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,9,2026-08_to_2026-10,
MastercardCashBack-2026-08-30-142.18-10,2026-08-30,Mastercard Cash Back,The Home Depot,THE HOME DEPOT #3612,Shopping,142.18,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,10,2026-08_to_2026-10,
MastercardCashBack-2026-09-01-95.00-11,2026-09-01,Mastercard Cash Back,Card annual membership fee,ANNUAL MEMBERSHIP FEE,Fees & Interest,95.00,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,11,2026-08_to_2026-10,
MastercardCashBack-2026-09-07-14.99-12,2026-09-07,Mastercard Cash Back,Amazon Prime,AMAZON PRIME*RT4K2,Subscriptions,14.99,Outflow,Expense,Yes,Yes,Verified,High,mastercard_cashback.csv,12,2026-08_to_2026-10,
MastercardCashBack-2026-09-07-88.40-13,2026-09-07,Mastercard Cash Back,Target,TARGET 00012,Shopping,88.40,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,13,2026-08_to_2026-10,
MastercardCashBack-2026-09-09-2.99-14,2026-09-09,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,2.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,14,2026-08_to_2026-10,"Apple charge; Sam unsure what it is (likely an iCloud-type plan, unconfirmed)"
MastercardCashBack-2026-09-12-34.50-15,2026-09-12,Mastercard Cash Back,DoorDash (Thai Basil),DOORDASH*THAI BASIL,Dining Out,34.50,Outflow,Expense,Yes,No,Needs Review,Medium,mastercard_cashback.csv,15,2026-08_to_2026-10,"Possible double charge: same merchant/amount/day, different reference (R101141 vs R101148); Sam says they ordered once - dispute one"
MastercardCashBack-2026-09-12-34.50-16,2026-09-12,Mastercard Cash Back,DoorDash (Thai Basil),DOORDASH*THAI BASIL,Dining Out,34.50,Outflow,Expense,Yes,No,Needs Review,Medium,mastercard_cashback.csv,16,2026-08_to_2026-10,"Possible double charge: same merchant/amount/day, different reference (R101148 vs R101141); Sam says they ordered once - dispute one"
MastercardCashBack-2026-09-13-74.10-17,2026-09-13,Mastercard Cash Back,Old Navy,OLD NAVY #6621,Shopping,74.10,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,17,2026-08_to_2026-10,
MastercardCashBack-2026-09-15-875.00-18,2026-09-15,Mastercard Cash Back,Payment received,AUTOPAY PAYMENT - THANK YOU,,875.00,Inflow,Card Payment,No,Yes,Verified,High,mastercard_cashback.csv,18,2026-08_to_2026-10,
MastercardCashBack-2026-09-17-10.99-19,2026-09-17,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,10.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,19,2026-08_to_2026-10,Apple charge; Sam unsure what it is. $10.99 later identified by Sam as Apple Music (cancelling)
MastercardCashBack-2026-09-18-284.70-20,2026-09-18,Mastercard Cash Back,Firestone Auto,FIRESTONE AUTO #0219,Transportation,284.70,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,20,2026-08_to_2026-10,
MastercardCashBack-2026-09-21-52.95-21,2026-09-21,Mastercard Cash Back,Target,TARGET 00012,Shopping,52.95,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,21,2026-08_to_2026-10,
MastercardCashBack-2026-09-27-189.00-22,2026-09-27,Mastercard Cash Back,Wayfair,WAYFAIR*FURNITURE,Shopping,189.00,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,22,2026-08_to_2026-10,
MastercardCashBack-2026-10-04-112.46-23,2026-10-04,Mastercard Cash Back,Kohl's,KOHLS #0712,Shopping,112.46,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,23,2026-08_to_2026-10,
MastercardCashBack-2026-10-07-14.99-24,2026-10-07,Mastercard Cash Back,Amazon Prime,AMAZON PRIME*RT4K2,Subscriptions,14.99,Outflow,Expense,Yes,Yes,Verified,High,mastercard_cashback.csv,24,2026-08_to_2026-10,
MastercardCashBack-2026-10-09-2.99-25,2026-10-09,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,2.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,25,2026-08_to_2026-10,"Apple charge; Sam unsure what it is (likely an iCloud-type plan, unconfirmed)"
MastercardCashBack-2026-10-12-61.77-26,2026-10-12,Mastercard Cash Back,Target,TARGET 00012,Shopping,61.77,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,26,2026-08_to_2026-10,
MastercardCashBack-2026-10-15-450.00-27,2026-10-15,Mastercard Cash Back,Payment received,AUTOPAY PAYMENT - THANK YOU,,450.00,Inflow,Card Payment,No,Yes,Verified,High,mastercard_cashback.csv,27,2026-08_to_2026-10,
MastercardCashBack-2026-10-17-10.99-28,2026-10-17,Mastercard Cash Back,Apple,APPLE.COM/BILL,Subscriptions,10.99,Outflow,Expense,Yes,Yes,Needs Review,Medium,mastercard_cashback.csv,28,2026-08_to_2026-10,Apple charge; Sam unsure what it is. $10.99 later identified by Sam as Apple Music (cancelling)
MastercardCashBack-2026-10-19-68.90-29,2026-10-19,Mastercard Cash Back,The Home Depot,THE HOME DEPOT #3612,Shopping,68.90,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,29,2026-08_to_2026-10,
MastercardCashBack-2026-10-26-93.28-30,2026-10-26,Mastercard Cash Back,Target,TARGET 00012,Shopping,93.28,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,30,2026-08_to_2026-10,
MastercardCashBack-2026-10-29-79.99-31,2026-10-29,Mastercard Cash Back,Jiffy Lube,JIFFY LUBE #1877,Transportation,79.99,Outflow,Expense,Yes,No,Verified,High,mastercard_cashback.csv,31,2026-08_to_2026-10,
```

---

**Sam:**

Got it, next.

---

**Money X-Ray:**

Block 5 of 6: **Amex Blue**
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
AmexBlue-2026-08-02-6.45-2,2026-08-02,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,6.45,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,2,2026-08_to_2026-10,
AmexBlue-2026-08-03-18.99-3,2026-08-03,Amex Blue,Hulu,HULU 877-8244858,Subscriptions,18.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,3,2026-08_to_2026-10,
AmexBlue-2026-08-03-15.99-4,2026-08-03,Amex Blue,Disney+,DISNEY PLUS,Subscriptions,15.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,4,2026-08_to_2026-10,
AmexBlue-2026-08-06-42.00-5,2026-08-06,Amex Blue,Great Clips,GREAT CLIPS #4471,Personal Care,42.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,5,2026-08_to_2026-10,
AmexBlue-2026-08-09-64.20-6,2026-08-09,Amex Blue,Petco,PETCO 1288,Pets,64.20,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,6,2026-08_to_2026-10,
AmexBlue-2026-08-12-7.10-7,2026-08-12,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,7.10,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,7,2026-08_to_2026-10,
AmexBlue-2026-08-15-54.80-8,2026-08-15,Amex Blue,AMC Theatres,AMC THEATRES 2210,Entertainment,54.80,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,8,2026-08_to_2026-10,
AmexBlue-2026-08-19-45.00-9,2026-08-19,Amex Blue,SQ *JMK LLC (unknown),SQ *JMK LLC,Uncategorized,45.00,Outflow,Expense,Yes,Yes,Needs Review,Low,amex_blue.csv,9,2026-08_to_2026-10,"Unknown merchant, $45 every month; Sam does not recognize it"
AmexBlue-2026-08-20-250.00-10,2026-08-20,Amex Blue,Payment received,ONLINE PAYMENT - THANK YOU,,250.00,Inflow,Card Payment,No,Yes,Verified,High,amex_blue.csv,10,2026-08_to_2026-10,
AmexBlue-2026-08-26-6.45-11,2026-08-26,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,6.45,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,11,2026-08_to_2026-10,
AmexBlue-2026-09-02-312.40-12,2026-09-02,Amex Blue,Delta Air Lines,DELTA AIR 0062317745,Travel,312.40,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,12,2026-08_to_2026-10,
AmexBlue-2026-09-03-18.99-13,2026-09-03,Amex Blue,Hulu,HULU 877-8244858,Subscriptions,18.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,13,2026-08_to_2026-10,
AmexBlue-2026-09-03-15.99-14,2026-09-03,Amex Blue,Disney+,DISNEY PLUS,Subscriptions,15.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,14,2026-08_to_2026-10,
AmexBlue-2026-09-04-6.95-15,2026-09-04,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,6.95,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,15,2026-08_to_2026-10,
AmexBlue-2026-09-08-42.00-16,2026-09-08,Amex Blue,Great Clips,GREAT CLIPS #4471,Personal Care,42.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,16,2026-08_to_2026-10,
AmexBlue-2026-09-10-58.75-17,2026-09-10,Amex Blue,Petco,PETCO 1288,Pets,58.75,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,17,2026-08_to_2026-10,
AmexBlue-2026-09-11-7.25-18,2026-09-11,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,7.25,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,18,2026-08_to_2026-10,
AmexBlue-2026-09-14-145.00-19,2026-09-14,Amex Blue,Banfield Pet Hospital,BANFIELD PET HOSP,Pets,145.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,19,2026-08_to_2026-10,
AmexBlue-2026-09-18-6.95-20,2026-09-18,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,6.95,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,20,2026-08_to_2026-10,
AmexBlue-2026-09-19-45.00-21,2026-09-19,Amex Blue,SQ *JMK LLC (unknown),SQ *JMK LLC,Uncategorized,45.00,Outflow,Expense,Yes,Yes,Needs Review,Low,amex_blue.csv,21,2026-08_to_2026-10,"Unknown merchant, $45 every month; Sam does not recognize it"
AmexBlue-2026-09-20-118.00-22,2026-09-20,Amex Blue,Ticketmaster (NC State),TICKETMASTER*NC STATE,Entertainment,118.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,22,2026-08_to_2026-10,
AmexBlue-2026-09-20-825.00-23,2026-09-20,Amex Blue,Payment received,ONLINE PAYMENT - THANK YOU,,825.00,Inflow,Card Payment,No,Yes,Verified,High,amex_blue.csv,23,2026-08_to_2026-10,
AmexBlue-2026-09-26-29.00-24,2026-09-26,Amex Blue,Late fee,LATE FEE,Fees & Interest,29.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,24,2026-08_to_2026-10,
AmexBlue-2026-09-27-8.10-25,2026-09-27,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,8.10,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,25,2026-08_to_2026-10,
AmexBlue-2026-10-01-7.25-26,2026-10-01,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,7.25,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,26,2026-08_to_2026-10,
AmexBlue-2026-10-03-18.99-27,2026-10-03,Amex Blue,Hulu,HULU 877-8244858,Subscriptions,18.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,27,2026-08_to_2026-10,
AmexBlue-2026-10-03-15.99-28,2026-10-03,Amex Blue,Disney+,DISNEY PLUS,Subscriptions,15.99,Outflow,Expense,Yes,Yes,Verified,High,amex_blue.csv,28,2026-08_to_2026-10,
AmexBlue-2026-10-07-7.25-29,2026-10-07,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,7.25,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,29,2026-08_to_2026-10,
AmexBlue-2026-10-08-62.00-30,2026-10-08,Amex Blue,Etsy (Crafthaus),ETSY.COM*CRAFTHAUS,Shopping,62.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,30,2026-08_to_2026-10,
AmexBlue-2026-10-08-1.86-31,2026-10-08,Amex Blue,Foreign transaction fee,FOREIGN TRANSACTION FEE,Fees & Interest,1.86,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,31,2026-08_to_2026-10,
AmexBlue-2026-10-09-42.00-32,2026-10-09,Amex Blue,Great Clips,GREAT CLIPS #4471,Personal Care,42.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,32,2026-08_to_2026-10,
AmexBlue-2026-10-11-61.30-33,2026-10-11,Amex Blue,Petco,PETCO 1288,Pets,61.30,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,33,2026-08_to_2026-10,
AmexBlue-2026-10-13-8.40-34,2026-10-13,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,8.40,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,34,2026-08_to_2026-10,
AmexBlue-2026-10-14-48.50-35,2026-10-14,Amex Blue,Sephora,SEPHORA #0331,Personal Care,48.50,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,35,2026-08_to_2026-10,
AmexBlue-2026-10-19-45.00-36,2026-10-19,Amex Blue,SQ *JMK LLC (unknown),SQ *JMK LLC,Uncategorized,45.00,Outflow,Expense,Yes,Yes,Needs Review,Low,amex_blue.csv,36,2026-08_to_2026-10,"Unknown merchant, $45 every month; Sam does not recognize it"
AmexBlue-2026-10-20-400.00-37,2026-10-20,Amex Blue,Payment received,ONLINE PAYMENT - THANK YOU,,400.00,Inflow,Card Payment,No,Yes,Verified,High,amex_blue.csv,37,2026-08_to_2026-10,
AmexBlue-2026-10-21-6.95-38,2026-10-21,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,6.95,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,38,2026-08_to_2026-10,
AmexBlue-2026-10-24-72.00-39,2026-10-24,Amex Blue,Sky Zone Raleigh,SKY ZONE RALEIGH,Entertainment,72.00,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,39,2026-08_to_2026-10,
AmexBlue-2026-10-29-7.80-40,2026-10-29,Amex Blue,Starbucks,STARBUCKS STORE 08812,Dining Out,7.80,Outflow,Expense,Yes,No,Verified,High,amex_blue.csv,40,2026-08_to_2026-10,
```

---

**Sam:**

Got it, next.

---

**Money X-Ray:**

Block 6 of 6: **Cash / manual** (all Customer-reported, one row per month)
```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
CashManual-2026-08-01-346.67-1,2026-08-01,Cash / manual,Lawn mowing (cash),"Weekend lawn mowing (cash, never deposited)",,346.67,Inflow,Income,No,Yes,Customer-reported,Medium,manual,1,2026-08_to_2026-10,Customer-reported: $80/week x 52 / 12 = $346.67/month
CashManual-2026-08-01-173.33-2,2026-08-01,Cash / manual,Lunch out (cash),Lunch out paid with lawn cash,Dining Out,173.33,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,2,2026-08_to_2026-10,"Customer-reported: $40/week x 52 / 12 = $173.33/month; from cash income, new spending"
CashManual-2026-08-01-50.00-3,2026-08-01,Cash / manual,Mom (loan repayment),Cash to Mom - repaying $600 loan,Debt Payments,50.00,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,3,2026-08_to_2026-10,Customer-reported: $50/month informal debt repayment from lawn cash
CashManual-2026-08-01-123.34-4,2026-08-01,Cash / manual,Cash jar at home,Leftover lawn cash into jar at home,,123.34,Outflow,Transfer,No,Yes,Customer-reported,Medium,manual,4,2026-08_to_2026-10,"Customer-reported: $346.67 - $173.33 - $50.00 = $123.34/month kept as cash savings (derived, not stated)"
CashManual-2026-09-01-346.67-5,2026-09-01,Cash / manual,Lawn mowing (cash),"Weekend lawn mowing (cash, never deposited)",,346.67,Inflow,Income,No,Yes,Customer-reported,Medium,manual,5,2026-08_to_2026-10,Customer-reported: $80/week x 52 / 12 = $346.67/month
CashManual-2026-09-01-173.33-6,2026-09-01,Cash / manual,Lunch out (cash),Lunch out paid with lawn cash,Dining Out,173.33,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,6,2026-08_to_2026-10,"Customer-reported: $40/week x 52 / 12 = $173.33/month; from cash income, new spending"
CashManual-2026-09-01-50.00-7,2026-09-01,Cash / manual,Mom (loan repayment),Cash to Mom - repaying $600 loan,Debt Payments,50.00,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,7,2026-08_to_2026-10,Customer-reported: $50/month informal debt repayment from lawn cash
CashManual-2026-09-01-123.34-8,2026-09-01,Cash / manual,Cash jar at home,Leftover lawn cash into jar at home,,123.34,Outflow,Transfer,No,Yes,Customer-reported,Medium,manual,8,2026-08_to_2026-10,"Customer-reported: $346.67 - $173.33 - $50.00 = $123.34/month kept as cash savings (derived, not stated)"
CashManual-2026-10-01-346.67-9,2026-10-01,Cash / manual,Lawn mowing (cash),"Weekend lawn mowing (cash, never deposited)",,346.67,Inflow,Income,No,Yes,Customer-reported,Medium,manual,9,2026-08_to_2026-10,Customer-reported: $80/week x 52 / 12 = $346.67/month
CashManual-2026-10-01-173.33-10,2026-10-01,Cash / manual,Lunch out (cash),Lunch out paid with lawn cash,Dining Out,173.33,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,10,2026-08_to_2026-10,"Customer-reported: $40/week x 52 / 12 = $173.33/month; from cash income, new spending"
CashManual-2026-10-01-50.00-11,2026-10-01,Cash / manual,Mom (loan repayment),Cash to Mom - repaying $600 loan,Debt Payments,50.00,Outflow,Expense,Yes,Yes,Customer-reported,Medium,manual,11,2026-08_to_2026-10,Customer-reported: $50/month informal debt repayment from lawn cash
CashManual-2026-10-01-123.34-12,2026-10-01,Cash / manual,Cash jar at home,Leftover lawn cash into jar at home,,123.34,Outflow,Transfer,No,Yes,Customer-reported,Medium,manual,12,2026-08_to_2026-10,"Customer-reported: $346.67 - $173.33 - $50.00 = $123.34/month kept as cash savings (derived, not stated)"
CashManual-2026-08-22-60.00-13,2026-08-22,Cash / manual,Babysitter,Babysitter (paid from Aug 22 ATM cash),Childcare,60.00,Outflow,Expense,Yes,No,Customer-reported,Medium,manual,13,2026-08_to_2026-10,"Paid with ATM cash withdrawn 2026-08-22 from Everyday Checking (already on statement); moved out of Cash & ATM, not new money"
CashManual-2026-08-22-40.00-14,2026-08-22,Cash / manual,Farmers market,Farmers market (paid from Aug 22 ATM cash),Groceries,40.00,Outflow,Expense,Yes,No,Customer-reported,Medium,manual,14,2026-08_to_2026-10,"Paid with ATM cash withdrawn 2026-08-22 from Everyday Checking (already on statement); moved out of Cash & ATM, not new money"
CashManual-2026-10-22-60.00-15,2026-10-22,Cash / manual,Halloween costumes and candy,Halloween costumes and candy (Oct 22 ATM cash),Shopping,60.00,Outflow,Expense,Yes,No,Customer-reported,Medium,manual,15,2026-08_to_2026-10,"Paid with ATM cash withdrawn 2026-10-22 from Everyday Checking (already on statement); moved out of Cash & ATM, not new money"
CashManual-2026-10-22-40.00-16,2026-10-22,Cash / manual,Pizza night,Pizza night (Oct 22 ATM cash),Dining Out,40.00,Outflow,Expense,Yes,No,Customer-reported,Medium,manual,16,2026-08_to_2026-10,"Paid with ATM cash withdrawn 2026-10-22 from Everyday Checking (already on statement); moved out of Cash & ATM, not new money"
```

That's everything. When it's imported, the spending totals in Notion should match the report: 2026-08 $5,283.67, 2026-09 $6,089.53, 2026-10 $5,336.10 (statements plus Customer-reported cash). Next month, just say "monthly checkup".
