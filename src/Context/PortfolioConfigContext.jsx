import React, { createContext, useContext, useEffect, useState } from "react";

export const DEFAULT_CONFIG = {
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

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const saved = JSON.parse(raw);

    const ids = (saved.sections ?? []).map((s) => s.id).sort().join();
    const defaultIds = DEFAULT_CONFIG.sections.map((s) => s.id).sort().join();
    if (ids !== defaultIds) return DEFAULT_CONFIG;

    return {
      sections: saved.sections,
      projectCount: saved.projectCount ?? DEFAULT_CONFIG.projectCount,
      toggles: { ...DEFAULT_CONFIG.toggles, ...saved.toggles },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

const PortfolioConfigContext = createContext(null);

export function PortfolioConfigProvider({ children }) {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      /* ignore */
    }
  }, [config]);

  return (
    <PortfolioConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </PortfolioConfigContext.Provider>
  );
}

export function usePortfolioConfig() {
  const ctx = useContext(PortfolioConfigContext);
  if (!ctx) {
    throw new Error("usePortfolioConfig must be used inside <PortfolioConfigProvider>");
  }
  return ctx;
}