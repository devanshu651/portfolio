import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <div className="reveal">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-white">
          About
        </h1>

        {/* Stats Row */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-mono text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 5+ Projects
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> 6+ Simulations
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> 10+ Certifications
          </span>
        </div>
      </div>

      <div className="mt-12 space-y-6 text-lg text-zinc-400 leading-relaxed reveal" style={{ transitionDelay: '100ms' }}>
        <p>
          AI & ML engineering student focused on building intelligent, full-stack systems instead of just following tutorials. My goal is to bridge the gap between theoretical computer science and practical, usable software.
        </p>

        <p>
          I believe that the best way to understand a technology is to break it, debug it, and build something meaningful with it. Whether it&apos;s training computer vision models, building native Android applications, or crafting fast web experiences, I enjoy the entire stack.
        </p>
      </div>

      <div className="my-16 h-px w-full bg-gradient-to-r from-white/10 to-transparent reveal" />

      {/* Philosophy / Approach */}
      <div className="mt-16 reveal" style={{ transitionDelay: '200ms' }}>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-8">
          My Approach
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-4 text-zinc-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="text-white font-medium mb-2 font-display tracking-wide">Build to Learn</h3>
            <p className="text-sm text-zinc-400">Theory is important, but implementation is where real learning happens. I prioritize hands-on projects.</p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center mb-4 text-zinc-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-white font-medium mb-2 font-display tracking-wide">Performance First</h3>
            <p className="text-sm text-zinc-400">I care about fast, efficient code. From native Kotlin apps to optimized Next.js frontends.</p>
          </div>
        </div>
      </div>

      <div className="my-16 h-px w-full bg-gradient-to-r from-white/10 to-transparent reveal" />

      {/* Skills */}
      <div className="mt-16 reveal" style={{ transitionDelay: '300ms' }}>
        <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-8">
          Core Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Kotlin", "TypeScript", "Next.js", "Tailwind CSS", "OpenCV", "Android Studio", "SQL", "Git", "Docker"].map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.02] text-xs text-zinc-300 font-mono hover:bg-white/[0.06] hover:text-white transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 pt-12 border-t border-white/10 reveal" style={{ transitionDelay: '400ms' }}>
        <h2 className="text-2xl font-display text-white mb-4 tracking-tight">Let&apos;s build something.</h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          Always open to collaborating on interesting projects or discussing new technologies.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-zinc-200 active:scale-95"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
