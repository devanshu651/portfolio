import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <span>© 2026 Devanshu Raut</span>
        <span>Built with Next.js + Three.js</span>
        <div>
          <a href="https://github.com/devanshu651" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devanshu-raut-641828331/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link href="mailto:rautdevanshu24@gmail.com">Email</Link>
        </div>
      </div>
    </footer>
  );
}
