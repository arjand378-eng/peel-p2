import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-amber flex items-center justify-center text-primary-foreground text-display text-xl">
              P
            </span>
            <span className="text-display text-xl tracking-widest">
              PEEL <span className="text-primary">EXCAVATION</span>
            </span>
          </Link>

          <ul className="flex flex-wrap gap-6 md:gap-8 md:justify-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 md:items-end text-sm">
            <a
              href="tel:+16473219437"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              647-321-9437
            </a>
            <a
              href="mailto:info@peelexcavation.ca"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              info@peelexcavation.ca
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Peel Excavation Services. All rights reserved.</p>
          <p className="uppercase tracking-widest">Serving Mississauga · Milton · Oakville · Burlington · Hamilton · Vaughan · Markham · Caledon</p>
        </div>
      </div>
    </footer>
  );
}
