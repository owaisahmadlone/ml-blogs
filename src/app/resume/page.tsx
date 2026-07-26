import type { Metadata } from "next";
import { site } from "@/lib/site";
import {
  accolades,
  education,
  experience,
  projects,
  publications,
  skillGroups,
} from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `${site.name}'s experience, skills, projects, and education.`,
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-accent">
            Resume
          </p>
          <h1 className="font-serif text-4xl font-medium tracking-tight">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-muted">
            {site.role} ·{" "}
            <a
              href={site.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              {site.company}
            </a>
          </p>
        </div>
        <a
          href={site.resumeUrl}
          download
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
        <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
          {site.email}
        </a>
        <span aria-hidden>·</span>
        <a
          href={site.socials.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <span aria-hidden>·</span>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>

      {accolades.length > 0 && (
        <div className="mt-8 rounded-lg border border-border bg-card px-5 py-4 text-sm leading-relaxed text-muted">
          {accolades.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      {/* Skills */}
      <section className="border-t border-border py-14">
        <h2 className="font-serif text-2xl font-medium tracking-tight">
          Skills
        </h2>
        <div className="mt-6 space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-medium text-foreground">
                {group.label}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border py-14">
        <h2 className="font-serif text-2xl font-medium tracking-tight">
          Experience
        </h2>
        <div className="mt-8 space-y-14">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {job.role} · {job.location}
              </p>

              {job.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-border">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}

              {job.subsections && (
                <div className="mt-5 space-y-6">
                  {job.subsections.map((sub) => (
                    <div key={sub.title}>
                      <p className="text-sm font-medium text-foreground">
                        {sub.title}
                      </p>
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-border">
                        {sub.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border py-14">
        <h2 className="font-serif text-2xl font-medium tracking-tight">
          Projects
        </h2>
        <div className="mt-6 divide-y divide-border">
          {projects.map((project) => (
            <div key={project.title} className="py-5 first:pt-0">
              <p className="text-sm font-medium text-foreground">
                {project.title}
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-border py-14">
        <h2 className="font-serif text-2xl font-medium tracking-tight">
          Publications
        </h2>
        <div className="mt-6 space-y-5">
          {publications.map((pub) => (
            <div key={pub.title}>
              <p className="text-[15px] leading-relaxed text-foreground">
                <em>{pub.title}</em>{" "}
                <span className="text-muted">— {pub.year}</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                {pub.authors} · {pub.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-border py-14">
        <h2 className="font-serif text-2xl font-medium tracking-tight">
          Education
        </h2>
        <div className="mt-6 space-y-8">
          {education.map((edu) => (
            <div key={edu.institution}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                  {edu.institution}
                </h3>
                <span className="text-sm text-muted">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                {edu.degree} · {edu.location}
              </p>
              <p className="mt-1 text-sm text-muted">GPA: {edu.gpa}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                <span className="font-medium text-foreground">
                  Relevant courses:
                </span>{" "}
                {edu.courses.join(", ")}.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
