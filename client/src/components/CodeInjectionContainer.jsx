import React from "react";

export default function CodeInjectionContainer() {
  return (
    <div className="w-full h-[600px] rounded-2xl border border-amber-500/20 bg-slate-900/60 dark:bg-black/60 p-4 shadow-2xl backdrop-blur-md flex items-center justify-center transition-colors duration-300">
      <div className="w-full h-full rounded-xl border border-dashed border-amber-500/30 bg-slate-950/40 dark:bg-black/40 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-3">
          <span className="text-amber-400 text-lg font-mono">&lt;/&gt;</span>
        </div>
        
        <p className="text-slate-400 text-sm font-sans">
          Generated Portfolio Preview Space
        </p>

      </div>
    </div>
  );
}