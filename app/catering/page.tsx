import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import boats from "@/public/images/party-packs-boats.jpg";
import foilTray from "@/public/images/small-chops-foil-tray.jpg";
import sandwiches from "@/public/images/kaf-sandwiches.jpg";
import { Catering } from "@/components/catering";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Container, Eyebrow, LinkButton } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { messages, waLink } from "@/lib/site";

const title = "Event Catering in Lagos";
const description =
  "KAF Eatables caters birthdays, weddings, office events and parties in Lagos and can travel for events across Nigeria. Small chops trays, party packs, live grills and branded packaging. Plan your event on WhatsApp.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/catering" });

const formats = [
  {
    image: foilTray,
    alt: "A foil tray of KAF Eatables mixed small chops ready for an event",
    name: "Trays for sharing",
    text: "Mixed small chops trays sized for meetings, family gatherings and office lunches.",
  },
  {
    image: boats,
    alt: "Individual KAF Eatables party packs with puff puff, sausage, chicken and corn",
    name: "Per-guest party packs",
    text: "Individually packed servings so every guest gets the same portion, hot and fresh.",
  },
  {
    image: sandwiches,
    alt: "Sealed KAF Eatables branded triangle sandwich packs",
    name: "Branded packs",
    text: "Sealed, branded sandwich and snack packs for conferences, trainings and giveaways.",
  },
];

const howToBook = [
  "Send us the event date, location and estimated number of guests on WhatsApp.",
  "Tell us what you would like from the menu, or ask us to suggest a package.",
  "We confirm the quote, delivery or on-site setup, and the timing.",
];

export default function CateringPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ path: "/catering", name: `${title} | KAF Eatables`, description })} />
      <PageHeader
        eyebrow="Catering"
        title={
          <>
            Event catering that <span className="text-gold">feeds the whole party.</span>
          </>
        }
        intro="Birthdays, weddings, office events and house parties. KAF Eatables brings fresh small chops, grills and party packs to your venue in Lagos, and travels for events across Nigeria."
        crumbs={[{ name: "Catering", href: "/catering" }]}
      >
        <LinkButton href={waLink(messages.catering)} size="lg">
          <WhatsAppIcon size={18} /> Plan my event on WhatsApp
        </LinkButton>
      </PageHeader>

      <section className="bg-paper py-14 sm:py-20" aria-labelledby="formats-heading">
        <Container>
          <Eyebrow>What we bring</Eyebrow>
          <h2 id="formats-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Three ways to serve a crowd.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {formats.map((f) => (
              <article key={f.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
                <div className="relative aspect-[4/3]">
                  <Image src={f.image} alt={f.alt} fill placeholder="blur" sizes="(min-width: 640px) 30vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black">{f.name}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-ink/60">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Catering />

      <section className="bg-white py-14 sm:py-20" aria-labelledby="booking-heading">
        <Container className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Booking</Eyebrow>
            <h2 id="booking-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              How to book KAF for your event.
            </h2>
            <p className="mt-3 text-ink/60">Everything is arranged in one WhatsApp conversation. The earlier you reach out, the easier it is to lock in your date.</p>
          </div>
          <ol className="space-y-3">
            {howToBook.map((step, i) => (
              <li key={step} className="flex gap-3 rounded-2xl bg-paper p-4 ring-1 ring-ink/5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-black text-gold">{i + 1}</span>
                <p className="text-sm leading-6 text-ink/75 sm:text-base">{step}</p>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 text-sm font-semibold text-ink/70">
              <Check size={16} className="text-gold-deep" aria-hidden="true" /> No deposit is taken on this website. Payment details are shared in chat.
            </li>
          </ol>
        </Container>
      </section>
    </main>
  );
}
