import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme/ThemeProvider";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Waruni Handicraft | Handcrafted Brass Items",
  description: "Discover unique handcrafted brass items made with love using traditional techniques. Each piece is a work of art, carefully crafted by skilled artisan hands.",
  keywords: "handmade brass, artisan brass items, handcrafted brass, traditional craftsmanship, unique brass pieces, Sri Lanka handicraft",
  openGraph: {
    title: "Waruni Handicraft | Handcrafted Brass Items",
    description: "Discover unique handcrafted brass items made with love using traditional techniques.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${playfairDisplay.variable} ${outfit.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <WhatsAppButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
