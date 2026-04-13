import { normalizeSlug } from "@/lib/slugs";
import type { RoutePath } from "@/content/types";

/**
 * Route configuration mapping for different content types
 */
export const ROUTE_SEGMENTS = {
  SERVICES: "services",
  CASE_STUDIES: "case-studies",
  BLOG: "blog",
  HOME: "",
} as const;

/**
 * Generate a service path from a slug
 * @param slug - The service slug
 * @returns The formatted service route path
 */
export function servicePath(slug: string): RoutePath {
  return `/${ROUTE_SEGMENTS.SERVICES}/${normalizeSlug(slug)}` as RoutePath;
}

/**
 * Generate a case study path from a slug
 * @param slug - The case study slug
 * @returns The formatted case study route path
 */
export function caseStudyPath(slug: string): RoutePath {
  return `/${ROUTE_SEGMENTS.CASE_STUDIES}/${normalizeSlug(slug)}` as RoutePath;
}

/**
 * Generate a blog path from a slug
 * @param slug - The blog post slug
 * @returns The formatted blog route path
 */
export function blogPath(slug: string): RoutePath {
  return `/${ROUTE_SEGMENTS.BLOG}/${normalizeSlug(slug)}` as RoutePath;
}

/**
 * Ensure a path has a leading slash
 * @param path - The path to normalize
 * @returns The path with a leading slash
 */
export function withLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

/**
 * Remove leading slash from a path
 * @param path - The path to normalize
 * @returns The path without a leading slash
 */
export function removeLeadingSlash(path: string): string {
  return path.startsWith("/") ? path : path.slice(1);
}
