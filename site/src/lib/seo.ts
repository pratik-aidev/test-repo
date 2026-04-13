import type { Metadata } from "next";

import { siteConfig } from "@/content/site";
import type {
  BlogContent,
  CaseStudyContent,
  FaqItem,
  RoutePath,
  ServiceContent,
  SiteConfig,
} from "@/content/types";
import { withLeadingSlash } from "@/lib/routes";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: RoutePath;
  siteUrl?: string;
  keywords?: readonly string[];
  image?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

function buildAbsoluteUrl(path: string, siteUrl?: string): string | undefined {
  if (!siteUrl) {
    return undefined;
  }

  return new URL(withLeadingSlash(path), siteUrl).toString();
}

function buildImageUrl(image: string | undefined, siteUrl?: string): string | undefined {
  if (!image) {
    return undefined;
  }

  return buildAbsoluteUrl(image, siteUrl);
}

export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const canonicalUrl = buildAbsoluteUrl(input.path, input.siteUrl);
  const imageUrl = buildImageUrl(input.image ?? siteConfig.defaultOgImage, input.siteUrl);

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ? [...input.keywords] : undefined,
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
        }
      : undefined,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: input.publishedTime ? "article" : "website",
      images: imageUrl ? [{ url: imageUrl, alt: input.title }] : undefined,
      publishedTime: input.publishedTime,
      modifiedTime: input.modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function buildServiceMetadata(
  service: ServiceContent,
  siteUrl?: string,
): Metadata {
  return buildPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: service.seo.path,
    siteUrl,
    keywords: service.seo.keywords ?? service.tags,
    image: service.seo.ogImage,
    noIndex: service.seo.noIndex,
  });
}

export function buildCaseStudyMetadata(
  caseStudy: CaseStudyContent,
  siteUrl?: string,
): Metadata {
  return buildPageMetadata({
    title: caseStudy.seo.title,
    description: caseStudy.seo.description ?? caseStudy.resultSummary ?? caseStudy.challenge,
    path: caseStudy.seo.path,
    siteUrl,
    keywords: caseStudy.seo.keywords ?? caseStudy.tags,
    image: caseStudy.seo.ogImage ?? caseStudy.featuredImage.src,
    noIndex: caseStudy.seo.noIndex,
    publishedTime: caseStudy.publishedAt,
    modifiedTime: caseStudy.updatedAt ?? caseStudy.publishedAt,
  });
}

export function buildBlogMetadata(blog: BlogContent, siteUrl?: string): Metadata {
  return buildPageMetadata({
    title: blog.seo.title,
    description: blog.seo.description ?? blog.excerpt,
    path: blog.seo.path,
    siteUrl,
    keywords: blog.seo.keywords ?? blog.tags,
    image: blog.seo.ogImage ?? blog.coverImage.src,
    noIndex: blog.seo.noIndex,
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt ?? blog.publishedAt,
  });
}

export interface JsonLdBase {
  "@context": "https://schema.org";
  "@type": string;
}

export function buildOrganizationJsonLd(config: SiteConfig = siteConfig, siteUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    description: config.description,
    url: siteUrl,
  };
}

export function buildWebSiteJsonLd(config: SiteConfig = siteConfig, siteUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.name,
    description: config.description,
    url: siteUrl,
  };
}

export function buildBreadcrumbJsonLd(
  items: readonly { label: string; path: RoutePath }[],
  siteUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: buildAbsoluteUrl(item.path, siteUrl),
    })),
  };
}

export function buildServiceJsonLd(service: ServiceContent, siteUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    url: buildAbsoluteUrl(service.seo.path, siteUrl),
    provider: buildOrganizationJsonLd(siteConfig, siteUrl),
  };
}

export function buildBlogPostingJsonLd(blog: BlogContent, siteUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt ?? blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    image: buildAbsoluteUrl(blog.coverImage.src, siteUrl),
    mainEntityOfPage: buildAbsoluteUrl(blog.seo.path, siteUrl),
    keywords: blog.tags,
  };
}

export function buildArticleJsonLd(
  caseStudy: CaseStudyContent,
  siteUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title ?? caseStudy.client,
    description: caseStudy.resultSummary ?? caseStudy.challenge,
    datePublished: caseStudy.publishedAt,
    dateModified: caseStudy.updatedAt ?? caseStudy.publishedAt,
    author: {
      "@type": "Organization",
      name: caseStudy.client,
    },
    image: buildAbsoluteUrl(caseStudy.featuredImage.src, siteUrl),
    mainEntityOfPage: buildAbsoluteUrl(caseStudy.seo.path, siteUrl),
    keywords: caseStudy.tags,
  };
}

export function buildFAQJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
