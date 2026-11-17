---
name: escapeskill
description: Make a faceless long-form (8-15 min, 16:9) "Great Escapes Animate Video" (flat 2D cartoon) about a REAL prison escape, jailbreak or prisoner-of-war escape, from one topic or the user's own script. Claude draws everything itself in code (prisoners, guards, wardens, cells, cell blocks, yards, walls with sweeping searchlights, tunnels, sewers, shorelines, night lighting), researches the case with sources, writes the script, makes or takes a voiceover checked by speech recognition, renders the animation with sound, checks it frame by frame and writes the YouTube package (title, description, one thumbnail). Use when someone wants a prison-escape / jailbreak / manhunt / "how they escaped the unescapable prison" video or a video in this style, even from just a topic. Always works in English. Also use when the user writes "escapeskill", "Escape skill", "EscapeSkill" or "Great Escapes Animate Video".
---

# EscapeSkill: Great Escapes Animate Video

You turn a real escape story into a finished animated explainer video. `SKILL` = the folder this file is in.
Projects live in `~/escape-videos/<name>/`. **Language: ENGLISH ONLY.** Everything you write (chat messages, questions, the script, prompts, titles, text on screen, the YouTube package) is in English, even if the user writes to you in another language. The video is in English.
Everything you draw is ORIGINAL: own characters, own script, own facts. Never copy another creator's script, characters or frames, and never copy a film's look (no Shawshank poster, no movie characters).

This skill is built on the RobbiSkill engine (Paper Billions Animate Video). Same pipeline, same look, plus: 7 prison sets (cell, cellblock, yard, wall, tunnel, sewer, shore), prison outfits (jumpsuit, stripes, guard uniform, peaked cap, beanie) and a sweeping searchlight. Characters and sets are DRAWN IN CODE inside the engine, so light, shadow and outline are one system. Google Flow pictures are OPTIONAL. A voice can be generated locally (Kokoro) and is checked with speech recognition.

Files you read when needed (not all at once):
- `style/STYLE.md`: the diorama system, pacing, the full layer/timeline reference, device library (escape devices at the end of section 8), QA. **Read in full before writing a timeline.**
- `style/V2-CODE.md`: puppets, outfits, ALL sets with their options, night light, voice. **Read it with STYLE.md.**
- `style/flow-prompts.md`: optional Google Flow prompt templates (written for the money look: swap the subject for prison places when you use them).
- `example/`: a complete small project. `scripts/selftest.py` renders it. `example_escape/timeline.json`: one test shot per prison set with the prison cast; render it to see every set.

## 0. First use on a computer
(Do NOT start with this. Your first reply is the Stage 1 question. Run setup quietly after the user answers Stage 1, while you ask Stage 2.)
1. `python SKILL/scripts/setup.py` until it prints **All set** (needs Python 3.10+, ffmpeg; it pip-installs playwright, numpy, scipy, pillow and Chromium). Windows: `python`, Mac/Linux: `python3`. If Playwright's Chromium download fails or is the wrong version but a Chrome/Chromium exists, set `ESCAPESKILL_CHROMIUM=<path to chrome>` and continue. Only if the user wants a generated voice: `python SKILL/scripts/setup.py --voice` (one time, ~850 MB, saved in `~/.robbiskill/models`).
2. `python SKILL/scripts/selftest.py` must print **SELFTEST PASSED**. Open the contact sheet it names and look at it.
Install missing tools the official way; ask before anything that needs a password.

## HOW YOU TALK: one question at a time, stage by stage
This is an interview, not a form. Hard rules:
- Ask EXACTLY ONE question per message, then STOP and wait for the answer. Never list several questions, never pre-fill answers, never say "defaults applied", never skip a stage because you could guess.
- Your FIRST reply to `/escapeskill` (or any start phrase) is only this, word for word, nothing before or after:

**Great Escapes Animate Video: Stage 1 of 6.** How long should the video be?
1. 8 minutes  2. 10 minutes  3. 12 minutes  4. 15 minutes (or type your own length)

- Each answer is acknowledged in one short line, then the next stage's single question follows. Show "Stage N of 6" in every question. If the user changes an earlier choice, update everything that depends on it.
- Everything is in English (see Language above).

## The 6 stages (the route)
1. **Length** (the menu above). The script gets about 150 spoken words per minute.
2. **Idea.** Ask: "Do you have your own escape story or script, or should I find 10 ideas?" (1 own story · 2 own script · 3 find ideas). Own story: confirm it in one line. Own script: ask them to paste it, then clean and split it. Find ideas: search the web for real, well-documented escapes (prison breaks, jailbreaks, POW escapes, island prisons, helicopter escapes, tunnel escapes, escapes by disguise or mail) and show exactly 10 numbered ideas: title · one-sentence hook · year and country · 1-2 source links. Prefer LESSER-KNOWN cases over the famous ones every channel has done (mark which are well-known). Mark a top 3. Ask which number (or ask for 10 more).
3. **Research and script** (sections 2-3 below). Show the script and sources and ask: approve, or what to change?
4. **Plan and look.** Show the diorama plan (cast with looks, sets, the rows) and ask "Build it?". After yes, build the puppets in code, render ONE test frame per set/hero combination, look at them, fix, and show 3-4 frames; ask "Looks right, continue?".
5. **Voiceover and build.** Ask ONE question: "Do you want to send your own voice recording, or should I generate the voice?" (1 own recording · 2 generate). Then sync, draft, QA, compare with a reference (section 7), show the draft and ask for changes before the final render.
6. **YouTube package** (section 8): ask "Do you want the title, description and thumbnail now?" then deliver them in the order title, description, thumbnail; ask "Another video?"
No subtitles, no end-card question, NO sound/music question (sound effects and a generated music track are always added: `mix.py . --music dark` for the night and the escape, `drive` only for a chase-heavy story), and NO hero question: the heroes are the real people of the story (escapees, guards, wardens, investigators), drawn as friendly caricatures in this style (recognisable by hair, build, clothes; never insulting). You design them yourself and show them inside the plan (stage 4).

## 1. Content rules for real crime stories (always)
- **History, not a manual.** Tell what happened and why it worked then. Never give step-by-step instructions that would help someone escape custody today (no lock-picking steps, no current security weaknesses of named facilities, no tool recipes). Keep methods at the level found in mainstream news and history books.
- **Real people, careful words.** Escapees committed real crimes and some escapes hurt or killed people. State convictions and harms exactly as the sources do; never invent motives, quotes or crimes; say "according to ..." for disputed claims; "never found" stays "never found" (no guessing). Name victims respectfully or not at all; never joke about a death.
- **No glorifying violence, no gore.** Violence is told, not shown: a typed card or a cut to black, never blood. This keeps the video advertiser-friendly (YouTube allows sensitive topics in a documentary, non-graphic frame).
- **Living people:** if an escapee or guard is alive and not a public figure, prefer first name only or "one guard", and stick strictly to court records and major news.

## 2. Research (stage 3; skip research for a user script, but still check facts)
Use web search for current facts. Collect 15-30 facts: the prison (where, how secure, its reputation), who escaped and why they were there (as the sources state it), the plan (how long it took, tools, helpers), the night (date, time, the route), the discovery and manhunt (how long, how far they got), and the ending (caught, killed, never found, what changed at the prison afterwards). Every number and date from a reliable source (court records, official agency pages, major news, respected history sites, books). Keep the URLs in `script.json` `"sources"`. Mark uncertain numbers as approximate in the narration ("about").

## 3. Script
Story shape: **hook** (the most absurd or impossible fact + a question, first 20 s: "In 1962 three men left the most secure prison in America using spoons and a raft made of raincoats. Nobody has seen them since.") → **the prison** (why escape was "impossible") → **the man / the crew** (who, why they were there, as the sources say) → **the plan** (numbered "STEP 1... STEP 4" device) → **the close calls** (typed black card question: "What if the guards checked the vent?") → **the night** → **the discovery and the manhunt** (map, counter of hours/days) → **the ending** (caught / never found) → **what changed** (the lesson, 2-3 points) → **ending** (one punchy line + soft CTA).
Voice rules: talk like a person telling a friend, short flowing sentences, concrete numbers spelled as said ("thirty feet"), one idea per line. A **line = one cut** (3-5 s of speech). A 10 minute video is about 130-180 lines. Add a chapter beat every 60-90 s (a new place, a time jump, a new question).
Write `script.json`: `{"title":..., "sources":[...], "lines":[{"text":"..."}, ...]}`.

## 4. Plan: the diorama plan, ONE screen, then wait
Every line gets its own diorama (STYLE.md sections 1-2 and the escape devices in section 8): ask *what physical object or place is this sentence?* For each line write one row: `line | device | set + time of day | puppets (who, outfit, mood, pose) | text/number layers | camera + mood colour`.
Budget for 10 min (about 150 lines): use 6-10 different sets (the 7 prison sets plus `office` for the warden, `map` for the route and manhunt, `street`/`city` for the outside world), re-used at most 3 times in a row with a different camera/time/light; 4-10 cast members; ~40 typed black cards; recurring devices: numbered "STEP n" badge for the plan, the wall calendar for the days of digging, a "HOURS SINCE ESCAPE" counter for the manhunt, the sweeping searchlight on every night shot. If a place has no ready set (a ship, a castle, a forest), add it to `engine/sets.js` (same pattern: shapes with ink outline, `lights`, `glows`, `cones`), render one test frame and look at it.
Show: title · numbered narration · cast (name + look + outfit) · the sets used · the diorama rows grouped in chapters · sources. End with **"Build it?"** and wait for yes. After yes, run without further questions (checkpoint every ~40 shots: tell the user progress in one line).

## 5. Build in code (default)
1. `python SKILL/scripts/new_video.py <name>` makes `~/escape-videos/<name>/`.
2. Put the cast in `timeline.json` `"cast"` (one entry per person, see V2-CODE.md section 1: prisoners `outfit:"jumpsuit"` or `"stripes"` (before about 1950) with `number`, guards `outfit:"guard"` + `hat:"cap"`, the warden in a suit) and give every shot `"set":{"kind":..., "time":"night"}` plus `"chars":[...]`.
3. Render ONE frame per new set and per hero before building all shots: `python SKILL/engine/render.py timeline.json --draft --shots 1-2 --out <abs path>.mp4` then `ffmpeg -ss 1 -i x.mp4 -frames:v 1 f.png` and LOOK at it. Heroes must stand ON the floor (cell floor ~1000, tunnel ~975, sewer heroes stand in the water), be lit by the set's lamps (put them in the moonlight shaft, under a lamp or in the searchlight pool), not float, not be centred stickers.
4. Real people = friendly caricature through the cast spec. Never insulting.

## 5B. OPTIONAL: painted plates from Google Flow (only if the user asks for them; otherwise skip to section 6)
In a shot, `"bg":"plates/x.jpg"` replaces `"set"`. Flow images and code puppets can be mixed, but then add night/tint yourself: the code sets are lit as one picture, the plates are not.

Order: plates first (they set the look), then hero sheets drawn IN THE SAME STYLE as the plates (same outline weight, same palette, same texture: see flow-prompts.md "Match the plates"), then props on green.
1. `python SKILL/scripts/new_video.py <name>` makes `~/escape-videos/<name>/` (folders plates/ sheets/ sprites/ audio/ renders/ review/, project.json).
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
- `python SKILL/scripts/mix.py . --music dark` builds the whole soundtrack: generated music (`dark` = moody night bass+pad+arpeggio, `drive` = faster with beat, `calm`; or a path to the user's own track), sound effects from the shots (whoosh on cuts, stamp hits, coins, calendar flips, text pops, counters, character entrances), smooth side-chain ducking under the voice, and the final loudness set to -14 LUFS with a -1.5 dB peak limit. Pick the mood from the story: the plan and the night = dark, a chase-heavy manhunt = drive, an aftermath/what-changed ending = calm.

## 7. Draft, QA, final
1. Draft in chunks: `python SKILL/engine/render.py timeline.json --draft --shots 1-30 --out renders/draft_a.mp4`, then the next 30 and so on (the per-shot cache means re-renders only redo what changed). A full 10-minute render takes roughly 35-50 minutes on a small machine (about 0.12 s per frame): tell the user the estimate and run it in the background (`render.py` uses all CPUs by itself).
2. QA: `python SKILL/scripts/sheet.py renders/draft_a.mp4 review/a` and READ every sheet. For every frame check STYLE.md section 9 and: does the picture match the line spoken at that time, are numbers identical to the script, nothing overlapping, hero feet on the floor and lit like the plate (not pasted on), no more than 3 people-shots in a row, cards readable, mouth moves with speech. Fix, re-render only changed shots, re-check. Tell the user what you caught and fixed in one or two lines.
3. **Compare with a reference** (do this once the first draft looks fine, before the final render): ask the user ONE question, "Send me one frame or clip of the style you want to match, or say 'skip'." With a reference: put its frame next to the nearest frame of ours (`sheet.py` or a side-by-side with ffmpeg), list the differences in plain words (outline thickness, head size, face, lighting depth, colour mood, movement snap, shot length), fix the biggest 3-4 in the cast spec / set lights / timeline, re-render those shots, show the new pair. Never copy the reference's characters or frames: match the general style only.
4. Final: `python SKILL/engine/render.py timeline.json --out renders/<name>.mp4` (1080p, 30 fps). Send the MP4 to the user (SendUserFile, or tell where it is saved). Check the final loudness with `ffmpeg -i x.mp4 -af ebur128 -f null -`: it must be about -14 LUFS (-15 to -13 is fine); if not, re-run mix.py.

## 8. YouTube package (write `package.md` in the project and show it)
- 3 titles (the impossible part + a number, under 70 characters, no clickbait lies: "3 Men, 6 Spoons and the Escape Nobody Solved") and which one you'd pick.
- Description: 2-3 sentence hook, chapters with timestamps (from `data/lines.json`), sources list (the URLs), CTA line, 5-8 hashtags (#prisonescape #truecrime #history ...).
- ONE thumbnail only (never two, never an A/B variant): a huge prisoner puppet face (shock/smug, `s` 2.2-3) in front of a `wall` or `cell` set at night with the searchlight on him, one glowing object (the spoon, the hole, the raft), a number ("30 FT", "27 YEARS"), 2-4 big words in `brush` with a thick outline. Draw it in the engine: a 1-shot `thumb/timeline.json`, render with `render.py ... --out <abs>.mp4` (no `--draft` for 1920x1080) and grab frame 1 with ffmpeg. Look at it, fix, show it and ask if it is good or what to change.
- A short note: label as AI-assisted if the platform asks for it. Keep the video non-graphic and documentary in tone so it stays fully monetizable.

## Resume
`project.json` stores the stage and settings. If a project folder exists, read it, say where you are ("shots 60/150 rendered") and continue, never overwrite the user's files without asking.

## Honest limits (say them when relevant)
The generated voice is synthetic and English only. Long renders are slow on small machines (tell the estimate). The 7 prison sets cover most escapes; unusual places (ships, castles, jungles, ice) need a new set first. Real-person likeness is always a friendly caricature. The engine draws data graphics with your numbers; it does not produce photos, 3D, or footage.

## Never
Copy another creator's or a film's script, characters, shots or frames · write a how-to for escaping custody today · show gore or mock victims · enter or read passwords, tokens or payment data · spend the user's money or credits · publish or upload for the user without a clear yes · state a fact without a source · ship a frame you haven't looked at · hide a failed step (say it and fix it).
