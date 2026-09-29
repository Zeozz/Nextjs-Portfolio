import { profile, stats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open to internships &amp; graduate roles
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m {profile.name}.{" "}
            <span className="text-accent">{profile.role}.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-center font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-card px-6 py-3 text-center font-semibold transition-colors hover:border-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent-soft" />
          <div className="relative flex aspect-square items-center justify-center rounded-[2rem] border border-line bg-card">
            <span className="font-display text-8xl font-semibold text-accent sm:text-9xl">
              {profile.initials}
            </span>
          </div>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-line pt-8 sm:mt-20">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-xs text-muted sm:text-sm">{stat.label}</dt>
            <dd className="font-display text-2xl font-semibold sm:text-4xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
