# DiyorStroy — Full Redesign Prompt

> Target: Claude Code / Cursor. Build from zero. Nothing from the current `index.html` is reused.
> Sources of truth in this repo: `PRODUCT.md`, `DESIGN_SYSTEM.md`, `llms.txt`, `references/1-4.jpg`, `images/`.

---

## 01 — WHAT WE WANT

Rebuild diyorstroy.uz from scratch as a static, dark, editorial-grade website for **Diyor Stroy** — a construction & renovation materials store in Samarkand, Uzbekistan.

**Delete-and-replace, not refactor.** The existing single-file `index.html` and the Express `service.js` are thrown away. New stack, new markup, new design.

The site does not sell online. Its only job is **trust → contact**. Success = the visitor calls, writes on Telegram, requests a wholesale quote, or knows exactly how to reach the store.

Three audiences that must never blur together:
1. Private homeowner renovating an apartment — needs price and availability fast, on a phone.
2. Builders / crews — buy early (store opens 07:00), repeat customers.
3. Wholesale buyers / contractors — need a separate bulk-discount request path.

Hard facts to build on (real, do not invent more): 6+ years in business, 30 000+ customers, 5000+ product types, open daily 07:00–20:00, phone + Telegram `+998 97 646 10 00`, Khalil Sulton St. 150, Oqmachit MFY, Samarkand (39.6211034, 66.995441), Instagram `@diyor.stroy`. Positioning: bought direct from manufacturers and large distributors — no middleman markup — while selling only certified products of global brands.

Deliverable: a production-ready site, fully bilingual (uz/ru), deployed as a static build to Netlify.

---

## 02 — REFERENCES

Four mandatory visual references live in `references/`. Do not substitute them with other inspiration.

| File | Name | What to take from it |
|---|---|---|
| `references/1.jpg` | Darnit2 | Accent rectangle behind a cut-out object; slide counter `01 / 07`; hard-edged buttons |
| `references/2.jpg` | Glasshaven | Glass info-card (`blur` + hairline border); 4-column service grid; hairline table rows |
| `references/3.jpg` | BuildCore | Numbered icon cards `01–04`; construction subject matter; orange accent |
| `references/4.jpg` | ZROBIM Terracotta | Warm off-white type on near-black; nav pills; huge condensed display; object overlapping the headline |

Shared DNA of all four (this **is** the design brief):
1. Dark-first — near-black ground, one bright accent.
2. The photo **is** the hero; text sits on it with overlay/gradient.
3. Very large condensed display headline vs. tiny wide-tracked label.
4. Numbers as a system — `01/02/03`, `30 000+`, `5000+`. Numbers create the rhythm.
5. Left-aligned asymmetry — text left, photo/object right.
6. Generous whitespace around text; photos full-bleed.
7. Hairline dividers instead of boxes.
8. An `→` arrow on every CTA.

`DESIGN_SYSTEM.md` is the extracted, already-approved system from these four. **It wins over your own taste.** Read it before writing a line of CSS.

---

## 03 — STYLE

Dark only. No light theme.

**Color tokens** (exact, from `DESIGN_SYSTEM.md`):

```css
--bg-900:#0A0A0B; --bg-800:#121316; --bg-700:#1A1C20;
--line:rgba(255,255,255,.10); --line-2:rgba(255,255,255,.06);
--fg-100:#F5F3EF; --fg-300:#B7B9BD; --fg-500:#7C7F86;
--accent:#E4572E; --accent-hot:#FF6A38; --accent-dim:rgba(228,87,46,.12);
--sand:#E8E0D4;
```

Rule: **one accent, no second color.** Accent appears in exactly three places — CTAs, active states, the stats band. Roughly 90% dark ground / 5% accent / 5% white text.

**Type:** max 2 families. Display = condensed grotesk (Anton / Archivo Expanded / Druk-like), `clamp()` 96–160px, tracking `-0.02em`, line-height `0.95`. Body = Inter/Geist 400, 16–18px / 1.6. Eyebrow label = Inter 500, 12px, `+0.18em`, UPPERCASE. Numbers use the display family.

**Grid:** 12 columns, max-width 1440px, 24px gutter, 48px page padding (20px mobile). Spacing scale `4·8·12·16·24·32·48·64·96·128·160`. Section gap 128px desktop / 72px mobile. Radius: **16px on cards, 0 on buttons.**

**Components:** primary button = accent fill, white, `16px 28px`, radius 0, uppercase 12px `+0.12em`, `→`, hover `--accent-hot` + arrow shifts 4px right. Secondary = transparent with `1px solid var(--line)`, hover border white. Nav pill = `radius 999px`, hairline border, active = white fill / black text. Card = `--bg-800`, `1px solid --line-2`, radius 16px, padding 24px, hover accent border + 1.02 photo scale. Eyebrow = 32×2px accent bar + uppercase label. Divider = 1px hairline, never thicker. Glass info-card = `rgba(255,255,255,.06)` + `backdrop-filter: blur(16px)` + hairline border.

**Motion:** enter = `opacity 0→1, translateY 24px→0`, 600ms, `cubic-bezier(.22,1,.36,1)`, 80ms stagger. Hero photo parallax 8%. Hover 200ms. `prefers-reduced-motion` kills all of it.

**Voice:** plain, concrete, no oversell. The reader is a builder or a homeowner — no jargon, no adjectives where a number will do.

---

## 04 — SCREENS

One long landing page. Section rhythm must be **dark → dark → accent → dark → dark → accent → footer** (accent band returns every 3–4 sections).

1. **Hero** — 100vh. Full-bleed photo (`images/street.jpg`), text block on the left, accent rectangle behind a cut-out object that overlaps the headline (`z-index`: photo → headline → object). Top bar: logo, nav pills, phone/CTA. Bottom-left `01 / 07` counter, bottom-right socials, scroll cue. Glass info-card with hours + address.
2. **Categories** — product types taken **verbatim from `llms.txt`**, numbered `01–…` icon cards, 6-column on desktop.
3. **Why us** — the positioning claim (direct sourcing → lower price, certified brands), 4 columns, hairline separated.
4. **Stats band** — accent background, full width, the only bright stripe: `6+ years`, `30 000+ customers`, `5000+ product types`, `07:00–20:00`. White numbers 56px, uppercase label beneath, vertical hairlines between.
5. **Brands** — the 15 real logos from `images/brands/`, grayscale, accent-tinted on hover.
6. **Store gallery** — `images/photo1–9.jpg`, full-bleed strip, real interior/product shots.
7. **Wholesale / crews** — separate track: bulk-discount request form and the 07:00 opening argument.
8. **How to find us** — map (39.6211034, 66.995441), address, hours, directions. Phone and address as selectable text, never images.
9. **FAQ** — questions taken from `llms.txt`, hairline accordion rows.
10. **CTA** — accent half-block + contact form (call / Telegram).
11. **Footer** — 4 link columns, dark, small type, full contact details.

Persistent: a sticky mobile contact bar (call + Telegram), and a uz/ru language switcher in the header.

---

## 05 — CONSTRAINTS

**Stack**
- Astro + Tailwind CSS, static output. Tokens via Tailwind `@theme`. Components as `.astro`; a React island only where interactivity genuinely needs it.
- Images through `astro:assets`, AVIF/WebP, hero `fetchpriority="high"`.
- Deploy: Netlify, static. No backend, no database, no CMS.
- Package manager: **yarn**.

**Content**
- Only real content. No invented testimonials, case studies, certificates, team photos, or press. There are **no written reviews** — do not fabricate any. If a section needs content that does not exist, ask instead of writing it.
- Categories, FAQ and brand list come from `llms.txt` and `images/brands/` — not from imagination.
- No prices anywhere. Price is given by phone. No cart, no online ordering, no online payment.
- Both languages complete — never full uz + partial ru.

**Behavior**
- Mobile is the primary target, desktop secondary. The visitor is outdoors, in sunlight, on a phone.
- Tap targets ≥ 44×44px. High contrast text. Phone number and address selectable, not baked into images.
- Contact on every screen — one tap to call or Telegram.
- Form submission method (Telegram bot vs. Netlify Forms) is **undecided** — ask before implementing.

**Process**
- Read `PRODUCT.md` and `DESIGN_SYSTEM.md` before starting; they override any assumption you would otherwise make.
- Do not guess: endpoints, field names, config values, copy that is not in the repo — ask.
- Work on a feature branch, commit per completed section with a scoped conventional-commit message, never push without being asked.
- Delete `index.html` and `service.js` only once the new build fully replaces them.
