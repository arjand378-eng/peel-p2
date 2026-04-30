import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Excavation & Construction Insights | Peel Excavation Blog",
  description:
    "Practical guides for builders, contractors, and property managers across the GTA. Excavation, demolition, and site preparation — written by people who do the work.",
  alternates: { canonical: "/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Peel Excavation Services Blog",
  description:
    "Excavation, demolition, and site preparation guides for GTA builders and contractors.",
  url: "https://peelexcavation.ca/blog",
  publisher: {
    "@type": "Organization",
    name: "Peel Excavation Services",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-surface border-b border-border">
        <div className="container-narrow">
          <Reveal>
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
              Insights & Guides
            </p>
            <h1 className="text-display text-5xl md:text-7xl text-foreground max-w-4xl">
              Built for the
              <br />
              <span className="text-primary">Trade.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/90 text-lg leading-[1.85]">
              Practical excavation, demolition, and site-prep guides for builders,
              contractors, and property managers working across the GTA and Ontario.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-surface border border-border hover:border-primary transition-smooth h-full overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.hero}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 md:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 border border-primary/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-display text-2xl md:text-3xl text-foreground mb-4 leading-tight flex-1">
                      {post.title}
                    </h2>
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

          <Reveal className="mt-20 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              More articles coming. Have a project in the meantime?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors border-b border-primary hover:border-foreground pb-1"
            >
              Get a Free Quote
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
