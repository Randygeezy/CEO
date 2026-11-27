# Money X-Ray Complete Guide: copy and layout review

Cold read of `Money_XRay_Complete_Guide.pdf` (45 pages, A4), checked page by page as images, against `Money_XRay_Prompt.txt`.

## Verdict

The guide is clean and ready to ship once a few small fixes are made. I found no typos that would embarrass it, and every contents page number and chapter cross-reference is correct. The appendix (pp. 40-45) matches the prompt file word for word. All of the sample-report arithmetic checks out. What's left is mostly layout (half-empty pages, cropped screenshots) and a handful of small wording drifts from the prompt.

## Cross-references and contents (all correct)

- Contents (p. 2): every entry lands on the right page (3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 19, 21, 23, 24, 27, 28, 31, 31, 32, 33, 36, 38, 39, 40).
- p. 4: "chapter 19 / page 33", "chapter 4", "chapter 6", "chapter 20" and the part ranges 2-5, 6-10, 11-15, 16-21 are all correct.
- p. 13 "Chapters 7 to 10", p. 18 "chapter 18", p. 23 "(chapter 13)", p. 29 "chapter 16 / chapter 20 / chapter 19", p. 33 "chapter 18": all correct.
- p. 17 menu table: the chapter column (11-12, 13, 14, 15, below, below, below, 16) is correct.

## Arithmetic (all checked)

- p. 33 money in vs. out: 7,290.00 - 5,407.16 - 300 - 175 = **1,407.84**. Correct. $4,740 is more than the 3 x 1,407.84 = 4,223.52 left over, which fits the text.
- p. 34 categories: these sum to **$5,407.16**. Correct. Each share rounds correctly; together they total 101%, which the footnote covers.
- p. 35 fees: 365.73 + 95 + 29 + 24 + 7 + 1.86 = **$522.59**. Correct (also on pp. 23 and 33). 522.59 / 3 = 174.20, which matches the category row on p. 34. Visa interest: 365.73 / 3 ≈ $122 a month. Correct.
- pp. 34-35 subscriptions: every yearly figure is monthly x 12. Correct. Planet Fitness 299.88 + 49 = 348.88. Correct.
- p. 35 cuts: Hulu 18.99 + Apple Music 10.99 = 29.98 a month and $359.76 a year. That is $270.02 short of $300. Correct.
- p. 35 debt: 7,503 - 2,007 = 5,496, so "about $5,500 less interest" holds. The 23 vs. 62 months match p. 25.
- p. 27 net worth: 10,980 + 60,500 + 364,500 - 273,426 = **162,554**. Correct.
- p. 29 budget: the averages sum to 5,406 (shown as 5,407 after rounding, fine). The targets sum to **5,256**. The difference is 151. Correct. 5,256 + 300 + 300 = 5,856. Correct. "Everything else $1,073" equals p. 34's $1,214.95 minus subscriptions of $142. Consistent.
- Soft spot, p. 35: "Subscriptions category averages $142." The listed services come to $127.92 a month at today's prices, plus 49/3 = $16.33. Even with Netflix at the old $15.49 for two months, that gives $142.58, which rounds to **$143**, not $142. It's a $1 rounding question, so either confirm it against the test data or say "about $142".

## Matching the prompt

- The appendix (pp. 40-45) matches the prompt file exactly. The only differences are page footers and one line-wrap hyphen.
- Menu (p. 17): the numbering and names of options 1-8 match Step 5.
- Report sections (p. 14): sections 1-9 are in the prompt's order. Save block before the question list (p. 13) and menu after the answers (p. 17) both match.
- Small drifts:
  1. p. 16: the DISCOVER example ends "tell me the balance." The prompt says "the balance and APR." p. 15 (flags table, "tell it the balance") has the same truncation. p. 31 does say "balance and APR", so the three pages disagree.
  2. p. 17, option 3: "Add home, car and retirement values." The prompt also asks for the **mortgage and car loans**.
  3. p. 17, option 2: leaves out the prompt's "if you already pay more than the minimums, say how much," and that it asks for APR and minimum when the statements don't show them.
  4. p. 17, Action Kit: "With a code tool, you get it back filled in. Without one, the AI lists what goes in each box." The prompt doesn't say this; it defers to the kit's own "For the AI" pages. This should be confirmed against the Action Kit.
  5. p. 6: "A $0.00 result means no transaction in that account was missed or counted twice." This is stronger than the prompt, which says it "proves the math adds up, not that every category is right." Two offsetting errors could also net to $0.00. Suggest: "...is strong evidence nothing was missed or counted twice."
  6. p. 16: "usually no more than 8 questions." The prompt sets a hard limit of 8, so "at most 8" would be accurate.

## Typos, grammar and wording

- p. 39: "Read the report; check the $0.00 Check for every account" repeats "check". Suggest "look at the $0.00 Check for every account".
- p. 38 glossary is out of alphabetical order: Cash advance, CSV, Card payment, Checkpoint. It should run Card payment, Cash advance, Checkpoint / save block, CSV.
- p. 38: "Checkpoint / save block". The word "checkpoint" appears nowhere else in the guide or the prompt. Drop it and file the entry under S as "Save block".
- p. 29 budget note: "Fees and interest... Falls as the cards are paid down, Discover first, then the Visa." The $174 is Visa interest plus bank and card fees; Discover wasn't uploaded and isn't in this figure. Suggest "Falls as the Visa is paid down."
- Mixed spelling: the guide uses US spellings (recognize, categorize) but British "labelled" (pp. 16, 27) and "mislabelled" (p. 32). The prompt also says "labelled", so pick one spelling and use it in both.

## Inconsistent terms and capitalization

- Category names: the prompt uses Title Case ("Dining Out", "Debt Payments", "Childcare"). The guide uses sentence case ("Dining out", "Debt payments (car loan)", p. 34) and "child care" (p. 32). That's acceptable for prose, but the sample report on p. 34 is meant to look like the AI's output, which would use Title Case.
- Part names: the cover (p. 1) says "Acting on results", while the contents and p. 20 say "Acting on your results".
- p. 32: the test household is "three credit cards they uploaded (plus a fourth...). Five accounts." The sample report (p. 33) also lists an un-uploaded **savings account**. Chapter 18 should mention it, since it is one of the traps.

## Layout

- **Near-empty pages:** p. 26 is about 55% blank below the callout. p. 19 (save block) is about 45% blank. p. 27 is about 40% blank. p. 13 is about 35% blank. Consider tightening chapter 13 so p. 26 isn't left mostly white.
- **Cropped or clipped screenshots:**
  - p. 16: the top line of the screenshot is cut ("10. Information requiring clarification" is sliced). The phone keyboard is Spanish (ñ, "Sí"); that's harmless but noticeable.
  - p. 25: the top is cut ("wball 27"), and the scroll-arrow button covers text ("s↓s are verified"). The screenshot also shows **27 / 73 months**, while the table directly below says **23 / 62**. The caption says "earlier version", but conflicting numbers right next to each other will confuse readers. Crop the numbers out or replace the image.
- **Images too small to read:** the phone screenshots on p. 12, p. 13, p. 14 (both), p. 21, p. 28 and p. 19 render at about 30% page width with roughly 4-5pt text. Only the captions carry the meaning. Either enlarge them to about 45% width or accept them as decorative.
- p. 14: the "Where the money goes" screenshot shows an unblurred merchant name (Dunkin, from the founder's real run). It isn't a personal identifier, but it is a real spending detail.
- I found no stranded headings, no text overlapping text, and no clipped body text. The contents spine text on p. 2 renders correctly.
- p. 40 appendix: the raw Markdown (`**bold**`) is shown as-is. That's correct, since it's copy-paste text.

## Top fixes, in priority order

1. p. 25: the screenshot's 27/73 months contradict the table's 23/62, and the image is cropped with an arrow over text.
2. p. 26: page about 55% empty.
3. pp. 15/16 vs. p. 31: "balance" vs. "balance and APR" for an un-uploaded card. Align with the prompt.
4. p. 17: the net worth option leaves out mortgage and loans; the debt option leaves out "what you pay now" and the APR/minimum request.
5. p. 6: the $0.00 Check claim is stronger than the prompt's.
6. p. 35: $142 subscriptions average probably rounds to $143.
7. p. 38: glossary out of order, and "Checkpoint" is used nowhere else.
8. p. 39: "check the $0.00 Check". Also the small screenshots on pp. 12-14, 19, 28, and p. 16's cropped top.
