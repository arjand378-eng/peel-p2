import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { getRecentPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Projects & Insights | Peel Excavation Services",
  description:
    "Recent excavation, demolition, and site preparation projects across the GTA, plus practical guides for builders and contractors. 30+ years of experience, owner-operated.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsLanding() {
  const recentPosts = getRecentPosts(3);

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-surface border-b border-border">
        <div className="container-narrow">
          <Reveal>
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
              Recent Work & Insights
            </p>
            <h1 className="text-display text-5xl md:text-7xl text-foreground max-w-4xl">
              Ground Broken.
              <br />
              <span className="text-primary">Lessons Shared.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/90 text-lg leading-[1.85]">
              A look at recent excavation, demolition, and site-prep work across the
              GTA — plus practical guides written for the builders, contractors, and
              property managers we work with every day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <Reveal className="mb-14 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
                Recent Projects
              </p>
              <h2 className="text-display text-4xl md:text-6xl text-foreground max-w-2xl">
                Real Jobs.
                <br />
                <span className="text-primary">Real Sites.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block relative aspect-[4/5] overflow-hidden border border-border hover:border-primary transition-smooth"
                >
                  <Image
                    src={p.hero}
                    alt={`${p.title} in ${p.location}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs uppercase tracking-widest bg-primary/90 text-primary-foreground px-2.5 py-1">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <h3 className="text-display text-2xl md:text-3xl text-foreground tracking-wide mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                      {p.location} · {p.year}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                        View Project
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / Blog teaser */}
      <section className="py-24 md:py-32 bg-surface border-y border-border">
        <div className="container-narrow">
          <Reveal className="mb-14 flex items-end justify-between flex-wrap gap-6">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
                Insights & Guides
              </p>
              <h2 className="text-display text-4xl md:text-6xl text-foreground max-w-2xl">
                Built for
                <br />
                <span className="text-primary">Builders.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors border-b border-primary hover:border-foreground pb-1"
            >
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recentPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-background border border-border hover:border-primary transition-smooth h-full"
                >
                  <div className="p-7 md:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 border border-primary/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-display text-2xl md:text-3xl text-foreground mb-4 leading-tight flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                        Read Article
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-display text-4xl md:text-5xl text-primary-foreground">
              Have a project in mind?
            </h2>
            <p className="text-primary-foreground/80 mt-2 text-sm">
              Tell us the scope. We'll come back with a quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-semibold text-sm uppercase tracking-wider hover:bg-foreground transition-smooth"
            >
              Request a Quote
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
