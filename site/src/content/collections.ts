import { blogPosts } from "@/content/blog";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";

export const collections = {
  services,
  caseStudies,
  blogPosts,
} as const;

export type ContentCollectionName = keyof typeof collections;

export type ContentCollectionItem<T extends ContentCollectionName> =
  (typeof collections)[T][number];
