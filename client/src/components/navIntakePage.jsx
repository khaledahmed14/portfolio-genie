import React from "react";

export default function WelcomeBanner({
  user = { name: "Developer", handle: "alex-dev" },
  setCurrentStep,
  onLogout,
}) {
  const initial = (user.handle || user.name || "?").charAt(0).toUpperCase();
  const handleLogout = () => {
    if (onLogout) onLogout();
    else setCurrentStep?.(1);
  };

  return (
    <div className="w-full text-left text-white transition-colors duration-300">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-amber-500/20 bg-slate-900/60 dark:bg-black/60 px-4 py-4 shadow-lg shadow-black/30 backdrop-blur-md sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_14.29%,#fbbf24_85.71%)] text-base font-semibold text-slate-950 ring-2 ring-amber-500/50 ring-offset-[3px] ring-offset-slate-950 shadow-md">
            {initial}
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate text-[17px] font-bold leading-tight text-slate-100">
              Welcome back, {user.name}! 👋
            </p>
            <p className="truncate text-xs text-slate-400">
              Signed in as @{user.handle} via GitHub
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-amber-500/30 bg-slate-950/80 dark:bg-black/80 px-4 py-2 text-[13px] font-semibold text-slate-200 transition-all hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 shadow-sm"
        >
          <span>🚪</span>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
}