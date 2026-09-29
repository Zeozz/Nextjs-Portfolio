import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Projects" title="Things I've worked on" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <p className="text-sm font-semibold text-accent">{project.category}</p>
              <span className="font-display text-3xl font-semibold text-line transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                className="mt-6 text-sm font-semibold text-accent hover:underline"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
