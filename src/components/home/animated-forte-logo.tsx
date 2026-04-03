"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AnimatedForteLogo({ className }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Slow breathing pulse after entrance */}
      <motion.div
        animate={{ scale: [1, 1.012, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="w-full h-full"
      >
        <Image
          src="/forteSVG.svg"
          alt=""
          width={900}
          height={636}
          className="w-full h-full object-contain"
          style={{ mixBlendMode: "multiply" }}
          priority
        />
      </motion.div>
    </motion.div>
  );
}
