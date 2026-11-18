import re, json, sys, subprocess, html, concurrent.futures as cf
src, out = sys.argv[1], sys.argv[2]
need = list(json.load(open(src))); res = json.load(open(out))
todo = [u for u in need if u not in res]
def fetch(url):
    body = subprocess.run(["curl", "-s", "-L", "--max-time", "20", "-H", "Accept-Language: en-US,en", "https://www.youtube.com" + url], capture_output=True, text=True).stdout
    sub = re.search(r'"content":"([^"]{1,20}) subscribers?"', body); nm = re.search(r'<meta property="og:title" content="([^"]*)"', body)
    return url, {"subs": sub.group(1) if sub else None, "name": html.unescape(nm.group(1)) if nm else None}
with cf.ThreadPoolExecutor(4) as ex:
    for i, (u, r) in enumerate(ex.map(fetch, todo)):
        res[u] = r
        if i % 20 == 0: json.dump(res, open(out, 'w'), ensure_ascii=False)
json.dump(res, open(out, 'w'), ensure_ascii=False); print('fetched', len(todo))
