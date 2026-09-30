import type { Metadata } from "next";
import { Instagram, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Container, Eyebrow, LinkButton } from "@/components/ui";
import { webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { messages, site, waLink } from "@/lib/site";

const title = "Contact";
const description =
  "Contact KAF Eatables in Lagos. Order or ask a question on WhatsApp, call 0905 355 1681 or 0812 526 1879, or find us on Instagram.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={webPageSchema({ path: "/contact", name: `${title} | KAF Eatables`, description, type: "ContactPage" })} />
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Talk to us. <span className="text-gold">We reply fast.</span>
          </>
        }
        intro="Orders, catering quotes and questions all happen on WhatsApp. Prefer to call? Both numbers below reach the KAF team."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      >
        <LinkButton href={waLink(messages.enquiry)} variant="wa" size="lg">
          <WhatsAppIcon size={18} /> Message us on WhatsApp
        </LinkButton>
      </PageHeader>

      <section className="bg-paper py-14 sm:py-20" aria-labelledby="ways-heading">
        <Container>
          <Eyebrow>Ways to reach us</Eyebrow>
          <h2 id="ways-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Pick whichever is easiest.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-gold">
                <WhatsAppIcon size={20} />
              </span>
              <h3 className="mt-4 font-black">WhatsApp</h3>
              <p className="mt-1 text-sm text-ink/60">Fastest way to order or get a quote.</p>
              <a href={waLink(messages.enquiry)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-gold-deep hover:underline">
                +{site.whatsappNumber}
              </a>
            </article>

            {site.phones.map((p) => (
              <article key={p.href} className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-gold">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-black">Call</h3>
                <p className="mt-1 text-sm text-ink/60">Speak to the team directly.</p>
                <a href={p.href} className="mt-3 inline-block font-bold text-gold-deep hover:underline">
                  {p.label}
                </a>
              </article>
            ))}

            <article className="rounded-3xl bg-white p-6 ring-1 ring-ink/5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-gold">
                <Instagram size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-black">Instagram</h3>
              <p className="mt-1 text-sm text-ink/60">Photos from recent orders and events.</p>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-gold-deep hover:underline">
                View our page
              </a>
            </article>
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-3xl bg-ink p-6 text-white">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold text-ink">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-black">Based in {site.city}, {site.country}</p>
              <p className="text-sm text-white/65">We deliver across {site.city} and travel for catering events. Delivery fees are confirmed in chat.</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
