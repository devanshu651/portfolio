import Link from "next/link";
import Image from "next/image";

export default function SafeRide() {
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
          <span className="text-[var(--accent)] font-semibold">§ PLATE 01</span>
          <span>·</span>
          <span>TRAVEL SAFETY &amp; SOS SYSTEM</span>
          <span>·</span>
          <span>RISING INDIA HACKATHON 1.0</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[var(--ink)] leading-[0.95]">
          SafeRide
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--ink)]/80 leading-relaxed font-sans max-w-3xl font-light">
          Driver Behavior Risk Analyzer – A comprehensive travel safety application for late-night and long-distance travel.
        </p>
      </header>

      {/* Visual Artifact Presentation */}
      <div className="my-14 flex justify-center">
        <div className="relative max-w-md w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-3 shadow-2xl">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

          <div className="relative overflow-hidden border border-[var(--ink)]/10 bg-[var(--ink)]/5">
            <Image
              src="/saferide-ui.png"
              alt="SafeRide UI Interface"
              width={800}
              height={500}
              className="w-full h-auto object-contain filter contrast-105"
              priority
            />
          </div>

          <div className="mt-2 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)]">
            <span>FIGURE 01.1 · INTERFACE OVERVIEW</span>
            <span>FLUTTER / DART CLIENT</span>
          </div>
        </div>
      </div>

      {/* Technical Dossier Content */}
      <div className="space-y-12">
        {/* Overview */}
        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal">
            System Overview
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              SafeRide was built during the Rising India Hackathon 1.0 (Team Nexus) to address the risks associated with late-night and long-distance travel. The platform combines ride-sharing functionality with real-time safety monitoring and emergency support systems.
            </p>
            <p>
              The system evaluates ride safety using an AI Safety Score based on time, route, and driver history. Key features include a Smart SOS system, Guardian Mode for real-time tracking, and a visual Route Heatmap.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Key Architecture &amp; Features
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Ride Sharing System", desc: "Post or find rides based on route and schedule." },
              { title: "AI Safety Score", desc: "Evaluates ride safety on a 0-100 scale based on dynamic factors." },
              { title: "Smart SOS", desc: "One-tap emergency alert sending live location to contacts." },
              { title: "Guardian Mode", desc: "Real-time tracking access for family members." },
              { title: "Route Heatmap", desc: "Visual safety indicators (Green, Orange, Red) mapping risk levels." },
            ].map((f, i) => (
              <div key={i} className="p-5 border border-[var(--ink)]/15 bg-[var(--paper)]">
                <span className="font-mono text-xs text-[var(--accent)] block mb-1">§ 0{i + 1}</span>
                <h3 className="font-serif text-xl text-[var(--ink)] font-normal mb-1">{f.title}</h3>
                <p className="font-sans text-sm text-[var(--muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Used */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Flutter",
              "Node.js",
              "Express",
              "Firebase Firestore",
              "Google Maps API",
              "Python (AI Module)",
              "Firebase Auth",
              "Twilio",
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

        {/* Actions / Metadata */}
        <div className="pt-10 border-t border-[var(--ink)]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
          <span className="border border-[var(--ink)]/20 px-4 py-2 text-[var(--muted)]">
            HACKATHON PROJECT · TEAM NEXUS
          </span>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 hover:bg-[var(--accent)] transition-colors"
          >
            <span>BACK TO ALL PROJECTS</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
