import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type {
  PortfolioConfig,
  PortfolioConfigContextType,
  PortfolioSection,
} from "../types/portfolio";

export const DEFAULT_CONFIG: PortfolioConfig = {
  sections: [
    { id: 1, title: "Hero / Intro", enabled: true },
    { id: 2, title: "About Me", enabled: true },
    { id: 3, title: "Featured GitHub Projects", enabled: true },
    { id: 4, title: "Work Experience", enabled: true },
    { id: 5, title: "Technical Skills Grid", enabled: true },
    { id: 6, title: "Contact & Social Links", enabled: true },
  ],
  projectCount: 6,
  toggles: {
    showStars: true,
    showBadges: true,
    showContactForm: true,
    darkByDefault: true,
  },
};

const STORAGE_KEY = "portfolio-config-v1";

function isSection(value: unknown): value is PortfolioSection {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "number" &&
    typeof v.title === "string" &&
    typeof v.enabled === "boolean"
  );
}

function loadConfig(): PortfolioConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;

    const saved: unknown = JSON.parse(raw);
    if (typeof saved !== "object" || saved === null) return DEFAULT_CONFIG;
    const s = saved as Record<string, unknown>;

    const savedSections: PortfolioSection[] = Array.isArray(s.sections)
      ? s.sections.filter(isSection)
      : [];

    const ids = savedSections.map((x) => x.id).sort().join();
    const defaultIds = DEFAULT_CONFIG.sections.map((x) => x.id).sort().join();
    if (ids !== defaultIds) return DEFAULT_CONFIG;

    const savedToggles =
      typeof s.toggles === "object" && s.toggles !== null
        ? (s.toggles as Partial<PortfolioConfig["toggles"]>)
        : {};

    return {
      sections: savedSections,
      projectCount:
        typeof s.projectCount === "number"
          ? s.projectCount
          : DEFAULT_CONFIG.projectCount,
      toggles: { ...DEFAULT_CONFIG.toggles, ...savedToggles },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

const PortfolioConfigContext = createContext<
  PortfolioConfigContextType | undefined
>(undefined);

interface PortfolioConfigProviderProps {
  children: ReactNode;
}

export function PortfolioConfigProvider({
  children,
}: PortfolioConfigProviderProps) {
  const [config, setConfig] = useState<PortfolioConfig>(loadConfig);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      /* storage unavailable */
    }
  }, [config]);

  return (
    <PortfolioConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </PortfolioConfigContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePortfolioConfig(): PortfolioConfigContextType {
  const ctx = useContext(PortfolioConfigContext);
  if (!ctx) {
    throw new Error(
      "usePortfolioConfig must be used inside <PortfolioConfigProvider>"
    );
  }
  return ctx;
}