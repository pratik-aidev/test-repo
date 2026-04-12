import type { Metadata } from "next";
import { Card, Hero, SectionHeading, Callout } from "@/components/marketing";
import { ContactForm } from "@/components/contact-form";
import { SiteIcon, type SiteIconName } from "@/components/site-icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or request a handoff for the premium marketing site system.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description: "Start a project or request a handoff for the premium marketing site system.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Contact"
        title="Start the handoff and we’ll turn the shell into a live marketing site."
        description="This contact page keeps the interface simple and credible while the backend worker wires the real delivery path."
        primaryCta={{ href: "#contact-form", label: "Jump to form" }}
        secondaryCta={{ href: "/services", label: "Review services" }}
        metrics={[
          { label: "Response window", value: "1 day" },
          { label: "Channels", value: "3" },
          { label: "Form status", value: "Local" },
        ]}
        visual={
          <Callout
            title="Expectations"
            text="The form is local-only for now. It gives design a polished endpoint while the BE worker wires submission handling later."
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Reach out"
              title="Choose the contact path that fits the project."
            />
            <div className="grid gap-4">
              {[
              {
                icon: "mail",
                title: "Email",
                text: "hello@example.com",
                },
                {
                  icon: "phone",
                  title: "Response",
                  text: "Reply within one business day",
                },
                {
                  icon: "target",
                  title: "Best for",
                  text: "Launches, redesigns, and content systems",
                },
              ].map((item) => (
                <Card key={item.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(15,118,110,0.1)] text-[var(--accent)]">
                    <SiteIcon name={item.icon as SiteIconName} className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[var(--foreground)]">{item.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
