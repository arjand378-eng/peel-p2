"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services = [
  "Excavation",
  "Demolition",
  "Foundation Digging",
  "Grading",
  "Land Clearing",
  "Other",
];

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

export function QuoteCTA() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Quote request received", {
        description: "We'll get back to you within 24 hours.",
      });
    }, 700);
  };

  return (
    <section
      id="quote"
      className="relative py-28 md:py-40 bg-surface border-y border-border overflow-hidden"
    >
      {/* Diagonal stripe background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, hsl(var(--primary)) 0 1px, transparent 1px 24px)",
        }}
        aria-hidden="true"
      />

      <div className="container-narrow relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-5">
            Free, no-obligation
          </p>
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
            Ready to Start
            <br />
            <span className="text-primary">Your Project?</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg">
            Tell us about the job. We'll come out, walk the site, and give you a
            straight quote, usually within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={onSubmit}
            className="max-w-3xl mx-auto bg-background border border-border p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <Field label="Name">
              <input
                required
                name="name"
                type="text"
                placeholder="John Smith"
                className="form-input"
              />
            </Field>
            <Field label="Phone">
              <input
                required
                name="phone"
                type="tel"
                placeholder="(905) 555-0142"
                className="form-input"
              />
            </Field>
            <Field label="Service" className="md:col-span-2">
              <select required name="service" defaultValue="" className="form-input">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Message" className="md:col-span-2">
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about the site, timeline, and scope..."
                className="form-input resize-none"
              />
            </Field>
            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full group inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit Request"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
