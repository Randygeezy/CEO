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
