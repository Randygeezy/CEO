import re, json, sys, subprocess, time
out = sys.argv[1]; hs = sys.argv[2:]
def days(t):
    m = re.match(r'(\d+) (second|minute|hour|day|week|month|year)s? ago', t or '')
    return int(m.group(1)) * {'second': 0, 'minute': 0, 'hour': 0, 'day': 1, 'week': 7, 'month': 30, 'year': 365}[m.group(2)] if m else None
def vnum(s):
    mult = 1e3 if 'thousand' in s else 1e6 if 'million' in s else 1e9 if 'billion' in s else 1
    return float(re.sub(r'[^\d.]', '', s.split(' ')[0])) * mult
res = {}
for h in hs:
    body = subprocess.run(["curl", "-s", "-L", "--max-time", "25", "-H", "Accept-Language: en-US,en", f"https://www.youtube.com/@{h}/videos"], capture_output=True, text=True).stdout
    vids = []
    for ch in body.split('"lockupViewModel":{')[1:]:
        cid = re.search(r'"contentId":"([\w-]{11})"', ch); t = re.search(r'"title":\{"content":"((?:[^"\\]|\\.)*)"', ch)
        v = re.search(r'"accessibilityLabel":"([\d.,]+ ?(?:thousand|million|billion)?) views?"', ch); a = re.search(r'"accessibilityLabel":"(\d+ \w+ ago)"', ch)
        if cid and t and v: vids.append({"id": cid.group(1), "title": json.loads('"' + t.group(1) + '"'), "views": vnum(v.group(1)), "days": days(a.group(1) if a else '')})
    res[h] = vids; time.sleep(0.8)
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
for h, vs in res.items():
    top = sorted(vs, key=lambda x: -x['views'])[:6]
    print('==', h, len(vs)); [print('  %9.0f %4s  %s' % (x['views'], x['days'], x['title'][:80])) for x in top]
