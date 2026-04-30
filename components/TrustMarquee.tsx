"use client";

const badges = [
  { label: "30+ Yrs Experience", icon: "◆" },
  { label: "Owner-Operated Fleet", icon: "★" },
  { label: "Licensed & Insured", icon: "✓" },
  { label: "Mississauga", icon: "◉" },
  { label: "Milton", icon: "◉" },
  { label: "Oakville", icon: "◉" },
  { label: "Burlington", icon: "◉" },
  { label: "Hamilton", icon: "◉" },
  { label: "Vaughan", icon: "◉" },
  { label: "Markham", icon: "◉" },
  { label: "Caledon", icon: "◉" },
  { label: "500+ Projects", icon: "★" },
  { label: "Free Estimates", icon: "◆" },
];

function BadgeItem({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="group inline-flex items-center gap-3 mx-8 whitespace-nowrap">
      <span
        className="text-primary opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-sm"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
        {label}
      </span>
    </span>
  );
}

export function TrustMarquee() {
  const doubled = [...badges, ...badges];

  return (
    <div
      className="relative overflow-hidden border-y border-border bg-surface py-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max animate-marquee"
        style={{ animationPlayState: "running" }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
        }
        aria-label="Trust signals and certifications"
      >
        {doubled.map((badge, i) => (
          <BadgeItem key={`${badge.label}-${i}`} label={badge.label} icon={badge.icon} />
        ))}
      </div>
    </div>
  );
}
