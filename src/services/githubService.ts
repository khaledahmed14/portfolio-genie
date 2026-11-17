import type { GithubStat, Repository } from "../types/portfolio";

export interface GithubProfileData {
  repositories: Repository[];
  stats: GithubStat[];
}

interface GithubUserResponse {
  public_repos: number;
  followers: number;
}

interface GithubRepoResponse {
  name: string;
  language: string | null;
  stargazers_count: number;
}

export async function fetchGithubProfile(
  profileUrl: string
): Promise<GithubProfileData> {
  const trimmedUrl = profileUrl.trim();

  let username: string;

  try {
    const url = new URL(
      trimmedUrl.startsWith("http") ? trimmedUrl : `https://${trimmedUrl}`
    );

    if (url.hostname !== "github.com" && url.hostname !== "www.github.com") {
      throw new Error();
    }

    username = url.pathname.split("/").filter(Boolean)[0] || "";
  } catch {
    if (/^[a-z\d](?:[a-z\d-]{0,38})$/i.test(trimmedUrl)) {
      username = trimmedUrl;
    } else {
      throw new Error("Please enter a valid GitHub profile URL or username.");
    }
  }

  if (!username) {
    throw new Error("GitHub username is required.");
  }

  const userResponse = await fetch(
    `https://api.github.com/users/${username}`
  );

  if (!userResponse.ok) {
    throw new Error("GitHub user not found.");
  }

  const user: GithubUserResponse = await userResponse.json();

  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  );

  if (!reposResponse.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }

  const repos: GithubRepoResponse[] = await reposResponse.json();

  const totalStars = repos.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  const repositories: Repository[] = repos
    .map((repo) => ({
      name: repo.name,
      language: repo.language || "Unknown",
      stars: repo.stargazers_count,
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  const stats: GithubStat[] = [
    {
      label: "Public repositories",
      value: user.public_repos.toLocaleString(),
    },
    {
      label: "Followers",
      value: user.followers.toLocaleString(),
    },
    {
      label: "Total stars",
      value: totalStars.toLocaleString(),
    },
  ];

  return { repositories, stats };
}
