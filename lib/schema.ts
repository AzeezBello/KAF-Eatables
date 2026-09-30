import { categories, products } from "./products";
import { absoluteUrl, site } from "./site";

/** schema.org graph shared by every page: the business itself and the website. */
export function businessSchema() {
  const id = absoluteUrl("/#business");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "@id": id,
        name: site.name,
        slogan: site.tagline,
        description: site.description,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/logo.jpg"),
        image: [absoluteUrl("/opengraph-image.jpg"), absoluteUrl("/images/small-chops-platter.jpg")],
        telephone: site.phones[0].e164,
        servesCuisine: "Nigerian",
        priceRange: "₦₦",
        currenciesAccepted: "NGN",
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.countryCode,
        },
        areaServed: [
          { "@type": "City", name: site.city },
          { "@type": "Country", name: site.country },
        ],
        hasMenu: absoluteUrl("/menu"),
        sameAs: [site.instagram],
        contactPoint: site.phones.map((p) => ({
          "@type": "ContactPoint",
          telephone: p.e164,
          contactType: "customer service",
          availableLanguage: "en",
        })),
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: site.name,
        publisher: { "@id": id },
        inLanguage: "en-NG",
      },
    ],
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export function menuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": absoluteUrl("/menu#menu"),
    name: `${site.name} menu`,
    url: absoluteUrl("/menu"),
    inLanguage: "en-NG",
    hasMenuSection: categories
      .filter((c) => c !== "All")
      .map((c) => ({
        "@type": "MenuSection",
        name: c,
        hasMenuItem: products
          .filter((p) => p.category === c)
          .map((p) => ({
            "@type": "MenuItem",
            name: p.name,
            description: p.description,
            ...(p.image ? { image: absoluteUrl(p.image.src) } : {}),
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "NGN",
              availability: "https://schema.org/InStock",
            },
          })),
      })),
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string; type?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "WebPage",
    "@id": absoluteUrl(`${opts.path}#page`),
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#business") },
    inLanguage: "en-NG",
  };
}
