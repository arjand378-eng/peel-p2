import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    img: "/images/IMG_8777.JPG",
    name: "Industrial Tear-Down",
    location: "Mississauga, ON",
    category: "Demolition",
  },
  {
    img: "/images/pexels-foundation.jpg",
    name: "Custom Home Foundation",
    location: "Caledon, ON",
    category: "Foundation",
  },
  {
    img: "/images/pexels-land-clearing.jpg",
    name: "12-Acre Land Clearing",
    location: "Brampton, ON",
    category: "Land Clearing",
  },
  {
    img: "/images/IMG_8784.JPG",
    name: "Subdivision Site Grading",
    location: "Mississauga, ON",
    category: "Grading",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-background">
      <div className="container-narrow">
        <Reveal className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
              Recent Work
            </p>
            <h2 className="text-display text-5xl md:text-7xl text-foreground max-w-2xl">
              Ground Broken.
              <br />
              <span className="text-primary">Promises Kept.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              className="group relative aspect-[4/3] overflow-hidden border border-border"
            >
              <Link
                href="/projects"
                aria-label={`View all projects — ${p.name}`}
                className="absolute inset-0 z-30"
              />
              <Image
                src={p.img}
                alt={`${p.name} in ${p.location}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              {/* Amber border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-500" />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="text-xs uppercase tracking-widest bg-primary/90 text-primary-foreground px-2.5 py-1">
                  {p.category}
                </span>
              </div>
              {/* Project info slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-display text-3xl md:text-4xl text-foreground tracking-wide">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-primary">
                      {p.location}
                    </p>
                  </div>
                  <div className="w-11 h-11 flex-shrink-0 border border-foreground/20 group-hover:bg-primary group-hover:border-primary flex items-center justify-center transition-smooth">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-primary/60 hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground px-7 py-4 text-sm uppercase tracking-[0.3em] transition-colors"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
