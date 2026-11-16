export const GITHUB_URL_REGEX =
  /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(\/[\w.-]+)?\/?$/i;

export const isValidGithubUrl = (url: string): boolean =>
  GITHUB_URL_REGEX.test(url.trim());

export const clamp = (n: number, min: number, max: number): number =>
  Math.min(Math.max(n, min), max);

export const formatStars = (n: number): string =>
  n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`;