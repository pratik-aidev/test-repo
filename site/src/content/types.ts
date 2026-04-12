export type RoutePath = `/${string}`;

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export interface SeoFields {
  title: string;
  description: string;
  path: RoutePath;
  keywords?: readonly string[];
  ogImage?: string;
  noIndex?: boolean;
}

export interface CtaBlock {
  label: string;
  href: RoutePath;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
}

export interface BaseTaggedContent {
  slug: string;
  tags: readonly string[];
  featured?: boolean;
}

export type ServiceIconName =
  | "Layers3"
  | "Code2"
  | "Workflow"
  | "Rocket"
  | "ShieldCheck"
  | "Database"
  | "TrendingUp"
  | "BarChart3"
  | "Target"
  | "Clock3"
  | "BookOpen"
  | "Users";

export interface ServiceContent extends BaseTaggedContent {
  kind: "service";
  title: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: readonly string[];
  faqs: readonly FaqItem[];
  cta: CtaBlock;
  seo: SeoFields;
  icon: ServiceIconName;
  eyebrow: string;
  outcomes: readonly string[];
  process: readonly string[];
  relatedCaseStudySlugs: readonly string[];
  relatedBlogSlugs: readonly string[];
}

export interface CaseStudyContent extends BaseTaggedContent {
  kind: "case-study";
  title?: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  resultSummary?: string;
  publishedAt: string;
  updatedAt?: string;
  stack: readonly string[];
  metrics: readonly MetricItem[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  cta: CtaBlock;
  featuredImage: ImageAsset;
  seo: SeoFields;
  relatedServiceSlugs: readonly string[];
  relatedBlogSlugs: readonly string[];
}

export interface BlogContent extends BaseTaggedContent {
  kind: "blog";
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  excerpt: string;
  seo: SeoFields;
  coverImage: ImageAsset;
  title: string;
  cta?: CtaBlock;
  relatedServiceSlugs: readonly string[];
  relatedCaseStudySlugs: readonly string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  locale: string;
  defaultOgImage: string;
  twitterHandle?: string;
}
