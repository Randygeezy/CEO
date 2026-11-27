# Money X-Ray: The Complete Guide — design and accessibility review

Cold read of `Money_XRay_Complete_Guide.pdf` (45 pages, A4, Chromium/Skia output). I rendered the pages with pdftoppm at 50 and 150 dpi and checked them as images. I also checked the file with pdfinfo, pdffonts, pdfimages and PyMuPDF (font sizes and colours per span) and pypdf (outline and annotations). Contrast ratios are WCAG 2.x, measured against the page background #F3EFE9.

Page numbers are PDF page numbers. Printed folios match them, because the cover counts as page 1.

## Verdict

The look is close to premium: a cream, black and tan palette, Playfair Display with Poppins, consistent chapter bars and clean tables. Navigation and accessibility are well below what buyers expect from a paid PDF. The PDF has no bookmarks, the contents page has no links, nothing is tagged, and the small type is too small and too grey. On a phone at full-page zoom, almost nothing can be read.

## Ranked fixes

### 1. Add PDF bookmarks and a clickable contents page (all pages; contents on p2)
- `pypdf` finds 0 outline entries and 0 link annotations on all 45 pages. Readers cannot jump to a chapter, and none of the contents rows on p2 can be tapped.
- Fix: give each chapter a real heading (`h1`/`h2`) with an `id`, and make each contents row an `<a href="#id">`. Chrome turns these into internal links. For bookmarks, either print with Chrome's `--generate-document-outline` (headless `printToPDF` with `generateDocumentOutline: true`) or add the outline afterwards with pypdf or qpdf: 4 Parts, 21 chapters, the checklist and the appendix.
- Set `/PageMode /UseOutlines` so the bookmark panel opens on launch.

### 2. Tagged PDF and screen-reader support (whole document)
- pdfinfo reports `Tagged: no` and no `/Lang`. Screen readers get one untagged stream: tables lose their structure, the decorative "1"/"2"/"3"/"4" on the Part pages is read out as text, and the screenshots have no alt text.
- Letter-spaced caps come out in the text layer as single letters ("S TA R T H E R E", "Y O U R P R I VA C Y" on p2; running footers). Screen readers spell these out, and search for "privacy" fails.
- Fix: print with Chrome's tagged-PDF option (`generateTaggedPDF: true` in headless printToPDF, or `--export-tagged-pdf`). Set `<html lang="en">`, give every screenshot real `alt` text, and mark decorative numerals and arches `aria-hidden`. Set tracking with `letter-spacing` on real text; never insert spaces between letters. Check the result in Acrobat's accessibility checker or PAC.
- The checklist on p39 uses an `Inter-Regular` **Type 3** font, probably the checkbox glyphs. Type 3 fonts render blurry in some viewers and break text extraction. Use an SVG/CSS box or the embedded Poppins.

### 3. Minimum type size: raise everything below 8 pt (most pages)
Measured span sizes: body text 9–10 pt; then 7.8, 7.6, 6.8, 6.6 and 6.5 pt.
- **6.5 pt** running footers ("MONEY X-RAY" / "THE COMPLETE GUIDE") on every page, and the cover strapline "FOR EVERYDAY PEOPLE · NO FINANCE BACKGROUND NEEDED" (p1).
- **6.6–6.8 pt** semibold table headers on p4, 6–10, 14–18, 23, 25, 27–29, 31–38, Part bands and callout labels on p2 and p22–23, and the worksheet column heads on p36–37.
- **7.6 pt** monospace across the whole appendix (p40–45). It holds about 45% of the document's text.
- **7.8 pt** screenshot captions (#555) on p8–9, 12–14, 16, 19, 21, 25 and 28.
- Fix: no running text below 8.5 pt, and table headers and labels at 8 pt or more. Body at 10.5–11 pt would help phone readers (see #5). Set the appendix at 9 pt or larger, or drop it from the guide and point to `Money_XRay_Prompt.txt`, which readers copy from anyway (p40 says so).

### 4. Contrast of grey and tinted text
| Where | Colour / background | Size | Ratio | Result |
|---|---|---|---|---|
| Footers, all pages | #8A8279 on #F3EFE9 | 6.5 pt | **3.3:1** | Fails AA (4.5) |
| Contents Part bands, p2; small tan labels p22–23 | #8B735F on #161514 / cream | 6.8 pt bold | **4.1 / 3.9:1** | Fails AA |
| Callout eyebrow labels on tan boxes, p6, p16, p24, p27 ("WHY IT MATTERS", "THE EASY ANSWER", "AVALANCHE"…) | #5B4E42 on ~#CDBFAE | 6.8 pt | **~4.4:1** | Just fails |
| Cover strapline, p1 | #8C857C on black | 6.5 pt tracked | 5.0:1 | Passes the ratio, but too small and too light to read |
| Captions | #555 on cream | 7.8 pt | 6.5:1 | OK, but small |
| Part-page subtitles, p5/11/20/30 | light grey on #0E0E0C | 10 pt | OK | — |
- Fix: darken footers to #6B645C or darker (about 5:1) and raise them to 7.5–8 pt. On black, use the light tan #CFC8BF (11:1) instead of #8B735F. Darken the callout eyebrows to #3F362E.
- The ghost numerals ("1"–"4" on the Part pages) are decorative, so low contrast is fine there. Hide them from assistive tech (see #2).

### 5. Readability on a 6-inch phone at full-page zoom
- A 6-inch phone shows an A4 page about 2.6 in wide, which is 0.31× real size. Body text at 9–10 pt shows at roughly **3 pt** physical size, table headers at about 2 pt and the appendix at about 2.4 pt. A reader has to pinch-zoom about 3× on every page and pan sideways. An untagged PDF can't reflow, so no reading mode helps.
- Many buyers of a "use the AI app on your phone" product will open the guide on that same phone.
- Fix, in order of value: (a) also ship a **phone edition** with a ~105×186 mm page (or a 9:16 page), single column, 11–12 pt body, one screenshot per page at full width; (b) failing that, tag the PDF (#2) so Acrobat and iOS readers can reflow it; (c) at minimum, raise the A4 body to 11 pt and cut 3-column table text.

### 6. Screenshots: too small, cropped awkwardly, partly blocked
- The phone screenshots are placed at about 170–200 pt wide (pdfimages: 1290 px sources, so resolution is fine). The UI text inside them prints at about 3.5–4 pt on A4 and about 1 pt on a phone. Examples: the menu sheets on p8 and p9; the chat replies on p12 and p13; the reconciliation table and chart on p14; the question form on p16; the save block on p19; the subscription calculator on p21; the payoff milestones on p25; the budget on p28.
- p12 (step 2) and p13: the ChatGPT composer bar and the scroll-down arrow sit over the reply text, so the bottom lines can't be read. p14: the left screenshot starts mid-line ("…educe interest expenses.") with the header clipped, and "merchants" is covered by the arrow.
- p8: three near-identical blurred bank screenshots take a third of the page and tell the reader little.
- Fix: crop each screenshot to the region the caption talks about, place it at least 60% of the column width (about 280 pt), and add a numbered callout or highlight ring on the key element. Retake the shots on p12–14 with the scroll arrow and composer out of the way, or crop them out. Consider replacing p8's three blurred shots with one annotated shot.

### 7. Black full-bleed pages and heavy black areas, a printing problem
- Four solid-black Part dividers (p5, p11, p20, p30), plus a black band over the bottom 30% of the cover (p1) and a full-height black sidebar on the contents (p2). Together that is more than 5 full pages of solid ink. That wastes toner, the dark pages often streak or curl on home inkjets, and Chrome's page edge can leave a thin white margin on some printers.
- The guide tells readers to print it (p6 "If you like paper, print this guide"; worksheets p36–38). So:
- Fix: ship a **print edition** (or `@media print` variant) with cream Part pages and black type, and with the contents sidebar and cover band as outlines or a 10% tint. Or keep the dark dividers and tell readers on p6 to skip pages 5, 11, 20 and 30 when printing (weaker).

### 8. Type and spacing consistency
- Chapter numbers are "01"–"21" in green in the chapter bars, but "1"–"21" in tan on the contents (p2). Pick one style.
- The contents is set in tracked Playfair caps (p2), unlike the chapter bars (Playfair Black) and body (Poppins). It reads as a third style.
- Script font (Mrs Saint Delafield) appears only on p2 ("The Contents") and p3 ("A note from Randy", signature). It suits the signature but feels out of place for "The Contents". "The Contents" is also odd wording; use "Contents".
- Chapters 16 and 17 share p31, while every other chapter opens on its own page or follows straight after the previous one. The contents shows both as page 31. That's fine, but the shared bar on p31 looks crowded next to the large empty bottoms on p10, p13, p19, p26 and p39.
- Unbalanced white space: p13 (bottom 45% empty), p19, p26 (half empty), p37 (last 40%), p39. Pull content up or add the worksheet/notes area there.
- Green (#217D5B) appears only on the cover arch, the chapter numerals and the green "Tested without code"/"Use the worksheet" boxes. Either use it as a consistent accent (key numbers, links, callouts) or drop it, because now it reads as a stray colour.
- Appendix p40–45: the quote rule breaks at random paragraph boundaries (e.g. p41 mid-list at "- Reimbursement"), and the indentation shifts. Render the prompt as one `<pre>` block with consistent wrapping, or remove it (see #3).

### 9. Cover vs. a premium digital product (p1)
- Strong: confident Playfair masthead, restrained palette, clear four-part roadmap.
- Weak: (a) the green arch with a generic receipt/magnifier line icon looks like clip-art and is the only image; (b) the right half below the arch is empty; (c) there's no product proof, such as a mock-up of a report page or a "$0.00 Check" badge, which bestselling digital guides use to signal value; (d) the strapline at the bottom is nearly invisible (#4); (e) the edge-to-edge black band makes thumbnails look bottom-heavy at small sizes (marketplace listing thumbnails are about 300 px).
- Fix: put a tilted phone or report-page mock-up in the empty space (e.g. the sample report from p33 with a highlighted $0.00 Check), make the icon bigger or replace it, and move the strapline up into readable size.

### 10. Document metadata (minor)
- Title is set correctly ("Money X-Ray: The Complete Guide"), and `DisplayDocTitle` is true, so viewers show the title instead of the file name. Good.
- Missing: Author, Subject, Keywords, `/Lang`, XMP metadata stream (`Metadata Stream: no`). Add `<meta name="author">`, `description` and `keywords` in the HTML, or set them afterwards with pypdf or exiftool. Set the language to `en-US`.
- 7.4 MB for 45 pages: mostly 18 full-resolution 1290×2796 screenshots. Downscaling them to about 900 px wide (still more than 300 ppi at the placed size) would cut the file roughly in half. That matters for email and phone downloads.

## Quick wins (under an hour)
1. Bookmarks and contents links (#1).
2. Footer and label colours plus 8 pt minimum (#3, #4).
3. Tagged PDF flag, `lang`, alt text (#2).
4. Author/subject metadata (#10).
