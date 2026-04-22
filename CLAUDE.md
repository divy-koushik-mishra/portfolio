# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server with Turbopack on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test setup in this repo.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config` — theme is declared in `src/app/globals.css` under `@theme`)
- shadcn/ui wired for the "new-york" style with `lucide-react` icons (see `components.json`); only `components/ui/context-menu.tsx` is present so far
- `framer-motion` for animations, `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`
- Path alias: `@/*` → `src/*`

## Architecture

Personal portfolio at `divykoushik.in`. Two pages: `/` (landing) and `/library` (books / fragrances / chess). The landing page (`src/app/page.tsx`) composes section components from `src/components/{hero,social,services,sideProjects,about,cta,footer}` — each section is its own folder with an `index.tsx` wrapper and sibling sub-components. Sections are stacked full-width blocks bordered top-and-bottom by `border-border`, with a recurring `DiagonalLineGradientBgFull` separator from `components/hero/`.

### Theming
Light/dark theming is a hand-rolled context in `src/contexts/theme-context.tsx`. It toggles `.light`/`.dark` on `<html>` and persists to `localStorage`. Both themes are defined as CSS variables in `globals.css` (`@theme` block for light defaults, `.dark { ... }` block for dark overrides). New colors should be added as CSS variables in both blocks, not hard-coded. Consumers use Tailwind utility classes like `bg-background`, `text-foreground`, `border-border` which resolve through those variables.

### Routing & SEO
- `src/app/layout.tsx` owns site-wide `<Metadata>`, JSON-LD (`ProfilePage` wrapping a `Person` entity + a `WebSite` schema), the GA script, and generates the OG card via sibling `src/app/opengraph-image.tsx` (Next.js `ImageResponse`, edge runtime). `SITE_URL` is hardcoded in layout.tsx, `sitemap.ts`, `robots.ts`, and `src/lib/jsonld.ts` — keep all four in sync on domain changes.
- Brand positioning: the site leads with **Founding Engineer** (not "Full-Stack Developer") — the Instagram bio line "Building systems, curating taste." is canonical. Rotating hero titles live in `src/components/hero/profileCardSection.tsx`.
- `src/app/robots.ts` explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, etc.); `public/llms.txt` and `public/llms-full.txt` are additional AI-discovery assets referenced by `sitemap.ts`.
- `next.config.ts` **301-redirects `/blogs`, `/blogs/:slug`, and `/projects` → `/`** (Next.js emits HTTP 308 when `permanent: true` — equivalent to 301 for Google). The `src/app/blogs/` route files (`page.tsx`, `[slug]/page.tsx`, `not-found.tsx`) and `src/components/blog/` still compile but are shadowed by these redirects. Unveil by removing the redirect entries. Content still seeded from `src/data/blogs.json` with types in `src/types/blog.ts`; see `BLOG_README.md`.

### Structured data (JSON-LD)
- Root `<JsonLd />` component inside `src/app/layout.tsx` emits two scripts: a `ProfilePage` (with the existing Person payload as `mainEntity`, `@id: "${SITE_URL}/#person"`) and a `WebSite` that back-references the Person by `@id`. **Do not** add `LocalBusiness` or `FAQPage` — wrong entity types for a freelancer and Google restricted FAQ rich results in 2023.
- Breadcrumbs are rendered per-page via `src/components/breadcrumbs.tsx` + `breadcrumbJsonLd()` in `src/lib/jsonld.ts`. Every indexable page should render a `<Breadcrumbs items={...} />` near the top of its tree. Homepage passes `[{name:"Home", url:"/"}]`; `/library` passes `[Home, Library]`.
- Page-level metadata (e.g. `src/app/library/page.tsx`) must set its own `alternates.canonical` — the root layout canonicalizes to `/`, and that value propagates unless overridden.

### Client vs server components
Default is server components. Anything using hooks, browser APIs, or framer-motion must start with `"use client"` — see `navbar.tsx`, `theme-context.tsx`, `google-analytics.tsx`, and everything under `hero/` except `index.tsx` and `diagonalLineGradientBgFull.tsx`.

### Animations
`globals.css` defines custom keyframes: `wavy-flow`, `ripple-wave`, `gentle-pulse` (current-job indicator), and `terminal-blink` (hard on/off blink for the CLI-style prompt strip above the name in `profileCardSection.tsx`, via the `.terminal-cursor` class using `steps(1)` timing).

### Analytics
`GoogleAnalytics` in `src/components/google-analytics.tsx` no-ops unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in `.env.local`.

## Conventions

- Section folders use lowerCamelCase filenames (`bioSection.tsx`, `profileCardSection.tsx`) and an `index.tsx` entry point.
- Use `cn(...)` from `@/lib/utils` to compose Tailwind class strings rather than string concatenation.
- Icons come from `lucide-react`; brand glyphs (GitHub/LinkedIn/X) are `.webp` files in `public/` rendered via `next/image`.
- Max content width is `max-w-3xl` with `border-x border-border` on the inner container — preserve this frame when adding new sections so the vertical border rails line up across the page.
- Every page has exactly one `<h1>`: `/` uses the name in `profileCardSection.tsx`; `/library` uses the word "Library" in `library/page.tsx`. Section headings are `<h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground">`.
- New homepage sections follow the Services card pattern (`src/components/services/index.tsx`): `rounded-xl border border-border p-4 space-y-2 bg-muted/20`. New `/library` sub-sections follow the About subsection pattern (separate file, own max-w-3xl + border-x wrapper, separated by `DiagonalLineGradientBgFull`).
- Bio grid lines in `hero/bioSection.tsx` must stay ≤ ~35 chars so they don't wrap in the 2-column grid and push layout. Longer narrative belongs in the About prose.
