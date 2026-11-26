#!/usr/bin/env python3
"""Grade a Money X-Ray transaction export against the answer key.

Usage: python3 grade.py path/to/Money_XRay_Transactions_2026-10.csv

The export must use the column schema from prompt/MASTER_PROMPT.md (Phase 7).
Rows are matched to the ground truth on (source_file, date, amount, description),
so which copy of an export duplicate the AI excluded does not matter.

Exit code 0 when every critical check passes, 1 otherwise.
"""
import csv
import os
import re
import sys
from collections import Counter, defaultdict
from datetime import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
TRUTH = os.path.join(HERE, "answer-key", "ground_truth_transactions.csv")
REQUIRED = ["date", "description_raw", "category", "amount", "type", "counts_as_spending",
            "verification", "source_file"]
SOFT_TYPES = {"Reimbursement", "Unknown Inflow"}  # either is acceptable for person-to-person inflows


def norm_date(s):
    s = s.strip()
    for f in ("%Y-%m-%d", "%m/%d/%Y", "%d %b %Y", "%m/%d/%y", "%b %d, %Y"):
        try:
            return datetime.strptime(s, f).date().isoformat()
        except ValueError:
            pass
    return s


def norm_amt(s):
    return f"{abs(float(re.sub(r'[^0-9.\-]', '', s) or 0)):.2f}"


def norm_desc(s):
    return re.sub(r"\s+", " ", s.strip().upper())


def key(r):
    return (os.path.basename(r["source_file"].strip()), norm_date(r["date"]), norm_amt(r["amount"]),
            norm_desc(r["description_raw"]))


def yes(s):
    return s.strip().lower() in ("yes", "y", "true", "1")


def main(path):
    truth = list(csv.DictReader(open(TRUTH, newline="")))
    ai = list(csv.DictReader(open(path, newline="", encoding="utf-8-sig")))
    if not ai:
        sys.exit("export is empty")
    missing_cols = [c for c in REQUIRED if c not in ai[0]]
    if missing_cols:
        sys.exit(f"export is missing required columns: {', '.join(missing_cols)}")

    manual = [r for r in ai if r["source_file"].strip().lower() == "manual"]
    ai = [r for r in ai if r["source_file"].strip().lower() != "manual"]

    t_groups = defaultdict(list)
    for r in truth:
        t_groups[key(r)].append(r)
    a_groups = defaultdict(list)
    for r in ai:
        a_groups[key(r)].append(r)

    critical, warnings = [], []
    type_ok = cat_ok = spend_ok = checked = 0

    for k, trs in t_groups.items():
        expected_kept = sum(1 for r in trs if r["export_duplicate"] == "No")
        ars = a_groups.get(k, [])
        kept = [r for r in ars if "duplicate" not in r["verification"].lower()]
        label = f"{k[0]} {k[1]} {k[3]} ${k[2]}"
        if not ars:
            critical.append(f"MISSING  {label} (expected {expected_kept} row(s))")
            continue
        if len(kept) != expected_kept:
            what = "kept a duplicate" if len(kept) > expected_kept else "dropped a real transaction"
            critical.append(f"COUNT    {label}: kept {len(kept)}, expected {expected_kept} ({what})")
        t = trs[0]
        for a in kept[:expected_kept]:
            checked += 1
            t_type, a_type = t["type"], a["type"].strip()
            if a_type == t_type or (t_type in SOFT_TYPES and a_type in SOFT_TYPES):
                type_ok += 1
            else:
                (critical if {t_type, a_type} & {"Card Payment", "Transfer", "Income"} else warnings).append(
                    f"TYPE     {label}: got '{a_type}', expected '{t_type}'")
            if yes(a["counts_as_spending"]) == (t["counts_as_spending"] == "Yes"):
                spend_ok += 1
            else:
                critical.append(f"SPENDING {label}: counts_as_spending='{a['counts_as_spending']}', "
                                f"expected '{t['counts_as_spending']}'")
            if t["type"] in ("Expense", "Refund"):
                if a["category"].strip().lower() == t["category"].lower():
                    cat_ok += 1
                else:
                    warnings.append(f"CATEGORY {label}: got '{a['category']}', expected '{t['category']}'")
            else:
                cat_ok += 1

    extra = [k for k in a_groups if k not in t_groups]
    for k in extra:
        critical.append(f"INVENTED {k[0]} {k[1]} {k[3]} ${k[2]} is not in any statement")

    # Monthly totals
    def totals(rows, is_truth):
        out = defaultdict(float)
        for r in rows:
            if is_truth:
                if r["export_duplicate"] == "Yes":
                    continue
                t, spend = r["type"], r["counts_as_spending"] == "Yes"
            else:
                if "duplicate" in r["verification"].lower():
                    continue
                t, spend = r["type"].strip(), yes(r["counts_as_spending"])
            m = norm_date(r["date"])[:7]
            if spend:
                out[m] += float(norm_amt(r["amount"]))
            elif t in ("Refund", "Reimbursement"):  # confirmed paybacks offset spending, like refunds
                out[m] -= float(norm_amt(r["amount"]))
        return out

    t_tot, a_tot = totals(truth, True), totals(ai, False)

    print(f"Money X-Ray grade for {os.path.basename(path)}\n")
    print(f"Rows in export: {len(ai)}   ground-truth rows: {len(truth)}   matched transactions checked: {checked}")
    if manual:
        print(f"Customer-reported manual rows (not graded, not in totals): {len(manual)}")
    print(f"Type correct:      {type_ok}/{checked}")
    print(f"Spending flag:     {spend_ok}/{checked}")
    print(f"Category correct:  {cat_ok}/{checked}\n")
    print("Net spending by month (export vs answer key):")
    for m in sorted(t_tot):
        diff = a_tot.get(m, 0) - t_tot[m]
        mark = "OK " if abs(diff) < 0.005 else "OFF"
        print(f"  {mark} {m}: ${a_tot.get(m, 0):,.2f} vs ${t_tot[m]:,.2f}  (diff {diff:+,.2f})")
        if mark == "OFF":
            critical.append(f"TOTAL    {m} net spending off by {diff:+,.2f}")

    cats = Counter(w.split()[0] for w in warnings)
    print(f"\nCritical problems: {len(critical)}")
    for c in critical:
        print("  " + c)
    print(f"Warnings: {len(warnings)} {dict(cats) if cats else ''}")
    for w in warnings:
        print("  " + w)
    print("\nThis grades the transaction export only. Check the written report's flags against\n"
          "answer-key/ANSWER_KEY.md ('Every trap the audit must catch') by hand.")
    print("\nRESULT:", "PASS" if not critical else "FAIL")
    return 0 if not critical else 1


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    sys.exit(main(sys.argv[1]))
