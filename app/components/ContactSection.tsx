"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ContactSection() {
  const magneticCtaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = magneticCtaRef.current;
    if (!btn) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(btn, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const contactChannels = [
    {
      label: "DIRECT DISPATCH",
      title: "Email",
      value: "devanshuraut.in@gmail.com",
      href: "mailto:devanshuraut.in@gmail.com",
      cta: "WRITE EMAIL ↗",
    },
    {
      label: "CODE REPOSITORIES",
      title: "GitHub",
      value: "github.com/devanshu651",
      href: "https://github.com/devanshu651",
      cta: "EXPLORE REPOS ↗",
    },
    {
      label: "PROFESSIONAL NETWORK",
      title: "LinkedIn",
      value: "devanshu-raut",
      href: "https://www.linkedin.com/in/devanshu-raut-641828331/",
      cta: "CONNECT ↗",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15"
    >
      <div className="border border-[var(--ink)]/20 bg-[var(--paper)] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl">
        {/* Technical Corner Accents */}
        <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

        {/* Section Pre-title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] pb-8 mb-10 border-b border-[var(--ink)]/10">
          <span>§ 07 / INQUIRIES &amp; CORRESPONDENCE</span>
          <span>AMRAVATI, IN · TYPICAL RESPONSE &lt; 24H</span>
        </div>

        {/* Main Oversized Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[var(--ink)] font-normal leading-[0.92]">
            Let&apos;s build{" "}
            <span className="italic text-[var(--accent)] underline decoration-[var(--accent)]/30 decoration-1 underline-offset-8">
              something.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--ink)]/80 max-w-2xl mx-auto leading-relaxed font-light pt-4">
            Currently open to internships, engineering roles, and ambitious collaborations. If you&apos;re shipping real systems, my inbox is open.
          </p>

          {/* Magnetic Primary Mailto CTA */}
          <div className="pt-8 pb-10 flex justify-center">
            <a
              ref={magneticCtaRef}
              href="mailto:devanshuraut.in@gmail.com"
              data-cursor="EMAIL"
              className="inline-flex items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-10 py-5 font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-[var(--accent)] transition-colors shadow-xl will-change-transform"
            >
              <span>SEND AN INQUIRY</span>
              <span className="text-base">↗</span>
            </a>
          </div>
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[var(--ink)]/10">
          {contactChannels.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider block mb-2">
                  0{i + 1} / {c.label}
                </span>
                <h3 className="font-serif text-2xl text-[var(--ink)] font-normal group-hover:text-[var(--accent)] transition-colors">
                  {c.title}
                </h3>
                <p className="font-mono text-xs text-[var(--muted)] mt-1 break-all">
                  {c.value}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-xs uppercase text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                <span>{c.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
