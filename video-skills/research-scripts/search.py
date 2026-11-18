import re, json, sys, subprocess, urllib.parse, time, os
out_dir = sys.argv[1]; queries = sys.argv[2:]
res = {}
for q in queries:
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote_plus(q) + "&sp=EgIQAg%253D%253D"
    h = subprocess.run(["curl", "-s", "--max-time", "25", "-H", "Accept-Language: en-US,en", url], capture_output=True, text=True).stdout
    m = re.search(r'var ytInitialData = (\{.*?\});</script>', h)
    if not m: print("NO DATA", q, file=sys.stderr); continue
    d = json.loads(m.group(1))
    def walk(o):
        if isinstance(o, dict):
            if 'channelRenderer' in o:
                c = o['channelRenderer']
                url = c.get('navigationEndpoint', {}).get('browseEndpoint', {}).get('canonicalBaseUrl')
                desc = ''.join(r.get('text', '') for r in c.get('descriptionSnippet', {}).get('runs', []))
                if url and url not in res:
                    res[url] = {"title": c.get('title', {}).get('simpleText'), "subs": c.get('videoCountText', {}).get('simpleText', ''), "desc": desc, "q": q}
            for v in o.values(): walk(v)
        elif isinstance(o, list):
            for v in o: walk(v)
    walk(d); time.sleep(1.2)
json.dump(res, open(os.path.join(out_dir, "search.json"), "w"), indent=1)
print(len(res), "channels")
