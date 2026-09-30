import type { Metadata } from "next";
import Image from "next/image";
import kitchen from "@/public/images/event-kitchen-setup.jpg";
import baskets from "@/public/images/puff-puff-chicken-baskets.jpg";
import { Gallery } from "@/components/gallery";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Container, Eyebrow, LinkButton } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "About KAF Eatables";
const description =
  "KAF Eatables is a Lagos food business making small chops, grilled and peppered chicken, puff puff, sandwiches and party packs fresh to order, with catering for events across Nigeria.";

export const metadata: Metadata = pageMetadata({ title: "About", absoluteTitle: title, description, path: "/about" });

const values = [
  { name: "Made fresh, every time", text: "Nothing sits around. Puff puff, spring rolls and chicken are fried and grilled for each order or event." },
  { name: "Packed properly", text: "Branded baskets, pouches and sealed packs keep food hot, tidy and easy to hand out." },
  { name: "Simple to order", text: "No app and no account. You send a WhatsApp message and a real person replies." },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ path: "/about", name: title, description, type: "AboutPage" })} />
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Good food, <span className="text-gold">good mood.</span> That is the whole idea.
          </>
        }
        intro={`${site.name} started with a simple promise: small chops and grills that taste like they were made for you, because they were. Today we cook for cravings, hangouts and events across ${site.city} and beyond.`}
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="bg-paper py-14 sm:py-20" aria-labelledby="values-heading">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src={kitchen} alt="KAF Eatables outdoor kitchen setup with pots and frying pans at an event" fill placeholder="blur" sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src={baskets} alt="KAF Eatables branded baskets filled with puff puff and peppered chicken" fill placeholder="blur" sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div>
            <Eyebrow>What we stand for</Eyebrow>
            <h2 id="values-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Small kitchen. Big standards.
            </h2>
            <ul className="mt-6 space-y-5">
              {values.map((v) => (
                <li key={v.name}>
                  <h3 className="font-black">{v.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/60">{v.text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/menu">See the menu</LinkButton>
              <LinkButton href="/catering" variant="ghost">
                Event catering
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <Gallery />
      <HowItWorks />
    </main>
  );
}
