import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PreviewNavbar from "../components/PreviewNavbar";
import CodeInjectionContainer from "../components/CodeInjectionContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PreviewPage() {
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex w-full flex-col gap-6 py-4 transition-colors duration-300">
      <div className="w-full">
        <PreviewNavbar />
      </div>
      <CodeInjectionContainer />
      
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-2.5 rounded-xl bg-venom-gold px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-2xl transition-all hover:bg-venom-gold-hover active:scale-95 shadow-gold-glow cursor-pointer disabled:opacity-7ja"
        >
          <FontAwesomeIcon icon={downloaded ? faCheck : faDownload} className="text-xs" />
          <span className="whitespace-nowrap font-sans">
            {downloading ? "Preparing ZIP..." : downloaded ? "Downloaded Successfully!" : "Download Complete Source Code"}
          </span>
        </button>
      </div>

      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 border-t border-venom-border pt-6">
        <button
          type="button"
          onClick={() => navigate("/customize")}
          className="flex items-center gap-2 rounded-xl border border-venom-border bg-venom-card/80 px-5 py-2.5 text-sm font-medium text-venom-text transition-all hover:border-venom-gold/50 hover:bg-venom-card-hover cursor-pointer"
        >
          &larr; Back to customize
        </button>

        <p className="text-xs text-venom-muted">
          Tip: the theme toggle inside the preview works exactly like the exported file.
        </p>
      </div>
    </div>
  );
}