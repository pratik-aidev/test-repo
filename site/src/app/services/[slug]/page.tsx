import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  caseStudies,
  getService,
  services,
  site,
} from "../../_content";
import {
  ArticleBody,
  Breadcrumbs,
  Card,
  ContentCard,
  DetailSidebar,
  FAQList,
  Hero,
  HeroVisual,
  SectionHeading,
  Grid,
  Callout,
} from "@/components/marketing";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);

  if (!service) {
    return {
      title: "Service",
      description: site.description,
    };
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const relatedCaseStudies = caseStudies.slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: `/services/${service.slug}`, label: service.title },
          ]}
        />
      </section>

      <Hero
        eyebrow="Service detail"
        title={service.title}
        description={service.summary}
        primaryCta={{ href: "/contact", label: service.cta }}
        secondaryCta={{ href: "/case-studies", label: "View related proof" }}
        metrics={[
          { label: "Approach steps", value: `${service.approach.length}` },
          { label: "Deliverables", value: `${service.deliverables.length}` },
          { label: "FAQs", value: `${service.faqs.length}` },
        ]}
        visual={
          <HeroVisual
            kicker="Service narrative"
            title="Problem to proof"
            lines={service.deliverables.slice(0, 4)}
            footer={service.cta}
          />
        }
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <Card className="space-y-4">
            <SectionHeading eyebrow="Problem" title="Why this service exists" />
            <p className="text-base leading-8 text-[var(--muted)]">{service.problem}</p>
          </Card>
          <Card className="space-y-4">
            <SectionHeading eyebrow="Approach" title="How the page guides visitors" />
            <ArticleBody
              title="Editorial sequence"
              sections={[
                {
                  heading: "Approach",
                  paragraphs: [
                    "The page starts with the service promise, then moves into the underlying problem and the implementation path.",
                  ],
                  bullets: service.approach,
                },
                {
                  heading: "Deliverables",
                  paragraphs: [
                    "The structure stays flexible enough for the BE worker to replace copy and proof while keeping the presentation intact.",
                  ],
                  bullets: service.deliverables,
                },
              ]}
            />
          </Card>
        </div>
        <div className="space-y-6">
          <DetailSidebar
            title="Service facts"
            items={[
              { label: "Slug", value: service.slug },
              { label: "CTA", value: service.cta },
              { label: "Template", value: "App Router" },
            ]}
          />
          <Callout
            title="SEO note"
            text="The service route is metadata-ready and uses one canonical page per slug so BE can safely publish content later."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions the service page template can answer immediately."
        />
        <div className="mt-8">
          <FAQList items={service.faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related proof"
          title="Case studies that can be linked from this service."
        />
        <div className="mt-8">
          <Grid cols="2">
            {relatedCaseStudies.map((caseStudy) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Card className="flex flex-col gap-4 bg-[var(--foreground)] text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Ready to adapt
            </p>
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              {service.cta}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
          >
            Contact us
          </Link>
        </Card>
      </section>
    </div>
  );
}
