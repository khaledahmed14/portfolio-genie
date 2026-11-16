import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import type {
  IntakeContextType,
  IntakeData,
  IntakeTextField,
  SkillsUpdater,
} from "../types/portfolio";

export const DEFAULT_INTAKE: IntakeData = {
  profileUrl: "",
  name: "",
  title: "",
  bio: "",
  skills: ["React", "TypeScript", "Node.js", "Docker", "Tailwind CSS", "MongoDB"],
  email: "",
  linkedin: "",
  twitter: "",
  website: "",
};

const STORAGE_KEY = "portfolio-intake-v1";

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function loadIntake(): IntakeData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_INTAKE;

    const saved: unknown = JSON.parse(raw);
    if (typeof saved !== "object" || saved === null) return DEFAULT_INTAKE;
    const s = saved as Record<string, unknown>;

    return {
      profileUrl: asString(s.profileUrl),
      name: asString(s.name),
      title: asString(s.title),
      bio: asString(s.bio).slice(0, 400),
      skills: Array.isArray(s.skills)
        ? s.skills.filter((x): x is string => typeof x === "string")
        : DEFAULT_INTAKE.skills,
      email: asString(s.email),
      linkedin: asString(s.linkedin),
      twitter: asString(s.twitter),
      website: asString(s.website),
    };
  } catch {
    return DEFAULT_INTAKE;
  }
}

const IntakeContext = createContext<IntakeContextType | undefined>(undefined);

interface IntakeProviderProps {
  children: ReactNode;
}

export function IntakeProvider({ children }: IntakeProviderProps) {
  const [intake, setIntake] = useState<IntakeData>(loadIntake);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(intake));
    } catch {
      /* storage unavailable */
    }
  }, [intake]);

  const updateField = useCallback((field: IntakeTextField, value: string) => {
    setIntake((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setSkills = useCallback((updater: SkillsUpdater) => {
    setIntake((prev) => ({
      ...prev,
      skills: typeof updater === "function" ? updater(prev.skills) : updater,
    }));
  }, []);

  const value = useMemo<IntakeContextType>(
    () => ({ intake, updateField, setSkills }),
    [intake, updateField, setSkills]
  );

  return (
    <IntakeContext.Provider value={value}>{children}</IntakeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useIntake(): IntakeContextType {
  const ctx = useContext(IntakeContext);
  if (!ctx) {
    throw new Error("useIntake must be used inside <IntakeProvider>");
  }
  return ctx;
}