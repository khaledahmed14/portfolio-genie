import { useNavigate } from "react-router-dom";
import { useIntake } from "../context/IntakeContext";
import { removeToken } from "../utils/storage";
import type { WelcomeUser } from "../types/portfolio";

interface WelcomeBannerProps {
  user?: WelcomeUser;
  onLogout?: () => void;
}

const FALLBACK_NAME = "Developer";

function extractHandle(profileUrl: string): string {
  const value = profileUrl.trim();
  if (!value) return "";
  try {
    const candidate = /^[a-z][a-z\d+.-]*:/i.test(value) ? value : `https://${value}`;
    const url = new URL(candidate);
    return url.pathname.split("/").filter(Boolean)[0] ?? "";
  } catch {
    return "";
  }
}

export default function WelcomeBanner({ user, onLogout }: WelcomeBannerProps) {
  const navigate = useNavigate();
  const { intake } = useIntake();

  const name = user?.name || intake.name.trim() || FALLBACK_NAME;
  const handle = user?.handle || extractHandle(intake.profileUrl);
  const initial = (handle || name).charAt(0).toUpperCase();

  const handleLogout = (): void => {
    removeToken();
    onLogout?.();
    navigate("/auth", { replace: true });
  };

  return (
    <div className="w-full text-left text-venom-text transition-colors duration-300">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-venom-border bg-venom-card px-4 py-4 shadow-lg backdrop-blur-md sm:px-6">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f59e0b_14.29%,#fbbf24_85.71%)] text-base font-semibold text-slate-950 ring-2 ring-venom-gold/50 ring-offset-[3px] ring-offset-venom-card shadow-md">
            {initial}
          </div>
          <div className="min-w-0 text-left">
            <p className="truncate text-[17px] font-bold leading-tight text-venom-text">
              Welcome back, {name}! 👋
            </p>
            <p className="truncate text-xs text-venom-muted">
              {handle ? `Signed in as @${handle} via GitHub` : "Signed in"}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-4 py-2 text-[13px] font-semibold text-venom-text transition-all hover:border-venom-gold hover:bg-venom-gold hover:text-slate-950 shadow-sm"
        >
          <span>🚪</span>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </div>
  );
}