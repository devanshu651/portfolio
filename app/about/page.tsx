import Link from "next/link";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-32 pb-24 animate-fade-up">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        About Me
      </h1>

      <div className="mt-8 space-y-6 text-lg text-zinc-400 leading-relaxed">
        <p>
          AI & ML engineering student with 5+ projects, 6+ industry simulations (Tata · Deloitte · AWS · HPE), and certifications from Microsoft and IIT Kanpur — focused on building intelligent, full-stack systems instead of just following tutorials. My goal is to bridge the gap between theoretical computer science and practical, usable software.
        </p>

        <p>
          I believe that the best way to understand a technology is to break it, debug it, and build something meaningful with it. Whether it's training computer vision models, building native Android applications, or crafting fast web experiences, I enjoy the entire stack.
        </p>
      </div>

      {/* Philosophy / Approach */}
      <div className="mt-16">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-6">
          My Approach
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-white font-medium mb-2">Build to Learn</h3>
            <p className="text-sm text-zinc-400">Theory is important, but implementation is where real learning happens. I prioritize hands-on projects.</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-white font-medium mb-2">Performance First</h3>
            <p className="text-sm text-zinc-400">I care about fast, efficient code. From native Kotlin apps to optimized Next.js frontends.</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mb-6">
          Core Technologies
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "Kotlin", "TypeScript", "Next.js", "Tailwind CSS", "OpenCV", "Android Studio", "SQL"].map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <p className="text-zinc-400 mb-6">
          Always open to collaborating on interesting projects or discussing new technologies.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-white px-6 py-3 text-black font-medium transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
