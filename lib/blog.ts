export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  hero: string;
  intro: string;
  sections: { heading: string; placeholder: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "what-affects-excavation-cost-ontario-2026",
    title: "What Affects Excavation Cost in Ontario? (2026 Contractor's Guide)",
    category: "Pricing",
    date: "2026-04-29",
    readTime: "6 min read",
    excerpt:
      "Excavation pricing in Ontario varies more than most owners expect. Soil, depth, access, and disposal each move the number in ways your quote rarely spells out. Here's the breakdown.",
    hero: "/images/service-photos/foundation-excavation.jpg",
    intro:
      "If you've ever compared two excavation quotes for the same job and seen a 30% gap, you're not alone. Excavation isn't a flat-rate trade — the price moves with conditions on the ground, the depth of the cut, the disposal route, and how clean the access is. This guide walks through the variables that actually drive excavation cost in Ontario in 2026, so you can read a quote and know what you're paying for.",
    sections: [
      {
        heading: "Soil Conditions and Subsurface Surprises",
        placeholder:
          "[Write about how soil type — clay, sand, fill, rock — changes excavation time and cost. Mention groundwater, frost, and the cost of hitting unexpected material mid-dig. Touch on why a soils report saves money on larger jobs.]",
      },
      {
        heading: "Depth, Volume, and Equipment Class",
        placeholder:
          "[Explain how depth of cut moves the equipment class needed (mini excavator vs. 320 vs. 336) and how volume of spoil changes hauling cost. Note that doubling depth more than doubles cost on most lots.]",
      },
      {
        heading: "Site Access and Working Room",
        placeholder:
          "[Cover the cost impact of tight urban lots, overhead lines, neighbouring structures, and limited truck staging. A cramped infill in Toronto is a different price per cubic metre than an open lot in Caledon.]",
      },
      {
        heading: "Disposal and Hauling Distance",
        placeholder:
          "[Explain that spoil isn't free to get rid of. Tipping fees, haul distance to the disposal site, and whether the material is clean fill vs. contaminated all change the bottom-line number. Mention on-site reuse where possible.]",
      },
      {
        heading: "Permits, Inspections, and Engineering",
        placeholder:
          "[Note when a job needs municipal permits, locates, shoring engineering, or inspections — and how that adds line items most homeowners don't expect.]",
      },
      {
        heading: "What a Reliable Quote Should Spell Out",
        placeholder:
          "[Close with a checklist: what a contractor's quote should include so you can compare apples to apples. Itemized hauling, unit rate for unsuitable soil, change-order process, schedule.]",
      },
    ],
  },
  {
    slug: "foundation-excavation-gta-builders-guide",
    title:
      "Foundation Excavation in the GTA: What Builders Need to Know Before Breaking Ground",
    category: "Foundation",
    date: "2026-04-22",
    readTime: "7 min read",
    excerpt:
      "A foundation cut that's off by a foot costs the framer, the concrete crew, and the schedule. Here's what experienced GTA builders confirm before the excavator arrives.",
    hero: "/images/service-photos/basement-digging.jpg",
    intro:
      "Foundation excavation looks simple from the curb — dig a hole, square it, hand it to the next trade. The reality is that most schedule slips on a custom build trace back to something missed in the first 48 hours of the dig. This guide is for GTA builders who want their foundation cut to land right the first time and keep the trades behind it on schedule.",
    sections: [
      {
        heading: "The Pre-Dig Checklist Most Crews Skip",
        placeholder:
          "[Walk through the prep that actually matters: stake-out verification, locates (call before you dig), hoarding and tree protection, neighbour notification, and confirming the hauling route before day one.]",
      },
      {
        heading: "Reading the Drawings With Your Excavator",
        placeholder:
          "[Why the excavator should see the foundation plan and the soils report — not just the lot survey. Cover bench heights, footing extensions, weeping tile zones, and where the utility runs need clearance.]",
      },
      {
        heading: "Soil, Water, and What Changes the Plan",
        placeholder:
          "[GTA-specific soil considerations: Brampton clay, Caledon till, Mississauga fill, lakeshore water tables. When you need shoring vs. a battered cut. When to call the engineer back.]",
      },
      {
        heading: "Schedule, Sequencing, and the Next Trade",
        placeholder:
          "[How foundation excavation sequences with footings, drainage, and forming. Why a clean bench saves the concrete crew a half-day. Why backfill timing matters for the framer.]",
      },
      {
        heading: "Choosing a Contractor That Won't Slow You Down",
        placeholder:
          "[What to look for in a foundation excavation crew on a builder's schedule: owner-operated equipment, insurance, references from other builders, and willingness to coordinate with your other trades.]",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRecentPosts(n: number = 3): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
}
