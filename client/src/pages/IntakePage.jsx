import React from "react";
import Navbar2 from "../components/navIntakePage";
import Infocard from "../components/AdditinalInfoCard";
import GithubFetcherCard from "../components/GithubFetcherCard";

export default function IntakePage({ setCurrentStep }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-6">
      
       <Navbar2 setCurrentStep={setCurrentStep}/>
      <div >
          <GithubFetcherCard/>
      </div>
      <div >
          <Infocard/>
      </div>

      <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-gray-800/60 pt-6 sm:flex-row">
        <p className="text-xs text-gray-400">
          Section C &middot; Next, you choose which sections appear and in what order.
        </p>

        <button 
          onClick={() => setCurrentStep(3)}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-95"
        >
          <span>Proceed to Portfolio Customization</span>
          <span className="text-3xl">&rarr;</span>
        </button>
      </div>

    </div>
  );
}