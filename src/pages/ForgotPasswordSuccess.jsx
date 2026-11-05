
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPasswordSuccess() {
  const location = useLocation();
  const email = location.state?.email;

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

      <div className="mx-auto w-full max-w-lg rounded-2xl border border-venom-border bg-venom-card/90 p-8 text-center shadow-xl backdrop-blur-md">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-venom-gold bg-venom-gold/10 text-venom-gold shadow-[0_0_15px_var(--gold-glow)]">
            <FontAwesomeIcon icon={faCheck} className="text-lg" />
          </div>

          <div className="space-y-1">
            <h2 className="text-lg font-bold text-venom-text">
              Check your inbox
            </h2>

            <p className="max-w-sm text-xs text-venom-secondary sm:text-sm">
              If an account exists for{" "}
              <span className="font-medium text-venom-gold">
                {email || "your email address"}
              </span>
              , you'll get a reset link shortly.
            </p>
          </div>

          <Link
            to="/forgot-password"
            className="mt-2 text-xs font-semibold text-venom-gold transition-colors hover:text-venom-gold-hover hover:underline"
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
