import type { MetadataRoute } from "next";
import { blogPosts, caseStudies, services, site } from "./_content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...caseStudies.map((caseStudy) => `/case-studies/${caseStudy.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
