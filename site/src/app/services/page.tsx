import type { Metadata } from "next";
import { services } from "../_content";
import {
  Card,
  ContentCard,
  FAQList,
  Hero,
  SectionHeading,
  Grid,
  Callout,
} from "@/components/marketing";
import { SiteIcon } from "@/components/site-icons";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the core service pages and detail templates in this milestone.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services",
    description: "Explore the core service pages and detail templates in this milestone.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Services"
        title="Clear service pages that answer the hard questions before the first call."
        description="The service section is structured to work like a premium editorial SaaS site: concise overview, clear proof, and a deeper detail page for every offer."
        primaryCta={{ href: "/contact", label: "Request a service build" }}
        secondaryCta={{ href: "/case-studies", label: "See proof" }}
        metrics={[
          { label: "Detail templates", value: "3" },
          { label: "FAQ blocks", value: "6+" },
          { label: "Proof sections", value: "9" },
        ]}
        visual={
          <Callout
            title="Design pattern"
            text="Each service page uses the same structure: problem, approach, deliverables, FAQ, and CTA."
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Offer lineup"
          title="Service pages built for scanability and internal linking."
        />
        <div className="mt-8">
          <Grid>
            {services.map((service) => (
              <ContentCard
                key={service.slug}
                href={`/services/${service.slug}`}
                eyebrow="Service"
                title={service.title}
                summary={service.summary}
                meta={service.cta}
                icon="layers"
                bullets={service.deliverables}
              />
            ))}
          </Grid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            {
              title: "Problem framing",
              text: "Every service detail route starts with the business problem so the page reads like strategy, not brochure copy.",
            },
            {
              title: "Proof and CTA rhythm",
              text: "Proof blocks and action prompts repeat at the right points so the page stays focused on conversion.",
            },
            {
              title: "SEO structure",
              text: "Service pages are organized around one H1, supporting sections, FAQs, and internal links to case studies and blogs.",
            },
            {
              title: "Backend-friendly contract",
              text: "The frontend only depends on the BE field shapes you supplied, so content can move later without refactoring routes.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(15,118,110,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                <SiteIcon name="check" className="h-4 w-4" />
                {item.title}
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Card className="space-y-5">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions the service templates are prepared to answer."
          />
          <FAQList items={services.flatMap((service) => service.faqs).slice(0, 4)} />
        </Card>
      </section>
    </div>
  );
}
