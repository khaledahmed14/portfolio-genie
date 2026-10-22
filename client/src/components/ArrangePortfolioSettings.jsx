export default function Arrangesettings() {
  return (
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl  bg-[#1E293B99] px-4 py-6 font-['Plus_Jakarta_Sans',sans-serif] text-[#7C8AA5]">
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C8AA5]">
          Sections{" "}
          <span className="font-sans font-normal normal-case tracking-normal opacity-70">
            · drag the handle or use the arrows
          </span>
        </h3>

        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">Hero / Intro</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button disabled className="h-4 w-6 text-[8px] text-[#e8eef5] opacity-30">▲</button>
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▼</button>
            </div>
          </li>

          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">About Me</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▲</button>
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▼</button>
            </div>
          </li>

          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">Featured GitHub Projects</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▲</button>
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▼</button>
            </div>
          </li>

          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">Work Experience</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▲</button>
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▼</button>
            </div>
          </li>

          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">Technical Skills Grid</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▲</button>
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▼</button>
            </div>
          </li>

          <li className="flex items-center gap-2 rounded-2xl border border-[#94A3B829] bg-[#0307128C] p-4 text-[13px] font-medium">
            <span className="text-sm text-[#7d8da0]">⠿</span>
            <input type="checkbox" defaultChecked className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-[#1a2a3a] checked:bg-cyan-500 after:hidden after:text-[13px] after:font-bold after:text-[#04141A] after:content-['✓'] checked:after:block" />
            <span className="flex-1 text-[#F8FAFC] text-[13px] font-semibold">Contact & Social Links</span>
            <div className="flex flex-col overflow-hidden rounded-lg bg-[#16222f]">
              <button className="h-4 w-6 text-[8px] text-[#e8eef5]">▲</button>
              <button disabled className="h-4 w-6 text-[8px] text-[#e8eef5] opacity-30">▼</button>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7d8da0]">
          Featured Projects
        </h3>

        <div className="flex justify-center items-center gap-2.5">
          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-[#94A3B840]  bg-[#94A3B81A] text-lg text-[#F8FAFC] hover:bg-[#1d2d3f]">−</button>

            <input
            type="range"
            min={1}
            max={12}
            defaultValue={6}
            aria-label="Number of featured projects"
            className="
                [--v:45.45%]
                h-1 min-w-0 flex-1 cursor-pointer appearance-none rounded-full outline-none
                bg-[linear-gradient(to_right,#06b6d4_var(--v),#243447_var(--v))]

                [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px]
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-cyan-500
                [&::-webkit-slider-thumb]:shadow-[0_0_14px_rgba(18,184,212,0.6)]

                [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px]
                [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:bg-cyan-500
                [&::-moz-range-thumb]:shadow-[0_0_14px_rgba(18,184,212,0.6)]
                [&::-moz-range-track]:bg-transparent

                focus-visible:ring-2 focus-visible:ring-cyan-500/50
            "
            />

          <button className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-[#94A3B840]  bg-[#94A3B81A] text-lg text-[#F8FAFC] hover:bg-[#1d2d3f]">+</button>
          <p className=" font-extrabold text-[24px] text-[#F8FAFC]">6</p>
        </div>

        <p className="text-[12px] font-normal text-[#7C8AA5]">
          Showing 6 of 12 repositories, ranked by stars.
        </p>
      </section>
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-[#7C8AA5]">
          Content Toggles
        </h3>

        <div className="flex flex-col">
          <label className="flex items-center justify-between text-[#CBD5E1] font-semibold border-b border-[#1d2b3a] py-3.5 text-[13px]">
            Show repository star count
            <input type="checkbox" defaultChecked className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-[#2a3a4a] transition-colors duration-200 checked:bg-emerald-500 before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" />
          </label>

          <label className="flex items-center justify-between text-[#CBD5E1] font-semibold border-b border-[#1d2b3a] py-3.5 text-[13px]">
            Show tech stack badges
            <input type="checkbox" defaultChecked className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-[#2a3a4a] transition-colors duration-200 checked:bg-emerald-500 before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" />
          </label>

          <label className="flex items-center justify-between text-[#CBD5E1] font-semibold border-b border-[#1d2b3a] py-3.5 text-[13px]">
            Show interactive contact form
            <input type="checkbox" defaultChecked className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-[#2a3a4a] transition-colors duration-200 checked:bg-emerald-500 before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" />
          </label>

          <label className="flex items-center justify-between text-[#CBD5E1] font-semibold py-3.5 text-[13px]">
            Enable dark mode by default
            <input type="checkbox" defaultChecked className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-[#2a3a4a] transition-colors duration-200 checked:bg-emerald-500 before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5" />
          </label>
        </div>
      </section>

    </div>
  );
}