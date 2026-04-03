"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, SITE } from "@/lib/constants";

function MobileNavOverlay({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-cream flex flex-col md:hidden">
      {/* Header bar with close button */}
      <div className="h-[76px] shrink-0 flex items-center justify-between px-6 border-b border-brown/[0.06]">
        <span className="font-forum text-xl tracking-[0.25em] uppercase text-charcoal">
          {SITE.name}
        </span>
        <button
          onClick={onClose}
          className="p-2 cursor-pointer"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav content */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-8 pb-20">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={clsx(
              "font-forum text-lg tracking-[0.2em] uppercase transition-colors duration-300",
              pathname === link.href
                ? "text-brown"
                : "text-charcoal/40 hover:text-charcoal"
            )}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-4">
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="px-8 py-3 border border-charcoal/20 font-forum text-xs tracking-[0.2em] uppercase text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </nav>
    </div>,
    document.body
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Open menu"
      >
        <span className="block h-0.5 w-6 bg-charcoal" />
        <span className="block h-0.5 w-6 bg-charcoal" />
        <span className="block h-0.5 w-6 bg-charcoal" />
      </button>

      {mounted && open && (
        <MobileNavOverlay pathname={pathname} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
