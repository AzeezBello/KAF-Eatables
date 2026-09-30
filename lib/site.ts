/**
 * Public site URL used for canonical tags, sitemap, robots and structured data.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment to the live domain.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafeatables.com").replace(/\/$/, "");

export const site = {
  name: "KAF Eatables",
  tagline: "Good food, good mood",
  description:
    "KAF Eatables makes fresh small chops, peppered chicken, puff puff, sandwiches and party packs in Lagos, with event catering across Nigeria. Order directly on WhatsApp.",
  city: "Lagos",
  country: "Nigeria",
  countryCode: "NG",
  whatsappNumber: "2349053551681",
  phones: [
    { label: "0905 355 1681", e164: "+2349053551681", href: "tel:+2349053551681" },
    { label: "0812 526 1879", e164: "+2348125261879", href: "tel:+2348125261879" },
  ],
  instagram: "https://www.instagram.com/p/Cq7YzkZqvhF/?img_index=1",
  ceo: { name: "Miss Kofoworola Laguda", title: "CEO/MD" },
} as const;

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const money = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const messages = {
  enquiry: "Hello KAF Eatables 👋 I want to make an enquiry.",
  catering:
    "Hello KAF Eatables 👋 I need catering for an event.\n\nEvent type:\nEvent date:\nLocation:\nNumber of guests:\nWhat I'd like:\n",
} as const;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
