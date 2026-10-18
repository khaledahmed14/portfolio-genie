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
    <div className="w-full max-w-[1130px] mx-auto bg-[#1E293B99] border border-[#60A5FA33] p-4 sm:p-6 rounded-2xl flex flex-col gap-4 text-white">
      <div className="flex items-center gap-3">
        <span className="shrink-0 w-[30px] h-[30px] text-[#93C5FD] font-medium text-[13px] bg-[#2563EB33] border border-[#60A5FA66] rounded-lg flex justify-center items-center">
          B
        </span>
        <div className="flex flex-col min-w-0">
          <h1 className="font-bold text-lg sm:text-[21px] text-[#F8FAFC]">
            Additional Information
          </h1>
          <h3 className="font-normal text-[12px] text-[#7C8AA5]">
            This is the copy your portfolio is written from.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="name-input" className="text-[#CBD5E1] text-left self-start font-semibold text-[13px]">
            Full Name
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-3 transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <input 
              type="text" 
              name="name" 
              id="name-input" 
              className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-[#F8FAFC] placeholder:text-[#7C8AA5]/50" 
              placeholder="Enter your name" 
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="title-input" className="text-[#CBD5E1] text-left self-start font-semibold text-[13px]">
            Professional title / tagline
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-3 transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <input 
              type="text" 
              name="title" 
              id="title-input" 
              className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-[#F8FAFC] placeholder:text-[#7C8AA5]/50" 
              placeholder="Full-Stack React & Node.js Engineer" 
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="bio-input" className="text-[#CBD5E1] font-semibold text-[13px]">
            Bio / About me
          </label>
          <span className="text-[#7C8AA5] font-medium text-[13px]">
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
          className="w-full min-h-[130px] resize-y bg-[#03071299] border border-[#94A3B840] rounded-2xl outline-none px-4 py-3 text-[15px] text-[#F8FAFC] placeholder:text-[#7C8AA5]/50 transition-all duration-300 focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        ></textarea>
      </div>
      

<div className="flex flex-col gap-3 font-['JetBrains_Mono']">
  <h3 className="text-[13px] font-semibold text-[#F8FAFC] font-['Plus_Jakarta_Sans']">
    Skills & tools (press Enter or comma to add)
  </h3>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      addSkill(newSkill);
    }}
    className="flex min-h-[46px] w-full flex-wrap items-center gap-2 rounded-xl border border-[#94A3B833] bg-[#03071299] px-2.5 py-2"
  >
    {skills.map((skill) => (
      <span
        key={skill}
        className="flex shrink-0 items-center gap-1.5 rounded-full border border-[rgba(96,165,250,0.4)] bg-[rgba(37,99,235,0.18)] px-2.5 py-1 text-xs text-[#93C5FD]"
      >
        {skill}
        <button
          type="button"
          onClick={() => removeSkill(skill)}
          aria-label={`Remove ${skill}`}
          className="text-[#CBD5E1] hover:text-red-400"
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
      className="min-w-[110px] flex-1 bg-transparent px-1 py-1 text-xs text-[#F8FAFC] outline-none placeholder:text-[#64748B]"
    />
  </form>

  <div className="flex flex-wrap items-center gap-2">
    <span className="text-[11px] text-[#64748B]">Suggestions:</span>

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
          className="rounded-full border border-dashed border-[#94A3B855] px-3 py-1.5 text-xs text-[#94A3B8] hover:border-blue-400 hover:text-white"
        >
          + {skill}
        </button>
      ))}
  </div>
</div>

      <div className="flex flex-col gap-3 font-['Plus_Jakarta_Sans']">
        <h3 className="text-[13px] font-semibold text-[#F8FAFC]">
          Contact & Social Links
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="email-input" className="text-[11px] text-[#CBD5E1]">
              Email address
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-[#94A3B833] bg-[#03071299] px-3 py-2.5 focus-within:border-blue-500/50">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#94A3B8] text-xs" />
              <input id="email-input" type="email" placeholder="alex@alexchen.dev" className="w-full min-w-0 bg-transparent text-xs text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="linkedin-input" className="text-[11px] text-[#CBD5E1]">
              LinkedIn profile URL
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-[#94A3B833] bg-[#03071299] px-3 py-2.5 focus-within:border-blue-500/50">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-[#94A3B8] text-xs" />
              <input id="linkedin-input" type="url" placeholder="https://linkedin.com/in/your-profile" className="w-full min-w-0 bg-transparent text-xs text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="twitter-input" className="text-[11px] text-[#CBD5E1]">
              Twitter / X handle
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-[#94A3B833] bg-[#03071299] px-3 py-2.5 focus-within:border-blue-500/50">
              <FontAwesomeIcon icon={faXTwitter} className="text-[#94A3B8] text-xs" />
              <input id="twitter-input" type="text" placeholder="@alexchen_dev" className="w-full min-w-0 bg-transparent text-xs text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
            </div>
          </div>

          <div className="flex flex-col gap-2 min-w-0">
            <label htmlFor="website-input" className="text-[11px] text-[#CBD5E1]">
              Personal blog or website
            </label>
            <div className="flex items-center gap-2 rounded-lg border border-[#94A3B833] bg-[#03071299] px-3 py-2.5 focus-within:border-blue-500/50">
              <FontAwesomeIcon icon={faGlobe} className="text-[#94A3B8] text-xs" />
              <input id="website-input" type="url" placeholder="https://alexchen.dev" className="w-full min-w-0 bg-transparent text-xs text-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}