import React from "react";
import AuthHero from "../components/AuthHero";
import GitHubBtn from "../components/GitHubBtn";
import EmailForm from "../components/EmailForm";

export default function AuthPage() {
  return (
    <div className="flex w-full max-w-2xl flex-1 flex-col items-center justify-between text-center transition-colors duration-300">
      <div className="flex flex-col items-center justify-center w-full">
        <AuthHero /> 
        <GitHubBtn />
        <div className="mt-6 text-start w-full"><EmailForm /></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-12 text-center w-full">
        <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-black dark:bg-black/80 px-4 py-1.5 text-xs text-slate-300 shadow-lg backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
          </span>
          <span>
            Over <strong className="font-semibold text-amber-400">12,000+</strong> developer portfolios generated this month
          </span>
        </div>

        <p className="max-w-xl px-4 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          PortfolioGenie demo environment. Everything runs in your browser, nothing is uploaded and no real deployment is created.
        </p>
      </div>
    </div>
  );
}