"use client";

import { useMemo, useState } from "react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "./product-card";

type Cat = (typeof categories)[number];

/** Category filter plus the full product grid. The page that renders it owns the heading. */
export function Menu() {
  const [cat, setCat] = useState<Cat>("All");
  const shown = useMemo(() => (cat === "All" ? products : products.filter((p) => p.category === cat)), [cat]);

  return (
    <div>
      {/* Category chips: sticky under the header, horizontally scrollable on phones */}
      <div className="sticky top-16 z-20 -mx-4 bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:top-[72px]">
        <div role="tablist" aria-label="Menu categories" className="no-scrollbar flex gap-2 overflow-x-auto">
          {categories.map((c) => {
            const active = c === cat;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-ink text-gold shadow-soft" : "bg-white text-ink ring-1 ring-ink/10 hover:bg-gold-soft"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4" role="tabpanel">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
