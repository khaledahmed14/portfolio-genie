import React from "react";
import LiveStructure from "../components/LiveStructure";
export default function CustomizePage({ setCurrentStep }) {
  return (
    <div className="flex w-full flex-col gap-6 py-4">
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
          STEP 3 · CUSTOMIZE
        </span>
        <h1 className="text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
          Arrange your portfolio
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          {/* <ArrangePortfolioSettings /> */}
          <div className="flex h-full min-h-[400px] w-full items-center justify-center rounded-2xl border border-dashed border-[#60A5FA33] bg-[#1E293B4D] p-6 text-sm text-[#94A3B8]">
            [ ArrangePortfolioSettings Component Placeholder - Heba ]
          </div>
        </div>
        <div className="lg:col-span-7">
          <LiveStructure />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between border-t border-[#33415566] pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="flex items-center gap-2 rounded-xl border border-[#94A3B833] bg-[#03071299] px-5 py-2.5 text-sm font-medium text-[#F8FAFC] transition-all hover:border-[#60A5FA66] hover:bg-[#1E293B]"
        >
          &larr; Back to intake
        </button>

        <button
          type="button"
          onClick={() => setCurrentStep(4)}
          className="flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all hover:bg-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]"
        >
          Generate Final Portfolio Code &#10024;
        </button>
      </div>
    </div>
  );
}