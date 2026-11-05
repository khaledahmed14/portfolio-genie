import React, { useState } from "react";

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
    <section className="w-full rounded-2xl border border-venom-border bg-venom-card backdrop-blur-md p-5 text-venom-text shadow-xl sm:p-7 transition-colors duration-300">
      <header className="mb-6 text-left">
        <h2 className="text-2xl font-bold tracking-tight text-venom-text">
          GitHub Data Fetcher
        </h2>
        <p className="mt-2 text-sm text-venom-secondary">
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
          className="min-w-0 flex-1 rounded-xl border border-venom-border bg-venom-input px-4 py-3 text-sm text-venom-text outline-none transition placeholder:text-venom-muted focus:border-venom-gold focus:ring-2 focus:ring-venom-gold/20"
        />
        <button
          type="submit"
          disabled={loading || !profileUrl.trim()}
          className="flex items-center justify-center gap-2 rounded-xl bg-venom-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/35 transition-all hover:bg-venom-gold-hover hover:shadow-[0_0_25px_var(--gold-glow)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Refreshing..." : "Re-fetch Data"}
        </button>
      </form>

      <div className="mb-6 flex flex-col gap-4 rounded-xl border border-venom-border bg-venom-card-hover p-4 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-venom-gold/15 text-lg font-bold text-venom-gold">
          AD
        </div>

        <div className="min-w-0 flex-1 text-left">
          <h3 className="font-semibold text-venom-text">Alex Developer</h3>
          <p className="text-sm text-venom-secondary">@alex-dev</p>
        </div>

        <span className="w-fit rounded-full border border-venom-gold/30 bg-venom-gold/10 px-3 py-1 text-xs font-medium text-venom-gold">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-venom-gold animate-pulse" />
          Active
        </span>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-venom-border bg-venom-card-hover p-4 text-left"
          >
            <p className="text-sm text-venom-secondary">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-venom-gold">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-venom-text">
            Top repositories detected
          </h3>
          <span className="text-xs text-venom-muted">
            5 repositories
          </span>
        </div>

        <div className="space-y-3">
          {repositories.map((repo) => (
            <article
              key={repo.name}
              className="flex flex-col gap-3 rounded-xl border border-venom-border bg-venom-card-hover p-4 transition hover:border-venom-gold/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-venom-gold"
                >
                  <path
                    d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10l2 2h6.5A1.5 1.5 0 0 1 20 7.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="min-w-0 text-left">
                  <p className="break-words font-medium text-venom-text hover:text-venom-gold transition-colors">
                    {repo.name}
                  </p>
                  <p className="mt-1 text-xs text-venom-muted">
                    {repo.language}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-venom-secondary sm:shrink-0">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-venom-gold"
                >
                  <path d="m12 2.8 2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.36l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.8Z" />
                </svg>
                <span className="font-semibold text-venom-gold">{repo.stars.toLocaleString()}</span>
                <span className="text-xs text-venom-muted">stars</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}