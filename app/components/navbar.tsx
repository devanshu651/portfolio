"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#home", id: "home", num: "01", label: "Home" },
    { href: "/#about", id: "about", num: "02", label: "About" },
    { href: "/#projects", id: "projects", num: "03", label: "Projects" },
    { href: "/#skills", id: "skills", num: "04", label: "Skills" },
    { href: "/#certifications", id: "certifications", num: "05", label: "Certs" },
    { href: "/cv.html", id: "resume", num: "06", label: "Resume", external: true },
    { href: "/#contact", id: "contact", num: "07", label: "Contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["home", "about", "projects", "skills", "certifications", "contact"];
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
        { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof navLinks)[0]) => {
    setMobileMenuOpen(false);
    if (link.external) return;

    if (pathname === "/") {
      e.preventDefault();
      const targetEl = document.getElementById(link.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${link.id}`);
        setActiveSection(link.id);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--paper)]/90 backdrop-blur-md border-b border-[var(--ink)]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        
        {/* Brand Mark */}
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-[var(--ink)] no-underline"
        >
          <span className="font-serif text-2xl tracking-tight italic font-normal group-hover:text-[var(--accent)] transition-colors">
            Devanshu
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)] hidden sm:inline-block">
            § NOTEBOOK
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive =
              pathname === "/"
                ? activeSection === link.id
                : link.id === "projects" && pathname.startsWith("/projects");

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group flex items-baseline gap-1 py-1 transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--ink)] hover:text-[var(--accent)]"
                }`}
              >
                <span className="text-[9px] text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                  {link.num}
                </span>
                <span className="relative">
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[var(--accent)]" />
                  )}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action / Availability pill (desktop) */}
        <div className="hidden sm:flex items-center gap-3 font-mono text-[11px]">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-[var(--muted)] tracking-wider uppercase">Open to roles</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 font-mono text-xs uppercase tracking-widest text-[var(--ink)] hover:text-[var(--accent)] flex items-center gap-1.5"
          aria-label="Toggle navigation menu"
        >
          <span>§</span>
          <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--paper)] border-b border-[var(--ink)]/15 px-6 py-6 font-mono text-xs tracking-wider uppercase">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between py-2 border-b border-[var(--ink)]/10 text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[var(--muted)] text-[10px]">{link.num}</span>
              </Link>
            ))}
          </div>
          <div className="pt-4 flex items-center gap-2 text-[var(--muted)] text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>AMRAVATI, IN · AVAILABLE</span>
          </div>
        </div>
      )}
    </header>
  );
}