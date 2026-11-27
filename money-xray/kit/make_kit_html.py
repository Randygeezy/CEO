"""Writes kit.html: the Money X-Ray Action Kit, one fixed US Letter page per <div class="pg">.
Every box a customer (or their AI) fills is <span class="f" data-f="field_name">; checkboxes are class "c".
render_kit.cjs turns the page into a PDF and records each box's position; add_fields.py puts a real
form field on every box. Field names follow the rules on the "For the AI" page (last page)."""
import html

PAGES = []
def page(title, sub, body, n=None):
    PAGES.append((title, sub, body))

def f(name, cls="", style=""):
    return f'<span class="f {cls}" data-f="{name}" style="{style}"></span>'

def c(name):
    return f'<span class="c" data-f="{name}"></span>'

def table(head, rows, widths):
    """head: list of labels; rows: list of lists of cell html; widths: list of css widths."""
    cols = "".join(f'<col style="width:{w}">' for w in widths)
    th = "".join(f"<th>{h}</th>" for h in head)
    tr = "".join("<tr>" + "".join(f"<td>{cell}</td>" for cell in r) + "</tr>" for r in rows)
    return f'<table class="t"><colgroup>{cols}</colgroup><tr>{th}</tr>{tr}</table>'

def kv(pairs, cols=2):
    cells = "".join(f'<div class="kv"><div class="k">{k}</div>{f(n)}</div>' for k, n in pairs)
    return f'<div class="kvs" style="grid-template-columns:repeat({cols},1fr)">{cells}</div>'

# ---------- pages ----------
how = """
<p class="lead">Fill this kit in seconds: let your AI do it, from the audit you just ran.</p>
<div class="steps">
  <div><i>1</i><span>Run your Money X-Ray audit and answer its questions.</span></div>
  <div><i>2</i><span>In the same chat, upload this PDF and type <b>fill my kit</b>.</span></div>
  <div><i>3</i><span>Download the filled kit it sends back. Print it or keep it on your phone.</span></div>
</div>
<h3>No code tool? (most free plans)</h3>
<p>The AI can't write into the PDF, so it lists the values for the five key pages (3, 7, 8, 11 and 15) instead. Tap a box in this PDF to type
(Adobe Acrobat Reader is free; most phones' Files or Books apps work too), or print the kit and write by hand.</p>
<h3>What's inside</h3>
<table class="t toc"><colgroup><col style="width:9%"><col style="width:40%"><col></colgroup>
<tr><th>Page</th><th>Page name</th><th>Filled from</th></tr>
<tr><td>3</td><td>Your money snapshot</td><td>Report sections 1 to 3</td></tr>
<tr><td>4</td><td>Spending plan</td><td>Section 4 and the Budget option</td></tr>
<tr><td>5</td><td>Subscriptions and bills</td><td>Section 6 and Cut costs</td></tr>
<tr><td>6</td><td>Fees and interest</td><td>Section 7</td></tr>
<tr><td>7</td><td>This month's action plan</td><td>Everything you chose to do</td></tr>
<tr><td>8</td><td>Debt list and plan</td><td>Section 8 and Debt-free date</td></tr>
<tr><td>9</td><td>Debt payoff schedule</td><td>Debt-free date (exact with a code tool)</td></tr>
<tr><td>10</td><td>Payoff thermometers</td><td>Your debt list</td></tr>
<tr><td>11</td><td>Net worth</td><td>Section 9 and Full net worth</td></tr>
<tr><td>12</td><td>Emergency fund and sinking funds</td><td>Your money left over and yearly charges</td></tr>
<tr><td>13</td><td>12-week savings challenge</td><td>The amount you freed up</td></tr>
<tr><td>14</td><td>30-day no-spend challenge</td><td>Your biggest flexible categories</td></tr>
<tr><td>15</td><td>Monthly checkup log</td><td>This audit, then each monthly checkup</td></tr>
</table>
<div class="note">Boxes the AI can't fill from your statements stay empty for you. Nothing here asks for account numbers or passwords, and nothing should.</div>
"""
page("How to use this kit", "Three steps", how)

snap = kv([("Months covered", "snap_period"), ("Accounts audited", "snap_accounts"),
           ("Take-home pay / month", "snap_income"), ("Spending / month", "snap_spending"),
           ("Moved to savings / month", "snap_savings"), ("Left over / month", "snap_leftover"),
           ("$0.00 Check", "snap_check"), ("Fees and interest (period)", "snap_fees")]) + \
    '<h3>The answer, in one paragraph</h3>' + f("snap_answer", "m", "height:34mm") + \
    '<h3>Top 3 things to fix</h3>' + "".join(f'<div class="row1"><span class="num">{i}</span>{f(f"snap_fix_{i}")}</div>' for i in range(1, 4)) + \
    '<h3>Accounts it couldn\'t see</h3>' + f("snap_missing", "m", "height:16mm") + \
    '<p class="small">Fill date ' + f("snap_date", "", "width:40mm;display:inline-block") + '</p>'
page("Your money snapshot", "From report sections 1 to 3", snap)

cats = [[f(f"cat_{i}_name"), f(f"cat_{i}_avg"), f(f"cat_{i}_target"), f(f"cat_{i}_m1"), f(f"cat_{i}_m2"), f(f"cat_{i}_m3")] for i in range(1, 17)]
cats.append(["<b>Total</b>", f("cat_total_avg"), f("cat_total_target"), f("cat_total_m1"), f("cat_total_m2"), f("cat_total_m3")])
spend = '<p class="small">Average and target from your report and the Budget option. The last three columns are for your actual spending in the next three months.</p>' + \
    table(["Category", "Average / mo", "Target / mo", f("cat_m1_label", "hd"), f("cat_m2_label", "hd"), f("cat_m3_label", "hd")], cats,
          ["28%", "14.4%", "14.4%", "14.4%", "14.4%", "14.4%"]) + \
    kv([("Take-home pay / month", "bud_income"), ("Targets + savings + extra to debt", "bud_planned"), ("Room left each month", "bud_room")], 3)
page("Spending plan", "Averages, targets and what really happened", spend)

subs = [[f(f"sub_{i}_name"), f(f"sub_{i}_monthly"), f(f"sub_{i}_yearly"), f(f"sub_{i}_flag"), f(f"sub_{i}_decision"), f(f"sub_{i}_cancelled"), c(f"sub_{i}_stopped")] for i in range(1, 17)]
subp = table(["Service", "Monthly", "Yearly", "Flag", "Keep / cut", "Cancelled on", "Stopped?"], subs,
             ["22%", "11%", "11%", "22%", "12%", "13%", "9%"]) + \
    kv([("Monthly total now", "sub_total_monthly"), ("Saved by cutting / month", "sub_saved_monthly"), ("Saved / year", "sub_saved_yearly")], 3) + \
    '<p class="small">Tick "Stopped?" when a statement shows no new charge after you cancelled. Next month\'s checkup flags anything that keeps charging.</p>'
page("Subscriptions and bills", "Keep, cut, and check it really stopped", subp)

fees = [[f(f"fee_{i}_item"), f(f"fee_{i}_amount"), f(f"fee_{i}_avoid")] for i in range(1, 13)]
feep = table(["Fee or interest", "Amount (period)", "How to avoid it next time"], fees, ["30%", "16%", "54%"]) + \
    kv([("Total for the period", "fee_total"), ("Per month, on average", "fee_monthly")], 2)
page("Fees and interest", "What it cost, and how to stop paying it", feep)

todo = [[f'<span class="num">{i}</span>', f(f"todo_{i}_task"), f(f"todo_{i}_saves"), f(f"todo_{i}_by"), c(f"todo_{i}_done")] for i in range(1, 13)]
todop = '<p class="small">Everything you decided to do, biggest saving first. Tick each one when it\'s done.</p>' + \
    table(["#", "Action", "Saves / month", "Do by", "Done"], todo, ["6%", "56%", "15%", "14%", "9%"]) + \
    kv([("Monthly savings goal", "todo_goal"), ("These actions save / month", "todo_total"), ("Short of / over the goal", "todo_gap")], 3)
page("This month's action plan", "From your choices in the chat", todop)

debts = [[f(f"debt_{i}_order"), f(f"debt_{i}_name"), f(f"debt_{i}_balance"), f(f"debt_{i}_apr"), f(f"debt_{i}_min"), f(f"debt_{i}_payoff")] for i in range(1, 9)]
debtp = table(["Order", "Debt", "Balance", "APR", "Minimum", "Paid off by"], debts, ["9%", "31%", "16%", "12%", "14%", "18%"]) + \
    kv([("Method", "debt_method"), ("Extra each month", "debt_extra"), ("One-time payment now", "debt_lump"),
        ("Cushion kept", "debt_cushion"), ("Debt-free", "debt_free"), ("Total interest", "debt_interest"),
        ("Minimums only: debt-free", "debt_min_free"), ("Minimums only: interest", "debt_min_interest")], 2) + \
    '<h3>Watch out</h3>' + f("debt_warning", "m", "height:16mm") + \
    '<p class="small">"Balances as of" ' + f("debt_asof", "", "width:40mm;display:inline-block") + '. The mortgage stays out of the payoff order (it\'s in your net worth).</p>'
page("Debt list and plan", "Payoff order from your Debt-free date option", debtp)

sched = [[f(f"plan_m{k}_label"), f(f"plan_m{k}_d1"), f(f"plan_m{k}_d2"), f(f"plan_m{k}_d3"), f(f"plan_m{k}_d4"), f(f"plan_m{k}_total"), c(f"plan_m{k}_done")] for k in range(1, 25)]
schedp = '<p class="small">Planned balance at the end of each month. With a code tool the AI fills every month; without one it fills the order and the rough months. Tick each month you made the planned payments.</p>' + \
    table(["Month", f("plan_d1_name", "hd"), f("plan_d2_name", "hd"), f("plan_d3_name", "hd"), f("plan_d4_name", "hd"), "Total", "Paid"], sched,
          ["14%", "16%", "16%", "16%", "16%", "15%", "7%"])
page("Debt payoff schedule", "Month by month, first 24 months", schedp)

def thermo(n):
    marks = "".join(f'<div class="tm"><span>{p}% paid</span>{f(f"th{n}_p{p}")}</div>' for p in range(90, 0, -10))
    return f'''<div class="th"><div class="thhead">{f(f"th{n}_name", "", "font-weight:600")}<div class="thsub">Start balance {f(f"th{n}_start", "", "width:26mm;display:inline-block")}</div></div>
    <div class="thbody"><div class="bulb"><div class="tube"></div><div class="ball"></div></div><div class="marks">
    <div class="tm"><span>Paid off</span>{f(f"th{n}_goal")}</div>{marks}</div></div></div>'''
thp = '<p class="small">The AI writes the balance left at each 10% mark. Colour the tube up as the balance falls past each one.</p><div class="ths">' + "".join(thermo(n) for n in range(1, 5)) + '</div>'
page("Payoff thermometers", "One per debt, in payoff order", thp)

assets = [[f(f"nw_a{i}_item"), f(f"nw_a{i}_value")] for i in range(1, 11)]
liabs = [[f(f"nw_l{i}_item"), f(f"nw_l{i}_value")] for i in range(1, 11)]
nwp = kv([("Date", "nw_date")], 2) + '<div class="two">' + table(["What you own", "Value"], assets, ["62%", "38%"]) + table(["What you owe", "Balance"], liabs, ["62%", "38%"]) + '</div>' + \
    kv([("Total owned", "nw_assets"), ("Total owed", "nw_liabs"), ("Net worth", "nw_total"), ("Liquid net worth", "nw_liquid")], 2) + \
    '<p class="small">Liquid net worth: cash and savings minus card balances and other short-term bills. Values you typed in are your own estimates.</p>'
page("Net worth", "What you own minus what you owe", nwp)

sf = [[f(f"sf_{i}_name"), f(f"sf_{i}_target"), f(f"sf_{i}_due"), f(f"sf_{i}_monthly"), f(f"sf_{i}_saved")] for i in range(1, 9)]
efp = '<h3>Emergency fund</h3>' + kv([("Goal (months of spending)", "ef_months"), ("Target amount", "ef_target"), ("Saved now", "ef_current"),
                                       ("Save each month", "ef_monthly"), ("Reach it by", "ef_date"), ("Kept in", "ef_where")], 3) + \
    '<h3>Sinking funds</h3><p class="small">Money set aside each month for bills that come once or twice a year, so they stop surprising you. The AI lists the yearly charges it found.</p>' + \
    table(["Saving for", "Amount", "Due", "Set aside / month", "Saved so far"], sf, ["32%", "15%", "17%", "18%", "18%"])
page("Emergency fund and sinking funds", "Where the money you free up goes", efp)

weeks = [[f"Week {k}", f(f"ch_w{k}_amount"), f(f"ch_w{k}_total"), c(f"ch_w{k}_done")] for k in range(1, 13)]
chp = kv([("Goal for 12 weeks", "ch_goal"), ("Start date", "ch_start"), ("Saving for", "ch_for")], 3) + \
    '<p class="small">The AI sets the goal from the money you freed up, and spreads it over 12 weeks (bigger amounts right after payday).</p>' + \
    table(["Week", "Put away", "Running total", "Done"], weeks, ["22%", "30%", "30%", "18%"])
page("12-week savings challenge", "Turn the money you freed up into savings", chp)

days = "".join(f'<div class="day"><span>{d}</span>{c(f"ns_d{d}")}</div>' for d in range(1, 31))
nsp = kv([("Start date", "ns_start"), ("Challenge ends", "ns_end")], 2) + \
    '<h3>The rules</h3><p class="small">No spending in these categories (bills, groceries and gas are fine). The AI picks your biggest flexible ones.</p>' + f("ns_rules", "m", "height:26mm") + \
    f'<h3>Tick each day you stuck to it</h3><div class="days">{days}</div>' + \
    '<h3>What I\'ll do instead</h3>' + f("ns_instead", "m", "height:20mm") + kv([("Usual spend in these categories / month", "ns_usual"), ("Saved this month", "ns_saved")], 2)
page("30-day no-spend challenge", "A reset for your biggest flexible spending", nsp)

ck = [[f(f"ck_{k}_month"), f(f"ck_{k}_spending"), f(f"ck_{k}_target"), f(f"ck_{k}_debt"), f(f"ck_{k}_networth"), f(f"ck_{k}_note")] for k in range(1, 13)]
ckp = '<p class="small">Row 1 is this audit. After each monthly checkup, upload this kit again with the new save block and type <b>update my kit</b>: the AI fills the next empty row.</p>' + \
    table(["Month", "Spending", "vs. target", "Debt left", "Net worth", "What changed"], ck, ["13%", "14%", "13%", "15%", "15%", "30%"])
page("Monthly checkup log", "Twelve months on one page", ckp)

# ---------- For the AI page ----------
ai = r"""
<p class="small">These last two pages tell an AI assistant how to fill this PDF from a Money X-Ray audit in the same chat. People can skip it.</p>
<pre class="ai">FOR THE AI: HOW TO FILL THE MONEY X-RAY ACTION KIT
This PDF has fillable form fields. Fill them from the Money X-Ray audit in this
chat: the report, the person's answers and the options they chose. Use only
numbers from that work. Never invent a value: leave a field empty when the
audit has no answer for it. Never write account numbers, names of other
people (use initials) or addresses.

WITH A CODE TOOL: fill the fields by name and send back the filled PDF,
named Money_XRay_Action_Kit_filled.pdf. For example, with pypdf:
  from pypdf import PdfWriter
  w = PdfWriter(clone_from="kit.pdf")
  for page in w.pages:
      w.update_page_form_field_values(page, values, auto_regenerate=False)
  w.set_need_appearances_writer(True)
  w.write("Money_XRay_Action_Kit_filled.pdf")
Checkboxes take the value "/Yes". Then say in one short message which pages
are complete and which boxes are left for them. The save block doesn't change.
WITHOUT A CODE TOOL: say you can't write into the PDF. Give only pages 3,
7, 8, 11 and 15, each as a short table (box label and value) to type in or
write by hand, at most two pages per message, ending each with "Reply go for
the next pages". Say the other pages are for writing in by hand as they go.

FORMAT: money as on the report ($1,234 or $1,234.56); APR as 22.99%;
months as "Nov 2026"; dates as "Nov 3, 2026". Boxes are small: at most 25
characters, except snap_answer (40 words), debt_warning and ns_rules (25
words). Rows in a list are numbered from 1 with no gaps. "Freed up" = the
monthly saving from the cuts they chose. Leave a choice empty if they didn't
make it; never fill in a default.

(Field list on the next page.)</pre>
"""
ai2 = r"""<pre class="ai">FIELDS (n = row number)
p3  snap_period snap_accounts snap_income snap_spending snap_savings
    snap_leftover snap_check ("All $0.00" or which ones weren't checked)
    snap_fees snap_answer (2-3 sentences) snap_fix_1..3 snap_missing snap_date
p4  cat_n_name cat_n_avg cat_n_target (rows 1-15 largest first, row 16
    "Everything else"; targets from the Budget option, else empty)
    cat_total_avg cat_total_target; cat_m1_label..cat_m3_label = the three
    months after the latest statement; leave cat_n_m1..m3 empty.
    bud_income bud_planned (target total + savings + card minimums + the
    extra to debt) cat_total_m1..m3 empty
    bud_room
p5  sub_n_name monthly yearly flag decision (Keep / Cut / Check, only as
    they chose) cancelled (date, if they said so) stopped (leave empty)
    (n 1-16: subscriptions first, then other recurring bills if room;
    not housing, loans, child care or giving)
    sub_total_monthly (sum of the rows listed) sub_saved_monthly
    sub_saved_yearly
p6  fee_n_item amount avoid (n 1-12) fee_total fee_monthly
p7  todo_n_task saves by (n 1-12, biggest saving first; by = a date or
    "This week"; for a debt action, saves = interest saved per month)
    todo_goal todo_total (only the cuts they chose; not items they're
    still checking)
    todo_gap ("$270 short" or "$40 over")
p8  debt_n_order name balance apr min payoff (n 1-8, in payoff order,
    each separately priced balance on its own row) debt_method debt_extra
    debt_lump debt_cushion debt_free debt_interest debt_min_free
    debt_min_interest debt_warning debt_asof (latest statement date).
    Payoff order = the order the plan targets them, not the order they
    reach $0.
p9  plan_d1_name..plan_d4_name = first four debts in payoff order;
    plan_mk_label plan_mk_d1..d4 plan_mk_total (k 1-24, month 1 = the
    month after the latest statement; planned end-of-month balance; fill
    only with a code tool, otherwise fill labels and write "about" months
    on p8). Leave plan_mk_done empty.
p10 thn_name thn_start (balance on the debt list) thn_goal ("$0")
    thn_p10..thn_p90 = balance left when that % is paid (n 1-4, payoff order)
p11 nw_date nw_an_item nw_an_value nw_ln_item nw_ln_value (n 1-10)
    nw_assets nw_liabs nw_total nw_liquid
p12 ef_months ef_target ef_current ef_monthly ef_date ef_where;
    (empty if they gave no goal); sf_n_name target due monthly (n 1-8;
    yearly charges found, e.g. annual fees; monthly = amount / months left
    until due) leave sf_n_saved empty
p13 ch_goal ch_wk_amount ch_wk_total (k 1-12; amounts add up exactly to
    ch_goal; goal = 3 months of the money they freed up, rounded up to $25,
    at least $300). Leave ch_for ch_start and ch_wk_done empty.
p14 ns_rules (top 2-3 flexible categories, not one-off purchases) ns_usual; leave the dates,
    ns_instead, ns_saved and the day boxes empty.
p15 ck_1_month (latest statement month) ck_1_spending (monthly average)
    ck_1_target ck_1_debt (total debt, no mortgage) ck_1_networth ck_1_note.
    On "update my kit" with a newer save block, fill the next empty row.</pre>
"""
page("For the AI", "How an AI fills this kit (1 of 2)", ai)
page("For the AI: field list", "How an AI fills this kit (2 of 2)", ai2)

CSS = """
@font-face { font-family: "Playfair Display"; font-weight: 700; src: url(../guide/fonts/playfair-display-latin-700-normal.woff2); }
@font-face { font-family: "Playfair Display"; font-weight: 900; src: url(../guide/fonts/playfair-display-latin-900-normal.woff2); }
@font-face { font-family: "Poppins"; font-weight: 400; src: url(../guide/fonts/poppins-latin-400-normal.woff2); }
@font-face { font-family: "Poppins"; font-weight: 600; src: url(../guide/fonts/poppins-latin-600-normal.woff2); }
@font-face { font-family: "Script"; src: url(../guide/fonts/mrs-saint-delafield-latin-400-normal.woff2); }
:root { --bg:#f3efe9; --ink:#161514; --muted:#5a544d; --line:#cfc5b8; --green:#1f7a5a; --note:#efe3cf; }
@page { size: Letter; margin: 0; }
html, body { margin: 0; background: var(--bg); }
body { font-family: "Poppins", sans-serif; font-size: 9.2pt; line-height: 1.45; color: var(--ink); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.pg { position: relative; width: 8.5in; height: 11in; overflow: hidden; background: var(--bg); break-after: page; }
.content { position: absolute; top: 0.55in; left: 0.6in; right: 0.6in; bottom: 0.7in; }
.foot { position: absolute; left: 0.6in; right: 0.6in; bottom: 0.32in; display: flex; justify-content: space-between; font-size: 6.5pt; letter-spacing: .3em; color: #8a8279; }
.foot span:nth-child(2) { font-family: "Playfair Display"; letter-spacing: 0; font-size: 8pt; color: var(--ink); }
.bar { background: var(--ink); color: var(--bg); padding: 9pt 14pt; display: flex; align-items: baseline; gap: 10pt; margin-bottom: 4pt; }
.bar h2 { font-family: "Playfair Display"; font-weight: 900; font-size: 17pt; margin: 0; text-transform: uppercase; letter-spacing: .02em; }
.bar .num { font-family: "Playfair Display"; color: #4fae8a; font-size: 15pt; }
.sub { font-size: 7.5pt; letter-spacing: .25em; text-transform: uppercase; color: var(--muted); margin: 0 0 10pt; }
h3 { font-family: "Playfair Display"; font-weight: 700; font-size: 11.5pt; margin: 11pt 0 5pt; border-bottom: 1px solid var(--ink); padding-bottom: 2pt; }
p { margin: 0 0 7pt; } .small { font-size: 8pt; color: var(--muted); } .lead { font-size: 11pt; }
.f { display: block; height: 15pt; background: #fff; border: 1px solid var(--line); border-radius: 2pt; box-sizing: border-box; }
.f.m { height: auto; } .f.hd { background: #f3efe9; border-color: #8c8278; height: 13pt; }
.c { display: inline-block; width: 11pt; height: 11pt; background: #fff; border: 1px solid #8c8278; border-radius: 2pt; vertical-align: middle; }
table.t { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 4pt 0 8pt; }
table.t th { background: var(--ink); color: var(--bg); font-size: 6.6pt; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; text-align: left; padding: 4pt 4pt; }
table.t td .f { height: 17pt; }
table.t td { padding: 2.4pt 3pt; border-bottom: 1px solid var(--line); vertical-align: middle; font-size: 8.4pt; }
table.t td:has(.c) { text-align: center; }
table.toc td { padding: 3pt 5pt; }
.kvs { display: grid; gap: 6pt 12pt; margin: 6pt 0 8pt; }
.kv .k { font-size: 6.8pt; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin-bottom: 2pt; }
.num { display: inline-block; font-family: "Playfair Display"; font-weight: 700; color: var(--green); width: 14pt; }
.row1 { display: flex; align-items: center; gap: 6pt; margin-bottom: 5pt; } .row1 .f { flex: 1; }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8pt; margin: 8pt 0 6pt; }
.steps div { background: #fff; border: 1px solid var(--line); padding: 9pt; border-radius: 4pt; }
.steps i { font-style: normal; display: block; font-family: "Playfair Display"; font-size: 20pt; color: var(--green); line-height: 1; margin-bottom: 4pt; }
.note { background: var(--note); border-left: 3px solid #8a6d3b; padding: 8pt 11pt; font-size: 8.4pt; margin-top: 8pt; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; }
.ths { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; }
.th { background: #fff; border: 1px solid var(--line); border-radius: 4pt; padding: 8pt; }
.thsub { font-size: 7.5pt; color: var(--muted); margin-top: 3pt; }
.thbody { display: flex; gap: 8pt; margin-top: 6pt; }
.bulb { position: relative; width: 24pt; } .tube { position: absolute; left: 7pt; top: 4pt; bottom: 18pt; width: 10pt; border: 1.5px solid var(--ink); border-radius: 6pt 6pt 0 0; border-bottom: none; }
.ball { position: absolute; left: 1pt; bottom: 0; width: 22pt; height: 22pt; border-radius: 50%; background: var(--green); }
.marks { flex: 1; } .tm { display: flex; align-items: center; gap: 4pt; margin-bottom: 3pt; } .tm span { width: 42pt; font-size: 6.8pt; color: var(--muted); } .tm .f { flex: 1; height: 13pt; }
.days { display: grid; grid-template-columns: repeat(10, 1fr); gap: 5pt; } .day { background: #fff; border: 1px solid var(--line); border-radius: 3pt; text-align: center; padding: 3pt 0; font-size: 7.5pt; } .day span { display: block; color: var(--muted); }
pre.ai { font-family: "DejaVu Sans Mono", monospace; font-size: 7pt; line-height: 1.38; background: #fff; border: 1px solid var(--line); padding: 8pt; margin: 0; white-space: pre-wrap; }
/* cover */
.cover { background: var(--ink); color: var(--bg); }
.cover .tab { position: absolute; top: 0; left: 0.6in; width: 1.3in; height: 1.75in; background: var(--green); border-radius: 0 0 .65in .65in; }
.cover .t1 { position: absolute; top: 2.6in; left: 0.6in; font-family: "Playfair Display"; font-weight: 900; font-size: 58pt; line-height: .95; letter-spacing: -.01em; }
.cover .t2 { position: absolute; top: 4.75in; left: 0.6in; font-family: "Script"; font-size: 46pt; color: #d9c9b4; }
.cover .t3 { position: absolute; top: 5.9in; left: 0.62in; right: 0.6in; font-size: 11pt; color: #cfc6bb; max-width: 4.6in; }
.cover .list { position: absolute; bottom: 0.9in; left: 0.6in; right: 0.6in; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10pt; border-top: 1px solid #3a3734; padding-top: 12pt; font-size: 7pt; letter-spacing: .2em; text-transform: uppercase; color: #b5aca1; }
.cover .list b { display: block; font-family: "Playfair Display"; font-size: 18pt; color: var(--bg); letter-spacing: 0; margin-bottom: 3pt; }
"""

out = [f'<!doctype html><html><head><meta charset="utf-8"><title>Money X-Ray Action Kit</title><style>{CSS}</style></head><body>']
out.append('''<div class="pg cover"><div class="tab"></div><div class="t1">MONEY<br>X-RAY</div><div class="t2">Action Kit</div>
<div class="t3">Fifteen pages that turn your audit into a plan: subscriptions to cut, debts in payoff order, savings goals and a monthly checkup. Upload it to your AI and it fills itself in.</div>
<div class="list"><div><b>01</b>Snapshot</div><div><b>02</b>Cut costs</div><div><b>03</b>Debt plan</div><div><b>04</b>Grow savings</div></div></div>''')
for i, (title, sub, body) in enumerate(PAGES, start=2):
    out.append(f'''<div class="pg"><div class="content"><div class="bar"><h2>{title}</h2></div><div class="sub">{sub}</div>{body}</div>
<div class="foot"><span>MONEY X-RAY</span><span>{i}</span><span>ACTION KIT</span></div></div>''')
out.append("</body></html>")
open(__file__.replace("make_kit_html.py", "kit.html"), "w").write("\n".join(out))
print("pages:", len(PAGES) + 1)
