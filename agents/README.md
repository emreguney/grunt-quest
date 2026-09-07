# THE BUYER agent pack

Filesystem-first production pass. The game stays one file: `/workspace/index.html`. No build.

## Run this

Read and execute **`.cursor/skills/level-up-the-buyer/SKILL.md`**.

That orchestrator Discovers (seed + screenshot critic), Defines (one change per screen), then **spawns five Task subagents**. It does not paint, write copy, juice, retune, or QA itself.

## Spawn order (serial, exclusive lock on `index.html`)

1. [level-up-copy](../.cursor/skills/level-up-copy/SKILL.md): player-facing words, article lock, tweet
2. [level-up-art](../.cursor/skills/level-up-art/SKILL.md): hand pixel art, scenes, shop-street map, portraits
3. [level-up-play](../.cursor/skills/level-up-play/SKILL.md): hearts, timers, gauges, fail/retry, onboarding
4. [level-up-feel](../.cursor/skills/level-up-feel/SKILL.md): one motion per screen, sound loop, walker, cursor menus, LCD
5. [level-up-ship](../.cursor/skills/level-up-ship/SKILL.md): QA, scale, storage, og, Pages, debug object, 1440/390 shots

Then the orchestrator cuts (restraint) and runs a second screenshot-only critic.

## Working files the orchestrator writes

- `agents/seed.txt`
- `agents/critic.md`
- `agents/define.md`
- `agents/restraint.md`
- `agents/screenshots/discover/`
- `agents/screenshots/ship/`

## Constraints (all skills)

256x240 handheld, locked palette, Press Start 2P + Pixelify Sans, article examples as copy, no em dashes, buyer as judge, ~7 minutes, one HTML file.
