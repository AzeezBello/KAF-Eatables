import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Menu } from "@/components/menu";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui";
import { products } from "@/lib/products";
import { menuSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const title = "Menu";
const description =
  "The full KAF Eatables menu: small chops platters, puff puff, spring rolls, peppered and grilled chicken, party packs, sandwiches and shawarma. Prices in naira. Order on WhatsApp.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/menu" });

export default function MenuPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ path: "/menu", name: `${title} | KAF Eatables`, description })} />
      <JsonLd data={menuSchema()} />
      <PageHeader
        eyebrow="The menu"
        title="Pick your craving."
        intro={`${products.length} freshly made items across small chops, grills, party packs and sandwiches. Add what you want, then send the order to us on WhatsApp. We confirm availability, delivery and the final total in chat.`}
        crumbs={[{ name: "Menu", href: "/menu" }]}
      />
      <section className="bg-paper pb-14 pt-4 sm:pb-20" aria-label="Menu items">
        <Container>
          <Menu />
        </Container>
      </section>
    </main>
  );
}
