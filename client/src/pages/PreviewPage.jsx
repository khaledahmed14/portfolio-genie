import React from "react";
import PreviewNavbar from "../components/PreviewNavbar";
import CodeInjectionContainer from "../components/CodeInjectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function PreviewPage({ setCurrentStep }) {
  return (
    <div className="flex w-full flex-col gap-6 py-4">
      <div className="w-full">
        <PreviewNavbar />
      </div>
      <CodeInjectionContainer />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => console.log("Downloading...")}
          className="flex items-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all hover:bg-blue-500 active:scale-95"
        >
          <FontAwesomeIcon icon={faDownload} className="text-xs" />
          <span className="whitespace-nowrap font-sans">Download Complete Source Code</span>
        </button>
      </div>
      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 border-t border-[#33415566] pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(3)}
          className="flex items-center gap-2 rounded-xl border border-[#94A3B833] bg-[#03071299] px-5 py-2.5 text-sm font-medium text-[#F8FAFC] transition-all hover:border-[#60A5FA66] hover:bg-[#1E293B]"
        >
          &larr; Back to customize
        </button>

        <p className="text-xs text-[#64748B]">
          Tip: the theme toggle inside the preview works exactly like the exported file.
        </p>
      </div>
    </div>
  );
}