
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
  "rounded-[20px] border border-[rgba(96,165,250,0.28)] bg-[rgba(30,41,59,0.7)] p-4 sm:p-5";

function SectionHeader({ number, title, meta }) {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-3">
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(37,99,235,1)] text-xs font-semibold text-white ${mainFont}`}>
        {number}
      </span>
      <h2 className={`min-w-0 text-sm font-semibold text-[#F1F5F9] sm:text-base ${mainFont}`}>
        {title}
      </h2>
      {meta && (
        <span className={`ml-auto shrink-0 text-right text-[13px] font-medium leading-[155%] tracking-normal text-[#71819E] ${monoFont}`}>
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
    <div className={`w-full rounded-[24px] border border-[rgba(96,165,250,0.16)] bg-[#111A29] p-4 text-[#E5E7EB] shadow-xl sm:p-6 ${mainFont}`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-[20px] font-bold leading-7 tracking-tight text-[#F1F5F9]">
            Live structure
          </h1>
          <p className="text-[11px] leading-4 text-[#71819E]">
            6 of 6 sections visible · dark theme by default
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[rgba(16,185,129,0.4)] bg-[rgba(16,185,129,0.12)] px-3 py-1.5 text-xs font-medium text-[#34D399]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          Updates as you edit
        </div>
      </div>

      <div className="space-y-3 rounded-[14px] border border-[rgba(148,163,184,0.14)] bg-[rgba(3,7,18,0.6)] p-3 sm:p-4">
        <section className={sectionClass}>
          <SectionHeader number="1" title="Hero / Intro" meta="top of page" />
          <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-3 sm:pl-9">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full bg-[linear-gradient(135deg,#06B6D4_14.29%,#60A5FA_85.71%)] text-xs font-semibold text-[#082033] sm:self-center">
              AC
            </div>
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold leading-5 text-[#F1F5F9]">
                {name}
              </h3>
              <p className="mt-1 text-xs leading-4 text-[#8290A8]">
                {role}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="#featured-projects"
                  className="rounded-full border border-[rgba(6,182,212,0.5)] bg-[rgba(6,182,212,0.18)] px-3 py-1.5 text-[11px] leading-5 text-[#67C8D8] transition hover:bg-[rgba(6,182,212,0.28)]"
                >
                  View Featured Work
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="rounded-full border border-[rgba(148,163,184,0.22)] bg-transparent px-3 py-1.5 text-[11px] leading-5 text-[#A6B0C1] transition hover:border-slate-500"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionHeader number="2" title="About Me" meta={`${bio.length} chars`} />
          <p className="pl-1 text-xs leading-[1.7] text-[#C0CAD8] sm:pl-9 sm:text-sm">
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
                className="flex min-h-[106px] flex-col items-start rounded-[16px] border border-[rgba(148,163,184,0.16)] bg-[rgba(3,7,18,0.6)] p-3.5 transition hover:border-[rgba(96,165,250,0.4)]"
              >
                <h3 className="text-xs font-medium leading-5 text-[#F1F5F9] sm:text-[13px]">
                  {project.name}
                </h3>
                <p className="mt-2 flex items-center gap-1 text-[11px] text-[#FBBF24]">
                  <span aria-hidden="true">★</span>
                  {project.stars}
                </p>
                <span className={`mt-2 inline-flex rounded-full bg-[rgba(37,99,235,0.2)] px-2.5 py-1 text-[11px] leading-4 text-[rgba(147,197,253,1)] ${monoFont}`}>
                  {project.tech}
                </span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}




