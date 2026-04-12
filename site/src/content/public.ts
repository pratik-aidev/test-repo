import {
  blogPosts as blogRecords,
  getBlogPostBySlug as getBlogRecordBySlug,
} from "@/content/blog";
import {
  caseStudies as caseStudyRecords,
  getCaseStudyBySlug as getCaseStudyRecordBySlug,
} from "@/content/case-studies";
import {
  services as serviceRecords,
  getServiceBySlug as getServiceRecordBySlug,
} from "@/content/services";
import { siteConfig } from "@/content/site";
import type {
  BlogContent,
  CaseStudyContent,
  ServiceContent,
} from "@/content/types";
import type {
  BlogContract,
  CaseStudyContract,
  ServiceContract,
} from "@/content/contracts";
import {
  blogPath,
  caseStudyPath,
  servicePath,
} from "@/lib/routes";
import {
  buildArticleJsonLd,
  buildBlogMetadata,
  buildBlogPostingJsonLd,
  buildBreadcrumbJsonLd,
  buildCaseStudyMetadata,
  buildFAQJsonLd,
  buildOrganizationJsonLd,
  buildPageMetadata,
  buildServiceJsonLd,
  buildServiceMetadata,
  buildWebSiteJsonLd,
} from "@/lib/seo";

export type {
  BlogContract,
  CaseStudyContract,
  ServiceContract,
} from "@/content/contracts";

export const services: readonly ServiceContract[] = serviceRecords.map(
  ({ slug, title, summary, problem, approach, deliverables, faqs, cta }) => ({
    slug,
    title,
    summary,
    problem,
    approach,
    deliverables,
    faqs,
    cta,
  }),
);

function toServiceContract({
  slug,
  title,
  summary,
  problem,
  approach,
  deliverables,
  faqs,
  cta,
}: ServiceContent): ServiceContract {
  return {
    slug,
    title,
    summary,
    problem,
    approach,
    deliverables,
    faqs,
    cta,
  };
}

export const caseStudies: readonly CaseStudyContract[] = caseStudyRecords.map(
  ({ slug, client, challenge, solution, stack, metrics, testimonial, cta, featuredImage }) => ({
    slug,
    client,
    challenge,
    solution,
    stack,
    metrics,
    testimonial,
    cta,
    coverImage: featuredImage,
  }),
);

function toCaseStudyContract({
  slug,
  client,
  challenge,
  solution,
  stack,
  metrics,
  testimonial,
  cta,
  featuredImage,
}: CaseStudyContent): CaseStudyContract {
  return {
    slug,
    client,
    challenge,
    solution,
    stack,
    metrics,
    testimonial,
    cta,
    coverImage: featuredImage,
  };
}

export const blogPosts: readonly BlogContract[] = blogRecords.map(
  ({ slug, title, excerpt, category, author, publishedAt, readTime, coverImage, seo }) => ({
    slug,
    title,
    excerpt,
    category,
    author,
    publishedAt,
    readTime,
    coverImage,
    seo,
  }),
);

function toBlogContract({
  slug,
  title,
  excerpt,
  category,
  author,
  publishedAt,
  readTime,
  coverImage,
  seo,
}: BlogContent): BlogContract {
  return {
    slug,
    title,
    excerpt,
    category,
    author,
    publishedAt,
    readTime,
    coverImage,
    seo,
  };
}

export const content = {
  services,
  caseStudies,
  blogPosts,
} as const;

export const serviceRecordsBySlug = new Map(
  serviceRecords.map((item) => [item.slug, item] as const),
);

export const caseStudyRecordsBySlug = new Map(
  caseStudyRecords.map((item) => [item.slug, item] as const),
);

export const blogRecordsBySlug = new Map(
  blogRecords.map((item) => [item.slug, item] as const),
);

export function getServiceBySlug(slug: string): ServiceContract | undefined {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudyContract | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogContract | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getServiceRecord(slug: string): ServiceContent | undefined {
  return getServiceRecordBySlug(slug);
}

export function getCaseStudyRecord(
  slug: string,
): CaseStudyContent | undefined {
  return getCaseStudyRecordBySlug(slug);
}

export function getBlogRecord(slug: string): BlogContent | undefined {
  return getBlogRecordBySlug(slug);
}

export function getServiceStaticParams(): readonly { slug: string }[] {
  return services.map(({ slug }) => ({ slug }));
}

export function getCaseStudyStaticParams(): readonly { slug: string }[] {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export function getBlogStaticParams(): readonly { slug: string }[] {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export function getServiceRoutes(): readonly string[] {
  return services.map(({ slug }) => servicePath(slug));
}

export function getCaseStudyRoutes(): readonly string[] {
  return caseStudies.map(({ slug }) => caseStudyPath(slug));
}

export function getBlogRoutes(): readonly string[] {
  return blogPosts.map(({ slug }) => blogPath(slug));
}

export function getFeaturedServices(limit = 3): readonly ServiceContract[] {
  return serviceRecords
    .filter((service) => service.featured)
    .slice(0, limit)
    .map(toServiceContract);
}

export function getFeaturedCaseStudies(
  limit = 3,
): readonly CaseStudyContract[] {
  return caseStudyRecords
    .filter((caseStudy) => caseStudy.featured)
    .slice(0, limit)
    .map(toCaseStudyContract);
}

export function getFeaturedBlogPosts(limit = 3): readonly BlogContract[] {
  return blogRecords
    .filter((blogPost) => blogPost.featured)
    .slice(0, limit)
    .map(toBlogContract);
}

export function getServiceSeoMetadata(slug: string, siteUrl?: string) {
  const record = getServiceRecordBySlug(slug);

  return record ? buildServiceMetadata(record, siteUrl) : undefined;
}

export function getCaseStudySeoMetadata(slug: string, siteUrl?: string) {
  const record = getCaseStudyRecordBySlug(slug);

  return record ? buildCaseStudyMetadata(record, siteUrl) : undefined;
}

export function getBlogSeoMetadata(slug: string, siteUrl?: string) {
  const record = getBlogRecordBySlug(slug);

  return record ? buildBlogMetadata(record, siteUrl) : undefined;
}

export function getServiceJsonLd(slug: string, siteUrl?: string) {
  const record = getServiceRecordBySlug(slug);

  return record ? buildServiceJsonLd(record, siteUrl) : undefined;
}

export function getCaseStudyJsonLd(slug: string, siteUrl?: string) {
  const record = getCaseStudyRecordBySlug(slug);

  return record ? buildArticleJsonLd(record, siteUrl) : undefined;
}

export function getBlogJsonLd(slug: string, siteUrl?: string) {
  const record = getBlogRecordBySlug(slug);

  return record ? buildBlogPostingJsonLd(record, siteUrl) : undefined;
}

export function getSharedSiteJsonLd(siteUrl?: string) {
  return {
    organization: buildOrganizationJsonLd(siteConfig, siteUrl),
    website: buildWebSiteJsonLd(siteConfig, siteUrl),
  };
}

export function getSharedBreadcrumbJsonLd(
  items: readonly { label: string; path: `/${string}` }[],
  siteUrl?: string,
) {
  return buildBreadcrumbJsonLd(items, siteUrl);
}

export function getSharedPageMetadata(
  title: string,
  description: string,
  path: `/${string}`,
  siteUrl?: string,
) {
  return buildPageMetadata({ title, description, path, siteUrl });
}

export function getSharedFaqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return buildFAQJsonLd(faqs);
}
