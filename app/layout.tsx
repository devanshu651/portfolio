import "./globals.css";
import Navbar from "./components/navbar";
import PageWrapper from "./components/PageWrapper";
import MouseBackground from "./components/MouseBackground";
import ScrollObserver from "./components/ScrollObserver";
import MobileExperiencePrompt from "./components/MobileExperiencePrompt";
import ContinuousPageScroll from "./components/ContinuousPageScroll";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${syne.variable} ${dmSans.variable} font-sans bg-[#050505] text-slate-50 antialiased relative min-h-screen selection:bg-white/20 selection:text-white`}>
        {/* Intersection Observer for scroll animations */}
        <ScrollObserver />
        <MobileExperiencePrompt />
        <ContinuousPageScroll />

        {/* Interactive Premium Background Elements */}
        <MouseBackground />
        
        <Navbar />

  <main className="pt-24">
  <PageWrapper>
    {children}
  </PageWrapper>
</main>


  {/* Footer */}
  <footer className="border-t border-white/10 mt-24 reveal">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-400">
      
      <div>
        <p className="text-white font-medium font-display tracking-wide">Devanshu</p>
        <p className="mt-2 max-w-xs text-zinc-500">
          Building real systems and learning by doing.
        </p>
      </div>

      <div className="flex gap-6">
        <a href="https://github.com/devanshu651" target="_blank" className="hover:text-white transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/devanshu-raut-641828331" target="_blank" className="hover:text-white transition-colors">
          LinkedIn
        </a>
        <a href="mailto:rautdevanshu24@gmail.com" className="hover:text-white transition-colors">
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
