"use client";

import { ShoppingBag } from "lucide-react";
import { money } from "@/lib/site";
import { useCart } from "./cart-context";

/** Sticky bottom bar on phones: quick access to the order from any page. */
export function OrderBar() {
  const { count, total, setOpen, open } = useCart();
  if (open) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-safe md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-14 w-full items-center justify-between rounded-full bg-ink px-5 text-white shadow-2xl ring-1 ring-white/10"
      >
        <span className="inline-flex items-center gap-2 font-black">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-ink">
            <ShoppingBag size={16} aria-hidden="true" />
          </span>
          {count ? `View order · ${count} item${count === 1 ? "" : "s"}` : "Start your order"}
        </span>
        {count > 0 && <span className="font-black text-gold">{money(total)}</span>}
      </button>
    </div>
  );
}
