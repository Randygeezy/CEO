import json, re
STOP = set('what how why the you your this that from with into ever most world earth history explained explain video full movie animated animation story stories were was are is a an of in on to for and if do does did can could would will get got be been they them their its it his her he she we our out about after before inside really actually'.split())
def vn(x):
    m = re.match(r'([\d,]+)', x or ''); return int(m.group(1).replace(',', '')) if m else 0
def num(x):
    m = re.match(r'([\d.,]+)\s*([KMB]?)', x or '')
    return float(m.group(1).replace(',', '')) * {'': 1, 'K': 1e3, 'M': 1e6, 'B': 1e9}[m.group(2)] if m else None
def yrs(a):
    m = re.match(r'(\d+)\s*(\w+)', a or '')
    if not m: return 99
    n, u = int(m.group(1)), m.group(2)
    return n if u.startswith('y') else n / 12 if u.startswith('mo') else 0
def relevant(title, query):
    toks = [t for t in re.findall(r"[a-z0-9']+", query.lower()) if t not in STOP and len(t) >= 3]
    tl = title.lower()
    return any(t in tl for t in toks) if toks else True
def score(videos, subs, n1m_override=None):
    """videos: list of (url, v) unique; subs: url -> subscriber string"""
    n1m = sum(1 for u, v in videos if vn(v['views']) >= 1e6) if n1m_override is None else n1m_override
    old = any(vn(v['views']) >= 3e5 and yrs(v['age']) >= 2 for u, v in videos)
    new = any(vn(v['views']) >= 3e5 and yrs(v['age']) <= 1 for u, v in videos)
    best = None
    for u, v in videos:
        s = num(subs.get(u))
        if s and s <= 250000 and vn(v['views']) >= 3e5 and yrs(v['age']) <= 3:
            r = vn(v['views']) / s
            if r >= 3 and (best is None or r > best[0]): best = (r, u, v, s)
    sc = 1 if n1m == 0 else 2 if n1m == 1 else 3 if n1m <= 3 else 4 if n1m <= 6 else 5
    cp = 1 if not best else 2 if best[0] < 10 else 3 if best[0] < 30 else 4 if best[0] < 100 else 5
    st = 1 + (2 if old else 0) + (2 if new else 0)
    market = 'Crowded' if n1m >= 7 else 'Proven' if n1m >= 3 else 'Fresh'
    top = max(videos, key=lambda x: vn(x[1]['views'])) if videos else None
    return {'scope': sc, 'pull': cp, 'stay': st, 'total': sc + cp + st, 'n1m': n1m, 'market': market,
            'top': (top[1]['ch'], vn(top[1]['views']), top[1]['age'], top[1]['title'], top[1]['id']) if top else None,
            'best': (best[2]['ch'], int(best[3]), vn(best[2]['views']), best[2]['age'], best[2]['title'], best[2]['id'], round(best[0])) if best else None}
