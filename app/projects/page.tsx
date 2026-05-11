import Link from "next/link";

const projects = [
  {
    title: "SafeRide",
    description:
      "A comprehensive travel safety and ride-sharing application with real-time risk analysis.",
    href: "/projects/saferide",
    tag: "Flutter · Node.js · AI",
  },
  {
    title: "CampusEye AI",
    description:
      "Smart Face-ID based attendance system using real-time face recognition.",
    href: "/projects/campuseye-ai",
    tag: "Computer Vision · AI",
  },
  {
    title: "PromptLab Pro",
    description:
      "Research-grade platform for evaluating LLM prompts with measurable metrics.",
    href: "/projects/promptlab",
    tag: "LLMs · Python · Evaluation",
  },
  {
    title: "DeVinci Music Player",
    description:
      "Minimalist Android music player with local and online playback.",
    href: "/projects/devinci-player",
    tag: "Android · Kotlin",
  },
  {
    title: "Personal Portfolio",
    description:
      "A minimalist developer portfolio built with Next.js and Tailwind.",
    href: "/",
    tag: "Frontend · Next.js",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
      
      {/* Heading */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="mt-4 text-zinc-400 max-w-2xl">
          Selected work focused on learning by building real, usable systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group block rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] active:scale-95"
          >
            <div className="flex flex-col h-full">
              
              <h2 className="text-xl font-semibold text-white group-hover:underline underline-offset-4">
                {project.title}
              </h2>

              <p className="mt-3 text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto pt-6 text-sm text-zinc-500">
                {project.tag}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
