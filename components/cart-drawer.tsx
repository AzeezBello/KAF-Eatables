"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import logoMark from "@/public/logo-mark.png";
import { money, waLink } from "@/lib/site";
import { useCart } from "./cart-context";
import { WhatsAppIcon } from "./icons";
import { LinkButton } from "./ui";

type Mode = "Delivery" | "Pickup";

const inputClass = "h-11 w-full rounded-xl border border-ink/10 bg-white px-3 text-sm outline-none focus:border-gold";

export function CartDrawer() {
  const { open, setOpen, lines, count, total, add, remove, clear } = useCart();
  const [name, setName] = useState("");
  const [mode, setMode] = useState<Mode>("Delivery");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, focus the close button and support Escape while open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  const href = useMemo(() => {
    if (!lines.length) return "#";
    const items = lines.map((l) => `• ${l.product.name} x${l.qty} — ${money(l.product.price * l.qty)}`).join("\n");
    const details = [
      name.trim() && `Name: ${name.trim()}`,
      `Delivery or pickup: ${mode}`,
      mode === "Delivery" && address.trim() && `Address: ${address.trim()}`,
      note.trim() && `Note: ${note.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");
    return waLink(
      `Hello KAF Eatables 👋\n\nI'd like to place an order:\n${items}\n\nSubtotal: ${money(total)}\n\n${details}\n\nPlease confirm availability, delivery fee and payment details. Thank you!`,
    );
  }, [lines, total, name, mode, address, note]);

  if (!open) return null;

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex justify-end bg-ink/60 backdrop-blur-[2px]" onClick={() => setOpen(false)}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(e) => e.stopPropagation()}
        className="animate-slide-in flex h-full w-full max-w-md flex-col bg-paper shadow-2xl sm:rounded-l-[2rem]"
      >
        <header className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <div>
            <h2 id="cart-title" className="text-xl font-black">
              Your order
            </h2>
            <p className="text-sm text-ink/55">
              {count ? `${count} item${count === 1 ? "" : "s"} · review, then send on WhatsApp` : "Nothing added yet"}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10"
            aria-label="Close order"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <ShoppingBag size={28} aria-hidden="true" />
              </span>
              <p className="mt-4 font-black">Your order is empty</p>
              <p className="mt-1 text-sm text-ink/55">Add something delicious from the menu.</p>
              <LinkButton href="/menu" variant="ink" className="mt-6" onClick={() => setOpen(false)}>
                Browse the menu
              </LinkButton>
            </div>
          ) : (
            <>
              <ul className="space-y-3">
                {lines.map(({ product, qty }) => (
                  <li key={product.id} className="flex gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink/5">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-ink">
                      {product.image ? (
                        <Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" />
                      ) : (
                        <Image
                          src={logoMark}
                          alt={`${product.name} (KAF Eatables)`}
                          width={48}
                          height={27}
                          className="absolute left-1/2 top-1/2 h-6 w-auto -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="truncate font-bold">{product.name}</p>
                        <p className="shrink-0 font-black">{money(product.price * qty)}</p>
                      </div>
                      <p className="text-xs text-ink/50">{money(product.price)} each</p>
                      <div className="mt-2 inline-flex h-9 items-center rounded-full bg-ink text-white">
                        <button type="button" onClick={() => remove(product.id)} className="h-9 w-9 hover:text-gold" aria-label={`Remove one ${product.name}`}>
                          <Minus size={14} className="mx-auto" aria-hidden="true" />
                        </button>
                        <span className="min-w-6 text-center text-sm font-black">{qty}</span>
                        <button type="button" onClick={() => add(product.id)} className="h-9 w-9 hover:text-gold" aria-label={`Add one ${product.name}`}>
                          <Plus size={14} className="mx-auto" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-black uppercase tracking-[.18em] text-gold-deep">Your details (optional)</p>
                <label className="sr-only" htmlFor="order-name">
                  Your name
                </label>
                <input id="order-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" className={inputClass} />
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Delivery or pickup">
                  {(["Delivery", "Pickup"] as Mode[]).map((m) => (
                    <button
                      key={m}
                      type="button"
                      role="radio"
                      aria-checked={mode === m}
                      onClick={() => setMode(m)}
                      className={`h-11 rounded-xl text-sm font-bold ring-1 transition ${mode === m ? "bg-ink text-gold ring-ink" : "bg-white text-ink ring-ink/10"}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                {mode === "Delivery" && (
                  <>
                    <label className="sr-only" htmlFor="order-address">
                      Delivery address
                    </label>
                    <input
                      id="order-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Delivery address"
                      autoComplete="street-address"
                      className={inputClass}
                    />
                  </>
                )}
                <label className="sr-only" htmlFor="order-note">
                  Note for KAF
                </label>
                <textarea
                  id="order-note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any note? e.g. extra pepper, event time"
                  rows={2}
                  className="w-full resize-none rounded-xl border border-ink/10 bg-white px-3 py-2.5 text-sm outline-none focus:border-gold"
                />
              </div>
            </>
          )}
        </div>

        {lines.length > 0 && (
          <footer className="border-t border-ink/10 bg-white px-5 pt-4 pb-safe">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-ink/60">Subtotal</span>
              <span className="text-2xl font-black">{money(total)}</span>
            </div>
            <LinkButton href={href} variant="wa" size="lg" className="w-full">
              <WhatsAppIcon size={20} /> Send order on WhatsApp
            </LinkButton>
            <div className="mt-2 flex items-center justify-between text-xs text-ink/50">
              <span>KAF confirms delivery fee and final total in chat.</span>
              <button type="button" onClick={clear} className="inline-flex items-center gap-1 font-bold hover:text-red-600">
                <Trash2 size={13} aria-hidden="true" /> Clear
              </button>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
