import React from "react";

export default function Arrangesettings() {
  return (
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl bg-slate-900/40 dark:bg-black/40 border border-amber-500/20 px-4 py-6 font-['Plus_Jakarta_Sans',sans-serif] text-slate-400 transition-colors duration-300">
      
      {/* قسم الأقسام وترتيبها */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Sections{" "}
          <span className="font-sans font-normal normal-case tracking-normal opacity-70">
            · drag the handle or use the arrows
          </span>
        </h3>

        <ul className="flex flex-col gap-2">
          {[
            { id: 1, title: "Hero / Intro", disabledUp: true, disabledDown: false },
            { id: 2, title: "About Me", disabledUp: false, disabledDown: false },
            { id: 3, title: "Featured GitHub Projects", disabledUp: false, disabledDown: false },
            { id: 4, title: "Work Experience", disabledUp: false, disabledDown: false },
            { id: 5, title: "Technical Skills Grid", disabledUp: false, disabledDown: false },
            { id: 6, title: "Contact & Social Links", disabledUp: false, disabledDown: true },
          ].map((item) => (
            <li key={item.id} className="flex items-center gap-2 rounded-2xl border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-4 text-[13px] font-medium transition-all hover:border-amber-500/40">
              <span className="text-sm text-slate-500">⠿</span>
              
              {/* [MODIFIED]: تحويل الـ Checkbox للون الذهبي الراقي */}
              <input 
                type="checkbox" 
                defaultChecked 
                className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-slate-800 checked:bg-amber-500 after:hidden after:text-[13px] after:font-bold after:text-slate-950 after:content-['✓'] checked:after:block transition-colors" 
              />
              
              <span className="flex-1 text-slate-100 text-[13px] font-semibold">{item.title}</span>
              
              <div className="flex flex-col overflow-hidden rounded-lg bg-slate-900 border border-amber-500/20">
                <button disabled={item.disabledUp} className={`h-4 w-6 text-[8px] text-amber-400 ${item.disabledUp ? "opacity-30 cursor-not-allowed" : "hover:bg-amber-500/20"}`}>▲</button>
                <button disabled={item.disabledDown} className={`h-4 w-6 text-[8px] text-amber-400 ${item.disabledDown ? "opacity-30 cursor-not-allowed" : "hover:bg-amber-500/20"}`}>▼</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* قسم المشاريع المميزة والـ Slider */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Featured Projects
        </h3>

        <div className="flex justify-center items-center gap-2.5">
          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-lg text-slate-100 hover:bg-amber-500/20 transition-all">−</button>

          <input
            type="range"
            min={1}
            max={12}
            defaultValue={6}
            aria-label="Number of featured projects"
            className="
                [--v:45.45%]
                h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full outline-none
                bg-[linear-gradient(to_right,#f59e0b_var(--v),#334155_var(--v))]

                [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px]
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-amber-500
                [&::-webkit-slider-thumb]:shadow-[0_0_14px_rgba(245,158,11,0.6)]

                [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px]
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:bg-amber-500
                [&::-moz-range-thumb]:shadow-[0_0_14px_rgba(245,158,11,0.6)]
                [&::-moz-range-track]:bg-transparent

                focus-visible:ring-2 focus-visible:ring-amber-500/50
            "
          />

          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-lg text-slate-100 hover:bg-amber-500/20 transition-all">+</button>
          <p className="font-extrabold text-[24px] text-amber-400">6</p>
        </div>

        <p className="text-[12px] font-normal text-slate-400">
          Showing 6 of 12 repositories, ranked by stars.
        </p>
      </section>

      {/* قسم تفعيل وإلغاء المحتوى (Toggles) */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-slate-400">
          Content Toggles
        </h3>

        <div className="flex flex-col">
          {[
            "Show repository star count",
            "Show tech stack badges",
            "Show interactive contact form",
            "Enable dark mode by default"
          ].map((label, idx, arr) => (
            <label key={idx} className={`flex items-center justify-between text-slate-200 font-semibold py-3.5 text-[13px] ${idx !== arr.length - 1 ? "border-b border-amber-500/10" : ""}`}>
              {label}
              {/* [MODIFIED]: تحويل ألوان التوجل للون الذهبي الفاخر */}
              <input 
                type="checkbox" 
                defaultChecked 
                className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-slate-800 transition-colors duration-200 checked:bg-amber-500 before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" 
              />
            </label>
          ))}
        </div>
      </section>

    </div>
  );
}