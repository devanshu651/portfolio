export default function SafeRide() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        SafeRide
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-zinc-400">
        Driver Behavior Risk Analyzer – A comprehensive travel safety application for late-night and long-distance travel.
      </p>

      {/* Hero Image */}
      <div className="mt-16 flex justify-center">
        <div className="max-w-[320px] rounded-[2rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20">
          <img
            src="/saferide-ui.png"
            alt="SafeRide UI"
            className="rounded-[1.5rem] w-full border border-white/5"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 h-px bg-white/10" />

      {/* Overview */}
      <div className="mt-12 space-y-6 text-zinc-300 leading-relaxed">
        <p>
          SafeRide was built during the Rising India Hackathon 1.0 (Team Nexus) to address the risks associated with late-night and long-distance travel. The platform combines ride-sharing functionality with real-time safety monitoring and emergency support systems.
        </p>

        <p>
          The system evaluates ride safety using an AI Safety Score based on time, route, and driver history. Key features include a Smart SOS system, Guardian Mode for real-time tracking, and a visual Route Heatmap.
        </p>
      </div>

      {/* Features */}
      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Key Features
        </h3>

        <ul className="mt-4 space-y-3 text-zinc-300 list-disc list-inside">
          <li><strong className="text-white">Ride Sharing System:</strong> Post or find rides based on route and schedule.</li>
          <li><strong className="text-white">AI Safety Score:</strong> Evaluates ride safety on a 0-100 scale based on dynamic factors.</li>
          <li><strong className="text-white">Smart SOS:</strong> One-tap emergency alert sending live location to contacts.</li>
          <li><strong className="text-white">Guardian Mode:</strong> Real-time tracking access for family members.</li>
          <li><strong className="text-white">Route Heatmap:</strong> Visual safety indicators (Green, Orange, Red) mapping risk levels.</li>
        </ul>
      </div>

      {/* Technologies */}
      <div className="mt-14">
        <h3 className="text-sm uppercase tracking-widest text-zinc-500">
          Technologies Used
        </h3>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
          {[
            "Flutter",
            "Node.js",
            "Express",
            "Firebase Firestore",
            "Google Maps API",
            "Python (AI Module)",
            "Firebase Auth",
            "Twilio"
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
        <span className="px-6 py-3 border border-white/20 text-zinc-400 rounded-md">
          Hackathon Project
        </span>
      </div>

    </section>
  );
}
