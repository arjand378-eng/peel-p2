import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

export const metadata: Metadata = {
  title: "Excavation & Demolition Services for Contractors | Peel Excavation",
  description:
    "15 excavation services across the GTA: foundation digging, basement excavation, demolition, site preparation, grading, trenching, lot clearing & more. Owner-operated fleet. 30+ years experience. Licensed & insured.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "Service", name: "Foundation Excavation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Basement Digging", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Garage Excavation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Pool Excavation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Site Preparation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Land Grading & Rough Grading", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Final Grading & Regrading", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Trenching & Utility Excavation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Demolition", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Concrete Removal & Breakage", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Backfilling & Soil Compaction", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Lot Clearing & Earthmoving", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Drainage Preparation", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Heavy Equipment Work & Transport", areaServed: "Greater Toronto Area, Ontario" },
    { "@type": "Service", name: "Excavation Services", areaServed: "Greater Toronto Area, Ontario" },
  ],
};

const services = [
  {
    id: "foundation-excavation",
    title: "Foundation Excavation",
    tagline: "The dig that everything else is built on.",
    description:
      "Foundation excavation is our core service and our strongest discipline. We work directly with builders, structural engineers, and general contractors to deliver precise, on-schedule digs for new homes, commercial buildings, and infill projects across the GTA. Our operators read soil conditions, respect engineered specs, and stay on schedule so the rest of your build can proceed without delays. From shallow footings on tight urban lots to deep commercial foundations on industrial pads, we bring 30+ years of hands-on experience to every job site. Every dig is set up clean for formwork, concrete, and waterproofing crews to follow.",
    bullets: [
      "Full residential and commercial foundation digs to engineer specifications",
      "Strip footings, spread footings, and pad footings for any build type",
      "Walkout, look-out, and full-depth basement configurations",
      "Tight urban lots and infill construction projects",
      "Soil condition assessment and shoring coordination as required",
      "Coordination with formwork, concrete, and waterproofing crews",
      "Excavation backfill ready for drainage and weeping tile installation",
      "Hand-dig finishing and clean-out for tight tolerances",
    ],
    img: "/images/service-photos/foundation-excavation.jpg",
    imgAlt: "Excavator digging a deep foundation cut on a construction site",
  },
  {
    id: "basement-digging",
    title: "Basement Digging",
    tagline: "More space. Dug right the first time.",
    description:
      "Whether it's a brand-new full basement, a basement lowering for added headroom, or an underpinning project on an existing structure, we handle the dig with precision and care. We work around existing structures, utilities, and tight access points that other crews won't touch. Your structural engineer's dimensions are our target. No rounding, no guessing, no costly do-overs that push your timeline back. We coordinate directly with waterproofing, drainage, and concrete trades to keep the project moving from dig day through to backfill.",
    bullets: [
      "New basement excavations on residential and commercial lots",
      "Basement lowering and underpinning for additional headroom",
      "Walkout and side-entrance dig-outs",
      "Tight access projects in urban infill neighbourhoods",
      "Hand-dig finishing where machines can't reach",
      "Coordination with waterproofing, weeping tile, and concrete crews",
      "Material haul-away and clean site handover",
      "Existing structure protection and shoring during the dig",
    ],
    img: "/images/service-photos/basement-digging.jpg",
    imgAlt: "Deep basement excavation on a residential construction project",
  },
  {
    id: "garage-excavation",
    title: "Garage Excavation",
    tagline: "Below-grade garages. Above-grade results.",
    description:
      "Below-grade and semi-underground garages require the same precision as a full foundation dig, sometimes more given the access constraints around existing homes and tight property lines. We handle excavation for detached garages, attached additions, and underground parking structures, including ramp cuts, retaining wall preparation, and drainage setup. Whether it's a single-car detached on a tight residential lot or a multi-bay underground parking garage on a commercial pad, we plan the dig around your access constraints and deliver to spec. Footings, floor slab prep, and drainage are all set up clean for the next trade.",
    bullets: [
      "Detached and attached residential garage excavations",
      "Below-grade and semi-underground garage digs",
      "Multi-bay underground commercial parking excavation",
      "Ramp cut and driveway approach excavation",
      "Footing and floor slab preparation",
      "Retaining wall excavation and base prep",
      "Drainage and waterproofing setup",
      "Coordination with concrete, framing, and waterproofing crews",
    ],
    img: "/images/photos/pexels-pixabay-162624.jpg",
    imgAlt: "Excavation for a below-grade garage structure",
  },
  {
    id: "pool-excavation",
    title: "Pool Excavation",
    tagline: "Clean digs. No damage to surrounding grade.",
    description:
      "Pool excavation demands accuracy. A few inches off spec means a pool shell that doesn't fit, a contractor that's frustrated, and a client paying for the rework. Our operators have the experience to dig to pool contractor dimensions, work around existing landscaping and underground utilities, and leave the surrounding grade intact. We handle in-ground residential pools, commercial lap pools, hotel and resort installations, and custom designs with stepped depths and integrated spas. Equipment access is planned in advance so we can get in and out clean without tearing up your yard.",
    bullets: [
      "Residential in-ground pool excavation to contractor specs",
      "Commercial, hotel, and resort pool digs",
      "Custom pool shapes with stepped depths and integrated spas",
      "Equipment access planning for tight backyard sites",
      "Haul-away and disposal of excavated material",
      "Grading and granular backfill around the pool shell",
      "Coordination with pool contractors and landscapers",
      "Protection of existing landscaping, fencing, and hardscaping",
    ],
    img: "/images/services/pool-excavation.jpg",
    imgAlt: "Freshly excavated residential backyard swimming pool dig with stepped depth and survey stakes",
  },
  {
    id: "site-preparation",
    title: "Site Preparation",
    tagline: "From raw land to build-ready. Fast.",
    description:
      "Before any structure goes up, the site needs to be right. We handle the full scope of site prep: stripping and stockpiling topsoil, rough grading to civil plan, compacting subgrade to engineer spec, and coordinating with surveyors, civil engineers, and general contractors to hit the benchmarks that matter. Residential subdivisions, commercial pads, industrial sites, and institutional projects. We mobilize the equipment and crew to take raw land and deliver a build-ready site on schedule. Erosion and sediment control is set up before the first cut.",
    bullets: [
      "Topsoil stripping and on-site stockpiling",
      "Subgrade preparation and compaction to engineer spec",
      "Cut and fill operations to grade targets",
      "Benchmark and elevation coordination with surveyors",
      "Granular base placement and compaction",
      "Large commercial, industrial, and institutional site prep",
      "Residential subdivision pad preparation",
      "Erosion and sediment control setup",
    ],
    img: "/images/services/site-preparation.jpg",
    imgAlt: "Build-ready commercial lot fully prepped, rough-graded, and staked, ready for foundation work",
  },
  {
    id: "land-grading",
    title: "Land Grading & Rough Grading",
    tagline: "Flat, sloped, or contoured. We grade it right.",
    description:
      "Proper grading protects your investment for years. Water needs to go somewhere, and that somewhere should be away from your foundation, not toward it. We provide rough grading for new subdivisions, commercial pads, and industrial sites, working from civil drainage plans and survey stakes so every lot is ready for the next trade. Whether you're prepping 50 lots in a new subdivision or correcting drainage on a single commercial property, we grade it right the first time. Driveways, laneways, and topsoil redistribution are all part of the package.",
    bullets: [
      "Rough grading for new subdivisions and lots",
      "Commercial pad grading to civil drawings",
      "Industrial site grading and pad preparation",
      "Drainage slope correction and water management",
      "Driveway and laneway grading",
      "Topsoil redistribution and rough lawn prep",
      "Survey stake coordination and elevation control",
      "Erosion control during grading operations",
    ],
    img: "/images/service-photos/land-grading.jpg",
    imgAlt: "Graded construction lot ready for building in the GTA",
  },
  {
    id: "final-grading",
    title: "Final Grading & Regrading",
    tagline: "The last pass before the landscapers arrive.",
    description:
      "Final grading is the finish line before landscaping, sodding, and fencing go in. We bring lots and yards to finished grade with tight tolerances, smooth transitions between hardscape and landscape, and correct drainage slopes that move water where it needs to go. We also regrade existing properties where drainage issues, settling, additions, or pool installations have disrupted the original grade. Clean lines, smooth transitions, and proper slopes, every time. The site is left ready for sod, seed, hardscaping, and fencing crews to take over.",
    bullets: [
      "Final grade to permit and landscape drawings",
      "Smooth transitions between structures and lot",
      "Regrading around additions, pools, and new structures",
      "Correcting drainage and pooling problems",
      "Negative slope correction away from foundations",
      "Topsoil spreading to final grade",
      "Driveway and walkway approach grading",
      "Site cleanup ready for sod and landscaping",
    ],
    img: "https://images.pexels.com/photos/4523602/pexels-photo-4523602.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imgAlt: "Final grading of a residential lot before landscaping",
  },
  {
    id: "trenching",
    title: "Trenching & Utility Excavation",
    tagline: "Underground infrastructure. Done safely.",
    description:
      "Utility trenching requires locates, precision, and care around existing infrastructure. We trench for water mains, sanitary and storm sewer lines, hydro conduits, gas service, and telecom runs across residential, commercial, and industrial sites. Every trench starts with Ontario One Call locates and ends with proper backfill, compaction, and restoration. Service upgrades on existing properties, new commercial site servicing, and full subdivision infrastructure. We handle the underground side of the build with the safety protocols and shoring expertise the work demands.",
    bullets: [
      "Water service and main trenching to municipal spec",
      "Sanitary and storm sewer installation trenches",
      "Hydro and gas conduit trenching for service runs",
      "Telecom and data infrastructure trenches",
      "Ontario One Call locate coordination",
      "Trench shoring and safety compliance",
      "Residential service upgrade trenching",
      "Commercial site servicing and subdivision infrastructure",
    ],
    img: "/images/service-photos/trenching.jpg",
    imgAlt: "Utility trenching on a commercial construction site",
  },
  {
    id: "demolition",
    title: "Demolition",
    tagline: "Controlled tear-downs. Clean sites.",
    description:
      "We handle residential and commercial demolitions with full debris removal, site cleanup, and post-demo grading. Every tear-down is planned for safe, controlled execution, protecting adjacent structures, utilities, and neighbouring properties throughout the process. We coordinate with utility shut-offs, abatement contractors where required, and waste disposal facilities to keep the project clean and compliant. When the debris is hauled and the dust settles, the site is graded flat and ready for the next phase, whether that's a new build, a parking lot, or a clean lot for sale.",
    bullets: [
      "Full residential demolition and tear-down",
      "Partial and selective demolition for renovations",
      "Commercial and industrial building demolition",
      "Garage, shed, and outbuilding removal",
      "Foundation removal and below-grade demolition",
      "Full debris hauling, sorting, and disposal",
      "Post-demo grading and site cleanup",
      "Utility disconnect and abatement coordination",
    ],
    img: "/images/photos/pexels-alesustinau-11518763.jpg",
    imgAlt: "Demolition excavator tearing down a structure",
  },
  {
    id: "concrete-removal",
    title: "Concrete Removal & Breakage",
    tagline: "Break it. Haul it. Done.",
    description:
      "Concrete removal is more than renting a jackhammer and hoping for the best. We break and haul slabs, driveways, sidewalks, retaining walls, foundations, and curbs at any scale. Our equipment handles volume: hydraulic breakers, excavator-mounted hammers, and skid steers for tight access work where larger machines won't fit. Whether it's a single residential driveway, a commercial parking lot, or a foundation wall demolition during a renovation, we clear the concrete fast, dispose of it properly through certified recyclers, and leave the site ready for whatever's next.",
    bullets: [
      "Concrete slab and floor breaking",
      "Driveway, walkway, and sidewalk removal",
      "Foundation wall demolition and removal",
      "Retaining wall removal",
      "Commercial parking lot demolition",
      "Curb and gutter removal",
      "Hydraulic breaker and hammer attachment work",
      "Debris hauling, recycling, and proper disposal",
    ],
    img: "/images/service-photos/concrete-removal.jpg",
    imgAlt: "Concrete breaking and removal on a construction site",
  },
  {
    id: "backfilling",
    title: "Backfilling & Soil Compaction",
    tagline: "Solid ground behind every foundation.",
    description:
      "After foundation walls are up, backfilling needs to be done in lifts with proper compaction, not dumped all at once. We backfill with clean granular material, compact in controlled lifts to spec, and leave you with stable ground that won't settle and crack your foundation drainage, weeping tile, or interior slab down the road. Whether it's a residential foundation, utility trench, or commercial pad, we follow engineered backfill specs and coordinate material delivery so the work flows without delay. Compaction testing is documented for inspections.",
    bullets: [
      "Granular and engineered fill backfilling to spec",
      "Compaction in controlled lifts with proper testing",
      "Foundation wall backfill around waterproofing",
      "Utility trench backfilling and compaction",
      "Material supply and delivery coordination",
      "Vibratory plate and roller compaction",
      "Backfill around weeping tile and drainage systems",
      "Site cleanup and grade restoration post-backfill",
    ],
    img: "/images/IMG_8784.JPG",
    imgAlt: "Backfilling and soil compaction around a foundation wall",
  },
  {
    id: "lot-clearing",
    title: "Lot Clearing & Earthmoving",
    tagline: "Raw land. Build-ready results.",
    description:
      "We transform overgrown, wooded, or debris-covered land into clean, level sites ready for construction. Trees, stumps, brush, and demolition debris are cleared and hauled off-site or processed on-site depending on volume. Large-scale earthmoving for subdivisions, commercial developments, and industrial parks is handled with the right equipment for the job: bulldozers, excavators, articulated trucks, and grinders for organic material. Whether it's a half-acre residential lot or a 50-acre commercial development, we deliver build-ready land on schedule.",
    bullets: [
      "Tree and stump removal with proper disposal",
      "Brush, vegetation, and undergrowth clearing",
      "Large-scale earthmoving and mass grading",
      "Rock, boulder, and debris removal",
      "Topsoil stripping and stockpiling",
      "Mulching and on-site grinding of organic material",
      "Site preparation for permits and construction",
      "Erosion control setup post-clearing",
    ],
    img: "/images/service-photos/lot-clearing.jpg",
    imgAlt: "Excavator clearing a lot for new construction",
  },
  {
    id: "drainage-preparation",
    title: "Drainage Preparation",
    tagline: "Water management starts at grade.",
    description:
      "Poor drainage is the number one cause of foundation damage, flooded basements, and failed landscaping. We prepare drainage systems at the excavation stage: swales, catch basins, weeping tile beds, French drains, and lot grading designed to move water away from structures and toward proper municipal outlets. Working from civil drainage plans, we excavate, place granular bedding to spec, and coordinate with drainage engineers and plumbers to make sure the system works the day it's installed and decades after. Water goes where it should, every time.",
    bullets: [
      "Swale and drainage channel grading",
      "Weeping tile bed preparation around foundations",
      "Catch basin and storm outlet installation",
      "French drain excavation and installation",
      "Lot grading for positive drainage",
      "Sump pit excavation and preparation",
      "Granular bedding placement to spec",
      "Coordination with civil and drainage engineers",
    ],
    img: "/images/service-photos/drainage-preparation.jpg",
    imgAlt: "Drainage preparation and grading on a construction site",
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment Work & Transport",
    tagline: "The right machine. On site when you need it.",
    description:
      "Our owner-operated fleet means you get reliable equipment without rental delays or subcontractor markups eating your project budget. We mobilize excavators, skid steers, dozers, and support equipment across the GTA, Ontario, and into Quebec for large-scale projects. For remote sites or specialized work, we coordinate transport via lowboy and float trailers so your job site isn't waiting on a machine to arrive. When the project demands something specific or oversized, we have the network, permits, and experience to source and move it.",
    bullets: [
      "Excavator and skid steer mobilization",
      "Bulldozer, grader, and loader transport",
      "Equipment transport across Ontario and Quebec",
      "Lowboy and float trailer coordination",
      "Large-scale commercial and industrial mobilization",
      "Flexible scheduling around your build timeline",
      "No rental delays. Owner-operated fleet.",
      "Specialized attachment sourcing as required",
    ],
    img: "https://images.pexels.com/photos/30354001/pexels-photo-30354001.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imgAlt: "Heavy excavation equipment on a large Ontario construction site",
  },
  {
    id: "excavation-services",
    title: "Excavation Services",
    tagline: "If it needs to be dug, we dig it.",
    description:
      "Not every project fits a standard category. We handle the full range of excavation work, from custom residential projects to large commercial contracts that require site-specific planning, engineering coordination, and creative problem-solving on the fly. With 30+ years of experience and an owner-operated fleet, we take on complex and non-standard excavation projects that other crews won't quote, including tight-access urban work, environmental remediation support, emergency response digs, and large-scale Ontario and Quebec projects where logistics and timing matter as much as the dig itself.",
    bullets: [
      "Custom residential excavation projects",
      "Commercial and industrial excavation contracts",
      "Difficult access and tight-site work",
      "Ontario-wide and Quebec large-scale projects",
      "Turnkey excavation and site prep packages",
      "Environmental remediation excavation support",
      "Emergency excavation response",
      "Specialized attachment and equipment work",
    ],
    img: "/images/IMG_8779.JPG",
    imgAlt: "General excavation services on a GTA construction site",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* Page hero */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/13931828/pexels-photo-13931828.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Excavation services for contractors across Ontario"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(60 7% 5% / 0.5) 0%, hsl(60 7% 5% / 0.85) 100%)",
          }}
        />
        <div className="relative z-10 h-full container-narrow flex flex-col justify-end pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">Our Services</p>
          <h1 className="text-display text-5xl md:text-7xl text-foreground max-w-4xl">
            Excavation Services for Contractors
            <br />
            <span className="text-primary">Across Ontario</span>
          </h1>
        </div>
      </section>

      {/* Service sections */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 md:py-32 ${i % 2 === 0 ? "bg-background" : "bg-surface"} border-b border-border`}
        >
          <div className="container-narrow">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Text */}
              <Reveal className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">
                  {s.tagline}
                </p>
                <h2 className="text-display text-5xl md:text-6xl text-foreground mb-6">
                  {s.title}
                </h2>
                <p className="text-foreground text-lg lg:text-xl font-normal leading-[1.8] mb-8">{s.description}</p>
                <ul className="space-y-3 mb-10">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-base font-medium text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0 text-base">◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth"
                >
                  Get a Quote for This Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Reveal>

              {/* Photo */}
              <Reveal delay={200} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <QuoteCTA />
      <Footer />
    </main>
  );
}
