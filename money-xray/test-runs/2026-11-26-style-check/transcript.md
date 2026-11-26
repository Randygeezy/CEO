# Money X-Ray transcript (Everyday Checking only)

---

**Sam:**

[Pastes the Money X-Ray prompt]

---

**Money X-Ray:**

Hi, I'm Money X-Ray. I help you find where your money actually goes, using statements you download from your own bank and card accounts.

This is an educational self-check. It isn't a professional audit, and I'm not an accountant, auditor or financial adviser.

Before you upload anything, blank out full account numbers, your name and your address. Your AI provider's data policy applies to whatever you share here. I'll never ask for passwords, logins, full account numbers or your Social Security number.

A few questions to start. Answer what you can. "Skip" is fine for any of them.

1. What should I call you?
2. About how much comes in each month after tax, from where, and on which days? Include money that never hits a bank: cash tips, side jobs paid in cash, selling things.
3. List every account you use with a nickname: checking, savings, credit cards, loans, buy-now-pay-later, and apps that hold money (Venmo, Cash App, PayPal). No account numbers.
4. Which account pays which? For example: "Everyday Checking pays the Visa."
5. Any debts you carry: card balances you don't pay in full, car, student or personal loans, buy-now-pay-later, money owed to family? For each one, the balance, the interest rate (APR, the yearly interest rate) and the minimum payment if you know them. They're on the statement or in the app. Skip what you don't know.
6. How much do you already have set aside: savings accounts, cash at home, anything else?
7. Do friends or family pay you back through Zelle, Venmo or Cash App?
8. What do you want from this? For example: "find where my paycheck goes" or "free up $300 a month."
9. Will you use the Money X-Ray Notion dashboard? If yes, I'll give you each account's rows to import as we go.

---

**Sam:**

1. Call me Sam.
2. I take home about $4,370 a month from Acme Logistics, paid on the 1st and 15th. My spouse takes home about $2,920 a month from Wake County Schools, also the 1st and 15th.
3. Accounts: Everyday Checking, Joint Checking, Visa Rewards (credit card), Mastercard Cash Back (credit card), Amex Blue (credit card).
4. Everyday Checking pays the Visa and the Amex, and moves $400 a month to Joint Checking. Joint Checking pays the Mastercard.
5. Debts: Visa Rewards, about $6,500 at 22.99% APR, minimum $195. A Toyota car loan: $14,600 left at 6.9%, $419 a month. I owe my mom $450 (no interest, $50 a month). The Mastercard and Amex we pay in full every month.
6. Set aside: about $3,200 in savings and maybe $400 cash in a jar at home.
7. Friends sometimes Zelle us back when we split dinner.
8. We make decent money but never seem to get ahead. I want to know where it goes and find about $300 a month to free up.
9. Yes, I want to use the Notion dashboard.

---

**Money X-Ray:**

Thanks, Sam. Here's your account map.

| Nickname | Type | Paid from |
|---|---|---|
| Everyday Checking | Checking | Your Acme Logistics pay |
| Joint Checking | Checking | $400 a month from Everyday Checking |
| Visa Rewards | Credit card | Everyday Checking |
| Mastercard Cash Back | Credit card | Joint Checking |
| Amex Blue | Credit card | Everyday Checking |
| Savings | Savings | Not said yet |
| Toyota car loan | Loan | Not said yet |
| Loan from your mom | Family loan | Not said yet |

I also noted: about $7,290 a month take-home between you two ($4,370 + $2,920), $3,200 in savings plus about $400 in the jar, and a goal of finding about $300 a month. Notion export is on.

Does this map look right?

---

**Sam:**

Yes, that's right.

---

**Money X-Ray:**

Next, statements. I need 3 months for each bank account and credit card on the map. 6 months is better. Loans don't need statements, because the payments show up in checking. If you spend from Venmo, Cash App or PayPal, those can export a statement too.

A few tips:
- CSV files work best. Most banks have a "Download" or "Export" button on the transactions page. PDFs work if they're real text, not scans.
- Send one account at a time, so each step fits inside free-plan limits.
- If uploads are blocked or used up, open the CSV in any text editor or spreadsheet, copy the rows and paste them here. If a paste is too long, send one month at a time.
- Include the statement's opening and closing balance if it shows one.

Start with Everyday Checking when you're ready.

---

**Sam:**

[Attached: everyday_checking.csv]

Here's Everyday Checking. The statement summary says: 2026-08-01 to 2026-10-31, opening balance $1,840.55, closing balance $1,680.50, total debits $13,375.05, total credits $13,215.00.

---

**Money X-Ray:**

Here's what's in the Everyday Checking file.

It covers 2026-08-01 to 2026-10-31 and has 53 rows. Money out is negative in this file and money in is positive. It also has a running balance column.

Duplicates: no two rows share the same date, amount and description, so nothing was removed. The file has no reference IDs, so I would have asked you before removing anything anyway.

How I labelled the 53 rows:

| Type | Rows | What's in it |
|---|---|---|
| Income | 6 | Acme Logistics pay, $2,185.00 on the 1st and 15th |
| Expense | 30 | Mortgage, utilities, phone, internet, car insurance, church giving, ATM cash, bank fees |
| Card Payment | 9 | Visa Rewards (shows as CHASE CARD EPAY), Amex Blue, Discover |
| Transfer | 6 | $400 a month to Joint Checking, $300 a month to savings |
| Unknown Inflow | 2 | A Zelle and a Venmo deposit (see questions) |

Banks name the card company, not your nickname. Everyday Checking pays the Visa and the Amex, and the Amex shows up as AMEX, so I matched the Chase payments to Visa Rewards. The Visa statement will confirm the amounts.

Spending from this account. Net spending means expenses minus refunds and confirmed paybacks. None apply to this account yet.

| Category | Aug | Sep | Oct |
|---|---|---|---|
| Housing (mortgage) | $1,385.00 | $1,385.00 | $1,385.00 |
| Utilities | $500.70 | $481.45 | $447.70 |
| Insurance | $186.40 | $186.40 | $186.40 |
| Gifts & Donations | $150.00 | $150.00 | $150.00 |
| Cash & ATM | $100.00 | $0.00 | $100.00 |
| Fees & Interest | $3.50 | $12.00 | $15.50 |
| Total | $2,325.60 | $2,214.85 | $2,284.60 |

Utilities here are Duke Energy, Piedmont Natural Gas, Comcast Xfinity, Verizon Wireless and City of Raleigh.

Balance check (money out includes card payments and transfers):
- Money in: Aug $4,370.00 + Sep $4,370.00 + Oct $4,475.00 = $13,215.00. Added in reverse order: $13,215.00.
- Money out: Aug $4,200.60 + Sep $4,789.85 + Oct $4,384.60 = $13,375.05. Added in reverse order: $13,375.05.
- $1,840.55 opening + $13,215.00 in - $13,375.05 out = $1,680.50.
- Statement closing balance: $1,680.50. Difference: $0.00.

That proves the math adds up. It doesn't prove every label is right, so I have a few questions. My best guess is in brackets.

1. 2026-08-20, 2026-09-20, 2026-10-20, DISCOVER E-PAYMENT, $175.00 each. A Discover card isn't on your map. (A card you forgot to list?)
2. 2026-08-28, 2026-09-28, 2026-10-28, TRANSFER TO SAVINGS XXXX8812, $300.00 each. (The savings account with your $3,200?)
3. 2026-10-16, ZELLE FROM JORDAN M, $45.00. (A friend paying you back for a dinner you split?)
4. 2026-10-25, VENMO CASHOUT, $60.00. (Something you sold, or someone paying you back?)

---

**Sam:**

1. Oh right, I forgot. We have a Discover card. I don't have that statement handy, go ahead without it.
2. Yes, that's our savings account.
3. Jordan paid me back for the Olive Garden dinner on Oct 15.
4. Not sure. Maybe something my spouse sold. Leave it as unknown.

---

**Money X-Ray:**

Thanks. Here's what changed:
- Discover is now on your map as a credit card paid from Everyday Checking. Without its statement I can't see what was bought on it. That's $525 of payments over three months going to a card I can't see into, and I'll list it under limitations.
- Savings is now on the map, fed by $300 a month from Everyday Checking. Those transfers are saving, not spending.
- Jordan's $45 is a reimbursement. The dinner was probably on a card, so I'll take it off Dining Out for October when we put the accounts together. It doesn't change this account's totals.
- The Venmo $60 stays Unknown Inflow, marked for review.

Copy this into a note. If this chat runs out, paste the prompt and your checkpoints into a new chat.

```
CHECKPOINT | Everyday Checking | 2026-08-01 to 2026-10-31
Rows 53 | Duplicates removed 0 | Balance check $0.00
Balance: opening $1,840.55, closing $1,680.50
2026-08 spending: Housing $1,385.00, Utilities $500.70, Insurance $186.40, Gifts & Donations $150.00, Cash & ATM $100.00, Fees & Interest $3.50 = Total $2,325.60
2026-09 spending: Housing $1,385.00, Utilities $481.45, Insurance $186.40, Gifts & Donations $150.00, Fees & Interest $12.00 = Total $2,214.85
2026-10 spending: Housing $1,385.00, Utilities $447.70, Insurance $186.40, Gifts & Donations $150.00, Cash & ATM $100.00, Fees & Interest $15.50 = Total $2,284.60
Income: 2026-08 $4,370.00, 2026-09 $4,370.00, 2026-10 $4,370.00 (Acme Logistics pay)
Paybacks: 2026-10-16 $45.00 from Jordan M for Olive Garden dinner on 2026-10-15, offsets Dining Out in 2026-10
Payments & transfers: 2026-08-08 out $400.00 to Joint Checking, 2026-08-12 out $750.00 to Visa Rewards, 2026-08-18 out $250.00 to Amex Blue, 2026-08-20 out $175.00 to Discover (no statement), 2026-08-28 out $300.00 to Savings, 2026-09-08 out $400.00 to Joint Checking, 2026-09-12 out $875.00 to Visa Rewards, 2026-09-18 out $825.00 to Amex Blue, 2026-09-20 out $175.00 to Discover (no statement), 2026-09-28 out $300.00 to Savings, 2026-10-08 out $400.00 to Joint Checking, 2026-10-12 out $825.00 to Visa Rewards, 2026-10-18 out $400.00 to Amex Blue, 2026-10-20 out $175.00 to Discover (no statement), 2026-10-28 out $300.00 to Savings
Recurring: Rocket Mortgage $1,385.00 monthly (1st), First Baptist Church giving $150.00 monthly (1st), Duke Energy $189.40/$171.15/$128.60 monthly (3rd), Piedmont Natural Gas $28.10/$29.40/$41.75 monthly (4th), Comcast Xfinity $80.00 monthly (5th), GEICO Auto $186.40 monthly (10th), Verizon Wireless $142.00 monthly (22nd), City of Raleigh Util $61.20/$58.90/$55.35 monthly (26th), Monthly maintenance fee $12.00 monthly (2026-09-30, 2026-10-31)
Fees & interest: 2026-08-22 non-network ATM fee $3.50, 2026-09-30 monthly maintenance fee $12.00, 2026-10-22 non-network ATM fee $3.50, 2026-10-31 monthly maintenance fee $12.00
Cash withdrawals: 2026-08-22 $100.00, 2026-10-22 $100.00
Flags: Discover card added to map, no statement; maintenance fee started 2026-09 (none in 2026-08); 2026-10-25 Venmo cashout $60.00 Unknown Inflow; Visa matched to CHASE CARD EPAY by account map
Open questions: Venmo cashout $60.00 source (left as unknown, needs review)
```

Your Notion rows for Everyday Checking are below. Paste the block into a text file, save it as `everyday-checking.csv`, then import it into the Notion transactions database. Row numbers count from the first transaction under the header.

```csv
txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes
EverydayChecking-2026-08-01-2185.00-1,2026-08-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,1,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-08-01-1385.00-2,2026-08-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,2,2026-08_to_2026-10,Mortgage
EverydayChecking-2026-08-01-150.00-3,2026-08-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,3,2026-08_to_2026-10,
EverydayChecking-2026-08-03-189.40-4,2026-08-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,189.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,4,2026-08_to_2026-10,Electric
EverydayChecking-2026-08-04-28.10-5,2026-08-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,28.10,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,5,2026-08_to_2026-10,Gas utility
EverydayChecking-2026-08-05-80.00-6,2026-08-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,6,2026-08_to_2026-10,Internet
EverydayChecking-2026-08-08-400.00-7,2026-08-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,7,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-08-10-186.40-8,2026-08-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,8,2026-08_to_2026-10,Car insurance
EverydayChecking-2026-08-12-750.00-9,2026-08-12,Everyday Checking,Chase,CHASE CARD EPAY,,750.00,Outflow,Card Payment,No,No,Verified,Medium,everyday_checking.csv,9,2026-08_to_2026-10,To Visa Rewards (matched by account map)
EverydayChecking-2026-08-15-2185.00-10,2026-08-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,10,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-08-18-250.00-11,2026-08-18,Everyday Checking,American Express,AMEX EPAYMENT ACH PMT,,250.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,11,2026-08_to_2026-10,To Amex Blue
EverydayChecking-2026-08-20-175.00-12,2026-08-20,Everyday Checking,Discover,DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,12,2026-08_to_2026-10,To Discover card (no statement)
EverydayChecking-2026-08-22-142.00-13,2026-08-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,13,2026-08_to_2026-10,Phone
EverydayChecking-2026-08-22-100.00-14,2026-08-22,Everyday Checking,ATM 7-Eleven,ATM WITHDRAWAL 7-ELEVEN #3381,Cash & ATM,100.00,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,14,2026-08_to_2026-10,Cash use not explained yet
EverydayChecking-2026-08-22-3.50-15,2026-08-22,Everyday Checking,Non-network ATM fee,NON-NETWORK ATM FEE,Fees & Interest,3.50,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,15,2026-08_to_2026-10,ATM fee
EverydayChecking-2026-08-26-61.20-16,2026-08-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,61.20,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,16,2026-08_to_2026-10,
EverydayChecking-2026-08-28-300.00-17,2026-08-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,17,2026-08_to_2026-10,To Savings (saving not spending)
EverydayChecking-2026-09-01-2185.00-18,2026-09-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,18,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-09-01-1385.00-19,2026-09-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,19,2026-08_to_2026-10,Mortgage
EverydayChecking-2026-09-01-150.00-20,2026-09-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,20,2026-08_to_2026-10,
EverydayChecking-2026-09-03-171.15-21,2026-09-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,171.15,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,21,2026-08_to_2026-10,Electric
EverydayChecking-2026-09-04-29.40-22,2026-09-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,29.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,22,2026-08_to_2026-10,Gas utility
EverydayChecking-2026-09-05-80.00-23,2026-09-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,23,2026-08_to_2026-10,Internet
EverydayChecking-2026-09-08-400.00-24,2026-09-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,24,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-09-10-186.40-25,2026-09-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,25,2026-08_to_2026-10,Car insurance
EverydayChecking-2026-09-12-875.00-26,2026-09-12,Everyday Checking,Chase,CHASE CARD EPAY,,875.00,Outflow,Card Payment,No,No,Verified,Medium,everyday_checking.csv,26,2026-08_to_2026-10,To Visa Rewards (matched by account map)
EverydayChecking-2026-09-15-2185.00-27,2026-09-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,27,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-09-18-825.00-28,2026-09-18,Everyday Checking,American Express,AMEX EPAYMENT ACH PMT,,825.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,28,2026-08_to_2026-10,To Amex Blue
EverydayChecking-2026-09-20-175.00-29,2026-09-20,Everyday Checking,Discover,DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,29,2026-08_to_2026-10,To Discover card (no statement)
EverydayChecking-2026-09-22-142.00-30,2026-09-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,30,2026-08_to_2026-10,Phone
EverydayChecking-2026-09-26-58.90-31,2026-09-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,58.90,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,31,2026-08_to_2026-10,
EverydayChecking-2026-09-28-300.00-32,2026-09-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,32,2026-08_to_2026-10,To Savings (saving not spending)
EverydayChecking-2026-09-30-12.00-33,2026-09-30,Everyday Checking,Monthly maintenance fee,MONTHLY MAINTENANCE FEE,Fees & Interest,12.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,33,2026-08_to_2026-10,First month charged (none in Aug)
EverydayChecking-2026-10-01-2185.00-34,2026-10-01,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,34,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-10-01-1385.00-35,2026-10-01,Everyday Checking,Rocket Mortgage,ROCKET MORTGAGE PMT,Housing,1385.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,35,2026-08_to_2026-10,Mortgage
EverydayChecking-2026-10-01-150.00-36,2026-10-01,Everyday Checking,First Baptist Church,FIRST BAPTIST CHURCH GIVING,Gifts & Donations,150.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,36,2026-08_to_2026-10,
EverydayChecking-2026-10-03-128.60-37,2026-10-03,Everyday Checking,Duke Energy,DUKE ENERGY BILL PAY,Utilities,128.60,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,37,2026-08_to_2026-10,Electric
EverydayChecking-2026-10-04-41.75-38,2026-10-04,Everyday Checking,Piedmont Natural Gas,PIEDMONT NATURAL GAS,Utilities,41.75,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,38,2026-08_to_2026-10,Gas utility
EverydayChecking-2026-10-05-80.00-39,2026-10-05,Everyday Checking,Comcast Xfinity,COMCAST XFINITY,Utilities,80.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,39,2026-08_to_2026-10,Internet
EverydayChecking-2026-10-08-400.00-40,2026-10-08,Everyday Checking,Transfer to Joint Checking,TRANSFER TO JOINT CHK XXXX4471,,400.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,40,2026-08_to_2026-10,To Joint Checking
EverydayChecking-2026-10-10-186.40-41,2026-10-10,Everyday Checking,GEICO,GEICO AUTO,Insurance,186.40,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,41,2026-08_to_2026-10,Car insurance
EverydayChecking-2026-10-12-825.00-42,2026-10-12,Everyday Checking,Chase,CHASE CARD EPAY,,825.00,Outflow,Card Payment,No,No,Verified,Medium,everyday_checking.csv,42,2026-08_to_2026-10,To Visa Rewards (matched by account map)
EverydayChecking-2026-10-15-2185.00-43,2026-10-15,Everyday Checking,Acme Logistics,ACME LOGISTICS PAYROLL DIR DEP,,2185.00,Inflow,Income,No,No,Verified,High,everyday_checking.csv,43,2026-08_to_2026-10,Sam's pay
EverydayChecking-2026-10-16-45.00-44,2026-10-16,Everyday Checking,Jordan M,ZELLE FROM JORDAN M,Dining Out,45.00,Inflow,Reimbursement,No,No,Verified,High,everyday_checking.csv,44,2026-08_to_2026-10,Payback for Olive Garden dinner on 2026-10-15
EverydayChecking-2026-10-18-400.00-45,2026-10-18,Everyday Checking,American Express,AMEX EPAYMENT ACH PMT,,400.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,45,2026-08_to_2026-10,To Amex Blue
EverydayChecking-2026-10-20-175.00-46,2026-10-20,Everyday Checking,Discover,DISCOVER E-PAYMENT,,175.00,Outflow,Card Payment,No,No,Verified,High,everyday_checking.csv,46,2026-08_to_2026-10,To Discover card (no statement)
EverydayChecking-2026-10-22-142.00-47,2026-10-22,Everyday Checking,Verizon Wireless,VERIZON WIRELESS,Utilities,142.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,47,2026-08_to_2026-10,Phone
EverydayChecking-2026-10-22-100.00-48,2026-10-22,Everyday Checking,ATM 7-Eleven,ATM WITHDRAWAL 7-ELEVEN #3381,Cash & ATM,100.00,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,48,2026-08_to_2026-10,Cash use not explained yet
EverydayChecking-2026-10-22-3.50-49,2026-10-22,Everyday Checking,Non-network ATM fee,NON-NETWORK ATM FEE,Fees & Interest,3.50,Outflow,Expense,Yes,No,Verified,High,everyday_checking.csv,49,2026-08_to_2026-10,ATM fee
EverydayChecking-2026-10-25-60.00-50,2026-10-25,Everyday Checking,Venmo,VENMO CASHOUT,,60.00,Inflow,Unknown Inflow,No,No,Needs Review,Low,everyday_checking.csv,50,2026-08_to_2026-10,Source unknown; maybe something spouse sold
EverydayChecking-2026-10-26-55.35-51,2026-10-26,Everyday Checking,City of Raleigh Utilities,CITY OF RALEIGH UTIL,Utilities,55.35,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,51,2026-08_to_2026-10,
EverydayChecking-2026-10-28-300.00-52,2026-10-28,Everyday Checking,Transfer to Savings,TRANSFER TO SAVINGS XXXX8812,,300.00,Outflow,Transfer,No,No,Verified,High,everyday_checking.csv,52,2026-08_to_2026-10,To Savings (saving not spending)
EverydayChecking-2026-10-31-12.00-53,2026-10-31,Everyday Checking,Monthly maintenance fee,MONTHLY MAINTENANCE FEE,Fees & Interest,12.00,Outflow,Expense,Yes,Yes,Verified,High,everyday_checking.csv,53,2026-08_to_2026-10,
```

Next, send Joint Checking the same way: the CSV plus its opening and closing balance.
