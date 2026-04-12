import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/app/_content";
import { SiteIcon, type SiteIconName } from "./site-icons";

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,118,110,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(200,164,93,0.16),_transparent_30%),linear-gradient(to_bottom,_transparent,_transparent_58%,_rgba(255,255,255,0.4))]" />
      <SiteHeader />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)]/70 bg-[rgba(247,244,238,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--accent)] text-white shadow-[0_16px_40px_rgba(15,118,110,0.3)]">
            <SiteIcon name="spark" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
              Northstar
            </span>
            <span className="block text-base font-semibold text-[var(--foreground)]">
              Studio
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Start a project
            <SiteIcon name="arrow-right" className="h-4 w-4" />
          </Link>
          <details className="relative md:hidden">
            <summary className="flex list-none items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)]">
              <SiteIcon name="menu" className="h-4 w-4" />
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-[1.5rem] border border-[color:var(--border)] bg-white p-3 shadow-[0_20px_50px_rgba(17,17,17,0.12)]">
              <div className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-2 text-sm font-medium text-[var(--muted)] hover:bg-[rgba(15,118,110,0.08)] hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[color:var(--border)]/80 bg-[rgba(255,255,255,0.58)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_0.9fr_0.9fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Northstar Studio
          </p>
          <p className="max-w-xl text-base leading-7 text-[var(--muted)]">
            Premium editorial SaaS design for landing pages, service pages, case
            studies, and blog systems that need to feel credible from the first
            scroll.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Pages
          </p>
          <div className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            <span>hello@example.com</span>
            <span>Response within 1 business day</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  metrics,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  metrics?: Array<{ label: string; value: string }>;
  visual?: ReactNode;
}) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--muted)] shadow-[0_8px_30px_rgba(17,17,17,0.04)]">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
          {eyebrow}
        </div>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {primaryCta ? (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            >
              {primaryCta.label}
              <SiteIcon name="arrow-right" className="h-4 w-4" />
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
        {metrics?.length ? (
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-[color:var(--border)] bg-white/85 p-4 shadow-[0_18px_45px_rgba(17,17,17,0.05)]"
              >
                <p className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{metric.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div>{visual}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-3xl text-base leading-7 text-[var(--muted)]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-[color:var(--border)] bg-white/90 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Grid({
  children,
  cols = "3",
}: {
  children: ReactNode;
  cols?: "2" | "3";
}) {
  return (
    <div
      className={cn(
        "grid gap-5",
        cols === "2" ? "lg:grid-cols-2" : "lg:grid-cols-3"
      )}
    >
      {children}
    </div>
  );
}

export function ContentCard({
  href,
  eyebrow,
  title,
  summary,
  meta,
  icon,
  bullets,
}: {
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  meta?: string;
  icon?: SiteIconName;
  bullets?: string[];
}) {
  return (
    <Link
      href={href}
      className="group block h-full rounded-[1.75rem] border border-[color:var(--border)] bg-white/90 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.05)] transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_60px_rgba(15,118,110,0.14)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <Pill>{eyebrow}</Pill>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {title}
          </h3>
        </div>
        {icon ? (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[rgba(15,118,110,0.1)] text-[var(--accent)]">
            <SiteIcon name={icon} className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{summary}</p>
      {meta ? <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">{meta}</p> : null}
      {bullets?.length ? (
        <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <SiteIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
        Read more
        <SiteIcon
          name="arrow-right"
          className="h-4 w-4 transition group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export function SplitSection({
  eyebrow,
  title,
  description,
  left,
  right,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          {left}
        </div>
        <div>{right}</div>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
          <SiteIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.75rem] border border-[rgba(200,164,93,0.35)] bg-[rgba(200,164,93,0.09)] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{text}</p>
    </div>
  );
}

export function FAQList({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-[1.5rem] border border-[color:var(--border)] bg-white/90 p-5"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-[var(--foreground)]">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-[var(--muted)] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: Array<{ href: string; label: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
      {items.map((item, index) => (
        <span key={item.href} className="flex items-center gap-2">
          {index > 0 ? <span>/</span> : null}
          {index === items.length - 1 ? (
            <span className="font-semibold text-[var(--foreground)]">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-[var(--foreground)]">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function HeroVisual({
  kicker,
  title,
  lines,
  footer,
}: {
  kicker: string;
  title: string;
  lines: string[];
  footer: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[linear-gradient(145deg,rgba(15,118,110,0.96),rgba(17,94,89,0.84))] p-6 text-white shadow-[0_30px_80px_rgba(15,118,110,0.22)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.24),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(200,164,93,0.18),_transparent_32%)]" />
      <div className="relative space-y-6">
        <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
          {kicker}
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
          <p className="text-sm leading-6 text-white/82">
            Premium editorial layout, proof blocks, and conversion rhythms.
          </p>
        </div>
        <div className="space-y-3 rounded-[1.5rem] border border-white/12 bg-white/10 p-4 backdrop-blur">
          {lines.map((line) => (
            <div key={line} className="flex items-center justify-between gap-4">
              <span className="text-sm text-white/84">{line}</span>
              <SiteIcon name="check" className="h-4 w-4 text-[var(--gold)]" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1.5rem] bg-white px-4 py-3 text-[var(--foreground)]">
          <span className="text-sm font-semibold">{footer}</span>
          <SiteIcon name="arrow-right" className="h-4 w-4 text-[var(--accent)]" />
        </div>
      </div>
    </div>
  );
}

export function DetailSidebar({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <Card className="lg:sticky lg:top-24">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
        {title}
      </p>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-start justify-between gap-4 border-b border-[color:var(--border)] pb-3 last:border-0 last:pb-0">
            <span className="text-sm text-[var(--muted)]">{item.label}</span>
            <span className="text-sm font-semibold text-[var(--foreground)]">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ArticleBody({
  title,
  sections,
}: {
  title: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: string;
  }>;
}) {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Pill>{title}</Pill>
      </div>
      {sections.map((section) => (
        <section key={section.heading} className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
            {section.heading}
          </h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[var(--muted)]">
              {paragraph}
            </p>
          ))}
          {section.bullets ? <BulletList items={section.bullets} /> : null}
          {section.callout ? <Callout title="Field note" text={section.callout} /> : null}
        </section>
      ))}
    </div>
  );
}
