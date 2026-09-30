"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import logoMark from "@/public/logo-mark.png";
import { money } from "@/lib/site";
import type { Product } from "@/lib/products";
import { useCart } from "./cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { qtyOf, add, remove } = useCart();
  const qty = qtyOf(product.id);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-grain text-gold">
            <Image src={logoMark} alt="" width={96} height={54} className="h-12 w-auto opacity-90" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold/70">Made to order</span>
          </div>
        )}
        {product.popular && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-ink">
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-ink/45">{product.category}</p>
        <h3 className="mt-1 text-base font-black leading-tight sm:text-lg">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-ink/60">{product.description}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <span className="text-lg font-black text-gold-deep">{money(product.price)}</span>
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => add(product.id)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-bold text-white transition hover:bg-gold hover:text-ink"
              aria-label={`Add ${product.name} to order`}
            >
              <Plus size={16} /> Add
            </button>
          ) : (
            <div className="inline-flex h-10 items-center rounded-full bg-ink text-white" role="group" aria-label={`${product.name} quantity`}>
              <button type="button" onClick={() => remove(product.id)} className="h-10 w-10 rounded-full hover:text-gold" aria-label="Remove one">
                <Minus size={16} className="mx-auto" />
              </button>
              <span className="min-w-6 text-center text-sm font-black" aria-live="polite">{qty}</span>
              <button type="button" onClick={() => add(product.id)} className="h-10 w-10 rounded-full hover:text-gold" aria-label="Add one">
                <Plus size={16} className="mx-auto" />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
