"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "/#home", id: "home", label: "Home" },
    { href: "/#about", id: "about", label: "About" },
    { href: "/#projects", id: "projects", label: "Projects" },
    { href: "/#skills", id: "skills", label: "Skills" },
    { href: "/#certifications", id: "certifications", label: "Certifications" },
    { href: "/cv.html", id: "resume", label: "Resume", external: true },
    { href: "/#contact", id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // If we're not on the homepage, do not spy on scrolling
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "projects", "skills", "certifications", "contact"];
    
    // Set active section based on current hash when page first loads
    const currentHash = window.location.hash.replace("#", "");
    if (sections.includes(currentHash)) {
      setActiveSection(currentHash);
    }

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // triggers when a section is well within viewport focus
          threshold: 0,
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
          obs.observer.disconnect();
        }
      });
    };
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof links[0]) => {
    if (link.external) return;

    if (pathname === "/") {
      e.preventDefault();
      const targetEl = document.getElementById(link.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        // Update URL hash without causing a page jump
        window.history.pushState(null, "", `#${link.id}`);
        setActiveSection(link.id);
      }
    }
  };

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
            const isActive = pathname === "/"
              ? activeSection === link.id
              : (link.id === "projects" && pathname.startsWith("/projects"));

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
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