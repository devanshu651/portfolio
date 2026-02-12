export default function CampusEyeAI() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        CampusEye AI
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-zinc-400">
        Smart Face-ID based attendance system built as a solo project.
      </p>

      {/* Divider */}
      <div className="mt-10 h-px bg-white/10" />

      {/* Description */}
      <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          CampusEye AI automates manual attendance using real-time face
          recognition from a webcam. It detects, recognizes, and logs
          attendance with timestamps while preventing duplicate entries.
        </p>

        <p>
          I designed and implemented the complete pipeline — face encoding,
          database schema, real-time recognition logic, and UI integration —
          with a focus on reliability and real-world usability.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mt-12">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Tech Stack
        </h3>
        <p className="mt-3 text-zinc-300">
          Python · OpenCV · face_recognition (dlib) · SQLite · Streamlit
        </p>
      </div>

      {/* Actions */}
      <div className="mt-12 flex gap-4">
        <a
          href="https://github.com/devanshu651/CampusEye-AI"
          target="_blank"
          className="px-6 py-3 bg-white text-black font-medium rounded-md hover:opacity-90 transition"
        >
          View Code
        </a>

        <span className="px-6 py-3 border border-white/20 text-zinc-400 rounded-md">
          Live Demo (Local)
        </span>
      </div>
    </section>
  );
}
