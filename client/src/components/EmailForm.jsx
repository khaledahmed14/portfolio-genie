import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export default function EmailForm() {
  return (
    <div className="email-form mx-auto flex flex-col gap-4 rounded-xl bg-[#1E293B99] border border-[#60A5FA33] w-[90%] md:w-[470px] lg:w-[470px] px-6 py-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="email-input" className="text-[#ffffff] font-semibold text-[13px]">Email</label>
        <div className="w-full gap-2 flex items-center border border-[#94A3B840] bg-[#03071299] rounded-xl px-4 py-[12px]">
          <span><FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-[#7C8AA5]" /></span>
          <input type="email" name="Email" id="email-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-[#7C8AA5]" placeholder="you@company.dev" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password-input" className="text-[#ffffff] font-semibold text-[13px]">Password</label>
        <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-[12px]">
          <span><FontAwesomeIcon icon={faLock} className="w-4 h-4 text-[#7C8AA5]" /></span>
          <input type="password" name="password" id="password-input" className="w-full bg-transparent outline-none font-normal text-[15px] text-[#7C8AA5]" placeholder="At least 6 characters" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-3 h-3 rounded-full" name="remember-me" id="check-input" />
          <label htmlFor="check-input" className="text-[#ffffff] font-semibold text-[13px]">Remember me</label>
        </div>
        <span className="text-[#98a7c7] font-normal text-[12px]">Demo mode: any valid email works</span>
      </div>

      <button
        type="button"
        className="group flex h-[49px] shadow-[#2563EB8C] w-full items-center justify-center gap-2 rounded-xl border border-[#60A5FA] bg-[#2563EB] px-6 text-[15px] font-bold leading-[155%] text-[#FFFFFF] shadow-[0_0_0_rgba(6,182,212,0)] transition-all duration-300 [font-family:'Plus_Jakarta_Sans',sans-serif] hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:text-[#2563EB] hover:shadow-[0_0_28px_rgba(6,182,212,0.55)] active:translate-y-0 active:scale-[0.98]"
      >
        <span>Sign in / Register</span>
      </button>
    </div>
  );
}