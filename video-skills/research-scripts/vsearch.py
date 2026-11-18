import re, json, sys, subprocess, urllib.parse, time, collections
out = sys.argv[1]; qs = sys.argv[2:]
hits = collections.defaultdict(list)
for q in qs:
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote_plus(q) + "&sp=EgIQAQ%253D%253D"
    h = subprocess.run(["curl", "-s", "--max-time", "25", "-H", "Accept-Language: en-US,en", url], capture_output=True, text=True).stdout
    m = re.search(r'var ytInitialData = (\{.*?\});</script>', h)
    if not m: continue
    d = json.loads(m.group(1))
    def walk(o):
        if isinstance(o, dict):
            if 'videoRenderer' in o:
                v = o['videoRenderer']
                ch = (v.get('ownerText', {}).get('runs') or [{}])[0]
                url = ch.get('navigationEndpoint', {}).get('browseEndpoint', {}).get('canonicalBaseUrl')
                title = ''.join(r.get('text', '') for r in v.get('title', {}).get('runs', []))
                views = v.get('viewCountText', {}).get('simpleText', '')
                age = v.get('publishedTimeText', {}).get('simpleText', '')
                if url: hits[url].append({"id": v.get("videoId"), "ch": ch.get("text"), "title": title, "views": views, "age": age, "q": q})
            for x in o.values(): walk(x)
        elif isinstance(o, list):
            for x in o: walk(x)
    walk(d); time.sleep(1.0)
json.dump(hits, open(out, 'w'), indent=1); print(len(hits), 'channels')
