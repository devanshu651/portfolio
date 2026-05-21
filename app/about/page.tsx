import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title: "About | Devanshu Raut",
  description:
    "About Devanshu Raut, AI & ML engineering student and full-stack builder.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="container page-hero">
        <p className="eyebrow">About</p>
        <h1>AI &amp; ML Engineering Student -&gt; Full-Stack Builder</h1>
        <p>
          Building real systems, learning by doing, and choosing practical
          implementation over passive tutorials.
        </p>
      </section>
      <StatsBar />
      <AboutSection full />
    </div>
  );
}
