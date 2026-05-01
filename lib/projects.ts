export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  scope: string;
  equipment: string[];
  hero: string;
  gallery: string[];
  summary: string;
  body: { heading: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "caledon-custom-home-foundation",
    title: "Custom Home Foundation Excavation",
    category: "Foundation Excavation",
    location: "Caledon, ON",
    year: "2025",
    scope:
      "Full-depth foundation excavation for a 4,800 sq ft custom build on a sloped rural lot.",
    equipment: ["CAT 320 excavator", "Bobcat S650 skid steer", "Dump trucks (tandem)"],
    hero: "/images/service-photos/foundation-excavation.jpg",
    gallery: [
      "/images/service-photos/foundation-excavation.jpg",
      "/images/IMG_8780.JPG",
      "/images/services/caledon-result.jpg",
    ],
    summary:
      "Engineered foundation cut on a steep grade in Caledon. Delivered to spec, on schedule, ready for the framing crew.",
    body: [
      {
        heading: "The Build",
        text: "The site sat on a 14-degree natural grade with a high water table at the lower elevation. The architect's plan called for a stepped footing on the downslope side and a full 9-foot basement on the upslope side. We surveyed the dig from the contractor's stakes, cross-checked elevations, and started the cut from the high corner.",
      },
      {
        heading: "How We Did It",
        text: "The CAT 320 handled the bulk excavation while the skid steer cleaned the perimeter and squared the footing benches. We hauled spoil to a designated stockpile on-site so the contractor could use a portion for backfill once the foundation walls were poured. Final grade was checked against the engineer's drawings before sign-off.",
      },
      {
        heading: "The Result",
        text: "Three working days from first cut to walk-through. The framer started forms the next morning. No re-dig, no surprises, no schedule slip for the GC.",
      },
    ],
  },
  {
    slug: "mississauga-industrial-demolition",
    title: "Industrial Tear-Down & Site Clear",
    category: "Demolition",
    location: "Mississauga, ON",
    year: "2024",
    scope:
      "Full demolition of a 12,000 sq ft warehouse, concrete slab break-out, and site clearing for redevelopment.",
    equipment: ["CAT 336 excavator with shear", "Concrete pulverizer", "Loader & dump trucks"],
    hero: "/images/IMG_8777.JPG",
    gallery: [
      "/images/IMG_8777.JPG",
      "/images/IMG_8779.JPG",
      "/images/IMG_8785.JPG",
    ],
    summary:
      "End-of-life industrial building taken down cleanly and disposed of properly, leaving the lot ready for the next phase.",
    body: [
      {
        heading: "The Job",
        text: "An aging industrial warehouse needed to come down to make room for a new commercial development. The structure shared a wall with an active neighbouring tenant, so dust control and vibration management were on the table from the first site visit.",
      },
      {
        heading: "How We Did It",
        text: "We pre-cut the shared wall, sequenced the demo from the far end, and ran water suppression throughout. Steel was sorted and sent to recycling. Concrete slab was broken out, crushed on-site where possible, and hauled off. The lot was rough-graded for the next contractor's stake-out.",
      },
      {
        heading: "The Result",
        text: "Demo complete in nine working days. Zero damage to the neighbour. Site signed off and turned over to the developer ahead of schedule.",
      },
    ],
  },
  {
    slug: "milton-subdivision-site-prep",
    title: "Subdivision Site Preparation",
    category: "Site Preparation",
    location: "Milton, ON",
    year: "2025",
    scope:
      "Mass site grading and rough-cut for an 18-lot residential subdivision, including stripping, balancing, and roadway sub-base.",
    equipment: ["CAT D6 dozer", "CAT 336 excavator", "Articulated dump trucks", "Compactor"],
    hero: "/images/IMG_8784.JPG",
    gallery: [
      "/images/IMG_8784.JPG",
      "/images/IMG_8786.JPG",
      "/images/IMG_8787.JPG",
    ],
    summary:
      "Mass excavation and grading on an 18-lot subdivision in Milton. Balanced cut and fill on-site, ready for utilities.",
    body: [
      {
        heading: "The Build",
        text: "The developer needed the entire parcel stripped, balanced, and graded to engineer's drawings before utilities went in. Topsoil had to be preserved for re-spread on each lot at final grade. Roadway sub-base needed to be cut and compacted to municipal spec.",
      },
      {
        heading: "How We Did It",
        text: "We stripped topsoil into a dedicated stockpile, then ran a balanced cut-and-fill across the lots so almost nothing left the site. The dozer set rough grade, the excavator cleaned tight corners and lot lines, and the compactor passed the road sub-base in lifts. Daily grade checks against the survey kept us tight to plan.",
      },
      {
        heading: "The Result",
        text: "Subdivision delivered grade-ready in just under three weeks. Utility crews mobilized on day one of the next phase. Developer signed off without a punch list.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
