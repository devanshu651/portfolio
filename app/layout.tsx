import "./globals.css";
import Navbar from "./components/navbar";
import PageWrapper from "./components/PageWrapper";
import MouseBackground from "./components/MouseBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-[#000000] text-slate-50 antialiased relative min-h-screen selection:bg-pink-500/50 selection:text-white`}>
        {/* Interactive Premium Background Elements */}
        <MouseBackground />
        
        <Navbar />

  <main className="pt-24">
  <PageWrapper>
    {children}
  </PageWrapper>
</main>


  {/* Footer */}
  <footer className="border-t border-white/10 mt-24">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-400">
      
      <div>
        <p className="text-white font-medium">Devanshu</p>
        <p className="mt-2 max-w-xs">
          Building real systems and learning by doing.
        </p>
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/devanshu651" target="_blank" className="hover:text-white transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/devanshu-raut-641828331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-white transition">
          LinkedIn
        </a>
        <a href="mailto:rautdevanshu24@gmail.com" className="hover:text-white transition">
          Email
        </a>
      </div>

      <div>
        © {new Date().getFullYear()} Devanshu
      </div>

    </div>
  </footer>
</body>

    </html>
  );
}
