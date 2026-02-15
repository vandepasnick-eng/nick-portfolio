import BuildCard from "@/components/BuildCard";
import { getAllBuilds } from "@/lib/builds";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builds — Nicholas Van De Pas",
  description: "Projects I've built — tools, websites, and automations.",
};

export default function BuildsPage() {
  const builds = getAllBuilds();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-24">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Builds
      </h1>
      <p className="mt-2 text-text-secondary">
        Everything I&apos;ve built — tools, websites, automations, and the occasional
        personal project. Each one solved a real problem.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {builds.map((build) => (
          <BuildCard key={build.slug} build={build} />
        ))}
      </div>
    </section>
  );
}
