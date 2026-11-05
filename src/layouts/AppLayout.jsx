import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[var(--bg-main)] font-sans text-venom-text transition-colors duration-300 selection:bg-amber-500 selection:text-black">
      <div className="pointer-events-none absolute inset-0 z-0 hidden dark:block">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-amber-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-60 h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-[130px]" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />
      </div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}