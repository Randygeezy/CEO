# Money X-Ray: a skeptical buyer's cold read

I read the 7-page PDF as page images and the .txt file. I have not run it on real statements yet.

## Verdict

I'd keep it and not ask for a refund, provided it cost about $10 to $20. Above roughly $30 I'd want my money back, because nothing in the file shows me what the output looks like.

The prompt itself is better than what I'd type into ChatGPT. It covers the mistakes a plain "analyze my bank statements" request usually makes:
- counting a card payment from checking as spending, which double counts it
- counting transfers to savings as spending
- skipping the balance check
- missing subscriptions that show up only once
- blending card APRs into one rate

It also asks its questions once, at the end, with a guess for each one, and the save block lets a run carry over into a new chat. I couldn't have written this myself in an evening. The packaging hides that work, though.

## First impression of the PDF

- Page 1 is clean: a title, a disclaimer and a green "How to use it" box with 5 steps. It's clear and short.
- Pages 1 to 7 are mostly raw markdown in monospace type, with the `**` and `##` symbols showing. It reads like a printed text file, and nothing on the page tells me why it's built this way.
- Nothing shows me what I'm getting. There's no sample report, no screenshot, no "here's what it found for a test household". I'm asked to trust 6 pages of instructions written for the AI, not for me.
- Nothing says why this beats a one-line prompt. The good parts (double-count rules, payment matching, balance check) are buried in rules written for the model.

## How clear is it to use

- The 5-step box is good. "Reply ok to keep them" and "type continue" are easy.
- Step 2 says to copy from "You are Money X-Ray" to "send the Step 1 message now". In the PDF that runs across 6 pages. Selecting text across that many pages on a phone PDF viewer is painful and tends to pick up page breaks.
- The pointer to the .txt file sits in small grey text at the very bottom of page 7. It should be in the box on page 1, as step 2. The .txt is the right thing to copy, and it worked fine for me.
- The upload instruction is heavy: 3 statements for every checking account, savings account and card. Someone with 2 banks and 3 cards needs 15 files, from 5 different websites. The prompt names where to find them, but that's still the real effort, and the PDF's "That's it" undersells it.

## Promises it may not keep

1. **"Free plans work."** This is the claim I trust least. Free tiers limit uploads and messages, and some have no code tool. The prompt has a no-code mode that adds things up by hand in small groups and checks each total twice. For 3 months of transactions (often 200 to 600 rows) that is exactly where language models drift. In practice I'd expect to need a paid plan with a code or data-analysis tool for numbers I'd trust.
2. **"It does the audit."** On a free plan it will do it in pieces, with several "Reply go" stops, and the chat may run out partway. The save block helps, but the PDF should say this.
3. **The balance check as "proof".** It's a good idea, and the prompt honestly says "proves the math adds up, not that every category is right". But without a code tool, a model can report "$0.00" it never actually computed. The prompt forbids that ("never describe as checked what you didn't check"). A prompt can't enforce it, and the buyer has no way to verify.
4. **"Never guess and never invent"** sits next to many instructions to guess (APR estimate, the 1% minimum, "my guess" labels). The labelling makes this fine in practice, but the headline rule reads as absolute and isn't.

## What I'd still need

- **The Action Kit PDF.** Menu option 7 ("upload the Money X-Ray Action Kit PDF") points to a file I don't have. It's either missing from the purchase or an upsell that isn't marked as one. Either way it's confusing.
- **One example run.** A redacted sample report, even one page, would justify the price on its own.
- **A paid AI plan, realistically,** for the code tool. Or a clear warning that free-plan numbers are rougher.
- **A note that it's US-centric.** APR, avalanche/snowball and "in the US, payments above the minimum go to the highest-rate balance" won't fit UK, EU or Canadian buyers. Nothing says it's for US accounts.
- **Privacy plainly up front.** I'm uploading my bank statements to an AI company. The prompt handles this well inside the chat (CSV over PDF, cover account numbers, initials for other people). But the PDF cover only says "usually have no account number", and the provider's data policy is mentioned only inside the prompt.
- **Monthly upkeep is manual.** Each month I paste the 25KB prompt again, then the save block, then the new statements. That's workable, but it's not the "monthly checkup" the menu makes it sound like.

## Would I ask for a refund?

No, at an impulse price. The rules are real expertise in how these analyses fail, and a plain ChatGPT request wouldn't follow them. I'd be annoyed about the missing Action Kit, the lack of a sample, and "free plans work", which I expect to be only half true. A clearer cover page and one sample would turn "probably fine" into "obviously worth it".

## Top 5 fixes, in order

1. Add a 1-page sample report (redacted or made up) and a "why not just ask ChatGPT" line on page 1.
2. Ship the Action Kit or remove menu option 7, and mark any upsell as one.
3. Soften "Free plans work" to say free plans work but run in pieces and are less exact, and that a code or data-analysis tool gives checked totals.
4. Move "copy from the .txt file" into the page 1 box, and render the prompt pages as clean text instead of raw markdown.
5. Say it's built for US bank and card statements, and put the privacy note (what you're uploading, and to whom) on page 1.
