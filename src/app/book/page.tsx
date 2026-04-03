import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { BookGeometry } from "@/components/motion/page-geometry-wrapper";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a Pilates session at Forte Pilates. Private sessions, duets, trios, and workshops available in Los Angeles.",
};

export default function BookPage() {
  return (
    <div className="relative overflow-hidden">
      <BookGeometry />
      <Section className="min-h-[70vh] flex items-center py-20 md:py-28">
        <Container className="max-w-xl text-center relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-8 bg-gold/50" />
            <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
              Reservations
            </p>
            <span className="block h-px w-8 bg-gold/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl mb-8 leading-[1.1]">
            Book a session
          </h1>
          <p className="text-charcoal-light leading-[1.85] mb-10">
            Ready to move? Choose your class type and preferred time through our
            booking system. New clients are always welcome.
          </p>
          <Button
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Open Booking Calendar
          </Button>
          <p className="text-xs text-charcoal-light/50 mt-8">
            Prefer to book by phone? Call{" "}
            <a
              href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
              className="text-brown/60 border-b border-brown/20 hover:border-brown/40 transition-colors duration-300"
            >
              {SITE.phone}
            </a>
          </p>
        </Container>
      </Section>
    </div>
  );
}
