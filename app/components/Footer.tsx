"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        if (wordmarkRef.current && footerRef.current) {
          gsap.fromTo(wordmarkRef.current, { yPercent: 40, opacity: 0.15 }, {
            yPercent: 0, opacity: 1, ease: "none",
            scrollTrigger: { trigger: footerRef.current, start: "top 95%", end: "bottom 95%", scrub: 1 },
          });
        }
      }, footerRef);
      return () => ctx.revert();
    });
    media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        if (wordmarkRef.current && footerRef.current) {
          gsap.fromTo(wordmarkRef.current, { opacity: 0.2 }, {
            opacity: 1, ease: "none",
            scrollTrigger: { trigger: footerRef.current, start: "top 95%", end: "bottom 95%", scrub: 1 },
          });
        }
      }, footerRef);
      return () => ctx.revert();
    });
    media.add("(prefers-reduced-motion: reduce)", () => {
      const ctx = gsap.context(() => {
        if (wordmarkRef.current) gsap.fromTo(wordmarkRef.current, { opacity: 0.7 }, {
          opacity: 1, duration: 0.2,
          scrollTrigger: { trigger: wordmarkRef.current, start: "top 95%", once: true },
        });
      }, footerRef);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 border-t border-[var(--ink)]/15 mt-20 lg:mt-24 bg-[var(--paper)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-12 lg:pt-16 pb-10 lg:pb-12 min-w-0">
        {/* Navigation & Metadata Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 lg:pb-16 border-b border-[var(--ink)]/10 font-mono text-xs min-w-0">
          
          {/* Col 1: Colophon */}
          <div className="col-span-1 lg:col-span-5 space-y-3 min-w-0">
            <span className="text-[var(--muted)] uppercase tracking-widest block">
              § ARCHIVAL COLOPHON
            </span>
            <p className="font-serif text-2xl text-[var(--ink)] font-normal">
              Devanshu Raut
            </p>
            <p className="font-sans text-sm text-[var(--muted)] max-w-sm leading-relaxed">
              B.Tech Undergraduate in Artificial Intelligence &amp; Machine Learning at P.R. Pote Patil College of Engineering &amp; Management, Amravati.
            </p>
          </div>

          {/* Col 2: Directory */}
          <div className="col-span-1 lg:col-span-3 space-y-3 min-w-0">
            <span className="text-[var(--muted)] uppercase tracking-widest block">
              PAGE DIRECTORY
            </span>
            <ul className="space-y-2 list-none p-0 m-0 uppercase">
              <li>
                <a href="#home" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  01 / HOME INDEX
                </a>
              </li>
              <li>
                <a href="#about" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  02 / ABOUT DOSSIER
                </a>
              </li>
              <li>
                <a href="#experience" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  03 / EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#projects" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  04 / REPOSITORY WORKS
                </a>
              </li>
              <li>
                <a href="#skills" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  05 / SPECIFICATIONS
                </a>
              </li>
              <li>
                <a href="#certifications" className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]">
                  06 / CREDENTIALS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Network Channels */}
          <div className="col-span-1 lg:col-span-4 space-y-3 min-w-0">
            <span className="text-[var(--muted)] uppercase tracking-widest block">
              TRANSMISSION &amp; RESUME
            </span>
            <ul className="space-y-2 list-none p-0 m-0 uppercase">
              <li>
                <a
                  href="mailto:devanshuraut.in@gmail.com"
                  className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]"
                  data-break-anywhere
                >
                  DEVANSHURAUT.IN@GMAIL.COM ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/devanshu651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  GITHUB / DEVANSHU651 ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  LINKEDIN / DEVANSHU-RAUT ↗
                </a>
              </li>
              <li>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  CURRICULUM VITAE (PRINTABLE) ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Technical Sub-bar */}
        <div className="pt-6 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
          <span>© {new Date().getFullYear()} DEVANSHU RAUT · ALL RIGHTS RESERVED</span>
          <span>TYPESET IN INSTRUMENT SERIF, BRICOLAGE &amp; JETBRAINS MONO</span>
        </div>
      </div>

      {/* GIANT SCROLL-REVEALED WORDMARK */}
      <div className="w-full overflow-x-clip overflow-y-hidden border-t border-[var(--ink)]/15 select-none bg-[var(--paper)]">
        <div
          ref={wordmarkRef}
          className="font-serif text-[clamp(2.5rem,12vw,6rem)] lg:text-[15vw] leading-[0.9] lg:leading-[0.8] tracking-tight lg:tracking-[-0.04em] text-[var(--ink)] text-center whitespace-nowrap will-change-transform pt-4 pb-2"
        >
          DEVANSHU RAUT
        </div>
      </div>
    </footer>
  );
}
