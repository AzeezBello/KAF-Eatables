import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import serving from "@/public/images/event-serving-small-chops.jpg";
import kids from "@/public/images/event-kids-eating.jpg";
import chef from "@/public/images/chef-grilling.jpg";
import { messages, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Container, Eyebrow, LinkButton } from "./ui";

export const cateringPoints = [
  "Birthdays, weddings, office events and house parties",
  "Trays, party packs and per-guest servings",
  "Live grilling and frying on site",
  "We travel: tell us the location and date",
];

/**
 * Catering pitch. `compact` renders the home page teaser that links to /catering;
 * the full version is used on the catering page itself.
 */
export function Catering({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-ink bg-grain py-14 text-white sm:py-20" aria-labelledby="catering-heading">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.75rem] ring-1 ring-white/10">
            <Image src={serving} alt="KAF Eatables staff serving trays of spring rolls and puff puff at an event" fill placeholder="blur" sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
            <Image src={kids} alt="Children enjoying KAF Eatables party packs at a celebration" fill placeholder="blur" sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
            <Image src={chef} alt="KAF Eatables chef grilling chicken on a charcoal grill at an event" fill placeholder="blur" sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
          </div>
        </div>

        <div>
          <Eyebrow tone="dark">Big orders welcome</Eyebrow>
          <h2 id="catering-heading" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Feeding a crowd? <span className="text-gold">That&apos;s our thing.</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/70">
            From intimate gatherings to full events, KAF Eatables shows up with fresh food, branded packs and a team that keeps the line moving.
          </p>
          {!compact && (
            <ul className="mt-6 space-y-3">
              {cateringPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-semibold text-white/85 sm:text-base">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={waLink(messages.catering)} size="lg">
              <WhatsAppIcon size={18} /> Plan my event on WhatsApp
            </LinkButton>
            {compact && (
              <LinkButton href="/catering" variant="outline" size="lg">
                Catering details <ArrowRight size={18} aria-hidden="true" />
              </LinkButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
