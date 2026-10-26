"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Project = {
  num: string;
  title: string;
  category: string;
  year: string;
  description: string;
  href: string;
  tags: string[];
  imageSrc?: string;
  stats?: string;
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isHoveringList, setIsHoveringList] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isTouchLayout, setIsTouchLayout] = useState(false);

  const projects: Project[] = [
    {
      num: "01",
      title: "SPARSH",
      category: "CHILD DEVELOPMENT SCREENING PWA",
      year: "2026",
      description:
        "Mobile-friendly Progressive Web App that helps Anganwadi workers screen children aged 0–6 for possible developmental concerns using age-based milestone questions, with screening history for follow-up.",
      href: "/projects/sparsh",
      tags: ["React 19", "FastAPI", "PWA", "Firebase Auth", "Cloud Firestore", "Tailwind CSS"],
      imageSrc: "/sparsh-ui.png",
      stats: "11-Member Lead · Community Engagement",
    },
    {
      num: "02",
      title: "SafeRide",
      category: "TRAVEL SAFETY & SOS",
      year: "2026",
      description:
        "Comprehensive travel safety & ride-sharing application with real-time AI Risk Analysis, Guardian Mode tracking, and visual Route Heatmaps for late-night travel.",
      href: "/projects/saferide",
      tags: ["Flutter", "Node.js", "Firebase", "AI Module", "Google Maps"],
      imageSrc: "/saferide-ui.png",
      stats: "Finalist · Rising India Hackathon 1.0",
    },
    {
      num: "03",
      title: "CampusEye AI",
      category: "COMPUTER VISION",
      year: "2026",
      description:
        "Smart Face-ID based attendance automation system utilizing OpenCV and real-time facial recognition pipelines to eliminate manual tracking inefficiencies.",
      href: "/projects/campuseye-ai",
      tags: ["Computer Vision", "Python", "OpenCV", "SQLite", "NumPy"],
      imageSrc: "/campuseye-ui.png",
      stats: "Real-time Edge Recognition",
    },
    {
      num: "04",
      title: "PromptLab Pro",
      category: "LLM EVALUATION PLATFORM",
      year: "2025",
      description:
        "Research-grade evaluation workbench analyzing LLM prompt determinism, similarity sweeps, and hallucination risks using structured scoring algorithms.",
      href: "/projects/promptlab",
      tags: ["LLMs", "Evaluation", "Streamlit", "Python", "TF-IDF"],
      imageSrc: "/promptlab-ui.png",
      stats: "Determinism Index (DI)",
    },
    {
      num: "05",
      title: "DeVinci Music Player",
      category: "NATIVE ANDROID",
      year: "2025",
      description:
        "Ad-free minimalist Android music player with local and online playback, background audio service, and Material 3 design powered by Android Media3 ExoPlayer.",
      href: "/projects/devinci-player",
      tags: ["Android", "Kotlin", "Media3", "MVVM", "Material 3"],
      imageSrc: "/devinci-ui.png",
      stats: "Zero-Ad Architecture",
    },
    {
      num: "06",
      title: "Personal Portfolio",
      category: "EDITORIAL DESIGN SYSTEM",
      year: "2026",
      description:
        "Warm editorial zine meets engineer's notebook. Built with Next.js, Lenis, and GSAP with custom cursor physics, drawing timeline, and typography-first layouts.",
      href: "/#home",
      tags: ["Next.js", "Tailwind CSS", "GSAP", "Lenis", "Typography"],
      stats: "Awwwards-Inspired",
    },
  ];

  // Top 2 projects for sticky stacked moment
  const topProjects = projects.slice(0, 2);

  // Keep cursor previews on desktop; use a viewport-centered active row on touch layouts.
  useEffect(() => {
    const desktopPointer = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const touchLayout = window.matchMedia("(max-width: 1023px)");
    const update = () => {
      setIsFinePointer(desktopPointer.matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      setIsTouchLayout(touchLayout.matches);
    };
    update();
    desktopPointer.addEventListener("change", update);
    touchLayout.addEventListener("change", update);
    return () => {
      desktopPointer.removeEventListener("change", update);
      touchLayout.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!isTouchLayout) return;
    const updateActiveRow = () => {
      const rows = [...document.querySelectorAll<HTMLElement>("[data-project-index-row]")];
      const center = window.innerHeight / 2;
      let nearest: { row: HTMLElement; distance: number } | null = null;
      for (const row of rows) {
        const rect = row.getBoundingClientRect();
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) continue;
        const distance = Math.abs((rect.top + rect.bottom) / 2 - center);
        if (!nearest || distance < nearest.distance) nearest = { row, distance };
      }
      const project = projects.find((item) => item.num === nearest?.row.dataset.projectIndexRow) ?? null;
      setActiveProject(project);
      setIsHoveringList(false);
    };
    let frame = 0;
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveRow);
    };
    updateActiveRow();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [isTouchLayout]);

  // Floating cursor follower physics for index list preview
  useEffect(() => {
    if (!isFinePointer) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Smooth lerp (0.12)
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (previewRef.current) {
        // Offset card slightly to right and above cursor
        previewRef.current.style.transform = `translate3d(${currentX + 24}px, ${currentY - 140}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isFinePointer]);

  // Pin and scale the stack on desktop; reveal normal-flow cards on mobile.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const cards = stackContainerRef.current?.querySelectorAll(".stack-card");
        if (cards && cards.length > 1) {
          gsap.to(cards[0], {
            scale: 0.96,
            opacity: 0.7,
            ease: "none",
            scrollTrigger: {
              trigger: cards[1],
              start: "top 80%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      }, sectionRef);
      return () => ctx.revert();
    });
    media.add("(max-width: 1023px)", () => {
      const cards = stackContainerRef.current?.querySelectorAll(".stack-card");
      if (!cards?.length) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ctx = gsap.context(() => {
        cards.forEach((card) => gsap.fromTo(card, { opacity: 0, y: reduced ? 4 : 18 }, {
          opacity: 1, y: 0, duration: reduced ? 0.22 : 0.55, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        }));
      }, stackContainerRef);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="max-w-7xl mx-auto px-5 lg:px-12 py-20 lg:py-36 border-t border-[var(--ink)]/15 relative min-w-0"
    >
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[var(--ink)]/15 pb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 04 / SELECTED WORKS &amp; SYSTEMS
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-[var(--ink)] font-normal leading-[0.95]">
            Featured Projects
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--muted)] max-w-xs text-left md:text-right uppercase space-y-1">
          <p className="text-[var(--ink)]">9+ SHIPPED SYSTEMS</p>
          <p>STACKED DOSSIER + INTERACTIVE INDEX</p>
        </div>
      </div>

      {/* MOMENT A: STICKY STACKED SHOWCASE (Top 2 Flagship Projects) */}
      <div ref={stackContainerRef} className="mb-32 space-y-12">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] flex items-center gap-2 mb-4">
          <span className="text-[var(--accent)]">●</span>
          <span>CURATED SHOWCASE — TOP 2 FLAGSHIPS</span>
        </div>

        {topProjects.map((p, idx) => (
          <div
            key={p.title}
            className={`stack-card relative lg:sticky lg:top-28 border border-[var(--ink)]/20 bg-[var(--paper)] p-5 sm:p-8 lg:p-16 shadow-2xl transition-transform min-w-0 ${
              idx === 1 ? "mt-8" : ""
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Technical Dossier */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[var(--muted)] pb-3 border-b border-[var(--ink)]/10 min-w-0">
                  <span className="text-[var(--accent)] font-semibold">{p.num} · DOSSIER</span>
                  <span>·</span>
                  <span>{p.category}</span>
                    <span className="sm:ml-auto text-[var(--ink)]">{p.year}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--ink)] font-normal tracking-tight break-words">
                  {p.title}
                </h3>

                <p className="font-sans text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-light">
                  {p.description}
                </p>

                {p.stats && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--ink)]/15 font-mono text-xs uppercase tracking-wider text-[var(--ink)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    <span>{p.stats}</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[var(--ink)]/15 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    href={p.href}
                    data-cursor="VIEW"
                    className="inline-flex min-h-11 items-center gap-3 bg-[var(--ink)] text-[var(--paper)] px-5 sm:px-8 py-3 sm:py-4 font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] transition-colors group active:scale-[0.98]"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Artifact */}
              <div className="lg:col-span-5 flex justify-center">
                <Link
                  href={p.href}
                  className="group relative block w-full max-w-md border border-[var(--ink)]/15 bg-[var(--paper)] p-3 shadow-lg hover:border-[var(--accent)] transition-colors"
                >
                  <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
                  <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
                  
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--ink)]/10 bg-[var(--ink)]/5">
                    {p.imageSrc ? (
                      <Image
                        src={p.imageSrc}
                        alt={`${p.title} Preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-cover filter grayscale contrast-110 group-hover:filter-none group-hover:scale-105 transition-all duration-700"
                      />
                    ) : (
                      <div className="w-full h-full min-h-[220px] flex flex-col justify-between p-6 sm:p-7 bg-[var(--paper)] border border-[var(--ink)]/15 select-none relative">
                        <span className="absolute top-1.5 left-1.5 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>
                        <span className="absolute top-1.5 right-1.5 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>
                        <span className="absolute bottom-1.5 left-1.5 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>
                        <span className="absolute bottom-1.5 right-1.5 font-mono text-[9px] text-[var(--ink)]/30 pointer-events-none">+</span>
                        
                        <div className="flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)] border-b border-[var(--ink)]/10 pb-2">
                          <span>PLATE {p.num} · SPECIFICATION</span>
                          <span className="text-[var(--accent)] font-semibold">FIELD ARTIFACT</span>
                        </div>
                        <div className="my-auto py-3 text-center">
                          <span className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal block leading-tight">
                            {p.title}
                          </span>
                          <span className="font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mt-1 block">
                            {p.category}
                          </span>
                          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                            <span className="border border-[var(--ink)]/15 px-2 py-0.5 font-mono text-[9px] uppercase text-[var(--muted)]">
                              5 Screening Domains
                            </span>
                            <span className="border border-[var(--ink)]/15 px-2 py-0.5 font-mono text-[9px] uppercase text-[var(--muted)]">
                              Ages 0–6
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center font-mono text-[9px] uppercase text-[var(--muted)] pt-2 border-t border-[var(--ink)]/10">
                          <span>REVASA, AMRAVATI</span>
                          <span className="text-[var(--ink)] font-medium">VIEW SPEC ↗</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-2 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)]">
                    <span>PLATE {p.num}</span>
                    <span className="text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                      CLICK TO OPEN ↗
                    </span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* MOMENT B: LARGE TYPOGRAPHIC INDEX LIST (All Projects) */}
      <div className="pt-16 border-t border-[var(--ink)]/15">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
          <span>§ 04.2 / COMPREHENSIVE REPOSITORY INDEX</span>
          <span>HOVER ROW FOR PREVIEW · CLICK TO OPEN</span>
        </div>

        {/* Index Table */}
        <div
          className="divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/15"
          onMouseEnter={() => setIsHoveringList(true)}
          onMouseLeave={() => {
            setIsHoveringList(false);
            setActiveProject(null);
          }}
        >
          {projects.map((proj) => {
            const isHovered = activeProject?.num === proj.num;
            const hasOtherHovered = isHoveringList && activeProject && !isHovered;

            return (
              <Link
                key={proj.title}
                href={proj.href}
                onMouseEnter={() => { if (!isTouchLayout) setActiveProject(proj); }}
                data-project-index-row={proj.num}
                data-cursor="VIEW"
                className={`project-index-row group block py-6 lg:py-10 transition-all duration-300 relative min-w-0 ${
                  (isTouchLayout ? activeProject && !isHovered : hasOtherHovered) ? "opacity-40" : "opacity-100"
                } ${isHovered ? "bg-[var(--ink)]/5" : ""}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-3 lg:gap-4 px-2 min-w-0">
                  
                  {/* Left: Index number + Huge Serif Title */}
                  <div className="flex items-baseline gap-4 sm:gap-6 lg:gap-12 min-w-0">
                    <span className="font-mono text-xs md:text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors w-8">
                      {proj.num}
                    </span>

                    <h3
                      className={`font-serif text-2xl sm:text-4xl lg:text-7xl tracking-tight transition-colors duration-200 break-words min-w-0 ${
                        isHovered ? "text-[var(--accent)] italic" : "text-[var(--ink)]"
                      }`}
                    >
                      {proj.title}
                    </h3>
                  </div>

                  {/* Middle / Right: Category & Tags in JetBrains Mono */}
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 lg:gap-8 font-mono text-xs uppercase text-[var(--muted)] ml-10 sm:ml-14 lg:ml-0">
                    <span className="hidden lg:inline-block tracking-wider">
                      {proj.category}
                    </span>

                    <span className="hidden sm:inline-block border border-[var(--ink)]/15 px-2 py-0.5 text-[10px]">
                      {proj.tags[0]}
                    </span>

                    <span className="text-[var(--ink)] group-hover:text-[var(--accent)] font-semibold transition-colors flex items-center gap-1">
                      <span>OPEN</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </span>
                  </div>

                </div>

                {/* Mobile-only visible preview (no hover required on touch) */}
                <div className={`${isTouchLayout && activeProject?.num === proj.num ? "block" : "hidden"} lg:hidden mt-4 ml-10 sm:ml-14 space-y-3 min-w-0`}>
                  {proj.imageSrc && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--ink)]/15 bg-[var(--ink)]/5">
                      <Image src={proj.imageSrc} alt={`${proj.title} preview`} fill sizes="(max-width: 1023px) 100vw, 0px" className="object-cover" />
                    </div>
                  )}
                  <p className="text-base text-[var(--muted)] font-sans">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span key={t} className="border border-[var(--ink)]/10 px-2 py-1 font-mono text-[10px] uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* FLOATING CURSOR LERPED PREVIEW CARD (Desktop only) */}
      {isFinePointer && (
        <div
          ref={previewRef}
          className={`pointer-events-none fixed top-0 left-0 z-50 w-72 h-48 border border-[var(--ink)]/20 bg-[var(--paper)] shadow-2xl overflow-hidden transition-opacity duration-300 will-change-transform ${
            isHoveringList && activeProject ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          aria-hidden="true"
        >
          {activeProject?.imageSrc ? (
            <div className="relative w-full h-full">
              <Image
                src={activeProject.imageSrc}
                alt={activeProject.title}
                fill
                sizes="288px"
                className="object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/80 via-transparent to-transparent flex items-end p-3">
                <span className="font-serif text-lg text-white font-normal">
                  {activeProject.title}
                </span>
              </div>
            </div>
          ) : (
            /* Typographic CSS Preview for projects without real screenshots */
            <div className="w-full h-full p-4 flex flex-col justify-between bg-[var(--paper)] border-2 border-[var(--accent)]/30">
              <div className="flex justify-between items-center font-mono text-[10px] text-[var(--muted)] uppercase border-b border-[var(--ink)]/10 pb-1.5">
                <span>PLATE {activeProject?.num}</span>
                <span className="text-[var(--accent)] font-semibold">TYPOGRAPHIC DOSSIER</span>
              </div>
              <div className="my-auto text-center">
                <h4 className="font-serif text-2xl text-[var(--ink)] italic leading-tight">
                  {activeProject?.title}
                </h4>
                <p className="font-mono text-[10px] text-[var(--muted)] uppercase mt-1">
                  {activeProject?.category}
                </p>
              </div>
              <div className="flex justify-between items-center font-mono text-[9px] uppercase text-[var(--ink)] pt-1.5 border-t border-[var(--ink)]/10">
                <span>{activeProject?.year}</span>
                <span className="text-[var(--accent)]">VIEW SPEC ↗</span>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
