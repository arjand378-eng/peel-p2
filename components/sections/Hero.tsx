"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    const saveData = !!conn?.saveData;
    const slowConn = conn?.effectiveType === "2g" || conn?.effectiveType === "slow-2g";

    if (!reduceMotion && isDesktop && !saveData && !slowConn) {
      setShowVideo(true);
    }
  }, []);

  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-background"
    >
      {/* Background — poster paints instantly, video fades in when ready (desktop only) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/IMG_8784.JPG')" }}
          aria-hidden="true"
        />
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/IMG_8784.JPG"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        )}
        {/* Top vignette — keeps navbar readable over any video frame */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(60 7% 5% / 0.78) 0%, transparent 28%)",
          }}
        />
        {/* Bottom vignette — keeps headline and subtitle readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, hsl(60 7% 5% / 0.94) 0%, hsl(60 7% 5% / 0.45) 35%, transparent 60%)",
          }}
        />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(hsl(36 33% 93% / 0.04) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Content — vertically centered with navbar offset */}
      <div className="relative z-10 h-full container-narrow flex flex-col justify-center pt-20">
        <div className="max-w-5xl w-full">
          <p
            className="animate-fade-in-slow text-primary text-xs md:text-sm uppercase tracking-[0.4em] mb-6 inline-block pl-3"
            style={{
              animationDelay: "0.1s",
              borderLeft: "2px solid hsl(38 92% 50%)",
              textShadow: "0 1px 20px rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.5)",
            }}
          >
            Mississauga · Milton · Oakville · Burlington · Hamilton
          </p>

          <h1
            className="animate-fade-in text-display text-foreground text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4rem,6.5vw,7.5rem)]"
            style={{ animationDelay: "0.2s" }}
          >
            Built for Contractors.
            <br />
            <span className="text-primary">Ready When You Are.</span>
          </h1>

          {/* Subtitle + CTAs — frosted backdrop for readability over any video frame */}
          <div
            className="animate-fade-in mt-8 inline-block"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className="px-5 py-4 max-w-xl"
              style={{
                background: "hsl(60 7% 5% / 0.55)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
            >
              <p className="text-base md:text-lg text-foreground font-normal leading-relaxed">
                30+ years of excavation experience. Owner-operated fleet. Serving
                contractors and builders across Ontario.
              </p>
            </div>
          </div>

          <div
            className="animate-fade-in mt-6 inline-block"
            style={{ animationDelay: "0.55s" }}
          >
            <div
              className="px-5 py-4"
              style={{
                background: "hsl(60 7% 5% / 0.6)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
              }}
            >
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth shadow-amber-glow"
                >
                  Request a Site Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href="tel:+16473219437"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-foreground/30 text-foreground font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-smooth"
                >
                  Call 647-321-9437
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-muted-foreground text-xs uppercase tracking-widest opacity-60">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
