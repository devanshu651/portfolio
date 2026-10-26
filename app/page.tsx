"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Certifications from "./components/Certifications";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* 1. EDITORIAL HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION WITH COUNT-UP STATS & SCRUBBED REVEAL */}
      <AboutSection />

      {/* 3. VERTICAL TIMELINE WITH DRAWING LINE ON SCROLL */}
      <TimelineSection />

      {/* 4. PROJECTS: STICKY STACK SHOWCASE + CURSOR-LERPED INDEX LIST */}
      <ProjectsSection />

      {/* 5. SKILLS: VELOCITY-REACTIVE MARQUEE + GROUPED MONO INVENTORIES */}
      <SkillsSection />

      {/* 6. CERTIFICATIONS: SEARCHABLE COMPACT ACCORDION (21 RECORDS) */}
      <Certifications />

      {/* 7. CONTACT: OVERSIZED HEADLINE + MAGNETIC MAILTO CTA */}
      <ContactSection />
    </>
  );
}
