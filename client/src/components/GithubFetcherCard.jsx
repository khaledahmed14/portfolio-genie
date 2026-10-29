import { useState } from "react";

const repositories = [
  { name: "portfolio-genie", language: "JavaScript", stars: 1280 },
  { name: "react-dashboard", language: "TypeScript", stars: 640 },
  { name: "api-starter", language: "Python", stars: 420 },
  { name: "ui-components", language: "CSS", stars: 230 },
  { name: "dev-tools", language: "JavaScript", stars: 150 },
];

const stats = [
  { label: "Public repositories", value: "38" },
  { label: "Followers", value: "2.4k" },
  { label: "Total stars", value: "2.7k" },
];

export default function GithubFetcherCard() {
  const [profileUrl, setProfileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!profileUrl.trim()) return;

    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <section className="w-full rounded-2xl border border-amber-500/20 bg-slate-900/60 dark:bg-black/60 backdrop-blur-md p-5 text-slate-100 shadow-xl sm:p-7 transition-colors duration-300">
      <header className="mb-6 text-left">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100">
          GitHub Data Fetcher
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          We read public data only. No write access is requested.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mb-7 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="github-profile-url" className="sr-only">
          GitHub profile or repository URL
        </label>
        <input
          id="github-profile-url"
          type="url"
          value={profileUrl}
          onChange={(event) => setProfileUrl(event.target.value)}
          placeholder="https://github.com/alex-dev"
          className="min-w-0 flex-1 rounded-xl border border-amber-500/20 bg-slate-950/80 dark:bg-black/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-2 focus:ring-amber-500/20"
        />
        <button
          type="submit"
          disabled={loading || !profileUrl.trim()}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition-all hover:bg-amber-400 hover:shadow-amber-500/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Refreshing..." : "Re-fetch Data"}
        </button>
      </form>
      <div className="mb-6 flex flex-col gap-4 rounded-xl border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-4 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-lg font-bold text-amber-400">
          AD
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h3 className="font-semibold text-white">Alex Developer</h3>
          <p className="text-sm text-slate-400">@alex-dev</p>
        </div>

        <span className="w-fit rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          Active
        </span>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-amber-500/20 bg-slate-950/40 dark:bg-black/40 p-4 text-left"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-amber-400">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">
            Top repositories detected
          </h3>
          <span className="text-xs text-slate-400">
            5 repositories
          </span>
        </div>

        <div className="space-y-3">
          {repositories.map((repo) => (
            <article
              key={repo.name}
              className="flex flex-col gap-3 rounded-xl border border-amber-500/20 bg-slate-950/60 dark:bg-black/60 p-4 transition hover:border-amber-500/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                >
                  <path
                    d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10l2 2h6.5A1.5 1.5 0 0 1 20 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="min-w-0 text-left">
                  <p className="break-words font-medium text-slate-100 hover:text-amber-400 transition-colors">
                    {repo.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {repo.language}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-slate-300 sm:shrink-0">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-amber-400"
                >
                  <path d="m12 2.8 2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.36l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.8Z" />
                </svg>
                <span className="font-semibold text-amber-400">{repo.stars.toLocaleString()}</span>
                <span className="text-xs text-slate-500">stars</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}