import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950
 px-6">
      {/* Hero */}
 <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
  {/* subtle background glow */}
  <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

  <div className="relative max-w-3xl text-left">
    <h1 className="text-[2.75rem] leading-tight font-semibold text-white">
      I’m a first-year engineering student learning by building real things.
    </h1>

    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
      I explore different technologies through hands-on projects, following what genuinely excites my curiosity.
    </p>
  </div>
</section>


      {/* Projects */}
      <section className="mx-auto max-w-3xl py-24">
      <h2 className="text-xl font-semibold tracking-tight text-white">

          Projects
        </h2>

        <p className="mt-2 text-zinc-400">
          A few things I’ve built while learning and experimenting.
        </p>

        <ul className="mt-8 space-y-4">

       <li className="rounded-xl border border-white/10 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20">

 <h3 className="text-base font-medium text-white">

    <Link href="/projects/campuseye-ai">
      CampusEye AI
    </Link>
  </h3>

  <p className="mt-1 text-zinc-400">
    A smart face-recognition–based attendance system built as a solo project.
  </p>

  <div className="mt-3 flex gap-4 text-sm">
    <a
      href="https://github.com/devanshu651/CampusEye-AI"
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white"
    >
      GitHub
    </a>

    <span className="text-zinc-600">•</span>

    <span className="text-zinc-500">
      Runs locally
    </span>
  </div>
</li>

<li className="rounded-xl border border-white/10 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20">

  <h3 className="text-lg font-medium text-white">
    Personal Portfolio Website
  </h3>

  <p className="mt-1 text-zinc-400">
    A portfolio built from scratch to document my learning journey.
  </p>

  <div className="mt-3 text-sm text-zinc-500">
    This website
  </div>
</li>


        </ul>
      </section>
    </main>
  );
}
