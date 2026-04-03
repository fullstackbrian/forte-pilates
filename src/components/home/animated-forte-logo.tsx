"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AnimatedForteLogo({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/forteSVG.svg"
        alt="Forte Pilates"
        width={1122}
        height={793}
        className="w-full h-auto"
        style={{ mixBlendMode: "multiply" }}
        priority
      />
    </motion.div>
  );
}
