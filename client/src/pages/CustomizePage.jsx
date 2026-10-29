import React from "react";
import LiveStructure from "../components/LiveStructure";
import Arrangesettings from "../components/ArrangePortfolioSettings";

export default function CustomizePage({ setCurrentStep }) {
  return (
    <div className="flex w-full flex-col gap-6 py-4 transition-colors duration-300">
      <div className="flex flex-col gap-1 text-left">
        <span className="text-xs font-semibold tracking-wider text-venom-gold uppercase">
          STEP 3 · CUSTOMIZE
        </span>
        <h1 className="text-2xl font-bold text-venom-text sm:text-3xl">
          Arrange your portfolio
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex h-fit min-h-[400px] w-full items-center justify-center rounded-2xl border border-venom-border bg-venom-card/40 backdrop-blur-md text-sm text-venom-muted">
            <Arrangesettings />
          </div>
        </div>
        <div className="lg:col-span-7">
          <LiveStructure />
        </div>
      </div>
      
      <div className="mt-4 flex w-full items-center justify-between border-t border-venom-border pt-6">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-card/80 px-5 py-2.5 text-sm font-medium text-venom-text transition-all hover:border-venom-gold/50 hover:bg-venom-card-hover"
        >
          &larr; Back to intake
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep(4)}
          className="flex items-center gap-2 rounded-xl bg-venom-gold px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-gold-glow transition-all hover:bg-venom-gold-hover hover:shadow-[0_0_25px_var(--gold-glow)]"
        >
          Generate Final Portfolio Code 
        </button>
      </div>
    </div>
  );
}