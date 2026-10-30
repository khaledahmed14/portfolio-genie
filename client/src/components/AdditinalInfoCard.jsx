import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function AdditionalInfoCard() {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Node.js",
    "Docker",
    "Tailwind CSS",
    "MongoDB",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const suggestedSkills = [
    "GraphQL",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Kubernetes",
    "Python",
  ];

  const addSkill = (skill) => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill && !skills.some((s) => s.toLowerCase() === trimmedSkill.toLowerCase())) {
      setSkills([...skills, trimmedSkill]);
    }
    setNewSkill("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="w-full max-w-[1130px] mx-auto bg-venom-card border border-venom-border backdrop-blur-md p-4 sm:p-6 rounded-2xl flex flex-col gap-4 text-venom-text transition-colors duration-300 shadow-xl">
      
      {/* رأس الكارت */}
      <div className="flex items-center gap-3">
        <span className="shrink-0 w-[30px] h-[30px] text-venom-gold font-medium text-[13px] bg-venom-gold/15 border border-venom-gold/30 rounded-lg flex justify-center items-center">
          B
        </span>
        <div className="flex flex-col min-w-0">
          <h1 className="font-bold text-lg sm:text-[21px] text-venom-text">
            Additional Information
          </h1>
          <h3 className="font-normal text-[12px] text-venom-muted">
            This is the copy your portfolio is written from.
          </h3>
        </div>
      </div>

      {/* حقول الاسم والمسمى الوظيفي */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="name-input" className="text-venom-secondary text-left self-start font-semibold text-[13px]">
            Full Name
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-venom-border bg-venom-input rounded-xl py-3 transition-all duration-300 focus-within:border-venom-gold focus-within:shadow-[0_0_15px_var(--gold-glow)] hover:shadow-[0_0_15px_var(--gold-glow)]">
            <input 
              type="text" 
              name="name" 
              id="name-input" 
              className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-venom-text placeholder:text-venom-muted" 
              placeholder="Enter your name" 
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="title-input" className="text-venom-secondary text-left self-start font-semibold text-[13px]">
            Professional title / tagline
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-venom-border bg-venom-input rounded-xl py-3 transition-all duration-300 focus-within:border-venom-gold focus-within:shadow-[0_0_15px_var(--gold-glow)] hover:shadow-[0_0_15px_var(--gold-glow)]">
            <input 
              type="text" 
              name="title" 
              id="title-input" 
              className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-venom-text placeholder:text-venom-muted" 
              placeholder="Full-Stack React & Node.js Engineer" 
            />
          </div>
        </div>
      </div>

      {/* حقل النبذة التعريفية (Bio) */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="bio-input" className="text-venom-secondary font-semibold text-[13px]">
            Bio / About me
          </label>
          <span className="text-venom-muted font-medium text-[13px]">
            {bio.length} / 400
          </span>
        </div>
        <textarea 
          name="bio"
          id="bio-input" 
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={400} 
          placeholder=" Write a brief bio about yourself, your skills, and your experience. This will be used to generate your portfolio content."
          className="w-full min-h-[130px] resize-y bg-venom-input border border-venom-border rounded-2xl outline-none px-4 py-3 text-[15px] text-venom-text placeholder:text-venom-muted transition-all duration-300 focus:border-venom-gold focus:shadow-[0_0_15px_var(--gold-glow)] hover:shadow-[0_0_15px_var(--gold-glow)]"
        ></textarea>
      </div>

      {/* قسم المهارات والأدوات */}
      <div className="flex flex-col gap-3 font-['JetBrains_Mono']">
        <h3 className="text-[13px] font-semibold text-venom-text font-['Plus_Jakarta_Sans']">
          Skills & tools (press Enter or comma to add)
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            addSkill(newSkill);
          }}
          className="flex min-h-[46px] w-full flex-wrap items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-2.5 py-2"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-venom-gold/30 bg-venom-gold/15 px-2.5 py-1 text-xs text-venom-gold"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                aria-label={`Remove ${skill}`}
                className="text-venom-secondary hover:text-red-400 transition-colors"
              >
                ×
              </button>
            </span>
          ))}

          <input
            value={newSkill}
            onChange={(e) => {
              const value = e.target.value;
              if (value.includes(",")) {
                const parts = value.split(",");
                parts.slice(0, -1).forEach((skill) => addSkill(skill));
                setNewSkill(parts[parts.length - 1]);
              } else {
                setNewSkill(value);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill(newSkill);
              }
            }}
            placeholder="Add a skill..."
            className="min-w-[110px] flex-1 bg-transparent px-1 py-1 text-xs text-venom-text outline-none placeholder:text-venom-muted"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-venom-muted">Suggestions:</span>

          {suggestedSkills
            .filter(
              (skill) =>
                !skills.some(
                  (existing) =>
                    existing.toLowerCase() === skill.toLowerCase()
                )
            )
            .map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => addSkill(skill)}
                className="rounded-full border border-dashed border-venom-border px-3 py-1.5 text-xs text-venom-secondary hover:border-venom-gold hover:text-venom-gold transition-colors"
              >
                + {skill}
              </button>
            ))}
        </div>
      </div>

      {/* قسم روابط التواصل الاجتماعي */}
      <div className="flex flex-col gap-3 font-['Plus_Jakarta_Sans']">
        <h3 className="text-[13px] font-semibold text-venom-text">
          Contact & Social Links
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="email-input" className="text-[11px] text-venom-secondary">
              Email address
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-3 py-2.5 focus-within:border-venom-gold">
              <FontAwesomeIcon icon={faEnvelope} className="text-venom-gold text-xs" />
              <input id="email-input" type="email" placeholder="alex@alexchen.dev" className="w-full min-w-0 bg-transparent text-xs text-venom-text outline-none placeholder:text-venom-muted" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="linkedin-input" className="text-[11px] text-venom-secondary">
              LinkedIn profile URL
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-3 py-2.5 focus-within:border-venom-gold">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-venom-gold text-xs" />
              <input id="linkedin-input" type="url" placeholder="https://linkedin.com/in/your-profile" className="w-full min-w-0 bg-transparent text-xs text-venom-text outline-none placeholder:text-venom-muted" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="twitter-input" className="text-[11px] text-venom-secondary">
              Twitter / X handle
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-3 py-2.5 focus-within:border-venom-gold">
              <FontAwesomeIcon icon={faXTwitter} className="text-venom-gold text-xs" />
              <input id="twitter-input" type="text" placeholder="@alexchen_dev" className="w-full min-w-0 bg-transparent text-xs text-venom-text outline-none placeholder:text-venom-muted" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="website-input" className="text-[11px] text-venom-secondary">
              Personal blog or website
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-3 py-2.5 focus-within:border-venom-gold">
              <FontAwesomeIcon icon={faGlobe} className="text-venom-gold text-xs" />
              <input id="website-input" type="url" placeholder="https://alexchen.dev" className="w-full min-w-0 bg-transparent text-xs text-venom-text outline-none placeholder:text-venom-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}