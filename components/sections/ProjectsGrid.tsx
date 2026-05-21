import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsGrid({ compact = false }: { compact?: boolean }) {
  const visibleProjects = compact ? projects.slice(0, 4) : projects;

  return (
    <section className="projects-section section-reveal" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected systems</p>
          <h2>Projects built with proof, not polish alone.</h2>
          <p>
            Each project is designed around a practical constraint: real-time
            computer vision, risk analysis, LLM evaluation, or native Android
            performance.
          </p>
        </div>

        <div className="bento-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
              layout={
                project.slug === "campuseye-ai"
                  ? "featured"
                  : project.slug === "devinci-player"
                    ? "wide"
                    : "standard"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
