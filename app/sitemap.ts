import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/blog";

const BASE = "https://peelexcavation.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/projects", "/about", "/blog", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
