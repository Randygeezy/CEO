# Guide vs. reality: a buyer who uploads only October

Page numbers are the printed page numbers in Money_XRay_Complete_Guide.pdf (they match the PDF page index). Pages 41 to 45 (rest of the prompt appendix) were not reviewed as images; the prompt was read from Money_XRay_Prompt.txt.

## What the guide says about how many months

| Page | What it says | One-month reality |
|---|---|---|
| p.7 "What you need" | "3 months for every checking account, savings account and credit card... 6 months is even better." | Clear instruction, but no reason given and nothing about what happens with less. The impatient buyer skips it. |
| p.9 "Three months per account" | "One monthly statement covers one month. For a three-month audit, download three monthly statements..." | States a fact, not a consequence. Never says subscriptions, trends, price increases and averages need more than one month. |
| p.39 Checklist | "Download 3 months of statements for every checking, savings and card account" | Same. |
| p.36 Worksheet "Statement checklist" | Columns Month 1, Month 2, Month 3 | Implies three, does not say why. |
| p.4 "The fastest path" | "If you want results tonight: read chapter 4... then chapter 6" | Chapter 4 (p.8) shows how to pick "the month, or a 3-month date range". An impatient reader following only the fastest path can easily download one month. The fastest path doesn't repeat the 3-month rule. |
| Nowhere | What happens with one month | **Gap.** The guide never tells the buyer that with one month the report will have no trends, no confirmed subscriptions, no price-increase check, and "averages" that are just one month. The prompt handles this (asks for earlier months as item 1), but the buyer isn't warned in advance. |

## Promises that don't hold with one month

| Page | Guide promise | What actually happened |
|---|---|---|
| p.6 "What it finds" | "Every category by month, with averages and trends" | One month: no trends section possible; "average" = October. |
| p.6 | "Subscriptions: Forgotten apps, price increases, two services doing the same job" | Overlaps found. Price increases impossible to detect (the guide's sample finds Netflix rose from $15.49, p.34; with October only it can't). |
| p.14 table, row 5 "Trends" | "What rose or fell, and the transactions behind it" | Section reduced to "not possible with one month". The guide doesn't show what this looks like. |
| p.14 row 6 "Subscriptions" | "Every recurring charge with its yearly cost and any warning flags" | Every subscription is a single sighting. Yearly cost is an assumption (x12). The prompt says to call these "possible subscriptions". |
| p.15 "Reading 'left over'" | Money left over on paper; report says where it went | Worked fine with one month (Joint Checking grew $1,752.66). |
| p.21 "The three-question test" | "Is it worth the yearly cost?" | Yearly cost is a guess from one charge; for the $49 Planet Fitness annual fee, a careless x12 would give $588. |
| p.28 "Building a budget that holds" | "Yours starts from three months of real numbers." | Budget built from one month. October includes a once-a-year gym fee and an oil change, so "averages" are lumpy. Guide doesn't warn. |
| p.29 budget example | 3-month averages (Dining out $312, Subscriptions $142...) | October numbers differ (Dining $326.30 statements, Subscriptions $175.92 incl. annual fee). A buyer comparing with the sample may be confused. |
| p.33 to 35 sample report | Shows trends ("September was the most expensive month", dining rose 34%) | Buyer with one month will not get any of this; no sample of a one-month report. |
| p.16 "Telling it about cash" | Example "the $100 ATM cash paid the babysitter" | Worked, but the customer's answer mentioned August ATM cash that isn't in the uploads; the AI had to set it aside. |

## Things the guide got right for this buyer

| Page | Note |
|---|---|
| p.6 "$0.00 Check" | Fully works with one month. All 5 accounts balanced to $0.00 from the statement summaries and running balances. |
| p.9 "Include the balance" | PDFs used, so card balances were available. Correct advice. |
| p.13 Step 3/4 | Upload all, type done, it works on its own. True; no prompting needed. |
| p.15 flags table | "Account not uploaded" flag fired for Discover and savings, as described. |
| p.16 "The kinds of questions you'll see" / "reply ok" | Matched. The question list included the earlier-months request first. The guide doesn't mention that item, though. |
| p.25 debt worked example | Avalanche 23 months, $2,007; snowball 23 months, $2,061; minimums 62 months, $7,503; lump $2,587.08. My one-month run reproduced these exactly ($2,007.48 / $2,061.33 / $7,503.15), because the plan only needs the latest balances. |
| p.27 net worth example | $162,554 and liquid $154 matched exactly ($162,554.08 / $154.08). |
| p.32 "What it can't promise" | "It only sees what you upload." True but general; doesn't mention months. |

## Other guide observations

- p.25 / p.26: guide's worked example says "leaving the next Mastercard bill covered", which assumes Mastercard is paid in full. With one month, the statements alone contradict that (payment $450 < previous balance $1,117.54). The buyer has no warning that the AI may misjudge pay-in-full cards from one month.
- p.17 "Then the menu": table lists option 2 "Exact date with a code tool". True. Nothing about one-month accuracy, which is fine since the plan doesn't need history.
- p.31 "If something goes wrong" has no row for "I only uploaded one month" or "it says it can't show trends". Natural place for a fix line ("upload the two earlier months and type done; it reruns subscriptions and trends").
- p.31 "Monthly checkup" would partially rescue this buyer next month (two months total), but the guide doesn't connect these.
