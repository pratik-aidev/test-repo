import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost, services } from "../../_content";
import {
  ArticleBody,
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

type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

const articleSections: Record<string, ArticleSection[]> = {
  "service-pages-that-rank-and-convert": [
    {
      heading: "Start with the problem",
      paragraphs: [
        "Service pages work when visitors immediately understand the problem they are trying to solve. The first section should make that tension obvious.",
      ],
      bullets: [
        "Lead with the outcome the buyer wants",
        "State the problem in plain language",
        "Move into the mechanism only after trust is established",
      ],
    },
    {
      heading: "Use the page as a decision tool",
      paragraphs: [
        "Once the problem is clear, the page should make it easy to compare the service against alternatives and see why the offer matters.",
      ],
      callout:
        "Good service pages do not just describe a service. They reduce decision friction.",
    },
  ],
  "case-study-storytelling": [
    {
      heading: "Tell the story in layers",
      paragraphs: [
        "Strong case studies begin with a measurable outcome, then reveal the challenge, solution, and implementation details.",
      ],
      bullets: [
        "Open with the result",
        "Use specific context, not generic praise",
        "Include the stack and decisions that shaped the outcome",
      ],
    },
    {
      heading: "Keep the voice credible",
      paragraphs: [
        "The best proof pages sound specific and grounded. Overstated claims tend to weaken trust.",
      ],
      callout:
        "A premium case study reads like a concise project story, not a sales script.",
    },
  ],
  "nextjs-marketing-seo-basics": [
    {
      heading: "Treat metadata as product surface",
      paragraphs: [
        "In App Router, metadata should be generated per route and kept consistent across the site. It is part of the page experience, not a separate afterthought.",
      ],
      bullets: [
        "Use canonical URLs on every index and detail route",
        "Keep one H1 per page",
        "Make internal links explicit and useful",
      ],
    },
    {
      heading: "Protect performance",
      paragraphs: [
        "Fast marketing pages usually come from server-first rendering, restrained motion, and lightweight components.",
      ],
      callout:
        "The goal is not just to pass audits. The goal is to feel immediate and trustworthy.",
    },
  ],
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const sections = articleSections[post.slug] ?? [
    {
      heading: post.title,
      paragraphs: [post.excerpt],
    },
  ];

  const relatedServices = services.slice(0, 2);

  return (
    <div className="space-y-8">
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
            { href: `/blog/${post.slug}`, label: post.title },
          ]}
        />
      </section>

      <Hero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        primaryCta={{ href: "/contact", label: "Discuss a content system" }}
        secondaryCta={{ href: "/services", label: "See services" }}
        metrics={[
          { label: "Author", value: post.author },
          { label: "Read time", value: post.readTime },
          { label: "Published", value: post.publishedAt },
        ]}
        visual={
          <HeroVisual
            kicker="Article template"
            title="Readable by design"
            lines={[
              "Reading metadata",
              "Clean typography rhythm",
              "Related links and CTA",
              post.coverImage,
            ]}
            footer={post.seo.description}
          />
        }
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <Card className="space-y-8">
          <ArticleBody title={post.title} sections={sections} />
        </Card>
        <div className="space-y-6">
          <DetailSidebar
            title="Post metadata"
            items={[
              { label: "Category", value: post.category },
              { label: "Author", value: post.author },
              { label: "Read time", value: post.readTime },
            ]}
          />
          <Callout
            title="SEO ready"
            text={post.seo.description}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Related pages"
          title="Routes this post can point back to."
        />
        <div className="mt-8">
          <Grid cols="2">
            {relatedServices.map((service) => (
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

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <Card className="flex flex-col gap-4 bg-[var(--foreground)] text-white lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Continue reading
            </p>
            <p className="text-2xl font-semibold tracking-[-0.03em]">
              Keep the editorial system connected to services and proof.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--foreground)]"
          >
            Plan the next article
          </Link>
        </Card>
      </section>
    </div>
  );
}
