import type { CaseStudyContent } from "@/content/types";
import { caseStudyPath } from "@/lib/routes";

export const caseStudies = [
  {
    kind: "case-study",
    slug: "saas-launch-funnel-redesign",
    title: "SaaS launch funnel redesign",
    client: "LatticeForge",
    industry: "B2B SaaS",
    challenge:
      "A strong product story was hidden behind a fragmented funnel and inconsistent proof across the site.",
    solution:
      "We rebuilt the launch path with a focused landing page, stronger supporting proof, and a cleaner content model for iteration.",
    resultSummary:
      "The launch page became the primary conversion surface, with clearer messaging and faster updates across campaigns.",
    publishedAt: "2025-02-18",
    updatedAt: "2025-03-01",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "MDX"],
    metrics: [
      {
        label: "Conversion lift",
        value: "+38%",
        detail: "Improved lead capture after the redesign.",
      },
      {
        label: "Launch velocity",
        value: "2x faster",
        detail: "Teams shipped new campaign pages more quickly.",
      },
      {
        label: "Bounce rate",
        value: "-21%",
        detail: "Visitors stayed longer on the new proof-led flow.",
      },
    ],
    testimonial: {
      quote:
        "The new page structure finally made the offer obvious and gave us a repeatable way to launch.",
      author: "Jordan Lee",
      role: "VP of Marketing, LatticeForge",
    },
    cta: {
      label: "Plan a similar launch",
      href: "/contact",
      description: "Use this case study when you need a proof-driven landing page system.",
    },
    featuredImage: {
      src: "/images/case-studies/saas-launch-funnel-redesign.png",
      alt: "Dashboard and landing page composition for a SaaS launch redesign",
      width: 1600,
      height: 900,
      priority: true,
    },
    seo: {
      title: "SaaS Launch Funnel Redesign | Northstar Studio",
      description:
        "A proof-first launch funnel redesign that improved conversion and made future campaign updates faster.",
      path: caseStudyPath("saas-launch-funnel-redesign"),
      keywords: ["case study", "saas", "landing page conversion"],
      ogImage: "/images/case-studies/saas-launch-funnel-redesign-og.png",
    },
    tags: ["saas", "conversion", "launch", "content-model"],
    featured: true,
    relatedServiceSlugs: [
      "conversion-led-landing-pages",
      "nextjs-content-engine",
    ],
    relatedBlogSlugs: [
      "how-to-structure-b2b-landing-pages",
      "why-case-studies-convert",
    ],
  },
  {
    kind: "case-study",
    slug: "content-engine-operations-upgrade",
    title: "Content engine operations upgrade",
    client: "AtlasOne",
    industry: "Fintech",
    challenge:
      "The marketing team needed a reliable way to publish service, blog, and case study content without duplicating templates.",
    solution:
      "We introduced typed content collections and metadata helpers so the team could ship pages in parallel with fewer errors.",
    resultSummary:
      "Publishing became predictable, and the frontend team could consume content records without manual mapping.",
    publishedAt: "2025-01-22",
    stack: ["Next.js", "TypeScript", "Content collections", "JSON-LD"],
    metrics: [
      {
        label: "Content handoff errors",
        value: "-64%",
        detail: "Fewer issues between content and UI implementation.",
      },
      {
        label: "Template reuse",
        value: "100%",
        detail: "One system powered landing, case study, and blog pages.",
      },
      {
        label: "SEO readiness",
        value: "Built-in",
        detail: "Metadata and schema were generated from content data.",
      },
    ],
    testimonial: {
      quote:
        "The typed contract made it easy for every team to know what fields existed and how they mapped to pages.",
      author: "Priya Shah",
      role: "Head of Digital, AtlasOne",
    },
    cta: {
      label: "Design the content system",
      href: "/contact",
      description: "Use this case study when content architecture is the main bottleneck.",
    },
    featuredImage: {
      src: "/images/case-studies/content-engine-operations-upgrade.png",
      alt: "Content architecture diagram and editorial operations dashboard",
      width: 1600,
      height: 900,
    },
    seo: {
      title: "Content Engine Operations Upgrade | Northstar Studio",
      description:
        "A typed content architecture that reduced handoff mistakes and accelerated marketing page publishing.",
      path: caseStudyPath("content-engine-operations-upgrade"),
      keywords: ["content architecture", "next.js seo", "marketing operations"],
      ogImage: "/images/case-studies/content-engine-operations-upgrade-og.png",
    },
    tags: ["content-model", "seo", "operations", "nextjs"],
    relatedServiceSlugs: ["nextjs-content-engine", "growth-ops-automation"],
    relatedBlogSlugs: [
      "building-content-models-for-marketing-sites",
      "nextjs-app-router-seo-metadata",
    ],
  },
  {
    kind: "case-study",
    slug: "pipeline-efficiency-rebuild",
    title: "Pipeline efficiency rebuild",
    client: "HelioWorks",
    industry: "Professional Services",
    challenge:
      "The team needed a clearer services story and stronger proof to support organic traffic and direct conversions.",
    solution:
      "We rebuilt the service pages, positioned the offer around outcomes, and added a stronger case-study narrative.",
    resultSummary:
      "Service pages began ranking for target intent while conversion quality improved across the funnel.",
    publishedAt: "2024-12-10",
    stack: ["Next.js", "SEO", "Editorial design", "Analytics"],
    metrics: [
      {
        label: "Organic leads",
        value: "+27%",
        detail: "Improved lead volume from service page traffic.",
      },
      {
        label: "Page depth",
        value: "+31%",
        detail: "Users consumed more supporting proof content.",
      },
      {
        label: "Time to launch",
        value: "3 days",
        detail: "Reusable patterns sped up the rollout.",
      },
    ],
    testimonial: {
      quote:
        "We finally had a site structure that matched how prospects actually evaluate our services.",
      author: "Marcus Reed",
      role: "Founder, HelioWorks",
    },
    cta: {
      label: "Improve the service story",
      href: "/contact",
      description: "Use this case study when proof and conversion are the main goals.",
    },
    featuredImage: {
      src: "/images/case-studies/pipeline-efficiency-rebuild.png",
      alt: "Service page composition and lead pipeline growth chart",
      width: 1600,
      height: 900,
    },
    seo: {
      title: "Pipeline Efficiency Rebuild | Northstar Studio",
      description:
        "A service-page and proof overhaul that increased organic leads and simplified the sales story.",
      path: caseStudyPath("pipeline-efficiency-rebuild"),
      keywords: ["pipeline", "service pages", "b2b growth"],
      ogImage: "/images/case-studies/pipeline-efficiency-rebuild-og.png",
    },
    tags: ["services", "conversion", "seo", "proof"],
    featured: false,
    relatedServiceSlugs: [
      "conversion-led-landing-pages",
      "growth-ops-automation",
    ],
    relatedBlogSlugs: ["why-case-studies-convert", "how-to-structure-b2b-landing-pages"],
  },
] satisfies readonly CaseStudyContent[];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudyBySlug(slug: string): CaseStudyContent | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getFeaturedCaseStudies(limit = 3): CaseStudyContent[] {
  return caseStudies.filter((caseStudy) => caseStudy.featured).slice(0, limit);
}

export function getCaseStudyRoutes(): readonly string[] {
  return caseStudies.map((caseStudy) => caseStudy.seo.path);
}
