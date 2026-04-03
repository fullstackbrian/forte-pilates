"use client";

import { motion } from "motion/react";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center py-10 md:py-14 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center gap-4"
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block h-px bg-gradient-to-r from-transparent to-brown/15"
        />
        {/* Animated diamond */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 45 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-1.5 h-1.5 border border-gold/30"
        />
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block h-px bg-gradient-to-l from-transparent to-brown/15"
        />
      </motion.div>
    </div>
  );
}
