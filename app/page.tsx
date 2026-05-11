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
                <svg className="w-4 h-4 text-slate-500 transition-colors group-hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/devanshu651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] active:scale-95"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 transition-colors group-hover:text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/devanshu-raut-641828331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 hover:bg-black hover:text-[#0a66c2] hover:border-[#0a66c2] hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] active:scale-95"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 transition-colors group-hover:text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
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