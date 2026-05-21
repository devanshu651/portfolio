export default function PromptLab() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        PromptLab Pro
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-zinc-400">
        A research-grade platform for evaluating LLM prompts using measurable metrics.
      </p>

      {/* Hero Image */}
      <div className="mt-16 flex justify-center">
        <div className="w-full rounded-[2rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
          <img
            src="/promptlab-ui.png"
            alt="PromptLab Pro UI"
            className="rounded-[1.5rem] w-full border border-white/5"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-white/10" />

      {/* Description */}
      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          PromptLab was built to solve a core problem in prompt engineering —
          inconsistency. The same prompt can produce different outputs across runs,
          making evaluation unreliable.
        </p>

        <p>
          This system replaces intuition with structured evaluation using metrics
          like determinism, similarity, and instruction adherence. It enables
          systematic testing of prompts under controlled conditions.
        </p>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Key Capabilities
        </h3>

        <ul className="mt-4 space-y-2 text-zinc-300">
          <li>• Multi-run variability analysis</li>
          <li>• Temperature sweep testing</li>
          <li>• Prompt A/B comparison</li>
          <li>• Determinism Index (DI)</li>
          <li>• Hallucination risk detection</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-12">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Tech Stack
        </h3>

        <p className="mt-3 text-zinc-300">
          Python · Streamlit · OpenRouter · TF-IDF · LLM APIs
        </p>
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4">

        <a
          href="https://github.com/devanshu651/PromptLab"
          target="_blank"
          className="px-6 py-3 bg-white text-black font-medium rounded-md transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
        >
          View Code
        </a>

      </div>
    </section>
  );
}