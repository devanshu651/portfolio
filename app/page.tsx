import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Building real systems,
              <br />
              learning by doing.
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              I’m a first-year engineering student focused on strengthening
              fundamentals by building practical projects in software, data,
              and AI.
            </p>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-black font-medium transition hover:opacity-90"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* FEATURED PROJECT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-semibold text-white">
          Featured Project
        </h2>

        <p className="mt-3 text-zinc-400 max-w-2xl">
          A project that represents how I approach real-world problems using
          practical system design.
        </p>

       <div className="group mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06]">

          <div className="group mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.06]">

  <h3 className="text-xl font-medium text-white">
    CampusEye AI
  </h3>

  {/* Meta */}
  <div className="mt-4 flex flex-wrap gap-2 text-xs">
    <span className="rounded-full border border-white/20 px-3 py-1 text-zinc-300">
      Solo Project
    </span>
    <span className="rounded-full border border-white/20 px-3 py-1 text-zinc-300">
      AI / Computer Vision
    </span>
  </div>

  <p className="mt-3 text-zinc-400 max-w-2xl">
    A smart Face-ID based attendance system built as a solo project,
    focusing on real-time face recognition, reliability, and usability.
  </p>

  {/* buttons etc */}
</div>


          <div className="mt-6 flex gap-4">
            <Link
              href="/projects/campuseye-ai"
              className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-black font-medium transition group-hover:translate-x-1"
            >
              View Project →
            </Link>

            <span className="inline-flex items-center rounded-md border border-white/20 px-5 py-2.5 text-zinc-400">
              Demo: Local
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
