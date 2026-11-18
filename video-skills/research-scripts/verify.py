import re, json, sys, subprocess, time, html
lst, out = sys.argv[1], sys.argv[2]
rows = [l.rstrip('\n').split('\t') for l in open(lst) if l.strip()]
res = {}
try: res = json.load(open(out))
except Exception: pass
def days(t):
    m = re.match(r'(?:Streamed )?(\d+) (second|minute|hour|day|week|month|year)s? ago', t or '')
    if not m: return None
    n = int(m.group(1)); return n * {'second': 0, 'minute': 0, 'hour': 0, 'day': 1, 'week': 7, 'month': 30, 'year': 365}[m.group(2)]
for h, niche, style in rows:
    if h in res and res[h].get('v2'): continue
    url = f"https://www.youtube.com/@{h}/videos"
    p = subprocess.run(["curl", "-s", "-L", "-w", "\n%{http_code}", "--max-time", "25", "-H", "Accept-Language: en-US,en", url], capture_output=True, text=True)
    body, _, code = p.stdout.rpartition('\n')
    r = {"status": int(code or 0), "niche": niche, "style": style, "v2": True}
    if r["status"] == 200:
        g = lambda pat: (re.search(pat, body) or [None, None])[1]
        r["name"] = html.unescape(g(r'<meta property="og:title" content="([^"]*)"') or '')
        r["id"] = g(r'<link rel="canonical" href="https://www.youtube.com/channel/(UC[\w-]{22})"')
        r["subs"] = g(r'"content":"([^"]{1,20}) subscribers?"')
        r["videos"] = g(r'"content":"([^"]{1,20}) videos?"')
        r["desc"] = html.unescape(g(r'<meta name="description" content="([^"]*)"') or '')[:300]
        pts = re.findall(r'"accessibilityLabel":"((?:Streamed )?\d+ (?:second|minute|hour|day|week|month|year)s? ago)"', body)[:30]
        ds = [d for d in (days(t) for t in pts) if d is not None]
        r["last"] = pts[0] if pts else None; r["last_days"] = ds[0] if ds else None
        r["n90"] = sum(1 for d in ds if d <= 90); r["n_seen"] = len(ds); r["oldest_seen_days"] = max(ds) if ds else None
    res[h] = r
    json.dump(res, open(out, "w"), indent=1)
    print(h, r["status"], r.get("subs"), r.get("last"), flush=True)
    time.sleep(0.8)
