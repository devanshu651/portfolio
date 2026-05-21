"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/gsap";

const links = [
  ["Projects", "/projects"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["CV", "/cv.html"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !overlayRef.current) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    getGsap().then(({ gsap }) => {
      if (!overlayRef.current) return;
      gsap.fromTo(
        overlayRef.current.querySelectorAll("a"),
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, ease: "power3.out", stagger: 0.08 },
      );
    });
  }, [open]);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <nav className="container nav-shell" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Devanshu Raut home">
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <path d="M20 3 35 11.5v17L20 37 5 28.5v-17L20 3Z" />
            <text x="20" y="26" textAnchor="middle">
              D
            </text>
          </svg>
          <span>devanshu</span>
        </Link>
        <div className="nav-links">
          {links.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>
      {open && (
        <div className="mobile-menu" ref={overlayRef}>
          {links.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
