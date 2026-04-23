# SEO Audit — divykoushik.in

Date: 2026-04-23
Scope: `/` and `/library` (only indexable pages; `/blogs` + `/projects` 308-redirect to `/`).
Business type: Personal portfolio / freelance founding engineer (not local-service — `seo-local` and `seo-maps` intentionally skipped).

## Executive Summary

**SEO Health Score: 71 / 100**

The site is well-engineered — clean HTML, small compressed payloads (18 KB home, 13 KB library), tight JSON-LD, explicit AI-crawler allow list, self-hosted fonts, preloaded LCP image, and unified `<main>` wrapping. The score is pulled down by one structural correctness issue (canonical/DNS split) and a brand-positioning inconsistency that leaks across every indexed metadata surface.

### Top 5 Critical/High Issues

1. **Canonical/DNS split** — `SITE_URL = "https://divykoushik.in"` is stamped into `<link rel="canonical">`, sitemap, JSON-LD `@id`, and `og:url`, but apex 308-redirects to `www.divykoushik.in`. Every canonical signal points to a URL that redirects.
2. **Brand positioning inconsistency** — `<title>`, OG title, Twitter title, meta description, JSON-LD `jobTitle`, `ai-content-declaration`, and `llms.txt` all lead with "Full-Stack Developer". CLAUDE.md designates "Founding Engineer" as the canonical brand lead. The hero component uses "Founding Engineer" but every indexed signal contradicts it.
3. **ProfilePage fires on `/library`** — `<JsonLd />` lives in root layout, so `/library` emits `ProfilePage` schema even though it's a collection page, not a profile.
4. **Missing security response headers** — only `strict-transport-security` is set. No `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, or `Permissions-Policy`.
5. **Sitemap lists `.txt` files as `<url>` entries** — `llms.txt` and `llms-full.txt` are in the urlset. The Sitemap protocol expects HTML/media URLs; plain-text AI-discovery files don't belong there.

### Top 5 Quick Wins (under 1 hour)

1. Flip `SITE_URL` → `https://www.divykoushik.in` across four files (`src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/jsonld.ts`).
2. Swap "Full-Stack Developer" → "Founding Engineer" as the lead term in `src/app/layout.tsx` metadata (title, descriptions, OG/Twitter titles, `ai-content-declaration`, JSON-LD `jobTitle`).
3. Remove `llms.txt` and `llms-full.txt` entries from `src/app/sitemap.ts` (lines 19–30).
4. Add a `headers()` block in `next.config.ts` for the four standard security headers.
5. Update `/tmp/llms.txt` + `/tmp/llms-full.txt` generators to lead with "Founding Engineer" and fix the "Gurgaon / Bengaluru" inconsistency (canonical location is "Gurugram").

---

## Category Scores

| Category | Score | Weight | Contribution |
|---|---|---|---|
| Technical SEO | 68 | 22% | 14.96 |
| Content Quality | 68 | 23% | 15.64 |
| On-Page SEO | 62 | 20% | 12.40 |
| Schema / Structured Data | 74 | 10% | 7.40 |
| Performance (CWV, lab-only) | 88 | 10% | 8.80 |
| AI Search Readiness | 72 | 10% | 7.20 |
| Images | 90 | 5% | 4.50 |
| **Total** | | | **70.9 ≈ 71** |

---

## Technical SEO (68 / 100)

**Confirmed redirect map:**
- `http://divykoushik.in` → 308 → `https://divykoushik.in` (single hop, no HSTS on HTTP — expected)
- `https://divykoushik.in` → 308 → `https://www.divykoushik.in/` (single hop, HSTS present)
- `http://www.divykoushik.in` → 308 → `https://www.divykoushik.in/` (single hop)
- `/blogs`, `/blogs/:slug`, `/projects` → 308 → `/` (functioning correctly per `next.config.ts`)
- Viewport meta: pass. Mobile-viewport-correct.

### Critical

**C1 — Canonical/serving-origin mismatch.**
Canonical tag resolves to `https://divykoushik.in` (apex); every request is served from `https://www.divykoushik.in`. Google will follow the 308, but this creates a canonicalization split — PageRank dilution and GSC "Submitted URL redirected" warnings.
- Files: `src/app/layout.tsx:15`, `src/app/sitemap.ts:3`, `src/app/robots.ts:3`, `src/lib/jsonld.ts:1`
- Fix: change all four `SITE_URL` constants to `https://www.divykoushik.in` (or inversely configure Vercel to make apex the primary domain and www → apex).

### High

**H1 — Non-HTML entries in sitemap urlset.**
`llms.txt` and `llms-full.txt` in `<urlset>` violate sitemap protocol intent. Search engines skip these; may trigger GSC warnings.
- Fix: remove lines 19–30 of `src/app/sitemap.ts`.

**H2 — Security headers missing.**
Live response carries only HSTS. No `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, or a minimal `Permissions-Policy`.
- Fix: add a `headers()` async function in `next.config.ts` for `source: "/(.*)"`.

**H3 — HSTS missing `includeSubDomains` and `preload`.**
Current: `max-age=63072000` only. Not preload-eligible.
- Fix: extend to `max-age=63072000; includeSubDomains; preload` via `next.config.ts` headers or Vercel project settings (confirm no HTTP-only subdomains first).

### Medium

**M1 — `metadataBase` in `src/app/library/page.tsx:13`** resolves `/library` canonical against apex. Auto-resolves when C1 is fixed.

**M2 — `robots.txt` Sitemap directive** references apex URL. Auto-resolves when C1 is fixed.

### Low

**L1 — `dateModified` = `new Date().toISOString()`** (`src/app/layout.tsx:149`) stamps build time, not content edit time. Use a static ISO or derive from `git log`.

**L2 — No IndexNow key file.** Optional for a two-page site; could speed up Bing/Yandex reindex on content changes.

---

## Content Quality & E-E-A-T (68 / 100)

### E-E-A-T Breakdown
- **Experience: 14/20** — Strong first-person signals (first hire, first line of code, VC-funded MVP, IIT Madras). Gap: no quantification. "Secured VC funding" → add round size or a user/booking metric.
- **Expertise: 18/25** — Breadth is documented. Weakness: "AI & Data" category isn't corroborated by an actual project. "Currently Learning" (Rust, WASM, Blockchain, Advanced ML) dilutes focus for a prospective client.
- **Authoritativeness: 14/25** — Weakest pillar. Zero external citations, no testimonials, no press, no named references. `sameAs` is correctly populated but carries no third-party signal on its own.
- **Trust: 22/30** — Email visible twice, social links consistent, HTTPS, correct `ProfilePage`/`Person` schema. Minor gap: `llms-full.txt` says "Gurgaon / Bengaluru", everything else says "Gurugram".

### Thin content
- Homepage: >500 words, passes.
- `/library`: well under 500 words of genuine prose (one-paragraph commentary per book, one-liner per fragrance, three rating numbers for chess). Page is currently indexed + canonical-set + in-sitemap. Either deepen the commentary (3–5 sentences per book, second sentence per fragrance) or add `robots: noindex`. Current state is the worst of both options.

### Brand-consistency failure (elevated — it's on every indexed surface)
`<title>`, description, OG/Twitter titles (`src/app/layout.tsx:19,23,58,64,66`), `ai-content-declaration` (`layout.tsx:82`), JSON-LD `jobTitle` (`layout.tsx:95`), JSON-LD `description` (`layout.tsx:97`), and `public/llms.txt`/`llms-full.txt` all lead with "Full-Stack Developer". Hero component (`profileCardSection.tsx:21`) correctly leads with "Founding Engineer — Building systems, curating taste." Every indexable metadata surface contradicts the hero.

### AI citation readiness: 55 / 100
- `llms-full.txt` last-updated date is stale (line 223, `2026-02-18` vs today `2026-04-23`).
- Claims lack quantification → LLMs cannot cite numbers that don't exist.
- `alumniOf` has no degree type, start/end year, or completion status.
- "FlipsideBrain" is described as a notable project with no resolvable URL.
- `llms-full.txt` "Blog Topics & Thought Leadership" section describes content that doesn't exist at any URL (the `/blogs` route is shadowed by a 308 redirect).

### Shadowed redirect references
- `src/components/blog/blogCard.tsx:18` → `<Link href="/blogs/${slug}">`
- `src/app/blogs/[slug]/page.tsx:74` → `href="/blogs"`
These are non-functional today (routes 308-redirect) but would produce loops if the redirect is ever removed without cleanup. Maintenance trap, not a live user-facing issue.

---

## Schema / Structured Data (74 / 100)

Both pages emit `ProfilePage` (with `Person` as `mainEntity`), `WebSite`, and `BreadcrumbList`. Breadcrumbs are correct on both pages.

### Issues

**S1 — `ProfilePage` fires on every page via root layout** (`src/app/layout.tsx:168–179`). `/library` is a collection, not a profile. Move `<JsonLd />` out of root layout and render it only in `src/app/page.tsx` (or gate by pathname). Keep `WebSite` in root layout.

**S2 — `@id` anchor mismatch with canonical.** `Person.@id` is `https://divykoushik.in/#person` but the canonical URL resolves to www. Fixed by C1 (SITE_URL → www).

**S3 — `Person` object carries redundant `@context`** (`layout.tsx:88`). Already inside `ProfilePage` which declares it. Minor — remove to clean up validator output.

**S4 — `jobTitle: "Full-Stack Developer & Founding Engineer"`** buries the brand lead. Reverse order or use `"Founding Engineer"` alone.

**S5 — `WebSite` missing `@id`** (`layout.tsx:157–166`). Add `@id: "${SITE_URL}/#website"` so a future `CollectionPage` on `/library` can declare `isPartOf` with a resolvable reference.

**S6 — GitHub `sameAs` has trailing slash** (`layout.tsx:131`); other socials don't. Normalize.

### Appropriate additions
- `CollectionPage` schema on `/library` referencing the `Person` as `author` and the `WebSite` as `isPartOf`. See Action Plan for the JSON-LD template.

### Deliberately NOT suggested
Per CLAUDE.md: no `LocalBusiness`, no `FAQPage`. Both are wrong entity types for a solo freelancer and FAQ rich results were restricted by Google in 2023. Also skipping `Review` schema (no first-party reviews) and `SearchAction` on `WebSite` (low value for a 2-page site).

---

## Sitemap (62 / 100)

Small, well-formed, no 404s or redirected URLs internal to the sitemap.

- **URL canonicality:** sitemap uses apex; live site is www. Fixed by C1.
- **Non-HTML entries:** `llms.txt`, `llms-full.txt` in urlset. Remove.
- **lastmod = `new Date()`:** stamps every URL with build time. Google largely ignores synthetic lastmod. Replace with hardcoded ISO strings tied to real content commits (e.g., `new Date("2026-04-22")` for home from commit `03bc28a`, `new Date("2026-04-19")` for library from `319477c`).
- **priority / changeFrequency:** Google ignores. Harmless but unnecessary.
- **Completeness:** pass. `/blogs` and `/projects` correctly absent.

Post-fix projected sitemap score: ~91/100.

---

## Performance (88 / 100, lab-only estimate)

Measured without CrUX field data (no Google API credentials detected). Estimates from HTML shape, compressed transfer sizes, and recent commit history.

### Observations
- **Compressed transfer:** `/` = 18.4 KB, `/library` = 12.9 KB, both served in ~180 ms from BOM1 edge. Excellent.
- **Script count:** 11 Next chunks on homepage. Normal for Next 15 App Router.
- **Fonts:** Geist Mono self-hosted, woff2 preloaded — good (recent commit `f997ce4` did this work).
- **LCP candidate:** hero portrait `/divy-koushik.webp`, preloaded with `fetchPriority="high"` and responsive srcset. Also good.
- **Third-party:** single GA4 tag (`gtag/js?id=G-ERQV6KHDB6`). Low impact.
- **CLS risk:** hero has fixed dimensions via `next/image`; section borders are static. Low.
- **INP risk:** framer-motion on client components in hero; bundle is not large, but any heavy animation on the above-the-fold section can degrade INP on low-end mobile. Worth measuring under CrUX field data.

### Estimated CWV thresholds
| Metric | Est. | Threshold |
|---|---|---|
| LCP | ~1.2–1.8 s (desktop) / ~2.2–2.8 s (mobile 4G) | Good |
| INP | Expected < 200 ms if framer-motion stays out of main-thread bursts | Needs field data |
| CLS | ~0 | Good |

### Opportunities (ranked)
1. **Get CrUX field data** via `seo-google` agent (requires Google API credentials). Replaces this estimate with real 75th-percentile mobile numbers.
2. **Defer GA** to `strategy="lazyOnload"` if not already; measure INP impact.
3. **Audit framer-motion imports** — tree-shake unused modules via `import { motion } from "framer-motion"` named imports (already likely the case — verify).
4. **Inspect font-display strategy** on `Geist Mono` @font-face declarations — should be `swap` or `optional` to avoid FOIT on slow mobile.

---

## AI Search Readiness / GEO (72 / 100)

### What's strong
- Explicit allow list for GPTBot, ChatGPT-User, Google-Extended, ClaudeBot, Claude-Web, anthropic-ai, Applebot-Extended, PerplexityBot, Bytespider, cohere-ai in `robots.txt`.
- `llms.txt` and `llms-full.txt` present, linked from the sitemap. Well above average.
- `ProfilePage` + `Person` + `WebSite` JSON-LD gives LLMs a clean, queryable entity.
- Footer links out to GitHub / LinkedIn / X / Instagram (populated `sameAs`).

### What's weak

**G1 — Brand signal contradicts itself.** `llms.txt` line 3 calls Divy "Full-Stack Developer, Founding Engineer, and Technical Consultant" (Full-Stack first). JSON-LD `jobTitle` says "Full-Stack Developer & Founding Engineer" (Full-Stack first). Hero says "Founding Engineer". LLMs will pick the most repeated signal, which is Full-Stack — contradicting CLAUDE.md's canonical positioning.

**G2 — `llms-full.txt` stale.** Last-updated stamp two months behind.

**G3 — Location inconsistency.** `llms-full.txt` says "Gurgaon / Bengaluru"; everything else says "Gurugram". LLMs will surface both spellings, weakening the local entity anchor.

**G4 — Citability score: 55 / 100.** Claims lack numbers. "Built MVPs that secured VC funding" is not an anchorable fact — no round size, date, or company. AI engines cite concrete, dated statements.

**G5 — Shadowed `/blogs` claims.** `llms-full.txt` advertises blog topics; route 308s to `/`. If an LLM tries to cite any blog post, the reference is dead.

### Platform-specific

- **Google AI Overviews:** present `ProfilePage` + `Person` schema is the right shape. To win a GAO citation, the Person entity needs at least one time-bounded, quantified claim.
- **ChatGPT / Perplexity:** both consume `llms.txt`. Fix G1 and G2 and this surface is near-optimal for a solo portfolio.
- **Bing Copilot:** robots allow list covers Bingbot implicitly (via `User-Agent: *`). Bing Webmaster Tools verification + IndexNow would tighten this further.

---

## Images (90 / 100)

Not deep-audited (no separate `seo-images` run), but observable from rendered HTML:
- Hero image: `/divy-koushik.webp`, WebP format, responsive srcset, `fetchPriority="high"`, sized for CLS. Good.
- Brand glyphs (GitHub/LinkedIn/X): `.webp` per CLAUDE.md.
- OG image generated via Next.js `ImageResponse` at the edge — 1200×630, `image/png`, correct dimensions.

Potential gap: alt-text audit of all `<Image>` uses not performed. Low-effort follow-up.

---

## Redirect / Shadow-Route Hygiene

- `/blogs` → `/` (308) ✓
- `/blogs/:slug` → `/` (308) ✓
- `/projects` → `/` (308) ✓
- `apex` → `www` (308) ✓ — but combined with canonical pointing to apex = Critical C1.
- `src/app/blogs/` and `src/components/blog/` still compile but are shadowed — maintenance trap if redirects are ever removed without cleanup.

---

## Not Audited (Out of Scope / No Credentials)

- **CrUX field data / URL indexation / organic traffic** — requires Google API credentials (`seo-google` subagent). Would replace Performance lab estimate with real 75th-percentile numbers.
- **Backlink profile** — no Moz/Bing credentials detected. Common Crawl data is free; a `seo-backlinks` run would give domain-level referring-domain counts.
- **Local SEO / Maps** — intentionally skipped. Site is a freelancer portfolio, not a brick-and-mortar or service-area business.
