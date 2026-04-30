import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projects,
} from "@/lib/projects";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ${project.location} | Peel Excavation`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.hero],
      type: "article",
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = projects.find((p) => p.slug !== project.slug) ?? projects[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    locationCreated: { "@type": "Place", name: project.location },
    dateCreated: project.year,
    creator: {
      "@type": "Organization",
      name: "Peel Excavation Services",
      url: "https://peelexcavation.ca",
    },
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.hero}
          alt={`${project.title} in ${project.location}`}
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
        <div className="relative z-10 h-full container-narrow flex flex-col justify-end pb-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">
            {project.category}
          </p>
          <h1 className="text-display text-5xl md:text-7xl text-foreground max-w-4xl mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/90">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> {project.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" /> {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main copy */}
            <div className="lg:col-span-2">
              <Reveal>
                <p className="text-foreground/90 text-lg lg:text-xl leading-[1.85] mb-12">
                  {project.summary}
                </p>
              </Reveal>

              {project.body.map((block, i) => (
                <Reveal key={block.heading} delay={i * 80}>
                  <h2 className="text-display text-3xl md:text-4xl text-foreground mb-5 mt-12 first:mt-0">
                    {block.heading}
                  </h2>
                  <p className="text-foreground/85 text-base lg:text-lg leading-[1.85] mb-6">
                    {block.text}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Sidebar */}
            <Reveal delay={150} className="lg:col-span-1">
              <div className="bg-surface border border-border p-8 sticky top-32">
                <p className="text-primary text-xs uppercase tracking-[0.4em] mb-6">
                  Project Details
                </p>
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Scope
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {project.scope}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 inline-flex items-center gap-2">
                      <Wrench className="w-3 h-3" /> Equipment
                    </p>
                    <ul className="space-y-1.5">
                      {project.equipment.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-foreground leading-relaxed"
                        >
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full group inline-flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth"
                >
                  Need Similar Work?
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="pb-24 md:pb-32 bg-background">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <Reveal
                  key={img + i}
                  delay={i * 100}
                  className="relative aspect-[4/3] overflow-hidden border border-border"
                >
                  <Image
                    src={img}
                    alt={`${project.title} — photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      <section className="py-20 bg-surface border-t border-border">
        <div className="container-narrow flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] mb-3">
              Next Project
            </p>
            <h3 className="text-display text-2xl md:text-3xl text-foreground">
              {next.title}
            </h3>
          </div>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-3 px-7 py-4 border-2 border-primary text-primary font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            View
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
