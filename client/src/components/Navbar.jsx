import React from "react";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

const STEPS = [
  { id: 1, subLabel: "STEP 1", label: "Auth" },
  { id: 2, subLabel: "STEP 2", label: "Intake" },
  { id: 3, subLabel: "STEP 3", label: "Customize" },
  { id: 4, subLabel: "STEP 4", label: "Export & Preview" },
];

export default function Navbar({ currentStep = 1, setCurrentStep }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex h-[72px] w-full items-center border-b border-amber-500/20 bg-black dark:bg-black/90 backdrop-blur-md px-[4%] transition-colors duration-300">
      <div className="flex w-full items-center justify-between">
        <div className="flex shrink-0 items-center gap-2">
          <img
            src={logo}
            alt="PortfolioGenie logo"
            className="w-12 h-10 object-contain"
          />

          <span className="hidden text-[22px] font-bold font-['Trebuchet_MS'] leading-none tracking-tight text-white sm:inline">
            Venom<span className="text-amber-400">Ai</span>
          </span>
        </div>
        <nav aria-label="Progress" className="w-[62%] lg:w-[55%]">
          <ol className="flex w-full items-center">
            {STEPS.map((step, index) => {
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;
              const isLocked = step.id > currentStep;
              const isLast = index === STEPS.length - 1;

              return (
                <li
                  key={step.id}
                  className={`flex items-center ${isLast ? "shrink-0" : "min-w-0 flex-1"}`}
                >
                  <button
                    type="button"
                    disabled={isLocked}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`Step ${step.id}: ${step.label}`}
                    onClick={() => !isLocked && setCurrentStep(step.id)}
                    className={`flex shrink-0 items-center gap-3 rounded-full border-none bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isLocked
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30 ring-4 ring-amber-500/20"
                          : isCompleted
                            ? "border border-amber-500/50 bg-amber-500/10 text-amber-400"
                            : "border border-slate-700 text-slate-500"
                      }`}
                    >
                      {isCompleted ? "✓" : step.id}
                    </span>

                    <span
                      className={`flex-col text-left ${isActive ? "hidden sm:flex" : "hidden lg:flex"}`}
                    >
                      <span
                        className={`text-[10px] uppercase leading-tight tracking-wider ${
                          isActive
                            ? "font-medium text-slate-300"
                            : "text-slate-500"
                        }`}
                      >
                        {step.subLabel}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[13px] leading-tight ${
                          isActive || isCompleted
                            ? "font-semibold text-white"
                            : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </span>
                  </button>
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className={`mx-[3%] h-[2px] min-w-2 flex-1 rounded-full transition-colors duration-500 ${
                        step.id < currentStep ? "bg-amber-500" : "bg-slate-800"
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-slate-900/80 text-amber-400 transition-all hover:bg-amber-500/10 hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}