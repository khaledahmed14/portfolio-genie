import React from 'react';

export default function CodeInjectionContainer() {
  return (
    <div className="w-full h-[600px] rounded-2xl border border-white/10 bg-[#070c18] p-4 shadow-2xl backdrop-blur-md flex items-center justify-center">
      <div className="w-full h-full rounded-xl border border-dashed border-white/10 bg-[#0d1428]/40 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
          <span className="text-cyan-400 text-lg font-mono">&lt;/&gt;</span>
        </div>
        <p className="text-gray-400 text-sm font-sans">
          Generated Portfolio Preview Space
        </p>
      </div>
    </div>
  );
}