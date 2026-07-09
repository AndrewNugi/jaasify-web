import type { MetadataRoute } from "next";

const BASE_URL = "https://jaasify.com";

const routes = [
  "",
  "/industries",
  "/industries/banking",
  "/industries/insurance",
  "/industries/saccos",
  "/industries/techco",
  "/industries/hospitality",
  "/industries/utilities",
  "/industries/cyber-security",
  "/contact",
  "/privacy",
  "/admin",
  "/admin/dashboard",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
