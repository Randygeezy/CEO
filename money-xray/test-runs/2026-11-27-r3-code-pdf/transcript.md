# Money X-Ray transcript (v3 flow, code tool available)

---

### Customer (message 1)

*(pastes the full Money X-Ray prompt)*

---

### AI

I'm Money X-Ray. I read your bank and card statements and show you where your money actually goes. This is an educational self-analysis, not financial advice.

Privacy: CSV downloads usually contain no account number, name or address. Most bank PDFs show only the last 4 digits, and your AI provider's data policy applies to whatever you upload.

Upload the last 3 months of statements for every checking account, savings account and credit card you use. That's three monthly statements per account, or one download that covers 3 months (6 is even better). A single monthly statement only shows one month. Add Venmo, Cash App or PayPal if you spend from them. Optional: retirement, investment or loan statements, for your net worth.

Where to find them: in your banking or card app under "Statements" or "Documents", in the monthly statement emails, or on the bank's website, where the "Download" or "Export" button gives CSV files. Card CSVs often leave out the balance, so for cards the PDF statements work best (or both).

Send them all at once if you can. If the chat won't take them all, send a few at a time and type **done** when you've finished. If uploads don't work, open the CSV, copy the rows and paste them in.

---

### Customer (message 2)

*(uploads 15 PDFs: Everyday_Checking, Joint_Checking, Visa_Rewards, Mastercard_Cash_Back and Amex_Blue, each for August, September and October 2026)*

done

---

### AI

Got all 15 statements. Here's what they show.

**What I received**

| Account (nickname) | Type | Statements | Period | Rows | Direction of amounts |
|---|---|---|---|---|---|
| Everyday checking | Bank checking | Aug, Sep, Oct | Aug 1 to Oct 31 | 53 | Withdrawals and deposits in separate columns, running balance shown |
| Joint checking | Bank checking (credit union) | Aug, Sep, Oct | Aug 1 to Oct 31 | 45 | Same layout |
| Visa card | Credit card | Aug, Sep, Oct | Aug 1 to Oct 31 | 52 | Charges and payments/credits in separate columns |
| Mastercard | Credit card | Aug, Sep, Oct | Aug 1 to Oct 31 | 30 | Same layout |
| Amex card | Credit card | Aug, Sep, Oct | Aug 1 to Oct 31 | 39 | Same layout |

## 1. The answer in one paragraph

From your statements, your household spends about $5,422 a month and takes home $7,290 a month in pay. Housing is the biggest share ($1,385, 26%), then groceries ($572), utilities ($477) and shopping ($476). The three biggest findings: (1) about $1,570 a month is left over on paper, and most of it is piling up in Joint checking, which grew from $960 to $5,700 in three months, while (2) the Visa card charges about 23% interest, costs about $122 a month in interest, and its balance still went up $298 because new Visa spending (about $794 a month) eats almost all of what you pay it. (3) Subscriptions run about $2,100 a year across three cards and the joint account, with some overlap (Spotify and Apple Music; Netflix, Hulu and Disney+), plus a $45 monthly charge from "SQ *JMK LLC" I can't identify.

## 2. How much to trust this

| Account | Balance check (all 3 months) | Opening Aug 1 | Closing Oct 31 |
|---|---|---|---|
| Everyday checking | $0.00 each month | $1,840.55 | $1,680.50 |
| Joint checking | $0.00 each month | $960.00 | $5,699.99 |
| Visa card | $0.00 each month | $6,180.00 | $6,477.85 |
| Mastercard | $0.00 each month | $1,120.00 | $1,112.91 |
| Amex card | $0.00 each month | $640.00 | $645.65 |

- Every row also matched the running balance (checking) and the statement's own totals (cards). A $0.00 result proves the math adds up, not that every category is right.
- Duplicates removed: 0. These are statements, not overlapping downloads. Two identical DoorDash charges on Sep 12 are kept, because the card's own total includes both. They're flagged as a possible double charge.
- Excluded as not spending: 9 card payments from checking ($5,700) and the 9 matching payments received on the cards, 3 payments to Discover ($525), 3 transfers of $400 from Everyday to Joint (matched each month), and 3 transfers of $300 to savings.
- Payment matching: in September both the Visa and the Mastercard received $875. The $875 "CHASE CARD EPAY" (Sep 12) lands on the Visa (Sep 13), and the $875 "CITI AUTOPAY" from Joint (Sep 14) can only be the Mastercard (Sep 15), since it left after the Visa payment arrived.
- Accounts I couldn't see: a Discover card (Everyday pays it $175 on the 20th each month) and a savings account ending 8812 ($300 on the 28th). The Discover payments aren't counted as spending, but whatever is bought on that card is invisible to me. A Toyota loan is paid $419 a month, but with no loan statement I don't know what's left on it.
- My guesses: Costco warehouse is Groceries; the two Apple charges are iCloud storage ($2.99) and Apple Music ($10.99); Home Depot and Wayfair are Shopping; car repairs are Transportation; SQ *JMK LLC is Uncategorized.
- Not explained yet: $45 Zelle from J.M. (Oct 16) and a $60 Venmo cashout (Oct 25). Neither is counted as income.

## 3. Money in vs. money out

| Month | Income (pay) | Spending | Saved (to savings) | Left over |
|---|---|---|---|---|
| Aug | $7,290.00 | $5,121.24 | $300.00 | $1,868.76 |
| Sep | $7,290.00 | $5,926.51 | $300.00 | $1,063.49 |
| Oct | $7,290.00 | $5,218.72 | $300.00 | $1,771.28 |
| Average | $7,290.00 | $5,422.16 | $300.00 | $1,567.84 |

Income is $4,370 to Everyday (paid the 1st and 15th) and $2,920 to Joint (also the 1st and 15th).

If you feel broke even with money left over, here's where it went. It adds up to the cent each month:

| Month | Checking balances grew | Paid to Discover (unseen card) | Card balances grew (spent, not yet paid) | Unexplained money in |
|---|---|---|---|---|
| Aug | +$1,843.77 | $175.00 | +$150.01 | $0 |
| Sep | +$893.11 | $175.00 | +$4.62 | $0 |
| Oct | +$1,843.06 | $175.00 | +$141.78 | $105.00 |

Most of it is sitting in Joint checking. Some goes to a card I can't see.

## 4. Spending by category

| Category | Aug | Sep | Oct | Average | Share |
|---|---|---|---|---|---|
| Housing | $1,385.00 | $1,385.00 | $1,385.00 | $1,385.00 | 26% |
| Groceries | $593.15 | $564.64 | $559.54 | $572.44 | 11% |
| Utilities | $500.70 | $481.45 | $447.70 | $476.62 | 9% |
| Shopping | $493.73 | $443.09 | $490.80 | $475.87 | 9% |
| Debt Payments | $419.00 | $419.00 | $419.00 | $419.00 | 8% |
| Dining Out | $277.72 | $373.43 | $331.30 | $327.48 | 6% |
| Gas | $191.40 | $178.05 | $201.15 | $190.20 | 4% |
| Insurance | $186.40 | $186.40 | $186.40 | $186.40 | 3% |
| Fees & Interest | $123.24 | $257.93 | $141.42 | $174.20 | 3% |
| Childcare | $170.00 | $170.00 | $170.00 | $170.00 | 3% |
| Health | $200.48 | $184.75 | $111.70 | $165.64 | 3% |
| Gifts & Donations | $150.00 | $150.00 | $150.00 | $150.00 | 3% |
| Subscriptions | $124.42 | $126.92 | $175.92 | $142.42 | 3% |
| Transportation | $0.00 | $284.70 | $79.99 | $121.56 | 2% |
| Pets | $64.20 | $203.75 | $61.30 | $109.75 | 2% |
| Travel | $0.00 | $312.40 | $0.00 | $104.13 | 2% |
| Entertainment | $54.80 | $118.00 | $72.00 | $81.60 | 2% |
| Cash & ATM | $100.00 | $0.00 | $100.00 | $66.67 | 1% |
| Personal Care | $42.00 | $42.00 | $90.50 | $58.17 | 1% |
| Uncategorized | $45.00 | $45.00 | $45.00 | $45.00 | 1% |
| **Total** | **$5,121.24** | **$5,926.51** | **$5,218.72** | **$5,422.16** | 100% |

Net of refunds: Groceries already has the $18.99 Kroger refund (Oct 20) taken off, and Shopping has the $129.99 Amazon refund (Sep 29). Shares don't add to exactly 100% because of rounding.

```
Housing            ████████████████████ $1,385
Groceries          ████████ $572
Utilities          ███████ $477
Shopping           ███████ $476
Debt Payments      ██████ $419
Dining Out         █████ $327
Gas                ███ $190
Insurance          ███ $186
Fees & Interest    ███ $174
Childcare          ██ $170
Health             ██ $166
Gifts & Donations  ██ $150
Subscriptions      ██ $142
Transportation     ██ $122
Pets               ██ $110
Travel             ██ $104
Entertainment      █ $82
Cash & ATM         █ $67
Personal Care      █ $58
Uncategorized      █ $45
```

## 5. Trends (changes over 15% and $25)

| Category | Change | What's behind it |
|---|---|---|
| Dining Out | $278 (Aug) → $373 (Sep, +34%) → $331 (Oct, +19% vs Aug) | Sep: DoorDash $34.50 twice, Outback $96.10. Oct: Olive Garden $92.60, Uber Eats $62.10. Chipotle shows up 6 times in 3 months ($226.45) and Starbucks 12 times ($86.90): a habit, not a subscription. |
| Subscriptions | $124 → $176 in Oct (+41%) | Planet Fitness annual fee $49 (Oct 6); Netflix went from $15.49 to $17.99 in Sep. |
| Health | $200 (Aug) → $112 (Oct, −44%) | Aug had a $95 dental visit; Sep had LabCorp $112.60. |
| Personal Care | $42 → $91 in Oct (+115%) | Sephora $48.50 (Oct 14). |
| Transportation | $0 → $285 (Sep) → $80 (Oct) | Firestone $284.70 (Sep 18), Jiffy Lube $79.99 (Oct 29). |
| Travel | $0 → $312 (Sep) → $0 | Delta $312.40 (Sep 2). One-off. |
| Pets | $64 → $204 (Sep) → $61 | Banfield vet $145 (Sep 14). |
| Entertainment | $55 → $118 (Sep) → $72 | Ticketmaster NC State $118 (Sep), Sky Zone $72 (Oct). |
| Fees & Interest | $123 → $258 (Sep) → $141 | Sep: Mastercard annual fee $95, Amex late fee $29. |

## 6. Subscriptions and recurring charges

| Service | Paid from | Latest amount | Yearly cost | Note |
|---|---|---|---|---|
| Netflix | Visa | $17.99 | $215.88 | Price went up from $15.49 in Sep |
| Spotify | Visa | $19.99 | $239.88 | Overlaps with Apple Music |
| Hulu | Amex | $18.99 | $227.88 | Overlaps with Netflix and Disney+ |
| Disney+ | Amex | $15.99 | $191.88 | Overlaps with Netflix and Hulu |
| Amazon Prime | Mastercard | $14.99 | $179.88 | |
| Apple (my guess: iCloud storage) | Mastercard | $2.99 | $35.88 | |
| Apple (my guess: Apple Music) | Mastercard | $10.99 | $131.88 | Overlaps with Spotify |
| Planet Fitness | Joint | $24.99 + $49 annual fee | $348.88 | |
| SQ *JMK LLC | Amex | $45.00 on the 19th | $540.00 | Don't recognize it |
| **Total** | | | **$2,112.04** | Spread across 3 cards and Joint checking |

Recurring bills (yearly cost uses the 3-month average for bills that vary):

| Bill | Paid from | Monthly | Yearly |
|---|---|---|---|
| Rocket Mortgage | Everyday | $1,385.00 | $16,620.00 |
| Toyota Financial | Joint | $419.00 | $5,028.00 |
| Geico auto | Everyday | $186.40 | $2,236.80 |
| Kids R Kids afterschool | Joint | $170.00 | $2,040.00 |
| Duke Energy | Everyday | avg $163.05 | $1,956.60 |
| First Baptist giving | Everyday | $150.00 | $1,800.00 |
| Verizon | Everyday | $142.00 | $1,704.00 |
| Comcast Xfinity | Everyday | $80.00 | $960.00 |
| City of Raleigh utilities | Everyday | avg $58.48 | $701.80 |
| Piedmont Natural Gas | Everyday | avg $33.08 | $397.00 |
| Mastercard annual fee | Mastercard | $95 a year | $95.00 |

Not spending, but regular: $175 a month to Discover, $300 a month to savings, $400 a month from Everyday to Joint.

## 7. Fees and interest ($522.59 in 3 months)

| Fee | Date(s) | Amount | How to avoid it |
|---|---|---|---|
| Visa purchase interest | Aug 25, Sep 25, Oct 25 | $365.73 ($119.74, $121.93, $124.06) | Pay the balance down; interest stops once the full statement balance is paid each month |
| Mastercard annual fee | Sep 1 | $95.00 | Ask for a no-fee version of the card, or check the cash back you earn beats $95 |
| Amex late fee | Sep 26 | $29.00 | Set autopay for at least the minimum; you can often ask for a one-time refund of the fee |
| Everyday maintenance fee | Sep 30, Oct 31 | $24.00 | New since Sep (none in Aug). Banks usually waive it for a minimum balance or direct deposit; check your bank's rule |
| Non-network ATM fee | Aug 22, Oct 22 | $7.00 | Use your own bank's ATMs or get cash back at a store |
| Foreign transaction fee | Oct 8 (Etsy) | $1.86 | Charged because the seller was abroad; a card with no foreign fee avoids it |

## 8. Debt

APR means the yearly interest rate on a balance.

| Debt | Balance | APR | Minimum | This month's interest |
|---|---|---|---|---|
| Visa card | $6,477.85 | 23.23% (estimated from October's interest) | $188.84 (my guess: 1% of balance + interest) | $125.40 |
| Discover card | not uploaded | ? | ? | ? |
| Toyota loan | not known without a loan statement | ? | $419 paid each month | ? |

- The Visa costs you the most. Its October interest was $124.06, and the balance grew $297.85 in three months even though you paid it $2,450.
- Mastercard ($1,112.91) and Amex ($645.65) carry statement balances but charged no interest. My guess: probably paid in full (an interest-free grace period), so I'm not treating them as debt.
- Payoff order: right now the Visa is the only debt I can measure, so it's first both ways. Avalanche (highest APR first, least interest) and snowball (smallest balance first, quickest wins) can only be ordered once I know the Discover and Toyota numbers.

## 9. Net worth from your statements only

| | Amount |
|---|---|
| Everyday checking | $1,680.50 |
| Joint checking | $5,699.99 |
| **What you have** | **$7,380.49** |
| Visa card | −$6,477.85 |
| Mastercard (still owes this statement until paid) | −$1,112.91 |
| Amex card (still owes this statement until paid) | −$645.65 |
| **What you owe** | **−$8,236.41** |
| **Net worth, from your statements only (Oct 31)** | **−$855.92** |
| **Liquid net worth** (cash and bank minus card balances) | **−$855.92** |

Liquid net worth is the money really free right now. Here it's below zero, which is often why people who earn well still feel broke. Your savings, Discover, the Toyota loan, your home and any retirement accounts aren't in this yet.

---

Copy this into a note. If the chat runs out, paste the prompt and this block into a new chat and type continue.

```
SAVE | Money X-Ray | 2026-08-01 to 2026-10-31
Everyday checking (2026-08-01 to 2026-10-31): rows 53, duplicates 0, balance check $0.00, opening $1,840.55, closing $1,680.50
Joint checking (2026-08-01 to 2026-10-31): rows 45, duplicates 0, balance check $0.00, opening $960.00, closing $5,699.99
Visa card (2026-08-01 to 2026-10-31): rows 52, duplicates 0, balance check $0.00, opening $6,180.00, closing $6,477.85
Mastercard (2026-08-01 to 2026-10-31): rows 30, duplicates 0, balance check $0.00, opening $1,120.00, closing $1,112.91
Amex card (2026-08-01 to 2026-10-31): rows 39, duplicates 0, balance check $0.00, opening $640.00, closing $645.65
2026-08 spending: Housing $1385.00, Groceries $593.15, Utilities $500.70, Shopping $493.73, Debt Payments $419.00, Dining Out $277.72, Gas $191.40, Insurance $186.40, Fees & Interest $123.24, Childcare $170.00, Health $200.48, Gifts & Donations $150.00, Subscriptions $124.42, Pets $64.20, Entertainment $54.80, Cash & ATM $100.00, Personal Care $42.00, Uncategorized $45.00 = Total $5121.24
2026-09 spending: Housing $1385.00, Groceries $564.64, Utilities $481.45, Shopping $443.09, Debt Payments $419.00, Dining Out $373.43, Gas $178.05, Insurance $186.40, Fees & Interest $257.93, Childcare $170.00, Health $184.75, Gifts & Donations $150.00, Subscriptions $126.92, Transportation $284.70, Pets $203.75, Travel $312.40, Entertainment $118.00, Personal Care $42.00, Uncategorized $45.00 = Total $5926.51
2026-10 spending: Housing $1385.00, Groceries $559.54, Utilities $447.70, Shopping $490.80, Debt Payments $419.00, Dining Out $331.30, Gas $201.15, Insurance $186.40, Fees & Interest $141.42, Childcare $170.00, Health $111.70, Gifts & Donations $150.00, Subscriptions $175.92, Transportation $79.99, Pets $61.30, Entertainment $72.00, Cash & ATM $100.00, Personal Care $90.50, Uncategorized $45.00 = Total $5218.72
Income: 2026-08 $7290.00, 2026-09 $7290.00, 2026-10 $7290.00
Paybacks: none confirmed (2026-10-16 $45 from J.M. unconfirmed; 2026-10-25 $60 Venmo unknown)
Payments & transfers: monthly out $750/$875/$825 Everyday to Visa; $250/$825/$400 Everyday to Amex; $450/$875/$450 Joint to Mastercard; $400 Everyday to Joint; $175 to Discover NOT UPLOADED; $300 to savings ending 8812 NOT UPLOADED
Recurring: Netflix $17.99 monthly, Spotify $19.99 monthly, Hulu $18.99 monthly, Disney+ $15.99 monthly, Amazon Prime $14.99 monthly, Apple $2.99 monthly, Apple $10.99 monthly, Planet Fitness $24.99 monthly + $49 annual (2026-10-06), SQ *JMK LLC $45 monthly (19th), Mastercard fee $95 annual (2026-09-01), mortgage $1385, Toyota $419, Geico $186.40, Kids R Kids $170, church $150, Verizon $142, Comcast $80
Fees & interest: 2026-08-25 Visa interest $119.74, 2026-09-25 Visa interest $121.93, 2026-10-25 Visa interest $124.06, 2026-09-01 Mastercard annual fee $95, 2026-09-26 Amex late fee $29, 2026-09-30 maintenance fee $12, 2026-10-31 maintenance fee $12, 2026-08-22 ATM fee $3.50, 2026-10-22 ATM fee $3.50, 2026-10-08 foreign transaction fee $1.86
Cash withdrawals: 2026-08-22 $100, 2026-10-22 $100
Debts: Visa $6477.85, APR 23.23% (estimated), min $188.84 (guess); Discover unknown; Toyota loan unknown balance, $419/month   Method: not chosen
Cancelled or cut: none yet
Budget targets: none yet
Net worth 2026-10-31: assets $7380.49, liabilities $8236.41, net worth -$855.92, liquid -$855.92 (statements only)
Flags: DoorDash $34.50 x2 on 2026-09-12 (possible double charge), Netflix price increase $15.49 to $17.99, unknown SQ *JMK LLC, missing Discover and savings statements
Open questions: Discover balance/APR, savings, Visa APR/min, cash, J.M. Zelle, Venmo $60, SQ *JMK LLC, DoorDash
```

---

A few questions, most important first. Each has my guess, so "ok" works for any of them.

1. $175 a month goes to DISCOVER (Aug 20, Sep 20, Oct 20), but you didn't upload that card. Upload it, or tell me the balance, APR and minimum. My guess: a card carrying a balance.
2. $300 a month goes to savings ending 8812 (the 28th). My guess: your own savings account, so it counts as saving. Right?
3. The Visa statements don't show the APR or minimum. My guess: about 23.2% APR (estimated) and a $189 minimum. What are the real ones?
4. Any cash money that's not on these statements? (cash pay, or what the $100 ATM cash on Aug 22 and Oct 22 paid for). Skip if none.
5. $45 from J.M. (Zelle) on Oct 16. My guess: paying you back for the Oct 15 Olive Garden dinner ($92.60). Right?
6. $60 Venmo cashout on Oct 25. My guess: unknown. What was it?
7. SQ *JMK LLC, $45 on the 19th each month on the Amex. My guess: unknown. What is it?
8. DoorDash Thai Basil, $34.50 twice on Sep 12 on the Mastercard. My guess: a double charge. Did you order once or twice?

Answer any of these, or reply **ok** to keep my guesses.

---

### Customer (message 3)

1. Oh right, I forgot. We have a Discover card. I don't have that statement handy, go ahead without it. About $2,140, 27.24% APR, minimum $65.
2. Yes, that's our savings account.
3. 22.99%, minimum $195.
4. I mow lawns on weekends for cash, about $80 a week. I never deposit it. Out of that I spend about $40 a week on lunch out, and I give my mom $50 a month in cash to pay back $600 I borrowed from her. The rest goes in a jar at home. The $100 ATM cash in August: $60 went to the babysitter and $40 to the farmers market. The $100 in October: $60 on Halloween costumes and candy, $40 on pizza night. That's everything. No Venmo or Cash App spending beyond what's on the statements.
5. Jordan paid me back for the Olive Garden dinner on Oct 15.
6. Not sure. Maybe something my spouse sold. Leave it as unknown.
7. No idea what that is.
8. We only ordered once.

---

### AI

Thanks. Here's only what changed.

**Updates**

- Discover: $2,140 at 27.24% APR, minimum $65 (Customer-reported). It's now your most expensive debt by rate.
- Savings confirmed. The $300 a month counts as saving.
- Visa: 22.99% APR, minimum $195. This month's interest: $6,477.85 × 22.99% ÷ 12 = $124.10.
- J.M.'s $45 is a reimbursement. Dining Out in October drops by $45.
- Venmo $60 stays Unknown Inflow. Not counted as income.
- SQ *JMK LLC stays Uncategorized. It's $540 a year. Worth looking up on your Amex account (tap the charge for the merchant's details) and disputing if it isn't yours.
- DoorDash: one of the two $34.50 charges looks like a double charge. Worth disputing with the Mastercard. It stays in spending until it's refunded.
- Mom: $600 borrowed, $50 a month in cash. I don't know what's left yet (I'll ask with the debt plan if you pick it).

**Cash (Customer-reported, on its own line everywhere)**

| Item | Math | Monthly | Category |
|---|---|---|---|
| Lawn mowing pay (never deposited) | $80 × 52 ÷ 12 | $346.67 | Income |
| Lunch out | $40 × 52 ÷ 12 | $173.33 | Dining Out |
| Cash to Mom | $50 | $50.00 | Debt Payments |
| Rest into the jar | $346.67 − $173.33 − $50 | $123.34 | Saving |

The ATM cash was already counted, so I moved it rather than adding it: Aug 22's $100 became $60 Childcare (babysitter) and $40 Groceries (farmers market); Oct 22's $100 became $60 Shopping (Halloween) and $40 Dining Out (pizza night). Cash & ATM is now $0. Your cash spending ($223.33 a month) is less than your cash pay, so there's no gap.

**New totals**

| Month | Income (pay + cash) | Spending | of which cash (Customer-reported) | Saved (savings + jar) | Left over |
|---|---|---|---|---|---|
| Aug | $7,636.67 | $5,344.57 | $323.33 | $423.34 | $1,868.76 |
| Sep | $7,636.67 | $6,149.84 | $223.33 | $423.34 | $1,063.49 |
| Oct | $7,636.67 | $5,397.05 | $323.33 | $423.34 | $1,816.28 |
| Average | $7,636.67 | $5,630.49 | $290.00 | $423.34 | $1,582.84 |

Categories that changed (monthly average): Dining Out $327.48 → $499.15 (now 9% of spending), Debt Payments $419 → $469, Childcare $170 → $190, Groceries $572.44 → $585.78, Shopping $475.87 → $495.87, Cash & ATM $66.67 → $0.

**Debt, sorted by APR**

| Debt | Balance | APR | Minimum | This month's interest |
|---|---|---|---|---|
| Discover (Customer-reported) | $2,140.00 | 27.24% | $65 | $48.58 |
| Visa card | $6,477.85 | 22.99% | $195 | $124.10 |
| Toyota loan | not known | ? | $419 | ? |
| Mom | not known (from $600) | 0% | $50 | $0 |

The Visa costs the most each month ($124.10). Avalanche order: Discover, then Visa. Snowball order: Discover ($2,140), then Visa ($6,477.85). Same two first either way; the Toyota loan and Mom go in once I know what's left.

**Net worth, from your statements only:** what you have $7,380.49; what you owe $8,236.41 + Discover $2,140 = $10,376.41. Net worth −$2,995.92, liquid net worth −$2,995.92. Savings and the jar go in when you give me their balances.

---

What you can do next. All optional. Pick by number, and put what each pick needs in the same reply so I can do it all in one go.

1. **Cut costs:** tell me which items from the report you want to cut, and your monthly savings goal if you have one.
2. **Debt-free date:** tell me how much extra you can put toward debt each month, whether any idle cash should go to it (and how much cushion to keep), and whether you want avalanche, snowball or both. Also what's left on the Toyota loan (and its APR) and what you still owe your mom.
3. **Full net worth:** add your home value and mortgage, car values and loans, retirement balances, and your savings and jar (upload a statement or type a rough number).
4. **Budget:** I'll build a monthly budget from your averages. Tell me any targets you want, or reply ok for my suggestions.
5. **Spreadsheet export:** the transactions as a CSV file, to import into Notion, Google Sheets or Excel.
6. **PDF report:** the whole report as one downloadable PDF to keep or print.
7. **Monthly checkup:** come back next month, paste the prompt and your save block, and upload the new month.

---

### Customer (message 4)

1, 2, 3, 4 and 5.

1: Cancel Hulu and Apple Music (keep Spotify), and look into the SQ *JMK LLC charge. Savings goal: about $300 a month.
2: I can put $300 extra a month toward debt. Use the money in Joint Checking, but keep $2,000 there as a cushion. Don't touch savings or the jar. Avalanche. Discover is about $2,140, 27.24% APR, minimum $65.
3: Our house is worth about $340,000; the mortgage balance is $248,000. The Toyota is worth about $18,500 (loan $14,600 at 6.9%). Our second car is paid off, worth maybe $6,000. My 401(k) has $42,000 and my spouse's 403(b) has $18,500. No student loans or medical bills. Savings $3,200, jar $400. I owe Mom $450.
4: Suggest the targets. Dining out $280.
5: Yes, all accounts.

---

### AI

Here are all five.

## 1. Cut costs

| Action | Monthly | Yearly |
|---|---|---|
| Cancel Hulu | $18.99 | $227.88 |
| Cancel Apple Music (my guess: the $10.99 Apple charge; check Settings > Subscriptions on your iPhone) | $10.99 | $131.88 |
| **Potential savings** | **$29.98** | **$359.76** |
| Look into SQ *JMK LLC (only counts if it stops) | up to $45.00 | up to $540.00 |
| If SQ *JMK LLC stops too | $74.98 | $899.76 |

Against your $300 a month goal, the two cancellations fall short by $270.02. If the SQ *JMK LLC charge stops too, you're short by $225.02.

Your dining target in the budget below ($280) would free another $219.15 a month against your average, which brings the total to $294.13, $5.87 under your goal. One catch: $173.33 of that average is your cash lunches from lawn money. Cutting those grows the jar, not your bank balance. If lunches stay the same, a $280 target leaves $106.67 for all other eating out, down from $325.82.

## 2. Debt-free plan (avalanche)

**Starting point**

| Debt | Balance | APR | Minimum | Source |
|---|---|---|---|---|
| Discover | $2,140.00 | 27.24% | $65 | Customer-reported |
| Visa card | $6,477.85 | 22.99% | $195 | Statement balance (Oct 31); APR and minimum Customer-reported |
| Toyota loan | $14,600.00 | 6.90% | $419 | Customer-reported (payment seen on statements) |
| Mom | $450.00 | 0% | $50 | Customer-reported |

Mortgage is left out of the payoff order (it's in net worth).

**Lump sum from Joint checking:** $5,699.99 balance − $2,000 cushion − $1,112.91 Mastercard statement balance that Joint pays next = **$2,587.08**. I left money for the full Mastercard balance because I can't tell from the statements whether it gets paid in full. I'm assuming November's regular Joint bills (Toyota, after-school, groceries) come out of your spouse's November paychecks, as they did each month from Aug to Oct. Savings and the jar aren't touched.

**Monthly budget for debt:** minimums $729 ($65 + $195 + $419 + $50) + $300 extra = $1,029. When a debt is paid off, its payment rolls onto the next target.

**Results** (month 1 = November 2026, lump sum paid now; interest added each month, then payments)

| Plan | Debt-free in | Debt-free month | Total interest |
|---|---|---|---|
| Avalanche (your pick) | 23 months | Sep 2028 | $2,007.48 |
| Snowball (for comparison) | 23 months | Sep 2028 | $2,061.33 |
| Minimums only (no lump sum, no extra, no rollover) | 62 months | Dec 2031 | $7,503.15 |

Avalanche saves $53.85 compared with snowball and $5,495.67 compared with paying minimums only.

| Debt | Avalanche payoff | Snowball payoff | Minimums only |
|---|---|---|---|
| Discover | now (lump sum) | Nov 2026 | Dec 2031 |
| Mom | Jul 2027 | now (lump sum) | Jul 2027 |
| Visa card | Oct 2027 | Oct 2027 | Apr 2031 |
| Toyota loan | Sep 2028 | Sep 2028 | Jan 2030 |

**Your to-do**

- Now, from Joint checking: pay $2,140.00 to Discover (that clears it) and $447.08 to the Visa.
- This month: pay $560 to the Visa ($195 minimum + $300 extra + the $65 Discover no longer needs). Pay the minimum on the others: Toyota $419, Mom $50.
- Next target: the Visa. After it's gone (Oct 2027), its $560 plus Mom's freed $50 go to the Toyota loan.

**This only works if the Visa stops growing.** From your statements, the Visa takes about $794 a month in new purchases (after the Amazon refund). That's more than the $560 plan payment, so the balance would keep going up. Move everyday spending to a card you pay in full each month, or pay the Visa's new charges in full on top of the plan.

Notes: you pay Discover $175 now; the plan uses its $65 minimum and counts the rest inside the $300 extra. Minimums are held fixed here; real card minimums shrink as balances drop. Never miss a minimum. Balance transfers and consolidation loans have fees and fine print, so they're something to look into, not a recommendation. This is an educational plan, not financial advice.

## 3. Full net worth

Statement values as of Oct 31, 2026. Typed-in values are as of today (Nov 27, 2026).

| Owned | Amount | Source |
|---|---|---|
| Everyday checking | $1,680.50 | Statement |
| Joint checking | $5,699.99 | Statement |
| Savings | $3,200.00 | Customer-reported |
| Cash jar | $400.00 | Customer-reported |
| Your 401(k) | $42,000.00 | Customer-reported |
| Spouse's 403(b) | $18,500.00 | Customer-reported |
| Home | $340,000.00 | Customer-reported |
| Toyota | $18,500.00 | Customer-reported |
| Second car | $6,000.00 | Customer-reported |
| **Total owned** | **$435,980.49** | |

| Owed | Amount | Source |
|---|---|---|
| Mortgage | $248,000.00 | Customer-reported |
| Toyota loan | $14,600.00 | Customer-reported |
| Visa card | $6,477.85 | Statement |
| Discover card | $2,140.00 | Customer-reported |
| Mastercard (current statement, until paid) | $1,112.91 | Statement |
| Amex card (current statement, until paid) | $645.65 | Statement |
| Mom | $450.00 | Customer-reported |
| **Total owed** | **$273,426.41** | |

**Net worth: $162,554.08**

**Liquid net worth: $154.08.** That's cash and bank ($10,980.49, including savings and the jar) minus card balances ($10,376.41) and what you owe your mom ($450). Most of what you own is in the house, the cars and retirement accounts, which you can't spend. The money really free right now is about $154, and that's a big part of why it feels like you never get ahead.

## 4. Budget

| Category | Monthly average | Target | Type |
|---|---|---|---|
| Housing | $1,385.00 | $1,385.00 | Fixed |
| Groceries | $585.78 | $525.00 | Flexible (−10%) |
| Dining Out | $499.15 | $280.00 | Your target (includes $173.33 cash lunches) |
| Shopping | $495.87 | $445.00 | Flexible (−10%) |
| Utilities | $476.62 | $476.62 | Fixed |
| Debt Payments (Toyota + Mom) | $469.00 | $469.00 | Fixed |
| Gas | $190.20 | $170.00 | Flexible (−11%) |
| Childcare | $190.00 | $190.00 | Kept at average |
| Insurance | $186.40 | $186.40 | Fixed |
| Fees & Interest | $174.20 | $121.91 | Visa interest only; the other fees are avoidable |
| Health | $165.64 | $165.64 | Kept at average |
| Gifts & Donations | $150.00 | $150.00 | Kept at average |
| Subscriptions | $142.42 | $112.44 | After cancelling Hulu and Apple Music |
| Transportation | $121.56 | $110.00 | Flexible (−10%) |
| Pets | $109.75 | $100.00 | Flexible (−9%) |
| Travel | $104.13 | $95.00 | Flexible (−9%) |
| Entertainment | $81.60 | $75.00 | Flexible (−8%) |
| Personal Care | $58.17 | $50.00 | Flexible (−14%) |
| Uncategorized (SQ *JMK LLC) | $45.00 | $45.00 | Until you know what it is |
| **Spending total** | **$5,630.49** | **$5,152.01** | $478.48 less than average |
| Savings transfer | $300.00 | $300.00 | |
| Card debt: minimums (Visa + Discover) | | $260.00 | |
| Extra toward debt | | $300.00 | |
| **Total** | | **$6,012.01** | |
| **Income** (pay $7,290 + cash $346.67) | | **$7,636.67** | |
| **Not assigned** | | **$1,624.66** | |

About $1,625 a month has no job in this budget. That matches what's been piling up in Joint checking. You could give it one (more toward debt, or savings) so it doesn't drift. Targets are suggestions, not advice.

## 5. Spreadsheet export

Here's your file: **export.csv**, 235 rows: all 219 statement rows from the five accounts plus 16 Cash / manual rows (Customer-reported). It uses this header:

`txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes`

Account numbers are removed from descriptions, J.M. appears as initials, and the two ATM withdrawals are marked as Transfer (into cash), with what the cash bought on their own manual rows. Spending in the file (expenses minus refunds and paybacks) averages $5,630.49 a month, the same as the report.

Debts and net worth, to paste into text files saved as `.csv`:

```
debt,balance,apr,minimum,method,order,lump_payment,monthly_payment,payoff_month
Discover,2140.00,27.24,65.00,avalanche,1,2140.00,0.00,now (lump sum)
Visa card,6477.85,22.99,195.00,avalanche,2,447.08,560.00,2027-10
Toyota loan,14600.00,6.90,419.00,avalanche,3,0.00,419.00,2028-09
Mom,450.00,0.00,50.00,avalanche,4,0.00,50.00,2027-07
```

```
date,item,type,category,amount,source
2026-10-31,Everyday checking,Asset,Cash and bank,1680.50,Statement
2026-10-31,Joint checking,Asset,Cash and bank,5699.99,Statement
2026-11-27,Savings,Asset,Cash and bank,3200.00,Customer-reported
2026-11-27,Cash jar,Asset,Cash and bank,400.00,Customer-reported
2026-11-27,401(k),Asset,Retirement and investments,42000.00,Customer-reported
2026-11-27,403(b),Asset,Retirement and investments,18500.00,Customer-reported
2026-11-27,Home,Asset,Home,340000.00,Customer-reported
2026-11-27,Toyota,Asset,Vehicles,18500.00,Customer-reported
2026-11-27,Second car,Asset,Vehicles,6000.00,Customer-reported
2026-11-27,Mortgage,Liability,Mortgage,248000.00,Customer-reported
2026-11-27,Toyota loan,Liability,Car loan,14600.00,Customer-reported
2026-10-31,Visa card,Liability,Credit card,6477.85,Statement
2026-11-27,Discover card,Liability,Credit card,2140.00,Customer-reported
2026-10-31,Mastercard,Liability,Credit card,1112.91,Statement
2026-10-31,Amex card,Liability,Credit card,645.65,Statement
2026-11-27,Mom,Liability,Money owed to family,450.00,Customer-reported
```

Paste each block into a text file saved as `.csv`, then import it into Notion, Google Sheets or Excel. The transactions file is ready to download as is.

---

Copy this into a note. If the chat runs out, paste the prompt and this block into a new chat and type continue.

```
SAVE | Money X-Ray | 2026-08-01 to 2026-10-31
Everyday checking (2026-08-01 to 2026-10-31): rows 53, duplicates 0, balance check $0.00, opening $1,840.55, closing $1,680.50
Joint checking (2026-08-01 to 2026-10-31): rows 45, duplicates 0, balance check $0.00, opening $960.00, closing $5,699.99
Visa card (2026-08-01 to 2026-10-31): rows 52, duplicates 0, balance check $0.00, opening $6,180.00, closing $6,477.85
Mastercard (2026-08-01 to 2026-10-31): rows 30, duplicates 0, balance check $0.00, opening $1,120.00, closing $1,112.91
Amex card (2026-08-01 to 2026-10-31): rows 39, duplicates 0, balance check $0.00, opening $640.00, closing $645.65
Cash / manual (Customer-reported): lawn pay $346.67/month, lunch $173.33/month, Mom $50/month, jar $123.34/month
2026-08 spending: Housing $1385.00, Groceries $633.15, Dining Out $451.05, Shopping $493.73, Utilities $500.70, Debt Payments $469.00, Gas $191.40, Childcare $230.00, Insurance $186.40, Fees & Interest $123.24, Health $200.48, Gifts & Donations $150.00, Subscriptions $124.42, Pets $64.20, Entertainment $54.80, Personal Care $42.00, Uncategorized $45.00 = Total $5344.57
2026-09 spending: Housing $1385.00, Groceries $564.64, Dining Out $546.76, Shopping $443.09, Utilities $481.45, Debt Payments $469.00, Gas $178.05, Childcare $170.00, Insurance $186.40, Fees & Interest $257.93, Health $184.75, Gifts & Donations $150.00, Subscriptions $126.92, Transportation $284.70, Pets $203.75, Travel $312.40, Entertainment $118.00, Personal Care $42.00, Uncategorized $45.00 = Total $6149.84
2026-10 spending: Housing $1385.00, Groceries $559.54, Dining Out $499.63, Shopping $550.80, Utilities $447.70, Debt Payments $469.00, Gas $201.15, Childcare $170.00, Insurance $186.40, Fees & Interest $141.42, Health $111.70, Gifts & Donations $150.00, Subscriptions $175.92, Transportation $79.99, Pets $61.30, Entertainment $72.00, Personal Care $90.50, Uncategorized $45.00 = Total $5397.05
Income: 2026-08 $7636.67, 2026-09 $7636.67, 2026-10 $7636.67 (pay $7290 + cash $346.67 Customer-reported)
Paybacks: 2026-10-16 $45 from J.M., offsets Dining Out in 2026-10
Payments & transfers: monthly out $750/$875/$825 Everyday to Visa; $250/$825/$400 Everyday to Amex; $450/$875/$450 Joint to Mastercard; $400 Everyday to Joint; $175 to Discover NOT UPLOADED; $300 to savings NOT UPLOADED; ATM $100 2026-08-22 and 2026-10-22 to cash (explained)
Recurring: Netflix $17.99 monthly, Spotify $19.99 monthly, Hulu $18.99 monthly, Disney+ $15.99 monthly, Amazon Prime $14.99 monthly, Apple $2.99 monthly, Apple Music $10.99 monthly, Planet Fitness $24.99 monthly + $49 annual (2026-10-06), SQ *JMK LLC $45 monthly (19th), Mastercard fee $95 annual (2026-09-01), mortgage $1385, Toyota $419, Geico $186.40, Kids R Kids $170, church $150, Verizon $142, Comcast $80
Fees & interest: 2026-08-25 Visa interest $119.74, 2026-09-25 Visa interest $121.93, 2026-10-25 Visa interest $124.06, 2026-09-01 Mastercard annual fee $95, 2026-09-26 Amex late fee $29, 2026-09-30 maintenance fee $12, 2026-10-31 maintenance fee $12, 2026-08-22 ATM fee $3.50, 2026-10-22 ATM fee $3.50, 2026-10-08 foreign transaction fee $1.86
Cash withdrawals: 2026-08-22 $100 (babysitter $60, farmers market $40), 2026-10-22 $100 (Halloween $60, pizza $40)
Debts: Discover $2140, APR 27.24%, min $65; Visa $6477.85, APR 22.99%, min $195; Toyota loan $14600, APR 6.9%, min $419; Mom $450, APR 0%, min $50   Method: avalanche (lump $2587.08 from Joint now; $1029/month; debt-free 2028-09; interest $2007.48)
Cancelled or cut: Hulu $18.99/month (2026-11-27), Apple Music $10.99/month (2026-11-27); SQ *JMK LLC $45/month under review
Budget targets: Groceries $525, Dining Out $280, Shopping $445, Gas $170, Fees & Interest $121.91, Subscriptions $112.44, Transportation $110, Pets $100, Travel $95, Entertainment $75, Personal Care $50, extra to debt $300; fixed categories at average
Net worth 2026-10-31: assets $435980.49, liabilities $273426.41, net worth $162554.08, liquid $154.08 (typed-in values as of 2026-11-27)
Flags: DoorDash $34.50 double charge 2026-09-12 (dispute), Netflix price increase $15.49 to $17.99, unknown SQ *JMK LLC, Discover and savings statements not uploaded, Visa new spending ~$794/month above plan payment
Open questions: SQ *JMK LLC, Venmo $60 on 2026-10-25 (unknown), Apple charges guessed (iCloud $2.99, Apple Music $10.99), Mastercard/Amex paid in full (guess)
```
