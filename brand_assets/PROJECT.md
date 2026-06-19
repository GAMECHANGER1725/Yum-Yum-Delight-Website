# PROJECT.md — Yum Yum Delight Website

## Business Context

- **Business name**: Yum Yum Delight
- **ABN**: 44 651 091 744
- **Model**: B2B only — sells to cafés and distributors
- **Location**: Sydney-wide delivery. Factory is in Yennora, Western Sydney — **never mention Yennora on any public-facing page**. Use "Sydney" externally.
- **Operations**: Orders via email. Delivery days Sunday–Friday. Minimum order $50 per delivery.
- **Tagline**: *Baked for your business.*
- **Operating since**: November 2021

---

## Brand Identity

### Positioning
Best value — artisan quality at prices competitors can't match. Not premium, not cheapest. B2B buyers want reliability, consistency, and margin. Show quality, don't claim it. Never say "passionate about baking."

### Colour Palette
| Name             | Hex       | Usage                                              |
|------------------|-----------|----------------------------------------------------|
| Chocolate Brown  | `#46280A` | Logo hat, "YUM YUM" wordmark, primary text on light |
| Logo Gold        | `#B47832` | "DELIGHT" wordmark, accents, CTAs, eyebrows         |
| Parchment        | `#F5F0E8` | Logo bg, page bg, wholesale sheets                 |
| Cream            | `#FAF3E0` | Text on dark backgrounds, light fill               |
| Midnight Crust   | `#1A1208` | Dark hero backgrounds, reversed logo usage         |
| Warm Brown       | `#6B3F1A` | Secondary depth, borders on light backgrounds      |

> ⚠ Previous docs listed Golden Glaze `#C49A3C` — this was incorrect. The actual logo gold is `#B47832`. Use `#B47832` everywhere.

### Typography
- **Headings / Display**: Manrope (sans-serif)
- **Body / UI**: Nunito (sans-serif)
- Large headings: tight tracking (`-0.03em`), generous line-height on body (`1.7`)

### Logo Files (in `brand_assets/Logo's/`)
| File                          | Use case                                    |
|-------------------------------|---------------------------------------------|
| `Side Logo.png`               | Nav bar, light backgrounds (horizontal)     |
| `Side Logo Transparent.png`   | Nav bar with transparent/light bg           |
| `Reg logo.png`                | Hero, footers, light backgrounds (stacked)  |
| `Reg Logo Transparent.png`    | Dark backgrounds (stacked, reversed)        |
| `Only Logo.png`               | Icon-only use, light backgrounds            |
| `Only Logo Transparent.png`   | Icon-only, transparent/dark backgrounds     |

**Rule**: Use light-background versions (`Side Logo.png`, `Reg logo.png`) on cream/parchment surfaces. Use `Reg Logo Transparent.png` (dark version) on dark/Midnight Crust backgrounds.

### Tone
- Direct, confident, no fluff
- B2B-focused — speak to café owners and distributors, not consumers
- No "passionate about baking", no lifestyle language
- Trust signals over adjectives — years operating, delivery coverage, MOQ

---


## Product Range

> **Source of truth**: `brand_assets/PRICE_LIST.md` and `brand_assets/Yum_Yums_Delight_Price_List_2026.xlsx`
> Never invent or estimate prices. Always read from those files.

**Categories**: Croissants · Muffins · Tarts · Danish · Tella Balls · Cronuts · Gourmet Cronuts

**Sizes**: Large / Medium / Small / Mini / Box (varies by product)

**Price range**: $0.83 (Plain Croissant Small) → $20.80 (Gourmet Cronut Box of 6) — all GST-inclusive

**Hero product**: Gourmet Cronuts — highest margin, most distinctive, use prominently in website and marketing

---


## Website Goals (priority order)

1. **Generate wholesale inquiries** — every page has one CTA: "Request a Wholesale Account" or "Get Pricing"
2. **Build brand credibility** — look like a serious, reliable supplier
3. **Online ordering** — future phase; for now, direct to email/inquiry form

**The 10-second test**: A café owner or distributor lands on this site and within 10 seconds knows:
- What you make
- That you supply businesses (not consumers)
- How to order
- Why you're worth their time

If that's not immediately obvious, something is wrong.

---

## Pages

### 1. Homepage
- Hero with tagline + CTA
- Product category teasers (6 categories)
- Trust signals: operating since Nov 2021, Sydney-wide delivery, $50 MOQ
- Lead into catalogue or wholesale page

### 2. Product Catalogue
- Organised by category: Croissants · Muffins · Tarts · Danishes · Cronuts · Tella Balls
- Each product: name, sizes available, price
- Clean layout — professional menu, not an e-commerce store
- Placeholder components where product photos will go (clearly marked)

### 3. Wholesale / Become a Stockist *(most important page)*
- MOQ: $50 per delivery
- Delivery days: Sunday–Friday
- Delivery area: Sydney-wide
- How ordering works: via email
- Payment terms: confirm with owner before publishing
- Inquiry form (see form fields below)

### 4. About
- Family business, operating since November 2021, Sydney-made
- B2B buyers want to know they're dealing with a real, reliable operation
- No Yennora address — "Western Sydney" is fine if location is mentioned

### 5. Contact
- Email: info.yumyumdelight@gmail.com
- Inquiry form
- Suburb: Western Sydney
- Expected response time

---

## Navigation
```
Logo · Products · Wholesale · About · Contact · [CTA Button: "Request a Wholesale Account"]
```

---

## Inquiry Form Fields
All forms must capture:
1. Business name
2. Contact name
3. Email
4. Phone
5. What they're interested in

---

## Technical Constraints
- Mobile-first, responsive
- Single `index.html` with inline styles (Tailwind CDN) unless instructed otherwise
- No Yennora address on any public page
- No stock photography — placeholder components (`https://placehold.co/`) where product images will go, clearly marked
- Tailwind CSS via CDN

---

## Deployment
- GitHub → Netlify sync is automatic
- Test all changes on localhost (`node serve.mjs` at `http://localhost:3000`) before committing
- Never `git push` or `git commit` unless user explicitly asks
