"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">

        
        {/* Logo */}
        <Link
          href="/"
         className="text-white font-semibold tracking-wider text-lg uppercase"

        >
          Devanshu
        </Link>

        {/* Links */}
        <div className="flex gap-8 text-sm">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
  isActive
    ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white"
    : "text-zinc-400 hover:text-white"
}`}

              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
