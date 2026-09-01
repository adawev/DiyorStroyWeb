# DiyorStroy — Design System v1
_Referenslar: Darnit2 (1), Glasshaven (2), BuildCore (3), ZROBIM Terracotta (4)_

## 0. Umumiy DNK (4 ta referensda ham bor)
1. **Qorong'i asos (dark-first)** — deyarli qora fon, ustida yorqin bitta accent rang.
2. **Katta foto = hero'ning o'zi**, matn foto ustida yotadi (overlay/gradient bilan).
3. **Juda katta, siqilgan (condensed) bosh sarlavha** vs kichkina, keng harfli (tracked) label.
4. **Raqamlar sistema sifatida** — 01/02/03, 25+, 650+, 92 m². Raqam = vizual ritm.
5. **Chapdan tekislangan asimmetriya** — matn chapda, foto/obyekt o'ngda.
6. **Ko'p havo (whitespace)**, ammo faqat matn atrofida; fotolar to'liq kenglikda (bleed).
7. **Nozik chiziqlar + hairline divider'lar** qutilar o'rniga.
8. **O'q → belgisi** har bir CTA'da.

---

## 1. Ranglar (tokens)

```css
--bg-900:  #0A0A0B;   /* asosiy fon */
--bg-800:  #121316;   /* section / card fon */
--bg-700:  #1A1C20;   /* hover, input */
--line:    rgba(255,255,255,.10);  /* hairline */
--line-2:  rgba(255,255,255,.06);

--fg-100:  #F5F3EF;   /* sarlavha — sof oq emas, issiq oq (ref 4) */
--fg-300:  #B7B9BD;   /* body */
--fg-500:  #7C7F86;   /* label / meta */

--accent:      #E4572E;  /* asosiy accent (ref1 qizil + ref3 to'q sariq oralig'i) */
--accent-hot:  #FF6A38;  /* hover */
--accent-dim:  rgba(228,87,46,.12); /* fon dog'i */
--sand:        #E8E0D4;  /* neytral issiq (ref 2/4) — ikkilamchi */
```

Qoida: **1 ta accent, boshqa rang yo'q.** Accent faqat 3 joyda — CTA, aktiv holat, statistika bloki. Fon 90% qora, accent 5%, oq matn 5%.

---

## 2. Tipografika

| Rol | Shrift | O'lcham (desktop) | Tracking | Case |
|---|---|---|---|---|
| Display (hero) | Condensed grotesk (Anton / Archivo Expanded / Druk) | 96–160px, clamp | -0.02em | UPPERCASE yoki sentence |
| H2 section | Bir xil shrift | 48–72px | -0.01em | UPPERCASE |
| H3 / card title | Inter / Geist 600 | 20–24px | 0 | Sentence |
| Body | Inter 400 | 16–18px / 1.6 | 0 | Sentence |
| Label / eyebrow | Inter 500 | 12px | **+0.18em** | UPPERCASE |
| Raqam (01, 25+) | Display shrift 300–400 | 40–72px | 0 | — |
| Aksent (ixtiyoriy) | Script italic (ref 4 "cotta") | display bilan bir xil | — | lowercase |

Line-height: display 0.95, H2 1.05, body 1.6.
Maksimum 2 shrift oilasi + 1 ixtiyoriy script.

---

## 3. Setka (grid)

- 12 ustun, max-width **1440px**, gutter **24px**, chekka padding **48px** (mobil 20px).
- Hero: matn **1–6 ustun**, foto/obyekt **6–12** (ref 1, 4).
- Xizmatlar: **4 ustun** (ref 2) yoki **6 ustun** ikonka kartalar (ref 3).
- Loyihalar: **3 ustun**.
- Mobil: hammasi 1 ustun, faqat statistika 2×2.

### Spacing shkalasi (4px base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`
Section orasi: desktop **128px**, mobil **72px**.
Radius: `0` (ref 1,3) yoki `24px` katta bloklarda (ref 2). **Tanlangan: 16px kartalar, 0 tugmalar** — qat'iy ko'rinish.

---

## 4. Bloklar ritmi (sahifa tartibi)

```
1  HERO           100vh, foto full-bleed, matn chapda, slider 01/07 pastda
2  XIZMATLAR      qora fon, 01–04 raqamli / ikonkali kartalar
3  STATISTIKA     ACCENT fon (to'liq kenglik) — sahifadagi yagona yorqin polosa
4  LOYIHALAR      3 karta, foto + kategoriya + o'q
5  JARAYON / M²   jadval-ro'yxat, hairline chiziqlar (ref 2 "House plan")
6  MIJOZLAR       sitatalar, katta shaffof " belgisi orqa fonda
7  CTA            accent yarim blok + forma
8  FOOTER         4 ustun link, qora, kichik matn
```
Ritm qoidasi: **quyuq → quyuq → accent → quyuq → quyuq → accent → footer.** Accent har 3–4 blokda bir marta qaytadi.

---

## 5. Hero anatomiyasi (asosiy — ref 1 + ref 4)

```
┌───────────────────────────────────────────────┐
│ logo        nav-pills             tel / CTA → │
│                                               │
│ meta        ██  KATTA MATN                    │
│ chapda      ██  ORQADA FOTO (obyekt matn      │
│ (narx,      ██  ustiga chiqadi — overlap)     │
│  hudud)                                       │
│             [CTA →]        info-card (glass)  │
│                                               │
│ 01 / 07                  soc      keyingi ↓   │
└───────────────────────────────────────────────┘
```
- Matn **fotoning orqasida emas, o'rtasida**: `z-index` — foto fon → sarlavha → kesib olingan obyekt (PNG) sarlavha ustida. Bu ref 4 effekti.
- Accent to'rtburchak polosa fon sifatida obyekt ortida (ref 1).
- Pastki chap: `01 / 07` slayd hisoblagichi. Pastki o'ng: ijtimoiy tarmoqlar.
- Info-card: `background: rgba(255,255,255,.06); backdrop-filter: blur(16px); border: 1px solid var(--line);`

---

## 6. Komponentlar

**Tugma (asosiy)** — `bg: accent; color: #fff; padding: 16px 28px; radius 0; uppercase; 12px/+0.12em; o'q →`, hover: `--accent-hot` + o'q 4px o'ngga.
**Tugma (ikkilamchi)** — shaffof, `1px solid var(--line)`, hover: border oq.
**Nav pill** (ref 4) — `radius 999px; border 1px solid var(--line); padding 12px 22px`; aktiv: oq fon, qora matn.
**Karta** — `bg: --bg-800; border 1px solid --line-2; radius 16px; padding 24px`; hover: border accent, 1.02 scale foto.
**Eyebrow** — qisqa accent chiziq (32×2px) + UPPERCASE label.
**Divider** — `1px solid var(--line)`, hech qachon qalinroq emas.
**Statistika** — accent fon, oq raqam 56px, tagida 12px uppercase label, orasida vertikal hairline.

---

## 7. Harakat (motion)

- Kirish: `opacity 0→1, translateY 24px→0`, 600ms, `cubic-bezier(.22,1,.36,1)`, ketma-ket 80ms stagger.
- Hero sarlavha: harflar bo'yicha yoki bitta blok bo'lib 800ms.
- Parallax: hero fotosi 8% sekin, matn tez.
- Hover: 200ms. Reduced-motion: hammasi o'chadi.

---

## 8. Texnik
- **Astro** + Tailwind (tokenlar `@theme` orqali), komponentlar `.astro`, interaktiv joylar uchun kerak bo'lsa React island.
- Rasm: `astro:assets`, AVIF/WebP, hero uchun `fetchpriority=high`.
- Dark-only (light tema yo'q).
