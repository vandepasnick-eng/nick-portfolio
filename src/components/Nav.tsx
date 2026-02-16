"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/builds", label: "Builds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          Nicholas Van De Pas
        </Link>

        {/* Desktop links */}
        <div className="hidden gap-8 sm:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === href
                  ? "font-medium text-accent"
                  : "text-text-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-8 w-8 items-center justify-center sm:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${
                open ? "top-2.5 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ease-in-out ${
                open ? "top-2.5 -rotate-45" : "top-[18px]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-6 py-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm transition-colors hover:text-accent ${
                pathname === href
                  ? "font-medium text-accent"
                  : "text-text-secondary"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
