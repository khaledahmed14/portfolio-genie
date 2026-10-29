import React from "react";
import logo from "../assets/logo.png";

export default function AuthHero() {
  return (
    <div className="flex flex-col items-center text-center mt-6 transition-colors duration-300">
      <img
        src={logo}
        alt="PortfolioGenie logo"
        className="w-50 h-30 flex items-center justify-center object-contain"
      />

      <h1 className="text-4xl font-['Trebuchet_MS'] text-slate-900 dark:text-white tracking-tight mb-3">
        Venom<span className="text-amber-400">Ai</span>
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mb-6">
        Transform Your GitHub into a High-Impact Developer Portfolio in Seconds
      </p>
    </div>
  );
}