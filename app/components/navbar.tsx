"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#000000]/80 border-b border-white/5 shadow-[0_1px_20px_rgba(0,0,0,0.8)]">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-semibold tracking-wider text-lg uppercase bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
        >
          Devanshu
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm relative">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group relative px-3 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Hover Background Pill */}
                <span className="absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.04]" />

                {/* Active Underline */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-yellow-400 to-pink-500 shadow-[0_0_15px_rgba(250,204,21,0.8)]"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}