import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { AnimateOnScroll } from "@/components/motion/animate-on-scroll";
import { SITE } from "@/lib/constants";
import { ContactGeometry } from "@/components/motion/page-geometry-wrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Forte Pilates in Los Angeles. Contact us about classes, pricing, or visit our studio.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <ContactGeometry />
      {/* Hero */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                Contact
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
              Get in touch
            </h1>
            <p className="text-base sm:text-lg text-charcoal-light leading-[1.85] max-w-xl mx-auto">
              Have a question about our classes or ready to get started? We would
              love to hear from you.
            </p>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* Contact Content */}
      <Section bg="white" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <AnimateOnScroll>
              <h2 className="text-2xl mb-8">Send us a message</h2>
              <ContactForm />
            </AnimateOnScroll>

            {/* Info */}
            <AnimateOnScroll delay={0.15}>
              <h2 className="text-2xl mb-8">Visit us</h2>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-2">
                    Address
                  </p>
                  <p className="text-charcoal-light">{SITE.address.street}</p>
                  <p className="text-charcoal-light">
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-charcoal-light hover:text-brown transition-colors duration-300"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                    className="text-charcoal-light hover:text-brown transition-colors duration-300"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-2">
                    Hours
                  </p>
                  <div className="text-charcoal-light text-sm space-y-1">
                    <p>Mon–Fri: {SITE.hours.monday}</p>
                    <p>Saturday: {SITE.hours.saturday}</p>
                    <p>Sunday: {SITE.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-dark via-cream to-brown/[0.05] border border-brown/[0.06]">
                <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold/10 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-forum text-brown/25 text-sm tracking-[0.3em] uppercase mb-1">
                      Map
                    </p>
                    <p className="text-[11px] text-charcoal-light/40">
                      Google Maps embed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-6">
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase text-brown/60 hover:text-brown transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </Section>
    </div>
  );
}
