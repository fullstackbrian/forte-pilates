import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll, AnimateStagger, AnimateStaggerChild } from "@/components/motion/animate-on-scroll";
import { AboutImageGeometry, PhilosophyGeometry } from "@/components/about/about-geometry";
import { AboutGeometry } from "@/components/motion/page-geometry-wrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Forte Pilates, a boutique Pilates studio in Los Angeles. Meet our instructors and discover our approach to movement.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <AboutGeometry />
      {/* Hero */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                About Us
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
              Where precision
              <br />
              meets creativity
            </h1>
            <p className="text-base sm:text-lg text-charcoal-light leading-[1.85] max-w-xl mx-auto">
              Forte Pilates is a boutique Pilates space in the heart of
              Los Angeles. We believe that thoughtful, intentional movement has
              the power to transform not just your body, but how you experience
              daily life.
            </p>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* Story */}
      <Section bg="white" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-6">
                <span className="block h-px w-8 bg-gold/50" />
                <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                  Our Beginning
                </p>
              </div>
              <h2 className="text-3xl sm:text-4xl mb-8 leading-[1.15]">
                Our story
              </h2>
              <div className="space-y-5 text-charcoal-light leading-[1.85]">
                <p>
                  Founded with the vision of creating an intimate space where
                  clients receive genuine attention, Forte Pilates offers something
                  different from the typical group fitness experience.
                </p>
                <p>
                  Our studio is designed for connection — between instructor and
                  client, between mind and body, between effort and ease. Every
                  detail, from our carefully curated equipment to our small class
                  sizes, reflects this intention.
                </p>
                <p>
                  Whether you are recovering from an injury, training for
                  performance, or simply seeking a mindful movement practice, our
                  approach adapts to serve your unique needs.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-cream-dark via-cream to-brown/[0.08]" />
                <div className="absolute top-5 left-5 right-5 bottom-5 border border-gold/15 pointer-events-none" />
                <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gold/30 pointer-events-none" />
                <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gold/30 pointer-events-none" />
                <AboutImageGeometry />
                <span className="absolute bottom-8 left-0 right-0 text-center font-forum text-brown/15 text-xs tracking-[0.4em] uppercase">
                  Studio Interior
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section className="py-20 md:py-28 relative overflow-hidden">
        <PhilosophyGeometry />
        <Container className="max-w-2xl text-center relative">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="block h-px w-12 bg-gold/30" />
              <span className="block w-1.5 h-1.5 rounded-full bg-gold/40" />
              <span className="block h-px w-12 bg-gold/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-10 leading-[1.15]">
              Our philosophy
            </h2>
            <blockquote className="text-lg sm:text-xl italic text-charcoal/70 leading-[1.9]">
              We approach Pilates as a creative practice. Classical principles
              provide the foundation, but curiosity drives each session forward.
              We encourage our clients to explore, question, and discover what
              their bodies are truly capable of.
            </blockquote>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* The Method */}
      <Section bg="white" className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                The Method
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h2 className="text-3xl sm:text-4xl mb-8 leading-[1.15]">
              Our practice
            </h2>
            <p className="text-base sm:text-lg text-charcoal-light leading-[1.85] max-w-xl mx-auto">
              Not a workout — a method. Rooted in breath, control, and
              precision, Pilates teaches the body to move with intelligence
              rather than effort alone.
            </p>
          </AnimateOnScroll>

          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
            {/* Classical Reformer */}
            <AnimateStaggerChild>
              <div className="border-t border-gold/20 pt-10">
                <p className="font-forum text-[10px] tracking-[0.35em] uppercase text-brown-light mb-4">
                  01
                </p>
                <h3 className="text-xl sm:text-2xl mb-5 leading-[1.2]">
                  The apparatus that changed everything
                </h3>
                <p className="text-charcoal-light text-sm leading-[1.85]">
                  A spring-loaded carriage that transforms resistance into
                  revelation. Variable tension through every movement builds
                  long, functional strength — and meets every body exactly
                  where it is.
                </p>
                <p className="font-forum text-[10px] tracking-[0.3em] uppercase text-brown/40 mt-6">
                  Classical Reformer
                </p>
              </div>
            </AnimateStaggerChild>

            {/* Mat Pilates */}
            <AnimateStaggerChild>
              <div className="border-t border-gold/20 pt-10">
                <p className="font-forum text-[10px] tracking-[0.35em] uppercase text-brown-light mb-4">
                  02
                </p>
                <h3 className="text-xl sm:text-2xl mb-5 leading-[1.2]">
                  The practice beneath the practice
                </h3>
                <p className="text-charcoal-light text-sm leading-[1.85]">
                  Where the method was born. No springs, no carriage — just
                  the body working against gravity with full attention. The
                  most honest measure of your foundation.
                </p>
                <p className="font-forum text-[10px] tracking-[0.3em] uppercase text-brown/40 mt-6">
                  Mat Pilates
                </p>
              </div>
            </AnimateStaggerChild>

            {/* Creative Movement */}
            <AnimateStaggerChild>
              <div className="border-t border-gold/20 pt-10">
                <p className="font-forum text-[10px] tracking-[0.35em] uppercase text-brown-light mb-4">
                  03
                </p>
                <h3 className="text-xl sm:text-2xl mb-5 leading-[1.2]">
                  Where the method becomes yours
                </h3>
                <p className="text-charcoal-light text-sm leading-[1.85]">
                  Classical principles, opened up. We blend somatic awareness
                  and modern movement science into every session — because
                  curiosity is just as important as precision.
                </p>
                <p className="font-forum text-[10px] tracking-[0.3em] uppercase text-brown/40 mt-6">
                  Creative Movement
                </p>
              </div>
            </AnimateStaggerChild>
          </AnimateStagger>
        </Container>
      </Section>

    </div>
  );
}
