import Image from "next/image";
import { ArrowRight, MapPin, PartyPopper, Truck } from "lucide-react";
import platter from "@/public/images/small-chops-platter.jpg";
import kebab from "@/public/images/chicken-kebab-grill.jpg";
import { messages, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Container, LinkButton } from "./ui";

const perks = [
  { icon: Truck, label: "Delivery across Lagos" },
  { icon: PartyPopper, label: "Event catering" },
  { icon: MapPin, label: "We travel for events" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink bg-grain text-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative grid items-center gap-10 py-12 sm:py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] md:gap-12 md:py-24">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-gold">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" /> Small chops • Grills • Party packs
          </p>
          <h1 className="mt-6 text-[2.75rem] font-black leading-[1] tracking-[-.035em] sm:text-6xl md:text-7xl">
            Good food,
            <br />
            <span className="text-gold">good mood.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            Freshly made small chops, peppered chicken, puff puff, sandwiches and party packs from KAF Eatables in Lagos.
            Pick what you want, send the order on WhatsApp, and we take it from there.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/menu" size="lg">
              See the menu <ArrowRight size={18} aria-hidden="true" />
            </LinkButton>
            <LinkButton href={waLink(messages.enquiry)} variant="outline" size="lg">
              <WhatsAppIcon size={18} /> Chat on WhatsApp
            </LinkButton>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/65">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon size={17} className="text-gold" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Bento: looping clip + two real photos. Zero-min tracks keep intrinsic media sizes from widening the page. */}
        <div className="animate-fade-up grid min-w-0 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] grid-rows-2 gap-3 [animation-delay:120ms] sm:gap-4">
          <div className="relative row-span-2 min-h-64 overflow-hidden rounded-[1.75rem] bg-ink-soft shadow-soft ring-1 ring-white/10">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/kaf-grill-loop.jpg"
              aria-label="Grilled chicken being basted with sauce on the KAF grill"
            >
              <source src="/videos/kaf-grill-loop.mp4" type="video/mp4" />
            </video>
            <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-gold backdrop-blur">
              Fresh off the grill
            </span>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-soft ring-1 ring-white/10">
            <Image
              src={platter}
              alt="KAF Eatables small chops platter with spring rolls, puff puff, samosa and peppered chicken"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 22vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-soft ring-1 ring-white/10">
            <Image
              src={kebab}
              alt="KAF Eatables chicken kebab skewers cooking on a charcoal grill"
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 22vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
