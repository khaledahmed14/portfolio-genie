import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPasswordSuccess() {
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

      <div className="mx-auto w-full max-w-lg rounded-2xl border border-venom-border bg-venom-card/90 backdrop-blur-md p-8 shadow-xl text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-venom-gold bg-venom-gold/10 text-venom-gold shadow-[0_0_15px_var(--gold-glow)]">
            <FontAwesomeIcon icon={faCheck} className="text-lg" />
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-venom-text">Check your inbox</h3>
            <p className="text-xs sm:text-sm text-venom-secondary max-w-sm">
              If an account exists for <span className="font-medium text-venom-gold">you@company.dev</span>, you'll get a reset link shortly.
            </p>
          </div>

          <Link
            to="/forgot-password"
            className="mt-2 text-xs font-semibold text-venom-gold hover:text-venom-gold-hover hover:underline transition-colors"
          >
            Use a different email
          </Link>
        </div>
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