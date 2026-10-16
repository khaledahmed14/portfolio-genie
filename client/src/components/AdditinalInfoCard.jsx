export default function Infocard() {
  return (
    <div className="w-full max-w-[1130px] mx-auto bg-[#1E293B99] border border-[#60A5FA33] p-4 sm:p-6 rounded-2xl flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="shrink-0 w-[30px] h-[30px] text-[#93C5FD] font-medium text-[13px] bg-[#2563EB33] border border-[#60A5FA66] rounded-lg flex justify-center items-center">
          B
        </span>
        <div className="flex flex-col min-w-0">
          <h1 className="font-bold text-lg sm:text-[21px] text-[#F8FAFC]">
            Additional Information
          </h1>
          <h3 className="font-normal text-[12px] text-[#7C8AA5]">
            This is the copy your portfolio is written from.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="name-input" className="text-[#CBD5E1] font-semibold text-[13px]">
            Full Name
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-3 transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <input type="text" name="name" id="name-input" className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-[#7C8AA5] placeholder:text-[#7C8AA5]/50"placeholder="Enter your name" />
          </div>
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <label htmlFor="title-input" className="text-[#CBD5E1] font-semibold text-[13px]">
            Professional title / tagline
          </label>
          <div className="flex items-center gap-2 px-4 w-full border border-[#94A3B840] bg-[#03071299] rounded-xl py-3 transition-all duration-300 focus-within:border-blue-500/50 focus-within:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <input type="text" name="title" id="title-input" className="w-full min-w-0 bg-transparent outline-none font-normal text-[15px] text-[#7C8AA5] placeholder:text-[#7C8AA5]/50 " placeholder="Full-Stack React & Node.js Engineer" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="bio-input" className="text-[#CBD5E1] font-semibold text-[13px]">
            Bio / About me
          </label>
          <span className="text-[#7C8AA5] font-medium text-[13px]">0 / 220</span>
        </div>
        <textarea name="bio"id="bio-input" maxLength={220} className="w-full min-h-[130px] resize-y bg-[#03071299] border border-[#94A3B840] rounded-2xl outline-none px-4 py-3 text-[15px] text-[#7C8AA5] placeholder:text-[#7C8AA5]/50 transition-all duration-300 focus:border-blue-500/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"></textarea>
      </div>
    </div>
  );
}