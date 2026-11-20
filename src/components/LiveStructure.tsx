import { useEffect, useState } from "react";
import type { ComponentType, FormEvent } from "react";
import { useIntake } from "../context/IntakeContext";
import { usePortfolioConfig } from "../context/PortfolioConfigContext";
import { fetchGithubProfile } from "../services/githubService";
import { formatStars } from "../utils/validators";
import { getInitials, toMailto, toSafeUrl, toSocialUrl } from "../utils/Links";
import type {
  ContactLink,
  IntakeData,
  PortfolioToggles,
  Repository,
  SectionProps,
} from "../types/portfolio";

const mainFont = "font-sans";
const monoFont = "font-mono";

const sectionClass =
  "rounded-[20px] border border-venom-border bg-venom-card/60 backdrop-blur-md p-4 sm:p-5 transition-colors duration-300";

const PLACEHOLDER_NAME = "Your Name";
const PLACEHOLDER_ROLE = "Your professional title";
const PLACEHOLDER_BIO =
  "Write a short bio in the Intake step and it will appear here instantly.";

interface SectionHeaderProps {
  number: number;
  title: string;
  meta?: string;
}

function SectionHeader({ number, title, meta }: SectionHeaderProps) {
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

function HeroSection({ number }: SectionProps) {
  const { intake } = useIntake();
  const name = intake.name.trim() || PLACEHOLDER_NAME;
  const role = intake.title.trim() || PLACEHOLDER_ROLE;
  const mail = toMailto(intake.email);

  return (
    <section className={sectionClass}>
      <SectionHeader number={number} title="Hero / Intro" meta="top of page" />
      <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-9">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-venom-gold text-xs font-bold text-slate-950 shadow-gold-glow-sm sm:self-center">
          {getInitials(intake.name)}
        </div>
        <div className="min-w-0">
          <h3 className="text-[14px] font-semibold leading-5 text-venom-text">{name}</h3>
          <p className="mt-1 text-xs leading-4 text-venom-muted">{role}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              href="#featured-projects"
              className="rounded-full border border-venom-border bg-transparent px-3 py-1.5 text-[11px] leading-5 text-venom-text transition hover:border-venom-gold hover:bg-venom-gold/10 hover:text-venom-gold"
            >
              View Featured Work
            </a>
            <a
              href={mail ?? "#contact"}
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

function AboutSection({ number }: SectionProps) {
  const { intake } = useIntake();
  const bio = intake.bio.trim();

  return (
    <section className={sectionClass}>
      <SectionHeader number={number} title="About Me" meta={`${intake.bio.length} chars`} />
      <p
        className={`pl-1 text-xs leading-[1.7] sm:pl-9 sm:text-sm ${
          bio ? "text-venom-secondary" : "text-venom-muted"
        }`}
      >
        {bio || PLACEHOLDER_BIO}
      </p>
    </section>
  );
}

function ProjectsSection({ number, projectCount, toggles }: SectionProps) {
  const { intake } = useIntake();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const profileInput = intake.profileUrl.trim();

  useEffect(() => {
    if (!profileInput) {
      setRepos([]);
      setError("");
      setLoading(false);
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchGithubProfile(profileInput);
        if (!cancelled) {
          setRepos(data.repositories);
        }
      } catch (err) {
        if (!cancelled) {
          setRepos([]);
          setError(
            err instanceof Error ? err.message : "Could not load GitHub projects."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }, 400);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [profileInput]);

  const visibleRepos = [...repos]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, Math.max(1, projectCount));

  return (
    <section id="featured-projects" className={sectionClass}>
      <SectionHeader
        number={number}
        title="Featured GitHub Projects"
        meta={`${visibleRepos.length} cards · stars ${toggles.showStars ? "on" : "off"} · badges ${
          toggles.showBadges ? "on" : "off"
        }`}
      />

      {!profileInput ? (
        <p className="pl-1 text-xs text-venom-muted sm:pl-9">
          Add your GitHub profile URL or username in the Intake step to load your live repositories.
        </p>
      ) : loading ? (
        <p className="pl-1 text-xs text-venom-muted sm:pl-9">
          Fetching GitHub repositories...
        </p>
      ) : error ? (
        <p className="pl-1 text-xs text-red-400 sm:pl-9">{error}</p>
      ) : visibleRepos.length === 0 ? (
        <p className="pl-1 text-xs text-venom-muted sm:pl-9">
          No public repositories found for this profile.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2 sm:pl-9 lg:grid-cols-3">
          {visibleRepos.map((repo) => (
            <article
              key={repo.name}
              className="flex min-h-[106px] flex-col items-start rounded-[16px] border border-venom-border bg-venom-input p-3.5 transition hover:border-venom-gold/50 hover:shadow-lg hover:shadow-venom-gold/5"
            >
              <h3 className="text-xs font-medium leading-5 text-venom-text sm:text-[13px]">
                {repo.name}
              </h3>
              {toggles.showStars && (
                <p className="mt-2 flex items-center gap-1 text-[11px] text-venom-gold">
                  <span aria-hidden="true">★</span>
                  {formatStars(repo.stars)}
                </p>
              )}
              {toggles.showBadges && (
                <span
                  className={`mt-2 inline-flex rounded-full bg-venom-gold/15 px-2.5 py-1 text-[11px] leading-4 text-venom-gold ${monoFont}`}
                >
                  {repo.language}
                </span>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ExperienceSection({ number }: SectionProps) {
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

function SkillsSection({ number }: SectionProps) {
  const { intake } = useIntake();
  const skills = intake.skills.map((s) => s.trim()).filter(Boolean);

  return (
    <section id="technical-skills" className={sectionClass}>
      <SectionHeader number={number} title="Technical Skills" meta={`${skills.length} skills`} />
      <div className="pl-1 sm:pl-9">
        {skills.length === 0 ? (
          <p className="text-xs text-venom-muted">
            Add your skills in the Intake step and they will appear here.
          </p>
        ) : (
          <article className="rounded-[16px] border border-venom-border bg-venom-input p-3.5 transition hover:border-venom-gold/50">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className={`rounded-full border border-venom-border bg-venom-gold/10 px-2.5 py-1.5 text-[10px] text-venom-gold ${monoFont}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

function buildContactLinks(intake: IntakeData): ContactLink[] {
  const links: ContactLink[] = [];

  const mail = toMailto(intake.email);
  if (mail) {
    links.push({
      icon: "@",
      title: "Email",
      sub: intake.email.trim(),
      href: mail,
      external: false,
      breakAll: true,
    });
  }

  const github = toSafeUrl(intake.profileUrl);
  if (github) {
    links.push({
      icon: "GH",
      title: "GitHub",
      sub: intake.profileUrl.trim(),
      href: github,
      external: true,
      breakAll: true,
    });
  }

  const linkedin = toSafeUrl(intake.linkedin);
  if (linkedin) {
    links.push({
      icon: "in",
      title: "LinkedIn",
      sub: intake.linkedin.trim(),
      href: linkedin,
      external: true,
      breakAll: true,
    });
  }

  const twitter = toSocialUrl(intake.twitter, "x.com");
  if (twitter) {
    links.push({
      icon: "X",
      title: "Social Profile",
      sub: intake.twitter.trim(),
      href: twitter,
      external: true,
      breakAll: true,
    });
  }

  const website = toSafeUrl(intake.website);
  if (website) {
    links.push({
      icon: "🌐",
      title: "Website",
      sub: intake.website.trim(),
      href: website,
      external: true,
      breakAll: true,
    });
  }

  return links;
}

const inputClass =
  "w-full rounded-xl border border-venom-border bg-venom-card px-3 py-2 text-xs text-venom-text placeholder:text-venom-muted outline-none transition focus:border-venom-gold/60";

function ContactSection({ number, toggles }: SectionProps) {
  const { intake } = useIntake();
  const contactLinks = buildContactLinks(intake);
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={sectionClass}>
      <SectionHeader number={number} title="Contact & Social Links" meta="let's connect" />

      {contactLinks.length === 0 ? (
        <p className="pl-1 text-xs text-venom-muted sm:pl-9">
          Add your email and social links in the Intake step and they will appear here.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2.5 pl-1 sm:grid-cols-2 sm:pl-9">
          {contactLinks.map((l) => (
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
      )}

      {toggles.showContactForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-3 grid gap-2.5 pl-1 sm:pl-9"
        >
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <input type="text" placeholder="Your name" className={inputClass} />
            <input type="email" placeholder="Your email" className={inputClass} />
          </div>
          <textarea rows={3} placeholder="Your message" className={`${inputClass} resize-none`} />
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-venom-gold px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-venom-gold-hover cursor-pointer"
            >
              Send message
            </button>
            {sent && (
              <span className="text-xs text-venom-gold">
                Preview message ready (demo form).
              </span>
            )}
          </div>
        </form>
      )}
    </section>
  );
}

const SECTION_COMPONENTS: Record<number, ComponentType<SectionProps>> = {
  1: HeroSection,
  2: AboutSection,
  3: ProjectsSection,
  4: ExperienceSection,
  5: SkillsSection,
  6: ContactSection,
};

export default function LiveStructure() {
  const { config } = usePortfolioConfig();
  const { sections, projectCount } = config;
  const toggles: PortfolioToggles = config.toggles;
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
            if (!Component) return null;
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