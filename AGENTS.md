<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Codex Session Handoff — Peel Excavation Services Website

**Session date of handoff:** 2026-04-29
**Project status:** Live in development, deployed to Cloudflare Pages, not yet shared with the client. Targeting "go live → SEO audit → iterate" as the next major phase.

If anything in this file conflicts with `CLAUDE.md`, treat `CLAUDE.md` as the source of truth — it's the running project memory, this file is a session-handoff snapshot.

---

## What This Project Is

A **paid client website** for **Peel Excavation Services** — an excavation, demolition, and site-prep company serving the GTA (Greater Toronto Area) and Ontario-wide for large jobs. The site sells against contractors, builders, and property managers — *not* generic homeowners.

### Business facts you must not get wrong
- **Phone:** `647-321-9437` — must be the same everywhere on the site (`tel:+16473219437` for links). Do not use any other number.
- **Email:** `info@peelexcavation.ca` — already set up, not a Gmail.
- **Years in trade:** EST. **1995** (30+ years). Company was *registered* in 2014, but the on-site claim is "30+ years" / "EST. 1995". Don't surface 2014.
- **Sales contact:** Manny Dhanoa. Do **NOT** name him as the owner anywhere on the public site. He's the inbound contact.
- **Service area:** Mississauga, Milton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Caledon, Bolton, Georgetown + Ontario-wide / Quebec for large-scale.
- **Logo:** Not designed yet. Code uses an SVG placeholder — a `P` badge with amber gradient. Do not invent a logo.

### Voice / positioning
- Contractor-first language. Speak to people who run jobsites, not curious homeowners.
- Lead USP: **30+ years experience**. Second: **owner-operated fleet** (no rental delays). Third: **reliable timelines**.
- Trustmarks the site uses: 30+ years experience, fully licensed & insured, liability insurance, owner-operated fleet, residential/commercial/industrial experience.

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | **Next.js 16** (App Router), TypeScript | Read the warning at the top of this file. Verify API shapes against `node_modules/next/dist/docs/` before writing route handlers, dynamic params, or metadata. `params` is a `Promise` in dynamic routes. |
| Styling | Tailwind CSS v4 + CSS keyframes | Tailwind v4, *not* v3 — config lives in `globals.css`, not `tailwind.config.js`. |
| Components | ShadCN/UI | Already wired. `components.json` at root. |
| Animation | GSAP + ScrollTrigger, Framer Motion, CSS keyframes | Animation hierarchy: CSS keyframes for micro/hover, Framer for transitions, GSAP for scroll sequences. Hardware-accelerated only (`transform`, `opacity`). |
| Fonts | Bebas Neue (display) + Barlow (body, 300–600) | |
| Deploy | Cloudflare Pages via GitHub | Repo: `arjand378-eng/peel-p2`. |
| Dev port | `localhost:3001` | |

### Style tokens (HSL-based, defined in `app/globals.css`)
- Background: `#0f0f0d` → `hsl(60 7% 5%)`
- Text: `#f5f0e8` → `hsl(36 33% 93%)` (`text-foreground`)
- Accent: `#f59e0b` (amber) → `hsl(38 92% 50%)` (`text-primary` / `bg-primary`)
- Secondary: `#78716c` stone (`text-muted-foreground`)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Imagery rule: dark, cinematic, earth-toned. **Real job site photos only — no stock photos of fake workers.**

---

## File Map (the parts that matter)

```
/Users/arjan/Documents/CLAUDE PRACTICE/WEBSITE PRACTICE/Peel P2/
├── app/
│   ├── page.tsx                    # Home
│   ├── about/page.tsx              # About — recently updated this session
│   ├── services/page.tsx           # All 15 services, full sections
│   ├── projects/
│   │   ├── page.tsx                # NEW (this session) — Projects+Insights landing
│   │   └── [slug]/page.tsx         # NEW (this session) — project detail
│   ├── blog/
│   │   ├── page.tsx                # REWRITTEN this session — uses lib/blog.ts
│   │   └── [slug]/page.tsx         # NEW (this session) — blog post page
│   ├── contact/page.tsx            # Multi-step form — recently updated this session
│   ├── sitemap.ts                  # NEW (this session) — auto from data files
│   ├── layout.tsx
│   └── globals.css                 # Tailwind v4 tokens, keyframes
├── components/
│   ├── Navbar.tsx                  # Top-level nav. Projects link → /projects (updated)
│   ├── Footer.tsx
│   ├── Reveal.tsx                  # Generic in-view reveal wrapper used everywhere
│   ├── CountUp.tsx
│   ├── TrustMarquee.tsx
│   └── sections/                   # Home page sections (Hero, ServicesPreview, WhyUs, Projects, QuoteCTA)
├── lib/
│   ├── projects.ts                 # NEW (this session) — Project type + 3 seeded entries
│   └── blog.ts                     # NEW (this session) — BlogPost type + 2 seeded posts (with placeholder sections)
├── public/
│   ├── images/
│   │   ├── IMG_8777..8787.JPG     # Real client jobsite photos
│   │   ├── service-photos/         # 9 client photos for service detail sections
│   │   └── photos/                 # Pexels stock used in ServicesPreview
│   ├── about us.webp               # Client-supplied About hero image
│   └── video/hero.mp4              # Home hero video (status: HOLD — see below)
├── inspiration/                    # Reference only — DO NOT IMPORT FROM HERE.
│   ├── CARMOWOOD/                  # Visual aesthetic primary inspiration
│   ├── KREISSON/                   # Scroll reveal & marquee inspiration
│   ├── LOVEABLE/                   # Code/copy scaffolding only — has TS errors, ignore
│   └── Claude Design/              # Marquee + bento grid concept
├── peel-p2/                        # LEGACY duplicate of an earlier folder layout.
│                                   # The real Next.js app is at the project root, NOT here.
│                                   # Do not edit files inside peel-p2/ — they're stale.
├── CLAUDE.md                       # Running project memory (source of truth)
├── AGENTS.md                       # This file
├── PLAN.md                         # Older planning doc — may be out of date
├── MARKETING-STRATEGY.md           # Marketing context
├── README.md
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Pages Built (current state)

1. **Home** (`app/page.tsx`) — Hero (video, frosted backdrop behind CTAs), TrustMarquee, ServicesPreview (9 bento cards → `/services`), WhyUs/Stats with 3-image collage, Projects (2x2 grid → individual project pages), QuoteCTA, Footer.
2. **Services** (`app/services/page.tsx`) — All 15 services live with expanded copy (4–6 sentence descriptions, 8 bullets each). 9 client-supplied photos in `/public/images/service-photos/`. Remaining 6 sections still on Pexels/older client photos: garage, final-grading, demolition, backfilling, heavy-equipment, general.
3. **About** (`app/about/page.tsx`) — Updated this session. Uses `/about us.webp`. Body type bumped to `text-lg lg:text-xl text-foreground/90 leading-[1.85]`. Still needs final contractor-first copy pass per CLAUDE.md.
4. **Projects landing** (`app/projects/page.tsx`) — **New this session**. Stacked: hero → 3-col Recent Projects grid → 3-col Insights teaser → CTA.
5. **Project detail** (`app/projects/[slug]/page.tsx`) — **New this session**. Hero image + summary + body sections + sidebar (scope, equipment list, "Need Similar Work?" CTA), photo gallery, next-project link, `CreativeWork` JSON-LD.
6. **Blog index** (`app/blog/page.tsx`) — Rewritten this session. Pulls from `lib/blog.ts`. Card grid with hero images.
7. **Blog post** (`app/blog/[slug]/page.tsx`) — **New this session**. Hero, intro, sectioned body, CTA card, next-post link, `Article` JSON-LD.
8. **Contact** (`app/contact/page.tsx`) — Multi-step form (Service → Job Details → Your Info). Updated this session: image swapped to a Pexels wide jobsite shot, copy rewritten contractor-first, phone normalized to `647-321-9437` everywhere, full city list shown.

### Nav links (top nav)
`Services · Projects · About · Contact` — and a "Get a Quote" CTA. Phone number visible in nav at desktop. **Don't add Blog to top nav** — it's reachable from `/projects` landing teaser and the footer.

---

## Content Architecture (what's new and how to extend it)

### `lib/projects.ts`
Exports `projects: Project[]`. Each project has:
```ts
{
  slug, title, category, location, year,
  scope,          // one-sentence scope summary
  equipment,      // string[] — listed in the sidebar of detail page
  hero,           // image path
  gallery,        // image paths shown below body
  summary,        // shown as the lede paragraph on detail page
  body: { heading, text }[],  // body sections, h2 + paragraph
}
```
Helpers: `getProjectBySlug(slug)`, `getAllProjectSlugs()`.
**To add a project:** push a new object to the array. Landing, detail, and sitemap pick it up automatically.

### `lib/blog.ts`
Exports `posts: BlogPost[]`. Each post has:
```ts
{
  slug, title, category, date (YYYY-MM-DD), readTime, excerpt, hero,
  intro,                          // large lede paragraph
  sections: { heading, placeholder }[],  // h2 + body
}
```
Helpers: `getPostBySlug`, `getAllPostSlugs`, `getRecentPosts(n)`.

**Placeholder convention:** seeded posts have `placeholder` strings in `[brackets]` describing what to write. The blog post page renders these in italic with an amber left-border so unfilled sections are visually obvious as TODOs. When you write the real content, just replace the placeholder string in `lib/blog.ts` — the styling on real content should be plain (no italic, no border). **You'll need to update `app/blog/[slug]/page.tsx` to detect filled vs. unfilled sections, or rename the field from `placeholder` to `text` once content is real.**

### Seeded content right now
**Projects (3):** Caledon Custom Home Foundation, Mississauga Industrial Demolition, Milton Subdivision Site Prep.
**Blog posts (2, sections still placeholder):**
1. "What Affects Excavation Cost in Ontario? (2026 Contractor's Guide)"
2. "Foundation Excavation in the GTA: What Builders Need to Know Before Breaking Ground"

---

## What's Done This Session (2026-04-29)

1. **About page polish** — swapped to client-supplied `/about us.webp` image, bumped body type, widened column gap, fixed EST. 1995 badge z-index.
2. **Contact page** — replaced placeholder phone (`905-555-0142`) with real `647-321-9437` everywhere, rewrote tagline to contractor-first, expanded city list, swapped image.
3. **Projects + Blog system built** — new `lib/projects.ts`, `lib/blog.ts`, `/projects` landing, `/projects/[slug]` detail, rewritten `/blog` index, new `/blog/[slug]` post page, `app/sitemap.ts`, Navbar updated.

---

## What's Next (in priority order)

1. **Final About copy pass** — contractor-first tone, per CLAUDE.md.
2. **Replace remaining 6 service-page Pexels photos** with real client photos when Manny supplies them: garage, final-grading, demolition, backfilling, heavy-equipment, general.
3. **Hero video decision** — see "Hero Video Status" gotcha below. Manny's brief says "no autoplay videos" but we still have one. Confirm with him; if removed, replace with Ken Burns photo.
4. **Flesh out the 2 seeded blog posts** — user is going to write real content into the placeholder sections.
5. **Add 1–3 more blog posts and 3–5 more projects** as content backlog grows.
6. **Go live → SEO audit → iterate** — final pass before sharing with the client.

---

## Gotchas / Hard Rules

### Hero video status — HOLD
The home page has an autoplay `hero.mp4`. Manny's brief says "no autoplay videos" but he hasn't explicitly approved removing it. **Do not unilaterally remove the hero video.** If asked to change it, the agreed fallback is a Ken Burns static photo. Confirm with the user before touching.

### What the client does NOT want
- No stock photos of fake workers / posed actors.
- No autoplay video (pending confirmation — see above).
- No pop-ups.
- No cluttered or busy layouts.
- No cheap-looking design.

### Don't pull from `inspiration/`
The `inspiration/LOVEABLE/` folder has TypeScript errors (missing `@/components/site/*` modules, `StaticImageData` type mismatches). These are reference-only files. They are **not** part of the build and `tsc --noEmit` will surface them — ignore those errors, they pre-date this session.

### `peel-p2/` is dead weight
Earlier the project was nested in a `peel-p2/` subfolder; it was moved up to the root. The nested folder still exists with stale duplicates. **The real app lives at the root.** Don't edit the nested copy.

### Photo sources by section
- Real client photos: `IMG_8777`–`IMG_8787` are used on Home (Projects, WhyUs collage in alt-text only — actual sources are still Pexels there), Services detail sections (9 of 15), Projects data, Contact (now using Pexels).
- Stock OK as interim: About hero, Contact image, WhyUs collage. Replace with real photos as Manny supplies them.

### Readability tuning history (don't undo)
- ServicesPreview "What We Do" body uses `text-xl md:text-2xl` full opacity (was iterated up).
- Hero CTA row has `hsl(60 7% 5% / 0.6) + blur(6px)` frosted backdrop so the phone reads over any video frame.
- WhyUs About paragraphs settled at `text-base lg:text-lg font-normal leading-[1.85]` after iteration.
- About body settled at `text-lg lg:text-xl text-foreground/90 leading-[1.85]` (this session).

### Skill files
There are skill markdown files at `.claude/skills/` that the previous (Claude) sessions read before UI tasks: `gpt-taste-SKILL.md`, `output-SKILL.md`, `brutalist-SKILL.md`. They're informational — Codex doesn't need to load them, but they describe the design intent (AIDA structure, brutalist hero, GSAP scroll work).

---

## How to Start

1. `cd "/Users/arjan/Documents/CLAUDE PRACTICE/WEBSITE PRACTICE/Peel P2"`
2. `npm run dev` → opens on `localhost:3001`
3. Read `CLAUDE.md` once for the running project memory. This file is the session-fresh handoff; CLAUDE.md is the long-running notebook.
4. Confirm what the user wants to work on before starting (About copy, blog content, hero video, services photos, or new feature).

### Useful commands
- Dev: `npm run dev`
- Type check: `npx tsc --noEmit` (ignore `inspiration/LOVEABLE/` errors)
- Lint: `npm run lint`
- Build (sanity): `npm run build`

---

## Conventions & Standards

- Mobile-first responsive design.
- `prefers-reduced-motion` respected throughout — don't add animations that ignore it.
- No files >5MB committed to git.
- Lighthouse target: 90+ Performance, 100 Accessibility.
- Use `next/image` always, with explicit `sizes`. `priority` only for above-the-fold hero images. `loading="lazy"` everywhere else.
- Use the `Reveal` component from `components/Reveal.tsx` for scroll-in reveals — don't reinvent it per page.
- Phone number in any new component: `647-321-9437` (display) / `tel:+16473219437` (link).
- Heading hierarchy: one `h1` per page, `h2` for top-level sections, `h3` inside.
- Use the existing color tokens (`text-foreground`, `text-primary`, `text-muted-foreground`, `bg-surface`, `border-border`) — don't write raw hex.
