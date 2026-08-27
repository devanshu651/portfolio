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
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Frontend & Frameworks",
      skills: ["Flutter", "Next.js", "React", "Tailwind CSS", "HTML5/CSS3"],
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Vision & AI",
      skills: ["OpenCV", "Machine Learning", "LLM APIs", "PromptLab Evaluation"],
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Tools & Workflow",
      skills: ["Android Studio", "Git & GitHub", "Docker", "VS Code"],
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "GitHub",
      value: "github.com/devanshu651",
      href: "https://github.com/devanshu651",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/devanshu-raut",
      href: "https://www.linkedin.com/in/devanshu-raut-641828331/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* 1. HOME / HERO SECTION */}
      <section id="home" className="hero-section bg-[#050505] flex items-center relative overflow-hidden">
        {/* Cinematic Background: Color Wash + Film Grain */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Soft Violet/Purple Wash in Top-Left */}
          <div className="absolute -top-[20%] -left-[10%] w-[100%] h-[100%] md:w-[70%] md:h-[90%] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.12)_0%,transparent_60%)] blur-[60px]" />
          
          {/* Static SVG Film Grain (Hidden on mobile for performance) */}
          <svg className="hidden md:block absolute inset-0 w-full h-full opacity-30 mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
            <filter id="hero-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-grain)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 reveal py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left side text */}
            <div className="col-span-12 md:col-span-7 order-2 md:order-1 max-w-2xl text-center md:text-left">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-4">
                Hi, I am Devanshu
              </p>
              
              <AnimatedHeading />

              <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-sans">
                AI &amp; ML engineering student with 5+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and 10+ certifications including Microsoft and IIT Kanpur — focused on building intelligent, full-stack systems.
              </p>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-zinc-200 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                </a>

                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06] hover:border-white/20 active:scale-95 backdrop-blur-sm"
                >
                  About Me
                </a>

                {/* Social Links inside hero */}
                <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-6 h-10">
                  <a
                    href="https://github.com/devanshu651"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-[#0a66c2] transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right side headshot image */}
            <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col items-center justify-center md:justify-end relative mb-8 md:mb-0">
              {/* Decorative premium neon glow ring behind photo */}
              <div className="absolute inset-0 max-w-[220px] md:max-w-[280px] max-h-[275px] md:max-h-[350px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 blur-2xl -translate-y-4 translate-x-4 pointer-events-none mx-auto md:mx-0" />
              
              <div className="hero-photo relative max-w-[220px] md:max-w-[280px] aspect-[4/5] w-full rounded-full border border-white/10 bg-zinc-900/40 p-2 shadow-2xl shadow-cyan-500/5 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:shadow-cyan-500/15 group overflow-hidden">
                {/* Internal background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <img
                  src="/avatar.png"
                  alt="Devanshu Raut Headshot"
                  className="rounded-full w-full h-full object-cover border border-white/5 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
              </div>

              {/* Mobile-only badge and subtitle below the photo */}
              <div className="md:hidden flex flex-col items-center mt-3.5 space-y-2.5 z-10">
                {/* Status Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-white/10 bg-zinc-900/80 text-[11px] font-medium tracking-wide text-zinc-300 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
                  <span>Open to opportunities</span>
                </div>
                {/* Professional Subtitle */}
                <p className="text-xs font-mono text-zinc-400 font-medium tracking-wide">
                  AI/ML Engineer &middot; CS Undergraduate
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-white/10 reveal">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
              About Me
            </h2>
            
            {/* Stats Row */}
            <div className="flex flex-col gap-3 mt-6 text-sm font-mono text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> 5+ Personal Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> 6+ Industry Simulations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span> 10+ Certifications
              </span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-lg text-zinc-400 leading-relaxed font-sans">
            <p className="text-white font-semibold text-xl">
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
            
            <div className="pt-2">
              <h3 className="text-white font-semibold text-xl mb-3">Experience</h3>
              <div className="space-y-1">
                <p className="text-zinc-200 font-medium">Full Stack Developer Intern — Codec Technologies India <span className="text-zinc-500 font-normal text-sm ml-2">(Full-time &middot; Hybrid)</span></p>
                <p className="text-sm text-emerald-400 font-mono mb-2">Aug 2026 &ndash; Present</p>
                <p className="text-base text-zinc-400">
                  Contributing to full-stack development as part of an industry-oriented internship — currently building a blog website — while applying practices like debugging, testing, and version control alongside a project team.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-white font-semibold text-xl mb-3">Leading Beyond the Code</h3>
              <ul className="space-y-3 list-none text-base">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1.5 leading-none">&bull;</span>
                  <span>I&apos;ve led 3 national-level hackathon teams — finalists in 2, and cleared 2 rounds in the third.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-3 mt-1.5 leading-none">&bull;</span>
                  <span>I&apos;m also leading an 11-member team for my Semester III Community Engagement Project, and a Member of the AWS Student Builder Group at PRPCEM (Jul 2026–Present).</span>
                </li>
              </ul>
            </div>

            <p className="pt-2 text-zinc-300 font-medium italic">
              Currently looking for internships and collaborations — if you&apos;re building something interesting, let&apos;s talk.
            </p>
          </div>

        </div>

        {/* Philosophy / Approach */}
        <div className="mt-20">
          <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-8">
            My Approach
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-white font-medium mb-2 font-display tracking-wide">Build to Learn</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">Theory is important, but implementation is where real learning happens. I prioritize hands-on projects and deep debugging.</p>
            </div>
            <div className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-4 text-zinc-300 group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-white font-medium mb-2 font-display tracking-wide">Performance First</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">I care about fast, efficient code. From native Kotlin apps with clean architecture to responsive, highly-optimized Next.js frontends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-white/10 reveal">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
            Selected work focused on learning by building real, usable systems. Click any card to view detailed case studies, design choices, and code walkthroughs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Card subtle neon gradient effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold font-display text-white group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <svg className="w-5 h-5 text-zinc-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-zinc-300 font-mono uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-white/10 reveal">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
            A breakdown of my technical toolkit, structured by areas of application. I focus on modern, robust languages and workflows.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/15 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {/* Category glow background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center transition-colors group-hover:bg-white/[0.08]">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-medium font-display tracking-wide text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded border border-white/5 bg-white/[0.02] text-xs text-zinc-300 font-mono hover:border-white/15 hover:bg-white/[0.05] hover:text-white transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <Certifications />

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-white/10 reveal">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
            Contact
          </h2>
          <p className="mt-4 text-zinc-400 text-base max-w-xl mx-auto leading-relaxed">
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
              className="group relative flex flex-col p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.05] transition-all duration-300 mb-5">
                  {contact.icon}
                </div>
                
                <h3 className="text-sm font-semibold font-display tracking-wide text-white mb-1">
                  {contact.title}
                </h3>
                
                <p className="text-xs text-zinc-500 font-mono group-hover:text-zinc-400 transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
