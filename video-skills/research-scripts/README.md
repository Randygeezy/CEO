# Research scripts

The scripts behind the channel research in the Faceless Channel Playbook. They read YouTube's public pages only (search results and channel pages) with `curl`; no API keys. Run with `python3 -I <script> ...`.

| Script | Step | What it does |
| --- | --- | --- |
| `search.py OUTDIR "query" ...` | Channel inventory | YouTube channel search; saves name, subscribers, description per channel |
| `verify.py LIST.tsv OUT.json` | Channel inventory | Opens each `@handle/videos` page: name, channel id, subscribers, video count, recent upload ages, 90-day upload count. LIST.tsv = `handle<TAB>sub-niche<TAB>style` |
| `build_xlsx.py VERIFIED.json OUT.xlsx` | Channel inventory | Builds the channel spreadsheet |
| `views.py LIST.tsv OUT.json` | Format scan | Typical long-form and Shorts views per channel |
| `vstats.py LIST.tsv OUT.json` | Consistency | Per-video views and ages for the last 90 days, plus series signals in titles |
| `vsearch.py OUT.json "query" ...` | Outliers, gaps | YouTube video search; saves each video's channel, title, views, age, id |
| `chanvids.py OUT.json handle ...` | Outliers | A channel's recent videos with views (big-channel topics) |
| `subs.py CHANNELS.json OUT.json` | Outliers, gaps | Subscribers, name and description for a set of channel URLs |

Lessons:
- Guessed handles can belong to someone else. Always check the channel name and subscriber count after `verify.py`.
- YouTube's page layout changes; if a field comes back empty, inspect one saved page and update the pattern.
- Shorts are not counted in the long-form numbers.

## Desire map (the YouTube Desire Map doc)

Scores each viewer desire ("I want to ...") from one YouTube search per desire, with the Desire-to-Scale scoring adapted to view data.

| Script | What it does |
| --- | --- |
| `desire_score.py` | The scoring rules below; imported by `desire_rank.py` |
| `desire_rank.py DATA_DIR` | Ranks every desire in `DATA_DIR/queries.tsv` from the saved searches; writes `scores.json`, and `need.json` for channels still missing a subscriber count |
| `subs_par.py NEED.json SUBS.json` | Fetches subscriber counts for the channels in NEED.json, four at a time, into SUBS.json |

Steps:
1. Write `queries.tsv`: `niche<TAB>"I want ..." desire<TAB>search phrase`, one phrase per desire.
2. `python3 -I vsearch.py DATA_DIR/vids.json "phrase 1" "phrase 2" ...`. Put a later run in another `vids_*.json` file; `desire_rank.py` merges them all. A phrase that comes back with no videos was rate-limited, so search it again.
3. `python3 -I desire_rank.py DATA_DIR`, then `python3 -I subs_par.py DATA_DIR/need.json DATA_DIR/subs.json`, then `desire_rank.py` again.
4. Read the hits. Put games, reaction re-uploads, kids' channels and off-topic matches in `exclude.txt`. If a phrase mostly misses the desire, search a better one and map it in `requery.tsv`.

Scoring (each 1 to 5, total out of 15). A video counts only if its title shares a keyword with the search phrase.
- Click pull: the best small-channel hit, meaning 250K subscribers or fewer, 300K+ views, posted in the last 3 years. Views per subscriber: none = 1, under 10x = 2, under 30x = 3, under 100x = 4, 100x or more = 5.
- Staying power: 1, plus 2 if a 300K+ video is at least 2 years old, plus 2 if one is at most a year old.
- Scope: videos over 1M: none = 1, one = 2, two or three = 3, four to six = 4, seven or more = 5.
- Market: Crowded (7+ videos over 1M), Proven (3 to 6), Fresh (0 to 2).

`desire-data/` holds the 18 November 2026 run behind the doc: 14 niches and 56 desires. The prison scores in the doc come from the earlier prison research.
