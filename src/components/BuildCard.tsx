import Link from "next/link";
import { Build } from "@/lib/builds";

export default function BuildCard({ build }: { build: Build }) {
  return (
    <Link
      href={`/builds/${build.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md"
    >
      <div className="flex aspect-video items-center justify-center bg-surface">
        <span className="px-4 text-center font-heading text-sm font-medium text-text-secondary">
          {build.title}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <time className="text-xs text-text-secondary">{build.date}</time>
          <span className="rounded-full bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
            {build.category}
          </span>
        </div>
        <h3 className="mt-2 font-heading text-base font-semibold group-hover:text-accent">
          {build.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
          {build.description}
        </p>
      </div>
    </Link>
  );
}
