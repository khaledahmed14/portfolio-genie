import React from "react";
import AuthHero from "../components/AuthHero";
import GitHubBtn from "../components/GitHubBtn";
import EmailForm from "../components/EmailForm";

export default function AuthPage() {
  return (
    <div className="flex w-full max-w-2xl flex-1 flex-col items-center justify-between text-center">
      <div className="flex flex-col items-center justify-center w-full">
        <AuthHero /> 
        <GitHubBtn />
        <div className="mt-6 text-start w-full"><EmailForm /></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-12 text-center w-full">
        <div className="flex items-center gap-2 rounded-full border border-gray-800/80 bg-[#0b0f19]/80 px-4 py-1.5 text-xs text-gray-400 shadow-lg backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>
            Over <strong className="font-semibold text-white">12,000+</strong> developer portfolios generated this month
          </span>
        </div>

        <p className="max-w-xl px-4 text-[11px] leading-relaxed text-gray-500/80">
          PortfolioGenie demo environment. Everything runs in your browser, nothing is uploaded and no real deployment is created.
        </p>
      </div>
    </div>
  );
}