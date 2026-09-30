import type { ReactNode } from "react";
import type { Crumb } from "@/lib/schema";
import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./ui";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  crumbs: Crumb[];
  children?: ReactNode;
};

/** Dark page banner used on every page except the home page. Holds the page's single H1. */
export function PageHeader({ eyebrow, title, intro, crumbs, children }: Props) {
  return (
    <section className="bg-ink bg-grain text-white">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs crumbs={crumbs} />
        <p className="mt-6 text-xs font-black uppercase tracking-[.22em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.03em] sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{intro}</p>
        {children && <div className="mt-7">{children}</div>}
      </Container>
    </section>
  );
}
