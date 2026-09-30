import type { Metadata } from "next";
import { Catering } from "@/components/catering";
import { FeaturedMenu } from "@/components/featured-menu";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = `${site.name} | Small Chops, Grills & Party Packs in Lagos`;

export const metadata: Metadata = pageMetadata({ title, absoluteTitle: title, description: site.description, path: "/" });

export default function HomePage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ path: "/", name: title, description: site.description })} />
      <Hero />
      <FeaturedMenu />
      <HowItWorks />
      <Catering compact />
      <Gallery compact />
    </main>
  );
}
