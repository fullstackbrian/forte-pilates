"use client";

import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/motion/animate-on-scroll";
import { RotatingCircle, RotatingTriangle, PulsingDiamond } from "@/components/motion/geometric";

export function CTASection() {
  return (
    <section className="bg-blush-light text-charcoal py-24 md:py-32 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c4a265 0.5px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blush/[0.15] rounded-full blur-[120px]" />

      {/* Geometric accents */}
      <RotatingCircle
        size={350}
        duration={35}
        strokeWidth={0.4}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brown/[0.06]"
      />
      <RotatingTriangle
        size={240}
        duration={45}
        strokeWidth={0.35}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blush-dark/[0.15]"
      />
      <RotatingCircle
        size={180}
        duration={25}
        strokeWidth={0.3}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brown/[0.05]"
      />

      <Container className="text-center relative">
        <AnimateOnScroll>
          <div className="flex items-center justify-center gap-5 mb-10">
            <span className="block h-px w-14 bg-blush-dark/30" />
            <PulsingDiamond size={10} className="text-blush-dark/40" />
            <span className="block h-px w-14 bg-blush-dark/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-charcoal/90 mb-5 leading-[1.15]">
            Start your Pilates journey
          </h2>
          <p className="text-charcoal/45 text-sm max-w-sm mx-auto mb-12 leading-[1.9]">
            Group packages available. DM us or book via Mindbody / ClassPass.
            Spots are limited.
          </p>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-blush text-charcoal font-forum text-xs tracking-[0.2em] uppercase hover:bg-blush-dark transition-all duration-700 cursor-pointer"
          >
            Book Your First Session
          </a>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
