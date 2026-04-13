import { collections, type ContentCollectionName } from "@/content/collections";
import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import type {
  BlogContent,
  CaseStudyContent,
  ServiceContent,
} from "@/content/types";

type Taggable = {
  slug: string;
  tags: readonly string[];
  featured?: boolean;
};

type DateStamped = {
  publishedAt?: string;
};

export function getCollection<T extends ContentCollectionName>(
  name: T,
): (typeof collections)[T] {
  return collections[name];
}

export function getCollectionSlugs<T extends ContentCollectionName>(
  name: T,
): string[] {
  return collections[name].map((item) => item.slug);
}

export function getCollectionBySlug<T extends ContentCollectionName>(
  name: T,
  slug: string,
): (typeof collections)[T][number] | undefined {
  return collections[name].find((item) => item.slug === slug);
}

export function getBySlug<T extends { slug: string }>(
  items: readonly T[],
  slug: string,
): T | undefined {
  return items.find((item) => item.slug === slug);
}

export function getFeatured<T extends { featured?: boolean }>(
  items: readonly T[],
  limit = 3,
): T[] {
  return items.filter((item) => item.featured).slice(0, limit);
}

export function sortByPublishedAt<T extends DateStamped>(
  items: readonly T[],
): T[] {
  return [...items].sort((left, right) => {
    const leftTime = left.publishedAt ? Date.parse(left.publishedAt) : 0;
    const rightTime = right.publishedAt ? Date.parse(right.publishedAt) : 0;

    return leftTime - rightTime;
  });
}

export function getRelatedByTags<T extends Taggable>(
  source: T,
  items: readonly T[],
  limit = 3,
): T[] {
  const ranked = items
    .filter((item) => item.slug !== source.slug)
    .map((item, index) => {
      const sharedTags = item.tags.filter((tag) => source.tags.includes(tag));
      const featuredBonus = item.featured ? 2 : 0;
      const score = sharedTags.length * 10 + featuredBonus;

      return { item, index, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return left.index - right.index;
    })
    .map((entry) => entry.item)
    .slice(0, limit);

  if (ranked.length > 0) {
    return ranked;
  }

  const featuredFallback = items
    .filter((item) => item.slug !== source.slug && item.featured)
    .slice(0, limit);

  if (featuredFallback.length > 0) {
    return featuredFallback;
  }

  return items.filter((item) => item.slug !== source.slug).slice(0, limit);
}

export function createSlugIndex<T extends { slug: string }>(
  items: readonly T[],
): Map<string, T> {
  return new Map(items.map((item) => [item.slug, item] as const));
}

export const getServiceBySlug = (slug: string): ServiceContent | undefined =>
  getBySlug(services, slug);

export const getCaseStudyBySlug = (slug: string): CaseStudyContent | undefined =>
  getBySlug(caseStudies, slug);

export const getBlogPostBySlug = (slug: string): BlogContent | undefined =>
  getBySlug(blogPosts, slug);

export const getFeaturedServicesList = (limit = 3): ServiceContent[] =>
  getFeatured(services, limit);

export const getFeaturedCaseStudiesList = (limit = 3): CaseStudyContent[] =>
  getFeatured(caseStudies, limit);

export const getFeaturedBlogPostsList = (limit = 3): BlogContent[] =>
  getFeatured(blogPosts, limit);

export const getRelatedServices = (
  service: ServiceContent,
  limit = 3,
): ServiceContent[] => getRelatedByTags(service, services, limit);

export const getRelatedCaseStudies = (
  caseStudy: CaseStudyContent,
  limit = 3,
): CaseStudyContent[] => getRelatedByTags(caseStudy, caseStudies, limit);

export const getRelatedBlogPosts = (
  blogPost: BlogContent,
  limit = 3,
): BlogContent[] => getRelatedByTags(blogPost, blogPosts, limit);
