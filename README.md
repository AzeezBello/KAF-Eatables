# KAF Eatables

WhatsApp-first ordering site for KAF Eatables: small chops, grills, party packs and sandwiches in Lagos, plus event catering. Customers build an order on the site and send it as a pre-filled WhatsApp message. There is no checkout, payment gateway or account.

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 and TypeScript. Every page is statically prerendered.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public origin, e.g. `https://kafeatables.com`. Used for canonical URLs, Open Graph URLs, the sitemap, robots.txt and structured data. Defaults to `https://kafeatables.com`; set it to the real domain before launch. |

## Pages

| Route | Purpose | Title |
| --- | --- | --- |
| `/` | Hero, customer favourites, how ordering works, catering and kitchen teasers | KAF Eatables \| Small Chops, Grills & Party Packs in Lagos |
| `/menu` | Full menu with category filter and add-to-order controls | Menu \| KAF Eatables |
| `/catering` | Catering formats, what is included, how to book | Event Catering in Lagos \| KAF Eatables |
| `/about` | Story, standards, behind-the-scenes photos and kitchen video | About KAF Eatables |
| `/contact` | WhatsApp, phone numbers, Instagram, location | Contact \| KAF Eatables |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | Crawler and LLM discovery files | |

Each page has one `<h1>`, its own meta description, a canonical URL, Open Graph and Twitter cards with the share image, breadcrumbs (visible and as `BreadcrumbList` JSON-LD) and a `WebPage` JSON-LD block. The root layout adds `FoodEstablishment`/`LocalBusiness` and `WebSite` JSON-LD; the menu page adds a schema.org `Menu` with every item and price.

## Structure

| Path | What it holds |
| --- | --- |
| `app/layout.tsx` | Root layout: default metadata, viewport, business JSON-LD, header, footer, cart drawer, mobile order bar |
| `app/*/page.tsx` | One folder per route (see Pages) |
| `app/not-found.tsx` | Branded 404 (no-index) |
| `app/sitemap.ts`, `app/robots.ts` | Generated `sitemap.xml` and `robots.txt` |
| `app/globals.css` | Tailwind import, brand tokens (`@theme`), small utilities |
| `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg`, `app/twitter-image.jpg` | Favicon, home-screen icon and social share images, generated from the logo |
| `components/` | Header, hero, page header with breadcrumbs, menu, product card, featured menu, catering, gallery, how-it-works, footer, cart drawer, order bar, JSON-LD helper |
| `components/cart-context.tsx`, `lib/cart-store.ts` | Cart state shared across pages, persisted in `localStorage` |
| `lib/products.ts` | Menu items, categories, prices and photo imports |
| `lib/site.ts` | Site URL, phone numbers, WhatsApp number, Instagram link, nav, message templates |
| `lib/seo.ts` | `pageMetadata()` helper that builds title, description, canonical and share tags per page |
| `lib/schema.ts` | schema.org builders (business, breadcrumbs, menu, web page) |
| `public/images/` | Real KAF food and event photos, compressed to 1200px max |
| `public/videos/` | Hero loop (`kaf-grill-loop.mp4`) and kitchen clip (`kaf-frying-samosa.mp4`) with poster frames |
| `public/logo.jpg`, `public/logo.png`, `public/logo-mark.png` | Original logo, transparent cut-out, mark only |
| `public/llms.txt` | Plain-text overview of the site for LLM crawlers |

## Brand

Colours come from the logo: black `#0a0a0a`, gold `#e0a820` and white, with a warm off-white `#faf6ee` for light sections. They are defined once in `app/globals.css` under `@theme` and used as Tailwind utilities such as `bg-ink`, `text-gold`, `bg-paper` and `text-gold-deep`. The tagline "Good food, good mood" from the logo is the home page headline. Fonts use the system UI stack, so no external font files are loaded.

## Editing content

- **Menu**: edit `lib/products.ts`. Each item has a name, category, price, description and an optional photo imported from `public/images/`. Items without a photo (currently the chicken burger and the two shawarmas) show the branded placeholder. Prices for items added in the redesign are estimates and should be confirmed with KAF.
- **Contact details and nav**: `lib/site.ts`.
- **Photos and videos**: drop new files into `public/images/` or `public/videos/` and import them where needed. Keep photos around 1200px on the long edge; Next.js serves resized AVIF/WebP versions automatically.

## Production notes

- Browser source maps are disabled and the `X-Powered-By` header is removed in `next.config.ts`.
- `public/videos/kaf-frying-samosa.mp4` is about 36 MB. It only downloads when a visitor presses play, but it should be re-encoded (for example 720p H.264 at a lower bitrate) before launch.
