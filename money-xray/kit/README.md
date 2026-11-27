# Money X-Ray Action Kit

A 17-page fillable PDF in four editions with identical field names: US Letter (`Money_XRay_Action_Kit.pdf`), A4, low-ink Print, and Phone (one column, big boxes) that turns the audit into trackers: snapshot, spending plan,
subscriptions, fees, action plan, debt list and schedule, payoff thermometers, net worth, emergency
and sinking funds, 12-week savings challenge, no-spend challenge, monthly checkup log.

The customer uploads it in the audit chat and types "fill my kit" (menu option 7). The last two pages,
"For the AI", tells the AI which value goes in which field; with a code tool it fills the form and
returns the PDF, without one it lists the values page by page.

Build: `python3 make_kit_html.py && for e in letter a4 print phone; do node render_kit.cjs $e && python3 add_fields.py $e; done`
(needs Playwright and PyMuPDF). Output: `Money_XRay_Action_Kit.pdf`.
Field names live in make_kit_html.py; keep the "For the AI" page in sync when adding fields.
