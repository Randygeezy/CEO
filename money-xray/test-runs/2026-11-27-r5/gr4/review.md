# Money X-Ray: cold-read review (buyer + consumer-protection lens)

Reviewed: `Money_XRay_Complete_Guide.pdf` (45 pages, viewed as page images plus extracted text) and `Money_XRay_Prompt.txt`. Page numbers are the printed numbers, which match the PDF page index. The appendix prompt (pp. 40-45) matches the .txt file word for word, apart from two line-break artifacts the guide warns about (p. 40).

## Verdict

**I'd recommend it, with fixes before it's sold.** The value is clear and the claims are more careful than most finance products. The "not advice / can't promise savings / AI makes mistakes" message comes early (p. 4) and again in full (p. 32), the sample numbers add up, and the prompt itself forbids promising savings (Rule 5). What lets it down as a *paid* product is the missing commercial basics: no support contact, refund policy, version, license or price. A few accuracy and testing claims also read stronger in the headline than in the fine print.

## Is the value clear?

Yes.
- The cover (p. 1), Randy's note (p. 3) and "Start here" (p. 4) say the same thing: paste one prompt, upload statements, get a checked report. No app, no bank login, no monthly fee.
- The sample report (pp. 33-35) shows the reader exactly what they'll get. It's the most convincing part of the guide.
- Part 3 (pp. 21-29) is practical. It gives cancel and dispute scripts, a fee-avoidance table, avalanche vs snowball, and a budget built from real averages. That's worth paying for even if the AI part is imperfect.
- Weak spot: the Part 2 screenshots (pp. 12-19) come from an "earlier version", they're small and they're heavily blacked out. They add little and remind the buyer that the product has changed under them.

## Does it overpromise?

| Area | Finding | Page | Severity |
|---|---|---|---|
| Accuracy | "A $0.00 result means no transaction in that account was missed or counted twice." This is too strong. Offsetting errors (a missed charge and a missed credit of the same size) still balance. More importantly, an LLM can *report* $0.00 without truly doing the check, especially in no-code mode where it adds by hand. Nothing tells the buyer to spot-check the opening/closing figures the AI quotes against their own statement. | 6 | High |
| Testing | "All 219 transactions correct… all 14 traps caught" comes from one fictional household that "the prompt was improved against". That's disclosed, but only in a small grey caption under the table. The number of runs isn't stated, and neither is which apps or models ran the automated tests. | 32 | Medium |
| Free plan | "Free plans work" (p. 7) and the green-box claim on the free-plan page, "balanced every account to $0.00 and matched every monthly total to the cent" (p. 18). The evidence is a "free-plan *style*" agent run without a code tool (p. 32), not a test on an actual free ChatGPT or Claude plan with real upload caps. Five accounts × 3 months is about 15 files. Card statements need PDFs (p. 9), and PDFs can't easily be pasted as text, so a free-plan user may simply hit the upload wall. | 7, 18, 32 | Medium-High |
| App testing | "Both were tested" (ChatGPT and Claude, p. 7). Per p. 32, that testing was the founder's own runs, used to improve the prompt, and no results are reported. That's honest on p. 32 but sounds stronger on p. 7. | 7, 32 | Low-Medium |
| Cost framing | "No monthly fee. You pay once" (pp. 3, 6) is set against budgeting-app subscriptions, but the guide itself says paid AI plans are faster, do exact math in code and give the exact debt-free date (pp. 7, 26). The real cost for the best experience may include an AI subscription. | 3, 6, 7 | Low-Medium |
| Savings | Well controlled. "It never promises savings" (p. 4, p. 32), "only counts savings you actually choose" (p. 21), and the sample's "$5,500 less interest" is clearly fictional (pp. 25, 35). The math checks out: $7,503 − $2,007 = $5,496. | 4, 21, 25, 32, 35 | OK |
| Privacy | Mostly honest. "The honest version" says covering details lowers risk but doesn't remove it (p. 10). Two gaps. First, "Usually nothing to cover" for CSVs (p. 10): CSV descriptions often carry Zelle/Venmo names, partial account numbers, card-ending digits and store locations. Second, Rule 6 stops the AI *repeating* account numbers, but it still *receives* them, so readers shouldn't be left thinking the prompt protects them. | 10 | Low-Medium |
| Speed | "About 20 to 30 minutes" on a paid plan (pp. 4, 7) has no measurement behind it in the guide. | 4, 7 | Low |

**Arithmetic spot-checks (all pass):** left over $7,290 − $5,407.16 − $300 − $175 = $1,407.84 (p. 33). Fees $365.73 + $95 + $29 + $24 + $7 + $1.86 = $522.59 (pp. 23, 35). Budget targets sum to $5,256, and $5,256 + $300 + $300 = $5,856 (p. 29). Subscriptions target $142 − $29.98 ≈ $112 (pp. 29, 35).

## Are the disclaimers adequate and visible?

Mostly adequate. They aren't everywhere they're needed.
- **Good:** p. 4 has a boxed "What Money X-Ray is, and isn't" on the first content page. p. 32 has a full "What it can't promise" list. p. 26 covers balance transfers. p. 29 says "Targets are examples, not advice". The prompt makes the PDF report carry the footer "Educational self-analysis, not financial advice."
- **Missing on the cover / p. 2:** a buyer who only skims the cover and contents sees "Money Audit" (p. 1) and no "not financial advice" line.
- **Dispute letters (p. 22):** the double-charge template says "I only made one purchase." The tool only flags a *possible* double charge (p. 15), and same merchant, same amount, same day is often legitimate (two coffees, two transit fares). The guide needs "confirm with your own receipts before you send this" right above the templates. A false dispute is a consumer harm.
- **Debt plan:** the "minimums held fixed / no new spending" assumption shows only as a small caption (p. 25). The point that payoff dates are estimates should be in the body text.
- **Audit wording:** "The No-App Money Audit" (p. 1) and the comparison with a "professional audit" (p. 3) sit uneasily with "it isn't a professional audit" (p. 4). It's acceptable because it's disclaimed, but a regulator-minded reader would notice.

## Would I recommend it?

Yes, to a buyer on a paid ChatGPT or Claude plan who is comfortable uploading statements to that AI company, and if the price is modest. For a free-plan buyer with several credit cards, I'd hold back until there's evidence from a real free-plan run.

## What would make me request a refund

1. On a free plan, the uploads cap out before all my card PDFs are in, despite "Free plans work" (p. 7).
2. The AI says an account balanced to $0.00 and I later find a missed or invented transaction (p. 6 promised this couldn't happen).
3. Files the guide says I got aren't in the download: `Money_XRay_Prompt.pdf` (pp. 7, 12) and the **Action Kit** fillable PDF (pp. 17, 31, menu option 7). Neither was in what I received.
4. I use Gemini, which is listed but untested (pp. 7, 32, 39). I'd only learn that after buying.
5. Bought on the strength of "you pay once", then found I needed a paid AI plan for the exact debt-free date and code-checked math (pp. 7, 26).

## Missing for a paid product

| Item | Status |
|---|---|
| Support contact (email/site) | **Absent.** Nowhere in the guide or the prompt. |
| Refund policy | **Absent.** The only "refund" mentions are merchant refunds. |
| Version number / release date | **Absent.** Only "November 2026" in the privacy-settings table (p. 10). The guide keeps saying "earlier version" (pp. 12, 16, 19, 25) but never names the current one. Monthly users can't tell whether their prompt is current. |
| License / terms of use | **Absent.** Can I share the prompt with my partner? Use it for clients? |
| Copyright / seller identity | **Absent.** Only "Randy Gonzalez" (p. 3); no business name. |
| Price / what's included | **Absent.** No list of bundle contents (guide, prompt .txt, prompt .pdf, Action Kit). |
| Changelog / update policy | **Absent.** Do buyers get prompt updates free? |
| Data-handling statement from the seller | Partial. "Money X-Ray never sees them" (p. 10) is good. Add one line saying the seller collects nothing. |

## Top fixes, in order

1. Add a final page with the support email, refund policy, version + date, license, copyright/seller and bundle contents. Put the version and date on the cover and in the prompt's first line.
2. Soften p. 6 to "makes missed or doubled transactions very unlikely", and tell readers to check the opening/closing balances the AI quotes against page 1 of their statement.
3. Qualify the free-plan claims (pp. 7, 18): "tested in a no-code simulation; real free plans may cap uploads". Ideally, test on a real free plan and report the result.
4. Add "check your receipts first" above the dispute templates (p. 22), and change "I only made one purchase" to a fill-in.
5. Ship the Action Kit and the prompt PDF, or remove the references to them (pp. 7, 12, 17, 31). Move the p. 32 overfitting caveat out of the small caption into the body text.
