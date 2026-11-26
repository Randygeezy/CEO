# Money X-Ray

Turns the customer's own ChatGPT or Claude into a personal financial investigator that works from downloaded bank and card statements. No bank linking, one-time purchase. The full product blueprint is in the founder's *Money X-Ray Product Blueprint* (Nov 25, 2026).

This folder covers the blueprint's **immediate next action**: master prompt v1 and a five-account test dataset with known answers. The Notion template and the paid offer wait until the prompt reliably passes this dataset.

```
money-xray/
├── prompt/MASTER_PROMPT.md          the product: paste into ChatGPT or Claude
└── test-data/
    ├── generate.py                  builds the dataset + answer key (deterministic)
    ├── grade.py                     scores an AI's CSV export against the answer key
    ├── statements/                  what you upload to the AI (fictional)
    └── answer-key/                  what the AI should find. Never upload this.
```

## The test dataset

A fictional two-earner family calibrated to the **average US household** in the BLS Consumer Expenditure Survey 2025 (income $110,847 before tax, $81,905 a year spent; [BLS release](https://www.bls.gov/news.release/cesan.htm)). Five accounts, August to October 2026: Everyday Checking, Joint Checking, Visa Rewards, Mastercard Cash Back, Amex Blue. There are 222 raw rows, 219 of them real. `ANSWER_KEY.md` compares each spending category with the BLS average. Every file uses a different bank's format, sign convention and date format, the way real exports do. `statement_summaries.csv` stands in for the PDF summary page (opening and closing balances) so the AI can reconcile.

Fourteen deliberate traps are planted, each listed in `answer-key/ANSWER_KEY.md`, including:

- card payments that show up in checking and on the card (double counting)
- a payment to a Discover card whose statement wasn't supplied
- overlapping Visa exports that repeat three rows with the same reference
- a real DoorDash double charge that must **not** be removed
- a refund, a friend's Zelle reimbursement and an unexplained Venmo inflow
- a Netflix price increase, overlapping music and streaming services, an unknown recurring `SQ *JMK LLC`
- a new bank maintenance fee, late and foreign-transaction fees, card interest
- Costco groceries and gas mislabelled "Shopping" by the bank

Expected net spending: **$5,060.34** (Aug), **$5,866.20** (Sep), **$5,157.77** (Oct), against $7,290 a month in take-home pay. On paper there's about $2,000 a month left over. The audit has to explain why the family still feels broke: a growing Visa balance and its interest, a Discover card nobody listed, and fees.

## Running an accuracy test (blueprint phase 4)

1. Open a new chat in ChatGPT or Claude. Paste `prompt/MASTER_PROMPT.md` from the line down.
2. Answer the interview from the customer script in `test-data/CUSTOMER.md`. It deliberately leaves out the Discover card and the savings account, because the AI should find them.
3. Upload the six files in `test-data/statements/` when asked. Answer the AI's follow-up questions from the same script, and nothing more.
4. Ask for the Phase 7 transaction export, save it, and grade it:

   ```bash
   python3 money-xray/test-data/grade.py ~/Downloads/Money_XRay_Transactions_2026-10.csv
   ```

5. Check the written report's flags by hand against the "Every trap the audit must catch" list.

Run the test on ChatGPT and Claude separately, and on more than one plan tier. Record the score and the traps missed for each run. A run passes when `grade.py` prints `PASS` and every trap is mentioned in the report.

To change the dataset, edit `generate.py` and run `python3 money-xray/test-data/generate.py`. The statements and the answer key are rebuilt together, so they always agree.
