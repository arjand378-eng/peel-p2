import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TrustMarquee } from "@/components/TrustMarquee";
import { CountUp } from "@/components/CountUp";

export const metadata: Metadata = {
  title: "About Peel Excavation Services | 30+ Years Experience, Owner-Operated",
  description:
    "Peel Excavation Services brings 30+ years of hands-on excavation experience to contractors and builders across the GTA. Owner-operated fleet. No rental delays. Licensed and insured.",
};

const stats = [
  { end: 30, suffix: "+", label: "Years Experience" },
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 50, suffix: "+", label: "Repeat Clients" },
  { label: "Owner-Operated", static: true },
];

const values = [
  {
    icon: "◆",
    title: "Reliability",
    desc: "Contractors run on schedules, and we know it. When you book us, we show up on time, with the right equipment, ready to work. No last-minute calls, no equipment breakdowns, no excuses. Your timeline is our obligation.",
  },
  {
    icon: "◉",
    title: "Precision",
    desc: "A dig that's off by a foot costs everyone. Our operators work to engineer specs, survey stakes, and contractor dimensions. We read the drawings, ask the right questions before we start, and deliver a result the next trade can work from immediately.",
  },
  {
    icon: "★",
    title: "Safety",
    desc: "Every job site runs WSIB compliant. Our operators are certified, our equipment is maintained to manufacturer spec, and we carry full liability insurance. We protect your property, our crew, and everyone on site.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Page hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/33122153/pexels-photo-33122153.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Aerial view of a large excavation site with heavy equipment"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(60 7% 5% / 0.45) 0%, hsl(60 7% 5% / 0.88) 100%)",
          }}
        />
        <div className="relative z-10 h-full container-narrow flex flex-col justify-end pb-16">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">Who We Are</p>
          <h1 className="text-display text-5xl md:text-7xl text-foreground max-w-4xl">
            The Crew Contractors
            <br />
            <span className="text-primary">Call First.</span>
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal>
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
                30+ Years in the Trade
              </p>
              <h2 className="text-display text-5xl md:text-6xl text-foreground mb-8">
                Built for the
                <br />
                <span className="text-primary">Builders.</span>
              </h2>
              <p className="text-lg lg:text-xl font-normal leading-[1.85] text-foreground/90 mb-5">
                Peel Excavation Services was built by people who understand the trade from
                the ground up. With over 30 years of hands-on excavation experience, we know
                what contractors, builders, and property managers need before they have to ask:
                a crew that shows up ready, equipment that doesn't quit, and a dig that's right
                the first time.
              </p>
              <p className="text-lg lg:text-xl font-normal leading-[1.85] text-foreground/90 mb-5">
                Our fleet is owner-operated. That means no rental agency middlemen, no
                subcontractor surprises, and no scheduling gaps when your build is on a
                deadline. When you call, you get a direct answer. When you book, we're there.
              </p>
              <p className="text-lg lg:text-xl font-normal leading-[1.85] text-foreground/90">
                From single-lot foundation digs to multi-acre commercial site preparation,
                we handle the full scope of excavation work across the GTA and Ontario. Every
                project gets the same standard: clean execution, honest communication, and
                zero shortcuts from start to final grade.
              </p>
            </Reveal>

            <Reveal delay={200} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden border border-border">
                <Image
                  src="/about-picture.jpg"
                  alt="Aerial view of an active commercial construction job site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 z-20 bg-primary text-primary-foreground p-6 max-w-[200px] hidden md:block">
                <div className="text-display text-3xl leading-none">EST. 1995</div>
                <div className="text-xs uppercase tracking-widest mt-2">
                  Owner-Operated
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="border-l-2 border-primary pl-6 py-2">
                {s.static ? (
                  <div className="text-display text-5xl md:text-6xl text-foreground mb-2 leading-none">
                    Fleet
                  </div>
                ) : (
                  <div className="text-display text-5xl md:text-6xl text-foreground mb-2 leading-none">
                    <CountUp end={s.end!} suffix={s.suffix!} duration={1100 + i * 150} />
                  </div>
                )}
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container-narrow">
          <Reveal className="mb-16 max-w-2xl">
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
              How We Work
            </p>
            <h2 className="text-display text-5xl md:text-6xl text-foreground">
              What Contractors
              <br />
              <span className="text-primary">Can Count On.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 120}
                className="bg-surface border border-border p-8 hover:border-primary transition-smooth"
              >
                <span className="text-primary text-2xl mb-6 block">{v.icon}</span>
                <h3 className="text-display text-3xl text-foreground mb-4">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service area strip */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
                Where We Work
              </p>
              <h2 className="text-display text-4xl md:text-5xl text-foreground mb-6">
                GTA and Beyond.
                <br />
                <span className="text-primary">Ontario-Wide for Large Projects.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We serve contractors and builders across Mississauga, Milton, Oakville,
                Burlington, Hamilton, Vaughan, Richmond Hill, Markham, Caledon, Bolton,
                Georgetown, and the broader GTA. For large-scale commercial and industrial
                projects, we mobilize across Ontario and into Quebec.
              </p>
            </Reveal>
            <Reveal delay={150} className="grid grid-cols-3 gap-3">
              {[
                "Mississauga", "Milton", "Oakville",
                "Burlington", "Hamilton", "Vaughan",
                "Richmond Hill", "Markham", "Caledon",
              ].map((city) => (
                <div
                  key={city}
                  className="border border-border px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground hover:border-primary hover:text-primary transition-smooth text-center"
                >
                  {city}
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <TrustMarquee />

      {/* CTA strip */}
      <section className="py-20 bg-primary">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-display text-4xl md:text-5xl text-primary-foreground">
              Need a Crew You Can Count On?
            </h2>
            <p className="text-primary-foreground/80 mt-2 text-sm">
              Request a site assessment or call us directly. We respond fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-semibold text-sm uppercase tracking-wider hover:bg-foreground transition-smooth"
            >
              Request an Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="tel:+16473219437"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-smooth"
            >
              647-321-9437
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
