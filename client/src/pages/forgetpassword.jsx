import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    navigate("/forgot-password-success");
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center text-center my-6">
        <div className="relative mb-2 flex justify-center items-center">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-0 dark:opacity-40 bg-amber-500/30 transition-opacity duration-300"></div>
          <img
            src={logo}
            alt="PortfolioGenie logo"
            className="relative w-50 h-30 flex items-center justify-center object-contain"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-venom-text mb-2">
          Reset your password
        </h1>
        <p className="text-sm text-venom-secondary max-w-md">
          Enter your account email and we'll send you recovery instructions.
        </p>
      </div>

      <div className="mx-auto w-full max-w-lg rounded-2xl border border-venom-border bg-venom-card/90 backdrop-blur-md p-6 shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="recovery-email" className="text-slate-200 font-semibold text-[13px]">
              Email address
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-4 py-3 focus-within:border-venom-gold transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-venom-gold text-sm" />
              <input
                id="recovery-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.dev"
                required
                className="w-full bg-transparent text-sm text-venom-text outline-none placeholder:text-venom-muted"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 flex h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-venom-gold px-6 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-venom-gold-hover hover:shadow-[0_0_25px_var(--gold-glow)] active:scale-[0.98]"
          >
            Send Reset Instructions
          </button>
        </form>
      </div>

      <div className="mt-2 text-center text-sm text-venom-secondary">
        Remember your password?{" "}
        <Link
          to="/"
          className="font-semibold text-venom-gold hover:text-venom-gold-hover hover:underline"
        >
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}