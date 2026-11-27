# Money X-Ray Complete Guide: editorial and fact-check review

Scope: all 49 pages (text and page images) checked against Money_XRay_Prompt.txt.
Checked and correct, so not listed below:
- The contents page numbers all match where each chapter starts.
- Every chapter reference is correct: ch 4 and 6 on p4, ch 7 to 10 on p15, ch 18 on p20, ch 13 on p25, ch 16 and 20 on p31, ch 18 on p36.
- These figures repeat and always match: $7,290, $522.59, $162,554 / $154, 23 vs 62 months, 27.24% / 22.99% / 6.9%, $175, $45, 14 traps.
- The net worth arithmetic is correct: 10,980 + 60,500 + 364,500 - 273,426 = 162,554.
- The sample category rows add to $5,407.16.
- Each subscription's monthly x 12 equals its yearly figure.
- $29.98 x 12 = $359.76.
- $7,503 - $2,007 = $5,496, which matches "about $5,500".
- $312.48 less 20% is about $250.
- The 9 report sections on p16 match the prompt's order.
- A word-by-word diff of the appendix against the prompt file (3,587 words) finds one difference only (item 2).

## Findings, most severe first

1. **Page 10: unfinished placeholder printed in the product.**
   Current: "[Screenshots coming: finding statements in a banking app, and downloading a CSV on the bank's website]"
   Problem: A paid product with a "coming soon" note looks unfinished, and it sits on the page most buyers will follow first (p4 sends them to chapter 4).
   Fix: Add the two screenshots with captions "Finding statements in a banking app" and "Downloading a CSV on the bank's website". If they aren't ready, delete the dashed box completely.

2. **Page 48 (appendix): the Notion export CSV header is cut off.**
   Current: "`txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,veri" (the line runs past the box edge)
   Problem: The appendix is meant to match the prompt file, and this is the only place it doesn't. Anyone who copies from the PDF gets a prompt with a broken header, and the Notion import will fail.
   Fix: Let the code block wrap long lines (for example `white-space: pre-wrap; overflow-wrap: anywhere`), or break the header after `counts_as_spending,` with a note "(one line in the text file)". The full line must read `txn_id,date,account_alias,merchant,description_raw,category,amount,direction,type,counts_as_spending,recurring,verification,confidence,source_file,source_row,import_batch,notes`.

3. **Page 27: a screenshot contradicts the text right above it, and several screenshots come from an older prompt.**
   Current (p26 text): "Money X-Ray lists each one separately and never blends them into one average." Current (p27 screenshot): "For modeling purposes, blended estimated rates are used for cards with multiple APRs." and "The simulator does not reproduce the promotional expiration".
   Other screenshots don't match the current prompt either:
   - p14: the first reply lists "Excel", "closed accounts with outstanding balances" and "Mortgage statements", runs over two phone screens (the prompt caps it at 150 words), and the user typed "Tell me what do you need." although p13 says to send "Start".
   - p18: the form is titled "10. Information requiring clarification" (the report has 9 sections), and its questions have no best guess ("What is your monthly rent?"), although the text on that page says "each one comes with its best guess".
   - p21: the save block shows "Debt strategy…", "Recovery plan: 30, 60 and 90 days" and "gig income tax treatment". None of these are in the prompt's save-block format, and it doesn't start with "SAVE | Money X-Ray".
   - p16: the categories shown ("Dunkin") are not prompt categories.
   Problem: The guide's own pictures show the AI doing what the guide says it never does. A careful buyer will notice and stop trusting the rest.
   Fix: Re-shoot these screens on the current prompt. Until then, replace the p27 pair with the fictional-family table alone. Under any screenshot that stays, add the caption: "From an earlier version of the prompt; your screens will differ."

4. **Pages 13, 16, 18, 23, 27: the screenshots expose the founder's banks and local merchants, contrary to the guide's own promise.**
   Current (p13): "Every personal detail and dollar amount is blacked out." (p11): "black out names, account endings, addresses and anything that points to where you live or work. That's exactly how the screenshots in this guide were prepared."
   What is visible:
   - "Bank of America" and "BoA checking / credit card #1-#3" (p16, p27)
   - "SoFi personal loan" and "SoFi checking" (p16, p18, p27)
   - "ScrubaDub" ×3, a regional car-wash chain that points to where he lives (p23)
   - "YMCA", "Comcast/Xfinity" and "PlayStation" (p23)
   - "Dunkin" with 48 transactions (p16)
   - The file names "Loan 2", "Loan 3" and "Money_XRay_Produ…eprint" (p15)
   Problem: The guide contradicts itself on privacy, which is the product's central trust promise. The founder's region, banks and lenders can be worked out from these screens.
   Fix: Black out bank, lender and merchant names in every screenshot, or swap in neutral labels ("Bank checking", "Card #1", "Car wash #1"). If any stay, change p13 to: "Names, account endings and dollar amounts are blacked out."

5. **Whole guide: three menu options in the prompt are never explained (Notion export, PDF report, the menu itself).**
   Current (prompt Step 5): "4. Notion export: the transactions as CSV for the Money X-Ray dashboard" and "5. PDF report". The guide never mentions Notion or a dashboard, and its only PDF reference is one table row (p8, "PDF report: Print the report to PDF yourself").
   Problem: Buyers will see a menu offering a "Money X-Ray dashboard" they never received and never read about. That leads to refund requests ("where's my dashboard?"). p15 ("Chapters 7 to 10 walk through each part") also implies the menu is covered when it isn't.
   Fix: Add a short section after chapter 10 called "The menu after your report". It should list the six options in the prompt's words and say what each one gives you. If the Notion template ships with the product, say where to find it and how to import the CSV. If it doesn't ship, remove option 4 from the prompt (and the appendix), or reword it there to "the transactions as CSV for a spreadsheet or Notion". On p15, change "Chapters 7 to 10 walk through each part" to "Chapters 7 to 10, and the menu section after them, walk through each part."

6. **Page 6: overclaims about the $0.00 Check.**
   Current: "Every account is balance-checked to $0.00 before you see a single finding." and "A $0.00 result proves the math adds up and nothing was skipped. … but you can trust the totals."
   Problem: These read as guarantees. p17 admits an account may not balance, and the prompt only says a $0.00 result "proves the math adds up, not that every category is right". Two skipped rows that cancel each other still give $0.00. The AI can also misread the opening or closing balance. For a finance product this is an accuracy promise you can't keep.
   Fix:
   - Callout: "Every account gets a balance check, and the report tells you if one doesn't come to $0.00."
   - Body: "A $0.00 result means the transactions it read add up to the bank's own totals. It doesn't prove every category is right, so glance over the findings and check anything important against your statements."

7. **Pages 20 and 35: the testing claims are misleading.**
   Current (p20): "In testing on a fictional family's statements, the free-plan path (no code, all math by hand) balanced every account to $0.00 and matched every monthly total to the cent." (p35): "All 219 transactions correct; … all 14 traps caught" and "Each run's problems were fixed and the prompt was tested again."
   Problems:
   - (a) "By hand" suggests a person did the math. It was an AI working without a code tool.
   - (b) The perfect scores come from the same single dataset the prompt was repeatedly fixed against, so they show the prompt fits that dataset, not that it will be right on a buyer's statements.
   - (c) "Free-plan style" was simulated, not run on an actual free plan.
   - (d) Gemini is recommended on p4, p8 and p44, but the results table lists no Gemini test.
   - (e) The "Real statements" row gives no result.
   Fix:
   - p20 callout: "In a test on one fictional family's statements, an AI working without a code tool (the way most free plans work) balanced every account and matched every monthly total. Your statements will be messier, so check the balance results in your own report."
   - p35: add under the table, "The prompt was improved between runs on this same dataset, so these results show what it can do, not a guarantee for your statements." Either add a Gemini row with its result, or drop Gemini from p4, p8 and p44.
   - Change the last row's result to what actually happened, for example "All accounts balanced on ChatGPT; findings used to improve the prompt".

8. **Pages 8, 15, 20, 28: the guide treats "free plan" as if it meant "no code tool".**
   Current (p15): "On a paid plan this happens in one go. On a free plan it works two accounts at a time". (p8) table: "FREE PLAN … By hand, in small groups … Two accounts at a time".
   Problem: The prompt switches behavior on whether the AI can run code ("No-code mode: if you can't run code or a data-analysis tool"), not on the plan. Some free tiers can run code and some paid setups can't, and the plan line-up changes often. A free-plan user who gets everything in one go, or a paid user who gets two accounts at a time, will think it's broken.
   Fix: Rename the p8 table columns to "Without a code tool (often free plans)" and "With a code tool (often paid plans)". Change p15 to "If your app can run code, this happens in one go. If it can't, it works two accounts at a time and asks you to type go." On p20, change the heading line to "On free plans the AI often can't run code, so…".

9. **Pages 31 and 33: the monthly checkup promises target tracking the prompt doesn't do.**
   Current (p31): "The monthly checkup (chapter 16) shows how each target went, without you tracking anything by hand." (p33): "Categories that moved, against your targets" and "Debt paid down, and progress on your plan".
   Problem: The prompt's monthly checkup compares with the save block only. The save block has no budget targets and stores only the debt method, so the AI has nothing to compare against.
   Fix:
   - p33: change to "Categories that moved since last month" and "Debt paid down".
   - p31: change to "The monthly checkup (chapter 16) shows which categories moved. Compare them with your targets on the budget worksheet (chapter 20)."
   - Alternatively, add a "Targets:" line to the prompt's save block and comparison step.

10. **Pages 36 to 38: the sample report doesn't follow the report order the guide promises.**
    Current: the sections are numbered 1 The answer, 2 How much to trust this, 3 Spending by category, 4 Subscriptions, 5 Fees and interest, 6 Debt and net worth, 7 Their choices. p16 says "The report always comes in the same order" and lists 9 sections.
    Problem: "Money in vs. money out" (section 3) and "Trends" (section 5) are missing, debt and net worth are merged, and the numbers don't match the real section numbers.
    Fix: Under the chapter 19 heading, add "Excerpts; section numbers match the full report." Renumber to 1, 2, 4 Spending by category, 6 Subscriptions, 7 Fees and interest, 8 Debt, 9 Net worth, then "After the menu: their choices". Also add a short section 3 table (Income $7,290 / Spending $5,407 / Saved $300 / Left over), which also fixes item 14.

11. **Pages 36 and 37: the category table has share, naming and count errors.**
    Current: the shares are 26, 11, 9, 9, 8, 6, 4, 3, 3 and 22%, with "Total … 100%". The table also has a "Car loan" row and "Everything else (11 categories)".
    Problems:
    - (a) The rounded shares add to 101%.
    - (b) The prompt puts loan payments in "Debt Payments", so "Car loan" is not a category.
    - (c) The prompt has 21 categories. Nine named rows leaves 12 others, not 11, unless one was $0, which the table doesn't say.
    Fix: Add the footnote "Shares are rounded, so they may not add to exactly 100%." Rename the row to "Debt payments (car loan)". Change the last row to "Everything else (12 categories)", or to "(11 other categories with spending)" if one was zero.

12. **Page 36: the "six overlapping services" claim doesn't match the subscriptions table.**
    Current: "six streaming and music services overlap"
    Problem: The table on p37 flags only four as overlapping (Hulu, Disney+, Spotify Family, Apple Music). Netflix is flagged only for its price rise, and Amazon Prime isn't flagged at all.
    Fix: Either change the text to "four streaming and music services overlap", or add "Overlaps other streaming" to the Netflix row and "Includes Prime Video; overlaps other streaming" to the Amazon Prime row.

13. **Page 37: Planet Fitness's yearly cost leaves out its own annual fee.**
    Current: "Planet Fitness $24.99 $299.88 Plus $49 annual fee"
    Problem: The prompt asks for the yearly cost. The true yearly figure is $348.88, so the table understates it.
    Fix: Set YEARLY to "$348.88" and the flag to "Includes $49 annual fee".

14. **Page 36: "about $1,400 left over" isn't explained, and the numbers on the page suggest $1,883.**
    Current: "The family takes home $7,290 a month and spends about $5,407. On paper about $1,400 is left over each month"
    Problem: $7,290 - $5,407 = $1,883. The $1,400 only works after the $300 savings transfer and the $175 Discover payments ($1,408), and the reader isn't told that. It also sits next to "$4,740 in three months" ($1,580 a month), which adds to the confusion.
    Fix: "…spends about $5,407. After $300 a month to savings and $175 to a card that wasn't uploaded, about $1,400 is left over each month on paper, but it doesn't feel that way…"

15. **Page 38: the "$300 goal" is never introduced.**
    Current: "The report noted that this was $270 short of their $300 goal"
    Problem: No goal was set anywhere before this. The $300 on p27 is extra debt payment, not a savings target.
    Fix: "They had hoped to free up $300 a month for debt; the two cancellations cover $29.98 of it, so the report pointed to the idle checking cash as the bigger lever against the Visa."

16. **Page 35: the test family's number of cards contradicts itself.**
    Current: "a mortgage, a car loan, child care and three credit cards. Five accounts"
    Problem: The family also has a Discover card (p27, p36), which makes four cards, one of them deliberately not uploaded.
    Fix: "…child care, three uploaded credit cards and a fourth (Discover) left out on purpose. Five uploaded accounts…"

17. **Page 29: the net worth example includes money that wasn't on the statements, and has no labels saying so.**
    Current: "Cash and bank (checking, savings, cash at home) $10,980" and "Home and two cars $364,500"
    Problem: p36 says the savings account wasn't uploaded, and cash at home and home/car values can only come from the user. The prompt requires those to be marked "Customer-reported", but the table has no source column.
    Fix: Add a "Source" column ("Statement" or "You typed it") to the table. Change the footnote to "Savings, cash at home, home and car values were typed in by the family, so they're labelled as their own estimates."

18. **Page 29: a wrong word and an unclear sentence.**
    Current: "That gap is why a household earning $7,290 a month can still feel broke, and it's the number to watch shrink month by month."
    Problem: $7,290 is take-home pay, not earnings (p35 and p36 say "take-home"). It's also unclear what should shrink: the gap, or liquid net worth, which should grow.
    Fix: "That gap is why a household taking home $7,290 a month can still feel broke. Liquid net worth is the number to watch grow, month by month."

19. **Page 11: the privacy claim about CSVs contradicts the guide's own Zelle example.**
    Current: "CSV downloads usually contain dates, descriptions and amounts, with no account number, name or address. Nothing to cover."
    Problem: Descriptions often contain other people's full names (Zelle and Venmo lines, which p11 itself mentions), employer names on payroll lines, and merchant cities. "Nothing to cover" is a privacy promise the product can't keep.
    Fix: "…usually with no account number, name or address. Descriptions can still show other people's names (Zelle, Venmo) or your employer; the AI is told to shorten names to initials in its replies, but the file you upload still contains them."

20. **Page 11: a promise about AI behavior that the product can't guarantee.**
    Current: "Money X-Ray never sees them, never connects to your bank, and never asks for passwords, logins or your Social Security number."
    Problem: The first two are true because it's only a prompt. The third depends on the AI following instructions, so it can't be a guarantee.
    Fix: "…never connects to your bank, and the prompt tells the AI never to ask for passwords, logins or your Social Security number. If it ever does, don't answer."

21. **Pages 18, 19: absolute promises about AI behavior.**
    Current (p18): "There are never more than 8 questions" (p19): "never counts ATM cash twice"
    Problem: These are instructions to the AI, not guarantees about what it will do.
    Fix: p18: "It's told to ask no more than 8 questions, each with its best guess." p19: "It's told not to count ATM cash twice: …"

22. **Page 18: an example question drops the APR.**
    Current: "$175 a month goes to DISCOVER, but you didn't upload that card. Upload it, or tell me the balance."
    Problem: The prompt (and p34) asks for "the balance and APR". The debt plan can't rank this card without its APR.
    Fix: "…Upload it, or tell me the balance and APR."

23. **Page 23: the subscription test gives a direct instruction, which the prompt avoids.**
    Current: "Did I use it in the last 30 days? If not, cancel it. You can always come back."
    Problem: The prompt says to call items "worth reviewing" and not to judge. Telling people to cancel without exceptions is a directive, and it's wrong for annual or seasonal services and for ones that lose a locked-in price or data when cancelled.
    Fix: "Did I use it in the last 30 days? If not, it's a strong candidate to cut. Check first whether cancelling loses a lower locked-in price or saved data."

24. **Pages 3 and 7: "no monthly fee" sits next to advice to use a paid AI plan.**
    Current (p3): "No monthly fee. You pay once and use it every month." (p7): "so nothing connects to your bank and nothing keeps charging you." (p8 and p28 point to paid plans for exact numbers.)
    Problem: The buyer may still pay monthly for the AI app. That's misleading by omission.
    Fix: p3: "No monthly fee for Money X-Ray. You pay once and use it every month, with the free or paid AI app you already have." p7: "…so nothing connects to your bank and Money X-Ray never charges you again."

25. **Pages 8 and 28: "exact" debt-free date.**
    Current (p8): "Exact debt-free date and total interest" (p28): "For the exact debt-free date and total interest, use a paid plan"
    Problem: The prompt's simulation holds minimums fixed and assumes no new spending, so it's an estimate. Calling it exact overstates accuracy, and p28 steers buyers toward paying for an AI plan.
    Fix: p8: "Month-by-month payoff estimate and total interest". p28: "For a month-by-month estimate, use an app that can run code, or any debt payoff calculator…"

26. **Page 26: a dated rate figure and some sales language.**
    Current: "cash advances (often near 28%)" and "Then it shows two proven ways to pay it off."
    Problem: The rate will go out of date and varies by issuer. "Proven" is marketing filler.
    Fix: "cash advances (usually at a higher rate than purchases)" and "Then it shows two common ways to pay it off."

27. **Page 10: bank statement emails.**
    Current: "Many banks email a statement every month. Search your inbox for 'statement'."
    Problem: Most US banks email a notice with a link, not the statement itself.
    Fix: "Many banks email you each month when a new statement is ready, with a link to it. Search your inbox for 'statement'."

28. **Page 25: the overdraft advice is incomplete.**
    Current: "Overdraft fee: Turn off overdraft coverage or link a savings account"
    Problem: Turning off coverage mainly stops debit-card and ATM overdrafts. Checks and automatic payments can still bounce, with returned-payment (NSF) fees.
    Fix: "Turn off overdraft coverage for debit and ATM, link a savings account, and set a low-balance alert. Bounced checks or autopays can still cost a fee."

29. **Page 35: the government data source isn't cited precisely.**
    Current: "built from the US Bureau of Labor Statistics' 2025 spending averages: two earners, $7,290 a month take-home"
    Problem: The BLS publishes yearly spending survey data, not a "take-home" figure, so this reads as more official than it is.
    Fix: "loosely based on the BLS Consumer Expenditure Survey averages for a two-earner household; income and balances were set by us."

30. **Page 44: awkward wording.**
    Current: "Read the report; check the $0.00 Check for every account"
    Fix: "Read the report; confirm every account's balance check is $0.00"

31. **Page 43: a glossary term the guide never uses.**
    Current: "Checkpoint / save block"
    Problem: "Checkpoint" appears nowhere else in the guide or the prompt.
    Fix: "Save block"

32. **Page 33: impractical habit advice.**
    Current: "Same day every month, right after your statement closes."
    Problem: Each account closes on a different day.
    Fix: "Same day every month, a few days after your last account's statement closes."

33. **Page 1 (cover): the subtitle uses a word the disclaimers reject.**
    Current: "The No-App Money Audit"
    Problem: The guide and prompt say "isn't a professional audit", and "No-App" sits oddly next to using an AI app. Low risk, but worth aligning.
    Fix: "The No-App Money Check-Up", or keep the subtitle and add "(a self-check, not a professional audit)" to p4. Optional.

34. **Page 17: filler line.**
    Current: "That one line is often the most useful thing in the whole report."
    Problem: An unsupported claim that reads like AI filler.
    Fix: Delete it.

35. **Page 8: jargon before it's explained.**
    Current: "you can paste the CSV text instead"
    Problem: "CSV" is first explained two pages later, on p10.
    Fix: "you can paste the CSV text (the spreadsheet file from your bank's website) instead"

36. **Layout: text cut off or overlapping.**
    - p16: the captions under both screenshots are clipped by the page bottom ("Th $0 00 Ch k … Wh th"). Move the screenshots and captions to the top of p17, or shrink the images about 15%.
    - p8: a third checkbox's top edge shows at the bottom of the page, with its text on p9. Keep the four "Which accounts to include" items together (`break-inside: avoid` on the list).
    - p22 and p32: the large "3" and "4" numerals run behind the part titles "Acting on your results" and "Keeping it going". Move the titles down or shorten the numerals, to match p5 and p12.

37. **Layout: nearly empty pages and split tables.**
    - p7: the "What it finds" table puts one row on its own page under a repeated header, and the rest of p7 is blank.
    - p9: only two checklist lines, the rest blank.
    - p19: one paragraph.
    - p21: half a page.
    - p34: the table's continuation, then blank.
    - p38: one paragraph ("7. Their choices").
    - p40: the Debt list has a header and one row on p39 and four rows on p40, then the page is blank.
    - p42: one table.
    - p24, p28 and p31 are about half empty.
    Fix: Keep short tables and lists in one piece (`break-inside: avoid`). Let short chapter tails share a page with the next chapter instead of forcing a page break. Move the p38 paragraph onto p37. Keep the Debt list whole on p40, or shorten it to fit on p39. Aim for no page under about one-third full, except part openers and worksheets.

## Verdict

**Not ready to sell.** The structure, page numbers, chapter references and most of the numbers are solid, and the appendix matches the prompt word for word apart from one line. But five problems would each cause refunds or trust damage on their own:
- an unfinished "[Screenshots coming]" box (item 1)
- a truncated CSV header in the appendix (item 2)
- screenshots from an older prompt that contradict the text, including "blended rates" (item 3)
- screenshots that reveal the author's banks and home region, despite the guide promising they were fully blacked out (item 4)
- a "Money X-Ray dashboard" and Notion export that the guide never explains (item 5)

On top of these, the guide guarantees accuracy and testing results more strongly than the prompt can deliver (items 6 and 7). In a US consumer finance product, that is the main legal and reputational risk.

Fix items 1 to 9, reflow the layout (36 and 37), and it's close to sellable. The rest are quick text edits.
