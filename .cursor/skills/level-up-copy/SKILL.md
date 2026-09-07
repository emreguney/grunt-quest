---
name: level-up-copy
description: All player-facing words in THE BUYER. Clear not clever. Protect Leon Abboud article examples, author credit, and a share tweet under 280 characters. Strip caveman/tribe/Ugg/grunt flavor. Use when spawned for the copy pass.
---

# THE BUYER copy

You were spawned to own every string the player reads. Read this file. Read `PROMPT.md` and `agents/define.md` if present. Edit player-facing text in `/workspace/index.html` (`<title>`, meta, `STAGES` names/blurbs/intro/lesson/options/feedback, HUD, dialog, result, tweet, alts). Do not paint pixels. Do not change scoring math. Do not add motion.

## Files

- Touch: `/workspace/index.html`
- Also touch if they still say GRUNT QUEST: `/workspace/README.md` (title, play blurb). Do not rewrite PROMPT.md history except where it would ship to a player (it should not).

## Voice

- Clear, not clever. Short sentences. One idea.
- No em dashes (U+2014). No fake clever hyphens that hide an em dash.
- The **buyer** is the judge. Feedback is yes/no from a person who might pay, not a caveman grunt.
- Do not name a mascot. No Ugg. No tribe. No "Ugh!" / "Ugh?" as UI.
- "Grunt" may appear only when **quoting the article's name for the test** in a lesson line, not as world flavor and not as the game's title.

Game title: **THE BUYER**.

## Protect (do not paraphrase away)

Keep these as primary material. Wording may trim for the 256px panel but must stay the article's examples, not replacements.

- Why ladder starts at: `We need a better content strategy.`
- Filter pair, CRM: `Work leads faster and close more of them with our CRM.` vs `Our CRM uses advanced LLM systems to accelerate pipeline velocity.`
- Filter pair, executive content: competitors becoming trusted names vs `Unlock the power of next-generation executive content.`
- Filter pair, bow: `Hunt your prey faster with a bow that never breaks.` vs cutting-edge apparatus / warranty jargon.
- Mechanism: `grow your business` vs interview-you-once-a-week (article pair). Promise / claim / mechanism rounds stay that shape.
- Positioning wrong answer that must remain: `We help you post more`. Customer: proven founder, tired of explaining the product, dependent on referrals. Second customer: bakery vs the chain.
- Vehicle punish line: a weak message does not get strong because it sits in a LinkedIn post with a proven hook.
- Four questions, in order: What do I get? How does it improve my life? What pain does it remove? Why should I trust you?
- Assembled bow message (clear fragments): never breaks; hunt faster, eat every night; no snapped bows mid hunt; proof from last winter. You may drop "tribe" from proof. Replace with a plain proof the article still supports (fed people / sold out the winter). Do not invent a new product.
- Ending method card, five hours: customer, desire, mechanism, message, vehicle. Vehicle last.
- Tagline (article): `Become so good at marketing your competition thinks you're cheating.`
- Ranks (article's words, do not rename): Jargon goblin, Funnel copier, Category definer, Marketing god.
- Thesis: most people learn marketing backwards (vehicles first). Marketing begins inside another person's mind.

Author credit on title and result. Visible name: Leon Abboud. Tweet handle: `@leonabboud`. Exact href:

`https://x.com/leonabboud/article/2094443253495894440`

## Share tweet

Built on the result screen. Must stay **under 280 characters** including URL and newlines.

Must include:

- Rank (uppercase is fine)
- Score
- Game name THE BUYER
- `@leonabboud`
- One lesson line (default: `The vehicle comes last. Marketing begins inside another person's mind.`)
- Play URL when `location.protocol` is http(s)

Count with `[...tweet].length` (JS UTF-16 code units is what X uses for this budget; stay comfortably under 280). Put the string on `G._tweet` for QA.

Do not pack hashtags. Do not use an em dash.

## Screens to rewrite (caveman out)

| Place | Direction |
| `<title>`, og, twitter | THE BUYER |
| Title wordmark | THE BUYER (two lines if needed) |
| Intro | Buyer will judge you. No "Ugg, your guide". No feeding a tribe |
| Map blurbs | Plain stage jobs |
| The buyer test name | Not "The grunt test" as a cave boss. Lesson may cite the article's grunt test |
| Feedback labels | Yes / No, or the buyer got it / the buyer did not. Not UGH |
| Result fail line | Not "the caveman is still confused" |
| Image alts | Buyer, street, bow as product. No caveman |
| `dialog(..., { who: 'Ugg' })` | who: `Buyer` or drop the nameplate |

Stage **play text** that is the article (bow options, CRM lines) stays. Only the wrapper voice changes.

## What NOT to do

- Do not invent funnier examples. The article's examples are the point.
- Do not rename ranks or the tagline (critic declined that).
- Do not add a story bible.
- Do not write "INSERT COIN" if it is the only remaining arcade gag; Press start is enough.
- Do not touch palette, layout, or `SFX`.

## Checklist

- [ ] No player-facing Ugg, caveman, tribe, Ugh, GRUNT QUEST
- [ ] Title and og say THE BUYER
- [ ] Article examples still present (CRM, bow, content strategy, post more, five hours)
- [ ] Leon Abboud credited on title and result with the article link
- [ ] Tweet `< 280`, has rank, score, @leonabboud, lesson, URL
- [ ] No em dashes
- [ ] UI labels plain (play skill shares this bar)
- [ ] `G._tweet` still set on result
