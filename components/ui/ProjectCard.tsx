import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

function ProjectVisual({ title }: { title: string }) {
  if (title.includes("CampusEye")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 320 180" className="project-svg">
        <circle cx="160" cy="90" r="46" />
        <path d="M116 90h-28M232 90h-28M160 46V22M160 158v-24" />
        <path d="M128 72c18-26 48-26 64 0M128 108c18 26 48 26 64 0" />
        <circle cx="160" cy="90" r="8" className="svg-hot" />
      </svg>
    );
  }

  if (title.includes("SafeRide")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 320 180" className="project-svg">
        <path d="M58 126c34-52 62-78 104-45 38 30 67 17 100-22" />
        <path d="M215 58c0-24 38-24 38 0 0 22-19 42-19 42s-19-20-19-42Z" />
        <circle cx="234" cy="58" r="7" className="svg-hot" />
        <path d="M70 132h182" />
      </svg>
    );
  }

  if (title.includes("PromptLab")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 320 180" className="project-svg">
        <rect x="58" y="42" width="84" height="96" rx="12" />
        <rect x="178" y="42" width="84" height="96" rx="12" />
        <path d="M82 72h36M82 94h26M202 72h36M202 94h26M142 90h36" />
        <path d="m166 78 12 12-12 12" className="svg-hot" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 320 180" className="project-svg">
      <path d="M128 54v70a20 20 0 1 1-12-18V54h94v70a20 20 0 1 1-12-18V54Z" />
      <path d="M128 78h82" />
      <circle cx="98" cy="126" r="20" className="svg-hot" />
      <circle cx="192" cy="126" r="20" className="svg-hot" />
    </svg>
  );
}

export function ProjectCard({
  project,
  layout = "standard",
  priority = false,
}: {
  project: Project;
  layout?: "featured" | "wide" | "standard";
  priority?: boolean;
}) {
  return (
    <Link
      href={project.url}
      className={cn(
        "project-card group",
        layout === "featured" && "project-card-featured",
        layout === "wide" && "project-card-wide",
      )}
      style={{ "--project-halo": project.halo } as CSSProperties}
    >
      <div className="project-halo" />
      <div className="project-card-top">
        <div>
          <div className="project-meta-row">
            <span>{project.type}</span>
            {project.featured && <Badge className="featured-badge">Featured</Badge>}
          </div>
          <h3>{project.title}</h3>
        </div>
      </div>

      <div className="project-visual-wrap">
        <ProjectVisual title={project.title} />
        <Image
          src={project.image}
          alt={project.alt}
          width={760}
          height={430}
          priority={priority}
          className="project-preview"
        />
      </div>

      <p>{project.description}</p>
      <strong>{project.highlight}</strong>
      <div className="project-stack">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
      <span className="project-cta">View Project -&gt;</span>
    </Link>
  );
}
