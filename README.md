# KAF Eatables

WhatsApp-first ordering site for KAF Eatables: small chops, grills, party packs and sandwiches in Lagos, plus event catering. Customers build an order on the page and send it as a pre-filled WhatsApp message. There is no checkout, payment gateway or account.

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 and TypeScript.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

Optional: set `NEXT_PUBLIC_SITE_URL` (for example `https://kafeatables.com`) so Open Graph image URLs are absolute when the site is shared.

## Structure

| Path | What it holds |
| --- | --- |
| `app/layout.tsx` | Root layout, SEO metadata, viewport, cart provider |
| `app/page.tsx` | Composes the sections of the single-page site |
| `app/globals.css` | Tailwind import, brand tokens (`@theme`), small utilities |
| `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg` | Favicon, home-screen icon and social share image, generated from the logo |
| `components/header.tsx` | Sticky black header with logo, nav, mobile menu and order button |
| `components/hero.tsx` | Headline, calls to action and a bento of the looping clip plus two photos |
| `components/menu.tsx`, `components/product-card.tsx` | Category filter and product grid with add/quantity controls |
| `components/about.tsx` | "How it works" in three steps |
| `components/catering.tsx` | Event catering pitch with event photos and a prefilled WhatsApp link |
| `components/gallery.tsx` | Behind-the-scenes photos and the click-to-play kitchen video |
| `components/footer.tsx` | Contact numbers, Instagram, WhatsApp button |
| `components/cart-drawer.tsx` | Slide-in order review with optional name, delivery/pickup, address and note |
| `components/order-bar.tsx` | Sticky bottom order button on phones |
| `components/cart-context.tsx`, `lib/cart-store.ts` | Cart state shared across the page, persisted in `localStorage` |
| `lib/products.ts` | Menu items, categories, prices and photo imports |
| `lib/site.ts` | Phone numbers, WhatsApp number, Instagram link, message templates, money formatter |
| `public/images/` | Real KAF food and event photos (compressed to 1200px max) |
| `public/videos/` | Hero loop (`kaf-grill-loop.mp4`) and kitchen clip (`kaf-frying-samosa.mp4`) with poster frames |
| `public/logo.jpg`, `public/logo.png`, `public/logo-mark.png` | Original logo, transparent cut-out, mark only |

## Brand

Colours come from the logo: black `#0a0a0a`, gold `#e0a820` and white, with a warm off-white `#faf6ee` for light sections. They are defined once in `app/globals.css` under `@theme` and used as Tailwind utilities such as `bg-ink`, `text-gold`, `bg-paper` and `text-gold-deep`. The tagline "Good food, good mood" from the logo is the hero headline.

## Editing content

- **Menu**: edit `lib/products.ts`. Each item has a name, category, price, description and an optional photo imported from `public/images/`. Items without a photo (currently the burger and shawarmas) show the branded placeholder. Prices for items added in the redesign are estimates and should be confirmed with KAF.
- **Contact details**: phone numbers, the WhatsApp number and the Instagram link live in `lib/site.ts`, as do the prefilled WhatsApp message templates.
- **Photos and videos**: drop new files into `public/images/` or `public/videos/` and import them where needed. Keep photos around 1200px on the long edge; Next.js serves resized AVIF/WebP versions automatically.

## Notes

- `public/videos/kaf-frying-samosa.mp4` is about 36 MB. It is only downloaded when a visitor presses play, but it should be re-encoded (for example to 720p H.264 at a lower bitrate) before launch to save bandwidth.
- Fonts use the system UI stack, so the site loads no external font files.
