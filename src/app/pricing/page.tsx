import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/motion/animate-on-scroll";
import { pricingTiers, workshopPrice } from "@/data/pricing";
import { SITE } from "@/lib/constants";
import { PricingGeometry } from "@/components/motion/page-geometry-wrapper";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "View pricing and session packages for private Pilates, duet classes, and trio classes at Forte Pilates in Los Angeles.",
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <PricingGeometry />
      {/* Hero */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block h-px w-8 bg-gold/50" />
              <p className="font-forum text-xs tracking-[0.35em] uppercase text-brown-light">
                Pricing
              </p>
              <span className="block h-px w-8 bg-gold/50" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
              Invest in your practice
            </h1>
            <p className="text-base sm:text-lg text-charcoal-light leading-[1.85] max-w-xl mx-auto">
              Choose the format and package that works best for you. The more you
              commit, the more you save.
            </p>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* Pricing Table */}
      <Section bg="white" className="py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-brown/10">
                    <th className="text-left pb-4 font-forum text-xs tracking-[0.2em] uppercase text-brown/50 w-2/5">
                      Package
                    </th>
                    <th className="text-center pb-4 font-forum text-xs tracking-[0.2em] uppercase text-brown/50">
                      Private
                    </th>
                    <th className="text-center pb-4 font-forum text-xs tracking-[0.2em] uppercase text-brown/50">
                      Duet
                    </th>
                    <th className="text-center pb-4 font-forum text-xs tracking-[0.2em] uppercase text-brown/50">
                      Trio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier, i) => (
                    <tr
                      key={tier.name}
                      className={`border-b border-brown/[0.06] ${
                        tier.popular ? "bg-cream-dark/30" : ""
                      }`}
                    >
                      <td className="py-6 pr-4">
                        <div className="flex items-center gap-3">
                          <span className="text-base font-forum">
                            {tier.name}
                          </span>
                          {tier.popular && (
                            <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 bg-charcoal text-cream">
                              Popular
                            </span>
                          )}
                        </div>
                        {tier.note && (
                          <p className="text-xs text-charcoal-light/60 mt-1">
                            {tier.note}
                          </p>
                        )}
                      </td>
                      <td className="py-6 text-center">
                        <span className="text-xl font-forum">
                          ${tier.prices.private}
                        </span>
                        {tier.sessions > 1 && (
                          <p className="text-[10px] text-charcoal-light/50 mt-0.5">
                            ${tier.perSession.private}/session
                          </p>
                        )}
                      </td>
                      <td className="py-6 text-center">
                        <span className="text-xl font-forum">
                          ${tier.prices.duet}
                        </span>
                        {tier.sessions > 1 && (
                          <p className="text-[10px] text-charcoal-light/50 mt-0.5">
                            ${tier.perSession.duet}/session
                          </p>
                        )}
                      </td>
                      <td className="py-6 text-center">
                        <span className="text-xl font-forum">
                          ${tier.prices.trio}
                        </span>
                        {tier.sessions > 1 && (
                          <p className="text-[10px] text-charcoal-light/50 mt-0.5">
                            ${tier.perSession.trio}/session
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>

          {/* Workshop Pricing */}
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-brown/[0.06]">
              <div className="flex items-center gap-3 mb-4">
                <span className="block h-px w-6 bg-gold/50" />
                <p className="font-forum text-xs tracking-[0.3em] uppercase text-brown-light">
                  Specialty
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-forum mb-1">
                    Creative Pilates Workshop
                  </h3>
                  <p className="text-sm text-charcoal-light">
                    ${workshopPrice.single} per session &middot;{" "}
                    {workshopPrice.note}
                  </p>
                </div>
                <Button
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Workshop
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-20 md:py-28">
        <Container className="max-w-xl text-center">
          <AnimateOnScroll>
            <Button
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Purchase a Package
            </Button>
            <p className="text-sm text-charcoal-light mt-6">
              Questions about pricing?{" "}
              <a
                href="/contact"
                className="text-brown/70 border-b border-brown/20 hover:border-brown/40 transition-colors duration-300"
              >
                Get in touch
              </a>
            </p>
          </AnimateOnScroll>
        </Container>
      </Section>
    </div>
  );
}
