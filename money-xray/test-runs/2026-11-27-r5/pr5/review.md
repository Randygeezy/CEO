# Money X-Ray: plain-language review of customer-facing text

Scope: the how-to box (PDF page 1), every line the AI is told to send word for word, and labels the customer sees in the report, question list, menu and save block. Reader: high-school reading level, on a phone. Instructions meant only for the AI are out of scope unless they leak into what the customer sees.

Overall: the scripted lines are mostly short and friendly, and "my guess" / "reply ok" is a very easy pattern to follow. The main problems are (1) the how-to box contradicts the prompt on what to upload, (2) money terms (APR, avalanche, snowball, net worth, liquid net worth, CSV) are shown to the customer with no plain gloss, (3) a few scripted lines are long or contain AI-only text that will leak, and (4) the customer is never told the exact words for the monthly checkup.

Severity: **High** = customer may do the wrong thing or get stuck. **Med** = confusing, slows them down. **Low** = polish.

---

## A. How-to box (PDF page 1)

### A1. High: Step 3 contradicts the prompt on what to upload
Box says "3 statements per account, one for each month. CSV files from your bank's website work best." The prompt itself says one 3-month download is fine, 6 months is better, and **PDFs work best for credit cards** because card CSVs often leave out the balance. The box also leaves out Venmo / Cash App / PayPal. A customer following the box uploads card CSVs and gets "not balance-checked" plus an extra question.

Rewrite:
> 3. Upload your last 3 months of statements for every checking, savings and credit card account. One file per month is fine, or one download that covers all 3 months. For credit cards, the PDF statement works best. Add Venmo, Cash App or PayPal if you spend from them.

### A2. High: "CSV" is never explained
Many people don't know what a CSV is or where to get one. It appears in the box, the first message, the paste fallback and the export option.

Rewrite (first use, in the box):
> A CSV is the spreadsheet file you get from the "Download" or "Export" button on your bank's website. It usually has no account number, name or address on it.

### A3. Med: "the audit" contradicts "this is not an audit"
Step 4 says "It does the audit"; the prompt says "this is not a professional audit". Same word in menu item 7 ("from this audit").

Rewrite:
> 4. That's it. It reads your statements and sends you a report. Then it asks a few short questions, each with its best guess. Reply "ok" to keep the guesses.

### A4. Med: "SAVE block" and "the chat runs out" are vague
A first-time user doesn't know what a SAVE block looks like or what "runs out" means.

Rewrite:
> 5. It will give you a box that starts with "SAVE". Copy it into your Notes app. If the chat gets too long or stops working, open a new chat, paste this prompt and that box, and type "continue".

### A5. Med: Phone tip is buried on the last page
"If copying from this PDF breaks the text on your phone, use the plain-text file" is at the bottom of page 7, after the 6-page prompt. Phone users hit the problem at Step 2 on page 1.

Rewrite: add to box Step 2:
> 2. Copy the whole prompt below, from "You are Money X-Ray" to "send the Step 1 message now." Paste it and send. On a phone, the file Money_XRay_Prompt.txt is easier to copy.

---

## B. First message (Step 1)

### B1. Med: Privacy sentence is legal-sounding and refers to "their" provider
"CSV downloads usually contain no account number, name or address. Bank PDFs show their name and address and sometimes the full account number, which they can cover before uploading; their AI provider's data policy applies to what they upload."
The semicolon clause reads like terms of service. "Their" will likely be copied as-is or turned into "your AI provider's data policy", which still means little.

Rewrite (give the AI the exact words):
> "About privacy: bank CSV files usually don't show your account number, name or address. PDF statements do, so you can cover those before uploading. Whatever you upload follows the privacy rules of the AI app you're using."

### B2. Med: The ask is long and repeats itself
"That's three monthly statements per account, or one download that covers 3 months (6 is even better). A single monthly statement only shows one month." "6 is even better" doesn't say 6 what. The last sentence restates the first. "for your net worth" uses an unexplained term.

Rewrite:
> "Upload the last 3 months of statements for every checking, savings and credit card account you use. Three monthly files per account is fine, or one download that covers 3 months. Six months is even better. Add Venmo, Cash App or PayPal if you spend from them. If you want, add retirement, investment or loan statements too, so I can show what you own and owe."

### B3. Low: "Where to find them" line mixes three places and a CSV caveat in one sentence
Rewrite as two short lines:
> "Find them in your bank or card app under "Statements" or "Documents", or on the bank's website. For credit cards, the PDF statement works best."

### B4. Med: Paste fallback is hard on a phone
"If uploads don't work, open the CSV, copy the rows and paste them in." On a phone, opening a CSV usually means a viewer where you can't select all rows.

Rewrite:
> "If uploads don't work, open the file in Google Sheets or your bank's website, select the rows, copy, and paste them here."

### B5. Low: Word budget
"About 150 to 200 words" plus the scripted parts already lands near 200. With the rewrites above it stays in range; keep the opener to one sentence: "I'll read your statements and show you where your money goes. This is for learning, not financial advice."

---

## C. Labels the customer sees in the report

### C1. High: APR is never explained to the customer
Shown in Debt, the question list ("tell me the balance and APR"), the debt plan and the save block. Rule 7 says explain money terms, but the prompt gives the AI no wording, so free-plan models often skip it.

Add to Step 3 section 8: "The first time, write 'APR (the yearly interest rate)'."
Question rewrite:
> "$175 a month goes to DISCOVER, but that card wasn't uploaded. Upload it, or tell me what you owe on it and its interest rate (APR)."

### C2. High: "avalanche" and "snowball" are jargon in the report and the menu
The report gives short glosses, but the menu (option 2) asks the customer to pick "avalanche, snowball, or both" with no gloss, in a separate message.

Rewrite (menu and report):
> "Highest interest first (avalanche): saves the most money."
> "Smallest balance first (snowball): pays off a card sooner, which feels good."

### C3. High: "Liquid net worth" and "net worth"
Even "net worth" is unfamiliar to many; "liquid" is worse. The prompt explains it to the AI but gives no customer label.

Rewrite the labels:
> **Net worth** → "What you own minus what you owe"
> **Liquid net worth** → "Cash you can use right now" (your bank money minus what you owe on cards)
Keep "net worth" in small print after the plain label if wanted. Same change in menu option 3 ("Full net worth" → "Everything you own and owe") and the save block.

### C4. Med: "Unknown Inflow", "Reimbursement", "Card Payment", "Transfer" row labels
"Inflow" is bookkeeping talk. "Reimbursement" is long and the save block calls the same thing "Paybacks". Pick one plain word.

Rewrite: "Unknown Inflow" → "Money in, not sure from what"; "Reimbursement" → "Payback" everywhere (report, export notes, save block already uses it).

### C5. Med: "Customer-reported"
The customer isn't a "customer" to themselves; it reads like a form.

Rewrite: "You told me" (report tables). The export column value can stay `Customer-reported` since software reads it.

### C6. Med: "Balance check" and "$0.00 difference" aren't explained
In "How much to trust this", a row saying "balance check $0.00" can read as "you have $0".

Rewrite the label:
> "Balance check: matches ✓" / "Balance check: off by $12.40" / "Not checked (no balances in file)"
And one line the first time: "This means the start balance plus money in, minus money out, equals the end balance on your statement."

### C7. Low: "not balance-checked", "Uncategorized", "worth reviewing", "potential savings"
"Uncategorized" → "Not sure yet". "worth reviewing" and "potential savings" are fine. "not balance-checked" → "not checked" (see C6).

### C8. Low: Debt section terms "promo", "balance transfer", "cash advance", "minimum"
Give the AI short glosses: promo = "a low-rate deal that ends on a date"; cash advance = "cash taken out on the card, usually at a higher rate"; minimum = "the least you must pay this month".

---

## D. Question list (Step 4)

### D1. High: Example "My guess: unknown" breaks the "ok" promise
"SQ *JMK LLC, $45 on the 19th each month. My guess: unknown. What is it?" The prompt says every question has a guess so "ok" always works. "Unknown" isn't a guess, and "SQ *JMK LLC" is a code the customer may not recognize either.

Rewrite:
> "SQ *JMK LLC, $45 on the 19th each month. "SQ" means a small business paid by card reader. My guess: a regular service, like a haircut or class. What is it?"

### D2. Med: Cash question is awkward
"Any cash money that's not on these statements? (cash pay, or what the ATM cash paid for). Skip if none." Two questions crammed into a parenthesis.

Rewrite:
> "Do you get or spend cash that isn't on these statements, like tips or cash pay? And what did your ATM cash mostly go to? Skip if none."

### D3. Low: "to confirm subscriptions and trends"
Rewrite: "Upload the 2 earlier months for each account so I can spot repeat charges and changes (optional)."

### D4. Good as is
"Answer any of these, or reply **ok** to keep my guesses." Clear, short. Keep.

---

## E. Menu (Step 5)

### E1. High: "(Step 6)" will leak into the customer's menu
Items 2 to 7 have "(Step 6)" inside or right after the quoted customer text. Weaker models print it. The customer has no Step 6.
Fix: remove all "(Step 6)" from menu lines, and add once above the list: "Each pick is done as described in Step 6. Don't show step numbers to the person."

### E2. High: No opening line telling them how to pick
"Let them pick by number" but no scripted line.

Add:
> "What would you like next? Reply with one or more numbers, like "1 and 2", and add the details each one asks for."

### E3. High: Option 2 is one 60-word sentence with jargon
"Tell me how much extra you can put toward debt each month, whether any idle cash should go to it (and how much cushion to keep), and whether you want avalanche, snowball, or both shown. If you already pay more than the minimums, say how much you pay now."

Rewrite:
> **2. Debt-free date.** Tell me:
> - How much extra you can pay toward debt each month.
> - If you want to use some of the cash in your bank now, how much, and how much you want to keep as a safety cushion.
> - Highest interest first (saves the most), smallest balance first (quicker wins), or both.
> - If you already pay more than the minimum, how much you pay now.

### E4. Med: Option 5 assumes a computer
"the transactions as CSV, to import into Notion, Google Sheets or Excel" and later "paste each block into a text file saved as .csv". Saving a .csv text file is very hard on a phone.

Rewrite the menu line:
> **5. Spreadsheet.** All your transactions in a file you can open in Google Sheets or Excel.
And the instruction (no-code path):
> "Copy this block. On a computer, paste it into a text file and save it ending in .csv. On a phone, paste it into a new Google Sheet, then tap Data > Split text to columns."

### E5. Med: Option 7 "trackers from this audit"
Rewrite:
> **7. Fill in my Action Kit.** Upload your Money X-Ray Action Kit PDF and I'll fill in its pages with your numbers.

### E6. High: Option 8 doesn't give the trigger words
The Monthly checkup section only runs if they "say 'monthly checkup'", but the menu just says "paste this prompt and your save block, and upload the new month".

Rewrite:
> **8. Monthly checkup.** Next month, open a new chat, paste this prompt and your SAVE box, type "monthly checkup", and upload last month's statements.

### E7. Low: Option 1 is fine; tidy the AI note
"Tell me which items from the report you want to cut, and your monthly savings goal if you have one." Clear. (The parenthesis after it is AI-only and reads oddly but won't leak.)

---

## F. Save block instructions (Step 7)

### F1. Med: "If the chat runs out" and "the prompt"
"Copy this into a note. If the chat runs out, paste the prompt and this block into a new chat and type continue."

Rewrite:
> "Copy this box into your Notes app. It's for me, so you don't need to read it. If this chat gets too long or stops working, open a new chat, paste the Money X-Ray prompt and this box, and type continue."

### F2. Low: Save block line labels
The box is mainly machine-read, so keep the format. Two label fixes stop it clashing with the report: "liquid $x" → "cash free now $x"; keep "Paybacks" and use that word in the report too (C4).

---

## G. Other scripted lines (fine, minor notes)

- "Got 3 files. Send the rest, or type done." Clear. Make sure "3" is filled with the real count.
- "Next: Visa and Amex. Reply **go**." and "Reply **go** for the rest." Clear. Consider "Reply go to keep going" the first time so the customer knows "go" is the whole reply.
- Debt to-do "Pay $X to <target>; pay the minimum on the others." Clear. Change the semicolon to a period for phone reading.
- Debt cautions: "balance transfers and consolidation loans have fees and fine print". Rewrite: "Moving debt to a new card or taking a loan to pay off cards can come with fees and catches. Look into them, but they're not a recommendation."
- Tone overall: warm and non-judging. "personal financial investigator" is fine as the AI's role; the customer never sees it unless the AI quotes it.

---

## Top 5 to fix first
1. A1: make the how-to box match the prompt (PDF for cards, 3-month download OK, Venmo etc).
2. E1/E2/E6: remove "(Step 6)" leaks, add a "how to pick" line, give the "monthly checkup" trigger words.
3. C1/C2/C3: give the AI fixed plain labels for APR, avalanche/snowball, net worth, liquid net worth.
4. D1: replace "My guess: unknown" with a real guess.
5. A2/E4: explain CSV once, and give a phone path for paste and export.
