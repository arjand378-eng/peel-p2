import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getAllPostSlugs, getPostBySlug, posts } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Peel Excavation`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.hero],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const next = posts.find((p) => p.slug !== post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.hero,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Peel Excavation Services",
    },
    publisher: {
      "@type": "Organization",
      name: "Peel Excavation Services",
      url: "https://peelexcavation.ca",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://peelexcavation.ca/blog/${post.slug}`,
    },
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={post.hero}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(60 7% 5% / 0.45) 0%, hsl(60 7% 5% / 0.92) 100%)",
          }}
        />
        <div className="relative z-10 h-full container-narrow flex flex-col justify-end pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">
            {post.category}
          </p>
          <h1 className="text-display text-4xl md:text-6xl text-foreground max-w-4xl mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/90">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-24 md:py-32 bg-background">
        <div className="container-narrow max-w-3xl">
          <Reveal>
            <p className="text-foreground/95 text-xl lg:text-2xl leading-[1.7] mb-12 font-light">
              {post.intro}
            </p>
          </Reveal>

          {post.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 60}>
              <h2 className="text-display text-3xl md:text-4xl text-foreground mb-5 mt-14 first:mt-0">
                {section.heading}
              </h2>
              <p className="text-muted-foreground/80 text-base leading-[1.85] mb-6 italic border-l-2 border-primary/40 pl-5">
                {section.placeholder}
              </p>
            </Reveal>
          ))}

          {/* Author / CTA card */}
          <Reveal delay={200}>
            <div className="mt-20 bg-surface border border-border p-8 md:p-10">
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">
                Need an Excavation Crew?
              </p>
              <h3 className="text-display text-2xl md:text-3xl text-foreground mb-4">
                30+ years digging across the GTA.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Owner-operated fleet. No rental delays. Tell us about your project and
                we'll come back with a quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+16473219437"
                  className="inline-flex items-center justify-center px-7 py-4 border border-border text-foreground font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-smooth"
                >
                  647-321-9437
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Next article */}
      {next && (
        <section className="py-20 bg-surface border-t border-border">
          <div className="container-narrow flex items-center justify-between gap-6 flex-wrap">
            <div className="max-w-xl">
              <p className="text-primary text-xs uppercase tracking-[0.4em] mb-3">
                Next Article
              </p>
              <h3 className="text-display text-2xl md:text-3xl text-foreground">
                {next.title}
              </h3>
            </div>
            <Link
              href={`/blog/${next.slug}`}
              className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-primary text-primary font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Read
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
