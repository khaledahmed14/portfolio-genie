import React from "react";
import logo from "../assets/logo.png";

export default function ForgotPasswordSuccess({ setCurrentStep }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center text-center my-6">
        
        {/* اللوجو بحجمه الأصلي تماماً مع إضافة التوهج الخلفي فقط في الوضع الداكن */}
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
        <div className="py-2 text-center text-venom-muted">
          [Success State Component - Assigned to Lujain]
        </div>
      </div>
      <div className="mt-2 text-center text-sm text-venom-secondary">
        Remember your password?{" "}
        <button
          type="button"
          onClick={() => setCurrentStep && setCurrentStep(1)}
          className="font-semibold text-venom-gold hover:text-venom-gold-hover hover:underline"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}