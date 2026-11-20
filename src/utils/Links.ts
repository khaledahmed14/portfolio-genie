const SCHEME_RE = /^[a-z][a-z\d+.-]*:/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function toSafeUrl(raw: string): string | null {
  const value = raw.trim();
  if (!value) return null;
  const candidate = SCHEME_RE.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export function toSocialUrl(raw: string, host: string): string | null {
  const value = raw.trim();
  if (value.startsWith("@")) return toSafeUrl(`${host}/${value.slice(1)}`);
  return toSafeUrl(value);
}

export function toMailto(raw: string): string | null {
  const value = raw.trim();
  return EMAIL_RE.test(value) ? `mailto:${value}` : null;
}

export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return parts
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join("");
}