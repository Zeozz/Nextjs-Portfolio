// All portfolio content lives here. Edit this file to change what the site shows.
// Items marked "sample" are placeholder content for the mockup.

export const profile = {
  name: "Ahmad Syakir",
  fullName: "Ahmad Syakir Bin Adnan",
  initials: "AS",
  role: "Aspiring Project Manager",
  tagline:
    "I help teams turn sustainability goals and new technology into practical, well-run projects.",
  location: "Kuala Lumpur, Malaysia", // sample
  email: "ahmad.syakir@example.com", // sample
  linkedin: "https://www.linkedin.com/", // sample
  github: "https://github.com/", // sample
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "4+", label: "Projects completed" },
  { value: "2026", label: "K-Youth Cohort 4" },
  { value: "3", label: "Focus areas" },
];

export const about = {
  paragraphs: [
    "I'm a participant in the K-Youth Development Programme 2026 (Cohort 4), where I'm building the skills employers are asking for in the future of work: sustainability, digital literacy, and clear communication.",
    "I enjoy breaking big, messy problems into plans people can act on, whether that's an ESG strategy for a small business, a memo that helps a CEO respond to a crisis, or a security checklist for a remote team. Lately I've been learning to build for the web with Next.js and AI-assisted \"vibe coding\".",
  ],
  skills: [
    "Project Planning",
    "ESG & Sustainability",
    "Carbon Footprint Basics",
    "Circular Design",
    "Cybersecurity Awareness",
    "Business Writing",
    "Next.js",
    "Tailwind CSS",
    "AI-Assisted Coding",
  ],
  timeline: [
    {
      period: "2026",
      title: "K-Youth Development Programme",
      detail: "Cohort 4, covering the Future of Work, AI Competency, and a Capstone project.",
    },
    {
      period: "2025", // sample
      title: "Bachelor's Degree in Business", // sample
      detail: "Coursework in management, operations, and entrepreneurship.", // sample
    },
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Eco-Tech Gear Sustainability Pitch",
    category: "ESG Strategy",
    description:
      "An ESG plan for a small phone-case business, with biodegradable materials, a take-back scheme, fair-wage supplier rules, and links to UN SDGs 8, 12, and 13.",
    tags: ["ESG", "UN SDGs", "Circular Design"],
  },
  {
    title: "Greenwashing Rescue Memo",
    category: "Climate Governance",
    description:
      "An action memo to a CEO facing greenwashing allegations, recommending claim verification and alignment with the ISSB / IFRS S2 disclosure framework.",
    tags: ["Governance", "Risk", "Business Writing"],
  },
  {
    title: "Remote Office Security Audit",
    category: "Cybersecurity",
    description:
      "A guide to phishing red flags and a personal hardening plan for remote teams, built around password managers and two-factor authentication.",
    tags: ["Security", "Phishing", "2FA"],
  },
  {
    title: "Next.js Portfolio Website",
    category: "Web Development",
    description:
      "This site. A responsive single-page portfolio built with Next.js, TypeScript, and Tailwind CSS, with light and dark themes.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];
