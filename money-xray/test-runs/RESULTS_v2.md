# Prompt v2 test results (free plans + cash)

**Date:** 2026-11-26. **Dataset:** the average-US-household profile (BLS CE 2025), with the customer's cash answers (`test-data/CUSTOMER.md`). All runs are blind: the agents never saw the answer key.

| Run | Setup | Statement rows | Balance checks | Cash handling | Result |
|---|---|---|---|---|---|
| `v2-runA` | Code tool, all 5 accounts in one chat | 219/219 correct | 5/5 at $0.00 | Exact: $346.67 in, $223.33 new spending, ATM cash moved, not double counted | **PASS** |
| `v2-runB1` | Free plan: no code, all math by hand; chat "runs out" after 3 accounts | Account totals exact to the cent (gym filed under Health instead of Subscriptions; totals unaffected) | 3/3 at $0.00 | n/a (stopped before Step 3B) | **Correct** |
| `v2-runB3` | Free plan: a NEW chat resumes from runB1's checkpoints only; earlier statements unavailable | 69/69 correct (Mastercard, Amex) | 2/2 at $0.00 | Exact | **PASS** (`grade.py --only`) |

A first attempt at the resume run (B2) was thrown out: the agent opened the earlier statements without asking for them. B3 reran it with those files absent.

## What the runs proved

- Without code, an AI working by hand on the free-plan path reconciled every account to the cent and matched the answer key.
- A new chat can finish the job from saved checkpoints alone. When the customer couldn't re-upload earlier statements, it listed them as a limitation instead of inventing transaction rows.
- Cash is counted once: weekly amounts converted correctly, explained ATM cash moved into the right categories, and the cash jar worked out as savings.
- Every run found the same story: about $1,450 to $1,750 a month is left over on paper and piling up in checking, while the Visa balance grows and costs about $61 a month in interest. The customer's chosen cuts ($30 a month) fall $270 short of the $300 goal, and the report said so.

## Prompt fixes made from these runs

1. Hand-math shows only subtotals and the final check, so free-plan messages stay short.
2. Checkpoints are multi-line, with opening and closing balances, a cash-withdrawal line and a Paybacks line.
3. A payback is applied in Step 4, not as negative spending in the account it landed in, because the dinner it repays may be on another card.
4. Mortgage and rent go under Housing.
5. Ask in Step 1 whether they use the Notion dashboard, and export each account right after its checkpoint, so a resumed chat never has to rebuild rows.
6. Explained ATM cash is exported as a Transfer into cash, plus one manual row per purchase.
7. On a free plan the report goes out in three short messages. The B3 report was about 1,800 words, too long for one free-plan reply.

## Still untested

- Real ChatGPT, Claude.ai and Gemini free plans. These runs simulate the free plan, but they're still Claude, the model that wrote the prompt.
- PDF statements, scanned statements, messy or vague customer answers.
- The B1 to B3 runs used the prompt before fixes 1 to 3 and 7. Those fixes have not been rerun.
