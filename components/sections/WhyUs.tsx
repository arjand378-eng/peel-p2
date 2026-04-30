import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

const stats = [
  { end: 30, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "%", label: "Licensed & Insured" },
  { end: 50, suffix: "+", label: "Repeat Clients" },
];

const trust = [
  { label: "WSIB Compliant" },
  { label: "BBB Accredited" },
  { label: "Free Quotes" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative bg-surface border-y border-border">

      {/* Stats row */}
      <div className="border-b border-border py-20 md:py-24">
        <div className="container-narrow">
          <Reveal className="mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.4em]">By The Numbers</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 200} className="border-l-2 border-primary pl-6 py-2">
                <div className="text-display text-7xl md:text-8xl text-foreground leading-none">
                  <CountUp end={s.end} suffix={s.suffix} duration={1100 + i * 150} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-[0.3em] text-foreground/55">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column: copy left, photo right */}
      <div className="py-28 md:py-36">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
                About Peel Excavation
              </p>
              <h2 className="text-display text-6xl md:text-7xl text-foreground mb-10">
                Built for the
                <br />
                <span className="text-primary">Trade.</span>
              </h2>
              <p className="text-foreground text-base lg:text-lg font-normal leading-[1.85] mb-7">
                With over 30 years of hands-on excavation experience, we know what
                contractors need: a crew that shows up, equipment that doesn&apos;t break
                down, and a timeline you can actually schedule around. That&apos;s what
                Peel Excavation delivers, every time.
              </p>
              <p className="text-foreground text-base lg:text-lg font-normal leading-[1.85] mb-7">
                Our fleet is owner-operated. No rental delays, no subcontractor
                surprises. When you book, we show up. We understand job site
                coordination because we&apos;ve been on both sides of the fence.
              </p>
              <p className="text-foreground text-base lg:text-lg font-normal leading-[1.85] mb-12">
                From a single basement dig to multi-acre site preparation for commercial
                builds, every project gets the same standard: clean execution, on-time
                delivery, and zero shortcuts.
              </p>

              {/* Trust signals row */}
              <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                {trust.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/60"
                  >
                    <span className="text-primary">✓</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="relative pb-6 md:pb-0">
              {/* 3-image collage grid */}
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[460px]">
                {/* Primary tall image — left column, full height */}
                <div className="relative row-span-2 overflow-hidden border border-border">
                  <Image
                    src="https://images.pexels.com/photos/13931828/pexels-photo-13931828.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Excavator mid-dig on a deep foundation cut"
                    fill
                    className="object-cover"
                    sizes="25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Top-right image */}
                <div className="relative overflow-hidden border border-border">
                  <Image
                    src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Equipment operator in excavator cab on active job site"
                    fill
                    className="object-cover"
                    sizes="25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
                {/* Bottom-right image */}
                <div className="relative overflow-hidden border border-border">
                  <Image
                    src="https://images.pexels.com/photos/4523602/pexels-photo-4523602.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Aerial view of large-scale earthmoving and site preparation"
                    fill
                    className="object-cover"
                    sizes="25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
              {/* EST. badge anchored to bottom-left of the grid */}
              <div className="absolute -bottom-0 -left-6 bg-primary text-primary-foreground p-5 hidden md:block">
                <div className="text-display text-2xl leading-none">EST. 1995</div>
                <div className="text-xs uppercase tracking-widest mt-1.5">
                  Owner-Operated
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

    </section>
  );
}