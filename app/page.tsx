import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Subtle CSS Grid Dot Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
        
        {/* Animated Gradient Glow (CSS only) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 reveal">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-4">
              Hi, I am Devanshu
            </p>
            
            <AnimatedHeading />

            <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl font-sans">
              AI & ML engineering student with 5+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and 10+ certifications including Microsoft and IIT Kanpur — focused on building intelligent, full-stack systems.
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-zinc-200 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06] hover:border-white/20 active:scale-95 backdrop-blur-sm"
              >
                About Me
              </Link>

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
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6 reveal">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32 reveal">
        <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
          Featured Project
        </h2>
        <p className="text-zinc-400 max-w-2xl mb-12">
          A project that represents how I approach real-world problems using
          practical system design and AI integration.
        </p>

        {/* Project Card */}
        <div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold font-display text-white mb-3">
              CampusEye AI
            </h3>

            {/* Meta Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="rounded bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-zinc-300 font-mono">
                Solo Project
              </span>
              <span className="rounded bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-zinc-300 font-mono">
                Computer Vision
              </span>
            </div>

            <p className="text-zinc-400 max-w-2xl leading-relaxed mb-8">
              A smart Face-ID based attendance system built as a solo project,
              focusing on real-time face recognition, reliability, and usability.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/projects/campuseye-ai"
                className="inline-flex items-center text-sm font-medium text-white transition-colors hover:text-zinc-300"
              >
                View Project
                <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* View More Projects */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/[0.02] hover:text-white"
          >
            View All Projects
          </Link>
        </div>
      </section>
    </>
  );
}
