export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  techStack: string[];
  url: string;
  highlight: string;
  featured?: boolean;
  halo: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "campuseye-ai",
    title: "CampusEye AI",
    type: "Solo Project · Computer Vision · AI",
    description:
      "A smart Face-ID based attendance system using real-time face recognition, reliability, and usability. Built entirely solo, focusing on production-grade reliability.",
    techStack: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    url: "/projects/campuseye-ai",
    highlight: "Real-time face detection, attendance logging, GUI dashboard",
    featured: true,
    halo: "rgba(108, 99, 255, 0.38)",
    image: "/campuseye-ui.png",
    alt: "CampusEye AI dashboard interface preview",
  },
  {
    slug: "saferide",
    title: "SafeRide",
    type: "Travel Safety · Full-Stack",
    description:
      "A comprehensive travel safety and ride-sharing application with real-time risk analysis.",
    techStack: ["Flutter", "Node.js", "AI"],
    url: "/projects/saferide",
    highlight: "Real-time risk analysis engine, cross-platform",
    halo: "rgba(255, 107, 107, 0.34)",
    image: "/saferide-ui.png",
    alt: "SafeRide travel safety app interface preview",
  },
  {
    slug: "promptlab",
    title: "PromptLab Pro",
    type: "LLM Research Tool",
    description:
      "Research-grade platform for evaluating LLM prompts with measurable metrics and comparative analysis.",
    techStack: ["LLMs", "Python", "Evaluation Framework"],
    url: "/projects/promptlab",
    highlight: "Quantitative prompt scoring, side-by-side comparisons",
    halo: "rgba(82, 196, 255, 0.32)",
    image: "/promptlab-ui.png",
    alt: "PromptLab Pro prompt evaluation dashboard preview",
  },
  {
    slug: "devinci-player",
    title: "DeVinci Music Player",
    type: "Android Native",
    description:
      "Minimalist Android music player with both local and online playback. Clean, fast, native.",
    techStack: ["Android", "Kotlin"],
    url: "/projects/devinci-player",
    highlight: "Native Kotlin, Material You design language",
    halo: "rgba(61, 220, 151, 0.3)",
    image: "/devinci-ui.png",
    alt: "DeVinci Music Player Android interface preview",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
