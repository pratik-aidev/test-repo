import type { BlogContent } from "@/content/types";
import { blogPath } from "@/lib/routes";

export const blogPosts = [
  {
    kind: "blog",
    slug: "how-to-structure-b2b-landing-pages",
    title: "How to structure B2B landing pages that convert",
    excerpt:
      "A practical page structure for clarifying the offer, establishing proof, and turning intent into action.",
    category: "Conversion",
    author: "Northstar Studio",
    publishedAt: "2025-03-06",
    readTime: 7,
    coverImage: {
      src: "/images/blog/how-to-structure-b2b-landing-pages.png",
      alt: "Editorial cover for a B2B landing page structure article",
      width: 1440,
      height: 900,
      priority: true,
    },
    seo: {
      title: "How to Structure B2B Landing Pages That Convert",
      description:
        "Use a proven B2B landing page structure to clarify the offer, support trust, and improve conversion rates.",
      path: blogPath("how-to-structure-b2b-landing-pages"),
      keywords: ["b2b landing page", "conversion", "marketing strategy"],
      ogImage: "/images/blog/how-to-structure-b2b-landing-pages-og.png",
    },
    tags: ["landing-pages", "conversion", "cro"],
    featured: true,
    relatedServiceSlugs: ["conversion-led-landing-pages"],
    relatedCaseStudySlugs: ["saas-launch-funnel-redesign"],
  },
  {
    kind: "blog",
    slug: "building-content-models-for-marketing-sites",
    title: "Building content models for marketing sites",
    excerpt:
      "Why structured content beats hard-coded pages when multiple teams need to ship marketing pages in parallel.",
    category: "Engineering",
    author: "Northstar Studio",
    publishedAt: "2025-02-20",
    readTime: 9,
    coverImage: {
      src: "/images/blog/building-content-models-for-marketing-sites.png",
      alt: "Diagram showing content collections and page templates",
      width: 1440,
      height: 900,
    },
    seo: {
      title: "Building Content Models for Marketing Sites",
      description:
        "Create structured content models that help frontend teams ship marketing pages safely and quickly.",
      path: blogPath("building-content-models-for-marketing-sites"),
      keywords: ["content model", "next.js", "marketing site"],
      ogImage: "/images/blog/building-content-models-for-marketing-sites-og.png",
    },
    tags: ["content-model", "nextjs", "seo"],
    featured: true,
    relatedServiceSlugs: ["nextjs-content-engine"],
    relatedCaseStudySlugs: ["content-engine-operations-upgrade"],
  },
  {
    kind: "blog",
    slug: "nextjs-app-router-seo-metadata",
    title: "Next.js App Router SEO metadata, done properly",
    excerpt:
      "A focused pattern for generating metadata, canonical URLs, and schema without repeating logic in every route.",
    category: "SEO",
    author: "Northstar Studio",
    publishedAt: "2025-01-28",
    readTime: 6,
    coverImage: {
      src: "/images/blog/nextjs-app-router-seo-metadata.png",
      alt: "SEO metadata diagram for Next.js App Router",
      width: 1440,
      height: 900,
    },
    seo: {
      title: "Next.js App Router SEO Metadata, Done Properly",
      description:
        "Generate canonical URLs, metadata, and schema in a predictable way with Next.js App Router.",
      path: blogPath("nextjs-app-router-seo-metadata"),
      keywords: ["next.js seo", "metadata", "schema"],
      ogImage: "/images/blog/nextjs-app-router-seo-metadata-og.png",
    },
    tags: ["seo", "metadata", "nextjs"],
    featured: true,
    relatedServiceSlugs: ["nextjs-content-engine"],
    relatedCaseStudySlugs: ["content-engine-operations-upgrade"],
  },
  {
    kind: "blog",
    slug: "why-case-studies-convert",
    title: "Why case studies convert better than feature lists",
    excerpt:
      "Case studies reduce risk, clarify outcomes, and give prospects the proof they need to move forward.",
    category: "Strategy",
    author: "Northstar Studio",
    publishedAt: "2024-12-15",
    readTime: 5,
    coverImage: {
      src: "/images/blog/why-case-studies-convert.png",
      alt: "Editorial cover showing case study metrics and proof blocks",
      width: 1440,
      height: 900,
    },
    seo: {
      title: "Why Case Studies Convert Better Than Feature Lists",
      description:
        "Use case studies to reduce buyer risk and support high-intent conversion paths.",
      path: blogPath("why-case-studies-convert"),
      keywords: ["case studies", "b2b conversion", "social proof"],
      ogImage: "/images/blog/why-case-studies-convert-og.png",
    },
    tags: ["case-studies", "conversion", "proof"],
    featured: false,
    relatedServiceSlugs: ["conversion-led-landing-pages", "growth-ops-automation"],
    relatedCaseStudySlugs: ["pipeline-efficiency-rebuild", "saas-launch-funnel-redesign"],
  },
] satisfies readonly BlogContent[];

export const blogSlugs = blogPosts.map((post) => post.slug);

export function getBlogPostBySlug(slug: string): BlogContent | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3): BlogContent[] {
  return blogPosts.filter((post) => post.featured).slice(0, limit);
}

export function getBlogRoutes(): readonly string[] {
  return blogPosts.map((post) => post.seo.path);
}
