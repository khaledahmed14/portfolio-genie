import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function PreviewNavbar({
  onExportFigma,
  onDeploy,
}) {
  return (
    <div className="w-full rounded-2xl border border-venom-border bg-venom-card/60 p-6 shadow-2xl backdrop-blur-md transition-colors duration-300">
      <div className="flex flex-row items-center justify-between gap-4">
        
        <div className="min-w-0">
          <span className="font-step block text-[11px] font-bold tracking-[0.25em] text-venom-gold uppercase">
            STEP 4 &bull; EXPORT & PREVIEW
          </span>

          <h2 className="font-heading mt-1 text-2xl font-bold tracking-tight text-venom-text sm:text-3xl truncate">
            Your portfolio is ready
          </h2>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onExportFigma}
            className="font-heading flex items-center justify-center gap-2 rounded-xl border border-venom-border bg-venom-input px-4 py-3 text-sm font-semibold text-venom-text transition-all hover:border-venom-gold hover:bg-venom-gold/10 hover:text-venom-gold active:scale-95"
          >
            <FontAwesomeIcon icon={faHashtag} className="text-xs text-venom-gold" />
            <span className="whitespace-nowrap">Export Structure to Figma</span>
          </button>
          <button
            type="button"
            onClick={onDeploy}
            className="font-heading flex items-center justify-center gap-2 rounded-xl bg-venom-gold px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-venom-gold-hover shadow-gold-glow hover:shadow-[0_0_25px_var(--gold-glow)] active:scale-95"
          >
            <span className="whitespace-nowrap">Deploy to Live Server</span>
            <FontAwesomeIcon icon={faRocket} className="text-xs" />
          </button>
        </div>

      </div>
    </div>
  );
}