import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"KAF Eatables | Small Chops, Burgers & Shawarma",description:"KAF Eatables — small chops, burgers, shawarma and sandwiches. Event catering and travel service. Order directly on WhatsApp."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
