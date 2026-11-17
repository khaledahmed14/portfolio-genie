import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useIntake } from "../context/IntakeContext";
import { isValidGithubUrl } from "../utils/validators";
import { fetchGithubProfile } from "../services/githubService";
import type { GithubProfileData } from "../services/githubService";

export default function GithubFetcherCard() {
  const { intake, updateField } = useIntake();
  const profileUrl = intake.profileUrl;
  const [loading, setLoading] = useState<boolean>(false);
  const [githubData, setGithubData] = useState<GithubProfileData | null>(null);
  const [error, setError] = useState<string>("");

  const trimmedUrl = profileUrl.trim();
  const isValidUrl = isValidGithubUrl(trimmedUrl);
  const showError = trimmedUrl !== "" && !isValidUrl;

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (loading || !isValidUrl) return;
    setLoading(true);
    setError("");

    try {
      const data = await fetchGithubProfile(trimmedUrl);
      setGithubData(data);
    } catch {
      setError("Failed to fetch GitHub data. Please try again.");
      setGithubData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleUrlChange(event: ChangeEvent<HTMLInputElement>): void {
    updateField("profileUrl", event.target.value);
    setGithubData(null);
    setError("");
  }
  const repositories = githubData?.repositories ?? [];
  const stats = githubData?.stats ?? [];
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
        noValidate
        className="mb-7 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="github-profile-url" className="sr-only">
          GitHub profile or repository URL
        </label>
        <div className="min-w-0 flex-1">
          <input
            id="github-profile-url"
            type="url"
            value={profileUrl}
            onChange={handleUrlChange}
            placeholder="https://github.com/alex-dev"
            aria-invalid={showError}
            aria-describedby={showError ? "github-url-error" : undefined}
            className="w-full min-w-0 rounded-xl border border-venom-border bg-venom-input px-4 py-3 text-sm text-venom-text outline-none transition placeholder:text-venom-muted focus:border-venom-gold focus:ring-2 focus:ring-venom-gold/20"
          />
          {showError && (
            <p
              id="github-url-error"
              className="mt-2 text-left text-xs text-red-400"
            >
              Enter a valid GitHub URL, e.g. https://github.com/username
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || !isValidUrl}
          className="flex items-center justify-center gap-2 rounded-xl bg-venom-gold px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/35 transition-all hover:bg-venom-gold-hover hover:shadow-[0_0_25px_var(--gold-glow)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Refreshing..." : "Re-fetch Data"}
        </button>
      </form>

      {error && (
        <p className="mb-6 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}

      {loading && (
        <p className="mb-6 text-sm text-venom-secondary">
          Fetching GitHub data...
        </p>
      )}

      {githubData && (
        <>
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
                {repositories.length} repositories
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

                    <span className="font-semibold text-venom-gold">
                      {repo.stars.toLocaleString()}
                    </span>

                    <span className="text-xs text-venom-muted">stars</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      )}

      {!githubData && !loading && !error && (
        <p className="text-sm text-venom-muted">
          Enter a GitHub profile URL and click Re-fetch Data to view its data.
        </p>
      )}
    </section>
  );
}