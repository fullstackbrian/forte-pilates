import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll, AnimateStagger, AnimateStaggerChild } from "@/components/motion/animate-on-scroll";
import { classes } from "@/data/classes";
import { SITE } from "@/lib/constants";
import { ClassesGeometry } from "@/components/motion/page-geometry-wrapper";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Explore our Pilates classes: private sessions, duet and trio classes, and creative workshops at Forte Pilates in Los Angeles.",
};

export default function ClassesPage() {
  return (
    <div className="relative overflow-hidden">
      <ClassesGeometry />
      {/* Hero */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                Our Classes
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
              Find your practice
            </h1>
            <p className="text-base sm:text-lg text-charcoal-light leading-[1.85] max-w-xl mx-auto">
              From focused one-on-one sessions to energizing small groups, every
              class at Forte Pilates is designed with intention and care.
            </p>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* Class Cards */}
      <Section bg="white" className="py-20 md:py-28">
        <Container>
          <div className="space-y-20">
            {classes.map((cls, i) => (
              <AnimateOnScroll key={cls.slug}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center`}
                >
                  <div
                    className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}
                  >
                    <div className="aspect-[3/2] bg-gradient-to-br from-cream-dark via-cream to-brown/[0.08]" />
                    <div className="absolute top-3 left-3 right-3 bottom-3 border border-gold/15 pointer-events-none" />
                    <span className="absolute inset-0 flex items-center justify-center font-forum text-brown/20 text-sm tracking-[0.3em] uppercase">
                      {cls.name}
                    </span>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="block h-px w-6 bg-gold/50" />
                      <p className="font-forum text-xs tracking-[0.3em] uppercase text-brown-light">
                        {cls.subtitle}
                      </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl mb-5 leading-[1.15]">
                      {cls.name}
                    </h2>
                    <p className="text-charcoal-light leading-[1.85] mb-6">
                      {cls.description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 text-sm">
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-1">
                          Duration
                        </p>
                        <p className="text-charcoal-light">{cls.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-1">
                          Capacity
                        </p>
                        <p className="text-charcoal-light">{cls.capacity}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs tracking-[0.15em] uppercase text-brown/70 mb-1">
                          Ideal for
                        </p>
                        <p className="text-charcoal-light">{cls.idealFor}</p>
                      </div>
                    </div>
                    <Button
                      href={SITE.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book {cls.name}
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-3xl">
          <AnimateOnScroll className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                First Visit
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl">What to expect</h2>
          </AnimateOnScroll>

          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {[
              {
                title: "Before your first visit",
                text: "Arrive 10 minutes early to complete a brief intake form. Wear comfortable, form-fitting clothing so your instructor can observe your alignment.",
              },
              {
                title: "During your session",
                text: "Your instructor will guide you through each exercise with clear cues and hands-on adjustments. Every session is adapted to your body.",
              },
              {
                title: "What to bring",
                text: "Just yourself. We provide all equipment, grip socks, and water. Towels are available if you would like one.",
              },
              {
                title: "After your session",
                text: "Take a moment to hydrate and notice how your body feels. Your instructor may suggest exercises to practice between sessions.",
              },
            ].map((item) => (
              <AnimateStaggerChild key={item.title}>
                <h3 className="text-lg mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-[1.8]">
                  {item.text}
                </p>
              </AnimateStaggerChild>
            ))}
          </AnimateStagger>
        </Container>
      </Section>
    </div>
  );
}
