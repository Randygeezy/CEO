# Guide vs. reality: a 68-year-old, non-technical reader with a laptop and printouts

Measured with PyMuPDF on the PDFs themselves (font sizes in points, contrast against the page's beige #F2EFE8), plus page renders at 60 to 110 dpi. Page numbers are the printed page numbers (they match the PDF page index).

## Verdict

- **The audit itself: yes, they could finish.** With a paid plan and a code tool the AI does everything in one go. The customer only types "done", answers one question list, and picks from one menu. Every account balanced to $0.00, the 3 repeated Visa rows were caught, the DoorDash double charge, missing Discover and savings, Netflix price rise and unknown SQ *JMK LLC were all found, and the debt plan (23 months, $2,007.47 interest) and net worth ($162,554.08, liquid $154.08) match the guide's own sample on p33 to p35.
- **Getting to the start line is the weak part.** The guide is written around a phone (all screenshots are iPhone), and the persona uses a laptop. Downloading CSVs, finding them in Downloads, opening the .txt and copying it, and attaching files are never described for a computer.
- **The printed guide is hard to read for older eyes.** Body text is 9 to 10pt, tables 9pt, table headings 6.8pt spaced-out capitals, footers 6.5pt at 3.3:1 contrast. It is A4 while a US home printer uses Letter, so it prints at about 94%, making 9pt about 8.5pt.
- **The Action Kit can be filled by hand only in part.** About 9 of the 13 fill pages work from the report. The payoff schedule (p9), emergency/sinking funds (p12) and 12-week challenge (p13) can't be filled by hand, and the thermometers (p10) need 40 calculations. Write-in boxes are about 5mm tall and 14 to 27mm wide, too small for an older person's handwriting.

## Top problems (most serious first)

1. **Guide p8, p9, p12, p13: phone-only instructions; no laptop path.** Every screenshot is an iPhone (share sheet, "Save to Files", phone keyboard). Missing for a laptop: where a downloaded statement lands (Downloads folder), how to rename it (p9 suggests names like "Chase checking Jan" but doesn't say how), how to open Money_XRay_Prompt.txt and copy all of it (Ctrl+A, Ctrl+C / Cmd+A, Cmd+C), where the attach button is in the desktop chat app. p12 says "attach that file with the + button" and shows a phone.
2. **Small print throughout the guide.** Measured: body text 9 to 10pt (p4 to p39); table text 9pt (p7, p14, p15, p17, p23, p38 glossary all at 9pt); captions 7.8 to 8.6pt (p8, p9, p12 to p14, p25, p29); every table heading 6.8pt letter-spaced capitals (e.g., p7 "FREE PLAN / PAID PLAN", p38 "WORD / WHAT IT MEANS"); table of contents p2 at 8pt with page numbers in light grey; footer 6.5pt grey (#8A8279, 3.3:1 contrast, below the 4.5:1 minimum). Older readers need about 12pt body text. Divider subtitles on p5, p11, p20, p30 are 9pt light grey on black.
3. **Action Kit by hand (kit p4, p9, p10, p12, p13).**
   - p9 Debt payoff schedule wants month-end balances for 24 months. The report only gives payoff months, and the column headings are blank boxes. Can't be done by hand.
   - p10 Thermometers: "The AI writes the balance left at each 10% mark". By hand that's 10 numbers per debt, 40 in all.
   - p12 Emergency fund "Goal (months of spending)" and "Sinking funds" (not in the glossary on guide p38). The report never discusses an emergency fund goal.
   - p13 12-week challenge: the goal rule (3 months of freed-up money, rounded up to $25) is printed only on the "For the AI" page (kit p17) in 7pt monospace.
   - p4 Spending plan: 16 rows, but the report has 20+ categories (21 in the budget with cash lines). The three "actual" month columns have blank headings to fill in. "Targets + savings + extra to debt" and "Room left" are arithmetic the reader does alone.
4. **Action Kit print readability (all kit pages).** Field labels are 6.6 to 6.8pt spaced-out capitals in grey (#5A544D; contrast is fine at 6.5:1 but the size is far too small). Instructions are 7.5pt. Write-in boxes: 15pt (5.3mm) tall on p4 to p11 and 13pt (4.6mm) on the snapshot p3; widths 39 to 76pt (14 to 27mm) for money columns, so "$14,600.00" doesn't fit in handwriting. The whole kit prints a beige background and black header bars, so it uses a lot of ink and the white boxes print as faint outlines on toner-saving settings. Kit is Letter, guide is A4: different paper sizes in one product.
5. **The guide never tells a printed-kit user how to get box-by-box values.** Kit p2 says "Without a code tool... print the kit and write by hand" and guide p17 says option 7 makes the AI "list what goes in each box", but only if you upload the kit PDF. A reader holding a paper kit doesn't think to upload it. "Your checklist" on guide p39 doesn't mention the Action Kit at all, and the guide's own worksheets on p36 to p37 repeat the kit pages with different rows (budget p37 has 10 categories, kit p4 has 16), so the reader doesn't know which to use.

## Other confusion points, by page

| Page | Problem |
|---|---|
| Cover, p1 | "01 Before you start..." labels are 6.5pt light grey on black. |
| p2 Contents | 8pt, light-grey page numbers; chapter numbers don't match the "1. Before / 2. Audit" grouping on p4 (Part 1 = chapters 2 to 5). |
| p4 | "about 20 to 30 minutes" assumes statements are already downloaded; for a first-timer finding 15 statements across 5 logins takes far longer. |
| p6 | "prompt" is explained, but "upload", "attach", "chat" are assumed knowledge. |
| p7 | "Free plan or paid plan?" table relies on "In code, all at once" vs "By hand". The reader can't tell whether their plan has a "code tool"; p18 says to check for "data analysis" or "code", without saying where to look. |
| p7 | Checkbox list includes "Venmo, Cash App or PayPal" and "store cards", useful, but no "loan statements" reminder for the car loan, which the audit then can't see (it had to ask). |
| p9 | "CSV (best)" then "for cards, upload the PDF statements": two recommendations that pull opposite ways. "Running balance column" not explained. |
| p10 | "Cover them... with your phone's markup tool": no laptop way to black out an account number in a PDF. |
| p12 | "screenshots ... recorded with an earlier version... order of sections differ slightly": tells the reader the pictures won't match. Confusing for someone who follows pictures. |
| p13 | Guide says send "More coming" with partial uploads; the prompt replies "Send the rest, or type done". Small mismatch, harmless. |
| p17 | The menu asks for all details "in the same reply". For 5 picks that's a long message for a slow typist; the guide gives no example reply. |
| p19 | "Copy it into your notes app": no laptop instruction (which app, how to copy a code block). The save block is code-like text with symbols that's hard to retype by hand from paper. |
| p23 to p26 | Jargon not in the glossary (p38): "lump sum", "idle cash", "cushion", "rollover", "minimums held fixed", "consolidation loan", "promo balance" is there but "balance transfer" isn't. |
| p25 | Worked example table "Minimums only: No extra, no lump sum" uses words not yet explained. |
| p27 | "Liquid net worth" is explained well; good. |
| p32 | "AI agents", "fictional household built from the Bureau of Labor Statistics": not needed by this reader. |
| p33 to p35 | The sample report is the same numbers this tester got, which is reassuring, but its fine print (8.6pt) is the hardest-to-read text. |
| p40 to p45 | Six pages of 7.6pt monospace prompt; the page itself says don't copy from it. Printing the whole guide wastes 6 pages plus 4 solid-black divider pages (p5, p11, p20, p30) of ink. Guide doesn't say "print pages 1 to 39 only". |

## Kit pages that work by hand

- p3 Snapshot (but tiny boxes), p5 Subscriptions, p6 Fees, p7 Action plan (except "Do by"), p8 Debt list, p11 Net worth, p14 No-spend, p15 Checkup log row 1. Every number they need appears in the report.

## Suggested fixes (short)

1. Add a one-page "On a laptop" box to ch4 and ch6: download, find in Downloads, open the .txt, Ctrl/Cmd+A and C, click the paperclip or +, select several files.
2. Raise guide body text to 12pt, tables to 11pt, table headings to 9pt plain capitals; footer contrast to 4.5:1. Offer a Letter edition, or say "print pages 1 to 39, Fit to page".
3. Kit: label text 9pt or larger, write-in rows at least 9mm tall, money columns at least 30mm wide, a "print-friendly" version with a white background.
4. Kit p2 and guide p39 checklist: "Printed the kit? Pick 7 and upload the PDF anyway; the AI will list what to write in each box." Or have the report always include a "Copy into your kit" section.
5. Mark p9, p10, p12, p13 as "AI-filled" pages, or print the 12-week and emergency-fund rules in plain words on the pages.
