"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-2xl border-b border-brown/[0.05]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between h-[76px]">
        <Link
          href="/"
          className="font-forum text-lg tracking-[0.3em] uppercase text-charcoal hover:text-brown transition-colors duration-500"
        >
          {SITE.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-charcoal/15 font-forum text-[10px] tracking-[0.25em] uppercase text-charcoal/70 hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all duration-500"
          >
            Book Now
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
