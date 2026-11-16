import type { Dispatch, SetStateAction } from "react";

/* ---------- Theme ---------- */
export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/* ---------- Intake ---------- */
export interface IntakeData {
  profileUrl: string;
  name: string;
  title: string;
  bio: string;
  skills: string[];
  email: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export type IntakeTextField = Exclude<keyof IntakeData, "skills">;

export type SkillsUpdater = string[] | ((prev: string[]) => string[]);

export interface IntakeContextType {
  intake: IntakeData;
  updateField: (field: IntakeTextField, value: string) => void;
  setSkills: (updater: SkillsUpdater) => void;
}

/* ---------- Portfolio config ---------- */
export interface PortfolioSection {
  id: number;
  title: string;
  enabled: boolean;
}

export interface PortfolioToggles {
  showStars: boolean;
  showBadges: boolean;
  showContactForm: boolean;
  darkByDefault: boolean;
}

export interface PortfolioConfig {
  sections: PortfolioSection[];
  projectCount: number;
  toggles: PortfolioToggles;
}

export interface PortfolioConfigContextType {
  config: PortfolioConfig;
  setConfig: Dispatch<SetStateAction<PortfolioConfig>>;
}

/* ---------- GitHub fetcher ---------- */
export interface Repository {
  name: string;
  language: string;
  stars: number;
}

export interface GithubStat {
  label: string;
  value: string;
}

/* ---------- Live structure ---------- */
export interface Project {
  name: string;
  stars: number;
  tech: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ContactLink {
  icon: string;
  title: string;
  sub: string;
  href: string;
  external: boolean;
  breakAll?: boolean;
}

export interface SectionProps {
  number: number;
  projectCount: number;
  toggles: PortfolioToggles;
}

/* ---------- Welcome banner ---------- */
export interface WelcomeUser {
  name: string;
  handle: string;
}

/* ---------- Auth ---------- */
export interface ForgotPasswordState {
  email?: string;
}