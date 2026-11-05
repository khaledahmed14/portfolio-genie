import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubBtn() {
return (
    <div className="flex w-full max-w-[470px] flex-col gap-4">
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <span className="flex h-[30px] w-[128px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] border border-amber-500/30 bg-black dark:bg-black/80 px-2 text-[13px] font-medium leading-[155%] text-amber-300 [font-family:'JetBrains_Mono',monospace]">
        github.com/you
        </span>

        <span className="flex h-[30px] w-[104px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] border border-amber-500/30 bg-black dark:bg-black/80 px-2 text-[13px] font-medium leading-[155%] text-amber-300 [font-family:'JetBrains_Mono',monospace]">
        AI SEO copy
        </span>

        <span className="flex h-[30px] w-[128px] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] border border-amber-500/30 bg-black dark:bg-black/80 px-2 text-[13px] font-medium leading-[155%] text-amber-300 [font-family:'JetBrains_Mono',monospace]">
        1-click deploy
        </span>
    </div>
    <button
        type="button"
        className="group flex h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-amber-500/50 bg-slate-50 dark:bg-slate-900 px-6 text-[15px] font-bold leading-[155%] text-slate-950 dark:text-white shadow-xl transition-all duration-300 [font-family:'Plus_Jakarta_Sans',sans-serif] hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] active:translate-y-0 active:scale-[0.98]"
    >
        <FontAwesomeIcon
        icon={faGithub}
        className="h-[22px] w-[22px] shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
        />
        <span>Sign in with GitHub</span>
    </button>

    <div className="flex w-full items-center gap-3">
        <div className="h-px flex-1 bg-slate-800" />
        <span className="whitespace-nowrap text-[9px] font-medium text-slate-500">
        OR USE EMAIL
        </span>
        <div className="h-px flex-1 bg-slate-800" />
    </div>
    </div>
);
}