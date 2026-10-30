import React from "react";
import logo from "../assets/logo.png";

export default function SignUpPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 pb-12">
      
      
      <div className="relative mb-4 flex justify-center items-center">
        <div className="absolute inset-0 rounded-full blur-2xl opacity-0 dark:opacity-40 bg-amber-500/30 transition-opacity duration-300"></div>
        <img
          src={logo}
          alt="VenomAi Big Logo"
          className="relative w-50 h-30  object-contain"
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

        {/*================= Form ==============*/}

      </div>

    </div>
  );
}