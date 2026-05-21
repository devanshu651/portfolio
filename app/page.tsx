import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProjectsGrid compact />
      <div className="container home-project-link section-reveal">
        <Link href="/projects">Explore every project -&gt;</Link>
      </div>
      <AboutSection />
      <ContactSection />
    </>
  );
}
