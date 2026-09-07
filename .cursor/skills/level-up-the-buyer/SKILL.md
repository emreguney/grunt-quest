---
name: level-up-the-buyer
description: Orchestrate a studio production pass on THE BUYER (formerly GRUNT QUEST). Use when asked to level up the game, next level, polish THE BUYER, or studio pass. Spawns domain subagents. Does not implement art, feel, play, copy, or ship itself.
---

# Level up THE BUYER

You are the producer. You do not paint, write copy, juice, retune mechanics, or QA. You Discover, Define, spawn five Task subagents, then run a restraint pass on what they return.

Game: `/workspace/index.html` (single file, no build). Method: `/workspace/PROMPT.md`. Index: `/workspace/agents/README.md`.

## Hard constraints

These override taste, seeds, and subagent ideas.

- One HTML file. No bundler, no npm build, no extra runtime files the game needs.
- Screen is 256x240, scaled to the viewport, letterboxed. `image-rendering: pixelated`.
- Palette lock (see `level-up-art`). No new hues. No near-black playfield. No neon. No gradients.
- Fonts: Press Start 2P (UI), Pixelify Sans (dialogue/body). Google Fonts link plus fallback only.
- Leon Abboud article examples are primary copy. Credit the author on title and result.
- No em dashes anywhere in player-facing copy.
- Clear language, not clever.
- The buyer is the judge. Not a caveman. No Ugg, tribe, or caveman world.
- Playtime about seven minutes. Vehicle still last.
- Keyboard, mouse, and touch. Visible focus. Mute on `M`.

## Do not

- Edit `index.html` except during the final restraint pass (cuts only) or to unstick a merge the subagent left broken.
- Spawn two domain subagents that write `index.html` at the same time. One file, one lock.
- Re-derive the next moves. Round two of the critic already named them (PROMPT.md critic log). They are in-scope for this pass:
  1. Native-density hand pixel art (title + portraits). Generated art is not the ship.
  2. A full painted scene behind every stage. Sand tile plus a ground strip is not a scene.
  3. Terrain world map (shop street, not numbered nodes on a polyline).
  4. Cursor-driven menus (cursor sprite + frame). Keep touch hit targets. Do not drop confirm buttons that touch needs (Start, Next, Share, Try again).
- Restore clever ranks (jargon goblin, marketing god) or a clever tagline. Keep language plain.
- Add a build step, a framework, or a second runtime file.

## Process

Chimala via PROMPT.md: randomness in, critic sees pictures only, then remove things.

### 1. Discover

Parent work. No domain subagent yet.

1. Seed, in the shell, before any design talk:

```bash
python3 -c "import secrets; print(secrets.token_urlsafe(30))"
```

Write it to `agents/seed.txt`. Read 2-4 fragments the way PROMPT.md read `9FWUfqGRoM7QyDBAO85eI2FfdJcqjpcL6VkQ01Ho`. The seed may tint motif (weather, street props, time of day). It may not break hard constraints or the four next moves.

2. Serve `index.html`. Screenshot every distinct screen at the scaled handheld size: title, intro, map, each of the eight stages in play, attention-lost, result. Save under `agents/screenshots/discover/`.

3. Spawn a **critic** Task. Screenshots only. The critic must not open `index.html` or any `.js`. Prompt:

> You are scoring THE BUYER, a 1999 colour-handheld (256x240) educational pixel game. You receive screenshots only. Do not open code. Score out of 10 against a studio that would ship this aesthetic at Celeste / Shovel Knight craft, inside a Game Boy Color era (not arcade, not SNES, not dark neon). Say what a next production pass must change. The buyer is the judge. Do not invent systems you cannot see.

Write the return to `agents/critic.md`. Budget two critic rounds this pass (one now, one after Deliver).

### 2. Define

Parent writes `agents/define.md`. One change per screen. Not a mood board. Each line is a single shippable change.

Required rows (change the sentence, not the screen list):

| Screen | One change |
| title | Hand-pixel cartridge scene, title THE BUYER over open sky, buyer in frame, no extra chrome |
| intro | Buyer portrait + one job: you will be judged by a buyer |
| map | Shop-street terrain. Stages are storefronts along a road |
| The gap | Full alley/office scene behind the why ladder |
| Three doors | Full street wall. Three real shopfronts, not CSS cave mouths |
| The filter | Full scene. Brain is a picture in a place, not a HUD on sand |
| The buyer test | Full scene. Buyer portraits for idle / yes / no |
| The bridge | Full gorge or street-crossing scene. Buyer walker |
| The mechanism | Full workshop/studio scene |
| Positioning | Full two-customer scene (founder, bakery) |
| The vehicle | Locked shop street until stage 7. Tempting vehicle stall is a picture |
| Attention lost | Buyer turned away / scrolled past. No extra lecture |
| Result | Buyer portrait + method card. Share stays |

Also lock, in that file:

- Cursor-driven menus on map, options, and cards.
- One authored motion per screen (feel owns this; list the motion so feel does not invent a second).
- Article examples stay (copy owns the list).
- Playtime still ~7 minutes.

### 3. Deliver (spawn, do not implement)

Serial. After each return, `git add` / `git commit` so the next subagent starts from a clean tree. If a subagent fails, respawn that domain only.

**Spawn order (exclusive lock on `index.html`):**

1. **copy**: language lock before anyone draws or labels a caveman.
2. **art**: pixels and scenes. Copy is already buyer-voiced.
3. **play**: mechanics sit on the new scenes and words.
4. **feel**: juice, cursor, walker, sound, LCD restraint on finished screens.
5. **ship**: QA, scale, og, Pages, debug object, screenshots.

How to spawn each (Task tool, general-purpose coding subagent). Do not do their work in this process.

**1. copy**

- description: `THE BUYER copy lock`
- prompt: Read and execute `/workspace/.cursor/skills/level-up-copy/SKILL.md`. Read `agents/define.md` and `PROMPT.md`. You own every player-facing string in `/workspace/index.html`. No other domain. Stop after the copy checklist.

**2. art**

- description: `THE BUYER pixel art`
- prompt: Read and execute `/workspace/.cursor/skills/level-up-art/SKILL.md`. Read `agents/define.md`. You own `ART`, `SPR`, stage backdrops, title, portraits, map terrain in `/workspace/index.html`. Embed pixels in the HTML file. No build. Stop after the art checklist.

**3. play**

- description: `THE BUYER mechanics`
- prompt: Read and execute `/workspace/.cursor/skills/level-up-play/SKILL.md`. Read `agents/define.md`. You own flow, timers, hearts, gauges, fail/retry, onboarding. Do not rewrite art or copy except labels you must add for first-time clarity. Stop after the play checklist.

**4. feel**

- description: `THE BUYER juice`
- prompt: Read and execute `/workspace/.cursor/skills/level-up-feel/SKILL.md`. Read `agents/define.md`. You own motion, WebAudio, walker, cursor menus, LCD overlay. One authored motion per screen. Stop after the feel checklist.

**5. ship**

- description: `THE BUYER QA ship`
- prompt: Read and execute `/workspace/.cursor/skills/level-up-ship/SKILL.md`. You own QA, mobile scale, keyboard/touch, localStorage, og image, GitHub Pages meta, share card, debug object, screenshots at 1440 and 390. Stop after the ship checklist.

Pass each subagent these facts (they are already in the skills; repeat so nothing is guessed):

- Screen 256x240. Palette lock. One HTML file.
- Debug surface today: `window.GRUNT` with `state`, `stages`, `go`. Ship renames to `window.BUYER` and may keep `window.GRUNT` as an alias.
- Serve from repo root. No inventing endpoints.

### 4. Restraint (parent, after ship)

Read the game as screenshots again. Remove what does not serve play. No extra labels on pictures that already speak. No decorative chrome. No second motion on a screen that already has one.

Write cuts to `agents/restraint.md`. Apply only cuts. Then spawn the critic again (screenshots only). Target: clearly above the 4.5/10 prototype. Do not loop past two critic rounds.

## Definition of done (this "next level" pass)

- The four critic-log next moves are in the build: hand pixel art at native density, full scene per stage, shop-street terrain map, cursor-driven menus.
- Buyer is on screen as the judge (neutral / yes / no). No caveman sprite, no Ugg copy.
- Article examples, ranks, tagline, author credit, and five-hour method remain.
- Share tweet under 280 characters, includes @leonabboud, rank, score, one lesson, play URL.
- ~7 minutes, three hearts, vehicle last, wrong answers still cost attention.
- One file, palette lock, 256x240, both fonts, LCD not CRT, zero console errors.
- `window.BUYER` debug object works in a headless page.
- Screenshots at 1440 and 390 wide in `agents/screenshots/ship/` with no overflow.
- Restraint log exists. Critic round two exists.

## Verify (parent confirms ship, does not redo ship)

Serve the folder (`python3 -m http.server` or any static server). In a real browser and in headless Chromium/Playwright:

1. `window.BUYER.go('title')` then intro, map, `G.unlocked = 7`, stage, result.
2. Play one fail (hearts to 0) and one retry.
3. Keyboard: `1`-`4`, Enter, arrows on map, `M`.
4. Console empty of errors.
5. Tweet string length `< 280`.
6. Viewports 1440 and 390. `#screen` stays 256x240 before CSS transform. No layout overflow.

If ship left a hole, respawn **ship** or the domain that owns the hole. Do not silently patch all five domains yourself.
