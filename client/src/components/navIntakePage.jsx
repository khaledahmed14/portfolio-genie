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
    <div className="w-full text-left text-white">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.03] px-4 py-4 shadow-lg shadow-black/30 backdrop-blur-md sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-base font-semibold text-[#0b0f19] ring-2 ring-sky-400/70 ring-offset-[3px] ring-offset-[#0d1428]">
            {initial}
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate text-[17px] font-bold leading-tight">
              Welcome back, {user.name}! 👋
            </p>
            <p className="truncate text-xs text-gray-400">
              Signed in as @{user.handle} via GitHub
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="flex shrink-0 items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/10"
        >
          <span>➜]</span>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
}
