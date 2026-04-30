import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Foundation Excavation",
    desc: "Precision foundation digs for residential and commercial builds. Footings, full basements, and below-grade structures dug to engineer specs, on schedule.",
    href: "/services#foundation-excavation",
    img: "https://images.pexels.com/photos/30354001/pexels-photo-30354001.jpeg?auto=compress&cs=tinysrgb&w=1920",
    span: "lg:col-span-2 lg:row-span-2",
    feature: true,
  },
  {
    title: "Site Preparation",
    desc: "Full site clearing, grading, and rough prep before any build begins.",
    href: "/services#site-preparation",
    img: "/images/Photos/pexels-pixabay-162624.jpg",
  },
  {
    title: "Demolition",
    desc: "Controlled residential and commercial tear-downs with full debris removal.",
    href: "/services#demolition",
    img: "/images/Photos/pexels-alesustinau-11518763.jpg",
  },
  {
    title: "Basement Digging",
    desc: "Walkout basements, full digs, and below-grade extensions to spec.",
    href: "/services#basement-digging",
    img: "/images/Photos/pexels-peter-dyllong-2158803154-36815365.jpg",
  },
  {
    title: "Trenching & Utilities",
    desc: "Water, sewer, hydro, and telecom trenching for any lot or commercial site.",
    href: "/services#trenching",
    img: "https://images.pexels.com/photos/33122153/pexels-photo-33122153.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Land Grading",
    desc: "Rough and finish grading for drainage, pad prep, and build-ready lots.",
    href: "/services#land-grading",
    img: "/images/Photos/pexels-borishamer-16075860.jpg",
  },
  {
    title: "Lot Clearing",
    desc: "Trees, stumps, brush, and debris cleared. Site ready from day one.",
    href: "/services#lot-clearing",
    img: "/images/Photos/pexels-zante-7080010.jpg",
  },
  {
    title: "Pool Excavation",
    desc: "Clean, precise pool digs for residential and commercial properties.",
    href: "/services#pool-excavation",
    img: "https://images.pexels.com/photos/15138925/pexels-photo-15138925.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Concrete Removal",
    desc: "Breaking and hauling concrete slabs, driveways, foundations, and walls.",
    href: "/services#concrete-removal",
    img: "https://images.pexels.com/photos/4523602/pexels-photo-4523602.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-background">
      <div className="container-narrow">
        {/* Label row */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-primary text-xs uppercase tracking-[0.4em]">What We Do</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors"
          >
            See All 15 Services <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Heading */}
        <Reveal className="mb-0">
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
            Heavy Equipment.
            <br />
            <span className="text-primary">Heavier Reputation.</span>
          </h2>
        </Reveal>

        {/* Divider + description */}
        <Reveal delay={150} className="mt-8 pt-8 border-t border-border mb-12">
          <p className="text-foreground text-xl md:text-2xl font-normal leading-relaxed max-w-2xl">
            From single-home basements to multi-acre commercial sites. The equipment and crew to get it done on schedule, on budget, with zero surprises.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 [grid-auto-flow:dense]">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className={`group relative overflow-hidden border border-border hover:border-primary transition-smooth cursor-pointer ${
                s.span ?? ""
              } ${s.feature ? "min-h-[380px]" : "min-h-[220px]"}`}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/55 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />

              <Link
                href={s.href}
                className="relative z-10 flex flex-col justify-between p-7 md:p-8 h-full absolute inset-0"
              >
                <div className="flex items-start justify-between">
                  <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
                </div>

                <div>
                  <h3
                    className={`text-display text-foreground tracking-wide ${
                      s.feature ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
