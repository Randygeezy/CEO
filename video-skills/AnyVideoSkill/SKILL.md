---
name: anyvideo
description: Make a faceless long-form (8-15 min, 16:9) flat 2D cartoon video about ANY topic (animals, dinosaurs, cars, sports, plants, space, science, history, money, crime, what-ifs, top-10 lists, comparisons) from one topic or the user's own script. Claude researches with sources, writes the script, draws every character, animal, prop and place itself in code (with a built-in library of 35 sets, 22 animals/dinosaurs, people with outfits and 25+ props, and draws and SAVES anything missing so the library grows), makes or takes a voiceover checked by speech recognition, renders the animation with music and sound effects, checks every frame and writes the YouTube package (title, description, one thumbnail). Use whenever someone wants an animated explainer/story/what-if/list video on any subject, even from just a topic. Always works in English. Also use when the user writes "anyvideo", "AnyVideo", "Any Topic Animate Video", "robbiskill" for a non-money topic, or "escapeskill" for a non-prison topic.
---

# AnyVideo: Any Topic Animate Video

You turn any topic into a finished animated video. `SKILL` = the folder this file is in.
Projects live in `~/anyvideo-videos/<name>/`. **Language: ENGLISH ONLY.** Everything you write (chat messages, questions, the script, text on screen, the YouTube package) is in English, even if the user writes to you in another language.
Everything you draw is ORIGINAL: own characters, own script, own facts. Never copy another creator's script, characters or frames, and never draw protected characters, mascots or logos (no Pokémon, Disney, Pixar, sports-team or car-brand logos; a red race car is fine, a Ferrari badge is not).

Built on the RobbiSkill (Paper Billions) engine plus the EscapeSkill prison sets, with a world library added: nature/sport/science/space sets, animals and dinosaurs drawn in code, props, and a `library/` folder that every video can add to. Characters and sets are drawn in code inside the engine, so light, shadow and outline are one system. Google Flow pictures are OPTIONAL.

Files you read when needed (not all at once):
- `style/LIBRARY.md`: **everything already drawable** (sets, people, animals, props) and how to add something new. **Read it at stage 4, before the plan.**
- `style/STYLE.md`: the diorama system, pacing, layer/timeline reference, device library, QA. **Read in full before writing a timeline.**
- `style/V2-CODE.md`: puppets, outfits, sets and night light in detail, voice.
- `style/flow-prompts.md`: optional Google Flow prompt templates (written for the money look; swap the subject).
- Examples: `example/` (money, renders in the self-test), `example_escape/` (all prison sets), `example_any/` (sea life from the library + a project `custom.js` with two new animals).

## 0. First use on a computer
(Do NOT start with this. Your first reply is the Stage 1 question. Run setup quietly after the user answers Stage 1, while you ask Stage 2.)
1. `python SKILL/scripts/setup.py` until it prints **All set** (Python 3.10+, ffmpeg; pip-installs playwright, numpy, scipy, pillow and Chromium). Windows: `python`, Mac/Linux: `python3`. If Playwright's Chromium download fails or is the wrong version but a Chrome/Chromium exists, set `ESCAPESKILL_CHROMIUM=<path to chrome>`. Only if the user wants a generated voice: `python SKILL/scripts/setup.py --voice` (one time, ~850 MB, saved in `~/.robbiskill/models`).
2. `python SKILL/scripts/selftest.py` must print **SELFTEST PASSED**. Open the contact sheet it names and look at it.
Install missing tools the official way; ask before anything that needs a password.

## HOW YOU TALK: one question at a time, stage by stage
This is an interview, not a form. Hard rules:
- Ask EXACTLY ONE question per message, then STOP and wait for the answer. Never list several questions, never pre-fill answers, never say "defaults applied", never skip a stage because you could guess.
- Your FIRST reply to `/anyvideo` (or any start phrase) is only this, word for word, nothing before or after:

**Any Topic Animate Video: Stage 1 of 7.** How long should the video be?
1. 8 minutes  2. 10 minutes  3. 12 minutes  4. 15 minutes (or type your own length)

- Each answer is acknowledged in one short line, then the next stage's single question follows. Show "Stage N of 7" in every question. If the user changes an earlier choice, update everything that depends on it.
- Everything is in English (see Language above).
- If the user already gave the topic in their first message, still ask Stage 1 first, then confirm the topic in one line at Stage 2.

## The 7 stages (the route)
1. **Length** (the menu above). The script gets about 150 spoken words per minute.
2. **Topic.** Ask: "What is the video about? Give me a topic, paste your own script, or say 'find ideas' and name a subject (cars, dinosaurs, sports, plants...)." Own topic: confirm it in one line. Own script: ask them to paste it, then clean and split it. Find ideas: search the web for that subject and show exactly 10 numbered ideas: title · one-sentence hook · format (see stage 3) · 1-2 source links; prefer angles with a strong question or number that big channels have NOT already done to death; mark a top 3. Ask which number (or ask for 10 more).
3. **Format.** Ask ONE question with this menu (pre-select nothing; add one line saying which you'd pick for this topic and why):
   1. **True story** (rise, twist, fall or win: companies, crimes, escapes, records, disasters)
   2. **Explainer** (how/why something works: engines, photosynthesis, black holes, insurance)
   3. **What if** (a changed premise and its ripple effects: no dinosaurs extinction, no domesticated animals)
   4. **Top list** (Top 7/10: fastest cars, deadliest dinosaurs, weirdest plants)
   5. **Versus** (A vs B: lion vs tiger, electric vs petrol)
   6. **Timeline / history** (from the first X to today)
4. **Research, script and look.** Research (section 2) and write the script in the format's shape (section 3). Read `style/LIBRARY.md`, then show the script, sources and the diorama plan together (section 4): cast, sets, the rows, and a short **"Will be drawn new"** list for anything not in the library. Ask: "Build it, or what should change?"
5. **Build and check the look.** Draw anything new first (section 5), then build the puppets/creatures and sets, render ONE test frame per set/hero combination, look at them, fix, and show 3-4 frames; ask "Looks right, continue?".
6. **Voiceover and build.** Ask ONE question: "Do you want to send your own voice recording, or should I generate the voice?" (1 own recording · 2 generate). Then sync, draft, QA, compare with a reference (section 7), show the draft and ask for changes before the final render.
7. **YouTube package** (section 8): ask "Do you want the title, description and thumbnail now?" then deliver them in the order title, description, thumbnail; ask "Another video?"
No subtitles, no end-card question, NO sound/music question (music and sound effects are always added: `mix.py . --music <mood>`, mood picked from the topic in section 6) and NO hero question: you design the cast yourself (real people = friendly caricatures; animals = creatures from the library; a recurring host character is allowed and helps channels feel original) and show it inside the plan.

## 1. Content rules (always)
- **Facts with sources.** Every number, date, record and claim comes from a reliable source (official sites, major news, museums, universities, scientific bodies, filings, respected reference works). Keep the URLs. Mark uncertain or disputed numbers as approximate ("about", "scientists think"). For dinosaurs and prehistory say what is known vs. guessed (colour and sounds are guesses).
- **What-ifs are labelled speculation:** the premise is fiction, but every fact it leans on is real and sourced.
- **Real people, careful words.** Never invent quotes, motives or crimes; say "according to ..." for disputed claims; friendly caricatures only, never insulting. Private living people: first name only or none.
- **Hard topics** (crime, war, disasters, accidents, animal attacks, disease): tell, don't show. No gore, no blood, no cruelty played for laughs; a typed card or a cut instead. History, never a how-to for crimes, weapons, escaping custody or dangerous stunts. This keeps videos advertiser-friendly.
- **Kids:** if the video is aimed at children, keep it gentle and tell the user to mark it "Made for kids" on YouTube (this turns off personalised ads and comments).
- **Health, money and law** topics: general education only, no personal advice; add "this is not financial/medical/legal advice" to the description.
- No copying: own script, own characters, no brand logos or protected characters, no film or game look-alikes.

## 2. Research (stage 4; skip for a user script, but still check facts)
Use web search for current facts. Collect 15-30 facts that fit the format: for a story (who, when, the turning point, the numbers, the ending), an explainer (the parts, the steps, a surprising number, a common myth), a what-if (the real baseline, what depends on it, 3-5 ripple effects backed by facts), a list (one strong fact + one number per entry, ranked by a stated rule), a versus (the same 4-6 measures for both sides), a timeline (8-12 dated milestones). Write the sources into `script.json` `"sources"`.

## 3. Script (the shape depends on the format)
Always: a **hook** in the first 20 s (the most surprising fact or number + a question), a chapter beat every 60-90 s (a new place, a time jump, a new question; typed black card with a 2-4 word title), and an **ending** with one punchy line + a soft CTA.
- **True story:** hook → setup (who, when, where) → rise → twist (black card question) → fall or win, with numbers → why it happened (3 points) → ending.
- **Explainer:** hook → "what it is" in one picture → how it works in 3-5 numbered steps ("STEP 1...") → the surprising part / myth busted → why it matters to you → ending.
- **What if:** hook → the real world today (baseline, sourced) → the change happens → ripple 1, 2, 3... (each with a real fact behind it, escalating) → the world after (a "today" scene in the changed world) → what it teaches us → ending.
- **Top list:** hook (tease number 1) → the rule of the ranking → entries counting DOWN, each: name card + one picture + one number + one surprising fact → honourable mention → number 1 → ending.
- **Versus:** hook → meet A, meet B → rounds (size, speed, strength, cost...) with a score badge → the twist (where the loser wins) → the verdict with its condition → ending.
- **Timeline:** hook (today's version) → the first one → milestones with the calendar device → the breakthrough → today → what's next → ending.
Voice rules: talk like a person telling a friend, short flowing sentences, numbers spelled as said ("two hundred miles an hour"), one idea per line. A **line = one cut** (3-5 s of speech). A 10 minute video is about 130-180 lines.
Write `script.json`: `{"title":..., "format":..., "sources":[...], "lines":[{"text":"..."}, ...]}`.

## 4. Plan: the diorama plan, ONE screen
Every line gets its own diorama (STYLE.md sections 1-2 and the device library in section 8): ask *what physical object or place is this sentence?* For each line write one row: `line | device | set + time | characters/creatures (who, mood, pose, walk) | props + text/number layers | camera + mood colour`.
Budget for 10 min (about 150 lines): 8-14 different sets (re-used at most 3 times in a row with a different camera/time/light), 3-10 cast members or creatures, ~40 typed black cards, 1-3 recurring devices that fit the format (list: a big round number badge counting down; versus: a two-colour score bar; timeline: the flipping calendar; explainer: "STEP n" badge; story: balloon + stopwatch; what-if: a "REAL WORLD / WHAT IF" split triptych).
Show: title · format · numbered narration · cast (name + look) · sets used · the diorama rows grouped in chapters · **"Will be drawn new"** (each missing set/creature/prop, and whether it goes into the shared library or this project only) · sources. End with **"Build it, or what should change?"** and wait for yes.

## 5. Build in code (default)
1. `python SKILL/scripts/new_video.py <name>` makes `~/anyvideo-videos/<name>/`.
2. **Draw what's missing first** (LIBRARY.md section 5): reusable things into `SKILL/library/<topic>.js` (e.g. `library/insects.js`, `library/vehicles.js`), project-only things into the project's `custom.js` with `"library":["custom.js"]` in `timeline.json`. Start new animals from the closest preset (`{"base":"dog",...}`). Render ONE test frame of each new thing inside a real set, look at it, fix it, then add its line to `style/LIBRARY.md`. Tell the user in one line what was added to the library ("Added to the library: shark, turtle, jellyfish").
3. Put people in `timeline.json` `"cast"` (V2-CODE.md section 1) and animals in `"chars"` with `"creature"` (LIBRARY.md section 3). Give every shot `"set":{"kind":..., "time":...}`.
4. Render ONE frame per set/hero combination before building all shots: `python SKILL/engine/render.py timeline.json --draft --shots 1-2 --out <abs path>.mp4` then `ffmpeg -ss 1 -i x.mp4 -frames:v 1 f.png` and LOOK at it. Characters and creatures stand ON the floor line, are lit by the set (day sets are bright; at night put them near a light), never float, never a centred sticker; props that belong in the scene use `"z":"under"`.

## 5B. OPTIONAL: painted plates from Google Flow (only if the user asks for them; otherwise skip to section 6)
In a shot, `"bg":"plates/x.jpg"` replaces `"set"`. Flow images and code puppets can be mixed, but then add night/tint yourself: the code sets are lit as one picture, the plates are not.

Order: plates first (they set the look), then hero sheets drawn IN THE SAME STYLE as the plates (same outline weight, same palette, same texture: see flow-prompts.md "Match the plates"), then props on green.
1. `python SKILL/scripts/new_video.py <name>` makes `~/anyvideo-videos/<name>/` (folders plates/ sheets/ sprites/ audio/ renders/ review/, project.json).
2. Write `prompts_plates.txt`, `prompts_props.txt` and `prompts_sheets.txt`, one line each: `name | full prompt`. Use ONLY the templates in `style/flow-prompts.md` (plate style block verbatim; the hero description word for word on every sheet).
3. **Default: the built-in browser pane, no scripts, no debug port, no manual saving.** (Verified live: 3 prompts queued in ~8 s, 4 images downloaded in 0.65 s.) Load the browser tools, open the user's Flow project in the built-in browser (the user signs in themselves; never type or read passwords). Check once with a screenshot that the model is Nano Banana 2.1, 16:9, x1.
   **Send prompts in one `browser_batch`**, three steps per prompt: (a) `javascript_tool`: `const b=document.querySelector('[role="textbox"]');b.focus();document.execCommand('selectAll');document.execCommand('insertText',false,PROMPT);1` (b) `computer` key `Return` (a real key press; a JS `.click()` on the send button does NOT submit) (c) `computer` wait 2. **Max 4 prompts per batch** (Flow runs at most 4 at once, user-confirmed): send 4, wait until all 4 tiles finish (no percentage left), collect and download them, then send the next 4. Within a batch no waiting between prompts. Do NOT use click+type for the 2nd+ prompt (the box is busy after Return and the text gets lost: tested, it fails). Fresh screenshot before any coordinate click; never reuse old coordinates.
   **Collect in one go**: wait until no tile shows a percentage, then with `javascript_tool` return `JSON.stringify([...document.querySelectorAll('img')].filter(i=>i.naturalWidth>800).slice(0,N).map(i=>i.src))` (N = prompts sent; newest first, so reverse the list to get submission order). Download all with parallel `curl -s -o plates/<name>.jpg "<url>" &` then `wait` (signed links, valid for hours, 1376x768). Open every file and check it matches its prompt (names come from order; reject a mismatch). Resume = skip names already saved. **If Flow shows a red card "We noticed some unusual activity. Please wait a few moments" (seen once, on two long thumbnail prompts sent 2 s apart): stop sending, do not retry in a loop, tell the user, wait a few minutes, then retry ONE prompt and use longer gaps (5-10 s) between prompts. Failed cards are not charged.** If a step fails twice, say so and use manual mode.
   **Script alternative** (for agents without a browser pane, e.g. OpenCode): `python SKILL/scripts/start_chrome.py` opens the user's Chrome with a debug port on Flow; the user signs in and gives the project URL; then `python SKILL/scripts/flow_bulk.py --project <url> --prompts prompts_plates.txt --out plates` (same for sheets/props). It resumes and stops with exit 2 (limit), 3 (no image), 4 (no Chrome). Flow has no generation limit for this user, so the pacing gaps may be shortened (`--min-gap 3 --max-gap 6`) if Flow keeps up; this is not tested.
4. **Manual mode** (fallback if auto fails twice, or the user prefers): give the user the prompts file; they generate, download and save images as `plates/<name>.jpg` and `sheets/<name>.jpg`. Wait, then continue.
5. Look at EVERY generated image (open it). Reject and regenerate (new line in a retry prompts file): hero in a clearly different drawing style than the plates, people or writing in a plate, a hero with a different face, hero not on pure green, hands cut off, mouth open in the "closed" half. A plate must be empty in the lower middle.
6. Key the sheets: `python SKILL/scripts/key_sprites.py sheets/boss_cheer.jpg boss_cheer --project .` (add `--no-mouth` for single props/extras; props and sheets both). Look at the result on a dark and a light background; green fringe = regenerate.

## 6. Voiceover and timing
### 6A. Own recording
- Give the user the script (numbered lines) to record. They send one audio file; copy it to `audio/voiceover.mp3` (wav/m4a also fine).
### 6B. Generated voice (needs `setup.py --voice` once)
1. Write `audio/lines.json`: `{"lexicon":{"Lustig":"Loo stick"},"lines":[{"id":"s01","text":"...","voice":"narrator"}]}` (voices: narrator, man, woman, boy, old, villain; write numbers as words; the lexicon respells names the way they should sound).
2. `python SKILL/scripts/tts.py say audio/lines.json audio --model ~/.robbiskill/models/kokoro-multi-lang-v1_0` makes one wav per line, `voice.wav` and `timings.json` (exact start/end of each line: use them as shot lengths).
3. **Listen back with speech recognition:** `python SKILL/scripts/tts.py check audio audio/lines.json --asr ~/.robbiskill/models/sherpa-onnx-nemo-parakeet-tdt-0.6b-v2-int8`. Every `FIX` line is a word the voice swallowed or mangled (a name, a number). Respell it in the lexicon, say again, check again until it prints "all lines clear". Names the recognizer cannot spell may need your own judgment: say so to the user. Set `"audio":"audio/voice.wav"` in timeline.json.
4. Tell the user honestly that this is a synthetic voice; a human recording is better if they have one.
### Timing and timeline
- Write `timeline.json` from the diorama rows: one shot per 1-2 lines (`"lines":[a,b]`), `"duration"` can be a guess. Layers, cam, grade, tin/tout as in STYLE.md section 5-6; other shot types (numbers, chart, market, linechart, triptych, card) in section 7.
- **Characters must sit in the scene** (STYLE.md section 10): scale 0.75-0.95 (0.5-0.7 in wide shots), feet on the floor line, off-centre, doing something with a prop (`attach`, `path`, `swap`), never a big centred sticker. The engine already tints heroes/props to the shot's light and adds contact shadows; set `"light":{"color":..., "amount":..., "rim":...}` per shot to tune, `"horizon"` on plates with perspective.
- `python SKILL/scripts/align.py .` fits every shot to the voice (cuts on pauses, mouth open on speech). Re-run after any timeline edit that changes lines.
- `python SKILL/scripts/check_timeline.py .` must print **CHECK OK**: it validates files, layers, overlaps, numbers, and prints pacing (cuts/min, median shot) and motion-density warnings (aim 12-21 cuts/min, 4+ moving things per shot). Fix everything it lists.
- `python SKILL/scripts/mix.py . --music dark` builds the whole soundtrack: generated music (`dark` = moody night bass+pad+arpeggio, `drive` = faster with beat, `calm`; or a path to the user's own track), sound effects from the shots (whoosh on cuts, stamp hits, coins, calendar flips, text pops, counters, character entrances), smooth side-chain ducking under the voice, and the final loudness set to -14 LUFS with a -1.5 dB peak limit. Pick the mood from the story: mystery, danger, crime, collapse = dark; sport, speed, races, big wins = drive; nature, science, kids, explainers = calm.

## 7. Draft, QA, final
1. Draft in chunks: `python SKILL/engine/render.py timeline.json --draft --shots 1-30 --out renders/draft_a.mp4`, then the next 30 and so on (the per-shot cache means re-renders only redo what changed). A full 10-minute render takes roughly 35-50 minutes on a small machine (about 0.12 s per frame): tell the user the estimate and run it in the background (`render.py` uses all CPUs by itself).
2. QA: `python SKILL/scripts/sheet.py renders/draft_a.mp4 review/a` and READ every sheet. For every frame check STYLE.md section 9 and: does the picture match the line spoken at that time, are numbers identical to the script, nothing overlapping, hero feet on the floor and lit like the plate (not pasted on), no more than 3 people-shots in a row, cards readable, mouth moves with speech. Fix, re-render only changed shots, re-check. Tell the user what you caught and fixed in one or two lines.
3. **Compare with a reference** (do this once the first draft looks fine, before the final render): ask the user ONE question, "Send me one frame or clip of the style you want to match, or say 'skip'." With a reference: put its frame next to the nearest frame of ours (`sheet.py` or a side-by-side with ffmpeg), list the differences in plain words (outline thickness, head size, face, lighting depth, colour mood, movement snap, shot length), fix the biggest 3-4 in the cast spec / set lights / timeline, re-render those shots, show the new pair. Never copy the reference's characters or frames: match the general style only.
4. Final: `python SKILL/engine/render.py timeline.json --out renders/<name>.mp4` (1080p, 30 fps). Send the MP4 to the user (SendUserFile, or tell where it is saved). Check the final loudness with `ffmpeg -i x.mp4 -af ebur128 -f null -`: it must be about -14 LUFS (-15 to -13 is fine); if not, re-run mix.py.

## 8. YouTube package (write `package.md` in the project and show it)
- 3 titles (curiosity + a number or a clear question, under 70 characters, no clickbait lies) and which one you'd pick.
- Description: 2-3 sentence hook, chapters with timestamps (from `data/lines.json`), sources list (the URLs), the advice disclaimer for health/money/law topics, CTA line, 5-8 hashtags.
- ONE thumbnail only (never two, never an A/B variant): one huge character or creature face (shock/grin/roar, `s` 2.2-3) on a bright set or flat colour, one glowing object, a number, 2-4 big words in `brush` with a thick outline. Draw it in the engine: a 1-shot `thumb/timeline.json`, render with `render.py ... --out <abs>.mp4` (no `--draft` for 1920x1080) and grab frame 1 with ffmpeg. Look at it, fix, show it and ask if it is good or what to change.
- Notes: label as AI-assisted if the platform asks for it; "Made for kids" if it is for children.

## Resume
`project.json` stores the stage and settings. If a project folder exists, read it, say where you are ("shots 60/150 rendered") and continue, never overwrite the user's files without asking. Library files are shared by all videos: add to them, never change how an existing drawing looks.

## Honest limits (say them when relevant)
The generated voice is synthetic and English only. Long renders are slow on small machines (tell the estimate: about 0.12 s per frame on 2 CPUs, so 35-50 minutes for 10 minutes of video). New things are drawn as simple flat cartoons; very detailed or realistic subjects (a specific car model, a real stadium, a real person's exact face) become friendly cartoon versions. The engine does not produce photos, 3D, or footage. Shorts (9:16) are not built in.

## Never
Copy another creator's or a film's script, characters, shots or frames · draw protected characters, mascots or brand logos · show gore or mock victims · write a how-to for crimes or dangerous acts · enter or read passwords, tokens or payment data · spend the user's money or credits · publish or upload for the user without a clear yes · state a fact without a source · ship a frame you haven't looked at · hide a failed step (say it and fix it).
