import Link from "next/link";
import BuildCard from "@/components/BuildCard";
import { getAllBuilds } from "@/lib/builds";

export default function Home() {
  const builds = getAllBuilds().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Nicholas Van De Pas
        </h1>
        <p className="mt-4 text-xl text-text-secondary sm:text-2xl">
          Former subsea engineer. Now building with AI.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          I spent 7 years designing subsea infrastructure across Melbourne, Houston, and
          Norway. I resigned to build location-independent products at the intersection of
          engineering rigour and AI-assisted development. This site documents what I build
          and how I think about technology.
        </p>
        <Link
          href="/builds"
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          See what I&apos;m building
        </Link>
      </section>

      {/* Featured Builds */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Recent Builds
          </h2>
          <p className="mt-2 text-text-secondary">
            Real projects, real problems, real solutions.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {builds.map((build) => (
              <BuildCard key={build.slug} build={build} />
            ))}
          </div>
          <Link
            href="/builds"
            className="mt-8 inline-block text-sm font-medium text-accent hover:text-accent-hover"
          >
            View all builds &rarr;
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight">About</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          Engineer turned builder. I bring systems thinking from subsea engineering to
          everything I build — whether that&apos;s a lead generation tool, a client website, or
          the workspace system I use to ship it all.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover"
        >
          Read more &rarr;
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Want to work together or just say hi?
          </h2>
          <p className="mt-2 text-text-secondary">
            I&apos;m always open to interesting conversations and collaborations.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/nicholas-van-de-pas-b0538a134/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
