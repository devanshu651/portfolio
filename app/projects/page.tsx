import Link from "next/link";

const projects = [
  {
    title: "SafeRide",
    description: "A comprehensive travel safety and ride-sharing application with real-time risk analysis.",
    href: "/projects/saferide",
    tags: ["Flutter", "Node.js", "AI"],
  },
  {
    title: "CampusEye AI",
    description: "Smart Face-ID based attendance system using real-time face recognition.",
    href: "/projects/campuseye-ai",
    tags: ["Computer Vision", "Python"],
  },
  {
    title: "PromptLab Pro",
    description: "Research-grade platform for evaluating LLM prompts with measurable metrics.",
    href: "/projects/promptlab",
    tags: ["LLMs", "Evaluation"],
  },
  {
    title: "DeVinci Music Player",
    description: "Minimalist Android music player with local and online playback.",
    href: "/projects/devinci-player",
    tags: ["Android", "Kotlin"],
  },
  {
    title: "Personal Portfolio",
    description: "A minimalist developer portfolio built with Next.js and Tailwind.",
    href: "/",
    tags: ["Next.js", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      {/* Heading */}
      <div className="mb-16 reveal">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display text-white">
          Projects
        </h1>
        <p className="mt-4 text-zinc-400 max-w-2xl text-lg">
          Selected work focused on learning by building real, usable systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Link
            key={project.title}
            href={project.href}
            className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold font-display text-white group-hover:text-zinc-200">
                {project.title}
              </h2>
              <svg className="w-5 h-5 text-zinc-600 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="rounded bg-white/[0.04] px-2 py-1 text-[10px] font-medium text-zinc-300 font-mono uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
