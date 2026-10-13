export default function AuthHero() {
  return (
    <div className="flex flex-col items-center text-center mt-6">
      <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 mb-6">
        <span className="text-3xl">✨</span>
      </div>
      <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
        Portfolio<span className="text-blue-500">Genie</span>
      </h1>
      <p className="text-gray-400 text-sm max-w-md mb-6">
        Transform Your GitHub into a High-Impact Developer Portfolio in Seconds
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="px-3 py-1 bg-gray-900/80 border border-gray-800 rounded-full text-xs text-gray-300">github.com/you</span>
        <span className="px-3 py-1 bg-gray-900/80 border border-gray-800 rounded-full text-xs text-gray-300">AI SEO copy</span>
        <span className="px-3 py-1 bg-gray-900/80 border border-gray-800 rounded-full text-xs text-gray-300">1-click deploy</span>
      </div>
    </div>
  );
}