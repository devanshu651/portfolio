import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/SocialIcons";

const contacts = [
  {
    label: "GitHub",
    handle: "devanshu651",
    href: "https://github.com/devanshu651",
    icon: <GithubIcon />,
  },
  {
    label: "LinkedIn",
    handle: "devanshu-raut",
    href: "https://www.linkedin.com/in/devanshu-raut-641828331/",
    icon: <LinkedinIcon />,
  },
  {
    label: "Email",
    handle: "rautdevanshu24@gmail.com",
    href: "mailto:rautdevanshu24@gmail.com",
    icon: <MailIcon />,
  },
];

export function ContactSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className="contact-section section-reveal" id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something real.</h2>
        <p>
          Open to internships, collaborations, and interesting problems.
          {expanded
            ? " The fastest way to reach me is through email or LinkedIn."
            : ""}
        </p>
        <div className="contact-cards">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={`${contact.label}: ${contact.handle}`}
            >
              {contact.icon}
              <span>{contact.label}</span>
              <strong>{contact.handle}</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
