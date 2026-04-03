import { Hero } from "@/components/home/hero";
import { AboutPreview } from "@/components/home/about-preview";
import { ClassHighlights } from "@/components/home/class-highlights";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Divider />
      <ClassHighlights />
      <Testimonials />
      <Divider />
      <CTASection />
    </>
  );
}
