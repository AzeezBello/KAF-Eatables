"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, ShoppingBag, X } from "lucide-react";
import logo from "@/public/logo.png";
import { messages, nav, waLink } from "@/lib/site";
import { useCart } from "./cart-context";
import { WhatsAppIcon } from "./icons";
import { LinkButton } from "./ui";

export function Header() {
  const { count, setOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[72px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="KAF Eatables home" onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="KAF Eatables logo" priority className="h-9 w-auto md:h-11" sizes="120px" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Primary">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`transition hover:text-gold ${isActive(l.href) ? "text-gold" : "text-white/80"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton href={waLink(messages.enquiry)} variant="outline" className="hidden sm:inline-flex">
            <WhatsAppIcon size={16} /> Chat
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-flex h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-black text-ink transition hover:bg-gold-bright"
            aria-label={`Open your order, ${count} item${count === 1 ? "" : "s"}`}
          >
            <ShoppingBag size={18} aria-hidden="true" />
            <span className="hidden sm:inline">Order</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-ink px-1.5 text-xs font-black text-gold ring-2 ring-ink">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <MenuIcon size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-fade-in border-t border-white/10 bg-ink px-4 pb-6 pt-2 md:hidden">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`block border-b border-white/10 py-4 text-lg font-bold ${isActive(l.href) ? "text-gold" : "text-white/90"}`}
            >
              {l.label}
            </Link>
          ))}
          <LinkButton href={waLink(messages.enquiry)} variant="wa" size="lg" className="mt-5 w-full">
            <WhatsAppIcon size={18} /> Chat with KAF on WhatsApp
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
