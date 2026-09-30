import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import teamFrying from "@/public/images/team-frying.jpg";
import puffPuffTeam from "@/public/images/team-frying-puff-puff.jpg";
import eventCooking from "@/public/images/event-cooking.jpg";
import skewers from "@/public/images/chicken-skewers-pile.jpg";
import pouches from "@/public/images/kaf-branded-pouches.jpg";
import puffPuff from "@/public/images/puff-puff-closeup.jpg";
import { Container, Eyebrow, LinkButton } from "./ui";

const shots: { src: StaticImageData; alt: string; className?: string }[] = [
  { src: puffPuffTeam, alt: "KAF Eatables cook frying a fresh batch of puff puff in a large pan", className: "row-span-2" },
  { src: skewers, alt: "A pile of freshly grilled KAF Eatables chicken skewers" },
  { src: pouches, alt: "Two KAF Eatables branded packaging pouches being sealed" },
  { src: eventCooking, alt: "KAF Eatables cooking live at an outdoor event kitchen" },
  { src: puffPuff, alt: "Close-up of golden KAF Eatables puff puff" },
  { src: teamFrying, alt: "Two members of the KAF Eatables team frying small chops outdoors", className: "col-span-2" },
];

/**
 * Behind-the-scenes photos. `compact` renders a three-photo strip for the home page
 * that links to the about page, where the full grid and kitchen video live.
 */
export function Gallery({ compact = false }: { compact?: boolean }) {
  const visible = compact ? shots.slice(1, 4) : shots;
  return (
    <section className="bg-paper py-14 sm:py-20" aria-labelledby="kitchen-heading">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Behind the scenes</Eyebrow>
            <h2 id="kitchen-heading" className="mt-2 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Straight from the KAF kitchen.
            </h2>
            <p className="mt-3 text-ink/60">Everything is fried, grilled and packed fresh. Here is a look at how it happens.</p>
          </div>
          {compact && (
            <LinkButton href="/about" variant="ink" className="self-start sm:self-auto">
              Our story <ArrowRight size={16} aria-hidden="true" />
            </LinkButton>
          )}
        </div>

        {compact ? (
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {visible.map((s) => (
              <div key={s.alt} className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                <Image src={s.src} alt={s.alt} fill placeholder="blur" sizes="(min-width: 1024px) 30vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-4 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.6fr)]">
            {/* Long-form clip: click to play so the file is only downloaded on demand. */}
            <div className="relative aspect-[9/16] max-h-[640px] overflow-hidden rounded-[1.75rem] bg-ink shadow-soft md:aspect-auto md:max-h-none">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                playsInline
                preload="none"
                poster="/videos/kaf-frying-samosa.jpg"
                aria-label="Samosas frying in a large wok at the KAF Eatables kitchen"
              >
                <source src="/videos/kaf-frying-samosa.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {visible.map((s) => (
                <div key={s.alt} className={`relative min-h-40 overflow-hidden rounded-[1.25rem] ${s.className ?? ""}`}>
                  <Image src={s.src} alt={s.alt} fill placeholder="blur" sizes="(min-width: 768px) 20vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
