import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nicholas Van De Pas",
  description:
    "Former subsea engineer turned builder. The story of how I went from designing pipelines to building products with AI.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-24">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        About
      </h1>

      {/* Photo placeholder */}
      <div className="mt-8 flex h-48 w-48 items-center justify-center rounded-lg bg-surface">
        <span className="text-sm text-text-secondary">Photo</span>
      </div>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          I&apos;m Nicholas Van De Pas — a former subsea engineer now building
          location-independent products at the intersection of engineering rigour and
          AI-assisted development. Based between New Zealand and Montreal.
        </p>

        <h2 className="font-heading text-xl font-semibold">The Engineering Years</h2>
        <p>
          I spent 7 years in subsea engineering across Ocean Installer and AMOG
          Consulting. I started as a graduate engineer and progressed to Senior Project
          Engineer, working across Melbourne, Houston, and Norway. Bachelor&apos;s degree in
          Ocean Engineering.
        </p>
        <p>
          I didn&apos;t leave engineering because I hated it — I left because I wanted to
          build something of my own. The decision to go location-independent was
          deliberate: I wanted freedom over geography.
        </p>

        <h2 className="font-heading text-xl font-semibold">The Transition</h2>
        <p>
          The first serious discovery was that AI tools — specifically Claude Code — let
          me build things at a pace that would&apos;ve been impossible otherwise. An engineer
          who can also ship software, automate workflows, and build products is a
          different kind of asset. That&apos;s the identity I&apos;m developing, and this site
          documents it.
        </p>

        <h2 className="font-heading text-xl font-semibold">What I&apos;m Building Now</h2>
        <ul className="list-inside list-disc space-y-2 text-text-secondary">
          <li>
            <strong className="text-foreground">NZ Web Design for Trades</strong> — web
            design + hosting service targeting NZ trades businesses without websites.
            Lead database of 500+ businesses built via Google Places API.
          </li>
          <li>
            <strong className="text-foreground">This portfolio</strong> — documenting the
            build process publicly.
          </li>
          <li>
            <strong className="text-foreground">AI automation tools</strong> — lead gen,
            workflow automation, exploring SaaS opportunities.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-semibold">Connect</h2>
        <p>
          Find me on{" "}
          <a
            href="https://www.linkedin.com/in/nicholas-van-de-pas-b0538a134/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:text-accent-hover"
          >
            LinkedIn
          </a>{" "}
          or check out my business site at{" "}
          <a
            href="https://nicholasvandepas.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:text-accent-hover"
          >
            nicholasvandepas.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
