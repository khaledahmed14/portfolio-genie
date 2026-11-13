import React from "react";

export default function CodeInjectionContainer() {
  return (
    <div className="w-full h-[600px] rounded-2xl border border-venom-border bg-venom-card/60 p-4 shadow-2xl backdrop-blur-md flex items-center justify-center transition-colors duration-300">
      <div className="w-full h-full rounded-xl border border-dashed border-venom-border bg-venom-input flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-venom-gold/15 border border-venom-gold/30 flex items-center justify-center mb-3 shadow-gold-glow-sm">
          <span className="text-venom-gold text-lg font-mono">&lt;/&gt;</span>
        </div>
        
        <p className="text-venom-muted text-sm font-sans">
          Generated Portfolio Preview Space
        </p>

      </div>
    </div>
  );
}