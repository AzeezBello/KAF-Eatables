import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 active:scale-[.98] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  gold: "bg-gold text-ink hover:bg-gold-bright shadow-glow",
  ink: "bg-ink text-white hover:bg-ink-soft",
  wa: "bg-wa text-ink hover:brightness-110",
  outline: "border border-white/25 text-white hover:bg-white/10",
  ghost: "bg-ink/5 text-ink hover:bg-ink/10",
} as const;

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

export function buttonClass(variant: Variant = "gold", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}

type LinkButtonProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

/** Button-styled link. Internal paths use client-side navigation; external URLs open in a new tab. */
export function LinkButton({ href, variant = "gold", size = "md", className = "", children, ...props }: LinkButtonProps) {
  const cls = buttonClass(variant, size, className);
  if (href.startsWith("http")) {
    return (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link {...props} href={href} className={cls}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({ variant = "gold", size = "md", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} {...props} className={buttonClass(variant, size, className)} />;
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "dark" }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[.22em] ${tone === "gold" ? "text-gold-deep" : "text-gold"}`}>
      {children}
    </p>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
