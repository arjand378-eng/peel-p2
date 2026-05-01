# GPT-5.5 Image Prompts for Peel Excavation

## Context

Three image gaps need filling before client handoff. The client provides no usable photography, and the previous "no stock photos" rule in CLAUDE.md has been softened to allow documentary-style imagery. The user is generating these in GPT-5.5 manually (not through code), so the deliverable is **three ready-to-paste prompts** — no code changes, no file edits.

Constraints captured from earlier conversation:
- **Equipment + earth only** — no humans visible
- Match site palette: off-white `#f5f0e8`, amber `#f59e0b`, near-black `#0f0f0d`
- Match existing aesthetic: dark, cinematic, earth-toned, contractor-authority
- Reference brands: Aecon, PCL Construction (industrial polish, not flashy)

Target spots:
1. **About page hero** (`app/about/page.tsx`, currently `pexels-about-hero.jpg`) — currently an aerial site shot; user wants a stronger replacement
2. **Home About section image** (the About preview block on the home page) — needs to feel complementary to, not duplicate of, the About page hero
3. **Caledon project photo 3** — third gallery slot on `/projects/caledon-custom-home-foundation`. Story arc: hero (machine working) → photo 1 (mid-dig) → photo 2 (site clearing) → **photo 3 should be "the result"** to match the closing body copy: *"Three working days from first cut to walk-through. The framer started forms the next morning."*

Project context for Caledon: 4,800 sq ft custom home, 14-degree sloped rural lot, stepped footing on downslope, full 9-foot basement on upslope, Caledon Ontario rural setting.

---

## The Three Prompts

### Prompt 1 — About Page Hero (`/about`)

> Cinematic wide shot of a large yellow hydraulic excavator mid-dig on a raw rural Ontario excavation site at golden hour. The bucket is cutting into dark, freshly-turned soil with a visible spray of dirt mid-air. Long shadows rake across the site from low side lighting. Background: gently rolling Ontario farmland silhouetted against a deep amber and slate-grey sky, no buildings visible. The earth tones are rich and saturated — wet brown soil, ochre, rust. Atmosphere: dust haze, late-day light, industrial weight, premium editorial photography. Mood references: Aecon and PCL Construction marketing photography. No people, no logos, no text. Shot on Sony A7 with 35mm lens, shallow depth of field on the bucket, slight cinematic film grain, deep blacks. 16:9 aspect ratio, 4K resolution.

### Prompt 2 — Home About Section Image

> Tight detail photograph of an excavator bucket pulling back from freshly cut earth, with dirt and small rocks tumbling from the teeth in mid-air. Shot from low angle, three-quarter view. The metal bucket shows realistic wear, scratched yellow paint, mud on the cutting edge. Background is intentionally out of focus — soft suggestion of a deep open foundation pit, dark soil walls, faint dawn light. Color palette: cool steel grey, deep wet-earth brown, accents of warm amber from raw morning sunlight glancing off the bucket edge. Atmosphere: heavy machinery weight, documentary realism, dust catching light. No people, no logos. Shot on full-frame DSLR, 50mm lens, shallow depth of field, slight grain, rich shadows. Square 1:1 aspect ratio, 4K resolution.

### Prompt 3 — Caledon Project Photo 3 ("The Result")

> Ground-level documentary photograph of a completed residential foundation excavation on a sloped rural lot in Caledon, Ontario. The dig is finished and empty of equipment — clean square footing benches cut into dark soil, a stepped footing visible on the downslope side, sharp 90-degree corners, full 9-foot basement depth on the upslope wall. Engineering stakes with orange flagging tape mark the perimeter. The pit is dry and ready for the framing crew. Background: bare deciduous trees, overcast Ontario sky, hint of distant farmland, no buildings, no people, no machinery. Late-autumn cool grey light, muted earth tones, brown and ochre soil, slate sky. Atmosphere: completed, professional, "ready for the framer" — quiet, exact, well-executed work. Shot on full-frame DSLR, 24mm wide lens, deep depth of field, documentary realism, no filters, slight cinematic contrast. 3:2 aspect ratio, 4K resolution. Match the visual tone of premium contractor portfolio photography.

---

## Usage Notes (for the user, not for code)

- All three prompts use the **6-component structure**: Subject + Action + Context + Composition + Lighting + Style. This is the same pattern the `blog-image` skill uses internally for Gemini and works equally well in GPT image generation.
- If GPT-5.5 produces something off, the most useful tweaks are: change the time-of-day phrase ("golden hour" → "overcast morning"), change the lens ("35mm" → "85mm" for tighter), or remove "cinematic" if the output looks too over-produced.
- File naming convention when saving: `public/images/about-hero.jpg`, `public/images/home-about.jpg`, `public/images/caledon-result.jpg` — then those paths plug into existing components without further code work, except for Caledon photo 3 which requires a one-line edit to `lib/projects.ts:29` swapping `IMG_8781.JPG` for the new file.

## Verification

No code to run. Verification is visual — once images are generated and dropped into `public/images/`, viewing them inline in `/about`, the home page About section, and `/projects/caledon-custom-home-foundation` confirms fit.

## Critical Files (reference only — not edited in this plan)

- `lib/projects.ts:26-30` — Caledon gallery array (photo 3 swap goes here later)
- `app/about/page.tsx` — About page hero image reference
- `components/sections/` — home About preview component (image reference)
