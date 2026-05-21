import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionReveal } from "@/components/sections/SectionReveal";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devanshu Raut | AI & ML Engineering Student",
  description:
    "AI & ML engineering student and full-stack builder shipping intelligent, production-minded systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          rel="preload"
          href="/fonts/instrument-serif.woff2"
          as="font"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${instrument.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
      >
        <SectionReveal />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
