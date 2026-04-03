import Image from "next/image";

export function AnimatedForteLogo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/forteSVG.svg"
        alt="Forte Pilates"
        width={1122}
        height={793}
        className="w-full h-auto"
        style={{ mixBlendMode: "multiply" }}
        priority
      />
    </div>
  );
}
