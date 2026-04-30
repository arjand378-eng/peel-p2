"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-narrow flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-gradient-amber flex items-center justify-center text-primary-foreground text-display text-xl">
            P
          </span>
          <span className="text-display text-xl tracking-widest text-foreground">
            PEEL <span className="text-primary">EXCAVATION</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-foreground/90 hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+16473219437"
            className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
          >
            647-321-9437
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-t border-border mt-3">
          <ul className="container-narrow py-6 flex flex-col gap-4">
            <li>
              <a
                href="tel:+16473219437"
                className="block py-2 text-sm font-semibold tracking-wide text-primary"
              >
                647-321-9437
              </a>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
