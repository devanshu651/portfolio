"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLAnchorElement>(null);

  const [timeString, setTimeString] = useState("");

  // Live Amravati, India (IST) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTimeString(`${formatter.format(now)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // SplitText-style per-line mask reveal with GSAP
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 0px)", () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.from([metaRef.current, bioRef.current, ctaRef.current, avatarRef.current], {
          opacity: 0,
          y: 4,
          duration: 0.2,
          stagger: 0.04,
          clearProps: "all",
        });
        return;
      }
      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: "power3.out", duration: 1.1 },
      });

      tl.from(metaRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.8,
      })
        .from(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          {
            yPercent: 110,
            stagger: 0.15,
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.5"
        )
        .from(
          bioRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          "-=0.7"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          avatarRef.current,
          {
            opacity: 0,
            scale: 0.92,
            rotate: 4,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.0"
        );

      // Subtle parallax on scroll for avatar (<= 8%)
      if (avatarRef.current) {
        gsap.to(avatarRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      }, heroRef);
      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  // Magnetic button physics
  useEffect(() => {
    const btn = magneticBtnRef.current;
    if (!btn) return;
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
    });
    return () => media.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[92svh] lg:min-h-[92vh] flex flex-col justify-between pt-8 pb-16 lg:pb-20 border-b border-[var(--ink)]/15 overflow-hidden"
    >
      {/* Top Meta Row */}
      <div
        ref={metaRef}
        className="max-w-7xl mx-auto px-5 lg:px-12 w-full pt-4 pb-6 lg:pb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 lg:gap-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)] border-b border-[var(--ink)]/10 min-w-0"
      >
        <div className="flex items-center gap-3">
          <span className="text-[var(--ink)] font-medium">Amravati, IN</span>
          <span>·</span>
          <span>{timeString || "LOCAL TIME (IST)"}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-[var(--ink)]">Open to opportunities</span>
          <span className="text-[var(--muted)] hidden md:inline-block">· § 2026 FOLIO</span>
        </div>
      </div>

      {/* Main Editorial Hero Grid */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12 w-full my-auto py-8 lg:py-16 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-w-0">
          
          {/* Left: Giant Display Headline */}
          <div className="col-span-1 lg:col-span-8 min-w-0">
            <h1 className="font-serif text-[clamp(2.5rem,9.5vw,4.75rem)] lg:text-[7.5vw] xl:text-[6.8vw] font-normal leading-[0.98] lg:leading-[0.92] tracking-[-0.035em] text-[var(--ink)] text-left select-none">
              {/* Line 1 with mask */}
              <div className="hero-reveal-mask">
                <div ref={headlineLine1Ref} className="will-change-transform">
                  Building{" "}
                  <span className="italic text-[var(--accent)] underline decoration-[var(--accent)]/40 decoration-1 underline-offset-8">
                    real systems,
                  </span>
                </div>
              </div>

              {/* Line 2 with mask */}
              <div className="hero-reveal-mask mt-1 sm:mt-2">
                <div ref={headlineLine2Ref} className="will-change-transform text-[var(--ink)]">
                  learning by{" "}
                  <span className="relative inline-block">
                    doing.
                    <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[2px] bg-[var(--ink)]" />
                  </span>
                </div>
              </div>
            </h1>

            {/* Paragraph Bio */}
            <p
              ref={bioRef}
              className="mt-8 md:mt-10 max-w-2xl text-base sm:text-lg md:text-xl text-[var(--ink)]/85 leading-relaxed font-sans font-normal"
            >
              AI &amp; ML engineering student with 9+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and 10+ certifications including Microsoft and IIT Bombay — focused on building intelligent, full-stack systems.
            </p>

            {/* CTAs with Magnetic Button */}
            <div
              ref={ctaRef}
              className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                ref={magneticBtnRef}
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="SCROLL"
                className="group relative inline-flex min-h-11 items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-5 sm:px-8 py-3 sm:py-4 font-mono text-xs uppercase tracking-wider overflow-hidden hover:bg-[var(--accent)] transition-colors active:scale-[0.98]"
              >
                <span>EXPLORE PROJECTS</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-cursor="READ"
                className="inline-flex min-h-11 items-center gap-2 border border-[var(--ink)]/20 px-5 sm:px-8 py-3 sm:py-4 font-mono text-xs uppercase tracking-wider text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors active:scale-[0.98]"
              >
                <span>DOSSIER / ABOUT</span>
                <span>→</span>
              </a>

              <div className="hidden sm:flex items-center gap-4 ml-3 pl-6 border-l border-[var(--ink)]/15 h-8 font-mono text-xs">
                <a
                  href="https://github.com/devanshu651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--muted)] hover:text-[var(--accent)]"
                  data-cursor="OPEN ↗"
                >
                  GH
                </a>
                <a
                  href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--muted)] hover:text-[var(--accent)]"
                  data-cursor="OPEN ↗"
                >
                  IN
                </a>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--muted)] hover:text-[var(--accent)]"
                  data-cursor="OPEN ↗"
                >
                  CV
                </a>
              </div>
            </div>
          </div>

          {/* Right: Asymmetric Editorial Avatar Portrait */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-end mt-4 lg:mt-0 min-w-0">
            <div
              ref={avatarRef}
              className="relative max-w-[240px] sm:max-w-[280px] aspect-[4/5] w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-2 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700 group will-change-transform"
            >
              {/* Corner Registration Crosshair Stamps */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

              <div className="relative w-full h-full overflow-hidden border border-[var(--ink)]/10">
                <Image
                  src="/avatar-try2.png"
                  alt="Devanshu Raut Portrait"
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  priority
                  className="object-cover lg:filter lg:grayscale lg:contrast-110 lg:brightness-95 lg:group-hover:filter-none transition-all duration-700"
                />
              </div>

              {/* Technical Spec Label */}
              <div className="mt-2 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-baseline font-mono text-[10px] uppercase text-[var(--muted)]">
                <span>DEVY RAUT</span>
                <span className="text-[var(--ink)]">FIG. 01 / BUILDER</span>
              </div>
            </div>

            <p className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider mt-4 text-center lg:text-right">
              20.9374° N, 77.7796° E · PRPCEM
            </p>
          </div>

        </div>
      </div>

      {/* Section index rule bar */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12 w-full pt-4 flex justify-between items-center gap-3 font-mono text-[10px] lg:text-[11px] uppercase tracking-widest text-[var(--muted)] border-t border-[var(--ink)]/10 min-w-0">
        <span>§ 01 / OVERVIEW</span>
        <span>SCROLL TO READ DOSSIER ↓</span>
      </div>
    </section>
  );
}
