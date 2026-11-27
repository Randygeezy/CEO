"""Adds a fillable form field on every box in kit_layout.pdf (positions from fields.json)
and writes Money_XRay_Action_Kit.pdf."""
import json, os, pymupdf
here = os.path.dirname(os.path.abspath(__file__))
doc = pymupdf.open(os.path.join(here, "kit_layout.pdf"))
for f in json.load(open(os.path.join(here, "fields.json"))):
    w = pymupdf.Widget()
    w.field_name = f["name"]
    w.rect = pymupdf.Rect(f["x0"] + 1, f["y0"] + 1, f["x1"] - 1, f["y1"] - 1)
    if f["check"]:
        w.field_type = pymupdf.PDF_WIDGET_TYPE_CHECKBOX
    else:
        w.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
        w.text_font = "Helv"
        w.text_fontsize = 0 if not f["multi"] else 8   # 0 = shrink to fit
        if f["multi"]:
            w.field_flags = pymupdf.PDF_TX_FIELD_IS_MULTILINE
        w.text_color = (0.09, 0.08, 0.08)
    w.border_width = 0
    w.fill_color = None
    doc[f["page"]].add_widget(w)
# font resources for the fields, so any PDF library can draw filled text in Helvetica
cat = doc.pdf_catalog(); af = doc.xref_get_key(cat, "AcroForm")
if af[0] == "xref":
    afx = int(af[1].split()[0])
    doc.xref_set_key(afx, "DR", "<</Font<</Helv<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>>>>>")
    doc.xref_set_key(afx, "DA", "(/Helv 0 Tf 0 g)")
else:
    doc.xref_set_key(cat, "AcroForm/DR", "<</Font<</Helv<</Type/Font/Subtype/Type1/BaseFont/Helvetica/Encoding/WinAnsiEncoding>>>>>>")
doc.set_metadata({"title": "Money X-Ray Action Kit", "author": "Money X-Ray"})
doc.save(os.path.join(here, "Money_XRay_Action_Kit.pdf"), garbage=3, deflate=True)
print("saved", len(doc), "pages")
