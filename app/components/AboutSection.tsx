"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);
  const stat3Ref = useRef<HTMLSpanElement>(null);

  // Paragraph text to be scrubbed word by word
  const scrubParagraphs = [
    "I don't just study AI — I build with it.",
    "I'm Devanshu — a builder first, student second. While most of my coursework is still ahead of me, my shipped work isn't: SafeRide is a live safety app (Flutter + Firebase) built from scratch, and PromptLab Pro is my own platform for evaluating LLM prompts against measurable metrics, not gut feel.",
    "I work across Python, C, Java, R, and Flutter, moving from computer-vision systems like CampusEye AI to responsive Next.js frontends — I'd rather ship something rough and iterate than perfect something in theory.",
    "That build-first instinct is backed by four job simulations — AWS solutions architecture, GenAI-powered analytics at Tata Group, data analytics at Deloitte, and software engineering at HPE — that shaped how I think about production-grade systems, not just class projects.",
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Scrubbed Word-by-Word opacity animation
      const words = textContainerRef.current?.querySelectorAll(".scrub-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "none",
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: "top 78%",
              end: "bottom 55%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Count-up statistics triggered on scroll
      const animateCount = (element: HTMLElement | null, endVal: number) => {
        if (!element) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: endVal,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            element.textContent = Math.floor(obj.val).toString();
          },
        });
      };

      animateCount(stat1Ref.current, 5);
      animateCount(stat2Ref.current, 6);
      animateCount(stat3Ref.current, 10);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15"
    >
      <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Sticky/Pinned Editorial Meta Column */}
        <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 space-y-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
              § 02 / DOSSIER
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] font-normal">
              About Me
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)] mt-2">
              BUILDER · 2ND YEAR B.TECH AI &amp; ML
            </p>
          </div>

          {/* Stats: Count-up numbers in huge serif */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-1 gap-6 pt-6 border-t border-[var(--ink)]/15">
            {/* Stat 1 */}
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] font-normal leading-none tracking-tight">
                <span ref={stat1Ref}>5</span>+
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                Shipped Systems
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] font-normal leading-none tracking-tight">
                <span ref={stat2Ref}>6</span>+
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                Industry Simulations
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] font-normal leading-none tracking-tight">
                <span ref={stat3Ref}>10</span>+
              </div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                Verified Certs
              </p>
            </div>
          </div>

          {/* Focus Callout */}
          <div className="hidden lg:block pt-6 border-t border-[var(--ink)]/10 font-mono text-xs text-[var(--muted)] space-y-2">
            <span className="text-[var(--ink)] uppercase block">Technical Core</span>
            <p>Computer Vision · Distributed Backends · Applied Machine Learning · Native Mobile</p>
          </div>
        </div>

        {/* Right Column: Scrubbed Word-by-Word Text Reveal */}
        <div ref={textContainerRef} className="col-span-12 lg:col-span-8 space-y-10">
          
          {/* Lead Quote */}
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--ink)] italic font-normal leading-[1.15] tracking-tight">
            {scrubParagraphs[0].split(" ").map((word, idx) => (
              <span key={idx} className="scrub-word inline-block mr-[0.28em] will-change-opacity">
                {word}
              </span>
            ))}
          </p>

          {/* Body Paragraphs with Scrubbed Words */}
          <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-[var(--ink)]/90 leading-relaxed font-sans font-light">
            {scrubParagraphs.slice(1).map((para, pIdx) => (
              <p key={pIdx}>
                {para.split(" ").map((word, wIdx) => (
                  <span
                    key={wIdx}
                    className="scrub-word inline-block mr-[0.24em] will-change-opacity"
                  >
                    {word}
                  </span>
                ))}
              </p>
            ))}
          </div>

          {/* Current Inquiries Notice */}
          <div className="pt-6 border-t border-[var(--ink)]/15 font-serif italic text-xl md:text-2xl text-[var(--ink)]">
            &ldquo;Currently looking for internships and engineering collaborations — if you&apos;re building something ambitious, let&apos;s talk.&rdquo;
          </div>

          {/* Philosophy / Approach */}
          <div className="pt-8 border-t border-[var(--ink)]/15">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-6">
              § 02.1 / CORE PRINCIPLES
            </span>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors">
                <span className="font-mono text-xs text-[var(--muted)] block mb-3">01 / AXIOM</span>
                <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-2">Build to Learn</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                  Theory is essential, but implementation is where real engineering mastery happens. I prioritize live systems and deep debugging over pure classroom speculation.
                </p>
              </div>

              <div className="p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors">
                <span className="font-mono text-xs text-[var(--muted)] block mb-3">02 / AXIOM</span>
                <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-2">Performance First</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                  High-efficiency execution matters. From native Android architectures with low memory footprints to responsive, highly-optimized full-stack web applications.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
