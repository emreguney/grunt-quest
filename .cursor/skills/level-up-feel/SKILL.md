---
name: level-up-feel
description: Juice pass for THE BUYER. One authored motion per screen, 8-bit WebAudio SFX and a short music loop, buyer walker on the bridge, cursor-driven selection language, LCD restraint. Use when spawned for feel/juice/motion/sound.
---

# THE BUYER feel

You were spawned to own motion, sound, cursor menus, and overlay restraint. Read this file. Read `agents/define.md` if present. Edit `/workspace/index.html`. Do not redraw art (use art's sprites). Do not rewrite article copy. Do not retune difficulty except where a motion depends on a timer already in the game.

## Files

- Touch: `/workspace/index.html` (`SFX`, `@keyframes`, `.opt` / `.btn` / `.map .node`, `.walker`, `#screen::after`, `prefers-reduced-motion`, title blink, dialog typewriter).
- Do not add audio files, howlers, or a sound build. WebAudio oscillators only, in this file.

## Screen

256x240 handheld. Integer scale. Motions are 1-2 pixels, `steps()` or discrete frames, never eased CSS blur. Honor `.reduced` / `prefers-reduced-motion: reduce`: skip loops, keep the one-frame pose.

## One authored motion per screen

Define already named one motion each. Ship that one. Do not stack a second.

Suggested defaults if Define is silent:

| Screen | The one motion |
| title | Insert-coin blink on Press start (already). Do not add floating particles |
| intro | Portrait idle: 1px bob, steps(2) |
| map | Cursor steps between shopfronts. Current shop 1px bounce |
| The gap | New rung slides in 1 rung (2-4px), steps |
| Three doors | Chosen shopfront lantern/frame flashes one step |
| The filter | Ad counter ticks. Losing pick: message crumples 1px |
| The buyer test | Portrait nod / shake (already). Meter pip fills |
| The bridge | **Buyer walker** crosses when the bridge holds. Planks appear as distance drops |
| The mechanism | Correct card stamps a check, 2 frames |
| Positioning | Portrait swap or window swap on customer 2 |
| The vehicle | Locked stall shutter. Unlock is the motion |
| Attention lost | Buyer turns / portrait shake |
| Result | Rank slams 1px. No confetti |

If a screen already has typewriter plus something else, the typewriter is chrome. The authored moment is the other one. Do not typewriter every line on a timer stage.

## Cursor-driven menus

Critic next move. One selection language everywhere choices appear (map, `.opt` lists, bridge cards, doors).

- A pixel **cursor** sprite (from art, or `px()` 8x8 ink arrow) sits on the selected row/shop.
- Selected item: double ink frame + paper/white fill. **No inversion** as the only cue (no "selected = invert the whole button").
- Mouse enter and arrow keys move the cursor. `1`-`4` still snap to that index.
- Touch: the whole row/shop remains a button. Finger does not need pixel-perfect cursor grabbing.
- Keep real `<button>` elements and `:focus-visible`.
- Do **not** remove filled amber `.btn` for Start, Next, Share, Copy, Again, Try again. Touch needs a fat confirm. Cursor language is for **choices**, not for confirms.

Map: stop treating nodes as unlabeled numbered squares if art already painted shops. Cursor points at the shop. Enter / tap enters.

## Walker on the bridge

`.walker` in `.sea`. Use the buyer sprite (`SPR` walker frames), not `SPR.ugg`.

- Idle: 2-frame tap, slow.
- On win: walk from NOW ledge to AFTER (`left` in 4px steps, integer). Existing loop around `x += 4` is the right grain. Tune to the painted gap, not a new physics engine.
- On fail: walker does not cross. Optional 1px drop. Then retry.

## 8-bit sound / music

Keep `SFX` as square/triangle/saw, low gain (~0.06). Existing cues: `move`, `ok`, `bad`, `clear`, `tick`, `type`.

Add:

- A **short loop** for title + map only (8-16 step square melody, GBC grain). Stop it on stage play so timers stay audible. Mute (`M` / speaker button) kills SFX **and** the loop.
- Buyer-test yes/no can stay `ok`/`bad`. Do not voice grunt samples.
- No speech synthesis. No MP3/OGG.

Resume `AudioContext` on first pointer/key (already). Never throw if WebAudio is missing.

## CRT / LCD restraint

1999 colour handheld had **no CRT scanlines**.

- Keep a light LCD grid (`#screen::after` 2x2, ink alpha about 0.045). Do not darken it.
- Delete any scanline overlay if it comes back.
- No glow, no vignette, no chromatic aberration, no screen shake except the 2px portrait shake.
- Bezel stays the `#screen` outline. HUD reads as inside the glass (ink bar). Do not add a second plastic frame inside the playfield.

## What NOT to do

- No particle engines, screen flash white, hitstop longer than 100ms, or juice that hides the text.
- No second font animation (no kerning bounce on Press Start 2P).
- No em dashes in any string you add.
- Do not lengthen typewriter so playtime blows past seven minutes. Break on words (already).
- Do not invent a sound API. Use the `SFX.tone` helper.

## Checklist

- [ ] Each screen has exactly one authored motion
- [ ] `prefers-reduced-motion` still disables loops
- [ ] Cursor + frame on choices; confirm `.btn` remains for Start/Next/Share/retry
- [ ] Bridge walker is the buyer and crosses only on a standing bridge
- [ ] Title/map loop exists, stops in stages, respects mute
- [ ] LCD grid only, no scanlines, no glow
- [ ] One HTML file, WebAudio only
