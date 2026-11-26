# Net worth snapshot: expected answers

Fictional test family, as of 2026-10-31. Statement balances come from `statement_summaries.csv` (closing balances); everything else is customer-reported (`CUSTOMER.md`). Discover's balance is customer-reported because there's no statement.

| Item | Type | Amount | Source |
|---|---|---:|---|
| Everyday Checking | Asset | 1,680.50 | Statement |
| Joint Checking | Asset | 5,699.99 | Statement |
| Savings | Asset | 3,200.00 | Customer-reported |
| Cash in jar | Asset | 400.00 | Customer-reported |
| 401(k) | Asset | 42,000.00 | Customer-reported |
| 403(b) | Asset | 18,500.00 | Customer-reported |
| Home | Asset | 340,000.00 | Customer-reported |
| Toyota | Asset | 18,500.00 | Customer-reported |
| Second car | Asset | 6,000.00 | Customer-reported |
| **Assets** | | **435,980.49** | |
| Mortgage | Liability | 248,000.00 | Customer-reported |
| Toyota loan | Liability | 14,600.00 | Customer-reported |
| Visa Rewards | Liability | 6,477.85 | Statement |
| Discover | Liability | 2,140.00 | Customer-reported |
| Mastercard Cash Back | Liability | 1,112.91 | Statement (paid in full monthly, still owed until paid) |
| Amex Blue | Liability | 645.65 | Statement (same) |
| Mom | Liability | 450.00 | Customer-reported |
| **Liabilities** | | **273,426.41** | |
| **Net worth** | | **162,554.08** | |

**Liquid net worth** = cash and bank (1,680.50 + 5,699.99 + 3,200.00 + 400.00 = 10,980.49) minus cards and short-term debts (6,477.85 + 2,140.00 + 1,112.91 + 645.65 + 450.00 = 10,826.41) = **$154.08**.

What the AI must get right:
- Count paid-in-full card balances as owed (Mastercard, Amex). Leaving them out gives liabilities of 271,667.85 and net worth of 164,312.64. Treat that as wrong unless the AI says the bills were already paid.
- Liquid net worth is about $154. The family is worth about $162,500 on paper but has almost nothing free right now. The AI should point that out, because it explains why they feel broke.
- Mark statement vs customer-reported lines, don't judge, and don't quote national averages from memory.
