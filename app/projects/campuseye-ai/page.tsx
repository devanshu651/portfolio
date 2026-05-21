export default function CampusEyeAI() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        CampusEye AI
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-zinc-400">
        A smart Face-ID based attendance system focusing on real-time recognition and reliability.
      </p>

      {/* Hero Image */}
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl shadow-green-500/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/20">
          <img
            src="/campuseye-ui.png"
            alt="CampusEye AI UI"
            className="rounded-[1.5rem] w-full border border-white/5"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-px bg-white/10" />

      {/* Description */}
      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          CampusEye AI was built to solve the inefficiency of manual attendance tracking in educational institutions. Using OpenCV and Python, the system captures real-time video feeds and matches faces against a pre-registered database.
        </p>

        <p>
          The core challenge was ensuring high accuracy under varying lighting conditions and preventing spoofing. The application utilizes a lightweight local database (SQLite) to log attendance timestamps efficiently without relying on constant cloud connectivity.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-12">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Tech Stack
        </h3>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
          {[
            "Python",
            "OpenCV",
            "Face Recognition API",
            "SQLite",
            "NumPy",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-2 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4">
        <a
          href="https://github.com/devanshu651/CampusEye-AI"
          target="_blank"
          className="px-6 py-3 bg-white text-black font-medium rounded-md transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
        >
          View Code
        </a>
      </div>
    </section>
  );
}