import React from "react";
import PreviewNavbar from "../components/PreviewNavbar";
import CodeInjectionContainer from "../components/CodeInjectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function PreviewPage({ setCurrentStep }) {
  return (
    <div className="flex w-full flex-col gap-6 py-4 transition-colors duration-300">
      <div className="w-full">
        <PreviewNavbar />
      </div>
      <CodeInjectionContainer />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => console.log("Downloading...")}
          className="flex items-center gap-2.5 rounded-xl bg-venom-gold px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl transition-all hover:bg-venom-gold-hover active:scale-95 shadow-gold-glow"
        >
          <FontAwesomeIcon icon={faDownload} className="text-xs" />
          <span className="whitespace-nowrap font-sans">Download Complete Source Code</span>
        </button>
      </div>
      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 border-t border-venom-border pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-card/80 px-5 py-2.5 text-sm font-medium text-venom-text transition-all hover:border-venom-gold/50 hover:bg-venom-card-hover"
        >
          &larr; Back to customize
        </button>

        <p className="text-xs text-venom-muted">
          Tip: the theme toggle inside the preview works exactly like the exported file.
        </p>
      </div>
    </div>
  );
}