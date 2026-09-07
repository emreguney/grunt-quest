---
name: level-up-art
description: Native-density hand pixel art for THE BUYER. Title scene, buyer portraits (neutral/yes/no), per-stage backdrops, shop-street world map, 8x-16x sprites, downsample, palette lock. Use when spawned for the art pass or asked to redraw THE BUYER pixels.
---

# THE BUYER art

You were spawned to own pixels. Read this file. Read `agents/define.md` if present. Edit `/workspace/index.html` only. Do not retune mechanics, rewrite copy, add juice, or run ship QA beyond checking that art renders.

Prototype still has generated title/portrait PNGs and CSS stand-ins (cave-mouth doors, sand tile, polyline map). This pass replaces them with hand pixel art at native density.

## Files

- Touch: `/workspace/index.html` (`ART`, `SPR`, `PAL`, `#title`, `.map`, `.wall`/doors, `.sea`/bridge, `.ground`, stage `play()` roots, `portrait()`).
- Work files (throwaway): `/tmp/the-buyer-art/`. Do not require them at runtime.
- Do not add `src="assets/*.png"` as a runtime dependency. Embed data URIs or `px()` SVG maps in the HTML file.
- Do not edit other skills. Do not add a bundler.

## Screen and scale

- Playfield `#screen`: **256 x 240**.
- HUD: 14px tall when shown. Scene under HUD is 256 x 226.
- Title and map: full 256 x 240.
- Portraits on screen: **64 x 64**.
- Walker: 8-16px wide, 12-24px tall, integer sizes only.
- Cursor: 8 x 8 or 8 x 16.
- Door/shop icons: 16 x 16.
- Tiny UI sprites (hearts, mute, lock): 8 x 8 via existing `px()`.

CSS must keep `image-rendering: pixelated` (and `crisp-edges`). No smoothing. Integer scale only (`fit()` already does `Math.min(vw/256, vh/240)`).

## Palette lock

Use only these hex values. Snap every pixel. No new hues, no alpha fringes, no gradients, no glow.

| Token | Hex | Use |
| ink | `#1c1a2e` | outlines, text, HUD |
| paper | `#f7efd6` | panels, light fill |
| sand | `#e6c98a` | ground, walls |
| amber | `#e08a2c` | desire, coin, selection accent |
| teal | `#2f9d8a` | correct, life, deep water highlight |
| deep | `#1f5f58` | ground strip, rock, foliage shadow |
| acid | `#9fbf1f` | jargon only |
| red | `#d9463b` | wrong, hearts, pain |
| mute | `#b9a97a` | disabled, dust |
| white | `#fffaf0` | panel inner line, eyes |
| shade | `#c9ad74` | sand shadow, wood light |
| brown | `#7a4a2a` | hair, wood, skin shadow (sprites only) |

Outside `#screen` only: page `#0e0d15`, bezel `#2b2942`. Inside the screen, no near-black fill. That is the generic "pixel game" failure mode.

`PAL` in JS must stay in sync with CSS `:root`.

## Downsample pipeline

Hand-author at **8x or 16x** the on-screen pixel size, then nearest-neighbor down. Example: title 256x240 painted at 2048x1920 (8x) or 4096x3840 (16x). Portrait 64x64 painted at 512 or 1024.

Do not ship the 8x canvas. Do not ship bilinear/Lanczos downscales.

```bash
mkdir -p /tmp/the-buyer-art
# ImageMagick: point filter = nearest neighbor
convert /tmp/the-buyer-art/title-16x.png -filter point -resize 256x240 PNG8:/tmp/the-buyer-art/title.png
```

Or Pillow:

```python
from PIL import Image
pal = ["#1c1a2e","#f7efd6","#e6c98a","#e08a2c","#2f9d8a","#1f5f58",
       "#9fbf1f","#d9463b","#b9a97a","#fffaf0","#c9ad74","#7a4a2a"]
im = Image.open("in.png").convert("RGB")
im = im.resize((256, 240), Image.NEAREST)  # use the native size for this asset
# snap each pixel to nearest pal hex, then save PNG
```

Then base64 into `ART.title` (or the matching key). Tiny sprites: prefer `px(['..XX..', ...])` so they stay editable.

If you generate a reference image, discard it unless every pixel is retouched onto this grid and palette. Generated smooth art is how the prototype scored 4.5. This pass is hand pixel.

## What to draw

### Title (`ART.title`, 256x240)

Cartridge painting. One scene, title over **open sky**, nothing else competing. Buyer visible (shopkeeper or customer on a street at dusk/afternoon). Game name THE BUYER is type on top (code, Press Start 2P, 2px ink drop shadow), not baked into pixels unless you leave a clear empty sky block. Alt text: the picture, no caveman.

### Buyer portraits (`ART.buyer`, `ART.buyerYes`, `ART.buyerNo`)

Three 64x64 faces of the **same** buyer: neutral, yes (gets it), no (scrolls past / confused by jargon). Same silhouette, different brows/mouth/eyes. Used by `portrait()`, feedback, attention-lost, result, buyer-test boss.

Rename keys off `ART.cave` / `caveYes` / `caveNo`. Update every `src` and alt. Alt: "the buyer", never Ugg.

### Per-stage scenes (256 x 226 or 256 x 240)

A full picture behind UI, every stage. Ground strip + repeating sand SVG is not enough.

| Stage | Scene |
| The gap | Founder office or shop back room. Ladder reads as descending into a want |
| Three doors | Street with three shopfronts: health, wealth, relationships. Not cave mouths |
| The filter | Inside a head or a busy street of signs. Ads are in-world |
| The buyer test | Counter or doorway. Buyer faces you |
| The bridge | Two ledges, gap, walkable planks. NOW / AFTER as places |
| The mechanism | Workshop. Tools, not slogans |
| Positioning | Two rooms or two shop windows (founder vs bakery) |
| The vehicle | Shop street with closed stalls until unlocked. Vehicle stall looks tempting |

HUD, panels, and options sit **on** the scene. Do not flatten the scene to a solid fill when the panel opens.

### Shop-street world map

Replace the polyline + 18px numbered squares. Paint a 256x240 street (cobble/sand, awnings, signs). Stage nodes are storefronts or painted signs the cursor can point at. Locked shops are shuttered. Current shop is the amber one. Path is the street, not a stroke on empty sand.

`NODE_POS` may move to match the painting. Keep eight stops, unlock order unchanged.

### Sprites (8x-16x then down, or `px()`)

Redraw: hearts, mute, lock, check, walker (`SPR.ugg` becomes a buyer walk cycle or two frames), door icons, brain, founder, flag. Walker must read at 8-16px. Feel owns the walk animation. You supply frames.

## What NOT to do

- Do not keep the caveman title or Ugg portraits.
- Do not add colors, CRT scanlines, bloom, drop shadows as blur, or parallax cameras.
- Do not put readable paragraph text in the bitmap (type is HTML).
- Do not change stage order, scoring, or article strings.
- Do not leave `/tmp` files as the only copy. Embed before you stop.
- Do not introduce `canvas.drawImage` smoothing. If you draw to canvas, `imageSmoothingEnabled = false`.

## Checklist

- [ ] Title is hand-pixel 256x240, sky clear for the wordmark, buyer in the scene
- [ ] Three buyer portraits, 64x64, same person, palettes snapped
- [ ] Eight stage backdrops exist and fill the playfield
- [ ] Map is a shop street with eight readable stops
- [ ] `ART.cave*` gone. Walker is a buyer
- [ ] Every pixel is a locked hex. No smooth edges
- [ ] Runtime is still one HTML file
- [ ] CSS shapes are not standing in for title, portraits, map terrain, or stage scenes
