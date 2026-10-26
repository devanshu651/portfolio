import Link from "next/link";
import Image from "next/image";

export default function PromptLab() {
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
          <span className="text-[var(--accent)] font-semibold">§ PLATE 03</span>
          <span>·</span>
          <span>LLM BENCHMARKING &amp; DETERMINISM WORKBENCH</span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[var(--ink)] leading-[0.95]">
          PromptLab Pro
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--ink)]/80 leading-relaxed font-sans max-w-3xl font-light">
          A research-grade platform for evaluating LLM prompts using measurable metrics rather than intuition.
        </p>
      </header>

      {/* Visual Artifact Presentation */}
      <div className="my-14 flex justify-center">
        <div className="relative max-w-2xl w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-3 shadow-2xl">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

          <div className="relative overflow-hidden border border-[var(--ink)]/10 bg-[var(--ink)]/5">
            <Image
              src="/promptlab-ui.png"
              alt="PromptLab Pro UI Interface"
              width={900}
              height={550}
              className="w-full h-auto object-cover filter contrast-105"
              priority
            />
          </div>

          <div className="mt-2 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)]">
            <span>FIGURE 03.1 · EVALUATION BENCHMARK DASHBOARD</span>
            <span>STREAMLIT / PYTHON ENGINE</span>
          </div>
        </div>
      </div>

      {/* Technical Dossier Content */}
      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal">
            Platform Overview
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              PromptLab was built to solve a core problem in prompt engineering — inconsistency. The same prompt can produce different outputs across runs, making evaluation unreliable.
            </p>
            <p>
              This system replaces intuition with structured evaluation using metrics like determinism, similarity, and instruction adherence. It enables systematic testing of prompts under controlled conditions.
            </p>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Key Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Multi-run Variability Analysis", desc: "Analyzes variance and output drift across repeated model generations." },
              { title: "Temperature Sweep Testing", desc: "Maps determinism curve across temperature intervals 0.0 to 1.5." },
              { title: "Prompt A/B Comparison", desc: "Side-by-side programmatic diffing of instruction responses." },
              { title: "Determinism Index (DI)", desc: "Quantified score for repeatability across production prompt cycles." },
              { title: "Hallucination Risk Detection", desc: "Evaluates grounding and deviation from provided reference context." },
            ].map((cap, i) => (
              <div key={i} className="p-5 border border-[var(--ink)]/15 bg-[var(--paper)]">
                <span className="font-mono text-xs text-[var(--accent)] block mb-1">§ 0{i + 1}</span>
                <h3 className="font-serif text-xl text-[var(--ink)] font-normal mb-1">{cap.title}</h3>
                <p className="font-sans text-sm text-[var(--muted)]">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="pt-8 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {[
              "Python",
              "Streamlit",
              "OpenRouter",
              "TF-IDF",
              "LLM APIs",
              "Pandas",
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
            href="https://github.com/devanshu651/PromptLab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 hover:bg-[var(--accent)] transition-colors"
          >
            <span>VIEW CODE ON GITHUB</span>
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