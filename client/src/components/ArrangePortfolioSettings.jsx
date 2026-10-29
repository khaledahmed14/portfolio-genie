import React from "react";

export default function Arrangesettings() {
  return (
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl bg-venom-card/40 border border-venom-border px-4 py-6 font-sans text-venom-muted transition-colors duration-300 shadow-xl">
      
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-venom-muted">
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
            <li key={item.id} className="flex items-center gap-2 rounded-2xl border border-venom-border bg-venom-input p-4 text-[13px] font-medium transition-all hover:border-venom-gold/50">
              <span className="text-sm text-venom-muted cursor-grab">⠿</span>
              
              <input 
                type="checkbox" 
                defaultChecked 
                className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-venom-card checked:bg-venom-gold after:hidden after:text-[13px] after:font-bold after:text-slate-950 after:content-['✓'] checked:after:block transition-colors" 
              />
              
              <span className="flex-1 text-venom-text text-[13px] font-semibold">{item.title}</span>
              
              <div className="flex flex-col overflow-hidden rounded-lg bg-venom-card border border-venom-border">
                <button disabled={item.disabledUp} className={`h-4 w-6 text-[8px] text-venom-gold ${item.disabledUp ? "opacity-30 cursor-not-allowed" : "hover:bg-venom-gold/20"}`}>▲</button>
                <button disabled={item.disabledDown} className={`h-4 w-6 text-[8px] text-venom-gold ${item.disabledDown ? "opacity-30 cursor-not-allowed" : "hover:bg-venom-gold/20"}`}>▼</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-venom-muted">
          Featured Projects
        </h3>

        <div className="flex justify-center items-center gap-2.5">
          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-venom-border bg-venom-gold/10 text-lg text-venom-text hover:bg-venom-gold/20 transition-all">−</button>

          <input
            type="range"
            min={1}
            max={12}
            defaultValue={6}
            aria-label="Number of featured projects"
            className="
                [--v:45.45%]
                h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full outline-none
                bg-[linear-gradient(to_right,var(--gold-primary)_var(--v),var(--border-color)_var(--v))]

                [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px]
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-venom-gold
                [&::-webkit-slider-thumb]:shadow-[0_0_14px_var(--gold-glow)]

                [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px]
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:bg-venom-gold
                [&::-moz-range-thumb]:shadow-[0_0_14px_var(--gold-glow)]
                [&::-moz-range-track]:bg-transparent

                focus-visible:ring-2 focus-visible:ring-venom-gold/50
            "
          />

          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-venom-border bg-venom-gold/10 text-lg text-venom-text hover:bg-venom-gold/20 transition-all">+</button>
          <p className="font-extrabold text-[24px] text-venom-gold">6</p>
        </div>

        <p className="text-[12px] font-normal text-venom-muted">
          Showing 6 of 12 repositories, ranked by stars.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-venom-muted">
          Content Toggles
        </h3>

        <div className="flex flex-col">
          {[
            "Show repository star count",
            "Show tech stack badges",
            "Show interactive contact form",
            "Enable dark mode by default"
          ].map((label, idx, arr) => (
            <label key={idx} className={`flex items-center justify-between text-venom-text font-semibold py-3.5 text-[13px] ${idx !== arr.length - 1 ? "border-b border-venom-border" : ""}`}>
              {label}
              <input 
                type="checkbox" 
                defaultChecked 
                className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-venom-input border border-venom-border transition-colors duration-200 checked:bg-venom-gold before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" 
              />
            </label>
          ))}
        </div>
      </section>

    </div>
  );
}