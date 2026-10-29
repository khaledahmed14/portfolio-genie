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
          className="flex items-center gap-2.5 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl transition-all hover:bg-amber-400 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
        >
          <FontAwesomeIcon icon={faDownload} className="text-xs" />
          <span className="whitespace-nowrap font-sans">Download Complete Source Code</span>
        </button>
      </div>
      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 dark:bg-black/80 px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-amber-500/50 hover:bg-slate-800"
        >
          &larr; Back to customize
        </button>

        <p className="text-xs text-slate-400">
          Tip: the theme toggle inside the preview works exactly like the exported file.
        </p>
      </div>
    </div>
  );
}