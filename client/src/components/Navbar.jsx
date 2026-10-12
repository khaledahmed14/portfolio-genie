export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-6 text-white w-full max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
          <span className="text-white font-bold">✨</span>
        </div>
        <span className="text-xl font-bold tracking-wide">PortfolioGenie</span>
      </div>
      <div className="text-sm text-gray-400">
        <span className="text-blue-500 font-semibold">1</span> STEP 1 Auth
      </div>
    </header>
  );
