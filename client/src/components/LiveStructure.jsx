import React from "react";

const projects = [
  { name: "DevReview AI", stars: "1.2k", tech: "TypeScript" },
  { name: "TaskSphere", stars: "486", tech: "React" },
  { name: "Edge Cache Kit", stars: "212", tech: "Go" },
  { name: "GraphQL Gateway", stars: "174", tech: "GraphQL" },
  { name: "React Hooks Lab", stars: "158", tech: "React" },
  { name: "pg-migrate CLI", stars: "121", tech: "Node.js" },
];

const mainFont = "font-['Plus_Jakarta_Sans']";
const monoFont = "font-['JetBrains_Mono']";

const sectionClass =
  "rounded-[20px] border border-amber-500/20 bg-slate-900/40 dark:bg-black/40 backdrop-blur-md p-4 sm:p-5 transition-colors duration-300";

function SectionHeader({ number, title, meta }) {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-3">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-slate-950 shadow-md ${mainFont}`}
      >
        {number}
      </span>
      <h2
        className={`min-w-0 text-sm font-semibold text-slate-100 sm:text-base ${mainFont}`}
      >
        {title}
      </h2>
      {meta && (
        <span
          className={`ml-auto shrink-0 text-right text-[13px] font-medium leading-[155%] tracking-normal text-slate-400 ${monoFont}`}
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
      className={`w-full rounded-[24px] border border-amber-500/30 bg-slate-950/80 dark:bg-black/90 backdrop-blur-md p-4 text-slate-200 shadow-xl sm:p-6 transition-colors duration-300 ${mainFont}`}
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[20px] font-bold leading-7 tracking-tight text-slate-100">
            Live structure
          </h1>
          <p className="text-[11px] leading-4 text-slate-400">
            6 of 6 sections visible · dynamic theme active
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          Updates as you edit
        </div>
      </div>

      <div className="space-y-3 rounded-[14px] border border-amber-500/15 bg-slate-900/30 dark:bg-black/40 p-3 sm:p-4">
        <section className={sectionClass}>
          <SectionHeader number="1" title="Hero / Intro" meta="top of page" />
          <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-[linear-gradient(135deg,#f59e0b_14.29%,#fbbf24_85.71%)] text-xs font-semibold text-slate-950 shadow-md sm:self-center">
              AC
            </div>
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold leading-5 text-slate-100">
                {name}
              </h3>
              <p className="mt-1 text-xs leading-4 text-slate-400">{role}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="#featured-projects"
                  className="rounded-full border border-amber-500/30 bg-transparent px-3 py-1.5 text-[11px] leading-5 text-slate-300 transition hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-400"
                >
                  View Featured Work
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="rounded-full border border-amber-500/30 bg-transparent px-3 py-1.5 text-[11px] leading-5 text-slate-300 transition hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-400"
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
          <p className="pl-1 text-xs leading-[1.7] text-slate-300 sm:pl-9 sm:text-sm">
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
                className="flex min-h-[106px] flex-col items-start rounded-[16px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3.5 transition hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5"
              >
                <h3 className="text-xs font-medium leading-5 text-slate-100 sm:text-[13px]">
                  {project.name}
                </h3>
                <p className="mt-2 flex items-center gap-1 text-[11px] text-amber-400">
                  <span aria-hidden="true">★</span>
                  {project.stars}
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full bg-amber-500/15 px-2.5 py-1 text-[11px] leading-4 text-amber-300 ${monoFont}`}
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
            <article className="rounded-[16px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-4 transition hover:border-amber-500/50">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    Front-End Developer Intern
                  </h3>
                  <p className="mt-1 text-xs text-amber-400">Tech Company</p>
                </div>
                <span className={`text-[11px] text-slate-400 ${monoFont}`}>
                  2025 – Present
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-300">
                Building responsive web interfaces using React, JavaScript, and
                Tailwind CSS while improving usability and accessibility.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] text-amber-300 ${monoFont}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[16px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-4 transition hover:border-amber-500/50">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    Personal Projects
                  </h3>
                  <p className="mt-1 text-xs text-amber-400">
                    Independent Development
                  </p>
                </div>
                <span className={`text-[11px] text-slate-400 ${monoFont}`}>
                  Ongoing
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-slate-300">
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
                className="rounded-[16px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3.5 transition hover:border-amber-500/50"
              >
                <h3 className="mb-3 text-xs font-semibold text-slate-100">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1.5 text-[10px] text-amber-300 ${monoFont}`}
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
              className="flex items-center gap-3 rounded-[14px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3 transition hover:border-amber-500/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-sm text-amber-400">
                @
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-100">
                  Email
                </span>
                <span className="block break-all text-[11px] text-slate-400">
                  hello@example.com
                </span>
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3 transition hover:border-amber-500/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-sm text-amber-400 font-bold">
                GH
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-100">
                  GitHub
                </span>
                <span className="block text-[11px] text-slate-400">
                  View my repositories
                </span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3 transition hover:border-amber-500/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-xs font-bold text-amber-400">
                in
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-100">
                  LinkedIn
                </span>
                <span className="block text-[11px] text-slate-400">
                  Connect professionally
                </span>
              </span>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[14px] border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-3 transition hover:border-amber-500/50"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-xs font-bold text-amber-400">
                X
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-100">
                  Social Profile
                </span>
                <span className="block text-[11px] text-slate-400">
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