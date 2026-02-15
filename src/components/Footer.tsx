import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-heading text-sm font-semibold">Nicholas Van De Pas</p>
          <p className="mt-1 text-sm text-text-secondary">
            Building products with engineering rigour and AI.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Pages
            </p>
            <Link href="/builds" className="text-sm text-text-secondary hover:text-accent">
              Builds
            </Link>
            <Link href="/about" className="text-sm text-text-secondary hover:text-accent">
              About
            </Link>
            <Link href="/contact" className="text-sm text-text-secondary hover:text-accent">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              Elsewhere
            </p>
            <a
              href="https://www.linkedin.com/in/nicholas-van-de-pas-b0538a134/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://nicholasvandepas.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent"
            >
              NV Web Design
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4 text-center text-xs text-text-secondary">
        &copy; {new Date().getFullYear()} Nicholas Van De Pas. All rights reserved.
      </div>
    </footer>
  );
}
