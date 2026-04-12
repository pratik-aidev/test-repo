import type { ServiceContent } from "@/content/types";
import { servicePath } from "@/lib/routes";

export const services = [
  {
    kind: "service",
    slug: "conversion-led-landing-pages",
    title: "Conversion-Led Landing Pages",
    summary:
      "Design and build premium landing pages that turn qualified traffic into measurable pipeline.",
    problem:
      "Teams often ship landing pages that look polished but fail to explain the offer, establish trust, or drive action.",
    approach:
      "We pair narrative hierarchy, proof-first layouts, and strong conversion signals so every section earns the next click.",
    deliverables: [
      "Hero and proof section system",
      "Service positioning and benefit copy",
      "Call-to-action blocks and conversion variants",
      "Responsive page templates and reusable sections",
    ],
    faqs: [
      {
        question: "What makes this landing page approach different?",
        answer:
          "It is designed around intent, trust, and friction reduction instead of purely aesthetic page composition.",
      },
      {
        question: "Can the same system support multiple campaigns?",
        answer:
          "Yes. The section library is built for reuse across offers, experiments, and seasonal campaigns.",
      },
    ],
    cta: {
      label: "Start a landing page",
      href: "/contact",
      description: "Use this service when you need a launch-ready conversion page.",
    },
    seo: {
      title: "Conversion-Led Landing Pages | Northstar Studio",
      description:
        "Build landing pages that communicate value quickly and convert high-intent visitors into qualified leads.",
      path: servicePath("conversion-led-landing-pages"),
      keywords: ["landing pages", "conversion design", "b2b marketing"],
      ogImage: "/images/services/conversion-led-landing-pages-og.png",
    },
    icon: "Rocket",
    eyebrow: "Landing Pages",
    tags: ["landing-pages", "conversion", "cro", "b2b"],
    featured: true,
    outcomes: [
      "Clearer value proposition on first scroll",
      "Stronger proof hierarchy and CTA cadence",
      "Faster launch cycles for campaigns",
    ],
    process: ["Discovery", "Messaging", "Build", "QA", "Launch"],
    relatedCaseStudySlugs: ["saas-launch-funnel-redesign"],
    relatedBlogSlugs: [
      "how-to-structure-b2b-landing-pages",
      "seo-metadata-with-next-app-router",
    ],
  },
  {
    kind: "service",
    slug: "nextjs-content-engine",
    title: "Next.js Content Engine",
    summary:
      "Create a structured content system for services, case studies, and blog posts that FE can consume directly.",
    problem:
      "Marketing sites become brittle when page content is scattered across ad hoc JSON, hard-coded markup, or inconsistent CMS fields.",
    approach:
      "We define typed collections, consistent metadata, and reusable content helpers so pages can be generated with confidence.",
    deliverables: [
      "Content schema and seed data",
      "Route helpers and slug utilities",
      "Metadata and schema builders",
      "Related-content and index helpers",
    ],
    faqs: [
      {
        question: "Do I need a CMS to use this?",
        answer:
          "No. The contract works with structured files now and can be adapted to a CMS later.",
      },
      {
        question: "Will FE have to guess field names?",
        answer:
          "No. The content objects are explicit and typed so the frontend can wire them directly.",
      },
    ],
    cta: {
      label: "Build the content layer",
      href: "/contact",
      description: "Use this service when you want a maintainable marketing content system.",
    },
    seo: {
      title: "Next.js Content Engine | Northstar Studio",
      description:
        "Typed content collections and SEO helpers for scalable Next.js marketing pages.",
      path: servicePath("nextjs-content-engine"),
      keywords: ["next.js", "content architecture", "seo metadata"],
      ogImage: "/images/services/nextjs-content-engine-og.png",
    },
    icon: "Database",
    eyebrow: "Content Systems",
    tags: ["content-model", "nextjs", "metadata", "seo"],
    featured: true,
    outcomes: [
      "Stable field shapes for FE and QA",
      "Reusable SEO and JSON-LD utilities",
      "Fast addition of new pages and posts",
    ],
    process: ["Model", "Seed", "Connect", "Validate"],
    relatedCaseStudySlugs: ["content-engine-operations-upgrade"],
    relatedBlogSlugs: [
      "building-content-models-for-marketing-sites",
      "nextjs-app-router-seo-metadata",
    ],
  },
  {
    kind: "service",
    slug: "growth-ops-automation",
    title: "Growth Ops Automation",
    summary:
      "Streamline launch workflows, approvals, and reporting so the team can move faster without losing control.",
    problem:
      "Manual launch operations slow down publishing, introduce mistakes, and make it hard to measure outcomes consistently.",
    approach:
      "We create lightweight automations and operational checklists that reduce repetitive work without adding process bloat.",
    deliverables: [
      "Launch workflow map",
      "Automation-ready content handoff",
      "QA and deployment checklist",
      "Tracking and reporting structure",
    ],
    faqs: [
      {
        question: "Is this only for large teams?",
        answer:
          "No. Small teams benefit the most because the same people are often handling strategy, build, and launch coordination.",
      },
      {
        question: "Does this change the page design?",
        answer:
          "No. It focuses on process, handoff, and release reliability rather than visual redesign.",
      },
    ],
    cta: {
      label: "Automate the launch flow",
      href: "/contact",
      description: "Use this service when repeated manual steps are slowing release velocity.",
    },
    seo: {
      title: "Growth Ops Automation | Northstar Studio",
      description:
        "Reduce launch friction with clear workflows, QA checkpoints, and automation-ready content handoff.",
      path: servicePath("growth-ops-automation"),
      keywords: ["growth ops", "automation", "launch workflow"],
      ogImage: "/images/services/growth-ops-automation-og.png",
    },
    icon: "Workflow",
    eyebrow: "Ops",
    tags: ["operations", "automation", "qa", "launch"],
    outcomes: [
      "Shorter launch cycles",
      "Fewer content handoff errors",
      "Clearer accountability across roles",
    ],
    process: ["Audit", "Map", "Automate", "Measure"],
    relatedCaseStudySlugs: ["pipeline-efficiency-rebuild"],
    relatedBlogSlugs: [
      "why-case-studies-convert",
      "building-content-models-for-marketing-sites",
    ],
  },
] satisfies readonly ServiceContent[];

export const serviceSlugs = services.map((service) => service.slug);

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(limit = 3): ServiceContent[] {
  return services.filter((service) => service.featured).slice(0, limit);
}

export function getServiceRoutes(): readonly string[] {
  return services.map((service) => service.seo.path);
}

export function getServiceCtaRoutes(): readonly string[] {
  return services.map((service) => service.cta.href);
}
