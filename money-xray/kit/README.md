# Money X-Ray Action Kit

A 16-page fillable PDF (US Letter) that turns the audit into trackers: snapshot, spending plan,
subscriptions, fees, action plan, debt list and schedule, payoff thermometers, net worth, emergency
and sinking funds, 12-week savings challenge, no-spend challenge, monthly checkup log.

The customer uploads it in the audit chat and types "fill my kit" (menu option 7). The last page,
"For the AI", tells the AI which value goes in which field; with a code tool it fills the form and
returns the PDF, without one it lists the values page by page.

Build: `python3 make_kit_html.py && node render_kit.cjs && python3 add_fields.py`
(needs Playwright and PyMuPDF). Output: `Money_XRay_Action_Kit.pdf`.
Field names live in make_kit_html.py; keep the "For the AI" page in sync when adding fields.
