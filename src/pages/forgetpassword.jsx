
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

    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    navigate("/forgot-password-success", {
      state: { email: trimmedEmail },
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 transition-colors duration-300">
      <div className="my-6 flex flex-col items-center justify-center text-center">
        <div className="relative mb-2 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-500/30 opacity-0 blur-2xl transition-opacity duration-300 dark:opacity-40" />
          <img
            src={logo}
            alt="PortfolioGenie logo"
            className="relative h-30 w-50 object-contain"
          />
        </div>

        <h1 className="mb-2 text-3xl font-bold tracking-tight text-venom-text">
          Reset your password
        </h1>

        <p className="max-w-md text-sm text-venom-secondary">
          Enter your account email and we'll send you recovery instructions.
        </p>
      </div>

      <div className="mx-auto w-full max-w-lg rounded-2xl border border-venom-border bg-venom-card/90 p-6 shadow-xl backdrop-blur-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="recovery-email"
              className="text-[13px] font-semibold text-venom-text"
            >
              Email address
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-input px-4 py-3 transition-colors focus-within:border-venom-gold">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-sm text-venom-gold"
              />

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
