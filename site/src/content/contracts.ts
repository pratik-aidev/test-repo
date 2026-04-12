import type { CtaBlock, ImageAsset, MetricItem, SeoFields } from "@/content/types";

export interface ServiceContract {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: readonly string[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  cta: CtaBlock;
}

export interface CaseStudyContract {
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  stack: readonly string[];
  metrics: readonly MetricItem[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  cta: CtaBlock;
  coverImage: ImageAsset;
}

export interface BlogContract {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  coverImage: ImageAsset;
  seo: Pick<
    SeoFields,
    "title" | "description" | "path" | "keywords" | "ogImage" | "noIndex"
  >;
}
