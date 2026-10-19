import React from "react";

export default function PreviewPage({ setCurrentStep }) {
  return (
    <div className="flex w-full flex-col gap-6 py-4">
      {/* Top Section Header & SubNavbar (عمرو) */}
      <div className="w-full">
        {/* <PreviewNavbar /> */}
        <div className="flex w-full items-center justify-between rounded-xl border border-dashed border-[#60A5FA33] bg-[#1E293B4D] p-4 text-sm text-[#94A3B8]">
          [ PreviewNavbar Component Placeholder - Amr ]
        </div>
      </div>

      {/* Code Injection Container Frame (عمرو) */}
      <div className="w-full">
        {/* <CodeInjectionContainer /> */}
        <div className="flex min-h-[600px] w-full items-center justify-center rounded-2xl border border-dashed border-[#60A5FA33] bg-[#03071299] p-6 text-sm text-[#94A3B8]">
          [ CodeInjectionContainer Placeholder - Amr ]
        </div>
      </div>

      {/* Footer Actions & Tip */}
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