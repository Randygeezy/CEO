"""Rank viewer desires per niche from YouTube search results (the YouTube Desire Map).

Usage: python3 -I desire_rank.py DATA_DIR

DATA_DIR holds:
  queries.tsv  niche<TAB>"I want ..." desire<TAB>search phrase (one phrase per desire)
  vids*.json   vsearch.py output for those phrases; every vids*.json file is read and merged
  subs.json    subs_par.py output: {channel_url: {"subs": "12.1K", "name": ...}}
  exclude.txt  optional: video ids to leave out (games, reaction re-uploads, kids' channels,
               off-topic hits), one per line; '#' starts a comment
  requery.tsv  optional: old phrase<TAB>new phrase, for a desire that was searched again

Writes DATA_DIR/scores.json, and DATA_DIR/need.json listing channels that have a 300K+ video but no
subscriber count yet: run subs_par.py on it, then run this script again.
Scoring rules are in desire_score.py."""
import glob, json, os, sys, collections
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from desire_score import score, relevant, vn

d = sys.argv[1]
def path(name): return os.path.join(d, name)
def lines(name):
    if not os.path.exists(path(name)): return []
    return [l.split('#')[0].rstrip('\n') for l in open(path(name), encoding='utf-8') if l.split('#')[0].strip()]

vids = collections.defaultdict(list)
for f in sorted(glob.glob(path('vids*.json'))):
    for u, vs in json.load(open(f, encoding='utf-8')).items(): vids[u].extend(vs)
info = json.load(open(path('subs.json'), encoding='utf-8')) if os.path.exists(path('subs.json')) else {}
subs = {u: i.get('subs') for u, i in info.items()}
excl = {l.split()[0] for l in lines('exclude.txt')}
requery = dict(l.split('\t')[:2] for l in lines('requery.tsv'))
queries = [l.split('\t') for l in lines('queries.tsv')]

byq = collections.defaultdict(dict)
for u, vs in vids.items():
    for v in vs:
        if v['id'] not in excl and relevant(v['title'], v['q']): byq[v['q']][v['id']] = (u, v)

res, need = collections.defaultdict(list), {}
for niche, desire, q in queries:
    q2 = requery.get(q, q)
    found = list(byq[q2].values())
    for u, v in found:
        if vn(v['views']) >= 3e5 and not subs.get(u): need[u] = 1
    o = score(found, subs); o.update(desire=desire, q=q2, n=len(found))
    res[niche].append(o)
# ties: higher total, then click pull, then the bigger small-channel hit, then more 1M+ videos
for L in res.values(): L.sort(key=lambda o: (-o['total'], -o['pull'], -(o['best'][6] if o['best'] else 0), -o['n1m']))
json.dump(res, open(path('scores.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
json.dump(need, open(path('need.json'), 'w', encoding='utf-8'))

for niche, L in res.items():
    print('==', niche)
    for o in L:
        print(f"  {o['total']:2}  pull {o['pull']}  stay {o['stay']}  scope {o['scope']}  1M+ {o['n1m']:2}  {o['market']:7}  {o['desire']}")
        if o['best']:
            ch, s, views, age, title, vid, r = o['best']
            print(f"      small-channel hit: {ch} ({s:,} subs) {views:,} views, {age}, {r}x  https://www.youtube.com/watch?v={vid}")
        elif o['top']:
            ch, views, age, title, vid = o['top']
            print(f"      top video: {ch} {views:,} views, {age}  https://www.youtube.com/watch?v={vid}")
if need: print(f'\n{len(need)} channels need subscriber counts: python3 -I subs_par.py {path("need.json")} {path("subs.json")}')
