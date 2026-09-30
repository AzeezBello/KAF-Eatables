import Image from "next/image";
import Link from "next/link";
import { Instagram, Phone } from "lucide-react";
import logo from "@/public/logo.png";
import { messages, nav, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";
import { Container, LinkButton } from "./ui";

export function Footer() {
  return (
    <footer className="bg-ink bg-grain text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" aria-label="KAF Eatables home">
            <Image src={logo} alt="KAF Eatables logo" className="h-14 w-auto" sizes="160px" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
            Small chops, grills, party packs and sandwiches made fresh in {site.city}. We cater for events and are available to travel.
          </p>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-white/80 transition hover:text-gold">
                Home
              </Link>
            </li>
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Call or WhatsApp</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-flex items-center gap-2 text-white/80 transition hover:text-gold">
                  <Phone size={15} aria-hidden="true" /> {p.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/80 transition hover:text-gold">
                <Instagram size={15} aria-hidden="true" /> Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-gold">Order direct</p>
          <LinkButton href={waLink(messages.enquiry)} variant="wa" className="mt-4 w-full">
            <WhatsAppIcon size={17} /> Message us
          </LinkButton>
          <p className="mt-3 text-xs leading-5 text-white/45">No app, no account. The whole conversation happens on WhatsApp.</p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. {site.tagline}.
          </span>
          <span>
            {site.city}, {site.country}
          </span>
        </Container>
      </div>
    </footer>
  );
}
