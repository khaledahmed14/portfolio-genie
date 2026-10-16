import React from "react";
import logo from "../assets/logo.png";

const STEPS = [
  { id: 1, subLabel: "STEP 1", label: "Auth" },
  { id: 2, subLabel: "STEP 2", label: "Intake" },
  { id: 3, subLabel: "STEP 3", label: "Customize" },
  { id: 4, subLabel: "STEP 4", label: "Export & Preview" },
];

export default function Navbar({ currentStep = 1, setCurrentStep }) {
  return (
    <header className="flex h-[72px] w-full items-center border-b border-gray-800 bg-[#0b0f19] px-[4%]">
      <div className="flex w-full items-center justify-between">
        <div className="flex shrink-0 items-center gap-0">
          <img
            src={logo}
            alt="PortfolioGenie logo"
            className="w-25 h-15 flex items-center justify-center  "
          />

          <span className="hidden text-[22px] font-bold  font-['Trebuchet_MS'] leading-none tracking-tight text-white sm:inline">
            Venom<span className="text-cyan-400">Ai</span>
          </span>
        </div>
        <nav aria-label="Progress" className="w-[70%] lg:w-[62%]">
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
                    className={`flex shrink-0 items-center gap-3 rounded-full border-none bg-transparent p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isLocked
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 ring-4 ring-blue-600/30"
                          : isCompleted
                            ? "border border-blue-500 bg-blue-600/20 text-blue-400"
                            : "border border-gray-700 text-gray-500"
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
                            ? "font-medium text-gray-300"
                            : "text-gray-500"
                        }`}
                      >
                        {step.subLabel}
                      </span>
                      <span
                        className={`whitespace-nowrap text-[13px] leading-tight ${
                          isActive || isCompleted
                            ? "font-semibold text-white"
                            : "text-gray-400"
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
                        step.id < currentStep ? "bg-blue-600" : "bg-gray-800"
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </header>
  );
}
