"use client";

import { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services = [
  { label: "Excavation", desc: "Site digging & earthmoving" },
  { label: "Demolition", desc: "Tear-downs & debris removal" },
  { label: "Foundation Digging", desc: "Footings & basements" },
  { label: "Grading", desc: "Land levelling & slopes" },
  { label: "Land Clearing", desc: "Trees, stumps & brush" },
  { label: "Other / Not Sure", desc: "Tell us about your project" },
];

const steps = ["Service", "Job Details", "Your Info"];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [details, setDetails] = useState({ description: "", address: "" });
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      toast.success("Request received!", {
        description: "We'll be in touch within 24 hours.",
      });
    }, 800);
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full min-h-screen">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left panel — info + photo */}
        <div className="relative hidden lg:flex flex-col justify-end overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Heavy equipment on a contractor job site"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(60 7% 5% / 0.3) 0%, hsl(60 7% 5% / 0.9) 100%)",
            }}
          />
          <div className="relative z-10 p-12 pb-16">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-8 h-8 bg-gradient-amber flex items-center justify-center text-primary-foreground text-display text-xl">
                P
              </span>
              <span className="text-display text-xl tracking-widest text-foreground">
                PEEL <span className="text-primary">EXCAVATION</span>
              </span>
            </div>
            <h2 className="text-display text-4xl text-foreground mb-3">
              Let's Talk About
              <br />
              <span className="text-primary">Your Project.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
              Serving contractors, builders, and property managers across the GTA
              and Ontario-wide for large-scale projects. Most quotes returned within
              24 hours.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+16473219437"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                647-321-9437
              </a>
              <a
                href="mailto:info@peelexcavation.ca"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                info@peelexcavation.ca
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground max-w-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Mississauga · Milton · Oakville · Burlington · Hamilton · Vaughan ·
                  Richmond Hill · Markham · Caledon · Bolton · Georgetown ·
                  Ontario-wide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — multi-step form */}
        <div className="flex flex-col justify-center bg-background px-6 py-20 lg:px-16 pt-32 lg:pt-20">
          {done ? (
            /* Success state */
            <div className="max-w-md">
              <div className="w-16 h-16 bg-primary/10 border border-primary flex items-center justify-center mb-8">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <h2 className="text-display text-5xl text-foreground mb-4">
                Request Sent.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We received your quote request for{" "}
                <span className="text-primary">{selected}</span>. Our team will
                review the details and reach out within 24 hours.
              </p>
              <p className="text-sm text-muted-foreground">
                Have an urgent need?{" "}
                <a
                  href="tel:+16473219437"
                  className="text-primary hover:underline"
                >
                  Call 647-321-9437.
                </a>
              </p>
            </div>
          ) : (
            <div className="max-w-md w-full">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-10">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-7 h-7 text-xs font-semibold border transition-smooth ${
                        i === step
                          ? "bg-primary border-primary text-primary-foreground"
                          : i < step
                          ? "bg-primary/20 border-primary/50 text-primary"
                          : "bg-transparent border-border text-muted-foreground"
                      }`}
                    >
                      {i < step ? "✓" : i + 1}
                    </div>
                    <span
                      className={`text-xs uppercase tracking-widest hidden sm:block ${
                        i === step ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s}
                    </span>
                    {i < steps.length - 1 && (
                      <div
                        className={`w-8 h-px mx-1 ${
                          i < step ? "bg-primary/50" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 0: Service selection */}
              {step === 0 && (
                <div>
                  <h1 className="text-display text-4xl md:text-5xl text-foreground mb-3">
                    What do you need?
                  </h1>
                  <p className="text-muted-foreground text-sm mb-8">
                    Select the service that best describes your project.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {services.map((svc) => (
                      <button
                        key={svc.label}
                        onClick={() => setSelected(svc.label)}
                        className={`text-left p-4 border transition-smooth ${
                          selected === svc.label
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-sm font-semibold text-foreground mb-1">
                          {svc.label}
                        </div>
                        <div className="text-xs text-muted-foreground">{svc.desc}</div>
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={!selected}
                    onClick={() => setStep(1)}
                    className="w-full group inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth disabled:opacity-40"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}

              {/* Step 1: Job details */}
              {step === 1 && (
                <div>
                  <h2 className="text-display text-4xl md:text-5xl text-foreground mb-3">
                    Tell us about the job.
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    A bit of detail helps us give you an accurate quote faster.
                  </p>
                  <div className="space-y-5 mb-8">
                    <label className="block">
                      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        Site Address
                      </span>
                      <input
                        type="text"
                        placeholder="123 Main St, Mississauga, ON"
                        value={details.address}
                        onChange={(e) =>
                          setDetails((d) => ({ ...d, address: e.target.value }))
                        }
                        className="form-input"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        Job Description
                      </span>
                      <textarea
                        rows={5}
                        placeholder="Describe the scope, timeline, and any site conditions we should know about..."
                        value={details.description}
                        onChange={(e) =>
                          setDetails((d) => ({ ...d, description: e.target.value }))
                        }
                        className="form-input resize-none"
                      />
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(0)}
                      className="px-5 py-4 border border-border text-muted-foreground text-sm uppercase tracking-wider hover:border-foreground hover:text-foreground transition-smooth"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 group inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact info */}
              {step === 2 && (
                <div>
                  <h2 className="text-display text-4xl md:text-5xl text-foreground mb-3">
                    Your contact info.
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    We'll reach out to confirm the quote and schedule a site visit.
                  </p>
                  <div className="space-y-5 mb-8">
                    <label className="block">
                      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        Full Name
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={contact.name}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, name: e.target.value }))
                        }
                        className="form-input"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        Phone Number
                      </span>
                      <input
                        required
                        type="tel"
                        placeholder="647-321-9437"
                        value={contact.phone}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, phone: e.target.value }))
                        }
                        className="form-input"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                        Email Address
                      </span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={contact.email}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, email: e.target.value }))
                        }
                        className="form-input"
                      />
                    </label>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-5 py-4 border border-border text-muted-foreground text-sm uppercase tracking-wider hover:border-foreground hover:text-foreground transition-smooth"
                    >
                      Back
                    </button>
                    <button
                      disabled={!contact.name || !contact.phone || submitting}
                      onClick={handleSubmit}
                      className="flex-1 group inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary-glow transition-smooth disabled:opacity-40"
                    >
                      {submitting ? "Sending..." : "Submit Request"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
