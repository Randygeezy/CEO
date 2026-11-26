#!/usr/bin/env python3
"""Generate the Money X-Ray v1 test dataset and its answer key.

Five fictional accounts, August-October 2026, each exported in a different
bank's CSV format. Every transaction is defined once here with its true
classification, so the answer key is computed, never hand-typed.

Deliberate traps (each one is listed in the answer key):
  - credit card payments that appear in checking AND on the card
  - transfers between the two checking accounts (posted a day apart)
  - a payment to a card whose statement was not supplied (Discover)
  - a transfer to a savings account that was not supplied
  - export duplicates: overlapping Visa exports repeat rows with the same reference
  - a genuine merchant double charge (different references) that must NOT be deduped
  - a refund, a friend's reimbursement and an unexplained Venmo inflow
  - a Netflix price increase, overlapping music and streaming services
  - an unrecognised recurring merchant (SQ *JMK LLC)
  - a new monthly checking fee, a late fee, a foreign transaction fee, interest
  - wrong bank-assigned categories (Costco groceries and gas labelled Shopping)
  - different sign conventions and date formats in every file

All names, amounts and accounts are fictional.

Usage: python3 generate.py   (writes statements/ and answer-key/ next to this file)
"""
import csv
import json
import os
from collections import defaultdict
from datetime import date, timedelta

HERE = os.path.dirname(os.path.abspath(__file__))
MONTHS = [8, 9, 10]
Y = 2026

FILES = {
    "CHK": "everyday_checking.csv",
    "JNT": "joint_checking.csv",
    "VISA": "visa_rewards.csv",
    "MC": "mastercard_cashback.csv",
    "AMEX": "amex_blue.csv",
}
ALIASES = {
    "CHK": "Everyday Checking",
    "JNT": "Joint Checking",
    "VISA": "Visa Rewards",
    "MC": "Mastercard Cash Back",
    "AMEX": "Amex Blue",
}
OPENING = {"CHK": 2140.55, "JNT": 860.00, "VISA": 2480.00, "MC": 1120.00, "AMEX": 640.00}

# Truth types. Only Expense counts as spending; Refund offsets spending.
#   Income | Expense | Refund | Reimbursement | Transfer | Card Payment | Unknown Inflow
rows = []
_ref = [100000]


def ref():
    _ref[0] += 7
    return f"R{_ref[0]}"


def add(acct, d, desc, amount, ttype, category="", recurring="", flags=(), merchant="",
        bank_category="", reference=None):
    """amount: positive number. Direction comes from ttype:
    outflow types (Expense, Transfer out, Card Payment out) vs inflow types."""
    rows.append({
        "acct": acct, "date": d, "desc": desc, "amount": round(amount, 2), "type": ttype,
        "category": category, "recurring": recurring, "flags": list(flags),
        "merchant": merchant or desc, "bank_category": bank_category,
        "ref": reference if reference is not None else ref(),
        "export_dup": False,
    })
    return rows[-1]


def d(m, day):
    return date(Y, m, day)


OUT, IN = "out", "in"


def direction(r):
    if r["type"] in ("Income", "Refund", "Reimbursement", "Unknown Inflow"):
        return IN
    if r["type"] in ("Transfer", "Card Payment"):
        return r["_dir"]
    return OUT


def xfer(acct, dt, desc, amount, ttype, dirn, flags=(), merchant=""):
    r = add(acct, dt, desc, amount, ttype, category="", flags=flags, merchant=merchant)
    r["_dir"] = dirn
    return r


utility = {8: 112.40, 9: 138.75, 10: 156.20}
visa_pay = {8: 600.00, 9: 650.00, 10: 700.00}
mc_pay = {8: 250.00, 9: 300.00, 10: 200.00}
amex_pay = {8: 200.00, 9: 150.00, 10: 175.00}

for m in MONTHS:
    # ---------------- Everyday Checking ----------------
    add("CHK", d(m, 1), "ZELLE TO OAKWOOD PROPERTY MGMT", 1650.00, "Expense", "Housing", "Monthly",
        merchant="Oakwood Property Mgmt (rent)")
    add("CHK", d(m, 1), "ACME LOGISTICS PAYROLL DIR DEP", 2450.00, "Income", "Salary", "Semi-monthly",
        merchant="Acme Logistics (salary)")
    add("CHK", d(m, 15), "ACME LOGISTICS PAYROLL DIR DEP", 2450.00, "Income", "Salary", "Semi-monthly",
        merchant="Acme Logistics (salary)")
    add("CHK", d(m, 3), "DUKE ENERGY BILL PAY", utility[m], "Expense", "Utilities", "Monthly",
        merchant="Duke Energy")
    add("CHK", d(m, 5), "COMCAST XFINITY", 79.99, "Expense", "Utilities", "Monthly", merchant="Comcast Xfinity")
    xfer("CHK", d(m, 8), "TRANSFER TO JOINT CHK XXXX4471", 600.00, "Transfer", OUT, merchant="To Joint Checking")
    add("CHK", d(m, 10), "GEICO AUTO", 142.30, "Expense", "Insurance", "Monthly", merchant="GEICO")
    xfer("CHK", d(m, 12), "CHASE CARD EPAY", visa_pay[m], "Card Payment", OUT, merchant="Payment to Visa Rewards")
    xfer("CHK", d(m, 14), "CITI AUTOPAY", mc_pay[m], "Card Payment", OUT, merchant="Payment to Mastercard")
    xfer("CHK", d(m, 18), "AMEX EPAYMENT ACH PMT", amex_pay[m], "Card Payment", OUT, merchant="Payment to Amex")
    xfer("CHK", d(m, 20), "DISCOVER E-PAYMENT", 150.00, "Card Payment", OUT,
         flags=["missing_statement"], merchant="Payment to Discover (statement not supplied)")
    xfer("CHK", d(m, 28), "TRANSFER TO SAVINGS XXXX8812", 200.00, "Transfer", OUT,
         flags=["savings_transfer"], merchant="To Savings (statement not supplied)")

    # ---------------- Joint Checking ----------------
    xfer("JNT", d(m, 9), "TRANSFER FROM EVERYDAY XXXX2290", 600.00, "Transfer", IN, merchant="From Everyday Checking")
    add("JNT", d(m, 2), "TOYOTA FINANCIAL PMT", 389.00, "Expense", "Debt Payments", "Monthly",
        flags=["debt_principal_interest_unknown"], merchant="Toyota Financial (car loan)")
    add("JNT", d(m, 6), "PLANET FITNESS", 24.99, "Expense", "Subscriptions", "Monthly", merchant="Planet Fitness")

# Everyday Checking one-offs
add("CHK", d(8, 22), "ATM WITHDRAWAL 7-ELEVEN #3381", 100.00, "Expense", "Cash & ATM", merchant="ATM cash")
add("CHK", d(8, 22), "NON-NETWORK ATM FEE", 3.50, "Expense", "Fees & Interest", flags=["avoidable_fee"],
    merchant="ATM fee")
add("CHK", d(10, 22), "ATM WITHDRAWAL 7-ELEVEN #3381", 100.00, "Expense", "Cash & ATM", merchant="ATM cash")
add("CHK", d(10, 22), "NON-NETWORK ATM FEE", 3.50, "Expense", "Fees & Interest", flags=["avoidable_fee"],
    merchant="ATM fee")
add("CHK", d(9, 30), "MONTHLY MAINTENANCE FEE", 12.00, "Expense", "Fees & Interest", "Monthly",
    flags=["new_fee", "avoidable_fee"], merchant="Bank maintenance fee")
add("CHK", d(10, 31), "MONTHLY MAINTENANCE FEE", 12.00, "Expense", "Fees & Interest", "Monthly",
    flags=["new_fee", "avoidable_fee"], merchant="Bank maintenance fee")
add("CHK", d(10, 16), "ZELLE FROM JORDAN M", 45.00, "Reimbursement", "Dining Out",
    flags=["needs_review"], merchant="Jordan M (likely dinner split, Oct 15)")
add("CHK", d(10, 25), "VENMO CASHOUT", 60.00, "Unknown Inflow", flags=["needs_review"], merchant="Venmo cash-out")

# Joint Checking one-offs
for dt, amt in [(d(8, 4), 86.42), (d(8, 19), 112.18), (d(9, 3), 94.10), (d(9, 17), 131.55),
                (d(10, 5), 102.77), (d(10, 18), 148.30)]:
    add("JNT", dt, "KROGER #0412", amt, "Expense", "Groceries", merchant="Kroger")
add("JNT", d(10, 20), "KROGER #0412 REFUND", 18.99, "Refund", "Groceries", merchant="Kroger")
add("JNT", d(9, 15), "CVS/PHARMACY #2207", 32.15, "Expense", "Health", merchant="CVS Pharmacy")
add("JNT", d(10, 6), "PLANET FITNESS ANNUAL FEE", 49.00, "Expense", "Subscriptions", "Annual",
    flags=["annual_charge"], merchant="Planet Fitness annual fee")

# ---------------- Visa Rewards ----------------
for m, amt in [(8, 15.49), (9, 17.99), (10, 17.99)]:
    add("VISA", d(m, 4), "NETFLIX.COM", amt, "Expense", "Subscriptions", "Monthly",
        flags=["price_increase"] if m == 9 else [], merchant="Netflix", bank_category="Entertainment")
for m in MONTHS:
    add("VISA", d(m, 11), "SPOTIFY USA", 11.99, "Expense", "Subscriptions", "Monthly",
        flags=["overlapping_service"], merchant="Spotify", bank_category="Entertainment")
for dt, amt in [(d(8, 7), 48.20), (d(8, 21), 51.75), (d(9, 6), 46.90), (d(9, 28), 39.80),
                (d(10, 5), 52.30), (d(10, 19), 58.40)]:
    add("VISA", dt, "SHELL OIL 57442", amt, "Expense", "Gas", merchant="Shell", bank_category="Gas")
for dt, amt in [(d(8, 13), 184.66), (d(9, 11), 201.34), (d(10, 15), 236.89)]:
    add("VISA", dt, "COSTCO WHSE #1123", amt, "Expense", "Groceries", flags=["bank_category_wrong"],
        merchant="Costco", bank_category="Shopping")
add("VISA", d(9, 25), "COSTCO GAS #1123", 41.20, "Expense", "Gas", flags=["bank_category_wrong"],
    merchant="Costco Gas", bank_category="Shopping")
for dt, amt in [(d(8, 9), 14.85), (d(8, 24), 16.20), (d(9, 3), 15.40), (d(9, 30), 18.75),
                (d(10, 8), 21.40), (d(10, 21), 24.10)]:
    add("VISA", dt, "CHIPOTLE 2291", amt, "Expense", "Dining Out", merchant="Chipotle", bank_category="Food & Drink")
add("VISA", d(10, 15), "OLIVE GARDEN #1590", 92.60, "Expense", "Dining Out", merchant="Olive Garden",
    bank_category="Food & Drink")
for dt, amt in [(d(8, 16), 38.20), (d(9, 19), 44.75), (d(10, 23), 52.10)]:
    add("VISA", dt, "UBER *EATS", amt, "Expense", "Dining Out", merchant="Uber Eats", bank_category="Food & Drink")
for dt, amt in [(d(8, 18), 67.43), (d(9, 22), 129.99), (d(10, 2), 34.12)]:
    add("VISA", dt, "AMAZON MKTPL*2K4TR8", amt, "Expense", "Shopping", merchant="Amazon", bank_category="Shopping")
add("VISA", d(9, 29), "AMAZON MKTPL*2K4TR8", 129.99, "Refund", "Shopping", merchant="Amazon (return)",
    bank_category="Shopping")
for m, amt in [(8, 21.84), (9, 19.62), (10, 23.11)]:
    add("VISA", d(m, 25), "PURCHASE INTEREST CHARGE", amt, "Expense", "Fees & Interest", "Monthly",
        flags=["interest"], merchant="Visa interest", bank_category="Fees & Adjustments")
for m in MONTHS:
    r = xfer("VISA", d(m, 13), "Payment Thank You-Mobile", visa_pay[m], "Card Payment", IN,
             merchant="Payment from Everyday Checking")
    r["bank_category"] = ""

# ---------------- Mastercard Cash Back ----------------
for m in MONTHS:
    add("MC", d(m, 14), "ADOBE *CREATIVE CLD", 22.99, "Expense", "Subscriptions", "Monthly", merchant="Adobe")
    add("MC", d(m, 9), "APPLE.COM/BILL", 2.99, "Expense", "Subscriptions", "Monthly", merchant="Apple iCloud+")
    add("MC", d(m, 17), "APPLE.COM/BILL", 10.99, "Expense", "Subscriptions", "Monthly",
        flags=["overlapping_service"], merchant="Apple Music")
    xfer("MC", d(m, 15), "AUTOPAY PAYMENT - THANK YOU", mc_pay[m], "Card Payment", IN,
         merchant="Payment from Everyday Checking")
for dt, amt in [(d(8, 10), 54.21), (d(9, 7), 88.40), (d(10, 12), 61.77)]:
    add("MC", dt, "TARGET 00012", amt, "Expense", "Shopping", merchant="Target")
add("MC", d(9, 12), "DOORDASH*THAI BASIL", 34.50, "Expense", "Dining Out", flags=["possible_double_charge"],
    merchant="DoorDash - Thai Basil")
add("MC", d(9, 12), "DOORDASH*THAI BASIL", 34.50, "Expense", "Dining Out", flags=["possible_double_charge"],
    merchant="DoorDash - Thai Basil")
add("MC", d(9, 1), "ANNUAL MEMBERSHIP FEE", 95.00, "Expense", "Fees & Interest", "Annual",
    flags=["annual_charge", "avoidable_fee"], merchant="Mastercard annual fee")
add("MC", d(8, 20), "WALGREENS #4410", 27.33, "Expense", "Health", merchant="Walgreens")

# ---------------- Amex Blue ----------------
for m in MONTHS:
    add("AMEX", d(m, 3), "HULU 877-8244858", 18.99, "Expense", "Subscriptions", "Monthly",
        flags=["overlapping_service"], merchant="Hulu")
    add("AMEX", d(m, 3), "DISNEY PLUS", 13.99, "Expense", "Subscriptions", "Monthly",
        flags=["overlapping_service"], merchant="Disney+")
    add("AMEX", d(m, 19), "SQ *JMK LLC", 45.00, "Expense", "Uncategorized", "Monthly",
        flags=["unrecognized_recurring", "needs_review"], merchant="SQ *JMK LLC (unknown)")
    xfer("AMEX", d(m, 20), "ONLINE PAYMENT - THANK YOU", amex_pay[m], "Card Payment", IN,
         merchant="Payment from Everyday Checking")
starbucks = {8: [(2, 6.45), (12, 7.10), (26, 6.45)],
             9: [(4, 6.95), (11, 7.25), (18, 6.95), (27, 8.10)],
             10: [(1, 7.25), (7, 7.25), (13, 8.40), (21, 6.95), (29, 7.80)]}
for m, items in starbucks.items():
    for day, amt in items:
        add("AMEX", d(m, day), "STARBUCKS STORE 08812", amt, "Expense", "Dining Out", merchant="Starbucks")
add("AMEX", d(9, 26), "LATE FEE", 29.00, "Expense", "Fees & Interest", flags=["avoidable_fee"], merchant="Amex late fee")
add("AMEX", d(10, 8), "ETSY.COM*CRAFTHAUS", 62.00, "Expense", "Shopping", merchant="Etsy - Crafthaus")
add("AMEX", d(10, 8), "FOREIGN TRANSACTION FEE", 1.86, "Expense", "Fees & Interest", flags=["avoidable_fee"],
    merchant="Foreign transaction fee")
add("AMEX", d(10, 14), "SEPHORA #0331", 48.50, "Expense", "Personal Care", merchant="Sephora")

# ---------------- Export duplicates (Visa) ----------------
# The Visa file was stitched from monthly exports; the October export began Sep 28,
# so rows dated Sep 28-30 appear twice with identical references.
visa_overlap = [r for r in rows if r["acct"] == "VISA" and date(Y, 9, 28) <= r["date"] <= date(Y, 9, 30)]
for r in visa_overlap:
    dup = dict(r)
    dup["flags"] = list(r["flags"]) + ["export_duplicate"]
    dup["export_dup"] = True
    rows.append(dup)


# ---------------- Write statements ----------------
def signed_for_account(r):
    """Positive = money into the account / reduces card balance."""
    return r["amount"] if direction(r) == IN else -r["amount"]


def fmt(n):
    return f"{n:.2f}"


os.makedirs(os.path.join(HERE, "statements"), exist_ok=True)
os.makedirs(os.path.join(HERE, "answer-key"), exist_ok=True)

by_acct = defaultdict(list)
for i, r in enumerate(rows):
    r["seq"] = i
    by_acct[r["acct"]].append(r)
for a in by_acct:
    # A stitched export repeats the overlap block after the first export ends (Sep 30).
    by_acct[a].sort(key=lambda r: (date(Y, 9, 30) if r["export_dup"] else r["date"], r["export_dup"], r["seq"]))

summaries = []


def write(acct, header, rowfn):
    path = os.path.join(HERE, "statements", FILES[acct])
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(header)
        for i, r in enumerate(by_acct[acct], start=2):
            r["source_row"] = i
            w.writerow(rowfn(r))


# Checking accounts: running balance (export duplicates never occur in checking)
for acct in ("CHK", "JNT"):
    bal = OPENING[acct]
    for r in by_acct[acct]:
        bal = round(bal + signed_for_account(r), 2)
        r["balance"] = bal

write("CHK", ["Date", "Description", "Amount", "Balance"],
      lambda r: [r["date"].strftime("%m/%d/%Y"), r["desc"], fmt(signed_for_account(r)), fmt(r["balance"])])
write("JNT", ["Posting Date", "Description", "Debit", "Credit", "Balance"],
      lambda r: [r["date"].isoformat(), r["desc"],
                 fmt(r["amount"]) if direction(r) == OUT else "",
                 fmt(r["amount"]) if direction(r) == IN else "", fmt(r["balance"])])


def visa_type(r):
    return {"Card Payment": "Payment", "Refund": "Return"}.get(
        r["type"], "Fee" if r["category"] == "Fees & Interest" else "Sale")


write("VISA", ["Transaction Date", "Post Date", "Description", "Category", "Type", "Amount", "Reference"],
      lambda r: [r["date"].strftime("%m/%d/%Y"), (r["date"] + timedelta(days=1)).strftime("%m/%d/%Y"),
                 r["desc"], r["bank_category"], visa_type(r),
                 fmt(signed_for_account(r)),  # Chase style: purchases negative
                 r["ref"]])
write("MC", ["Date", "Description", "Amount", "Reference"],
      lambda r: [r["date"].isoformat(), r["desc"], fmt(-signed_for_account(r)), r["ref"]])  # purchases positive
write("AMEX", ["Date", "Description", "Amount", "Reference"],
      lambda r: [r["date"].strftime("%d %b %Y"), r["desc"], fmt(-signed_for_account(r)), r["ref"]])

# Statement summaries (what the PDF summary page would say). Built from unique rows only,
# so a model that keeps the export duplicates will fail to reconcile the Visa account.
for acct in FILES:
    uniq = [r for r in by_acct[acct] if not r["export_dup"]]
    ins = round(sum(r["amount"] for r in uniq if direction(r) == IN), 2)
    outs = round(sum(r["amount"] for r in uniq if direction(r) == OUT), 2)
    is_card = acct in ("VISA", "MC", "AMEX")
    if is_card:  # balance owed
        closing = round(OPENING[acct] + outs - ins, 2)
        summaries.append([ALIASES[acct], FILES[acct], "credit card", "2026-08-01", "2026-10-31",
                          fmt(OPENING[acct]), fmt(closing), fmt(outs), fmt(ins)])
    else:
        closing = round(OPENING[acct] + ins - outs, 2)
        summaries.append([ALIASES[acct], FILES[acct], "checking", "2026-08-01", "2026-10-31",
                          fmt(OPENING[acct]), fmt(closing), fmt(outs), fmt(ins)])
with open(os.path.join(HERE, "statements", "statement_summaries.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["Account", "File", "Account Type", "Period Start", "Period End", "Opening Balance",
                "Closing Balance", "Total Charges/Debits", "Total Payments/Credits"])
    w.writerows(summaries)

# ---------------- Answer key ----------------
truth_path = os.path.join(HERE, "answer-key", "ground_truth_transactions.csv")
all_sorted = sorted(rows, key=lambda r: (FILES[r["acct"]], r["source_row"]))
with open(truth_path, "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["source_file", "source_row", "date", "account_alias", "description_raw", "merchant",
                "amount", "direction", "type", "category", "counts_as_spending", "recurring",
                "export_duplicate", "flags"])
    for r in all_sorted:
        w.writerow([FILES[r["acct"]], r["source_row"], r["date"].isoformat(), ALIASES[r["acct"]], r["desc"],
                    r["merchant"], fmt(r["amount"]), "Inflow" if direction(r) == IN else "Outflow",
                    r["type"], r["category"],
                    "Yes" if (r["type"] == "Expense" and not r["export_dup"]) else "No",
                    r["recurring"], "Yes" if r["export_dup"] else "No", ";".join(r["flags"])])

uniq = [r for r in rows if not r["export_dup"]]
month_name = {8: "2026-08", 9: "2026-09", 10: "2026-10"}
spend = defaultdict(lambda: defaultdict(float))
income = defaultdict(float)
for r in uniq:
    mk = month_name[r["date"].month]
    if r["type"] == "Expense":
        spend[mk][r["category"]] += r["amount"]
    elif r["type"] == "Refund":
        spend[mk][r["category"]] -= r["amount"]
    elif r["type"] == "Income":
        income[mk] += r["amount"]

key = {
    "period": "2026-08-01 to 2026-10-31",
    "files": list(FILES.values()) + ["statement_summaries.csv"],
    "raw_rows": len(rows),
    "unique_transactions": len(uniq),
    "export_duplicates": len(rows) - len(uniq),
    "income_by_month": {k: round(v, 2) for k, v in sorted(income.items())},
    "net_spending_by_month_and_category": {
        mk: {c: round(v, 2) for c, v in sorted(cats.items())} for mk, cats in sorted(spend.items())},
    "net_spending_total_by_month": {mk: round(sum(c.values()), 2) for mk, c in sorted(spend.items())},
    "excluded_from_spending": {
        "card_payments_matched": round(sum(r["amount"] for r in uniq if r["type"] == "Card Payment"
                                           and "missing_statement" not in r["flags"]), 2),
        "card_payments_to_missing_card": round(sum(r["amount"] for r in uniq if "missing_statement" in r["flags"]), 2),
        "internal_transfers": round(sum(r["amount"] for r in uniq if r["type"] == "Transfer"
                                        and "savings_transfer" not in r["flags"]), 2),
        "savings_transfers": round(sum(r["amount"] for r in uniq if "savings_transfer" in r["flags"]), 2),
        "reimbursements": round(sum(r["amount"] for r in uniq if r["type"] == "Reimbursement"), 2),
        "unknown_inflows": round(sum(r["amount"] for r in uniq if r["type"] == "Unknown Inflow"), 2),
    },
    "reconciliation": [dict(zip(["account", "file", "type", "start", "end", "opening", "closing",
                                 "charges_debits", "payments_credits"], s)) for s in summaries],
}

subs = defaultdict(list)
for r in uniq:
    if r["recurring"] in ("Monthly", "Annual") and r["category"] not in ("Housing", "Debt Payments") \
            and r["type"] == "Expense":
        subs[(r["merchant"], ALIASES[r["acct"]], r["recurring"])].append(r)
key["recurring_charges"] = []
for (merchant, acct, freq), rs in sorted(subs.items()):
    rs.sort(key=lambda r: r["date"])
    latest = rs[-1]["amount"]
    key["recurring_charges"].append({
        "merchant": merchant, "account": acct, "frequency": freq, "occurrences": len(rs),
        "latest_amount": latest,
        "annualized": round(latest * (12 if freq == "Monthly" else 1), 2),
        "amounts": [r["amount"] for r in rs],
        "flags": sorted({f for r in rs for f in r["flags"]}),
    })

flag_notes = {
    "missing_statement": "Payments to DISCOVER from Everyday Checking: card statement not supplied; spending on that card is unknown. Ask the user for it; do not count the payment as spending.",
    "savings_transfer": "Transfers to savings XXXX8812: not spending; confirm the account belongs to the user.",
    "export_duplicate": "Visa export overlap: rows dated Sep 28-30 appear twice with identical references. Exclude the second copy; reconciliation only balances after removing them.",
    "possible_double_charge": "DoorDash Thai Basil charged twice on Sep 12 with different references: a possible merchant double charge. Keep both, flag for the user to check with the issuer.",
    "price_increase": "Netflix rose from $15.49 to $17.99 in September.",
    "overlapping_service": "Overlapping services: Spotify and Apple Music (music); Netflix, Hulu and Disney+ (streaming).",
    "unrecognized_recurring": "SQ *JMK LLC: $45.00 on the 19th each month on Amex; merchant not identifiable. Ask the user.",
    "new_fee": "Everyday Checking began charging a $12.00 monthly maintenance fee in September.",
    "avoidable_fee": "Fees: out-of-network ATM fees, maintenance fee, Amex late fee, foreign transaction fee, Mastercard annual fee.",
    "interest": "Visa purchase interest every month: the card carries a balance.",
    "annual_charge": "Annual charges: Mastercard annual fee $95 (Sep), Planet Fitness annual fee $49 (Oct).",
    "bank_category_wrong": "Visa labels Costco Warehouse and Costco Gas as Shopping; they are Groceries and Gas.",
    "needs_review": "Ask the user: Zelle from Jordan M $45 (likely reimbursement for the Oct 15 Olive Garden dinner), Venmo cash-out $60, SQ *JMK LLC.",
    "debt_principal_interest_unknown": "Toyota Financial $389/mo: principal/interest split is not on the statement.",
}
key["expected_flags"] = flag_notes

with open(os.path.join(HERE, "answer-key", "answer_key.json"), "w") as f:
    json.dump(key, f, indent=2)

# Human-readable answer key
L = ["# Money X-Ray test dataset: answer key", "",
     "Fictional data. Generated by `generate.py`; do not edit by hand.", "",
     f"Period: {key['period']}. Raw rows across the five files: {key['raw_rows']}. "
     f"Unique transactions: {key['unique_transactions']} ({key['export_duplicates']} export duplicates).", "",
     "## Income (salary only; reimbursements, refunds and transfers excluded)", ""]
for mk, v in key["income_by_month"].items():
    L.append(f"- {mk}: ${v:,.2f}")
cats = sorted({c for m in spend.values() for c in m})
L += ["", "## Net spending by category", "", "| Category | " + " | ".join(key["income_by_month"]) + " |",
      "|---|" + "---:|" * len(key["income_by_month"])]
for c in cats:
    L.append(f"| {c} | " + " | ".join(f"${spend[mk].get(c, 0):,.2f}" for mk in key["income_by_month"]) + " |")
L.append("| **Total** | " + " | ".join(f"**${key['net_spending_total_by_month'][mk]:,.2f}**"
                                         for mk in key["income_by_month"]) + " |")
L += ["", "Refunds are netted against their category (Amazon return in Shopping, Kroger refund in Groceries). "
      "The $45 Zelle reimbursement is NOT netted until the user confirms it.", "",
      "## Excluded from spending", ""]
for k, v in key["excluded_from_spending"].items():
    L.append(f"- {k.replace('_', ' ')}: ${v:,.2f}")
L += ["", "## Recurring charges", "", "| Merchant | Account | Frequency | Seen | Latest | Annualized | Flags |",
      "|---|---|---|---:|---:|---:|---|"]
for s in key["recurring_charges"]:
    L.append(f"| {s['merchant']} | {s['account']} | {s['frequency']} | {s['occurrences']} | "
             f"${s['latest_amount']:,.2f} | ${s['annualized']:,.2f} | {', '.join(s['flags'])} |")
L += ["", "## Reconciliation (from statement_summaries.csv)", "",
      "| Account | Opening | Charges/Debits | Payments/Credits | Closing |", "|---|---:|---:|---:|---:|"]
for s in key["reconciliation"]:
    L.append(f"| {s['account']} | ${float(s['opening']):,.2f} | ${float(s['charges_debits']):,.2f} | "
             f"${float(s['payments_credits']):,.2f} | ${float(s['closing']):,.2f} |")
L += ["", "## Every trap the audit must catch", ""]
for k, v in flag_notes.items():
    L.append(f"- **{k}**: {v}")
with open(os.path.join(HERE, "answer-key", "ANSWER_KEY.md"), "w") as f:
    f.write("\n".join(L) + "\n")

print(f"wrote {len(rows)} rows ({len(uniq)} unique) to statements/ and answer-key/")
