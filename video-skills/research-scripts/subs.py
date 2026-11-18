import re, json, sys, subprocess, time, html
src, out = sys.argv[1], sys.argv[2]
c = json.load(open(src)); res = {}
try: res = json.load(open(out))
except Exception: pass
for url in c:
    if url in res: continue
    body = subprocess.run(["curl", "-s", "-L", "--max-time", "25", "-H", "Accept-Language: en-US,en", "https://www.youtube.com" + url], capture_output=True, text=True).stdout
    sub = re.search(r'"content":"([^"]{1,20}) subscribers?"', body); nm = re.search(r'<meta property="og:title" content="([^"]*)"', body)
    vids = re.search(r'"content":"([^"]{1,20}) videos?"', body)
    ds = re.search(r"<meta name=\"description\" content=\"([^\"]*)\"", body); res[url] = {"subs": sub.group(1) if sub else None, "name": html.unescape(nm.group(1)) if nm else None, "videos": vids.group(1) if vids else None, "desc": html.unescape(ds.group(1))[:300] if ds else ""}
    json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False); time.sleep(0.7)
print(len(res))
