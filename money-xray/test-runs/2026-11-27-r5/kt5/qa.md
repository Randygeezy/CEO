# Money_XRay_Action_Kit.pdf: technical QA

Tested 2026-11-27. Tools: pypdf 6.17.0, PyPDF2 3.0.1, PyMuPDF 1.28.6, pdf-lib 1.17.1 (node 22), poppler pdftoppm/pdffonts, MuPDF renderer.
Scripts: `scripts/` (inv.py, raw.py, vals.py, fill.py, fill_pdflib.mjs, apm.py). Filled outputs: `filled_*.pdf`. Screenshots: `shots/`.

## Verdict per library

| Library | Fill | Values read back | Text inside box | Multiline wraps | Checkbox | Verdict |
|---|---|---|---|---|---|---|
| pypdf 6.17 (the kit's own recipe, NeedAppearances on) | 841/841 | 841/841 | yes | **only if the viewer regenerates** (pypdf's own appearance is one clipped line) | ticks (AS=/Yes, V=/Yes) | **PASS, with a multiline caveat** |
| PyMuPDF 1.28 | 841/841 | 841/841 | yes | yes | ticks, but parent /V written as a string `(Yes)` | **PASS, one spec bug** |
| pdf-lib 1.17 | 841/841 | 841/841 | yes | yes | ticks | **PASS for WinAnsi text. Throws on chars like ≈ → ✓.** flatten() leaves 841 dangling refs |
| PyPDF2 3.0.1 | **0/841** | form lost | n/a | n/a | n/a | **FAIL** |

## 1. Field inventory

- **841 fields**: 747 text and 94 checkboxes, on pages 3–15. There are no fields on pages 1, 2, 16 or 17.
- Per page: p3 14, p4 107, p5 115, p6 38, p7 51, p8 58, p9 172, p10 48, p11 45, p12 46, p13 39, p14 36, p15 72.
- **No duplicate names. No odd names**: all names match `[a-z0-9_]+`. The names match the field list on p17 (`thN_*`, `nw_aN_*`, `ch_wN_*`, `sf_N_*`, `ns_dN`).
- **Every widget sits on a drawn box.** The widgets have no border of their own (`/BS /W 0`, no `/MK`), so each box is drawn in the page content. I matched all 841 widget rects to drawn rectangles: median edge offset 2.2pt, maximum 3.4pt. None is invisible.
- Text field heights are 15pt (637 fields), 13pt (58) and 11pt (47). The 5 multiline fields are 43–94pt tall.
- Font setup: `DA /Helv 0 Tf` (auto size) on 742 text fields. The 5 multiline fields (`snap_answer`, `snap_missing`, `debt_warning`, `ns_rules`, `ns_instead`) use a fixed 8pt. No `/Q`, so amounts are left-aligned. No `/MaxLen` and no `/TU` tooltips.
- The structure was written by PyMuPDF: `NM fitz-W*`, and each field is a parent dict with one kid widget, so it is not merged. `NeedAppearances false`. Every widget already has an appearance stream, empty for text and Off/Yes for checkboxes.

## 2–3. Fill and render results

Test values: `$12,345.67` for money, `Nov 2026` / `Nov 3, 2026` for dates, `22.99%` for APR, a 24-character text (`Capital One Venture card`), `Check` for decisions, a 40-word `snap_answer`, a 19-word value for the 25-word fields, and every checkbox ticked.

**What I checked on each output:**
- Each appearance stream: font size, whether the text width fits the rect width, and whether a filled field has text in its appearance.
- Renders with poppler at 110–220 dpi.
- Renders with MuPDF, as a second renderer.
- Read-back of every value with both pypdf and PyMuPDF.

**Results common to pypdf, PyMuPDF and pdf-lib:**
- No overflow on any single-line field.
- No filled field with an empty appearance.
- Font sizes chosen by the libraries are mostly 9–11pt. The smallest are 6pt on `plan_dN_name` (the p9 column headers) and 7pt on `debt_N_payoff`. Both are readable (`shots/07_plan_header_6pt-09.png`).

### Problems found

**P1 – pypdf does not wrap multiline fields in its own appearance (medium).**
- pypdf writes `snap_answer` as one line that is clipped at the right edge. Half of the 40-word paragraph is missing (`shots/01_snap_answer_wrap_by_library.png`, panel 2).
- The kit's recipe sets NeedAppearances, so Acrobat, Chrome and poppler regenerate the appearance and wrap it (panel 1). The clipped version still appears wherever the viewer does not regenerate: thumbnails, Gmail/Drive quick-look previews, and MuPDF-based apps.
- PyMuPDF and pdf-lib wrap correctly (panels 3 and 4).
- *Fix:* in the p16 instructions, add "if PyMuPDF (`import fitz`/`pymupdf`) is available, fill with `widget.field_value = v; widget.update()`; otherwise use pypdf with NeedAppearances." Alternatively, keep pypdf and tell the AI to fill the 5 long fields with PyMuPDF.

**P2 – Checkbox "on" appearance relies on the ZapfDingbats font (medium).**
- The `/Yes` appearance draws glyph `(3)` in `/ZaDb`, and the font is not embedded. Poppler on a system without a Dingbats font (most Linux AI sandboxes, including this one) renders a literal **"3"**. It renders a solid black bar when it regenerates under NeedAppearances (`shots/02_checkbox_poppler_no_dingbats.png`: pypdf, PyMuPDF, pdf-lib, pdf-lib flat).
- It also logs `Unknown font tag 'ZaDb'` 94 times, because AcroForm `/DR` only defines `/Helv`.
- MuPDF draws a correct check for every library (`shots/03_checkbox_mupdf_ok.png`). Acrobat and Apple devices have the font built in.
- The risk is an AI that renders its output to verify it, sees "3", and "fixes" it.
- *Fix:* redraw the `/Yes` appearance as a vector check (an `m/l/S` path, no font). Also add `/ZaDb` to `/AcroForm /DR` and `/MK << /CA (4) >>` so viewers that regenerate the appearance produce a proper check.

**P3 – PyPDF2 cannot fill this form (high if an AI only has PyPDF2).**
- `PdfWriter(clone_from=…)`, the kit's recipe, raises `TypeError` in PyPDF2 3.0.1.
- `clone_document_from_reader` and `append` write a PDF with **no /AcroForm**, and the widgets lose `/Parent`. MuPDF then sees 841 untyped "Button" widgets with no values.
- Copying the AcroForm by hand produces a corrupt xref.
- *Fix:* change the p16 recipe to say "use **pypdf** (`pip install pypdf`), not PyPDF2". Optionally, rebuild the form with merged field/widget dicts (one dict per field, since each field has exactly one widget). Older libraries handle that structure more reliably.

**P4 – PyMuPDF writes checkbox `/V` as a string on the parent field (low–medium).**
- After `field_value = on_state(); update()`, the parent field gets `/V (Yes)` (a string) while the widget gets `/V /Yes` and `/AS /Yes`.
- The display is right. A spec-strict reader sees a value that is not a valid state: pypdf reads `'Yes'` instead of `'/Yes'`. Acrobat can show such a box as unticked after a reset or re-save.
- A merged field/widget dict (see P3) removes the problem.

**P5 – Characters outside WinAnsi (medium for AI fills).**
- Field font is non-embedded Helvetica with WinAnsi encoding. Curly quotes, em dash, € and accented letters work.
- `≈ → ✓` (characters an AI might write) behave differently per library:
  - **pdf-lib throws** (`WinAnsi cannot encode "≈"`), which aborts the fill.
  - **pypdf** warns and writes `?` in its appearance. Poppler's regenerated view silently drops the characters.
  - **PyMuPDF** renders them through font fallback.
- See `shots/04_unicode_pypdf_vs_pymupdf.png`.
- *Fix:* add a line to the p16 FORMAT rules: "plain text only: no arrows, ≈, ✓ or emoji".

**P6 – Auto-size (font size 0) makes regenerated text fill the box edge to edge (low).**
- When poppler regenerates (pypdf + NeedAppearances), values in 15pt boxes render at about 13pt and touch the borders (`shots/05_autosize_poppler_regen_vs_pymupdf.png`, top). PyMuPDF's 11pt is cleaner (bottom).
- Phone apps that regenerate (iOS, Android) behave the same way.
- *Fix:* set a fixed DA size, `/Helv 9 Tf` for 15pt rows and 8pt for the 11–13pt rows, instead of 0. Optionally add `/Q 2` (right-align) to money columns.

**P7 – pdf-lib `form.flatten()` leaves 841 dangling annotation references (low; flattening is optional).**
- Text survives the flatten. Poppler logs 841 xref errors and MuPDF logs 1,682 "cannot find object" errors.
- *Fix (if flattening is ever recommended):* remove the pages' `/Annots` after flattening, or flatten with PyMuPDF (`doc.bake()`).

**P8 – pypdf logs "No fields to update on this page" for pages 1, 2, 16 and 17 (cosmetic).** It is harmless, but an AI may report it as an error. *Fix:* the recipe can skip pages with no `/Annots`.

## 4. Tab order and wrapping

- Every page has `/Tabs /S` (structure order), but the PDF is **untagged**: no StructTreeRoot and no MarkInfo. Structure order is therefore undefined, and viewers fall back to their own heuristic.
- The `/Annots` arrays are already in a sensible logical order:
  - Row by row on the table pages (p3–p9, p12–p15): 0 mismatches against row order.
  - Column by column on the two-column pages p10 (thermometers) and p11 (assets and liabilities). That is the correct order there. A row-order fallback would jump between the columns: 44/48 and 36/45 fields would be out of order.
- *Fix:* drop `/Tabs` or set `/Tabs /A` (array order) so viewers follow the array. Alternatively, tag the PDF.
- Wrapping: all 5 tall fields have the multiline flag (Ff 4096) and wrap in PyMuPDF and pdf-lib, and in pypdf when the viewer regenerates (see P1). The 40-word answer takes 2 lines at 8pt in a 94pt-tall box, so there is plenty of room. The tall `ns_rules` box (72pt) at 8pt holds about 8 lines.

## 5. Print check

- **Grayscale** (`shots/06_print_grayscale_p5.png`): headers are white on black, field text is near-black, and the box outlines are light but visible. Nothing depends on color. The green step numbers (#1f7a5a) become mid-gray at 4.6:1 contrast, which is fine.
- **Smallest printed labels:**
  - Field captions are 6.8pt Poppins in #5a544d on the #f2efe8 page (6.5:1).
  - Table headers are 6.6pt SemiBold white on black.
  - The footer is 6.5pt #8a8279 at **3.3:1**, below the 4.5:1 guideline, but it only holds "MONEY X-RAY / page / ACTION KIT".
  - The p16–17 AI text is 7pt monospace.
  - All are legible on a laser print. The 6.5–6.8pt letter-spaced captions are the weak point. *Fix:* use at least 7.5pt for captions and darken the footer to #5a544d.
- **Ink use:** the cover (p1) is full-bleed black, about 89% coverage, and every other page carries a full-bleed #f2efe8 tint (about 6% gray plus content, 8–14% in total). Home printers will leave a white unprinted margin around the tint. *Fix:* add a "print-friendly" variant with a white background and no cover, or note in the instructions "print pages 3–15".
- Writing by hand: the 15pt rows are about 5.3mm tall, which is tight but workable. The 11pt rows (47 fields) are cramped for pen.

## 6. File size and fonts

- **819 KB**, 17 pages, letter size, not encrypted, no JavaScript. Filled outputs are 0.9–1.1 MB. Fine for email and phone uploads.
- The page fonts (PlayfairDisplay Black/Bold, MrsSaintDelafield, Poppins Regular/SemiBold, DejaVuSansMono) are **all embedded as subsets**.
- **Helvetica** (the field font `/Helv`) and **ZapfDingbats** (checkbox appearance) are **not embedded**. That is normal for form fields, since viewers carry the standard 14 fonts, but it is the root cause of P2 and P5. Embedding a full TTF as the field font would fix P5 but adds about 300 KB+ and breaks pypdf's appearance generation for non-Latin glyphs anyway. Keep Helvetica and restrict the input character set instead.

## Recommended fix list (in priority order)

1. p16 recipe: say "pypdf, not PyPDF2". Prefer PyMuPDF when it is present, or at least for the 5 multiline fields (P1, P3).
2. Replace the checkbox `/Yes` appearance with a vector check. Add `/ZaDb` to `/DR` and `/MK /CA` (P2).
3. Merge each field's parent and kid into one dict (P3, P4).
4. Set fixed DA sizes (9pt / 8pt) instead of 0. Right-align money columns (P6).
5. FORMAT rule: plain characters only (P5).
6. Remove `/Tabs /S` or change it to `/A` (tab order).
7. Print: captions at 7.5pt or larger, darker footer, an optional white-background print variant.
8. Add `/TU` tooltips (the visible label) to each field. That helps screen readers, phone apps that show field names, and AIs that inspect fields.

Not tested directly: real phone apps (iOS Files/Preview, Android, Adobe mobile). The findings above (auto-size, Dingbats, NeedAppearances, tab order) are the parts that differ between those apps.
