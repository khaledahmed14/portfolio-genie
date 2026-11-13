import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faRocket, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PreviewNavbar() {
  const [figmaExported, setFigmaExported] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleExportFigma = () => {
    setFigmaExported(true);
    setTimeout(() => setFigmaExported(false), 3000);
  };

  const handleDeploy = () => {
    setDeployed(true);
    setTimeout(() => setDeployed(false), 3000);
  };

  return (
    <div className="w-full rounded-2xl border border-venom-border bg-venom-card/60 p-4 sm:p-6 shadow-2xl backdrop-blur-md transition-colors duration-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="min-w-0">
          <span className="font-step block text-[11px] font-bold tracking-[0.25em] text-venom-gold uppercase">
            STEP 4 &bull; EXPORT & PREVIEW
          </span>

          <h2 className="font-heading mt-1 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-venom-text truncate">
            Your portfolio is ready
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleExportFigma}
            className="font-heading flex items-center justify-center gap-2 rounded-xl border border-venom-border bg-venom-input px-4 py-3 text-sm font-semibold text-venom-text transition-all hover:border-venom-gold hover:bg-venom-gold/10 hover:text-venom-gold active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={figmaExported ? faCheck : faHashtag} className="text-xs text-venom-gold" />
            <span className="whitespace-nowrap">
              {figmaExported ? "Structure Exported!" : "Export Structure to Figma"}
            </span>
          </button>
          
          <button
            type="button"
            onClick={handleDeploy}
            className="font-heading flex items-center justify-center gap-2 rounded-xl bg-venom-gold px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-venom-gold-hover shadow-gold-glow hover:shadow-[0_0_25px_var(--gold-glow)] active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span className="whitespace-nowrap">
              {deployed ? "Deployed Successfully!" : "Deploy to Live Server"}
            </span>
            <FontAwesomeIcon icon={deployed ? faCheck : faRocket} className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}