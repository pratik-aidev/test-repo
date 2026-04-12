export const site = {
  name: "Northstar Studio",
  description:
    "Premium Next.js marketing sites for B2B teams that need to launch fast, rank well, and convert reliably.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  challenge: string;
  solution: string;
  stack: string[];
  metrics: { label: string; value: string; detail: string }[];
  testimonial: string;
  cta: string;
  coverImage: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "nextjs-landing-pages",
    title: "Next.js Landing Pages",
    summary:
      "High-converting launch pages with crisp messaging, proof-first layouts, and rapid iteration paths.",
    problem:
      "Teams need a focused page that communicates value quickly and drives qualified actions without visual clutter.",
    approach: [
      "Message hierarchy built around one primary conversion goal",
      "Editorial section rhythm with proof, features, and objection handling",
      "Mobile-first layouts with strong CTA placement and accessible forms",
    ],
    deliverables: [
      "Hero and conversion section system",
      "Trust blocks and metric highlights",
      "Reusable CTA and FAQ templates",
    ],
    faqs: [
      {
        question: "How fast can a landing page ship?",
        answer:
          "This milestone builds the shell and templates so content can be swapped in quickly by the content worker.",
      },
      {
        question: "Can the layout support A/B tests later?",
        answer:
          "Yes. The sections are modular so variants can be introduced without redesigning the entire page.",
      },
    ],
    cta: "Launch a sharper conversion page",
  },
  {
    slug: "service-pages",
    title: "Service Pages",
    summary:
      "Deep service pages that explain the offer, build trust, and rank for high-intent search terms.",
    problem:
      "Most service pages either stay too vague or become long walls of copy that are hard to scan.",
    approach: [
      "Problem, approach, deliverables, and proof in a consistent narrative",
      "FAQ-led sections for SEO and objection handling",
      "Related case studies and blogs to strengthen internal linking",
    ],
    deliverables: [
      "Service index and detail route templates",
      "Proof and FAQ content blocks",
      "Internal linking pattern for SEO clusters",
    ],
    faqs: [
      {
        question: "Do these pages work for any service category?",
        answer:
          "Yes. The structure is generic enough for design, engineering, consulting, or AI services.",
      },
      {
        question: "Can backend content replace the copy later?",
        answer:
          "Yes. The current pages read from a lightweight contract that can be swapped with CMS or MDX content.",
      },
    ],
    cta: "Turn a service into a clear story",
  },
  {
    slug: "content-systems",
    title: "Content Systems",
    summary:
      "Blog and case-study foundations that support organic traffic, proof, and ongoing publishing.",
    problem:
      "Marketing teams need a site that is easy to publish to and rich enough to support organic growth.",
    approach: [
      "Editorial blog layouts with metadata, reading time, and related content",
      "Case-study templates that spotlight metrics and implementation detail",
      "SEO-friendly metadata and sitemap coverage from day one",
    ],
    deliverables: [
      "Blog index and article templates",
      "Case-study index and story templates",
      "SEO routes and metadata scaffolding",
    ],
    faqs: [
      {
        question: "Does this include CMS integration?",
        answer:
          "Not in milestone 1. The templates are prepared so BE can wire the content source later.",
      },
      {
        question: "Will the site scale with more articles?",
        answer:
          "Yes. The routes are structured for static generation and predictable content expansion.",
      },
    ],
    cta: "Build a content engine",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "finflow-growth-launch",
    client: "FinFlow",
    challenge:
      "A fintech team needed a premium launch presence to explain a complex workflow and build trust quickly.",
    solution:
      "We used a proof-first homepage, outcome-led service pages, and a case-study framework that turns results into narrative.",
    stack: ["Next.js", "Tailwind", "Content Strategy", "SEO"],
    metrics: [
      {
        label: "Lead quality",
        value: "+42%",
        detail: "Better fit from launch-page traffic.",
      },
      {
        label: "Page clarity",
        value: "2x",
        detail: "Shorter time to understand the offer.",
      },
      {
        label: "Organic visibility",
        value: "+31%",
        detail: "Early lift from content and metadata structure.",
      },
    ],
    testimonial:
      "Northstar gave us a site that feels like a product, not a brochure. The messaging is finally doing real work.",
    cta: "See the growth launch pattern",
    coverImage: "finflow-launch",
  },
  {
    slug: "atlas-ai-scale-system",
    client: "Atlas AI",
    challenge:
      "An AI startup needed multiple service pages and case-study proof without losing brand consistency.",
    solution:
      "We built a reusable editorial system with section templates, related content, and SEO-ready slugs.",
    stack: ["Next.js", "App Router", "Design System", "Analytics"],
    metrics: [
      {
        label: "Page production",
        value: "3x",
        detail: "Faster launches for new pages.",
      },
      {
        label: "Bounce rate",
        value: "-18%",
        detail: "Better hierarchy and stronger CTA rhythm.",
      },
      {
        label: "Content velocity",
        value: "Weekly",
        detail: "Publishing stayed consistent after launch.",
      },
    ],
    testimonial:
      "The layout system made it easy to keep adding pages without losing polish or focus.",
    cta: "Review the scalable template",
    coverImage: "atlas-ai-scale",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "service-pages-that-rank-and-convert",
    title: "How to Structure Service Pages That Rank and Convert",
    excerpt:
      "A practical editorial framework for service pages that need to support SEO and sales at the same time.",
    category: "SEO",
    author: "Northstar Studio",
    publishedAt: "2026-04-01",
    readTime: "7 min read",
    coverImage: "service-pages-cover",
    seo: {
      title: "How to Structure Service Pages That Rank and Convert",
      description:
        "A practical framework for building service pages that support SEO, clarity, and conversion.",
    },
  },
  {
    slug: "case-study-storytelling",
    title: "Case Study Storytelling That Feels Credible, Not Salesy",
    excerpt:
      "Use outcomes, process, and context to turn case studies into proof assets rather than padded testimonials.",
    category: "Brand",
    author: "Northstar Studio",
    publishedAt: "2026-03-24",
    readTime: "6 min read",
    coverImage: "case-study-storytelling-cover",
    seo: {
      title: "Case Study Storytelling That Feels Credible, Not Salesy",
      description:
        "A story structure for case studies that builds trust and feels premium.",
    },
  },
  {
    slug: "nextjs-marketing-seo-basics",
    title: "Next.js Marketing SEO Basics for High-Performance Pages",
    excerpt:
      "The technical SEO checklist we use to keep App Router marketing sites lean, fast, and indexable.",
    category: "Technical SEO",
    author: "Northstar Studio",
    publishedAt: "2026-03-15",
    readTime: "8 min read",
    coverImage: "nextjs-marketing-seo-cover",
    seo: {
      title: "Next.js Marketing SEO Basics for High-Performance Pages",
      description:
        "A technical SEO checklist for App Router marketing sites that need to perform.",
    },
  },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
