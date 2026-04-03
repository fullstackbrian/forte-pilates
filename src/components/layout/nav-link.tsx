"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "font-forum text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative",
        isActive
          ? "text-brown"
          : "text-charcoal/60 hover:text-charcoal"
      )}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-brown/40" />
      )}
    </Link>
  );
}
