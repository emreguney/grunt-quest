---
name: level-up-ship
description: QA and ship pass for THE BUYER. Mobile scaling, keyboard/touch, localStorage, og image, GitHub Pages, share card, zero console errors, debug object, screenshots at 1440 and 390. Use when spawned for ship/QA.
---

# THE BUYER ship

You were spawned to make the file shippable. Read this file. Edit `/workspace/index.html`, `/workspace/README.md` if play instructions are stale, `/workspace/.github/workflows/pages.yml` only if Pages is broken, and screenshot files under `assets/` / `agents/screenshots/ship/`. Do not redesign stages. Do not add a build step.

## Files

- Game: `/workspace/index.html` (the only runtime file)
- Pages: `/workspace/.github/workflows/pages.yml` (already publishes `.` on `main`)
- README play link and title
- Og image: `assets/screenshot-title.png` (referenced by meta today)
- Do not add webpack, vite, or npm scripts the game needs to run.

## Screen and scale

`#screen` is 256x240. `fit()` sets `transform: scale(s)` with `s = min(vw/256, vh/240)`. Letterbox on the page background `#0e0d15`.

Verify:

- Viewport **1440** wide and **390** wide (phone). Height ~800 and ~844 are fine.
- No document scroll. `html,body { overflow: hidden }`.
- No UI clipped inside `#screen` (dialogue, options, map shops, result method card, share row).
- Touch targets for Start / options / map shops are the full control, not the 4px cursor.

## Keyboard / touch / mouse

Keep:

- `1` `2` `3` `4` pick
- Enter / Space advance confirms
- Arrows on map
- `M` mute
- Pointer on every control
- `:focus-visible` ink/amber outline
- First pointer/key calls `SFX.init()`

Play once with only keyboard and once with only tap (headless click is enough if a real device is missing).

## localStorage

Today: `SAVE_KEY = 'gruntquest.v1'` keys `unlocked`, `best`, `sound`.

Ship:

- New key `thebuyer.v1` with the same JSON shape.
- On load, if new key missing, read `gruntquest.v1` and migrate.
- Save only to `thebuyer.v1`.
- Sound default on. Mute persists.
- Wrap in try/catch (private mode).

Do not store copy or art.

## Debug object

Prototype: `window.GRUNT` with read-only `state` (`screen`, `stage`, `hearts`, `score`, `mistakes`, `unlocked`, `best`, `tweet`), `stages`, `go(name)`.

Ship: `window.BUYER` with that same surface. Keep `window.GRUNT = window.BUYER` as an alias so old QA does not die.

`go` must still switch `title | intro | map | stage | result`. Do not add fake routes. Do not make `state` a writable dump.

## Meta, og, GitHub Pages

Match the real Pages URL in the repo (README today: `https://emreguney.github.io/grunt-quest/`). Do not invent a new domain. If the folder is still `grunt-quest`, keep that URL until a human renames the repo.

Set:

- `<title>` THE BUYER
- `og:title`, `og:description`, `twitter:card` = summary_large_image
- `og:url` = the Pages URL
- `og:image` = absolute URL to the title screenshot on Pages
- `theme-color` = `#1c1a2e`

Capture a fresh title shot into `assets/screenshot-title.png` after art exists (256x240 is ok; do not add a generator script as a required build).

Share card = result tweet + Share on X + Copy. Intent URL stays `https://x.com/intent/post?text=`. Clipboard fallback already sets Copy/Failed. Tweet length `< 280` (copy owns text; you fail the pass if it is over).

## Headless QA

Serve repo root, no build:

```bash
python3 -m http.server 8765
```

Then Chromium or Playwright against `http://127.0.0.1:8765/`. Do not invent a test framework requirement. A one-off script in `/tmp` is fine. Do not leave it as the way the game runs.

Collect:

1. Console: **zero** errors. Fonts failing network may warn; errors must be empty.
2. `window.BUYER.state` on title, after `go('map')`, on result (`tweet` non-null).
3. Screenshots:
   - `agents/screenshots/ship/title-1440.png`
   - `agents/screenshots/ship/title-390.png`
   - `agents/screenshots/ship/map-1440.png`
   - `agents/screenshots/ship/map-390.png`
   - `agents/screenshots/ship/stage-1440.png`
   - `agents/screenshots/ship/stage-390.png`
   - `agents/screenshots/ship/result-1440.png`
   - `agents/screenshots/ship/result-390.png`
4. On 390: no overflow, share buttons still tappable, `#screen` scaled (not 256 CSS pixels wide on a 390 screen unless letterboxed by height).
5. Mute, continue (if unlocked), try-again, share copy.

Walk every `STAGES.length` with `go('stage')` and `G.stage = n` only if that is already how `go` works. If `go('stage')` uses `G.stage`, set it first. Do not add a debug level skip in the player HUD.

## What NOT to do

- No service worker, no analytics, no cookie banner.
- No second HTML file. No `package.json` build.
- No "debug menu" on the title screen.
- Do not point og:image at a localhost path.
- Do not remove the Google Fonts link. Keep the monospace fallback.

## Checklist

- [ ] 1440 and 390 screenshots exist, no overflow
- [ ] Zero console errors on a full title-to-result smoke
- [ ] Keyboard + touch paths work
- [ ] `thebuyer.v1` saves; `gruntquest.v1` migrates
- [ ] `window.BUYER` (and `window.GRUNT` alias) `state` / `stages` / `go`
- [ ] og tags + Pages URL + title image
- [ ] Tweet under 280, share + copy work
- [ ] README name, play link, and controls match the game
- [ ] Still one HTML file, no build
