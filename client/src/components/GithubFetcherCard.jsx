import { useState } from "react";
import "./GithubFetcherCard.css";

const repositories = [
  { name: "portfolio-genie", language: "TypeScript", color: "#60a5fa", stars: 248 },
  { name: "react-dashboard", language: "JavaScript", color: "#facc15", stars: 186 },
  { name: "awesome-ui-kit", language: "CSS", color: "#c084fc", stars: 142 },
  { name: "api-starter", language: "Python", color: "#4ade80", stars: 97 },
  { name: "dev-tools", language: "TypeScript", color: "#60a5fa", stars: 64 },
];

function GithubFetcherCard() {
  const [githubUrl, setGithubUrl] = useState(
    "https://github.com/alex-dev"
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // UI preview only. Connect the real GitHub fetching logic later.
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section className="github-fetcher">
      <div className="github-fetcher__glow" />

      <div className="github-fetcher__content">
        <header className="github-fetcher__header">
          <div className="github-fetcher__heading">
            <div className="github-fetcher__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M8 17c0-2 1.5-2.5 4-2.5s4 .5 4 2.5" />
                <circle cx="12" cy="9" r="3" />
              </svg>
            </div>

            <div>
              <h2>GitHub Data Fetcher</h2>
              <p>
                We read public data only. No write access is requested.
              </p>
            </div>
          </div>

          <span className="github-fetcher__badge">
            <span className="github-fetcher__badge-dot" />
            PUBLIC DATA
          </span>
        </header>

        <form
          className="github-fetcher__form"
          onSubmit={handleSubmit}
        >
          <label
            className="github-fetcher__label"
            htmlFor="github-profile-url"
          >
            GITHUB PROFILE OR REPOSITORY URL
          </label>

          <div className="github-fetcher__input-row">
            <div className="github-fetcher__input-wrap">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                id="github-profile-url"
                type="url"
                value={githubUrl}
                onChange={(event) => setGithubUrl(event.target.value)}
                placeholder="https://github.com/username"
                required
              />
            </div>

            <button
              className="github-fetcher__button"
              type="submit"
              disabled={isRefreshing}
            >
              <svg
                className={isRefreshing ? "is-spinning" : ""}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M20 7v5h-5" />
                <path d="M4 17v-5h5" />
                <path d="M5.6 9A7 7 0 0 1 18 6l2 6" />
                <path d="M18.4 15A7 7 0 0 1 6 18l-2-6" />
              </svg>

              {isRefreshing ? "Refreshing..." : "Re-fetch Data"}
            </button>
          </div>
        </form>

        <div className="github-fetcher__profile">
          <div className="github-fetcher__avatar">AD</div>

          <div className="github-fetcher__profile-info">
            <span className="github-fetcher__eyebrow">
              GITHUB ACCOUNT
            </span>
            <h3>Alex Developer</h3>
            <p>@alex-dev</p>
          </div>

          <span className="github-fetcher__status">
            <span />
            Active
          </span>
        </div>

        <div className="github-fetcher__stats">
          <article className="github-fetcher__stat">
            <div className="github-fetcher__stat-top">
              <span>Public repositories</span>
              <span className="github-fetcher__stat-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="4" y="3" width="16" height="18" rx="2" />
                  <path d="M8 7h8M8 11h8M8 15h4" />
                </svg>
              </span>
            </div>
            <strong>38</strong>
            <small>Public projects</small>
          </article>

          <article className="github-fetcher__stat">
            <div className="github-fetcher__stat-top">
              <span>Followers</span>
              <span className="github-fetcher__stat-icon purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <circle cx="9" cy="8" r="4" />
                  <path d="M2 21v-2a7 7 0 0 1 14 0v2M17 4a4 4 0 0 1 0 8M19 14a5 5 0 0 1 3 5v2" />
                </svg>
              </span>
            </div>
            <strong>2.4k</strong>
            <small>People following</small>
          </article>

          <article className="github-fetcher__stat">
            <div className="github-fetcher__stat-top">
              <span>Total stars</span>
              <span className="github-fetcher__stat-icon yellow">
                <svg viewBox="0 0 24 24" fill="none