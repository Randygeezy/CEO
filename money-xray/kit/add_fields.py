"""Adds a fillable form field on every box of kit_<edition>_layout.pdf (positions from fields_<edition>.json)
and writes the finished edition. Usage: python3 add_fields.py letter|a4|print|phone"""
import json, os, sys, pymupdf
here = os.path.dirname(os.path.abspath(__file__))
ed = sys.argv[1]
names = {"letter": "3 - Money X-Ray Action Kit (US Letter).pdf", "a4": "3 - Money X-Ray Action Kit (A4).pdf",
         "print": "3 - Money X-Ray Action Kit (Print).pdf", "phone": "3 - Money X-Ray Action Kit (Phone).pdf"}
if ed == "phone":
    doc = pymupdf.open()
    for part in json.load(open(os.path.join(here, ".phone_parts.json"))):
        src = pymupdf.open(part); doc.insert_pdf(src, from_page=0, to_page=0); src.close(); os.remove(part)
    os.remove(os.path.join(here, ".phone_parts.json"))
else:
    doc = pymupdf.open(os.path.join(here, f"kit_{ed}_layout.pdf"))
size = 12 if ed == "phone" else 9
for f in json.load(open(os.path.join(here, f"fields_{ed}.json"))):
    w = pymupdf.Widget()
    w.field_name = f["name"]
    w.rect = pymupdf.Rect(f["x0"] + 1, f["y0"] + 1, f["x1"] - 1, f["y1"] - 1)
    if f["check"]:
        w.field_type = pymupdf.PDF_WIDGET_TYPE_CHECKBOX
    else:
        w.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
        w.text_font = "Helv"
        h = f["y1"] - f["y0"]
        w.text_fontsize = size if f["multi"] or h >= size * 1.6 else 0   # fixed size; shrink only in tiny boxes
        if f["multi"]:
            w.field_flags = pymupdf.PDF_TX_FIELD_IS_MULTILINE
        w.text_color = (0.09, 0.08, 0.08)
    w.border_width = 0
    w.fill_color = None
    doc[f["page"]].add_widget(w)
cat = doc.pdf_catalog(); af = doc.xref_get_key(cat, "AcroForm")
font = "<</Font<</Helv<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>>>>>"
if af[0] == "xref":
    afx = int(af[1].split()[0]); doc.xref_set_key(afx, "DR", font); doc.xref_set_key(afx, "DA", f"(/Helv {size} Tf 0 g)")
else:
    doc.xref_set_key(cat, "AcroForm/DR", font); doc.xref_set_key(cat, "AcroForm/DA", f"(/Helv {size} Tf 0 g)")
for pg in doc:   # plain tab order by position (no structure tags in this file)
    doc.xref_set_key(pg.xref, "Tabs", "/R")
doc.set_metadata({"title": "Money X-Ray Action Kit", "author": "Money X-Ray", "subject": "Fillable money trackers that an AI fills from a Money X-Ray audit"})
doc.save(os.path.join(here, names[ed]), garbage=3, deflate=True)
print("saved", names[ed], len(doc), "pages")
