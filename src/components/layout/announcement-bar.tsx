"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative bg-charcoal text-cream/80 py-2.5 px-6 text-center">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <span className="font-forum text-[10px] tracking-[0.3em] uppercase text-gold/70">
          Soft Opening
        </span>
        <span className="block w-px h-3 bg-cream/20" />
        <p className="text-[11px] tracking-wide text-cream/60">
          March 31, 2026 · Spots are limited. Book via Mindbody —{" "}
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/80 border-b border-cream/30 hover:border-cream/60 hover:text-cream transition-colors duration-300"
          >
            Book now →
          </a>
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/30 hover:text-cream/60 transition-colors duration-300 cursor-pointer text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
