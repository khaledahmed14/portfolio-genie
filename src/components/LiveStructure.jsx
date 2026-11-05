import React from "react";

const projects = [
  { name: "DevReview AI", stars: "1.2k", tech: "TypeScript" },
  { name: "TaskSphere", stars: "486", tech: "React" },
  { name: "Edge Cache Kit", stars: "212", tech: "Go" },
  { name: "GraphQL Gateway", stars: "174", tech: "GraphQL" },
  { name: "React Hooks Lab", stars: "158", tech: "React" },
  { name: "pg-migrate CLI", stars: "121", tech: "Node.js" },
];

const mainFont = "font-sans";
const monoFont = "font-mono";

const sectionClass =
  "rounded-[20px] border border-venom-border bg-venom-card/60 backdrop-blur-md p-4 sm:p-5 transition-colors duration-300";

function SectionHeader({ number, title, meta }) {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-3">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-venom-gold text-xs font-semibold text-slate-950 shadow-md ${mainFont}`}
      >
        {number}
      </span>
      <h2
        className={`min-w-0 text-sm font-semibold text-venom-text sm:text-base ${mainFont}`}
      >
        {title}
      </h2>
      {meta && (
        <span
          className={`ml-auto shrink-0 text-right text-[13px] font-medium leading-[155%] tracking-normal text-venom-muted ${monoFont}`}
        >
          {meta}
        </span>
      )}
    </div>
  );
}

export default function LiveStructure() {
  const name = "Alex Chen";
  const role = "Full-Stack React & Node.js Engineer";
  const bio =
    "Building scalable distributed systems with React, Node.js, and TypeScript. Passionate about UI design systems and developer tools. I turn product ideas into reliable, user-friendly experiences.";

  return (
    <div
      className={`w-full rounded-[24px] border border-venom-border bg-venom-card backdrop-blur-md p-4 text-venom-text shadow-xl sm:p-6 transition-colors duration-300 ${mainFont}`}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[20px] font-bold leading-7 tracking-tight text-venom-text">
            Live structure
          </h1>
          <p className="text-[11px] leading-4 text-venom-muted">
            6 of 6 sections visible · dynamic theme active
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-venom-gold/40 bg-venom-gold/10 px-3 py-1.5 text-xs font-medium text-venom-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-venom-gold animate-pulse" />
          Updates as you edit
        </div>
      </div>

      <div className="space-y-3 rounded-[14px] border border-venom-border bg-venom-input p-3 sm:p-4">
        <section className={sectionClass}>
          <SectionHeader number="1" title="Hero / Intro" meta="top of page" />
          <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-venom-gold text-xs font-bold text-slate-950 shadow-gold-glow-sm sm:self-center">
              AC
            </div>
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold leading-5 text-venom-text">
                {name}
              </h3>
              <p className="mt-1 text-xs leading-4 text-venom-muted">{role}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="#featured-projects"
                  className="rounded-full border border-venom-border bg-transparent px-3 py-1.5 text-[11px] leading-5 text-venom-text transition hover:border-venom-gold hover:bg-venom-gold/10 hover:text-venom-gold"
                >
                  View Featured Work
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="rounded-full border border-venom-border bg-transparent px-3 py-1.5 text-[11px] leading-5 text-venom-text transition hover:border-venom-gold hover:bg-venom-gold/10 hover:text-venom-gold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionHeader
            number="2"
            title="About Me"
            meta={`${bio.length} chars`}
          />
          <p className="pl-1 text-xs leading-[1.7] text-venom-secondary sm:pl-9 sm:text-sm">
            {bio}
          </p>
        </section>

        <section id="featured-projects" className={sectionClass}>
          <SectionHeader
            number="3"
            title="Featured GitHub Projects"
            meta="6 cards · stars on · badges on"
          />
          <div className="grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2 sm:pl-9 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex min-h-[106px] flex-col items-start rounded-[16px] border border-venom-border bg-venom-input p-3.5 transition hover:border-venom-gold/50 hover:shadow-lg hover:shadow-venom-gold/5"
              >
                <h3 className="text-xs font-medium leading-5 text-venom-text sm:text-[13px]">
                  {project.name}
                </h3>
                <p className="mt-2 flex items-center gap-1 text-[11px] text-venom-gold">
                  <span aria-hidden="true">★</span>
                  {project.stars}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full bg-venom-gold/15 px-2.5 py-1 text-[11px] leading-4 text-venom-gold ${monoFont}`}
                >
                  {project.tech}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="work-experience" className={sectionClass}>
          <SectionHeader
            number="4"
            title="Work Experience"
            meta="career journey"
          />

          <div className="space-y-3 pl-1 sm:pl-9">
            <article className="rounded-[16px] border border-venom-border bg-venom-input p-4 transition hover:border-venom-gold/50">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-sm font-semibold text-venom-text">
                    Front-End Developer Intern
                  </h3>
                  <p className="mt-1 text-xs text-venom-gold">Tech Company</p>
                </div>
                <span className={`text-[11px] text-venom-muted ${monoFont}`}>
                  2025 – Present
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-venom-secondary">
                Building responsive web interfaces using React, JavaScript, and
                Tailwind CSS while improving usability and accessibility.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full bg-venom-gold/15 px-2.5 py-1 text-[10px] text-venom-gold ${monoFont}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[16px] border border-venom-border bg-venom-input p-4 transition hover:border-venom-gold/50">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-sm font-semibold text-venom-text">
                    Personal Projects
                  </h3>
                  <p className="mt-1 text-xs text-venom-gold">
                    Independent Development
                  </p>
                </div>
                <span className={`text-[11px] text-venom-muted ${monoFont}`}>
                  Ongoing
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-venom-secondary">
                Creating web applications and exploring AI and cybersecurity
                concepts through hands-on projects and continuous learning.
              </p>
            </article>
          </div>
        </section>

        <section id="technical-skills" className={sectionClass}>
          <SectionHeader
            number="5"
            title="Technical Skills"
            meta="skills & tools"
          />

          <div className="grid grid-cols-1 gap-3 pl-1 sm:grid-cols-2 sm:pl-9">
            {[
              {
                category: "Frontend Development",
                skills: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Bootstrap",
                  "Tailwind CSS",
                ],
              },
              {
                category: "Programming Languages",
                skills: ["Python", "C#", "JavaScript"],
              },
              {
                category: "AI & Machine Learning",
                skills: ["Machine Learning", "Model Training", "Data Analysis"],
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "GitHub", "VS Code", "Figma"],
              },
            ].map((group) => (
              <article
                key={group.category}
                className="rounded-[16px] border border-venom-border bg-venom-input p-3.5 transition hover:border-venom-gold/50"
              >
                <h3 className="mb-3 text-xs font-semibold text-venom-text">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border border-venom-border bg-venom-gold/10 px-2.5 py-1.5 text-[10px] text-venom-gold ${monoFont}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <SectionHeader
            number="6"
            title="Contact & Social Links"
            meta="let's connect"
          />

          <div className="grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2 sm:pl-9">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 rounded-[14px] border border-venom-border bg-venom-input p-3 transition hover:border-venom-gold/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-venom-gold/15 text-sm text-venom-gold font-bold">
                @
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-venom-text">
                  Email
                </span>
                <span className="block break-all text-[11px] text-venom-muted">
                  hello@example.com
                </span>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-venom-border bg-venom-input p-3 transition hover:border-venom-gold/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-venom-gold/15 text-sm text-venom-gold font-bold">
                GH
              </span>
              <span>
                <span className="block text-xs font-medium text-venom-text">
                  GitHub
                </span>
                <span className="block text-[11px] text-venom-muted">
                  View my repositories
                </span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-venom-border bg-venom-input p-3 transition hover:border-venom-gold/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-venom-gold/15 text-xs font-bold text-venom-gold">
                in
              </span>
              <span>
                <span className="block text-xs font-medium text-venom-text">
                  LinkedIn
                </span>
                <span className="block text-[11px] text-venom-muted">
                  Connect professionally
                </span>
              </span>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-venom-border bg-venom-input p-3 transition hover:border-venom-gold/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-venom-gold/15 text-xs font-bold text-venom-gold">
                X
              </span>
              <span>
                <span className="block text-xs font-medium text-venom-text">
                  Social Profile
                </span>
                <span className="block text-[11px] text-venom-muted">
                  Follow my updates
                </span>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}