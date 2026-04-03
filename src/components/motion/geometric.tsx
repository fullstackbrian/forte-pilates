"use client";

import React from "react";
import { motion } from "motion/react";

/** Slowly rotating thin circle */
export function RotatingCircle({
  size = 120,
  className = "",
  duration = 30,
  strokeWidth = 0.5,
}: {
  size?: number;
  className?: string;
  duration?: number;
  strokeWidth?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  );
}

/** Triangle that rotates slowly */
export function RotatingTriangle({
  size = 100,
  className = "",
  duration = 25,
  strokeWidth = 0.5,
}: {
  size?: number;
  className?: string;
  duration?: number;
  strokeWidth?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <polygon
          points="50,5 95,90 5,90"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

/** Rectangle / square that rotates */
export function RotatingRect({
  size = 100,
  className = "",
  duration = 35,
  strokeWidth = 0.5,
}: {
  size?: number;
  className?: string;
  duration?: number;
  strokeWidth?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

/** Diamond (rotated square) that pulses */
export function PulsingDiamond({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
        <rect
          x="10"
          y="1"
          width="12.73"
          height="12.73"
          rx="0.5"
          transform="rotate(45 10 1)"
          stroke="currentColor"
          strokeWidth="0.7"
        />
      </svg>
    </motion.div>
  );
}

/** Animated intersecting lines — sacred geometry / Pilates alignment feel */
export function GeometricLines({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className={`pointer-events-none ${className}`}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          stroke="currentColor"
          strokeWidth="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.circle
          cx="100"
          cy="100"
          r="60"
          stroke="currentColor"
          strokeWidth="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.line
          x1="100" y1="10" x2="100" y2="190"
          stroke="currentColor" strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <motion.line
          x1="10" y1="100" x2="190" y2="100"
          stroke="currentColor" strokeWidth="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        />
        <motion.line
          x1="30" y1="30" x2="170" y2="170"
          stroke="currentColor" strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />
        <motion.line
          x1="170" y1="30" x2="30" y2="170"
          stroke="currentColor" strokeWidth="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
        />
        <motion.path
          d="M100 30 L170 100 L100 170 L30 100 Z"
          stroke="currentColor" strokeWidth="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
}

/** Floating parallel lines that drift slowly */
export function FloatingLines({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-brown/8"
          style={{
            width: 50 + i * 25,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 8}%`,
            transform: `rotate(${-15 + i * 8}deg)`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}

/** Scattered dots — delicate, feminine, wellness aesthetic */
export function ScatteredDots({ className = "" }: { className?: string }) {
  const dots = [
    { x: "8%", y: "15%", size: 3, delay: 0, opacity: 0.12 },
    { x: "15%", y: "35%", size: 2, delay: 0.5, opacity: 0.08 },
    { x: "22%", y: "8%", size: 4, delay: 1, opacity: 0.10 },
    { x: "30%", y: "55%", size: 2.5, delay: 0.3, opacity: 0.06 },
    { x: "5%", y: "65%", size: 3, delay: 1.2, opacity: 0.10 },
    { x: "12%", y: "80%", size: 2, delay: 0.8, opacity: 0.08 },
    { x: "75%", y: "12%", size: 3.5, delay: 0.2, opacity: 0.10 },
    { x: "82%", y: "30%", size: 2, delay: 0.9, opacity: 0.07 },
    { x: "90%", y: "18%", size: 3, delay: 1.4, opacity: 0.09 },
    { x: "88%", y: "50%", size: 2.5, delay: 0.6, opacity: 0.08 },
    { x: "78%", y: "68%", size: 3, delay: 1.1, opacity: 0.10 },
    { x: "92%", y: "75%", size: 2, delay: 0.4, opacity: 0.06 },
    { x: "70%", y: "85%", size: 3.5, delay: 0.7, opacity: 0.08 },
    { x: "85%", y: "90%", size: 2, delay: 1.3, opacity: 0.07 },
    { x: "40%", y: "5%", size: 2, delay: 0.1, opacity: 0.06 },
    { x: "55%", y: "92%", size: 2.5, delay: 0.5, opacity: 0.07 },
    { x: "18%", y: "48%", size: 2, delay: 1.5, opacity: 0.06 },
    { x: "65%", y: "25%", size: 2, delay: 0.8, opacity: 0.05 },
    { x: "35%", y: "88%", size: 3, delay: 1.0, opacity: 0.08 },
    { x: "50%", y: "10%", size: 2, delay: 0.3, opacity: 0.05 },
  ];

  return (
    <div className={`pointer-events-none ${className}`}>
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blush-dark"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            opacity: 0,
          }}
          animate={{
            opacity: [0, dot.opacity, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

/** Small thin circle that floats gently */
export function FloatingCircle({
  size = 60,
  className = "",
  x = "50%",
  y = "50%",
  delay = 0,
}: {
  size?: number;
  className?: string;
  x?: string;
  y?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -8, 0],
        opacity: [0.08, 0.14, 0.08],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    </motion.div>
  );
}

/** Thin arc that rotates — architectural feel */
export function RotatingArc({
  size = 200,
  className = "",
  duration = 20,
}: {
  size?: number;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <path
          d="M 80 50 A 30 30 0 0 1 50 80"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M 20 50 A 30 30 0 0 1 50 20"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Reusable page background geometry — scattered shapes
 * position: "left" | "right" | "center" controls clustering
 */
export function PageGeometry({
  variant,
}: {
  variant: "hero" | "about" | "classes" | "pricing" | "contact" | "book";
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const configs: Record<
    string,
    { shapes: React.ReactNode[] }
  > = {
    hero: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <RotatingCircle key="c1" size={420} duration={45} strokeWidth={0.35} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blush-dark/[0.15]" />,
        <RotatingCircle key="c2" size={280} duration={30} strokeWidth={0.3} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blush/[0.18]" />,
        <FloatingCircle key="fc1" size={80} x="8%" y="20%" delay={0} className="text-blush-dark/[0.12]" />,
        <FloatingCircle key="fc2" size={50} x="85%" y="65%" delay={2} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc3" size={35} x="18%" y="75%" delay={1} className="text-gold/[0.08]" />,
      ],
    },
    about: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <FloatingCircle key="fc1" size={90} x="85%" y="10%" delay={0} className="text-blush-dark/[0.12]" />,
        <FloatingCircle key="fc2" size={55} x="5%" y="60%" delay={1.5} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc3" size={40} x="75%" y="75%" delay={0.8} className="text-gold/[0.08]" />,
        <FloatingCircle key="fc4" size={65} x="10%" y="25%" delay={2} className="text-blush-dark/[0.10]" />,
      ],
    },
    classes: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <FloatingCircle key="fc1" size={70} x="90%" y="15%" delay={0} className="text-blush-dark/[0.12]" />,
        <FloatingCircle key="fc2" size={50} x="5%" y="45%" delay={1} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc3" size={85} x="80%" y="70%" delay={2} className="text-blush-dark/[0.08]" />,
        <FloatingCircle key="fc4" size={40} x="15%" y="85%" delay={0.5} className="text-gold/[0.08]" />,
      ],
    },
    pricing: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <FloatingCircle key="fc1" size={80} x="88%" y="8%" delay={0} className="text-blush-dark/[0.12]" />,
        <FloatingCircle key="fc2" size={60} x="5%" y="35%" delay={1.5} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc3" size={45} x="92%" y="55%" delay={0.8} className="text-blush-dark/[0.10]" />,
        <FloatingCircle key="fc4" size={55} x="8%" y="75%" delay={2} className="text-gold/[0.08]" />,
      ],
    },
    contact: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <FloatingCircle key="fc1" size={75} x="85%" y="12%" delay={0} className="text-blush-dark/[0.12]" />,
        <FloatingCircle key="fc2" size={50} x="8%" y="50%" delay={1} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc3" size={60} x="78%" y="70%" delay={2} className="text-gold/[0.08]" />,
      ],
    },
    book: {
      shapes: [
        <ScatteredDots key="dots" className="absolute inset-0" />,
        <RotatingCircle key="c1" size={300} duration={45} strokeWidth={0.35} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blush-dark/[0.15]" />,
        <FloatingCircle key="fc1" size={60} x="10%" y="25%" delay={0} className="text-blush/[0.15]" />,
        <FloatingCircle key="fc2" size={45} x="85%" y="65%" delay={1.5} className="text-blush-dark/[0.12]" />,
      ],
    },
  };

  const config = configs[variant];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {config.shapes}
    </motion.div>
  );
}
