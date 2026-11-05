import React from "react";
import { usePortfolioConfig } from "../Context/PortfolioConfigContext";

const ALL_PROJECTS = [
  { name: "DevReview AI", stars: 1200, tech: "TypeScript" },
  { name: "TaskSphere", stars: 486, tech: "React" },
  { name: "Edge Cache Kit", stars: 212, tech: "Go" },
  { name: "GraphQL Gateway", stars: 174, tech: "GraphQL" },
  { name: "React Hooks Lab", stars: 158, tech: "React" },
  { name: "pg-migrate CLI", stars: 121, tech: "Node.js" },
  { name: "UI Kit Pro", stars: 98, tech: "Tailwind" },
  { name: "Docker Starter", stars: 87, tech: "Docker" },
  { name: "Auth Service", stars: 74, tech: "Node.js" },
  { name: "Chart Studio", stars: 63, tech: "React" },
  { name: "CLI Toolbox", stars: 51, tech: "Python" },
  { name: "Notes Sync", stars: 39, tech: "Next.js" },
];

const formatStars = (n) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`);

const mainFont = "font-sans";
const monoFont = "font-mono";

const sectionClass =
  "rounded-[20px] border border-venom-border bg-venom-card/60 backdrop-blur-md p-4 sm:p-5 transition-colors duration-300";

const NAME = "Alex Chen";
const ROLE = "Full-Stack React & Node.js Engineer";
const BIO =
  "Building scalable distributed systems with React, Node.js, and TypeScript. Passionate about UI design systems and developer tools. I turn product ideas into reliable, user-friendly experiences.";

function SectionHeader({ number, title, meta }) {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-3">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-venom-gold text-xs font-semibold text-slate-950 shadow-md ${mainFont}`}
      >
        {number}
      </span>
      <h2 className={`min-w-0 text-sm font-semibold text-venom-text sm:text-base ${mainFont}`}>
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

/* ====================== الأقسام ====================== */

function HeroSection({ number }) {
  return (
    <section className={sectionClass}>
      <SectionHeader number={number} title="Hero / Intro" meta="top of page" />
      <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-9">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-venom-gold text-xs font-bold text-slate-950 shadow-gold-glow-sm sm:self-center">
          AC
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold leading-5 text-venom-text">{NAME}</h3>
          <p className="mt-1 text-xs leading-4 text-venom-muted">{ROLE}</p>
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
  );
}

function AboutSection({ number }) {
  return (
    <section className={sectionClass}>
      <SectionHeader number={number} title="About Me" meta={`${BIO.length} chars`} />
      <p className="pl-1 text-xs leading-[1.7] text-venom-secondary sm:pl-9 sm:text-sm">{BIO}</p>
    </section>
  );
}

function ProjectsSection({ number, projectCount, toggles }) {
  const projects = [...ALL_PROJECTS]
    .sort((a, b) => b.stars - a.stars) // ranked by stars
    .slice(0, projectCount);

  return (
    <section id="featured-projects" className={sectionClass}>
      <SectionHeader
        number={number}
        title="Featured GitHub Projects"
        meta={`${projects.length} cards · stars ${toggles.showStars ? "on" : "off"} · badges ${
          toggles.showBadges ? "on" : "off"
        }`}
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
            {toggles.showStars && (
              <p className="mt-2 flex items-center gap-1 text-[11px] text-venom-gold">
                <span aria-hidden="true">★</span>
                {formatStars(project.stars)}
              </p>
            )}
            {toggles.showBadges && (
              <span
                className={`mt-2 inline-flex rounded-full bg-venom-gold/15 px-2.5 py-1 text-[11px] leading-4 text-venom-gold ${monoFont}`}
              >
                {project.tech}
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ number }) {
  return (
    <section id="work-experience" className={sectionClass}>
      <SectionHeader number={number} title="Work Experience" meta="career journey" />
      <div className="space-y-3 pl-1 sm:pl-9">
        <article className="rounded-[16px] border border-venom-border bg-venom-input p-4 transition hover:border-venom-gold/50">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-sm font-semibold text-venom-text">Front-End Developer Intern</h3>
              <p className="mt-1 text-xs text-venom-gold">Tech Company</p>
            </div>
            <span className={`text-[11px] text-venom-muted ${monoFont}`}>2025 – Present</span>
          </div>
          <p className="mt-3 text-xs leading-6 text-venom-secondary">
            Building responsive web interfaces using React, JavaScript, and Tailwind CSS while
            improving usability and accessibility.
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
              <h3 className="text-sm font-semibold text-venom-text">Personal Projects</h3>
              <p className="mt-1 text-xs text-venom-gold">Independent Development</p>
            </div>
            <span className={`text-[11px] text-venom-muted ${monoFont}`}>Ongoing</span>
          </div>
          <p className="mt-3 text-xs leading-6 text-venom-secondary">
            Creating web applications and exploring AI and cybersecurity concepts through hands-on
            projects and continuous learning.
          </p>
        </article>
      </div>
    </section>
  );
}

const SKILL_GROUPS = [
  { category: "Frontend Development", skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"] },
  { category: "Programming Languages", skills: ["Python", "C#", "JavaScript"] },
  { category: "AI & Machine Learning", skills: ["Machine Learning", "Model Training", "Data Analysis"] },
  { category: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Figma"] },
];

function SkillsSection({ number }) {
  return (
    <section id="technical-skills" className={sectionClass}>
      <SectionHeader number={number} title="Technical Skills" meta="skills & tools" />
      <div className="grid grid-cols-1 gap-3 pl-1 sm:grid-cols-2 sm:pl-9">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.category}
            className="rounded-[16px] border border-venom-border bg-venom-input p-3.5 transition hover:border-venom-gold/50"
          >
            <h3 className="mb-3 text-xs font-semibold text-venom-text">{group.category}</h3>
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
  );
}

const CONTACT_LINKS = [
  { icon: "@", title: "Email", sub: "hello@example.com", href: "mailto:hello@example.com", external: false, breakAll: true },
  { icon: "GH", title: "GitHub", sub: "View my repositories", href: "https://github.com/", external: true },
  { icon: "in", title: "LinkedIn", sub: "Connect professionally", href: "https://www.linkedin.com/", external: true },
  { icon: "X", title: "Social Profile", sub: "Follow my updates", href: "https://x.com/", external: true },
];

const inputClass =
  "w-full rounded-xl border border-venom-border bg-venom-card px-3 py-2 text-xs text-venom-text placeholder:text-venom-muted outline-none transition focus:border-venom-gold/60";

function ContactSection({ number, toggles }) {
  return (
    <section id="contact" className={sectionClass}>
      <SectionHeader number={number} title="Contact & Social Links" meta="let's connect" />
      <div className="grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2 sm:pl-9">
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.title}
            href={l.href}
            {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="flex items-center gap-3 rounded-[14px] border border-venom-border bg-venom-input p-3 transition hover:border-venom-gold/50"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-venom-gold/15 text-xs font-bold text-venom-gold">
              {l.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium text-venom-text">{l.title}</span>
              <span className={`block text-[11px] text-venom-muted ${l.breakAll ? "break-all" : ""}`}>
                {l.sub}
              </span>
            </span>
          </a>
        ))}
      </div>

      {toggles.showContactForm && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-3 grid gap-2.5 pl-1 sm:pl-9"
        >
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <input type="text" placeholder="Your name" className={inputClass} />
            <input type="email" placeholder="Your email" className={inputClass} />
          </div>
          <textarea rows={3} placeholder="Your message" className={`${inputClass} resize-none`} />
          <button
            type="submit"
            className="self-start rounded-xl bg-venom-gold px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-venom-gold-hover cursor-pointer"
          >
            Send message
          </button>
        </form>
      )}
    </section>
  );
}

/* id القسم → الكومبوننت بتاعه */
const SECTION_COMPONENTS = {
  1: HeroSection,
  2: AboutSection,
  3: ProjectsSection,
  4: ExperienceSection,
  5: SkillsSection,
  6: ContactSection,
};

/* ====================== الكومبوننت الرئيسي ====================== */

export default function LiveStructure() {
  const { config } = usePortfolioConfig(); // ← بيقرأ من الخزنة
  const { sections, projectCount, toggles } = config;
  const visible = sections.filter((s) => s.enabled);

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
            {visible.length} of {sections.length} sections visible ·{" "}
            {toggles.darkByDefault ? "dark" : "light"} theme by default
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-venom-gold/40 bg-venom-gold/10 px-3 py-1.5 text-xs font-medium text-venom-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-venom-gold animate-pulse" />
          Updates as you edit
        </div>
      </div>

      <div className="space-y-3 rounded-[14px] border border-venom-border bg-venom-input p-3 sm:p-4">
        {visible.length === 0 ? (
          <p className="py-10 text-center text-xs text-venom-muted">
            All sections are hidden. Enable at least one section to see the preview.
          </p>
        ) : (
          visible.map((section, i) => {
            const Component = SECTION_COMPONENTS[section.id];
            return (
              <Component
                key={section.id}
                number={i + 1}
                projectCount={projectCount}
                toggles={toggles}
              />
            );
          })
        )}
      </div>
    </div>
  );
}