import type { Metadata } from "next";
import { site } from "./site";

export const shareImageAlt =
  "KAF Eatables logo on black: a gold frying pan with spoon, knife and spatula, and the tagline Good food, good mood.";

type PageMeta = {
  /** Page-specific title. Rendered as "<title> | KAF Eatables" unless `absoluteTitle` is set. */
  title: string;
  absoluteTitle?: string;
  description: string;
  /** Path used for the canonical URL and Open Graph URL, e.g. "/menu". */
  path: string;
  noIndex?: boolean;
};

/** Builds complete per-page metadata: title, description, canonical, Open Graph and Twitter cards. */
export function pageMetadata({ title, absoluteTitle, description, path, noIndex = false }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ?? `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_NG",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: shareImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image.jpg", alt: shareImageAlt }],
    },
  };
}
