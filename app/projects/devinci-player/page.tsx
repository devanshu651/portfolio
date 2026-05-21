export default function DeVinciPlayer() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        DeVinci Music Player
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-zinc-400">
        Minimalist Android music player built to eliminate streaming ads and
        provide a clean, uninterrupted listening experience.
      </p>
      <div className="mt-16 flex justify-center">
        <div className="max-w-[320px] rounded-[2rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl shadow-yellow-500/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-yellow-500/20">
          <img
            src="/devinci-ui.jpg"
            alt="DeVinci Music Player UI"
            className="rounded-[1.5rem] w-full border border-white/5"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 h-px bg-white/10" />

      {/* Overview */}
      <div className="mt-12 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          DeVinci is a premium-style Android music player designed around a
          simple idea: music apps should focus on the music, not advertisements.
          I built it to combine local playback with online streaming while
          keeping the interface minimal and fast.
        </p>

        <p>
          The app uses a modern Material 3 interface and a background playback
          engine powered by Android Media3 (ExoPlayer). It supports local
          library scanning, online track search, queue management, and smooth
          background playback.
        </p>
      </div>

      {/* Why I Built This */}
      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Why I Built This
        </h3>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          I built DeVinci after getting frustrated with the constant ads and
          restrictions in mainstream music apps. The goal was to create a
          lightweight player that feels premium while still giving users full
          control over their listening experience.
        </p>
      </div>

      {/* Technologies */}
      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Technologies Used
        </h3>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
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
              className="rounded-full border border-white/10 px-4 py-2 bg-white/[0.03] transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-16 flex flex-wrap gap-4">
        <a
          href="https://github.com/devanshu651/DeVinci"
          target="_blank"
          className="px-6 py-3 bg-white text-black font-medium rounded-md transition-all duration-300 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
        >
          View Code
        </a>

        <span className="px-6 py-3 border border-white/20 text-zinc-400 rounded-md">
          Android App
        </span>
      </div>

    </section>
  );
}