import type { Metadata } from "next";
import Link from "next/link";
import {
  blogPosts,
  caseStudies,
  services,
  site,
} from "./_content";
import {
  Card,
  ContentCard,
  Hero,
  HeroVisual,
  SectionHeading,
  SplitSection,
  Pill,
  Grid,
  Callout,
} from "@/components/marketing";
import { SiteIcon } from "@/components/site-icons";

export const metadata: Metadata = {
  title: "Premium Next.js Marketing Sites",
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Next.js Marketing Sites",
    description: site.description,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Next.js Marketing Sites",
    description: site.description,
  },
};

const proofPoints = [
  "App Router-first structure",
  "SEO-ready routing and metadata",
  "Editorial SaaS visual language",
];

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 2);
  const featuredBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Milestone 1 / Premium marketing shell"
        title="Launch a premium Next.js marketing site that feels editorial, fast, and conversion-ready."
        description="This frontend milestone sets up the shell, route templates, and layout system for landing pages, services, case studies, and blogs while keeping the content contract light for the BE worker."
        primaryCta={{ href: "/contact", label: "Start a build" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
        metrics={[
          { label: "Page families", value: "5" },
          { label: "SEO routes", value: "9+" },
          { label: "Shared UI blocks", value: "12" },
        ]}
        visual={
          <HeroVisual
            kicker="Editorial SaaS system"
            title="Design pattern"
            lines={[
              "Proof-first hero",
              "Alternating content rhythm",
              "Case-study storytelling blocks",
              "Content-ready templates",
            ]}
            footer="Built to scale across services, case studies, and blogs"
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {proofPoints.map((point) => (
            <Card key={point} className="flex items-center gap-3 py-4">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(15,118,110,0.1)] text-[var(--accent)]">
                <SiteIcon name="check" className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-[var(--foreground)]">
                {point}
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="A service system that reads clearly from overview to detail."
          description="Each service page is built around the same editorial narrative so the backend can swap in real content later without changing the UI."
        />
        <div className="mt-8">
          <Grid>
            {featuredServices.map((service) => (
              <ContentCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow="Service"
                title={service.title}
                summary={service.summary}
                meta={service.cta}
                icon="layers"
                bullets={service.deliverables.slice(0, 3)}
              />
            ))}
          </Grid>
        </div>
      </section>

      <SplitSection
        eyebrow="Process"
        title="Designed for clarity, implementation speed, and long-term content growth."
        description="The shell gives FE and BE a clean boundary. FE owns the route chrome and presentation; BE can later plug in a CMS or MDX source without redesigning the site."
        left={
          <Callout
            title="What ships in this milestone"
            text="Homepage, services, service detail template, case studies, case study detail template, blog, blog detail template, about, contact, and SEO routes."
          />
        }
        right={
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "1. Frame",
                text: "Clear hierarchy, premium spacing, and a bold conversion hero.",
              },
              {
                title: "2. Proof",
                text: "Metric blocks, testimonials, and storytelling cards.",
              },
              {
                title: "3. Scale",
                text: "Reusable templates that stay stable as content grows.",
              },
            ].map((item) => (
              <Card key={item.title} className="space-y-3">
                <Pill>{item.title}</Pill>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
              </Card>
            ))}
          </div>
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Story-led proof blocks with metrics and implementation context."
          description="The case-study template stays flexible enough for the BE worker to swap in real client stories, metrics, and cover art."
        />
        <div className="mt-8">
          <Grid cols="2">
            {featuredCaseStudies.map((caseStudy) => (
              <ContentCard
                key={caseStudy.slug}
                href={`/case-studies/${caseStudy.slug}`}
                eyebrow={caseStudy.client}
                title={caseStudy.challenge}
                summary={caseStudy.solution}
                meta={caseStudy.testimonial}
                icon="chart"
              />
            ))}
          </Grid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Editorial blog templates for SEO, authority, and internal linking."
          description="The blog system is route-ready, with index cards, article metadata, and a detail layout that can support MDX later."
        />
        <div className="mt-8">
          <Grid>
            {featuredBlogPosts.map((post) => (
              <ContentCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                eyebrow={post.category}
                title={post.title}
                summary={post.excerpt}
                meta={`${post.author} · ${post.readTime}`}
                icon="book"
              />
            ))}
          </Grid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Card className="flex flex-col gap-6 bg-[linear-gradient(145deg,rgba(15,118,110,0.95),rgba(17,94,89,0.88))] text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
              Ready to hand off
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em]">
              The FE shell is now ready for the BE worker to wire real content.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-white/80">
              The routes are in place, the templates are reusable, and the page
              contracts stay close to the backend shapes you supplied.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:scale-[1.01]"
          >
            Book a handoff
            <SiteIcon name="arrow-right" className="h-4 w-4 text-[var(--accent)]" />
          </Link>
        </Card>
      </section>
    </div>
  );
}
