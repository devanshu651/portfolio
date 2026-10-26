"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);
  const mobileMarquee1Ref = useRef<HTMLDivElement>(null);
  const mobileMarquee2Ref = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const marqueeRow1 = [
    "Python",
    "Flutter",
    "OpenCV",
    "Next.js",
    "Kotlin",
    "Machine Learning",
    "TypeScript",
    "Android Media3",
    "Docker",
    "React",
    "Node.js",
    "Firebase",
  ];

  const marqueeRow2 = [
    "Solutions Architecture",
    "Computer Vision",
    "LLM Evaluation",
    "PromptLab",
    "SQLite",
    "TF-IDF & NLP",
    "Java",
    "C",
    "R",
    "Git & GitHub",
    "MVVM Architecture",
    "REST APIs",
  ];
  const mobileMarqueeText1 = [...marqueeRow1, ...marqueeRow1].join("   ✦   ");
  const mobileMarqueeText2 = [...marqueeRow2, ...marqueeRow2].join("   §   ");

  const skillGroups = [
    {
      code: "01",
      category: "LANGUAGES & RUNTIMES",
      skills: ["Python", "C", "Java", "R", "Kotlin", "TypeScript", "SQL"],
      note: "Production script & native systems",
    },
    {
      code: "02",
      category: "FRONTEND & MOBILE FRAMEWORKS",
      skills: ["Flutter", "Next.js", "React", "Tailwind CSS", "HTML5", "CSS3"],
      note: "Cross-platform mobile & modern SSR web",
    },
    {
      code: "03",
      category: "INTELLIGENCE & COMPUTER VISION",
      skills: ["OpenCV", "Machine Learning", "LLM APIs", "Face Recognition", "PromptLab Evaluation"],
      note: "Edge inference & empirical model benchmarking",
    },
    {
      code: "04",
      category: "SYSTEM TOOLS & ARCHITECTURE",
      skills: ["Android Studio", "Git & GitHub", "Docker", "VS Code", "Firebase Firestore"],
      note: "Continuous integration & developer tooling",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
    setIsReducedMotion(false);

    let speed1 = 0.8;
    let speed2 = -0.8;
    let pos1 = 0;
    let pos2 = 0;
    let animId: number;

    const row1 = marquee1Ref.current;
    const row2 = marquee2Ref.current;

    // React to scroll velocity
    let lastScrollY = window.scrollY;
    let velocityMultiplier = 1;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      velocityMultiplier = Math.min(4.5, 1 + delta * 0.04);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      // Ease velocity multiplier back to 1
      velocityMultiplier += (1 - velocityMultiplier) * 0.05;

      pos1 -= speed1 * velocityMultiplier;
      pos2 -= speed2 * velocityMultiplier;

      // Wrap-around threshold
      if (row1) {
        if (pos1 <= -50) pos1 = 0;
        row1.style.transform = `translate3d(${pos1}%, 0, 0)`;
      }

      if (row2) {
        if (pos2 >= 0) pos2 = -50;
        row2.style.transform = `translate3d(${pos2}%, 0, 0)`;
      }
      mobileMarquee1Ref.current?.style.setProperty("--marquee-duration", `${34 / velocityMultiplier}s`);
      mobileMarquee2Ref.current?.style.setProperty("--marquee-duration", `${42 / velocityMultiplier}s`);

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animId);
    };
    });
    media.add("(prefers-reduced-motion: reduce)", () => {
      setIsReducedMotion(true);
      return () => setIsReducedMotion(false);
    });
    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-36 border-t border-[var(--ink)]/15 overflow-x-clip lg:overflow-hidden min-w-0"
    >
      {/* Section Header */}
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
          § 05 / TECHNICAL SPECIFICATIONS
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight text-[var(--ink)] font-normal mb-3 break-words">
          Skills &amp; Technologies
        </h2>
        <p className="font-sans text-base text-[var(--muted)] max-w-2xl leading-relaxed">
          Dynamic infinite marquee strips reacting to scroll velocity, accompanied by categorical mono inventories. No vanity progress bars.
        </p>
      </div>

      {/* INFINITE MARQUEE STRIPS */}
      {!isReducedMotion ? (
        <div className="my-14 space-y-4 border-y border-[var(--ink)]/15 py-8 bg-[var(--paper)]">
          <div className="lg:hidden space-y-4" aria-hidden="true">
            <div ref={mobileMarquee1Ref} className="mobile-marquee-track mobile-marquee-forward font-serif text-2xl sm:text-4xl text-[var(--ink)]" data-marquee={mobileMarqueeText1} />
            <div ref={mobileMarquee2Ref} className="mobile-marquee-track mobile-marquee-reverse font-mono text-[11px] sm:text-sm uppercase tracking-widest text-[var(--muted)]" data-marquee={mobileMarqueeText2} />
          </div>
          {/* Strip 1: Leftward flow */}
          <div className="hidden lg:block overflow-x-clip lg:overflow-hidden whitespace-nowrap select-none">
            <div
              ref={marquee1Ref}
              className="inline-flex items-center gap-8 will-change-transform font-serif text-2xl sm:text-4xl lg:text-5xl text-[var(--ink)]"
            >
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((skill, idx) => (
                <span key={idx} className="inline-flex items-center gap-8">
                  <span className="hover:text-[var(--accent)] hover:italic transition-all duration-200 cursor-default">
                    {skill}
                  </span>
                  <span className="text-[var(--accent)] text-lg sm:text-xl font-mono">✦</span>
                </span>
              ))}
            </div>
          </div>

          {/* Strip 2: Rightward flow */}
          <div className="hidden lg:block overflow-x-clip lg:overflow-hidden whitespace-nowrap select-none">
            <div
              ref={marquee2Ref}
              className="inline-flex items-center gap-8 will-change-transform font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--muted)]"
            >
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((skill, idx) => (
                <span key={idx} className="inline-flex items-center gap-8">
                  <span className="hover:text-[var(--ink)] transition-colors cursor-default">
                    {skill}
                  </span>
                  <span className="text-[var(--ink)]/30 font-serif text-base">§</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Reduced motion fallback: Clean wrap tags */
        <div className="my-10 p-6 border border-[var(--ink)]/15 flex flex-wrap gap-2.5 font-mono text-xs uppercase">
          {[...marqueeRow1, ...marqueeRow2].map((s, i) => (
            <span key={i} className="border border-[var(--ink)]/15 px-3 py-1 text-[var(--ink)]">
              {s}
            </span>
          ))}
        </div>
      )}

      {/* GROUPED MONO INVENTORIES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pt-6 min-w-0">
        {skillGroups.map((group) => (
          <div
            key={group.code}
            className="border border-[var(--ink)]/15 bg-[var(--paper)] p-6 sm:p-8 hover:border-[var(--accent)] transition-colors group"
          >
            {/* Header */}
            <div className="flex justify-between items-baseline pb-4 mb-6 border-b border-[var(--ink)]/10 font-mono text-xs">
              <span className="text-[var(--accent)] font-semibold">{group.code} / SPEC</span>
              <span className="text-[var(--muted)] uppercase">{group.note}</span>
            </div>

            <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-6 group-hover:text-[var(--accent)] transition-colors">
              {group.category}
            </h3>

            {/* List */}
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 font-mono text-xs uppercase text-[var(--ink)] list-none p-0 m-0">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-[var(--accent)] text-[10px]">■</span>
                  <span className="hover:text-[var(--accent)] transition-colors cursor-default">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
