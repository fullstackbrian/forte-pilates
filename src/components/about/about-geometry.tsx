"use client";

import { GeometricLines, RotatingCircle } from "@/components/motion/geometric";

export function AboutImageGeometry() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <GeometricLines className="w-36 h-36 text-brown/[0.05]" />
      </div>
      <RotatingCircle
        size={160}
        duration={30}
        strokeWidth={0.2}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold/[0.05]"
      />
    </>
  );
}

export function PhilosophyGeometry() {
  return (
    <RotatingCircle
      size={250}
      duration={40}
      strokeWidth={0.2}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brown/[0.04]"
    />
  );
}
