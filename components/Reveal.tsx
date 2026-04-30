"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in-view"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const Component = Tag as React.ElementType;

  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
