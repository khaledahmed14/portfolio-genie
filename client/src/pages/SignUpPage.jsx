import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SignUpPage({ onNavigate }) {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 pb-12">
      
      <div className="relative mb-4 flex justify-center items-center">
        <div className="absolute inset-0 rounded-full blur-2xl opacity-0 dark:opacity-40 bg-amber-500/30 transition-opacity duration-300"></div>
        <img
          src={logo}
          alt="VenomAi Big Logo"
          className="relative w-50 h-30 object-contain"
        />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] transition-colors duration-300 drop-shadow-sm">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)] transition-colors duration-300 max-w-sm mx-auto font-medium">
          Start building high-impact developer portfolios in seconds.
        </p>
      </div>

      <div className="w-full max-w-md">
        <div className="email-form mx-auto flex flex-col gap-4 rounded-xl bg-black dark:bg-black/60 border border-amber-500/30 backdrop-blur-md w-[90%] md:w-[470px] lg:w-[470px] px-6 py-6 transition-colors duration-300">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name-input" className="text-slate-200 font-semibold text-[13px]">Full Name</label>
            <div className="w-full gap-2 flex items-center border border-amber-500/20 bg-slate-950/80 dark:bg-black/80 rounded-xl px-4 py-[12px] focus-within:border-amber-400 transition-colors">
              <span><FontAwesomeIcon icon={faUser} className="w-4 h-4 text-amber-500/70" /></span>
              <input type="text" name="name" id="name-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-slate-100 placeholder:text-slate-500" placeholder="Ada Lovelace" />
            </div>
          </div>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="confpassword-input" className="text-slate-200 font-semibold text-[13px]">Confirm Password</label>
            <div className="flex items-center gap-2 px-4 w-full border border-amber-500/20 bg-slate-950/80 dark:bg-black/80 rounded-xl py-[12px] focus-within:border-amber-400 transition-colors">
              <span><FontAwesomeIcon icon={faLock} className="w-4 h-4 text-amber-500/70" /></span>
              <input type="password" name="confirm_password" id="confpassword-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-slate-100 placeholder:text-slate-500" placeholder="Re-enter your password" />
            </div>
          </div>
          <button
            type="button"
            className="group flex h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-amber-500 bg-amber-500 px-6 text-[15px] font-bold leading-[155%] text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-400 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] active:translate-y-0 active:scale-[0.98]"
          >
            <span>Create Account</span>
          </button>
          <div className="flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-slate-800" />
            <span className="whitespace-nowrap text-[9px] font-medium text-slate-500">OR</span>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
          <button
            type="button"
            className="group flex h-[49px] w-full items-center justify-center gap-2 rounded-xl border border-amber-500/50 bg-slate-50 dark:bg-slate-900 px-6 text-[15px] font-bold leading-[155%] text-slate-950 dark:text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:shadow-[0_0_28px_rgba(245,158,11,0.5)] active:translate-y-0 active:scale-[0.98]"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="h-[22px] w-[22px] shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
            />
            <span>Sign in with GitHub</span>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <span className="whitespace-nowrap text-[14px] text-center font-medium text-slate-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('auth')}
              className="font-semibold text-venom-gold hover:text-venom-gold-hover transition-colors cursor-pointer"
            >
              Sign in
            </button>
          </span>
        </div>
      </div>

    </div>
  );
}