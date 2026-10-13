
import React from "react";
import Navbar from "./components/Navbar";
import GitHubBtn from "./components/GitHubBtn";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#030712] font-sans text-white selection:bg-blue-500 selection:text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-40 top-60 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[140px]" />
      </div>

      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-between px-4 py-8">
        <div className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center text-center">
          <GitHubBtn />
          <div className="py-8 text-gray-400"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-6 text-center">
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
      </main>
    </div>
  );
}