import { Badge } from "@/components/ui/Badge";

const skills = [
  ["Python", "Used in CampusEye AI and LLM evaluation workflows"],
  ["Kotlin", "Used for native Android apps"],
  ["TypeScript", "Used for reliable full-stack interfaces"],
  ["Next.js", "Used for production web experiences"],
  ["Tailwind CSS", "Used for fast, consistent UI systems"],
  ["OpenCV", "Used for real-time computer vision"],
  ["Android Studio", "Used for native mobile builds"],
  ["SQL", "Used for durable app data models"],
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className="about-section section-reveal" id="about">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">About Devanshu Raut</p>
          <blockquote>
            “I bridge the gap between theoretical computer science and
            practical, usable software.”
          </blockquote>
          <div className="about-copy">
            <p>
              AI &amp; ML engineering student with 5+ projects, 6+ industry
              simulations (Tata · Deloitte · AWS · HPE), and 10+ certifications
              including Microsoft and IIT Kanpur — focused on building
              intelligent, full-stack systems instead of just following
              tutorials.
            </p>
            {full && (
              <p>
                My work sits where learning becomes execution: shipping
                interfaces, testing AI ideas against real constraints, and
                turning technical curiosity into usable products.
              </p>
            )}
          </div>
          <div className="philosophy-grid">
            <article>
              <h3>Build to Learn</h3>
              <p>
                Theory is important, but implementation is where real learning
                happens. I prioritize hands-on projects.
              </p>
            </article>
            <article>
              <h3>Performance First</h3>
              <p>
                I care about fast, efficient code. From native Kotlin apps to
                optimized Next.js frontends.
              </p>
            </article>
          </div>
        </div>

        <aside className="about-panel" aria-label="Technology and credentials">
          <div>
            <span className="panel-label">Core Technologies</span>
            <div className="skill-cloud">
              {skills.map(([skill, tooltip]) => (
                <span className="skill-pill" data-tooltip={tooltip} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="panel-label">Industry Simulations</span>
            <div className="brand-badges">
              <Badge className="brand-tata">Tata</Badge>
              <Badge className="brand-deloitte">Deloitte</Badge>
              <Badge className="brand-aws">AWS</Badge>
              <Badge className="brand-hpe">HPE</Badge>
            </div>
          </div>
          <div className="cert-count">
            <strong>10+</strong>
            <span>certifications including Microsoft and IIT Kanpur</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
