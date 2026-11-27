# Money X-Ray Complete Guide: privacy review (cold read)

Method: extracted all 18 embedded images at native resolution (1290x2796 / 1290x2236) with pdfimages, viewed each whole and in full-resolution horizontal strips, plus 8x zooms on small text. Checked text layer, metadata, links. Redaction boxes are baked into the raster images (no vector overlays hiding live content underneath). Extracted images deleted afterwards. No personal data is reproduced here, only its type and location.

## Clean (no readable personal data found)
- Names, account numbers/endings, addresses, phone numbers, emails: none readable in any image.
- Dollar amounts: all boxed in report screenshots.
- Contact photos and names in share sheet (p9, img 3): heavily blurred, unreadable.
- File thumbnails and two non-statement file names (p9 img 4; p13 img 9, bottom rows; p13 img 10, bottom strip): blurred, unreadable.
- Statement preview (p8 img 2): heavily blurred; only generic boilerplate dispute text is legible at the bottom.
- PDF metadata: no author field; no links; no file paths.

## Findings

| # | Page | Image | Region | Kind of data | Severity |
|---|------|-------|--------|--------------|----------|
| 1 | 3 | text | "A note from Randy" | Author's full name. Combined with the stated fact that screenshots come from the author's own statements, every finding below is tied to a named person. | High (owner decision) |
| 2 | 8 | img 0 and img 1 | Top: assistant-greeting bar, "Provided by __ of __" line, red/blue blurred logo square top right; menu items and bottom tab bar | Bank identity. Name boxes are covered, but the surviving UI (named virtual-assistant search bar, menu wording, tab layout, logo colours) makes the specific large bank recognisable. Guide p8 caption says the bank's name is blurred, which is true literally but not in effect. | Medium |
| 3 | 8 | img 1 | Statement tiles | Statement closing dates (month and day) visible for 11 months; years boxed. Reveals billing-cycle day. | Low |
| 4 | 14 | img 11 | Reconciliation table, left column | Account structure: one checking, one savings, three credit cards, one personal loan. | Low |
| 5 | 14 | img 12 | Donut chart and table | Real spending data not blacked out: slice proportions between three categories, a named coffee-chain merchant, and exact transaction counts per category over the period. | Medium |
| 6 | 16 | img 13 | Clarification questions | Mentions ATM withdrawals and Zelle deposits from other people; bank-name word boxed. | Low |
| 7 | 19 | img 14 | Summary text | Sensitive financial-situation flags about the author: high-interest cash advances, declining savings, rising credit card debt, overlapping memberships, gig income. | Medium (sensitive) |
| 8 | 21 | img 15 | Top rows and subscription calculator | Named providers and subscriptions: mobile carrier (partly behind menu button but recognisable), regional cable/internet provider, a local membership organisation, two game-console subscriptions, two software subscriptions; one partly boxed name ending in "Center". The cable provider and membership organisation loosely point to region of residence. | Medium |
| 9 | 25 | img 16 | Debt comparison and payoff milestones | Payoff timelines in months for snowball / minimums and per-debt milestones (four debts); derived from real balances and rates. Also mentions promotional rate expiry and cash-advance balances. | Medium |
| 10 | 28 | img 17 | Budget list | Budget line items show the author rents and has a car payment and car insurance (amounts boxed). | Low |
| 11 | 12, 16 | img 6, img 13 | On-screen keyboard | Keyboard languages (Spanish/English layout and suggestions) visible. | Low |
| 12 | 8-13 | all phone shots | Status bar | Time, battery, screen-recording indicator; app list in share sheet (p9 img 3). Not identifying alone. | Info |

## Accuracy of the guide's privacy promises
- p3: "screenshots ... with my personal details blacked out" - mostly true; see findings 5, 7, 8, 9 (real spending counts, merchants, providers, debt timelines and financial-distress flags remain).
- p8 caption: "personal details, account numbers and the bank's name blurred" - names are covered, but the bank is still recognisable from UI (finding 2).
- p10: "black out ... anything that points to where you live or work. That's exactly how the screenshots in this guide were prepared" - overstated: regional provider and local membership (finding 8) remain.
- p12: "Personal details, bank names and dollar amounts are blacked out" - dollar amounts yes; but transaction counts, chart proportions and payoff months remain (findings 5, 9). Bank names in report text are boxed.
- p10 "What the AI is told to do: Never write out an account number" - inconsistent with the prompt (Money_XRay_Prompt.txt and the prompt appendix in the PDF, rule 6), which allows "ending in 1234 at most". Either the guide should say "at most the last four digits" or the prompt should drop that allowance.
- p10 "Money X-Ray never sees them, never connects to your bank, never asks for passwords" - consistent with the prompt; accurate.
- p10 "The honest version" caveat and AI-app settings advice - reasonable; settings paths are dated "November 2026" and flagged to check.

## Suggested fixes
1. Decide whether the full author name on p3 should stay given the real-data screenshots; if it stays, tighten findings 5, 7, 8, 9.
2. p8 img 0/1: crop or blur the assistant greeting bar, "Provided by" line and logo square, or reword caption to not imply the bank is unidentifiable.
3. p14 img 12: box the transaction counts and the merchant name, or replace chart with the fictional household.
4. p19 img 14, p21 img 15, p25 img 16: box provider/subscription names and payoff months, or swap for fictional-dataset screenshots.
5. Align the p10 account-number wording with the prompt.
