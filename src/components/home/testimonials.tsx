"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <Section bg="white" className="py-20 md:py-28">
      <Container className="max-w-2xl text-center">
        <div className="flex items-center justify-center gap-5 mb-14">
          <span className="block h-px w-10 bg-gold/30" />
          <p className="font-forum text-[10px] tracking-[0.4em] uppercase text-brown/50">
            Client Stories
          </p>
          <span className="block h-px w-10 bg-gold/30" />
        </div>

        {/* Decorative open quote */}
        <p className="font-forum text-7xl text-gold/15 leading-none mb-2 select-none">
          &ldquo;
        </p>

        <div className="min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="text-lg sm:text-xl leading-[2] text-charcoal/60 italic mb-10">
                {t.quote}
              </blockquote>
              <div>
                <p className="font-forum text-xs tracking-[0.2em] uppercase text-charcoal/80">
                  {t.name}
                </p>
                <p className="text-[11px] text-charcoal/35 mt-1.5 tracking-wide">
                  {t.detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal progress indicators */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-700 cursor-pointer ${
                i === current
                  ? "w-8 h-px bg-brown/50"
                  : "w-4 h-px bg-brown/15 hover:bg-brown/30"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
