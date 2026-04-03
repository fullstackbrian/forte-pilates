import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { AnimateOnScroll } from "@/components/motion/animate-on-scroll";
import { GeometricLines } from "@/components/motion/geometric";

export function AboutPreview() {
  return (
    <Section bg="white" className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with geometric overlay */}
          <AnimateOnScroll>
            <div className="relative group">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-dark via-cream to-brown/[0.06]" />
              {/* Inner border */}
              <div className="absolute top-5 left-5 right-5 bottom-5 border border-gold/15 pointer-events-none transition-all duration-700 group-hover:top-4 group-hover:left-4 group-hover:right-4 group-hover:bottom-4" />
              {/* Corner accents */}
              <div className="absolute top-5 left-5 w-4 h-4 border-t border-l border-gold/30 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-4 h-4 border-b border-r border-gold/30 pointer-events-none" />
              {/* Geometric overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <GeometricLines className="w-40 h-40 text-brown/[0.06]" />
              </div>
              <span className="absolute bottom-8 left-0 right-0 text-center font-forum text-brown/15 text-xs tracking-[0.4em] uppercase">
                Studio Photo
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="flex items-center gap-4 mb-8">
              <span className="block h-px w-8 bg-gold/40" />
              <p className="font-forum text-[10px] tracking-[0.4em] uppercase text-brown/50">
                Our Story
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] mb-8 leading-[1.15]">
              Movement as
              <br />
              an art form
            </h2>
            <div className="space-y-5">
              <p className="text-charcoal/60 leading-[1.9] text-[15px]">
                Forte Pilates was born from a belief that Pilates is more than
                exercise — it is a practice of intentional movement that
                transforms how you live in your body.
              </p>
              <p className="text-charcoal/60 leading-[1.9] text-[15px]">
                In our intimate Los Angeles studio, every session is thoughtfully
                designed. Whether you are stepping onto a reformer for the first
                time or deepening a longtime practice, we meet you exactly where
                you are.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/about"
                className="inline-flex items-center gap-3 font-forum text-xs tracking-[0.2em] uppercase text-brown/60 hover:text-brown group transition-colors duration-500 cursor-pointer"
              >
                <span>Learn more</span>
                <span className="block w-5 h-px bg-brown/30 group-hover:w-8 group-hover:bg-brown transition-all duration-500" />
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </Section>
  );
}
