import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const DEFAULT_INTAKE = {
 
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

function loadIntake() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_INTAKE;
    const saved = JSON.parse(raw);
    return {
      ...DEFAULT_INTAKE,
      ...saved,
      bio: String(saved.bio ?? "").slice(0, 400),
      skills: Array.isArray(saved.skills) ? saved.skills : DEFAULT_INTAKE.skills,
    };
  } catch {
    return DEFAULT_INTAKE;
  }
}

const IntakeContext = createContext(null);

export function IntakeProvider({ children }) {
  const [intake, setIntake] = useState(loadIntake);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(intake));
    } catch {
  
    }
  }, [intake]);


  const updateField = useCallback((field, value) => {
    setIntake((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setSkills = useCallback((updater) => {
    setIntake((prev) => ({
      ...prev,
      skills: typeof updater === "function" ? updater(prev.skills) : updater,
    }));
  }, []);

  const value = useMemo(
    () => ({ intake, updateField, setSkills }),
    [intake, updateField, setSkills]
  );

  return (
    <IntakeContext.Provider value={value}>{children}</IntakeContext.Provider>
  );
}

export function useIntake() {
  const ctx = useContext(IntakeContext);
  if (!ctx) {
    throw new Error("useIntake must be used inside <IntakeProvider>");
  }
  return ctx;
}