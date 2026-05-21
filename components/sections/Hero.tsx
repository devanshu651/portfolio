"use client";

import dynamic from "next/dynamic";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";
import { getGsap } from "@/lib/gsap";

const ThreeScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export function Hero() {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      return;
    }

    getGsap().then(({ gsap }) => {
      gsap.from(".hero-char", {
        y: 120,
        opacity: 0,
        rotateX: -90,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.04,
        delay: 0.3,
      });
      gsap.from(".hero-reveal", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.45,
      });
    });
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-reveal">Hi, I&apos;m</p>
          <h1 aria-label="Devanshu">
            {"Devanshu".split("").map((char, index) => (
              <span className="hero-char" key={`${char}-${index}`}>
                {char}
              </span>
            ))}
          </h1>
          <p className="hero-role hero-reveal">AI &amp; ML Engineer</p>
          <p className="hero-tagline hero-reveal">
            Building real systems, learning by doing.
          </p>
          <div className="hero-actions hero-reveal">
            <Button href="/projects">View Projects</Button>
            <Button href="/about" variant="ghost">
              About Me
            </Button>
          </div>
          <div className="hero-social hero-reveal">
            <a
              href="https://github.com/devanshu651"
              target="_blank"
              rel="noreferrer"
              aria-label="Devanshu Raut on GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/devanshu-raut-641828331/"
              target="_blank"
              rel="noreferrer"
              aria-label="Devanshu Raut on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Interactive particle field">
          <ThreeScene />
        </div>
      </div>
      <a className="scroll-indicator" href="#stats" aria-label="Scroll to stats">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
