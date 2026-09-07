# The prompt that built the game

The shipped game is now **THE BUYER**. The first build was GRUNT QUEST (caveman / tribe). That world is retired. This file is the historical prompt. Do not put caveman copy back in the game.

---

# The prompt that built GRUNT QUEST (historical)

Source: "How to become so good at marketing your competition thinks you're cheating" by Leon Abboud
(https://x.com/leonabboud/article/2094443253495894440).

Design method: "How to turn your AI into a world-class designer" by Anshu Chimala, via Lenny's Newsletter
(https://www.lennysnewsletter.com/p/how-to-turn-your-ai-into-a-world).

Four parts. The first prompt. The critique. The prompt that was used. The design method that steered the build.

## Prompt v1

> Turn Leon Abboud's article on marketing into a browser game. Pixel art, 90s/2000s feel. Cover the main ideas: desire, the three niches, survive and thrive, the grunt test, mechanism, positioning, vehicles. Make it fun and educational. Single HTML file. Add a share button for Twitter.

## Critique of v1

1. It names topics, not mechanics. A list of chapters becomes a quiz with pixel wallpaper. Every idea in the article has a shape (a ladder of whys, a sort into three bins, a filter that blocks noise, a bridge between two islands). The prompt has to demand that each mechanic is the idea, so the player learns by doing rather than reading.
2. "Fun and educational" is a wish, not a constraint. It gives the builder nothing to test against. A better prompt sets a playtime budget, a failure state, and a win condition tied to the article's own claims.
3. It does not protect the source. The article's examples are the whole point (the CRM jargon line, the bow that never breaks, the founder who hates explaining his product on every demo). A builder left free will invent weaker examples. The prompt must require the article's own lines as the primary material and credit the author on screen.
4. It does not say what the era means. "Pixel art 90s/2000s" can drift into a generic dark theme with a pixel font. The prompt must pin the artefacts: a fixed 4:3 screen scaled to fit, a hard limited palette, a bitmap face, scanlines, 8-bit sound, an insert-coin title, a world map, a boss. The brief wins over taste.
5. It ignores the failure mode of the genre. Educational games teach nothing when the correct answer is obvious from length or tone. The prompt has to require distractors that sound like real marketing, and a wrong answer that costs something.
6. It leaves out the article's structure. The article ends with a five-hour method (customer, desire, mechanism, message, vehicle) and a hard rule that the vehicle comes last. The game's level order should enforce that rule, and the ending should hand the player the method.
7. Nothing about sharing beyond "a button". The end screen has to generate a tweet worth posting: a rank, a score, a one-line lesson, a tag for the author, and a link. That is what makes the game travel.
8. No QA definition. Single file, keyboard and touch, no console errors, mobile scaling, save progress. If it is not in the prompt it will not be in the build.

## Prompt v2 (used)

> You are a game designer and front-end engineer. Build GRUNT QUEST, a browser game that teaches the foundation of marketing exactly as laid out in Leon Abboud's article "How to become so good at marketing your competition thinks you're cheating". The article's thesis: most people learn marketing backwards, starting with vehicles (ads, funnels, hooks). Marketing begins inside another person's mind. The game must make the player feel that order.
>
> **Era and world.** A 90s/2000s pixel game. A fixed 960 by 600 screen that scales to fit any viewport (letterboxed on desktop, scaled down on phones). Hard limited palette of about ten colours (deep navy ground, cream text, one hot accent for the customer's desire, one sick green for jargon). A bitmap face for everything (Press Start 2P for display and UI, a bitmap-style monospace for body copy). CRT scanlines. Sprites drawn from pixel maps on canvas with `image-rendering: pixelated`, never smoothed. 8-bit sound from WebAudio (select, correct, wrong, level clear) with a mute toggle. An INSERT COIN title screen. A world map with stages that unlock in order. A caveman as the recurring judge, because the grunt test is the article's image. No em dashes anywhere in copy.
>
> **Stages, each a mechanic that is the idea.** Playtime budget: seven minutes, matching the article's promise.
> 1. THE GAP. The why ladder. A founder says "We need a better content strategy." The player descends rung by rung by picking the right "why" from three options until reaching the desire under the purchase. Wrong rungs cost attention.
> 2. THREE DOORS. Products appear one at a time under a timer. Sort each through the Health, Wealth or Relationships door. Ambiguous products (luxury watch, productivity app) accept more than one door, and the game says which desire each connects to, because the article says some products touch several categories.
> 3. THE FILTER. The player is the brain. Pairs of messages appear with a shrinking timer while an ad counter climbs toward 10,000. Pick the message the brain lets through (survive or thrive) over the one it filters out (jargon). Use the article's pairs first: the CRM lines, the executive content lines, the bow lines.
> 4. THE GRUNT TEST. Boss. The caveman asks four things: What do I get? How does it improve my life? What pain does it remove? Why should I trust you? For each, choose one of three sentence fragments. Jargon makes him grunt in confusion; a clear fragment fills his meter. Four clear fragments assemble the message.
> 5. THE BRIDGE. Two islands, NOW and AFTER. Three gauges: pain, desire, distance. The player picks five message moves from a hand of cards; each move raises or lowers gauges. The bridge only stands when pain and desire are high and distance is low. Some cards are traps (list fourteen features, use a bigger font).
> 6. THE MECHANISM. Rounds of three statements about a product: a promise, a claim, a mechanism. Pick the mechanism. Use the article's "grow your business" versus "we interview you once a week..." pair.
> 7. POSITIONING. A customer profile is shown (the proven founder tired of explaining his product, dependent on referrals). Choose the position from four. "We help you post more" must be one of the wrong answers. Then a second customer whose desire differs, to prove the same service positions differently.
> 8. THE VEHICLE. Locked until stage 7 is cleared, with a shop that tempts the player to pick a vehicle early and punishes it with the article's line about a weak message in a proven hook. Then match three customers to where they already pay attention.
>
> **Scoring and stakes.** Attention is HP. Wrong answers drain it. If attention reaches zero, the customer scrolls past and the stage restarts. A score accumulates. The end screen gives a rank: JARGON GOBLIN, FUNNEL COPIER, CATEGORY DEFINER, MARKETING GOD.
>
> **Distractors.** Every wrong option must sound like something a real founder would say. Never let length or tone give the answer away. Feedback after each choice quotes or paraphrases the article's reasoning in one or two lines, no more.
>
> **Ending.** Hand the player the five-hour method as a card: customer, desire, mechanism, message, vehicle. Then a SHARE button that copies a tweet with the rank, the score, one lesson line, @leonabboud, and the game URL, and opens the tweet intent. Credit the author on the title screen and the end screen with a link to the article.
>
> **Engineering.** One HTML file, no build step, no dependencies beyond a Google Fonts link with a monospace fallback. Keyboard (number keys for options, Enter to continue, M to mute) and mouse and touch. Real buttons with visible focus. Progress and best score in localStorage. Zero console errors. Expose a small read-only debug object on window for automated QA.
>
> **QA before calling it done.** Play every stage to completion in a headless browser, take screenshots at 1440 and 390 wide, confirm no overflow, no console errors, and that the share text is under 280 characters.

## Design method (from Chimala's three stages)

The article's point: a model left alone picks the most probable choice at every step, which is design by committee. Three moves fix it. Bring randomness in from outside the model. Judge the result with a critic that only sees the screenshot. Then remove things.

**Discover.** A seed string was generated in the shell before any design decision: `9FWUfqGRoM7QyDBAO85eI2FfdJcqjpcL6VkQ01Ho`. Readings taken from it, inside the pinned pixel world:

- `9F` reads as 1999, the last year of the 90s. The era is the colour handheld generation (Game Boy Color, 1998 to 2001), not the arcade and not the SNES.
- `GRoM` reads as ROM. The title screen is treated like cartridge art: one painted scene, title over open sky, nothing else.
- Hex-ish fragments set the palette hues. `9F` (159) is the teal that GBC shipped in. `2F` (47) is the amber of the accent. `85` is the acid green kept only for jargon.
- `01Ho` reads as the binary yes or no of every choice in the game: one clear line, one jargon line.

So the world is a 1999 colour handheld: a 256 by 240 screen scaled to fit, warm sand ground, cream dialogue panels with a double ink frame in the Pokémon Gold grammar, a bitmap face for UI and a proportional pixel face for dialogue, thick ink outlines, hard two-pixel drop shadows on display type, 8-bit tones. No neon, no glow, no gradients, no near-black ground. That last line matters because near-black plus one neon accent is what a model ships for "pixel game" when nobody stops it.

**Define.** Images were generated for the two moments that carry the game, the title scene and the caveman judge, then downsampled onto the pixel grid and embedded. CSS shapes stand in for nothing that should be a picture. A separate critic, given only screenshots and told to imagine how a top studio would execute this aesthetic, scored the build out of ten. Two rounds were budgeted, not an open loop.

**Deliver.** Restraint pass at the end: remove what does not serve play. No explanatory labels where the picture already says it. No decorative chrome. One authored motion moment per screen.

### Critic log

Two rounds were budgeted. The critic saw screenshots only, never code, and scored against how a studio at the Celeste or Shovel Knight level would ship this exact aesthetic.

Round one: 4/10. Taken from it: scanlines cut to near nothing, a bezel so the HUD reads as inside the screen, a ground strip and sand tile on every stage so no screen is flat page background, the three doors redrawn as cave mouths with icons, one selection language (cursor plus frame, no inversion), typewriter that breaks on words, three Ugg expressions generated from the first portrait and used on right and wrong answers, Ugg on the result card, "0:52" instead of "0M 52S", static readouts framed differently from choices. Declined: renaming the ranks and rewriting the tagline (they are the article's own words), dropping filled buttons (the game runs on touch), replacing the generated art with hand drawn art.

Round two: 4.5/10. Taken from it: LCD pixel grid instead of CRT scanlines (a 1999 handheld had no scanlines), fixed width scores without commas, a caveman sprite as the bridge walker. Declined for this build: redrawing the title and portraits by hand at native density, painting a full scene behind every stage, a terrain world map, cursor driven menus in place of buttons. Those are the right next moves and they are art production, not a fix round. They are listed here so the next session starts from them rather than rediscovering them.
