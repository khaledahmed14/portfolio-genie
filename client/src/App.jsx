import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/AuthPage";
import IntakePage from "./pages/IntakePage";
import CustomizePage from "./pages/CustomizePage";
import PreviewPage from "./pages/PreviewPage";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col overflow-x-clip bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-white transition-colors duration-300 selection:bg-amber-500 selection:text-black">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/5 dark:bg-amber-600/10 blur-[120px]" />
          <div className="absolute -right-40 top-60 h-[500px] w-[500px] rounded-full bg-yellow-500/5 dark:bg-yellow-500/10 blur-[130px]" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-400/5 blur-[140px]" />
        </div>
        <div className="sticky top-0 z-50">
          <Navbar currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
        <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 py-8">
          {currentStep === 1 && <AuthPage />}
          {currentStep === 2 && <IntakePage setCurrentStep={setCurrentStep} />}
          {currentStep === 3 && (
            <CustomizePage setCurrentStep={setCurrentStep} />
          )}
          {currentStep === 4 && <PreviewPage setCurrentStep={setCurrentStep} />}
        </main>
      </div>
    </ThemeProvider>
  );
}