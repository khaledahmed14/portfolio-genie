import vector1 from "../assets/Vector.png";
import React from "react";
export default function AuthHero() {
  return (
    <div className="flex flex-col items-center text-center mt-6">
      <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 mb-6">
        <img
              src={vector1}
              alt="PortfolioGenie logo"
              className="h-1/2 w-1/2 object-contain"
            />
      </div>
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
        Portfolio<span className="text-blue-500">Genie</span>
      </h1>
      <p className="text-gray-400 text-sm max-w-md mb-6">
        Transform Your GitHub into a High-Impact Developer Portfolio in Seconds
      </p>
      
    </div>
  );
}