import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/StructuredData";
import { routes } from "@/data/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
