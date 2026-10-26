import Link from "next/link";

export default function DeVinciPlayer() {
  return (
    <article className="max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-32">
      {/* Back Link */}
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors link-sweep"
        >
          <span>←</span>
          <span>RETURN TO REPOSITORY INDEX</span>
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-[var(--ink)]/15 pb-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
          <span className="text-[var(--accent)] font-semibold">§ PLATE 04</span>
          <span>·</span>
          <span>NATIVE ANDROID CLIENT &amp; MEDIA ENGINE</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[var(--ink)] leading-[0.95]">
          DeVinci Music Player
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--ink)]/80 leading-relaxed font-sans max-w-3xl font-light">
          Minimalist Android music player built to eliminate streaming ads and provide a clean, uninterrupted listening experience.
        </p>
      </header>

      {/* Visual Artifact Presentation */}
      <div className="my-14 flex justify-center">
        <div className="relative max-w-sm w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-3 shadow-2xl">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

          <div className="relative overflow-hidden border border-[var(--ink)]/10 bg-[var(--ink)]/5">
            <img
              src="/devinci-ui.png"
              alt="DeVinci Music Player UI"
              className="w-full h-auto object-contain filter contrast-105"
            />
          </div>

          <div className="mt-2 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)]">
            <span>FIGURE 04.1 · MATERIAL 3 MOBILE UI</span>
            <span>KOTLIN / ANDROID STUDIO</span>
          </div>
        </div>
      </div>

      {/* Technical Dossier Content */}
      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal">
            Overview
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              DeVinci is a premium-style Android music player designed around a simple idea: music apps should focus on the music, not advertisements. I built it to combine local playback with online streaming while keeping the interface minimal and fast.
            </p>
            <p>
              The app uses a modern Material 3 interface and a background playback engine powered by Android Media3 (ExoPlayer). It supports local library scanning, online track search, queue management, and smooth background playback.
            </p>
          </div>
        </section>

        {/* Why I Built This */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-4">
            Why I Built This
          </h2>
          <p className="text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            I built DeVinci after getting frustrated with the constant ads and restrictions in mainstream music apps. The goal was to create a lightweight player that feels premium while still giving users full control over their listening experience.
          </p>
        </section>

        {/* Technologies Used */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Kotlin",
              "Android Studio",
              "MVVM Architecture",
              "Media3 (ExoPlayer)",
              "Retrofit",
              "OKHttp",
              "Material 3",
              "Glide",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-[var(--ink)]/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--ink)] bg-[var(--paper)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Actions */}
        <div className="pt-10 border-t border-[var(--ink)]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
          <a
            href="https://github.com/devanshu651/DeVinci"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 hover:bg-[var(--accent)] transition-colors"
          >
            <span>VIEW REPOSITORY SOURCE</span>
            <span>↗</span>
          </a>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 border border-[var(--ink)]/20 text-[var(--ink)] px-6 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <span>BACK TO ALL PROJECTS</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}