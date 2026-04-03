import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import {
  AnimateOnScroll,
  AnimateStagger,
  AnimateStaggerChild,
} from "@/components/motion/animate-on-scroll";

const highlights = [
  {
    name: "Private Sessions",
    description:
      "One-on-one instruction fully tailored to your body, your goals, and your pace.",
    numeral: "I",
  },
  {
    name: "Duet Classes",
    description:
      "Semi-private sessions for two. Share the experience with a friend or partner.",
    numeral: "II",
  },
  {
    name: "Trio Classes",
    description:
      "Small group energy with the personal attention of a private session.",
    numeral: "III",
  },
];

export function ClassHighlights() {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <AnimateOnScroll className="text-center mb-16">
          <div className="flex items-center justify-center gap-5 mb-6">
            <span className="block h-px w-10 bg-gold/30" />
            <p className="font-forum text-[10px] tracking-[0.4em] uppercase text-brown/50">
              What We Offer
            </p>
            <span className="block h-px w-10 bg-gold/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
            Classes for every goal
          </h2>
        </AnimateOnScroll>

        <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brown/[0.06]">
          {highlights.map((item) => (
            <AnimateStaggerChild key={item.name}>
              <Link
                href="/classes"
                className="group block p-10 lg:p-12 bg-cream hover:bg-warm-white transition-colors duration-700 relative"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold/40 group-hover:w-full transition-all duration-700" />

                <p className="font-forum text-4xl text-brown/[0.12] mb-8 tracking-[0.1em] group-hover:text-brown/[0.25] transition-colors duration-700">
                  {item.numeral}
                </p>
                <h3 className="font-forum text-lg tracking-wide mb-3 group-hover:text-brown transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-charcoal/45 text-sm leading-[1.85]">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center gap-2">
                  <span className="font-forum text-[10px] tracking-[0.2em] uppercase text-brown/30 group-hover:text-brown/60 transition-colors duration-500">
                    Learn more
                  </span>
                  <span className="block w-0 h-px bg-brown/40 group-hover:w-4 transition-all duration-500" />
                </div>
              </Link>
            </AnimateStaggerChild>
          ))}
        </AnimateStagger>
      </Container>
    </Section>
  );
}
