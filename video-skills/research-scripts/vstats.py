import re, json, sys, subprocess, time, statistics, collections, html
lst, out = sys.argv[1], sys.argv[2]
def num(s):
    m = re.match(r'([\d.,]+)\s*([KMB]?)', s or '')
    return float(m.group(1).replace(',', '')) * {'': 1, 'K': 1e3, 'M': 1e6, 'B': 1e9}[m.group(2)] if m else None
def days(t):
    m = re.match(r'(\d+)\s*(second|minute|hour|day|week|month|year)s? ago', t or '')
    return int(m.group(1)) * {'second': 0, 'minute': 0, 'hour': 0, 'day': 1, 'week': 7, 'month': 30, 'year': 365}[m.group(2)] if m else None
SER = re.compile(r'\b(part|pt\.?|episode|ep\.?|chapter|season|day\s*\d+|#\s*\d+)\b', re.I)
res = {}
for l in open(lst):
    h = l.split('\t')[0].strip()
    if not h: continue
    body = subprocess.run(["curl", "-s", "-L", "--max-time", "25", "-H", "Accept-Language: en-US,en", f"https://www.youtube.com/@{h}/videos"], capture_output=True, text=True).stdout
    vids = []
    for chunk in body.split('"lockupMetadataViewModel"')[1:]:
        t = re.search(r'"title":\{"content":"((?:[^"\\]|\\.)*)"', chunk)
        v = re.search(r'"accessibilityLabel":"([\d.,]+ ?(?:thousand|million|billion)?) views?"', chunk)
        a = re.search(r'"accessibilityLabel":"(\d+ (?:second|minute|hour|day|week|month|year)s? ago)"', chunk)
        if not (t and a): continue
        vv = None
        if v:
            s = v.group(1); mult = 1e3 if 'thousand' in s else 1e6 if 'million' in s else 1e9 if 'billion' in s else 1
            vv = float(re.sub(r'[^\d.]', '', s.split(' ')[0])) * mult
        vids.append({"title": json.loads('"' + t.group(1) + '"'), "views": vv, "days": days(a.group(1))})
    r90 = [x for x in vids if x['days'] is not None and x['days'] <= 90 and x['views']]
    settled = [x for x in r90 if x['days'] >= 7] or r90
    vs = [x['views'] for x in settled]
    med = statistics.median(vs) if vs else None
    lo = min(vs) if vs else None; hi = max(vs) if vs else None
    titles = [x['title'] for x in vids[:30]]
    ser = sum(1 for t in titles if SER.search(t))
    pre = collections.Counter(' '.join(t.lower().split()[:3]) for t in titles if len(t.split()) >= 3).most_common(1)
    res[h] = {"n90": len(r90), "med90": med, "min90": lo, "max90": hi, "settled_n": len(settled), "series_titles": ser, "top_prefix": pre[0] if pre else None,
              "sample": [x['title'] for x in vids[:4]], "total_seen": len(vids)}
    print(h, res[h]['n90'], med, lo, hi, ser, pre[0] if pre else None, flush=True)
    time.sleep(0.8)
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
