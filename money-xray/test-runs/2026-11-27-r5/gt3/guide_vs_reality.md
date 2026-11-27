# Guide vs reality (gt3: paid plan, code tool, PDF statements, privacy-minded buyer)

I read the guide's pages as images, focusing on chapters 4, 5, 7 and 8, the menu and the PDF report section (pp. 8-17). The appendix prompt (pp. 40-45) and Money_XRay_Prompt.pdf match Money_XRay_Prompt.txt word for word, apart from line-break hyphenation.

## What matched

- The flow (p12-13: paste, upload, "done", report, then save block, then questions, then menu) worked as described. On a paid plan with code, everything came in one reply and the customer never had to type "go".
- The $0.00 check (p6, p9): all 5 accounts balanced in every month, and every row of the 219 transactions was used.
- The sample report numbers (p33-35) came out the same from the PDFs: $5,407.16 average spending, $1,407.84 left over, Joint Checking up $4,739.99, fees and interest $522.59 (p23), Hulu plus Apple Music $29.98 a month, $270 short of the goal.
- The debt example (p25) matched to the dollar: avalanche 23 months and $2,007; snowball 23 months and $2,061; minimums only 62 months and $7,503; lump sum $2,587.08. "About $5,500 less interest" (p35) came out at $5,495.67.
- Net worth (p27): $162,554.08 and liquid $154.08, as printed.
- The questions (p16): 8 items, each with a guess, as promised.
- The PDF report (p17): with a code tool the file was created. It has the findings and every account's balance check on page 1, the save block on the last page and the footer on every page.

## Mismatches and problems (with guide page numbers)

1. **p10 privacy promise vs the prompt and the export (account numbers).** Page 10 says the AI is told to "Never write out an account number. It uses nicknames such as 'Chase checking'." The prompt (rule 6) allows "ending in 1234 at most", and its export rule says `description_raw` keeps the last 4 digits. The CSV export therefore keeps XXXX4471, XXXX2290 and XXXX8812 in 9 rows (the transfers to Joint, from Everyday and to savings). That follows the prompt but breaks the literal promise on p10. The chat replies and the PDF report contain no account digits.
2. **p10 "black out anything that points to where you live or work", but neither the guide nor the prompt has the AI do it.** The prompt only scrubs account numbers, addresses, IDs and other people's names. In this run:
   - The CSV export keeps employer payroll names (ACME LOGISTICS PAYROLL, WAKE CO SCHOOLS PAYROLL) and the city (CITY OF RALEIGH UTIL, SKY ZONE RALEIGH, TICKETMASTER*NC STATE) in 17 rows.
   - The AI's report reply said "City of Raleigh utilities".
   - The guide never warns that the export, which p17 suggests importing into Notion or Sheets, still names your employer and city.
   A privacy-minded buyer would expect these to be covered by p10.
3. **p34, p29 and p28: the sample category averages don't follow the prompt's cash rules.** Page 34 says "after the family's answers; cash spending isn't included". The prompt (Step 4, cash rule 3) moves explained ATM cash into categories, and cash rule 1 keeps Customer-reported cash "on its own line in every table". A run that follows the prompt gives these averages, so the reader's report won't match p34 or the p29 budget:

   | Category | Prompt-following run | Guide sample |
   |---|---|---|
   | Dining Out | $325.82 | $312.48 |
   | Groceries | $585.78 | $572.44 |
   | Shopping | $495.87 | $475.87 |
   | Childcare | $190.00 | $170 |
   | Cash & ATM | $0 | not given |

   It also adds a $173.33 cash-lunch line. Page 28's "Dining out under $280, about 10% below your average" becomes 14% below.
4. **p33, p25 and p35: Mastercard and Amex are presented as paid in full, but the statements say otherwise.** The sample lists no Mastercard or Amex debt and reserves "the next Mastercard bill" (the full $1,112.91). In the PDFs, every month's payment is below the previous balance:
   - Mastercard: $1,120 owed, $450 paid.
   - Amex: $640 owed, $250 paid, plus a $29 late fee in September.

   So the prompt's own "probably paid in full" test (Step 3, section 8) fails, and the AI had to raise it as an open question. The guide doesn't explain this, so a buyer whose report lists these cards as carried balances may think something went wrong.
5. **p33 and p32: the sample's trust table doesn't match a PDF-statement run.** The sample says "Visa Rewards: 3 repeated rows removed (overlapping downloads)", and p32 describes overlapping downloads and card payments that appear twice. With monthly PDF statements (the path p9 recommends for cards), the run found 0 duplicates. A careful buyer comparing their report to p33 may wonder whether de-duplication ran.
6. **p16 and p8 (minor).** The Discover sample question on p16 asks only for "the balance", but the debt plan also needs the APR and minimum (the prompt asks for "balance and APR", and the menu asks again). This is harmless, but it costs an extra round if someone answers only the balance.
7. **p24 (minor).** The guide says the report shows each card's APR and minimum. These Visa PDFs show neither, so the AI estimated about 23.2% and $188.84 (labelled estimated and "my guess"). Only the small print on p25 hints at this, and the debt chapter itself doesn't mention it.

## Privacy check (did the AI keep the guide's promises?)

| Promise (p10) | Chat replies | PDF report | CSV export |
|---|---|---|---|
| No account numbers, nicknames only | Kept (nicknames only) | Kept | **Not kept literally.** Last 4 digits in 9 rows, which the prompt allows |
| Other people's names as initials | Kept: "J.M." throughout, even after the customer typed "Jordan" | Kept | Kept ("ZELLE FROM J.M.") |
| No addresses or personal IDs | Kept (none in the statements anyway) | Kept | Kept |
| Black out what shows where you live or work (p10, "when you share results") | **Not kept.** One reply names the city | Kept (my choice: "city utilities", "two paychecks") | **Not kept.** Employer and city names in 17 rows |
| Never asks for passwords, logins or SSN | Kept | n/a | n/a |

Test-data notes (not guide problems):
- Every statement header reads "Account ending 0000", while the transfer descriptions show other masked endings.
- CUSTOMER.md says "Mom $450" but also "$600 borrowed".
- CUSTOMER.md's v3 menu reply lists picks 1 to 5, but this test asked for 1 to 6.
