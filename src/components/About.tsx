import { about } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="About me" title="A bit about who I am" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="mb-4 font-semibold">Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {about.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Journey</h3>
              <ol className="space-y-6 border-l-2 border-line pl-6">
                {about.timeline.map((item) => (
                  <li key={item.title} className="relative">
                    <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-card bg-accent" />
                    <p className="text-sm font-semibold text-accent">{item.period}</p>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
