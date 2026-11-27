# Money X-Ray Action Kit: phone-typing review (cold read)

File: Money_XRay_Action_Kit.pdf, 17 pages, US Letter (612 x 792 pt), 841 form widgets
(747 text fields, 94 checkboxes). Renders at 390 px wide are in `r/p-NN.png`, and 3x-density
renders of pp. 5 and 9 are in `r/hi-NN.png`.

## Method
- Measured every widget rect with PyMuPDF, plus each field's font (DA) and the page text sizes.
- On a 390 pt-wide phone, fit-to-width scale is 390/612 = **0.637**, so 1 PDF pt shows as 0.64 pt/px.
- I compared field sizes against the common touch-target guidance: Apple 44 x 44 pt, Material 48 dp,
  WCAG 2.5.8 minimum 24 px.

## Measurements

| Page | Fields | Typical field h x w (pt) | On a 390 phone (px) | Notes |
|---|---|---|---|---|
| 3 Snapshot | 14 text | 13 x 255; two multiline boxes 94 / 43 tall | 8 x 162 | the only roomy page |
| 4 Spending plan | 107 text | 15 x 68 (min 11 tall) | 9.6 x 43 | dense grid |
| 5 Subscriptions | 99 text + 16 cb | 15 x 60 | 9.6 x 38; cb 6.4 | 7 columns |
| 6 Fees | 38 text | 15 x 150 | 9.6 x 95 | |
| 7 Action plan | 39 text + 12 cb | 15 x 71 | 9.6 x 45 | |
| 8 Debt list | 58 text | 15 x 76 (min 39 wide) | 9.6 x 48 | |
| 9 Payoff schedule | 148 text + 24 cb | 15 x 76 | 9.6 x 48 | densest: 24 rows x 6 cols |
| 10 Thermometers | 48 text | **11** x 159 | **7.0** x 102 | 16 pt row pitch |
| 11 Net worth | 45 text | 15 x 151 | 9.6 x 96 | |
| 12 Emergency/sinking | 46 text | 15 x 87 | 9.6 x 55 | |
| 13 12-week challenge | 27 text + 12 cb | 15 x 150 | 9.6 x 95 | |
| 14 No-spend | 6 text + 30 cb | 13 tall; notes 72 tall | 8.3; cb 6.4 | mostly ticking |
| 15 Checkup log | 72 text | 15 x 68 | 9.6 x 43 | 12 rows x 6 cols |

- **Field height:** 11 to 15 pt (2 multiline boxes excepted). Row pitch is 22.5 pt, which leaves
  7.5 pt between boxes. At fit-width a box is **7 to 10 px tall**, about 1/5 of the 44 pt target
  and under half of the WCAG 24 px minimum.
  **Checkboxes** are 10 x 10 pt, which is **6.4 px** on screen.
- **Zoom needed:** for a 15 pt field to reach 44 px the scale must be 2.93, which is **4.6x the
  fit-width zoom**. The screen then shows only 133 pt of the 612 pt page, about 22% of its width.
  A checkbox needs 6.9x. Filling in a 6-column table means panning sideways for every row.
- **Field font:** 743 of 747 text fields are Helvetica with **auto size (0)**; four multiline boxes
  are fixed at 8 pt. Auto size tops out around 10 to 11 pt in a 15 pt box and shrinks for long
  entries. That is fine on paper, but it shows as about 6 to 7 px at fit-width, so you cannot read
  what you just typed without zooming. iOS also zooms in on any input under 16 px.
- **Labels and instructions:** column headers and instructions are 6.5 to 8.4 pt, which is
  **4 to 5.4 px at fit-width**. They cannot be read without zooming. Only the 17 pt page titles
  are readable.
- **Viewer support:** this is untested here. On a phone, AcroForm typing works in iOS Files and
  Preview, Adobe Acrobat and some Android viewers. Many in-browser and in-app viewers (Gmail,
  Drive preview, Android Chrome) show the fields but won't let you type, or won't save.

## Verdict: is typing on a phone realistic?
**No for the table pages, and borderline for the rest.** Page 2 says the AI is meant to fill the kit,
and that is the right primary path. A phone user should only be expected to *read* the kit and *tick*
things, and even ticking a 6 px checkbox is a mis-tap hazard.

- **Workable with zoom:** p3 (Snapshot: few, wide fields and big text areas), p14 (No-spend: start
  date plus daily ticks), p13 (12-week challenge: two columns of 150 pt fields and ticks), and p11
  (Net worth: 2 wide columns).
- **Painful:** p6, p7, p8, p12 (3 to 5 columns).
- **Not realistic:** p4, p5, p9, p15 (6 to 7 narrow columns, 70 to 150 fields each) and p10
  (11 pt fields at 16 pt pitch, the smallest targets in the file).

## What would make it phone-friendly (most value first)
1. **Ship a companion phone version** (a portrait page about 390 pt wide, or a separate
   `Action_Kit_Phone.pdf`) with the same field names, so the AI fill and the checkup re-upload
   still work. Lay out one record per "card" with stacked label-above-field rows, fields at least
   **44 pt tall**, checkboxes at least **24 pt** (ideally 44), and body text at least 11 pt.
2. **Use fewer boxes on the pages people touch.** p9's 148-cell schedule and p10's thermometer
   marks are AI output: make them read-only (flatten them, or set fields ReadOnly) so the phone
   user only sees **one tick per month**. On p5, keep a tick plus "cancelled on" per row and let
   the AI own the amounts.
3. **Set a fixed field font size** (10 to 12 pt) instead of auto, so text doesn't shrink into
   illegibility.
4. **Make tick targets larger than the drawn box:** pad each checkbox's widget rect to about
   22 pt while keeping the 10 pt visual, and do the same for text fields with row padding,
   which the 22.5 pt pitch already allows.
5. **Put a line on p2** saying that on a phone you should open the kit in Acrobat, iOS Files or
   Preview, or let the AI fill it and then just read and tick, and that the tables are easiest
   on a computer or on paper.
6. A **web or HTML checklist** would serve better than any PDF for the recurring parts: the
   action plan ticks, the no-spend days and the monthly checkup log.
