---
name: level-up-play
description: Mechanics, difficulty, onboarding, timers, hearts, bridge gauges, fail/retry, and first-time clarity for THE BUYER. Plain UI labels. Use when spawned for the play/systems pass or asked to retune THE BUYER stages.
---

# THE BUYER play

You were spawned to own how it plays. Read this file. Read `agents/define.md` if present. Edit `/workspace/index.html` (`STAGES`, `hit`, `attentionLost`, `quizStage`, timers, unlocks, intro). Do not paint new scenes. Do not restyle cursors (feel). Do not replace article examples (copy). You may add a short plain label if first-time play is currently a wall of text or a silent rule.

## Files

- Touch: `/workspace/index.html` only.
- Stage order is fixed (article structure, vehicle last):

  1. The gap (why ladder)
  2. Three doors (health / wealth / relationships)
  3. The filter (survive or thrive vs jargon)
  4. The buyer test (four questions; article's grunt test taught by doing)
  5. The bridge (pain, desire, distance)
  6. The mechanism (promise / claim / mechanism)
  7. Positioning (same service, two customers)
  8. The vehicle (locked until 7 is cleared)

## Screen and time

256x240. Playtime budget **about seven minutes** for a first clear with a few mistakes. Do not add rounds. Do not add a ninth stage. Do not add a lore walk.

## Stakes (keep)

- Attention is HP. **Three hearts** per stage (`G.hearts = 3` on stage enter).
- Wrong answer or timeout calls `hit()`. At 0 hearts: `attentionLost` then retry **this stage** (reset hearts, keep global score minus `stagePoints` as today).
- Score: +100 correct, timer stages add up to +50 speed bonus, bridge win +500.
- Ranks from mistake count stay plain: They would buy / You named the desire / You copied the ads / They scrolled past.
- Unlocks: `G.unlocked`. Vehicle shop must not be playable before stage 7.

## Timers

Existing: Three doors **6000ms**, The filter **8000ms**. Keep them tight. Low bar at 30% remaining. Timeout is a miss, not a skip.

Do not put a timer on the why ladder, buyer test, mechanism, positioning, or vehicle if reading is the skill. Those are reading stages.

## Bridge gauges

Five picks. Two traps in the hand. Each **helpful** card (pain up, desire up, or distance down) lays one plank. Traps skip a plank. **Win = 4 or more planks.** On a win, draw all five planks so the walker can cross. Gauges still teach Pain / Desire / Distance, but they are not the pass/fail rule. A clearly good hand must not fail because the three meters did not max in the same five picks.

Do not hide gauge names. Labels stay **Pain**, **Desire**, **Distance**. Not "P", not metaphors.

Do not overlay a toast on the gorge. Put the card's `why` in a line under the gauges.

Trap cards stay article-shaped: list fourteen features, bigger headline / gradient, "cutting edge".

## Onboarding / first-time clarity

Intro must state, in plain words, all of:

1. You are making something a **buyer** will understand.
2. Eight stages, about seven minutes.
3. Three hearts. Wrong answers cost attention. At zero the customer scrolls past and the stage restarts.
4. Vehicles come last.

Do not teach the whole article in intro. Stages teach by doing.

Silent rules to make visible **once**, as labels not essays:

- Number keys 1-4 on the first choice list (then stop repeating).
- Map: arrows move, Enter enters. One line on the map sign.
- Mute: speaker button; `M` works. Do not write a controls page.

## Fail / retry

`attentionLost`: buyer scrolled past. Button **Try again**. Enter confirms. Do not add a continue-from-checkpoint inside the stage beyond restarting the stage.

Feedback after each pick: one or two lines of article reasoning. Copy owns the sentences. You own that feedback **always** appears and that wrong distractors are not shorter/longer tells.

## Difficulty

Distractors must sound like a real founder. If a wrong option is a joke, rewrite it (ask copy to supply the line if it is article-adjacent).

Ambiguous Three doors items (luxury watch, productivity app) already accept more than one door. Keep that. The game must say which desires connected.

Filter pairs: article pairs first (CRM, executive content, bow). Then extra pairs of the same shape.

Buyer test: four questions, in this order:

1. What do I get?
2. How does it improve my life?
3. What pain does it remove?
4. Why should I trust you?

Product stays the **bow** (article example). The judge on screen is the buyer, not a caveman. Clear fragments still assemble the message.

Vehicle: first round still tempts "pick a vehicle now, message later" and punishes with the article's weak-message-in-a-proven-hook line.

## Language of UI labels

Plain. Short. No puns. No caveman voice.

Allowed examples: Press start, Continue, Enter, Next, Try again, Share on X, Copy, Again, Attention lost, Pain, Desire, Distance, Health, Wealth, People (aria: Relationships).

Forbidden: Ugh, Ugg, grunt as a character line, tribe, INSERT COIN as a joke if it fights the buyer world (title can still say Press start).

Do not invent a tutorial narrator name.

## What NOT to do

- Do not add lives beyond three hearts, combos, or a shop economy.
- Do not auto-skip dialogue.
- Do not make the correct option always first after shuffle (keep `shuffle`).
- Do not unlock stage 8 early.
- Do not change localStorage schema (ship owns migrate). You may keep writing `unlocked` / `best`.
- Do not add dependencies.

## Checklist

- [ ] Eight stages, vehicle last, ~7 minutes
- [ ] Three hearts, attention-lost, stage retry, score rules intact
- [ ] Door and filter timers still punish slowness
- [ ] Bridge: four helpful cards lay a full crossing; traps skip a plank; why-line under gauges, not a toast on the sea
- [ ] Intro states hearts, length, buyer-as-judge, vehicle last
- [ ] First map/choice shows controls in one line
- [ ] Labels are plain; no caveman UI
- [ ] Distractors still sound professional
- [ ] `window` debug `go('stage')` still reaches play
