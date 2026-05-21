import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Devanshu Raut",
  description: "AI, full-stack, LLM, and native Android projects by Devanshu Raut.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="container page-hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Systems with a reason to exist.</h1>
        <p>
          A focused collection of shipped projects across computer vision,
          travel safety, LLM evaluation, and native Android.
        </p>
      </section>
      <ProjectsGrid />
    </div>
  );
}
