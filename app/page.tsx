"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import Certifications from "./components/Certifications";

export default function Home() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C", "Java", "R", "Kotlin", "TypeScript", "SQL"],
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Frontend & Frameworks",
      skills: ["Flutter", "Next.js", "React", "Tailwind CSS", "HTML5/CSS3"],
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Vision & AI",
      skills: ["OpenCV", "Machine Learning", "LLM APIs", "PromptLab Evaluation"],
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Tools & Workflow",
      skills: ["Android Studio", "Git & GitHub", "Docker", "VS Code"],
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const contacts = [
    {
      title: "Email",
      value: "rautdevanshu24@gmail.com",
      href: "mailto:rautdevanshu24@gmail.com",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "GitHub",
      value: "github.com/devanshu651",
      href: "https://github.com/devanshu651",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/devanshu-raut",
      href: "https://www.linkedin.com/in/devanshu-raut-641828331/",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* 1. EDITORIAL HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION WITH COUNT-UP STATS & SCRUBBED REVEAL */}
      <AboutSection />

      {/* 3. VERTICAL TIMELINE WITH DRAWING LINE ON SCROLL */}
      <TimelineSection />

      {/* 4. PROJECTS: STICKY STACK SHOWCASE + CURSOR-LERPED INDEX LIST */}
      <ProjectsSection />

      {/* 5. SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 05 — SPECIFICATIONS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)] font-normal mb-3">
            Skills &amp; Technologies
          </h2>
          <p className="text-[var(--muted)] max-w-2xl text-base leading-relaxed font-sans">
            A breakdown of my technical toolkit, structured by areas of application. I focus on modern, robust languages and workflows.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="border border-[var(--ink)]/15 bg-[var(--paper)] p-6 hover:border-[var(--accent)] transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--ink)]/10">
                <span className="font-mono text-[10px] text-[var(--muted)]">0{i + 1}</span>
                <span className="text-[var(--ink)]">{category.icon}</span>
              </div>

              <h3 className="font-serif text-xl text-[var(--ink)] font-normal mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--ink)]/10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 border border-[var(--ink)]/15 text-xs text-[var(--ink)] font-mono hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CERTIFICATIONS SECTION */}
      <Certifications />

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 07 — INQUIRIES &amp; NETWORK
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-[var(--ink)] font-normal mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-[var(--muted)] text-base leading-relaxed font-sans">
            If you&apos;d like to collaborate, discuss engineering ideas, or just talk about building real systems, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
          {contacts.map((contact, i) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="w-10 h-10 border border-[var(--ink)]/15 flex items-center justify-center mb-4 text-[var(--ink)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                {contact.icon}
              </div>
              
              <h3 className="font-serif text-xl text-[var(--ink)] font-normal mb-1">
                {contact.title}
              </h3>
              
              <p className="font-mono text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
