import logo from "../assets/logo.png";
import React from "react";
export default function AuthHero() {
  return (
    <div className="flex flex-col items-center text-center mt-6">
      <img
        src={logo}
        alt="PortfolioGenie logo"
        className="w-50 h-30  flex items-center justify-center  "
      />

      <h1 className="text-4xl font-['Trebuchet_MS'] text-white tracking-tight mb-3">
        Venom<span className="text-cyan-400">Ai</span>
      </h1>
      <p className="text-gray-400 text-sm max-w-md mb-6">
        Transform Your GitHub into a High-Impact Developer Portfolio in Seconds
      </p>
    </div>
  );
}
