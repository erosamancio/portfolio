import type { MetadataRoute } from "next";
import { projects } from "@/content/site";
import { siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/sobre`, priority: 0.8 },
    ...projects.map((p) => ({ url: `${siteUrl}/trabalhos/${p.slug}`, priority: 0.7 })),
  ];
}
