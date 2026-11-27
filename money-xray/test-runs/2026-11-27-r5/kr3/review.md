# Money X-Ray Action Kit: print-designer review

File: Money_XRay_Action_Kit.pdf, 17 pages, US Letter (612x792 pt), 841 fillable fields, Playfair Display + Poppins + Mrs Saint Delafield, cream (#F3EFE9) background on every inside page, near-black cover.
Method: rendered all pages at 50 and 80 dpi, measured ink coverage and empty space under the last element of each page, read font sizes and field rects with PyMuPDF.

## Verdict

Clean, consistent, and more coherent than most $5-15 Etsy finance bundles: one type system, one header bar, one rounded-box field style, real fillable fields, a sensible page order. It does not yet look like a premium planner. It looks like a well-made form. What stops it: a third of most pages is empty, labels are too small to read in print, the writing boxes are too short for a pen, there is no decorative or emotional layer (no progress visuals besides p10, no colour coding by section), and two pages of monospace code ship inside the product. Worth paying for at $9-15 today; to sit next to $20-30 Canva/Etsy planners it needs the fixes below.

## Competitor baseline (Etsy/Canva premium budget planners)

- Full pages: content runs to the footer, rows sized for handwriting (7-9 mm).
- Section colour coding and tabbed or numbered dividers.
- A "printer-friendly" white version alongside the styled one.
- US Letter and A4 (often A5 and Happy Planner too) in one download.
- Trackers with visuals: thermometers, coloring trackers, habit grids, charts.
This kit matches on fillable fields and type, and loses on page fill, row size, versions and visuals.

## Page by page

| Page | What I see | Fix |
|---|---|---|
| 1 Cover | 95% of the page is near-black ink. Green half-pill shape cropped at the top edge reads like a misplaced tab. "01-04" row promises four sections that are never marked again inside. | Ship a light cover (cream with black type, or a green band) as the default print cover; keep the dark one for screen/listing photos. Either make the green shape intentional (full bookmark ribbon running to the title) or drop it. Repeat 01-04 as coloured section markers in page headers. |
| 2 How to use | Good page. Bottom 13% empty. Copy says "Fifteen pages" but the file has 17. | Say "15 planner pages + 2 setup pages for your AI". |
| 3 Snapshot | 8 key numbers set as tiny forms; the most important page has no hierarchy. 24% empty bottom. "Fill date" field floats under a box, unaligned. | Make the 6 money figures large stat tiles (number at 18-24 pt). Add a "One thing I'll do this week" box to fill the bottom. Align "Fill date" right in the header strip. |
| 4 Spending plan | Three month columns have blank header boxes; on print they look like missing labels. 20% empty. | Print "Month 1 / Month 2 / Month 3" under the boxes. Add 3-4 rows or increase row height to fill. |
| 5 Subscriptions | Solid. 24% empty. Checkboxes ok. | Taller rows, or add a "Cancel script / where to cancel" notes strip. |
| 6 Fees and interest | 39% empty bottom: the emptiest content page. | Increase rows to fill, or add a short "how to ask for a fee refund" box. |
| 7 Action plan | 36% empty. Row numbers in green 6.5 pt are hard to see. | 12 rows at 9 mm fills the page. Numbers at 9 pt. |
| 8 Debt list | 26% empty. "Balances as of" sentence has stray quote marks around the label. | Remove quotes. Add a simple "Payoff order" arrow diagram or a celebration line "Debt-free on ____" at large size. |
| 9 Payoff schedule | Fullest page (5% empty), but the 4 debt-name header boxes are blank fills, same issue as p4. | Label them "Debt 1-4". |
| 10 Thermometers | Best visual in the kit and the most "planner"-like. Order runs Paid off at top, 10% paid at bottom, so the scale reads backwards against "colour the tube up". Tube has no fill marks. | Put tick marks on the tube level with each row. Consider 8 smaller thermometers or adding a dollar milestone. 20% empty: enlarge cards. |
| 11 Net worth | 32% empty. | Add a 12-month net-worth line grid to the bottom: that is the visual buyers expect. |
| 12 Emergency + sinking funds | 35% empty. | Add a savings "coin/bar" coloring tracker for the emergency fund (e.g. 20 cells). |
| 13 12-week challenge | Plain table, 36% empty. Competitors sell this as a coloring grid. | Turn into 12 big tiles with amount + checkbox, or add a coloring jar/grid below. |
| 14 No-spend | Day grid is good. Day numbers and checkboxes are crammed into the top-left of each cell; box is too small to tick by pen. | Centre a larger checkbox or let the whole cell be the tick area; number in the corner. |
| 15 Checkup log | 39% empty. | 12 rows at 9 mm fills the page. Or add a mini spending sparkline grid. |
| 16-17 For the AI | Monospace code (pypdf snippet, field names) inside a premium planner. Kills the premium feel for every reader and costs paper for anyone who prints all. | Move to the very end behind a styled "Setup for your AI" divider and tell people not to print 16-17, or move it to a separate small PDF/text file. At minimum print-exclude via instructions on p2. |

## System-wide issues

1. **Empty page bottoms.** Measured empty space above the footer: p6 39%, p15 39%, p13 36%, p7 36%, p12 35%, p11 32%. Ten of the fifteen planner pages are at least 20% empty. Premium planners fill the page. Fix by raising row height (fixes issue 3 too) and adding one visual tracker per page.
2. **Label sizes.** Field labels and column headers are 6.5-6.8 pt Poppins, all caps, wide tracking, light grey; the footer is 6.5 pt. On a home inkjet they go faint. Minimum 7.5-8 pt for labels, 8.5 pt for table headers, darken label grey to about #555.
3. **Row/box height for handwriting.** Most fields are 15 pt tall (5.3 mm), some 10-11 pt (3.5-3.9 mm, e.g. p4 rows). Pens need 7-9 mm. Boxes-inside-rows also double the lines and look busy when printed. For print: drop the inner rounded boxes and use ruled lines at 8 mm; keep invisible form fields on top for typing.
4. **Print cost.** Cover is about 95% black coverage, and every inside page carries a full-bleed cream tint that home printers can't print to the edge (white border around cream) and that burns colour ink on all 17 pages. Ship two versions: "Print" (white background, light cover, header bars as outline or 20% tint instead of solid black) and "Digital" (current look). Solid black header bars on 16 pages are also heavy; a thin rule or green tint costs far less ink.
5. **US Letter vs A4.** Letter only. Buyers in the UK/EU/AU print on A4: Letter content is 6 mm wider than A4, so it either clips side margins or prints at about 97% with uneven white bands. Ship an A4 version (Chromium print can render both from the same HTML). Name the files "...-US-Letter.pdf" and "...-A4.pdf" and say so in the listing. Optional A5 for planner binders.
6. **Section identity.** The cover promises 4 sections (Snapshot, Cut costs, Debt plan, Grow savings) but inside pages are identical black bars. Add section number + colour chip to each header and a thin side tab; it signals "planner" instantly in listing photos.
7. **Fonts.** Field font is Helvetica (not embedded) with auto size, so typed values look unlike the rest of the page. Set field appearance font to Poppins or a matching sans at 9-10 pt.

## Priority fixes (in order)

1. A4 version + print-friendly white version (largest buyer and review risk).
2. Taller writing rows and remove empty bottoms (one change fixes both).
3. Labels to 8 pt and darker.
4. Light print cover; keep dark cover for screens.
5. Move AI pages 16-17 out of the printed planner.
6. Label blank header boxes (p4, p9), fix quotes (p8), page count copy (p2), thermometer ticks (p10), bigger no-spend checkboxes (p14).
7. Add section colour coding and one visual tracker on p11, p12, p13.
