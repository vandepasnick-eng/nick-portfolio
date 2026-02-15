import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllBuilds, getBuildBySlug } from "@/lib/builds";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllBuilds().map((build) => ({ slug: build.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuildBySlug(slug);
  if (!build) return {};
  return {
    title: `${build.title} — Nicholas Van De Pas`,
    description: build.description,
  };
}

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);
  if (!build) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-20 pt-24">
      <Link
        href="/builds"
        className="text-sm text-text-secondary hover:text-accent"
      >
        &larr; All builds
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <time className="text-sm text-text-secondary">{build.date}</time>
          <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
            {build.category}
          </span>
        </div>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {build.title}
        </h1>
        <p className="mt-3 text-lg text-text-secondary">{build.description}</p>
      </header>

      {/* Placeholder image */}
      <div className="mt-8 flex aspect-video items-center justify-center rounded-lg bg-surface">
        <span className="font-heading text-sm text-text-secondary">
          Screenshot placeholder
        </span>
      </div>

      {/* Stack */}
      <div className="mt-8 flex flex-wrap gap-2">
        {build.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-surface px-3 py-1 font-mono text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Story */}
      <div className="mt-10 space-y-4 text-base leading-relaxed">
        {build.story.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* What's interesting */}
      <div className="mt-10 rounded-lg border border-border bg-accent-light p-6">
        <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent">
          Why this matters
        </h2>
        <p className="mt-2 text-sm leading-relaxed">{build.interesting}</p>
      </div>

      {/* Links */}
      {build.url && (
        <div className="mt-8">
          <a
            href={build.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View live site &rarr;
          </a>
        </div>
      )}
    </article>
  );
}
