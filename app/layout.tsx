import "./globals.css";
import Navbar from "./components/navbar";
import PageWrapper from "./components/PageWrapper";
import ScrollObserver from "./components/ScrollObserver";
import ChatWidget from "./components/ChatWidget";
import GrainOverlay from "./components/GrainOverlay";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import { Instrument_Serif, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devanshuweb.in"),
  title: {
    default: "Devanshu Raut — Systems, Machine Learning & Engineering",
    template: "%s · Devanshu Raut",
  },
  description:
    "Portfolio of Devanshu Raut — AI/ML engineering student, builder of SPARSH, SafeRide, CampusEye AI, PromptLab Pro, and DeVinci Player. 9+ projects, led 4 national-level hackathon teams (finalists in all 4).",
  keywords: [
    "Devanshu Raut",
    "AI/ML Engineer",
    "Systems Engineering",
    "SPARSH",
    "SafeRide",
    "CampusEye AI",
    "PromptLab",
    "PRPCEM",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Devanshu Raut", url: "https://devanshuweb.in" }],
  creator: "Devanshu Raut",
  openGraph: {
    title: "Devanshu Raut — Systems, Machine Learning & Engineering",
    description:
      "Editorial portfolio of Devanshu Raut — AI & ML engineering student with 9+ projects, led 4 national-level hackathon teams (finalists in all 4), builder of SPARSH, SafeRide, and intelligent systems.",
    url: "https://devanshuweb.in",
    siteName: "Devanshu Raut Portfolio",
    images: [
      {
        url: "/avatar-try2.png",
        width: 800,
        height: 800,
        alt: "Devanshu Raut portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devanshu Raut — Systems, Machine Learning & Engineering",
    description:
      "Editorial portfolio of Devanshu Raut — AI & ML engineering student with 9+ projects, led 4 national-level hackathon teams (finalists in all 4), builder of SPARSH, SafeRide, and intelligent systems.",
    images: ["/avatar-try2.png"],
  },
  verification: {
    google: "JhwCV-hq0eo2TK-zBTTIYKctc6ff8z4bFoM-lqBEwNI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[var(--paper)] text-[var(--ink)] font-sans antialiased min-h-screen relative selection:bg-[var(--accent)] selection:text-[var(--paper)]">
        {/* Short Page Load Preloader (<1.5s, cached in sessionStorage) */}
        <Preloader />

        {/* Lenis Smooth Scroll Engine + Vermilion Progress Bar */}
        <SmoothScroll />

        {/* Dynamic Difference Cursor with Lerping & Hover Labels */}
        <CustomCursor />

        {/* Subtle Animated Film Grain Overlay */}
        <GrainOverlay />

        {/* Scroll observer for trigger reveals */}
        <ScrollObserver />

        {/* Global Editorial Navbar */}
        <Navbar />

        {/* Main Content Shell */}
        <main className="relative z-10 pt-20">
          <PageWrapper>{children}</PageWrapper>
        </main>

        {/* Editorial Footer with Scroll-Revealed Wordmark */}
        <Footer />

        {/* AI Chatbot Widget (styled to editorial palette in Phase 6) */}
        <ChatWidget />
      </body>
    </html>
  );
}
