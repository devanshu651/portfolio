import Link from "next/link";
import AnimatedHeading from "./components/AnimatedHeading";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center relative animate-fade-up">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-slate-400 text-lg md:text-xl mb-3 font-medium tracking-wide">
              Hi, I am Devanshu
            </p>
            <AnimatedHeading />

            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              AI & ML engineering student with 5+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and certifications from Microsoft and IIT Kanpur — focused on building intelligent, full-stack systems.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-slate-900 font-bold transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] hover:ring-2 hover:ring-yellow-400 active:scale-95"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.02] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.06] hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 backdrop-blur-sm"
              >
                About Me
              </Link>

              <Link
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.03] border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:scale-105 hover:bg-black hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] active:scale-95 backdrop-blur-md"
              >
                <svg className="w-4 h-4 text-slate-500 transition-colors group-hover:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Featured Project
        </h2>

        <p className="mt-3 text-slate-400 max-w-2xl">
          A project that represents how I approach real-world problems using
          practical system design.
        </p>

        {/* Project Card */}
        <div className="group mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500 hover:bg-gradient-to-br hover:from-white/[0.02] hover:to-pink-500/[0.05] hover:shadow-[0_0_50px_rgba(236,72,153,0.3)] backdrop-blur-sm">
          <h3 className="text-xl font-medium text-white transition group-hover:tracking-wide">
            CampusEye AI
          </h3>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-slate-300">
              Solo Project
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-slate-300">
              AI / Computer Vision
            </span>
          </div>

          <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">
            A smart Face-ID based attendance system built as a solo project,
            focusing on real-time face recognition, reliability, and usability.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/projects/campuseye-ai"
              className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-slate-900 font-bold transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] active:scale-95"
            >
              View Project →
            </Link>

            <span className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-zinc-400">
              Demo: Local
            </span>
          </div>
        </div>

        {/* View More Projects */}
        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition"
          >
            View More Projects →
          </Link>
        </div>
      </section>
    </>
  );
}