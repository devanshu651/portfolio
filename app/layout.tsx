import "./globals.css";
import Navbar from "./components/navbar";
import PageWrapper from "./components/PageWrapper";
import ScrollObserver from "./components/ScrollObserver";
import ChatWidget from "./components/ChatWidget";
import GrainOverlay from "./components/GrainOverlay";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
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
  title: "Devanshu Raut — Systems, Machine Learning & Engineering",
  description: "Portfolio of Devanshu Raut — AI/ML engineering student, builder of SafeRide, CampusEye AI, PromptLab Pro, and DeVinci Player.",
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

        {/* Editorial Footer Shell */}
        <footer className="relative z-10 border-t border-[var(--ink)]/15 mt-32 bg-[var(--paper)]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16 border-b border-[var(--ink)]/10">
              {/* Left Column: Huge serif wordmark & colophon */}
              <div className="md:col-span-7">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-3">
                  § Vol. 01 — Portfolio &amp; Index
                </span>
                <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[var(--ink)] font-normal leading-[0.9]">
                  Devanshu Raut
                </h2>
                <p className="font-sans text-base text-[var(--muted)] mt-5 max-w-md leading-relaxed">
                  Undergraduate in AI &amp; ML. Building real, production-ready software systems with a build-first ethos.
                </p>
              </div>

              {/* Middle Column: Location & Live Status */}
              <div className="md:col-span-2 space-y-3 font-mono text-xs">
                <span className="text-[var(--muted)] block uppercase tracking-wider">
                  Location
                </span>
                <p className="text-[var(--ink)]">Amravati, Maharashtra, IN</p>
                <div className="inline-flex items-center gap-2 pt-2 text-[var(--ink)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>Open for roles</span>
                </div>
              </div>

              {/* Right Column: Links */}
              <div className="md:col-span-3 space-y-3 font-mono text-xs">
                <span className="text-[var(--muted)] block uppercase tracking-wider">
                  Directory &amp; Socials
                </span>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li>
                    <a
                      href="https://github.com/devanshu651"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep hover:text-[var(--accent)]"
                    >
                      GITHUB ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep hover:text-[var(--accent)]"
                    >
                      LINKEDIN ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:rautdevanshu24@gmail.com"
                      className="link-sweep hover:text-[var(--accent)]"
                    >
                      RAUTDEVANSHU24@GMAIL.COM ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cv.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-sweep hover:text-[var(--accent)]"
                    >
                      CURRICULUM VITAE (PDF) ↗
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Meta Row */}
            <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
              <span>© {new Date().getFullYear()} Devanshu Raut · All rights reserved</span>
              <span>Typeset in Instrument Serif &amp; Bricolage Grotesque</span>
            </div>
          </div>
        </footer>

        {/* AI Chatbot Widget */}
        <ChatWidget />
      </body>
    </html>
  );
}
