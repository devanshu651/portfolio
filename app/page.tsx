"use client";

import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";
import Certifications from "./components/Certifications";

export default function Home() {
  const projects = [
    {
      title: "SafeRide",
      description: "A comprehensive travel safety and ride-sharing application with real-time risk analysis.",
      href: "/projects/saferide",
      tags: ["Flutter", "Node.js", "AI"],
    },
    {
      title: "CampusEye AI",
      description: "Smart Face-ID based attendance system using real-time face recognition.",
      href: "/projects/campuseye-ai",
      tags: ["Computer Vision", "Python"],
    },
    {
      title: "PromptLab Pro",
      description: "Research-grade platform for evaluating LLM prompts with measurable metrics.",
      href: "/projects/promptlab",
      tags: ["LLMs", "Evaluation"],
    },
    {
      title: "DeVinci Music Player",
      description: "Minimalist Android music player with local and online playback.",
      href: "/projects/devinci-player",
      tags: ["Android", "Kotlin"],
    },
    {
      title: "Personal Portfolio",
      href: "/#home",
      description: "A minimalist developer portfolio built with Next.js and Tailwind CSS.",
      tags: ["Next.js", "Tailwind CSS"],
    },
  ];

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
      {/* 1. HOME / HERO SECTION */}
      <section id="home" className="hero-section bg-[var(--paper)] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left side text */}
            <div className="col-span-12 md:col-span-7 order-2 md:order-1 max-w-2xl text-center md:text-left">
              {/* Eyebrow */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                <span>§ VOL. 01</span>
                <span>·</span>
                <span>AUTONOMOUS SYSTEMS &amp; AI</span>
              </div>
              
              <AnimatedHeading />

              <p className="mt-8 text-base md:text-lg text-[var(--ink)]/80 leading-relaxed max-w-2xl font-sans">
                AI &amp; ML engineering student with 5+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and 10+ certifications including Microsoft and IIT Kanpur — focused on building intelligent, full-stack systems.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center bg-[var(--ink)] text-[var(--paper)] px-8 py-3.5 font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors"
                >
                  View Projects ↓
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center border border-[var(--ink)]/20 bg-transparent px-8 py-3.5 font-mono text-xs uppercase tracking-wider text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  About Me →
                </a>

                {/* Social Links inside hero */}
                <div className="flex items-center gap-4 ml-2 border-l border-[var(--ink)]/15 pl-6 h-10">
                  <a
                    href="https://github.com/devanshu651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side portrait: clean cut-out with intentional slight rotation, no purple/cyan glow */}
            <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center md:justify-end relative mb-8 md:mb-0">
              <div className="relative max-w-[220px] md:max-w-[270px] aspect-[4/5] w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-2 shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                <img
                  src="/avatar.png"
                  alt="Devanshu Raut Headshot"
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:filter-none transition-all duration-500"
                />
                <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest text-[var(--muted)] bg-[var(--paper)] px-1.5 py-0.5 border border-[var(--ink)]/10">
                  FIG. 01
                </span>
              </div>

              {/* Status pill below the photo */}
              <div className="flex flex-col items-center mt-4 space-y-1.5 z-10 font-mono text-xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--ink)]/15 bg-[var(--paper)] text-[var(--ink)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="text-[11px] uppercase tracking-wider">Open to opportunities</span>
                </div>
                <p className="text-[11px] text-[var(--muted)] uppercase tracking-wide">
                  Amravati, IN · CS (AI &amp; ML)
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-[var(--ink)]/15">
        <div className="grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
              § 02 — BIOGRAPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--ink)] font-normal mb-6">
              About Me
            </h2>
            
            {/* Stats Row */}
            <div className="flex flex-col gap-3 mt-6 text-xs font-mono text-[var(--muted)] border-l border-[var(--ink)]/15 pl-4">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> 5+ Shipped Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> 6+ Industry Simulations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span> 10+ Certifications
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-base md:text-lg text-[var(--ink)]/80 leading-relaxed font-sans">
            <p className="font-serif text-2xl sm:text-3xl text-[var(--ink)] italic font-normal leading-snug">
              I don&apos;t just study AI — I build with it.
            </p>
            <p>
              I&apos;m Devanshu — a builder first, student second. While most of my coursework is still ahead of me, my shipped work isn&apos;t: SafeRide is a live safety app (Flutter + Firebase) built from scratch, and PromptLab Pro is my own platform for evaluating LLM prompts against measurable metrics, not gut feel.
            </p>
            <p>
              I work across Python, C, Java, R, and Flutter, moving from computer-vision systems like CampusEye AI to responsive Next.js frontends — I&apos;d rather ship something rough and iterate than perfect something in theory.
            </p>
            <p>
              That build-first instinct is backed by four job simulations — AWS solutions architecture, GenAI-powered analytics at Tata Group, data analytics at Deloitte, and software engineering at HPE — that shaped how I think about production-grade systems, not just class projects.
            </p>
            
            <div className="pt-4 border-t border-[var(--ink)]/10">
              <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-3">Experience</h3>
              <div className="space-y-1">
                <p className="text-[var(--ink)] font-medium">Full Stack Developer Intern — Codec Technologies India <span className="text-[var(--muted)] font-normal text-xs font-mono ml-2">(Full-time · Hybrid)</span></p>
                <p className="text-xs text-[var(--accent)] font-mono mb-2">Aug 2026 – Present</p>
                <p className="text-base text-[var(--muted)]">
                  Contributing to full-stack development as part of an industry-oriented internship — currently building a blog website — while applying practices like debugging, testing, and version control alongside a project team.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--ink)]/10">
              <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-3">Leading Beyond the Code</h3>
              <ul className="space-y-3 list-none text-base text-[var(--ink)]/80 p-0 m-0">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-3 mt-1.5 font-mono text-sm">§</span>
                  <span>I&apos;ve led 3 national-level hackathon teams — finalists in 2, and cleared 2 rounds in the third.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-3 mt-1.5 font-mono text-sm">§</span>
                  <span>I&apos;m also leading an 11-member team for my Semester III Community Engagement Project, and a Member of the AWS Student Builder Group at PRPCEM (Jul 2026–Present).</span>
                </li>
              </ul>
            </div>

            <p className="pt-4 text-[var(--ink)] font-serif italic text-lg border-t border-[var(--ink)]/10">
              Currently looking for internships and collaborations — if you&apos;re building something interesting, let&apos;s talk.
            </p>
          </div>

        </div>

        {/* Philosophy / Approach */}
        <div className="mt-20 pt-12 border-t border-[var(--ink)]/15">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-6">
            § 02.1 — APPROACH &amp; PHILOSOPHY
          </span>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors">
              <div className="font-mono text-xs text-[var(--muted)] mb-3">01 / PRINCIPLE</div>
              <h4 className="font-serif text-2xl text-[var(--ink)] font-normal mb-2">Build to Learn</h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                Theory is important, but implementation is where real learning happens. I prioritize hands-on projects and deep debugging.
              </p>
            </div>
            <div className="p-6 border border-[var(--ink)]/15 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors">
              <div className="font-mono text-xs text-[var(--muted)] mb-3">02 / PRINCIPLE</div>
              <h4 className="font-serif text-2xl text-[var(--ink)] font-normal mb-2">Performance First</h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed font-sans">
                I care about fast, efficient code. From native Kotlin apps with clean architecture to responsive, highly-optimized Next.js frontends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-[var(--ink)]/15">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 03 — SELECTED WORK
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--ink)] font-normal mb-3">
            Projects
          </h2>
          <p className="text-[var(--muted)] max-w-2xl text-base leading-relaxed font-sans">
            Selected work focused on learning by building real, usable systems. Click any project to view detailed case studies, design choices, and code walkthroughs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col border border-[var(--ink)]/15 bg-[var(--paper)] p-6 hover:border-[var(--accent)] transition-colors"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--ink)]/10">
                <span className="font-mono text-[10px] text-[var(--muted)]">0{i + 1}</span>
                <span className="font-mono text-xs text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                  VIEW ↗
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)] font-normal group-hover:text-[var(--accent)] transition-colors mb-3">
                {project.title}
              </h3>

              <p className="text-[var(--muted)] text-sm leading-relaxed mb-6 flex-grow font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--ink)]/10">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-[var(--ink)]/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-[var(--ink)]/15">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 04 — SPECIFICATIONS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--ink)] font-normal mb-3">
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

      {/* CERTIFICATIONS SECTION */}
      <Certifications />

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-[var(--ink)]/15">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 06 — INQUIRIES &amp; NETWORK
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
