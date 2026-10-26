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
    if (pathname !== "/") return;

    const sections = ["home", "about", "projects", "skills", "certifications", "contact"];
    const currentHash = window.location.hash.replace("#", "");

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

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflowY = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflowY = previousOverflowY;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileMenuOpen]);

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
    <header className={`fixed top-0 left-0 w-full ${mobileMenuOpen ? "z-[120]" : "z-50"} bg-[var(--paper)]/90 lg:backdrop-blur-md border-b border-[var(--ink)]/15 h-[calc(4rem+env(safe-area-inset-top))] lg:h-16`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-12 h-full pt-[env(safe-area-inset-top)] lg:pt-0 flex items-center justify-between min-w-0">
        
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
          className="lg:hidden min-h-11 min-w-11 px-2 font-mono text-xs uppercase tracking-widest text-[var(--ink)] hover:text-[var(--accent)] flex items-center justify-center gap-1.5 active:scale-[0.98]"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-overlay"
        >
          <span>§</span>
          <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-overlay" role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-[95] flex flex-col bg-[var(--paper)] px-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-[calc(env(safe-area-inset-top)+1rem)] font-mono text-xs tracking-wider uppercase lg:hidden">
          <div className="flex items-center justify-between border-b border-[var(--ink)]/15 pb-4">
            <span className="font-serif text-2xl normal-case italic text-[var(--ink)]">Devanshu <span className="font-mono text-[10px] not-italic uppercase tracking-widest text-[var(--muted)]">Â§ Notebook</span></span>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="min-h-11 min-w-11 border border-[var(--ink)]/20 px-3 font-mono text-xs uppercase tracking-wider active:scale-[0.98]" aria-label="Close navigation menu">Close</button>
          </div>
          <nav className="flex flex-1 flex-col justify-center py-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex min-h-14 items-center justify-between border-b border-[var(--ink)]/10 py-2 text-[var(--ink)] hover:text-[var(--accent)] transition-colors active:scale-[0.98]"
              >
                <span className="font-serif text-3xl sm:text-4xl normal-case">{link.label}</span>
                <span className="text-[var(--muted)] text-xs tracking-widest">{link.num} /</span>
              </Link>
            ))}
          </nav>
          <div className="pt-4 flex items-center gap-2 text-[var(--muted)] text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>AMRAVATI, IN · AVAILABLE</span>
          </div>
        </div>
      )}
    </header>
  );
}
