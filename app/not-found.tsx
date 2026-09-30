import type { Metadata } from "next";
import { Container, LinkButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist. Head back to the KAF Eatables menu.",
  robots: { index: false, follow: false },
  openGraph: { images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }] },
};

export default function NotFound() {
  return (
    <main className="bg-ink bg-grain text-white">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="text-xs font-black uppercase tracking-[.22em] text-gold">404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">That page is not on the menu.</h1>
        <p className="mt-4 max-w-md text-white/70">The link may be old or mistyped. The food, however, is still very much available.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/menu">See the menu</LinkButton>
          <LinkButton href="/" variant="outline">
            Go home
          </LinkButton>
        </div>
      </Container>
    </main>
  );
}
