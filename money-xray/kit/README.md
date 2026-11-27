# Money X-Ray Action Kit

A 17-page fillable US Letter PDF, `3 - Money X-Ray Action Kit.pdf`, that that turns the audit into trackers: snapshot, spending plan,
subscriptions, fees, action plan, debt list and schedule, payoff thermometers, net worth, emergency
and sinking funds, 12-week savings challenge, no-spend challenge, monthly checkup log.

The customer uploads it in the audit chat and types "fill my kit" (menu option 7). The last two pages,
"For the AI", tell the AI which value goes in which field; with a code tool it fills the form and
returns the PDF, without one it lists the values page by page.

Build: `python3 make_kit_html.py && node render_kit.cjs letter && python3 add_fields.py letter` (the generator can also build a4, print and phone editions with the same fields)
(needs Playwright and PyMuPDF). Output: `3 - Money X-Ray Action Kit.pdf`.
Field names live in make_kit_html.py; keep the "For the AI" page in sync when adding fields.
