# Peel Excavation Services — Production Website

## Context
Paid client project for **Peel Excavation Services** — excavation, demolition, and site prep company serving the GTA and beyond.

**Sales contact:** Manny Dhanoa (handles inbound inquiries — do NOT name him as owner on the site)
**Phone:** 647-321-9437 (click-to-call, mobile priority)
**Email:** info@peelexcavation.ca (not Gmail — already set up)
**Experience est.:** ~1995 (30+ years in the trade) | **Company registered:** 2014 — use EST. 1995 on site, not 2014
**Primary market:** Contractors, builders, property managers, commercial clients — NOT generic homeowners
**Service area:** Mississauga, Milton, Oakville, Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Caledon, Bolton, Georgetown + Ontario-wide / Quebec for large-scale projects
**Logo:** Not designed yet — SVG placeholder (`P` badge) in code until delivered

---

## Services (Full List — 15 Total)

### Primary (lead with these)
- Foundation Excavation ← #1 priority, positions for builder/repeat contracts
- Site Preparation
- Basement Digging

### Full list
1. Foundation Excavation
2. Basement Digging
3. Garage Excavation
4. Pool Excavation
5. Site Preparation
6. Land Grading & Rough Grading
7. Final Grading & Regrading
8. Trenching & Utility Excavation
9. Demolition (Residential & Commercial)
10. Concrete Removal & Breakage
11. Backfilling & Soil Compaction
12. Lot Clearing & Earthmoving
13. Drainage Preparation
14. Heavy Equipment Work & Transport
15. Excavation Services (general)

**Home page shows 9 services** (bento grid teaser → links to /services).
**Services page has all 15** with full detail sections each.

---

## Key USPs (use across all copy)
1. **30+ years experience** — Manny's strongest asset, lead with this everywhere
2. **Owner-operated fleet** — no rental delays, faster scheduling
3. **Reliable timelines** — biggest pain point for contractors
4. **Any scale** — single home basement to large commercial/industrial
5. **Will travel** — Ontario-wide, Quebec for large projects
6. **Contractor-first** — understands jobsite coordination and deadlines

---

## Certifications / Authority
- 30+ Years of Excavation Experience
- Fully Licensed & Insured
- Liability Insurance Coverage
- Owner-Operated Fleet (No Rental Delays)
- Residential, Commercial & Industrial Experience

---

## Pages Built (Current State — 2026-04-29)
1. **Home** — Hero (video, dark frosted backdrop behind CTAs), TrustMarquee, ServicesPreview (9 bento cards → /services), WhyUs/Stats with 3-image collage including operator-in-cab photo, Projects (2x2), QuoteCTA, Footer
2. **Services** — All 15 services live with expanded copy (4–6 sentence descriptions, 8 bullets each). 9 client-supplied photos placed in `/public/images/service-photos/` (foundation, basement, pool, site-prep, land-grading, trenching, concrete-removal, lot-clearing, drainage). Remaining 6 sections (garage, final-grading, demolition, backfilling, heavy-equipment, general) still on Pexels/older client photos.
3. **About** — Built, needs contractor-first copy pass
4. **Blog** — SEO placeholder
5. **Contact** — Multi-step form

**Nav links:** Services · Projects · About · Contact

## Readability Tuning Log (Home page)
- ServicesPreview "What We Do" body → `text-xl md:text-2xl` full opacity (was `text-base/lg` at 85%)
- Hero CTA row → wrapped in `hsl(60 7% 5% / 0.6) + blur(6px)` frosted backdrop so phone number reads over any video frame
- WhyUs About paragraphs → iterated `text-xl/2xl` (too big) → `text-lg/xl` → current `text-base lg:text-lg font-normal leading-[1.85]`

## Next Up
1. Final About section copy/tone pass (contractor-first)
2. Possibly add blog content or new landing pages
3. Go live → SEO audit → iterate

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router), TypeScript |
| Styling | Tailwind CSS v4 + CSS Keyframes |
| Components | ShadCN/UI |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| Fonts | Bebas Neue (headings/display) + Barlow (body, weights 300–600) |
| Deploy | Cloudflare Pages via GitHub (`arjand378-eng/peel-p2`) |

---

## Style Guide

- **Background:** `#0f0f0d` → HSL `60 7% 5%`
- **Text:** `#f5f0e8` → HSL `36 33% 93%`
- **Accent:** `#f59e0b` (amber) → HSL `38 92% 50%` — CTAs, borders, highlights
- **Secondary:** `#78716c` (stone mid-tone)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)`
- **Imagery:** Dark, cinematic, earth-toned. Real job site photos only — no stock photos of fake workers.

---

## Hero Video Status
**HOLD — pending client confirmation.**
Manny's brief says "no autoplay videos" but this conflicts with the current hero.mp4. Leave hero video in place until Manny is asked directly and confirms. If he says remove it, replace with a Ken Burns static photo.

---

## Design Direction

### Primary inspiration (visual/aesthetic)
- **CARMOWOOD** (`inspiration/CARMOWOOD/`) — premium tone, hero overlay, image card hover, project grid
- **KREISSON** (`inspiration/KREISSON/`) — scroll reveals, infinite trust marquee

### Secondary inspiration (code/copy structure only)
- **Loveable prototype** (`inspiration/LOVEABLE/`) — component scaffolding, copy text, section order
- **Claude Design** (`inspiration/Claude Design/`) — marquee animation, bento grid concept

### Client-referenced sites
- Aecon Group — strong industrial feel
- PCL Construction — clean and structured
- Direction: layout clarity + authority, not flashy visuals

---

## Animation Hierarchy
1. CSS Keyframes — micro-animations, hover states
2. Framer Motion — page transitions, component enter/exit
3. GSAP + ScrollTrigger — scroll sequences, staggered reveals
4. No Spline in hero. No autoplay video (pending confirmation).

---

## Developer Standards
- Mobile-first responsive design
- Hardware-accelerated animations only (transform, opacity)
- Heavy assets lazy-loaded via `dynamic(() => import(...), { ssr: false })`
- `prefers-reduced-motion` respected throughout
- No >5MB files committed to git
- Target: Lighthouse 90+ Performance, 100 Accessibility

---

## Active Design Skills
Read these skill files before every UI task:

| File | When to Apply |
|---|---|
| `.claude/skills/gpt-taste-SKILL.md` | Every page and section — AIDA structure, GSAP, bento grids |
| `.claude/skills/output-SKILL.md` | Every code task — no truncation, pause cleanly at token limit |
| `.claude/skills/brutalist-SKILL.md` | Hero and Services sections — industrial/mechanical aesthetic |

---

## Project File Locations
- **Project root:** `/Users/arjan/Documents/CLAUDE PRACTICE/WEBSITE PRACTICE/Peel P2/`
- **Next.js app:** same root (NOT in a `peel-p2/` subfolder — was moved up)
- **Client photos:** `public/images/IMG_8777.JPG` through `IMG_8787.JPG`
- **Stock photos:** `public/images/photos/` (pexels, used in ServicesPreview)
- **Hero video:** `public/video/hero.mp4`
- **GitHub repo:** `arjand378-eng/peel-p2`

---

## What Client Does NOT Want
- No stock photos of fake workers
- No autoplay videos (pending confirmation)
- No pop-ups
- No cluttered or busy layouts
- No cheap-looking design