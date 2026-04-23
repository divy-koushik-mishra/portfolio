# SEO Action Plan — divykoushik.in

Prioritised fixes. Critical → High → Medium → Low. Each item lists exact file + line and the code shape.

## Critical (fix this week)

### 1. Align `SITE_URL` with the serving origin (www)

The single most impactful change. Fixes canonical mismatch, sitemap warnings, JSON-LD `@id` anchoring, OG URLs, and metadata base — all at once.

Change in four files:
- `src/app/layout.tsx:15` → `const SITE_URL = "https://www.divykoushik.in";`
- `src/app/sitemap.ts:3` → same
- `src/app/robots.ts:3` → same
- `src/lib/jsonld.ts:1` → same

After deploy, verify:
- `curl -sI https://www.divykoushik.in/ | grep -i canonical` — should still show the canonical link
- Fetched HTML canonical tag → `https://www.divykoushik.in`
- Sitemap URLs → all www
- GSC "Submitted URL redirected" warnings (if the property is verified) should clear within a week

Alternative: set Vercel primary domain to apex and redirect www → apex instead. Either works; pick one and make all signals point at it consistently.

---

## High (fix within 1 week)

### 2. Fix brand positioning: "Founding Engineer" leads

Per CLAUDE.md: "The site leads with **Founding Engineer** (not 'Full-Stack Developer')." Every indexed metadata surface currently contradicts this.

File: `src/app/layout.tsx`

| Line | Current | Change to |
|---|---|---|
| 19 | `"Divy Koushik Mishra — Full-Stack Developer in Gurugram"` | `"Divy Koushik Mishra — Founding Engineer in Gurugram"` |
| 23 | description leading with "Full-Stack Developer & Founding Engineer" | lead with "Founding Engineer. Full-stack product builder…" |
| 58, 64, 66 | OG + Twitter titles same as line 19 | match the new title |
| 82 | `ai-content-declaration` says "Full-Stack Developer" | say "Founding Engineer" |
| 95 | `jobTitle: "Full-Stack Developer & Founding Engineer"` | `jobTitle: "Founding Engineer"` |
| 97 | JSON-LD description | match the new meta description |

Also update `public/llms.txt` and `public/llms-full.txt`:
- `llms.txt` line 3 → lead with "Founding Engineer"
- `llms-full.txt` — any identity / job-title field → lead with "Founding Engineer"
- Consider adding the canonical tagline "Building systems, curating taste." near the top of both files

### 3. Remove non-HTML entries from sitemap

`src/app/sitemap.ts` — delete the `llms.txt` and `llms-full.txt` entries (around lines 19–30). They're discoverable from the footer link and don't belong in `<urlset>`.

### 4. Add standard security headers

`next.config.ts` — add (or extend) a `headers()` block:

```ts
async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ];
}
```

Verify no HTTP-only subdomains exist before adding `includeSubDomains` to HSTS.

### 5. Move `<JsonLd />` out of root layout

`ProfilePage` should only fire on `/`. Currently it fires on `/library` too via `src/app/layout.tsx:168–179`.

- Keep `WebSite` schema in root layout (site-wide is correct).
- Move `ProfilePage`/`Person` schema to `src/app/page.tsx` — render as a sibling `<script type="application/ld+json">` block.
- Add a `CollectionPage` JSON-LD block to `src/app/library/page.tsx`:

```ts
const libraryPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/library#webpage`,
  url: `${SITE_URL}/library`,
  name: "Library | Divy Koushik Mishra",
  description: "A running log of what Divy is reading, wearing, and playing outside of code.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  author: { "@id": `${SITE_URL}/#person` },
  breadcrumb: { "@id": `${SITE_URL}/library#breadcrumb` },
};
```

This also requires adding `"@id": "${SITE_URL}/#website"` to the `websiteSchema` in `layout.tsx:157–166` so `isPartOf` resolves.

---

## Medium (fix within 1 month)

### 6. Replace sitemap `new Date()` with static ISO strings

`src/app/sitemap.ts` lines 9, 15 — pin to real content commits:

```ts
lastModified: new Date("2026-04-22"),  // home — commit 03bc28a
lastModified: new Date("2026-04-19"),  // library — commit 319477c
```

Update when content materially changes, not on every deploy.

### 7. Deepen `/library` content (or de-index it)

Currently <500 words of genuine prose. Two options:

**Deepen (preferred, preserves brand signal):**
- Books: extend each commentary to 3–5 sentences. Why it mattered *to your work*.
- Fragrances: add a second sentence per note — what context or mood it's paired with.
- Chess: add 2–3 sentences of context around the ratings (time-control preference, favourite opening, a recent game insight).

**De-index (simpler, lower commitment):**
Add to `src/app/library/page.tsx`:
```ts
export const metadata: Metadata = {
  // ...
  robots: { index: false, follow: true },
};
```
And drop from sitemap. Loses the ranking opportunity but eliminates the thin-content signal.

### 8. Add one quantified claim to E-E-A-T copy

Pick the strongest: pre-seed amount, daily bookings, users, or reduction in X. Add to:
- The About section prose (`src/components/about/index.tsx`)
- `llms-full.txt` in the Experience → CURA Care entry
- `layout.tsx:97` JSON-LD description

A single dated, verifiable number moves citability materially.

### 9. Add IIT Madras degree details

Currently `alumniOf` is just `"Indian Institute of Technology, Madras — Data Science"`. Add structured properties:

```ts
alumniOf: {
  "@type": "EducationalOrganization",
  name: "Indian Institute of Technology Madras",
  url: "https://www.iitm.ac.in/",
  // optional:
  department: "Data Science",
},
```

And in `llms-full.txt` include start/end years and degree type (B.S. / M.S. / diploma / certificate).

### 10. Fix location inconsistency in `llms-full.txt`

`public/llms-full.txt` — any instance of "Gurgaon / Bengaluru" → "Gurugram, India" (match the rest of the site).

### 11. Refresh `llms-full.txt` `Last updated` stamp

`public/llms-full.txt` line 223 — update to today or derive from build time.

---

## Low (backlog)

### 12. Replace `dateModified` runtime value

`src/app/layout.tsx:149` — instead of `new Date().toISOString()`, use a static ISO string updated when content changes materially.

### 13. Normalise `sameAs` trailing slashes

`src/app/layout.tsx:131` — drop the trailing slash from the GitHub URL.

### 14. Remove redundant `@context` from Person node

`src/app/layout.tsx:88` — the inner `personSchema` object carries `"@context"` redundantly. Remove; outer `profilePageSchema` declares it.

### 15. Clean up shadowed `/blogs` route references

`src/components/blog/blogCard.tsx:18` and `src/app/blogs/[slug]/page.tsx:74` reference a redirected route. Either un-shadow `/blogs` (content strategy decision) or delete the dead references. Tracked as a maintenance trap, not a live issue.

### 16. Set up IndexNow

Generate an IndexNow key, drop at `public/<key>.txt`, add a `postbuild` or Vercel deploy hook pinging `https://api.indexnow.org/indexnow` with the changed URLs. Low value for a two-page site; useful if content cadence picks up.

### 17. Fetch CrUX field data

Run `seo-google` subagent with Google API credentials. Replaces Performance category's lab estimate with real 75th-percentile LCP/INP/CLS for mobile + desktop.

### 18. Run `seo-backlinks` with Common Crawl

No credentials required for Common Crawl domain-level metrics. Useful baseline for tracking authority growth over the next 6 months.

---

## Suggested Order (engineering effort)

| Order | Item | Effort | Files |
|---|---|---|---|
| 1 | #1 SITE_URL → www | 5 min | 4 files |
| 2 | #2 Brand positioning | 20 min | layout.tsx + 2 llms files |
| 3 | #3 Strip sitemap txt entries | 2 min | sitemap.ts |
| 4 | #4 Security headers | 10 min | next.config.ts |
| 5 | #5 Move JsonLd + add CollectionPage | 30 min | layout.tsx, page.tsx, library/page.tsx |
| 6 | #6 Static lastmod | 5 min | sitemap.ts |
| 7 | #8–11 E-E-A-T + llms fixes | 1 hr | about, llms-full.txt, layout.tsx |
| 8 | #7 /library deepen or noindex | variable | depends on choice |
| 9 | Remaining Low items | ~1 hr total | scattered |

Post-action estimated SEO Health Score: **88–91 / 100**.
