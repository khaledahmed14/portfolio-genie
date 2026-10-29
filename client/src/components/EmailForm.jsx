import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function EmailForm() {
  return (
    <div className="email-form mx-auto flex flex-col gap-4 rounded-xl bg-black dark:bg-black/60 border border-amber-500/30 backdrop-blur-md w-[90%] md:w-[470px] lg:w-[470px] px-6 py-6 transition-colors duration-300">
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email-input" className="text-slate-200 font-semibold text-[13px]">Email</label>
        <div className="w-full gap-2 flex items-center border border-amber-500/20 bg-slate-950/80 dark:bg-black/80 rounded-xl px-4 py-[12px] focus-within:border-amber-400 transition-colors">
          <span><FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-amber-500/70" /></span>
          <input type="email" name="Email" id="email-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-slate-100 placeholder:text-slate-500" placeholder="you@company.dev" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password-input" className="text-slate-200 font-semibold text-[13px]">Password</label>
        <div className="flex items-center gap-2 px-4 w-full border border-amber-500/20 bg-slate-950/80 dark:bg-black/80 rounded-xl py-[12px] focus-within:border-amber-400 transition-colors">
          <span><FontAwesomeIcon icon={faLock} className="w-4 h-4 text-amber-500/70" /></span>
          <input type="password" name="password" id="password-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-slate-100 placeholder:text-slate-500" placeholder="At least 6 characters" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-3 h-3 rounded-full accent-amber-500 cursor-pointer" name="remember-me" id="check-input" />
          <label htmlFor="check-input" className="text-slate-300 font-semibold text-[13px] cursor-pointer">Remember me</label>
        </div>
        <span className="text-slate-400 font-normal text-[12px]">Demo mode: any valid email works</span>
      </div>
      <button
        type="button"
        className="group flex h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-amber-500 bg-amber-500 px-6 text-[15px] font-bold leading-[155%] text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 [font-family:'Plus_Jakarta_Sans',sans-serif] hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] active:translate-y-0 active:scale-[0.98]"
      >
        <span>Sign in / Register</span>
      </button>
    </div>
  );
}