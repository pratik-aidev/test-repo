import type { Metadata } from "next";
import { caseStudies } from "../_content";
import {
  Card,
  ContentCard,
  Hero,
  SectionHeading,
  Grid,
  Callout,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Browse the case-study templates and proof-led editorial layout.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies",
    description: "Browse the case-study templates and proof-led editorial layout.",
    url: "/case-studies",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Case studies"
        title="Proof pages that show the work, the result, and the thinking behind it."
        description="This index supports future proof content while keeping the visual story clean enough for a premium B2B marketing site."
        primaryCta={{ href: "/contact", label: "Add a case study" }}
        secondaryCta={{ href: "/services", label: "See services" }}
        metrics={[
          { label: "Case templates", value: "2" },
          { label: "Metrics blocks", value: "6" },
          { label: "Proof links", value: "5" },
        ]}
        visual={
          <Callout
            title="Structure"
            text="Each case study route uses a hero, challenge, solution, metrics, testimonial, and CTA."
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured stories"
          title="A grid that can scale to more stories without changing the template."
        />
        <div className="mt-8">
          <Grid cols="2">
            {caseStudies.map((caseStudy) => (
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
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Outcome-first",
              text: "Case studies open with the result and stay grounded in measurable change.",
            },
            {
              title: "Implementation detail",
              text: "The template has enough room for stack, process, and testimonial blocks.",
            },
            {
              title: "SEO-friendly",
              text: "Slug pages can rank for proof queries while linking back to services and blogs.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-3">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item.title}</p>
              <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
