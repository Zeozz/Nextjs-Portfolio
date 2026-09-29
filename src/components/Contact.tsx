import { profile } from "@/data/portfolio";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedin },
  { label: "GitHub", value: "github.com/your-username", href: profile.github },
  { label: "Location", value: profile.location },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-accent-soft/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading eyebrow="Contact" title="Let's work together" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m looking for internships and graduate roles in project management and
              sustainability. Have a question or an opportunity? Send me a message.
            </p>
            <ul className="mt-8 space-y-4">
              {channels.map((c) => (
                <li key={c.label} className="flex flex-col border-b border-line pb-4 sm:flex-row sm:gap-4">
                  <span className="w-24 shrink-0 text-sm font-semibold text-accent">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="break-all hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
