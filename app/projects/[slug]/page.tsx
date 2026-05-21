import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found | Devanshu Raut" };
  }

  return {
    title: `${project.title} | Devanshu Raut`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="page-shell project-detail">
      <section className="container project-detail-hero">
        <Link href="/projects" className="back-link">
          &lt;- All projects
        </Link>
        <div className="project-detail-grid">
          <div>
            <div className="project-meta-row">
              <span>{project.type}</span>
              {project.featured && <Badge className="featured-badge">Featured</Badge>}
            </div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <aside>
            <span>Primary highlight</span>
            <strong>{project.highlight}</strong>
          </aside>
        </div>
      </section>

      <section className="container project-image-section">
        <Image
          src={project.image}
          alt={project.alt}
          width={1400}
          height={788}
          priority
          className="project-detail-image"
        />
      </section>

      <section className="container detail-content">
        <div>
          <h2>Technical Stack</h2>
          <div className="project-stack detail-stack">
            {project.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
        <div>
          <h2>Build Thesis</h2>
          <p>
            This project exists to turn a specific technical concept into a
            usable product surface: measurable, testable, and direct enough to
            be evaluated by real users.
          </p>
        </div>
      </section>
    </article>
  );
}
