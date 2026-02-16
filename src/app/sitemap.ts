import type { MetadataRoute } from "next";
import { getAllBuilds } from "@/lib/builds";

export default function sitemap(): MetadataRoute.Sitemap {
  const builds = getAllBuilds().map((build) => ({
    url: `https://nvdp.dev/builds/${build.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://nvdp.dev", lastModified: new Date() },
    { url: "https://nvdp.dev/builds", lastModified: new Date() },
    { url: "https://nvdp.dev/about", lastModified: new Date() },
    { url: "https://nvdp.dev/contact", lastModified: new Date() },
    ...builds,
  ];
}
