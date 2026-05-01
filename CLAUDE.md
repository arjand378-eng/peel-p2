# Peel Excavation Services — Production Website

## Context
Paid client project for **Peel Excavation Services** — excavation, demolition, and site prep company serving the GTA and beyond.

**Sales contact:** Manny Dhanoa (handles inbound inquiries — do NOT name him as owner on the site)
**Real business owner:** "Jasper" (the actual excavation operator). Manny is acting as a lead-gen middleman representing Jasper's business. Jasper does NOT directly know about / participate in this website setup — keep this in mind for any GBP/LSA/license-verified marketing options.
**Phone:** 647-321-9437 (click-to-call, mobile priority)
**Email:** info@peelexcavation.ca (not Gmail — already set up)
**Experience est.:** ~1995 (30+ years in the trade) | **Company registered:** — use EST. 1995 on site, not
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

## Current Status (post-launch)
Site is **live** on Cloudflare Pages. Pages: Home, Services (all 15), About, Projects, Blog (SEO placeholder), Contact (multi-step form). Nav: Services · Projects · About · Contact.

**Outstanding work (post-launch fix list):**

*Quick wins (~15 min each):*
- Add Home link in nav bar; wrap the `P` logo badge in `<Link href="/">` so it returns to home
- Show phone number + email on mobile contact form (currently hidden on mobile)
- Remove the "man standing" photo on the Caledon Custom Home Foundation project page (`/projects/caledon-custom-home-foundation`) — unprofessional shot
- Fix mobile hero video — `hero.mp4` is showing as a static poster on iOS. Likely missing `playsInline` + `muted` attrs on the `<video>` element

*Bigger items:*
- 6 service sections still on Pexels/older photos and need real client photos: garage, final-grading, demolition, backfilling, heavy-equipment, general excavation
- About page copy/tone pass (contractor-first voice)
- Post-launch SEO audit (use `seo-audit` skill once quick wins are merged)
- New **Equipment page** for Manny's fleet (route: `/equipment`, mirror Services page structure)
- Update Blog placeholder pages with real SEO content (use `blog-write` skill)
- Logo design — initial concept generated via GPT-5.5 image. User has the image file from that session and will provide it for integration. Until then, current site uses the `P` badge SVG placeholder.

*Domain / hosting status:*
- Site is on Cloudflare Pages default subdomain (`peel-p2.pages.dev`)
- Custom domain NOT yet purchased — Manny was supposed to buy it; this has stalled (see MARKETING-STRATEGY.md for the full client situation)

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
- **Imagery:** Dark, cinematic, earth-toned. Real job site photos only 

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
4. No Spline in hero.

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
- **Project root:** `/Users/arjan/Documents/CLAUDE PRACTICE/WEBSITE PRACTICE/Peel P2/` (Next.js app lives at the root)
- **Client photos:** `public/images/` (IMG_8777, 8779, 8784 currently used in code)
- **Service photos:** `public/images/service-photos/` (9 client-supplied, named by service)
- **Stock photos:** `public/images/photos/` (pexels, used in ServicesPreview)
- **Hero video:** `public/video/hero.mp4`
- **GitHub repo:** `arjand378-eng/peel-p2` (deploys to Cloudflare Pages)

### File Storage Policy (STRICT)
**ALL project-related files MUST be saved inside this project folder. NEVER write to `~/.claude/` or any user-level Claude directory.**

This includes — but is not limited to — plans, notes, scratch files, image prompts, drafts, generated assets, transcripts, and any working artifacts produced during a session.

- **Plans** → save to `./plans/` inside the project (create the folder if it doesn't exist), NOT `~/.claude/plans/`
- **Generated assets** → save to `./public/` or appropriate project subfolder, NOT `~/.claude/`
- **Notes / scratch / drafts** → save to `./notes/` inside the project, NOT `~/.claude/`
- **Memory files** are the only exception — `MEMORY.md` and its referenced files live in the user-level memory directory by design

Why: keeping everything inside the project folder means it travels with the repo, is visible in version control, and is recoverable from the project itself rather than scattered across system-level Claude directories. The user has flagged this multiple times across sessions — treat it as non-negotiable.

---

## What Client Does NOT Want
- No autoplay videos (current hero.mp4 is the exception — confirm with Manny before adding any others)
- No pop-ups
- No cluttered or busy layouts
- No cheap-looking design