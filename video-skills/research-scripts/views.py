import re, json, sys, subprocess, time, statistics
lst, out = sys.argv[1], sys.argv[2]
def num(s):
    m = re.match(r'([\d.,]+)\s*([KMB]?)', s or '')
    return float(m.group(1).replace(',', '')) * {'': 1, 'K': 1e3, 'M': 1e6, 'B': 1e9}[m.group(2)] if m else None
def get(u):
    return subprocess.run(["curl", "-s", "-L", "--max-time", "25", "-H", "Accept-Language: en-US,en", u], capture_output=True, text=True).stdout
res = {}
for l in open(lst):
    h = l.split('\t')[0].strip()
    if not h: continue
    lv = [num(x) for x in re.findall(r'"metadataParts":\[\{"text":\{"content":"([\d.,]+[KMB]?)"', get(f"https://www.youtube.com/@{h}/videos"))][:20]
    time.sleep(0.6)
    sv = [num(x) for x in re.findall(r'"secondaryText":\{"content":"([\d.,]+[KMB]?) views?"', get(f"https://www.youtube.com/@{h}/shorts"))][:30]
    lv = [x for x in lv if x is not None]; sv = [x for x in sv if x is not None]
    res[h] = {"long_n": len(lv), "long_med": statistics.median(lv) if lv else None, "short_n": len(sv), "short_med": statistics.median(sv) if sv else None, "short_max": max(sv) if sv else None}
    print(h, res[h], flush=True); time.sleep(0.6)
json.dump(res, open(out, "w"), indent=1)
