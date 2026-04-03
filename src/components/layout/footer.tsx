import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-blush-light text-charcoal/70">
      {/* Decorative top edge */}
      <div className="h-px bg-gradient-to-r from-transparent via-blush-dark/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-forum text-lg tracking-[0.25em] uppercase text-charcoal mb-5">
              {SITE.name}
            </p>
            <p className="text-sm leading-[1.8] max-w-sm text-charcoal/50">
              A boutique Pilates studio in Los Angeles. Where precision meets
              creativity.
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase text-charcoal/40 hover:text-brown transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-forum text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-charcoal/50 hover:text-charcoal transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-forum text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-5">
              Visit Us
            </p>
            <div className="text-sm space-y-2 text-charcoal/50">
              <p>{SITE.address.street}</p>
              <p>
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
              <p className="pt-3">{SITE.email}</p>
              <p>{SITE.phone}</p>
              <div className="pt-3 space-y-1 text-charcoal/40 text-xs">
                <p>Mon–Fri: {SITE.hours.monday}</p>
                <p>Sat: {SITE.hours.saturday}</p>
                <p>Sun: {SITE.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-charcoal/[0.06]">
          <p className="text-[11px] text-charcoal/30 tracking-wide">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
