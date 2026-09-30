import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-context";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { OrderBar } from "@/components/order-bar";
import { businessSchema } from "@/lib/schema";
import { shareImageAlt } from "@/lib/seo";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Small Chops, Grills & Party Packs in Lagos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["small chops Lagos", "puff puff", "party packs", "event catering Lagos", "KAF Eatables", "order food on WhatsApp"],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_NG",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: shareImageAlt }],
  },
  twitter: { card: "summary_large_image", images: [{ url: "/twitter-image.jpg", alt: shareImageAlt }] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <JsonLd data={businessSchema()} />
        <CartProvider>
          <div className="pb-24 md:pb-0">
            <Header />
            {children}
            <Footer />
            <CartDrawer />
            <OrderBar />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
