"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { FloatingLines } from "@/components/motion/geometric";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
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

      {/* Floating lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute inset-0"
      >
        <FloatingLines className="absolute inset-0" />
      </motion.div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center px-6 w-full">

        {/* SVG Logo — hero centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease }}
          className="w-[min(88vw,480px)] sm:w-[min(70vw,520px)] mb-10"
          style={{ mixBlendMode: "multiply" }}
        >
          <motion.div
            animate={{ scale: [1, 1.008, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >
            <Image
              src="/forteSVG.svg"
              alt="Forte Pilates"
              width={1122}
              height={793}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease }}
          className="w-12 h-px bg-gold/50 mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease }}
          className="text-sm sm:text-base text-charcoal/50 max-w-sm mx-auto mb-10 leading-[1.9] tracking-wide text-center"
        >
          Elevated Pilates in a focused, intimate setting.
          <br className="hidden sm:block" />
          Private sessions, duets, trios, and group classes — now open.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
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
