"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Scrubbed drawing line on scroll
      if (lineRef.current && itemsContainerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: itemsContainerRef.current,
              start: "top 70%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }

      // Stagger items reveal slightly
      const items = itemsContainerRef.current?.querySelectorAll(".timeline-node");
      if (items && items.length > 0) {
        items.forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            x: 20,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineEntries = [
    {
      index: "01",
      category: "INDUSTRY EXPERIENCE",
      role: "Full Stack Developer Intern",
      organization: "Codec Technologies India",
      period: "AUG 2026 — PRESENT",
      type: "Full-time · Hybrid",
      description:
        "Contributing to full-stack development as part of an industry-oriented internship — currently building a blog website — while applying practices like debugging, testing, and version control alongside a project team.",
      tags: ["Full-Stack", "Web Development", "Git & CI/CD", "Team Collaboration"],
    },
    {
      index: "02",
      category: "COMPETITIVE ENGINEERING",
      role: "Hackathon Team Lead",
      organization: "4 National-Level Hackathons",
      period: "2025 — 2026",
      type: "National Level",
      description:
        "Led 4 national-level hackathon teams, finalists in all 4 (including Rising India Hackathon 1.0 with SafeRide).",
      tags: ["Team Leadership", "Rapid Prototyping", "Pitching", "System Architecture"],
    },
    {
      index: "03",
      category: "ACADEMIC & COMMUNITY INITIATIVES",
      role: "Project Lead & AWS Builder Member",
      organization: "PRPCEM & AWS Student Builder Group",
      period: "JUL 2026 — PRESENT",
      type: "Leadership & Community",
      description:
        "Directing an 11-member engineering team for the Semester III Community Engagement Project, organizing milestones and deliverables. Actively serving as an official Member of the AWS Student Builder Group at PRPCEM, driving peer cloud workshops and architecture labs.",
      tags: ["11-Member Lead", "AWS Builder", "Community Engagement", "Workshops"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15"
    >
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
          § 03 / CHRONOLOGY
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] font-normal mb-4">
          Experience &amp; Leadership
        </h2>
        <p className="font-sans text-base text-[var(--muted)] max-w-2xl leading-relaxed">
          Production internships, high-stakes hackathon leadership, and technical community initiatives built on continuous shipping.
        </p>
      </div>

      {/* Relative container holding the animated drawing line */}
      <div ref={itemsContainerRef} className="relative pl-6 sm:pl-10 md:pl-16">
        
        {/* Background static ruler guide */}
        <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-[var(--ink)]/15" />

        {/* Dynamic Scrubbed SVG/CSS Drawing Line in Accent Color */}
        <div
          ref={lineRef}
          className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--accent)] origin-top will-change-transform"
          style={{ transform: "scaleY(0)" }}
        />

        {/* Timeline Nodes */}
        <div className="space-y-16 md:space-y-24">
          {timelineEntries.map((entry) => (
            <div
              key={entry.index}
              className="timeline-node relative border border-[var(--ink)]/15 bg-[var(--paper)] p-6 sm:p-8 hover:border-[var(--accent)] transition-colors group"
            >
              {/* Bullet Node Anchor on the vertical line */}
              <div className="absolute -left-6 sm:-left-10 md:-left-16 top-8 -translate-x-[5px] w-3 h-3 border-2 border-[var(--ink)] bg-[var(--paper)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-colors rounded-full" />

              {/* Node Header Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 mb-4 pb-4 border-b border-[var(--ink)]/10 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-[var(--accent)] font-semibold">{entry.index}</span>
                  <span className="text-[var(--muted)] uppercase tracking-widest">
                    {entry.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[var(--ink)] font-medium">
                  <span className="text-[var(--accent)]">●</span>
                  <span>{entry.period}</span>
                </div>
              </div>

              {/* Role & Org */}
              <div className="mb-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] font-normal group-hover:text-[var(--accent)] transition-colors">
                  {entry.role}
                </h3>
                <p className="font-mono text-xs text-[var(--muted)] mt-1">
                  {entry.organization} · <span className="text-[var(--ink)]">{entry.type}</span>
                </p>
              </div>

              {/* Description */}
              <p className="font-sans text-base text-[var(--ink)]/85 leading-relaxed mb-6 font-normal">
                {entry.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--ink)]/10 font-mono text-[10px] uppercase">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--ink)]/15 px-2.5 py-1 text-[var(--muted)] group-hover:border-[var(--accent)]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
