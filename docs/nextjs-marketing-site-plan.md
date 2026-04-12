# Next.js Marketing Site Plan

This document defines a practical plan for building a high-performance marketing site in Next.js with parallel work across FE, BE/content, DevOps, QA, and review.

## Goal

Build a premium B2B-style website with these page groups:

- landing pages
- case studies
- blog pages
- services pages

The site should feel modern, fast, credible, and conversion-focused.

## Product shape

### Primary page types

- Home landing page
- Services index page
- Individual service detail pages
- Case studies index page
- Individual case study pages
- Blog index page
- Individual blog post pages
- About page
- Contact page
- Optional lead magnet or CTA page

### Core business goals

- communicate credibility fast
- explain services clearly
- show proof through case studies
- capture organic traffic with blogs
- convert visitors through strong CTAs

## Recommended stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui for composable primitives
- Framer Motion for selective motion
- Lucide React for icons
- next/font for typography loading
- next-seo patterns implemented through App Router metadata APIs
- MDX or content collections for blogs and case studies
- next/image for all editorial and marketing imagery
- Vercel deployment target

## Design direction

### Design pattern

Use a premium editorial SaaS pattern:

- strong hero with bold headline and proof strip
- modular content sections with alternating layouts
- generous whitespace and large typography
- clean grid-based composition
- restrained motion and sharp hierarchy
- case-study storytelling blocks with metrics
- blog cards with strong category and reading-time signals

This is a better fit than a generic agency template because it scales cleanly across landing, service, blog, and case-study content.

### Visual personality

- confident, modern, and minimal
- closer to high-end B2B SaaS than flashy startup landing pages
- image-led where proof matters, not decorative overload
- typography-driven sections with clear call-to-action rhythm

## Color system

Use a neutral base with one bold accent and one utility accent.

### Recommended palette

- Background: warm off-white `#F7F4EE`
- Surface: white `#FFFFFF`
- Text primary: near-black `#111111`
- Text secondary: muted slate `#5B6470`
- Border: soft stone `#E7E1D8`
- Brand accent: deep teal `#0F766E`
- Accent hover: dark teal `#115E59`
- Secondary accent: muted gold `#C8A45D`
- Success/data highlight: moss green `#3F6B4B`

### Why this palette

- premium without looking cold
- works for service brands, consultancies, SaaS, and AI companies
- gives case studies and data blocks a trustworthy tone
- avoids overused purple gradients and generic blue-only branding

## Typography

Use a distinctive but production-safe pairing.

- Headings: `Manrope`
- Body: `Source Sans 3`
- Optional editorial accent for quotes or case-study pullouts: `Instrument Serif`

### Type usage

- large bold headlines with tight line-height
- readable medium-size body text
- occasional serif accent for editorial richness, not everywhere

## Imagery strategy

Use real-looking product and brand-supporting visuals. Avoid random stock photos of people at laptops.

### Home page images

- abstract brand shapes or textured gradient background in hero
- product UI mockups if a product exists
- subtle team/process collage only if authentic assets are available

### Services pages images

- process diagrams
- interface mockups
- outcome-oriented illustrations
- icon-led feature blocks instead of heavy photography

### Case study images

- dashboard or product screenshots
- before-and-after comparison blocks
- charts with growth or efficiency metrics
- client logo row if permitted

### Blog images

- consistent editorial cover images
- topic-relevant abstract illustrations
- lightweight diagrams or annotated screenshots inside long-form posts

### Image style rules

- use consistent aspect ratios
- compress and serve as WebP/AVIF where possible
- every image must support meaning, trust, or conversion
- avoid decorative stock imagery unless it strengthens the brand

## Icon strategy

Use `lucide-react`.

### Core icon types

- services: `Layers3`, `Code2`, `Workflow`, `Rocket`, `ShieldCheck`, `Database`
- proof/results: `TrendingUp`, `BarChart3`, `Target`, `Clock3`
- blog/meta: `CalendarDays`, `ArrowRight`, `BookOpen`, `Tag`
- trust/process: `CheckCircle2`, `Users`, `Briefcase`, `MessagesSquare`

### Why Lucide

- clean stroke style
- works well in modern editorial SaaS design
- lightweight and easy to theme
- consistent across all page types

## Component library

Use `shadcn/ui` as the primitive library, not as the visual identity.

### Components to use

- Button
- Card
- Badge
- Input
- Textarea
- Sheet or Dialog
- Accordion
- Tabs if needed
- Separator
- Navigation Menu or custom nav shell

### Custom branded components to build

- hero section
- trust bar
- services grid
- case study stat block
- testimonial strip
- blog card
- CTA banner
- timeline/process section
- rich content renderer for MDX

## Site architecture

### URL structure

- `/`
- `/services`
- `/services/[slug]`
- `/case-studies`
- `/case-studies/[slug]`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contact`

### Content model

- Services: title, summary, problem, approach, deliverables, FAQs, CTA
- Case studies: client, challenge, solution, stack, metrics, testimonial, CTA
- Blog: title, excerpt, category, author, published date, cover image, SEO fields, content

## Page patterns

### Home

- hero
- social proof/logo strip
- services preview
- process section
- featured case studies
- featured blog posts
- testimonial or trust content
- strong final CTA

### Services index

- value proposition hero
- service cards
- methodology section
- proof points
- FAQ
- CTA

### Service detail

- specific hero
- problem framing
- capabilities
- process/timeline
- proof or mini-case-study
- FAQ
- CTA

### Case studies index

- filterable or categorized grid
- result-oriented cards
- proof-first copy

### Case study detail

- client summary
- challenge
- approach
- implementation
- measurable outcomes
- testimonial
- related case studies
- CTA

### Blog index

- editorial hero
- categories
- featured article
- article grid
- newsletter or CTA block

### Blog detail

- reading metadata
- sticky table of contents if long
- rich typography
- inline callout sections
- related posts
- CTA at end

## SEO plan

### Technical SEO

- use App Router `generateMetadata`
- generate dynamic title and description per page
- canonical URLs on all index and detail pages
- Open Graph and Twitter metadata
- sitemap generation
- robots.txt generation
- schema markup via JSON-LD

### Schema types

- `Organization`
- `WebSite`
- `Service`
- `BreadcrumbList`
- `BlogPosting`
- `Article`
- `FAQPage` where relevant

### On-page SEO

- one clear H1 per page
- semantic heading structure
- keyword-informed title tags
- descriptive image alt text
- internal links between services, blogs, and case studies
- content clusters from blog to service pages

### Content SEO strategy

- each service page targets high-intent service keywords
- each case study targets proof and implementation keywords
- blogs target problem-aware and comparison-style search intent
- every blog should link to one relevant service and one relevant case study

## Performance plan

### Core techniques

- server components by default
- client components only where interaction needs them
- optimize all images with `next/image`
- route-level code splitting
- lazy-load non-critical sections
- limit heavy animation and third-party scripts
- preload fonts carefully
- use static generation for marketing content where practical

### Targets

- Lighthouse performance 90+
- strong LCP on homepage and service pages
- minimal CLS
- accessible nav and forms

## Accessibility plan

- semantic landmarks
- visible focus states
- contrast-safe palette
- keyboard-friendly menus and forms
- descriptive labels and alt text
- motion reduced when user prefers reduced motion

## Parallel execution plan

### Team Lead

- define exact brand personality, ICP, service categories, and initial sitemap
- lock milestone order and content priorities

### FE worktree

- build design system shell and page templates
- implement homepage, services, case-study, and blog layouts
- wire shared sections and metadata helpers

### BE or content worktree

- create MDX or content collection structure
- define schemas for services, blogs, and case studies
- add seed content and helper utilities for page generation

### DevOps

- set up lint, typecheck, image policy, build checks, and deployment defaults
- verify headers, caching, and production settings

### QA

- create page-level test checklist
- validate SEO tags, responsiveness, and page speed

### Reviewer

- check consistency of templates
- catch performance regressions and broken content contracts

## Build order

1. design tokens and layout shell
2. homepage
3. services index and service detail template
4. case-study index and detail template
5. blog index and blog detail template
6. SEO, schema, sitemap, metadata, and image optimization
7. QA pass and performance pass

## Parallel prompts

### Team Lead prompt

`Act as the Team Lead agent from /agents/team-lead.md. We are building a premium Next.js marketing site with landing pages, services pages, case studies, and blogs. Follow /docs/nextjs-marketing-site-plan.md. Finalize milestone 1, confirm the sitemap, define page priorities, and split implementation into parallel FE, content/backend, DevOps, QA, and reviewer workstreams with clear ownership.`

### FE prompt for the FE worktree

`Act as the Frontend Developer agent from /agents/frontend-developer.md. In this worktree, implement the frontend for the Next.js marketing site according to /docs/nextjs-marketing-site-plan.md. Use App Router, Tailwind, shadcn/ui primitives, lucide-react icons, Manrope plus Source Sans 3 typography, deep teal plus warm neutral design tokens, and a premium editorial SaaS visual style. Build reusable sections and page templates for home, services index, service detail, case studies index, case study detail, blog index, and blog detail. Default to server components, optimize images, keep interactions lightweight, and leave integration notes for content/backend and QA.`

### Content or backend prompt for the BE worktree

`Act as the Backend Developer agent from /agents/backend-developer.md. In this worktree, treat backend ownership as content architecture for a Next.js marketing site. Follow /docs/nextjs-marketing-site-plan.md. Define content schemas and data-loading utilities for services, blogs, and case studies using MDX or structured content collections. Add sample content, slug handling, metadata fields, related-content logic, and helper functions that make static generation and SEO metadata easy for the frontend to consume. Leave clear contracts and examples for FE and QA.`

### DevOps prompt

`Act as the DevOps Engineer agent from /agents/devops-engineer.md. Follow /docs/nextjs-marketing-site-plan.md. Set up the project for reliable local development and production deployment on Vercel. Add lint, typecheck, build validation, image optimization guidance, environment documentation, and production-safe defaults for a content-heavy Next.js site. Focus on repeatable setup, fast builds, and clean deployment readiness.`

### QA prompt

`Act as the QA Tester agent from /agents/qa-tester.md. Follow /docs/nextjs-marketing-site-plan.md. Create a focused QA plan for homepage, services pages, case studies, and blogs. Cover responsiveness, navigation, content rendering, SEO metadata, accessibility basics, page speed risks, and smoke tests required before merge. Highlight high-risk areas for a content-heavy Next.js marketing site.`

### Code reviewer prompt

`Act as the Code Reviewer agent from /agents/code-reviewer.md. Review the current implementation against /docs/nextjs-marketing-site-plan.md. Prioritize findings around correctness, SEO gaps, rendering problems, accessibility misses, performance regressions, broken metadata, and inconsistent page templates. Keep findings ordered by severity and call out missing tests or risky assumptions.`

## Suggested image and icon sourcing rules

- use local optimized assets in `public/images`
- maintain a consistent naming scheme by page type
- prefer custom illustrations, product screenshots, metric graphics, and client-approved brand assets
- if external photography is needed, use desaturated, premium editorial imagery with consistent color grading
- keep icon usage consistent by meaning, not random decoration

## Definition of done

- all page groups implemented with consistent templates
- metadata and schema added across pages
- all major images optimized
- mobile and desktop layouts validated
- Lighthouse and manual performance checks completed
- content relationships and internal links working
- QA smoke pass completed
