import { productById } from "./products";

export type Cart = Readonly<Record<number, number>>;

const STORAGE_KEY = "kaf-cart-v1";
const EMPTY: Cart = Object.freeze({});
const listeners = new Set<() => void>();
let cart: Cart | null = null;

function sanitize(raw: unknown): Cart {
  if (!raw || typeof raw !== "object") return EMPTY;
  const out: Record<number, number> = {};
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    const id = Number(k);
    if (productById.has(id) && typeof v === "number" && v > 0) out[id] = Math.min(99, Math.floor(v));
  }
  return out;
}

function load(): Cart {
  if (cart) return cart;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    cart = raw ? sanitize(JSON.parse(raw)) : EMPTY;
  } catch {
    cart = EMPTY;
  }
  return cart;
}

function commit(next: Cart) {
  cart = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable: cart still works for this page view */
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  getSnapshot: load,
  getServerSnapshot: () => EMPTY,
  add(id: number) {
    const c = load();
    commit({ ...c, [id]: Math.min(99, (c[id] ?? 0) + 1) });
  },
  remove(id: number) {
    const c = load();
    const qty = (c[id] ?? 0) - 1;
    const next: Record<number, number> = { ...c };
    if (qty <= 0) delete next[id];
    else next[id] = qty;
    commit(next);
  },
  clear() {
    commit(EMPTY);
  },
};
