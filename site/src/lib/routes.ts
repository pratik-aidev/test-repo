import { normalizeSlug } from "@/lib/slugs";
import type { RoutePath } from "@/content/types";

export function servicePath(slug: string): RoutePath {
  return `/services/${normalizeSlug(slug)}` as RoutePath;
}

export function caseStudyPath(slug: string): RoutePath {
  return `/case-studies/${normalizeSlug(slug)}` as RoutePath;
}

export function blogPath(slug: string): RoutePath {
  return `/blog/${normalizeSlug(slug)}` as RoutePath;
}

export function withLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
