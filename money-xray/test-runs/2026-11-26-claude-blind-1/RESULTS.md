# Blind test run 1: Claude, average US household

**Date:** 2026-11-26. **Prompt:** MASTER_PROMPT v1 (before the fixes listed below). **Dataset:** average-US-household profile (BLS CE 2025).
**Setup:** a separate Claude agent with code execution, given only the prompt, the six statement files and `CUSTOMER.md`. It never saw the answer key.

## Score

- `grade.py`: **PASS**. 219/219 transactions typed, categorized and flagged correctly; 3/3 export duplicates removed; the DoorDash double charge kept; monthly totals exact to the cent.
- Reconciliation: $0.00 difference on all five accounts. The auditor also showed the Visa would be off by $51.44 had the duplicates stayed in.
- Traps caught in the written report: **14 of 14**.

## What it told the customer

- Spending averages about $5,350 a month against $7,290 take-home. The "missing" money is mostly piling up in Joint Checking, up $4,740 in three months, while the Visa balance grew to $6,496 and cost $184 in interest.
- Fees and interest came to $340 in three months.
- Four video services and two music services. Netflix went up. An unknown $45/month charge (SQ *JMK LLC).
- The customer's chosen cuts (Hulu, Apple Music) free up only $30/month, and the report said plainly that this is far short of the $300 goal.

## Problems found, and the fixes made to the prompt

| Problem | Fix |
|---|---|
| The report subtracted Jordan's $45 payback from Dining Out; the CSV export didn't. The two disagreed by $45. | One net-spending formula (expenses - refunds - confirmed reimbursements) used in the report, the charts and the export. |
| Card payments name the issuer (CHASE, CITI), not the user's nickname. | Match on amount and timing, and state the match. |
| Transaction date or post date was unclear for matching. | Transaction date, or post date if that is all there is. |
| "Regular interval, similar amount" swept in Chick-fil-A and Uber Eats. | Habits go under trends, not recurring charges. |
| No rule for annualizing bills that vary. | Fixed charges use the latest amount, variable ones the average. |
| It asked for a car-loan statement as "missing". | Loans don't need a statement. |

## Limits of this test

- The model that took the test is the same model family that wrote the prompt and the dataset, though it worked blind. Customers will use ChatGPT and claude.ai chat, often without code execution, often on free plans. Those runs are the real test.
- The customer script answered every question cleanly. Real customers give vague answers and upload PDFs.
