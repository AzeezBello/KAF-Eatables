import type { Metadata } from "next";
import Image from "next/image";
import ceo from "@/public/images/KAF-CEO.jpg";
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

      <section className="bg-white py-14 sm:py-20" aria-labelledby="ceo-heading">
        <Container className="grid items-center gap-10 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] md:gap-14">
          <div className="relative mx-auto aspect-[6/7] w-full max-w-md overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink/5 md:mx-0">
            <Image
              src={ceo}
              alt="Miss Kofoworola Laguda, CEO and MD of KAF Eatables, turning grilled chicken with tongs at a live event"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-gold backdrop-blur">
              {site.ceo.name} · {site.ceo.title}
            </span>
          </div>
          <div>
            <Eyebrow>Meet the CEO</Eyebrow>
            <h2 id="ceo-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              {site.ceo.name}, <span className="text-gold-deep">still on the grill at every event.</span>
            </h2>
            <p className="mt-4 text-ink/70 leading-7">
              KAF Eatables is run hands-on by its {site.ceo.title}, {site.ceo.name}. She is not behind a desk when an order goes out. You will find her at the grill, turning the chicken, checking the pepper and making sure every tray leaves the way it should.
            </p>
            <p className="mt-3 text-ink/70 leading-7">
              That is the standard the whole team works to: cook it fresh, taste it, pack it properly, and treat every customer like family.
            </p>
            <LinkButton href="/catering" className="mt-8">
              Book KAF for your event
            </LinkButton>
          </div>
        </Container>
      </section>

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
