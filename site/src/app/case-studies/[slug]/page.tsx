import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  caseStudies,
  getCaseStudy,
  blogPosts,
  site,
} from "../../_content";
import {
  Breadcrumbs,
  Card,
  ContentCard,
  DetailSidebar,
  Hero,
  HeroVisual,
  SectionHeading,
  Grid,
  Callout,
} from "@/components/marketing";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study",
      description: site.description,
    };
  }

  return {
    title: `${caseStudy.client} Case Study`,
    description: caseStudy.challenge,
    alternates: {
      canonical: `/case-studies/${caseStudy.slug}`,
    },
    openGraph: {
      title: `${caseStudy.client} Case Study`,
      description: caseStudy.challenge,
      url: `/case-studies/${caseStudy.slug}`,
      type: "article",
    },
  };
}

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/case-studies", label: "Case Studies" },
            { href: `/case-studies/${caseStudy.slug}`, label: caseStudy.client },
          ]}
        />
      </section>

      <Hero
        eyebrow="Case study detail"
        title={caseStudy.client}
        description={caseStudy.challenge}
        primaryCta={{ href: "/contact", label: caseStudy.cta }}
        secondaryCta={{ href: "/blog", label: "Read supporting articles" }}
        metrics={caseStudy.metrics.map((metric) => ({
          label: metric.label,
          value: metric.value,
        }))}
        visual={
          <HeroVisual
            kicker="Measured outcome"
            title="Challenge to solution"
            lines={caseStudy.stack.slice(0, 4)}
            footer={caseStudy.testimonial}
          />
        }
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <Card className="space-y-4">
            <SectionHeading eyebrow="Challenge" title="The problem that needed solving" />
            <p className="text-base leading-8 text-[var(--muted)]">
              {caseStudy.challenge}
            </p>
          </Card>
          <Card className="space-y-4">
            <SectionHeading eyebrow="Solution" title="What was built" />
            <p className="text-base leading-8 text-[var(--muted)]">
              {caseStudy.solution}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {caseStudy.metrics.map((metric) => (
                <Card key={metric.label} className="space-y-2 bg-[var(--background)]">
                  <p className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                    {metric.value}
                  </p>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {metric.label}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{metric.detail}</p>
                </Card>
              ))}
            </div>
          </Card>
        </div>
        <div className="space-y-6">
          <DetailSidebar
            title="Project stack"
            items={[
              { label: "Client", value: caseStudy.client },
              { label: "Primary stack", value: caseStudy.stack.join(" · ") },
              { label: "Visual hook", value: caseStudy.coverImage },
            ]}
          />
          <Callout
            title="Testimonial"
            text={caseStudy.testimonial}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related reading"
          title="Blog posts that can be linked from the story."
        />
        <div className="mt-8">
          <Grid cols="2">
            {relatedPosts.map((post) => (
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
        <Card className="flex flex-col gap-4 bg-[linear-gradient(145deg,rgba(15,118,110,0.95),rgba(17,94,89,0.88))] text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Next step
            </p>
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              {caseStudy.cta}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
          >
            Request a similar build
          </Link>
        </Card>
      </section>
    </div>
  );
}
