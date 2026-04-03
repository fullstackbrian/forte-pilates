"use client";

import { motion } from "motion/react";
import { SITE } from "@/lib/constants";
import { FloatingLines } from "@/components/motion/geometric";
import { AnimatedForteLogo } from "@/components/home/animated-forte-logo";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-dark via-cream to-cream-light" />
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #8b7355 0.5px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.03] rounded-full blur-[150px]" />

      {/* Animated logo mark — right side, partially cropped */}
      <AnimatedForteLogo className="absolute -right-32 top-1/2 -translate-y-1/2 w-[520px] opacity-[0.08] pointer-events-none select-none hidden sm:block" />

      {/* Floating lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute inset-0"
      >
        <FloatingLines className="absolute inset-0" />
      </motion.div>

      <div className="relative text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-5 mb-10">
            <span className="block h-px w-14 bg-gold/30" />
            <p className="font-forum text-[10px] tracking-[0.5em] uppercase text-brown/60">
              Los Angeles
            </p>
            <span className="block h-px w-14 bg-gold/30" />
          </div>
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="font-forum text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[0.06em] text-charcoal leading-[1]"
          >
            Forte
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="font-forum text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-[0.06em] text-charcoal leading-[1]"
          >
            Pilates
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-sm sm:text-base text-charcoal/50 max-w-md mx-auto mb-12 leading-[1.9] tracking-wide"
        >
          Elevated Pilates in a focused, intimate setting.
          Private sessions, duets, trios, and group classes — now open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 bg-blush text-charcoal font-forum text-xs tracking-[0.2em] uppercase hover:bg-blush-dark border border-blush hover:border-blush-dark transition-all duration-500 cursor-pointer"
          >
            Book a Session
          </a>
          <a
            href="/classes"
            className="inline-flex items-center justify-center px-9 py-4 border border-charcoal/20 text-charcoal font-forum text-xs tracking-[0.2em] uppercase hover:border-brown hover:text-brown transition-all duration-500 cursor-pointer"
          >
            Explore Classes
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brown/30 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
