import React, { useState, useEffect, useRef } from "react";
import { usePortfolioConfig } from "../Context/PortfolioConfigContext";

const MIN_PROJECTS = 1;
const MAX_PROJECTS = 12;

const TOGGLE_OPTIONS = [
  { key: "showStars", label: "Show repository star count" },
  { key: "showBadges", label: "Show tech stack badges" },
  { key: "showContactForm", label: "Show interactive contact form" },
  { key: "darkByDefault", label: "Enable dark mode by default" },
];

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function Arrangesettings() {
  const { config, setConfig } = usePortfolioConfig();
  const { sections, projectCount: count, toggles } = config;

  const setSections = (updater) =>
    setConfig((prev) => ({
      ...prev,
      sections: typeof updater === "function" ? updater(prev.sections) : updater,
    }));

  const setCount = (updater) =>
    setConfig((prev) => ({
      ...prev,
      projectCount: typeof updater === "function" ? updater(prev.projectCount) : updater,
    }));

  const setToggles = (updater) =>
    setConfig((prev) => ({
      ...prev,
      toggles: typeof updater === "function" ? updater(prev.toggles) : updater,
    }));


  const [dragId, setDragId] = useState(null);
  const [offset, setOffset] = useState(0);
  const itemRefs = useRef({});
  const dragRef = useRef(null);


  const moveSection = (index, dir) => {
    const target = index + dir;
    if (target < 0 || target >= sections.length) return;
    setSections((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const toggleSection = (id) =>
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );

  const startDrag = (e, id, index) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();

    const first = itemRefs.current[sections[0].id];
    const second = itemRefs.current[sections[1].id];
    const step =
      second.getBoundingClientRect().top - first.getBoundingClientRect().top;

    dragRef.current = {
      startY: e.clientY,
      startIndex: index,
      index,
      step,
      count: sections.length,
    };
    setOffset(0);
    setDragId(id);
  };

  useEffect(() => {
    if (dragId === null) return;

    const handleMove = (e) => {
      const d = dragRef.current;
      if (!d) return;

      const minDy = -d.startIndex * d.step;
      const maxDy = (d.count - 1 - d.startIndex) * d.step;
      const dy = clamp(e.clientY - d.startY, minDy, maxDy);

      const target = clamp(
        Math.round(d.startIndex + dy / d.step),
        0,
        d.count - 1
      );

      if (target !== d.index) {
        const from = d.index;
        d.index = target;
        setSections((prev) => {
          const next = [...prev];
          const [moved] = next.splice(from, 1);
          next.splice(target, 0, moved);
          return next;
        });
      }

      setOffset(d.startIndex * d.step + dy - d.index * d.step);
    };

    const handleUp = () => {
      dragRef.current = null;
      setDragId(null);
      setOffset(0);
    };

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [dragId]);

  /* ---------- Slider ---------- */
  const ratio = (count - MIN_PROJECTS) / (MAX_PROJECTS - MIN_PROJECTS);
  const fill = `calc(${ratio} * (100% - 18px) + 9px)`; 

  return (
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl bg-venom-card/40 border border-venom-border px-4 py-6 font-sans text-venom-muted transition-colors duration-300 shadow-xl">
      {/* ---------------- Sections ---------------- */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-venom-muted">
          Sections{" "}
          <span className="font-sans font-normal normal-case tracking-normal opacity-70">
            · drag the handle or use the arrows
          </span>
        </h3>

        <ul className="flex flex-col gap-2">
          {sections.map((item, index) => {
            const isDragging = item.id === dragId;
            const isFirst = index === 0;
            const isLast = index === sections.length - 1;

            return (
              <li
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                style={
                  isDragging
                    ? { transform: `translateY(${offset}px)`, transition: "none" }
                    : undefined
                }
                className={`relative flex items-center gap-2 rounded-2xl border bg-venom-input p-4 text-[13px] font-medium transition-colors hover:border-venom-gold/50 ${
                  isDragging
                    ? "z-20 border-venom-gold shadow-2xl"
                    : "z-0 border-venom-border"
                }`}
              >
                <span
                  onPointerDown={(e) => startDrag(e, item.id, index)}
                  style={{ touchAction: "none" }}
                  className={`select-none text-sm text-venom-muted ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
                  aria-label="Drag to reorder"
                >
                  ⠿
                </span>

                <input
                  type="checkbox"
                  checked={item.enabled}
                  onChange={() => toggleSection(item.id)}
                  className="grid h-[22px] w-[22px] shrink-0 cursor-pointer appearance-none place-items-center rounded-full bg-venom-card checked:bg-venom-gold after:hidden after:text-[13px] after:font-bold after:text-slate-950 after:content-['✓'] checked:after:block transition-colors"
                />

                <span
                  className={`flex-1 text-[13px] font-semibold ${
                    item.enabled ? "text-venom-text" : "text-venom-muted line-through"
                  }`}
                >
                  {item.title}
                </span>

                <div className="flex flex-col overflow-hidden rounded-lg bg-venom-card border border-venom-border">
                  <button
                    type="button"
                    onClick={() => moveSection(index, -1)}
                    disabled={isFirst}
                    className={`h-4 w-6 text-[8px] text-venom-gold ${
                      isFirst ? "opacity-30 cursor-not-allowed" : "hover:bg-venom-gold/20 cursor-pointer"
                    }`}
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSection(index, 1)}
                    disabled={isLast}
                    className={`h-4 w-6 text-[8px] text-venom-gold ${
                      isLast ? "opacity-30 cursor-not-allowed" : "hover:bg-venom-gold/20 cursor-pointer"
                    }`}
                  >
                    ▼
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---------------- Featured Projects ---------------- */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-venom-muted">
          Featured Projects
        </h3>

        <div className="flex justify-center items-center gap-2.5">
          <button
            type="button"
            onClick={() => setCount((c) => clamp(c - 1, MIN_PROJECTS, MAX_PROJECTS))}
            disabled={count <= MIN_PROJECTS}
            className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-venom-border bg-venom-gold/10 text-lg text-venom-text hover:bg-venom-gold/20 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            −
          </button>

          <input
            type="range"
            min={MIN_PROJECTS}
            max={MAX_PROJECTS}
            step={1}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            style={{ "--v": fill }}
            aria-label="Number of featured projects"
            className="
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

          <button
            type="button"
            onClick={() => setCount((c) => clamp(c + 1, MIN_PROJECTS, MAX_PROJECTS))}
            disabled={count >= MAX_PROJECTS}
            className="h-9.5 w-9.5 flex justify-center items-center rounded-xl border border-venom-border bg-venom-gold/10 text-lg text-venom-text hover:bg-venom-gold/20 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            +
          </button>

          <p className="min-w-[2ch] text-center font-extrabold text-[24px] text-venom-gold">
            {count}
          </p>
        </div>

        <p className="text-[12px] font-normal text-venom-muted">
          Showing {count} of {MAX_PROJECTS} repositories, ranked by stars.
        </p>
      </section>

      {/* ---------------- Content Toggles ---------------- */}
      <section className="flex flex-col gap-3">
        <h3 className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-venom-muted">
          Content Toggles
        </h3>

        <div className="flex flex-col">
          {TOGGLE_OPTIONS.map(({ key, label }, idx, arr) => (
            <label
              key={key}
              className={`flex cursor-pointer items-center justify-between text-venom-text font-semibold py-3.5 text-[13px] ${
                idx !== arr.length - 1 ? "border-b border-venom-border" : ""
              }`}
            >
              {label}
              <input
                type="checkbox"
                checked={toggles[key]}
                onChange={() => setToggles((t) => ({ ...t, [key]: !t[key] }))}
                className="relative h-[26px] w-[46px] shrink-0 cursor-pointer appearance-none rounded-full bg-venom-input border border-venom-border transition-colors duration-200 checked:bg-venom-gold before:absolute before:left-[3px] before:top-[3px] before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-200 before:content-[''] checked:before:translate-x-5"
              />
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}