import type { GithubStat, Repository } from "../types/portfolio";

export interface GithubProfileData {
  repositories: Repository[];
  stats: GithubStat[];
}

const MOCK_DATA: GithubProfileData = {
  repositories: [
    { name: "portfolio-genie", language: "JavaScript", stars: 1280 },
    { name: "react-dashboard", language: "TypeScript", stars: 640 },
    { name: "api-starter", language: "Python", stars: 420 },
    { name: "ui-components", language: "CSS", stars: 230 },
    { name: "dev-tools", language: "JavaScript", stars: 150 },
  ],
  stats: [
    { label: "Public repositories", value: "38" },
    { label: "Followers", value: "2.4k" },
    { label: "Total stars", value: "2.7k" },
  ],
};

/** Mock for now. Replace the body with a real fetch to the GitHub API later. */
export async function fetchGithubProfile(
  _profileUrl: string
): Promise<GithubProfileData> {
  return new Promise((resolve) => setTimeout(() => resolve(MOCK_DATA), 1500));
}