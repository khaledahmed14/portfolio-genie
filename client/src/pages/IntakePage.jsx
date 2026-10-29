import React from "react";
import Navbar2 from "../components/navIntakePage";
import Infocard from "../components/AdditinalInfoCard";
import GithubFetcherCard from "../components/GithubFetcherCard";

export default function IntakePage({ setCurrentStep }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6 transition-colors duration-300">
      
       <Navbar2 setCurrentStep={setCurrentStep}/>
      <div>
          <GithubFetcherCard/>
      </div>
      <div>
          <Infocard/>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
        <p className="text-xs text-slate-400">
          Section C &middot; Next, you choose which sections appear and in what order.
        </p>
        <button 
          type="button"
          onClick={() => setCurrentStep(3)}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-400 hover:shadow-amber-500/50 active:scale-95"
        >
          <span>Proceed to Portfolio Customization</span>
          <span className="text-3xl leading-none">&rarr;</span>
        </button>
      </div>

    </div>
  );
}