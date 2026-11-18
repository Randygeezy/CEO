import json, re, sys
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment
v = json.load(open(sys.argv[1])); out = sys.argv[2]
def num(s):
    m = re.match(r'([\d.,]+)\s*([KMB]?)', s or '')
    if not m: return None
    return round(float(m.group(1).replace(',', '')) * {'': 1, 'K': 1e3, 'M': 1e6, 'B': 1e9}[m.group(2)])
def tier(n):
    if n is None: return ''
    return 'Giant (5M+)' if n >= 5e6 else 'Big (1M-5M)' if n >= 1e6 else 'Mid (100K-1M)' if n >= 1e5 else 'Small (under 100K)'
def activity(r):
    d = r.get('last_days')
    if d is None: return 'Unknown'
    return 'Active' if d <= 30 else 'Slowing' if d <= 120 else 'Inactive'
def freq(r):
    if r.get('last_days') is None: return ''
    n90, seen, old = r.get('n90', 0), r.get('n_seen', 0), r.get('oldest_seen_days') or 0
    if seen and n90 == seen and old <= 90 and seen >= 25: return 'Daily or more'
    pm = n90 / 3
    if pm >= 20: return 'Daily or more'
    if pm >= 6: return f'About {round(pm)} a month (weekly+)'
    if pm >= 1: return f'About {round(pm)} a month'
    if n90 > 0: return 'Under 1 a month'
    return 'None in 90 days'
def note(desc):
    d = re.sub(r'\s+', ' ', desc or '').strip()
    d = re.split(r'(?<=[.!?])\s', d)[0] if d else ''
    return (d[:140] + '...') if len(d) > 140 else d
rows = []
for h, r in v.items():
    if r.get('status') != 200 or not r.get('id'): continue
    n = num(r.get('subs'))
    rows.append([r.get('name') or h, f'https://www.youtube.com/@{h}', n, r['niche'], r['style'], activity(r), freq(r), r.get('last') or '', num(r.get('videos')), tier(n), note(r.get('desc'))])
rows.sort(key=lambda x: -(x[2] or 0))
wb = Workbook(); ws = wb.active; ws.title = 'Channels'
hdr = ['Channel', 'Link', 'Subscribers', 'Sub-niche', 'Style', 'Activity', 'Long-form uploads (last 90 days)', 'Last long-form upload', 'Videos', 'Size', 'About (from the channel)']
ws.append(hdr)
for r in rows: ws.append(r)
for i in range(2, len(rows) + 2):
    c = ws.cell(i, 2); c.hyperlink = c.value; c.font = Font(color='1155CC', underline='single')
    ws.cell(i, 3).number_format = '#,##0'; ws.cell(i, 9).number_format = '#,##0'
for j in range(1, len(hdr) + 1):
    c = ws.cell(1, j); c.font = Font(bold=True); c.fill = PatternFill('solid', fgColor='F3F3F3')
widths = [30, 44, 14, 24, 26, 11, 30, 14, 9, 18, 70]
for j, w in enumerate(widths): ws.column_dimensions[chr(65 + j)].width = w
for i in range(2, len(rows) + 2): ws.cell(i, 11).alignment = Alignment(wrap_text=True, vertical='top')
ws.freeze_panes = 'B2'
wb.save(out)
import collections
print(len(rows), 'rows'); print(collections.Counter(r[9] for r in rows)); print(collections.Counter(r[5] for r in rows))
