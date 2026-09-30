"use client";

import { createContext, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { cartStore } from "@/lib/cart-store";
import { productById, type Product } from "@/lib/products";

export type CartLine = { product: Product; qty: number };

type CartValue = {
  lines: CartLine[];
  count: number;
  total: number;
  qtyOf: (id: number) => number;
  add: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // The cart lives in a tiny external store backed by localStorage, so it
  // survives reloads and hydrates without a state update inside an effect.
  const cart = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartValue>(() => {
    const lines: CartLine[] = [];
    for (const [k, qty] of Object.entries(cart)) {
      const product = productById.get(Number(k));
      if (product && qty > 0) lines.push({ product, qty });
    }
    return {
      lines,
      count: lines.reduce((a, l) => a + l.qty, 0),
      total: lines.reduce((a, l) => a + l.qty * l.product.price, 0),
      qtyOf: (id) => cart[id] ?? 0,
      add: cartStore.add,
      remove: cartStore.remove,
      clear: cartStore.clear,
      open,
      setOpen,
    };
  }, [cart, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
