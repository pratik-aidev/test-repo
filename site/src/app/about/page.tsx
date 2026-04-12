import type { Metadata } from "next";
import { Card, Hero, SectionHeading, Callout, Pill } from "@/components/marketing";
import { SiteIcon } from "@/components/site-icons";
import { site } from "../_content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the editorial SaaS design approach behind this milestone.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About",
    description: "Learn about the editorial SaaS design approach behind this milestone.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="About"
        title="A focused build system for premium B2B marketing pages."
        description="The goal is to make high-quality web launches easier to repeat: a polished shell, trustworthy storytelling, and a contract that can scale with the content team."
        primaryCta={{ href: "/contact", label: "Work with us" }}
        secondaryCta={{ href: "/services", label: "View services" }}
        metrics={[
          { label: "Design principle", value: "Editorial" },
          { label: "Ownership", value: "FE shell" },
          { label: "Content handoff", value: "Ready" },
        ]}
        visual={
          <Callout
            title="Approach"
            text="We optimize for clarity, conversion, and maintainability without overbuilding the first milestone."
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Principles"
          title="A few rules that keep the site premium and easy to maintain."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Hierarchy first",
              text: "The page should read quickly on mobile and feel refined on desktop.",
            },
            {
              title: "Proof over decoration",
              text: "Every visual block should support trust, clarity, or conversion.",
            },
            {
              title: "Contract stability",
              text: "The FE should only depend on the small set of fields BE owns.",
            },
          ].map((item) => (
            <Card key={item.title} className="space-y-3">
              <Pill>{item.title}</Pill>
              <p className="text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <SectionHeading eyebrow="What this milestone covers" title="A full frontend shell for milestone 1." />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Homepage",
                "Services index and detail templates",
                "Case studies index and detail templates",
                "Blog index and detail templates",
                "About and contact routes",
                "SEO routes and metadata",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--background)] px-4 py-3">
                  <SiteIcon name="check" className="h-4 w-4 text-[var(--accent)]" />
                  <span className="text-sm text-[var(--foreground)]">{item}</span>
                </div>
              ))}
            </div>
          </Card>
          <Callout
            title="Integration note"
            text={`${site.name} here is a placeholder brand for this frontend milestone. The BE worker can swap in final copy, imagery, and CMS-backed content later.`}
          />
        </div>
      </section>
    </div>
  );
}
