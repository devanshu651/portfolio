"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links: Array<{ href: string; label: string; external?: boolean }> = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/cv.html", label: "Resume", external: true },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl bg-[#050505]/70 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold tracking-wider text-sm font-display uppercase shrink-0 hover:text-zinc-300 transition-colors"
        >
          Devanshu
        </Link>

        {/* Links */}
        <div className="flex gap-1 md:gap-2 text-xs md:text-sm font-medium relative overflow-x-auto no-scrollbar">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href + "/"));

            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-white bg-white/[0.05]"
                    : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Active Dot Indicator */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}