import { Navbar } from "@/components/Navbar";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { QuoteCTA } from "@/components/sections/QuoteCTA";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <ServicesPreview />
      <WhyUs />
      <Projects />
      <QuoteCTA />
      <Footer />
    </main>
  );
}
