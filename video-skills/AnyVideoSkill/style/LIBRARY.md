# LIBRARY: everything the engine can already draw

Check this list before planning a video. Anything a topic needs that is NOT here gets drawn once in code and saved (section 5), then added to this file, so the library keeps growing.
All coordinates are 1920x1080. Characters and props stand with their bottom centre at (x, y); the floor line of most sets is y 1000-1010.

## 1. Sets (backgrounds): `"set":{"kind":"<name>", ...}`
`time`: `day` (no darkening), `dusk`, `night`, `red` (crisis). Nature/sport sets default to `day`; interiors light themselves.

| group | kind | options |
|---|---|---|
| general | `plain` | `color` (flat backdrop + floor; `floor:false` for none). Good for explainers, lists, comparisons |
| general | `city`, `street`, `living`, `stage`, `classroom` | city `landmark:"tower"/"skyscraper"`; street `sign`; living/stage `screen` colour; classroom `board:"TEXT"` |
| money / business | `office`, `boardroom`, `trading` (`mood:"red"/"green"`), `vault`, `server`, `capitol`, `map` (`cities:[[x,y]]`) | from Paper Billions |
| prison / crime | `cell` (`hole`, `lamp`, `tally`), `cellblock` (`block`), `yard`, `wall` (sweeping searchlight `sweep`, `rope`), `tunnel` (`end`, `lampX`), `sewer` (`grateX`), `shore` (`raft`) | from EscapeSkill |
| nature | `forest`, `savanna`, `jungle`, `desert`, `mountains`, `beach`, `ocean` (underwater), `farm`, `prehistoric` (volcano, ferns) | `time` |
| science / space | `lab`, `space` (`ground:true` moon surface, `planet:false`, `planetColor`) | |
| sport / vehicles | `stadium` (`sport:"soccer"/"football"/"basketball"/"track"`, `team` colour), `racetrack` (`finish:false`), `garage` | |

## 2. People: `"chars":[{"puppet":"<cast key>", ...}]`
Cast spec: `skin suit shirt tie bowtie dress hair(bald|slick|short|curly|bob|long|bun|grey) hair_col glasses moustache beard hat(true|"cap"|"beanie") hat_col outfit("jumpsuit"|"stripes"|"guard") number`.
In a shot: `x y s face mood(neutral happy grin shock panic worry smug sad angry sleep think laugh) pose(idle walk cheer panic clap think point present gesture shrug facepalm hip pocket hold wave push type) talk enter flip cut`.
Jobs by clothes: athlete = `outfit:"jumpsuit"` in team colour + `number`; scientist/doctor = white `suit` + glasses; chef/farmer/explorer = suit colour + `hat`.

## 3. Animals and dinosaurs: `"chars":[{"creature":"<name>", ...}]`
Presets: **pets/wild** `dog wolf fox cat lion tiger bear rabbit elephant` · **farm** `cow pig goat sheep horse chicken rooster duck` · **dinosaurs** `trex raptor stegosaurus triceratops brachiosaurus` · library/project files add more (e.g. `dalmatian`, `penguin` in example_any/custom.js).
In a shot: `x y s flip mood(neutral happy grin shock scared angry roar sad sleep laugh) walk(true = legs move) walkSpeed talk headTilt enter`.
New animal = a spec that starts from the closest preset: `{"base":"dog","color":"#333","ears":"pointy","tail":"fluffy"}`. Spec fields:
- `plan`: `quad` (4 legs) · `biped` (2 legs, big jaws: theropods) · `bird`
- body: `color belly bodyL bodyH legH legW legCol neckL neckA(deg) neckW head(colour)`
- head: `headW headH snoutL snoutH snout:"disk"(pig) muzzle nose ears(pointy|floppy|round|side|long|fan|none) earIn horns(cow|goat|rhino|tri) frill beakNose trunk tusks beard mane(colour or "neck") maneCol whiskers teeth`
- tail: `tail(thin|up|tuft|fluffy|hair|curly|stub|long|fan) tailCol tailTip tuftCol tailL spikes`
- skin: `pattern(stripes|spots|patches) patCol plates(colour) wool foot(paw|hoof|claw|round)`
- bird: `wing beak beakL comb legCol`

## 4. Props: `"layers":[{"kind":"prop","prop":"<name>","x":..,"y":..,"s":..,"z":"under"}]`
`z:"under"` puts the prop inside the scene (lit and darkened with it); without it the prop floats above the lighting like a graphic. Props move with the normal layer tools (`kf`, `in`, `loop`, `attach`).

| prop | options |
|---|---|
| `car` | `type: sedan|sports|truck|race`, `color`, `number` (race), `spin` (wheel turns per second) |
| `tree`, `pine`, `palm`, `bush`, `flower`, `plant` | `color`; bush `berries`; flower `h`; plant `grow` 0-1, `growAt`, `growDur` (grows on screen), `bloom` colour |
| `rock`, `cloud`, `sun`, `planet` | rock/cloud `color`; planet `r color ring` |
| `ball` | `type: soccer|basket|football|tennis`, `r`, `spin` |
| `trophy`, `sign`, `house` | trophy `text`; sign `text color`; house `color roof` |
| `egg`, `bone`, `fossil` | egg `spots crack crackAt`; bone `rot2` |
| `rocket`, `globe`, `microscope`, `flask` | flask `color` (bubbles) |
| `fish` | `color` (tail swims) |
| library `sea_life.js`: `shark` (`open`, `angry`), `turtle`, `jellyfish` | `color` |

Plus all the money/story graphics in STYLE.md section 5 (`text`, counters, `stamp`, `doc`, `calendar`, `pin`, `poly` arrows, `bars`, `cash`, `fire`, `balloon`, `stopwatch`, `ekg`, black `card` shots, charts).

## 5. Adding something new (the library grows)
1. Decide where it belongs: useful for other videos -> a file in `SKILL/library/<topic>.js` (e.g. `library/vehicles.js`, `library/insects.js`); only this video -> the project's `custom.js`, listed in `timeline.json` as `"library":["custom.js"]`.
2. Write it in the same style: `INK` outlines (5-6 px), flat colours, one highlight at most, no gradients on characters. Helpers: `sR sC sP sL sT` (sets.js), `pFill eFill wLine wPath crEye shd` (world.js).
   - a set: `Object.assign(SETS,{name(o){...return {svg, floorY, lights, glows, cones}}})`; call `skyT(o)` for an outdoor sky, `hills()`, `grassTufts()`, and use existing PROPS inside it.
   - an animal: `Object.assign(CREATURES,{name:{base:"closest preset", ...changes}})` first; only if no plan fits, add a drawing function as a prop.
   - a prop: `Object.assign(PROPS,{name(l,t){ return svg }})`, origin = bottom centre, facing right, `t` for motion.
3. Render ONE test frame with it in a real set and look at it; fix until it matches the style.
4. Add one line for it to this file (section 1, 3 or 4). Never delete or change an existing entry's look: old videos depend on it.
