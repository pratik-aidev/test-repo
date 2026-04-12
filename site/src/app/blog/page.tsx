import type { Metadata } from "next";
import { blogPosts } from "../_content";
import {
  Card,
  ContentCard,
  Hero,
  SectionHeading,
  Grid,
  Callout,
} from "@/components/marketing";

export const metadata: Metadata = {
  title: "Blog",
  description: "Editorial blog templates with metadata, reading time, and SEO-friendly structure.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: "Editorial blog templates with metadata, reading time, and SEO-friendly structure.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <div className="space-y-8">
      <Hero
        eyebrow="Blog"
        title="An editorial blog system designed to rank, teach, and link back to service pages."
        description="The blog index and article template are ready for the content worker to swap in MDX or CMS content without disturbing the shell."
        primaryCta={{ href: "/contact", label: "Plan a content engine" }}
        secondaryCta={{ href: "/services", label: "See services" }}
        metrics={[
          { label: "Article templates", value: "1" },
          { label: "SEO fields", value: "4" },
          { label: "Read-time signals", value: "Included" },
        ]}
        visual={
          <Callout
            title="Editorial pattern"
            text="Featured post, category-aware cards, and a rich article route with strong internal linking."
          />
        }
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured article"
          title="One hero post can anchor the editorial system."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {featured.category}
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">
              {featured.title}
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">{featured.excerpt}</p>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              {featured.author} - {featured.readTime}
            </p>
          </Card>
          <Callout
            title="SEO note"
            text="Each blog post carries category, author, publish date, read time, and SEO metadata so it can be indexed cleanly."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Article grid"
          title="Blog cards built for content discovery and internal linking."
        />
        <div className="mt-8">
          <Grid>
            {blogPosts.map((post) => (
              <ContentCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                eyebrow={post.category}
                title={post.title}
                summary={post.excerpt}
                meta={`${post.author} - ${post.readTime}`}
                icon="book"
              />
            ))}
          </Grid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Metadata-first",
              text: "Titles, descriptions, and canonical URLs are generated per route.",
            },
            {
              title: "Content-friendly",
              text: "The template supports a later MDX or CMS integration without a redesign.",
            },
            {
              title: "Conversion-aware",
              text: "Every post can link back to one service and one proof page.",
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
