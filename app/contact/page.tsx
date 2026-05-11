export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
        Contact
      </h1>

      <p className="mt-6 text-zinc-400 max-w-2xl">
        If you’d like to collaborate, discuss ideas, or just talk about
        building real systems, feel free to reach out.
      </p>

      {/* Contact Info */}
      <div className="mt-12 space-y-6 text-zinc-300">
        
        <div>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Email
          </p>
          <a
            href="mailto:rautdevanshu24@gmail.com"
            className="mt-2 inline-block hover:text-white transition"
          >
            rautdevanshu24@gmail.com
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            GitHub
          </p>
          <a
            href="https://github.com/devanshu651"
            target="_blank"
            className="mt-2 inline-block hover:text-white transition"
          >
            github.com/devanshu651
          </a>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/devanshu-raut-641828331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="mt-2 inline-block hover:text-white transition"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>

      </div>
    </section>
  );
}
