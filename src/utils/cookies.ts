export function setAuthCookie(token: string, maxAgeDays = 7): void {
  if (typeof document === "undefined") return;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  document.cookie = `reflex_auth_token=${encodeURIComponent(token)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function clearAuthCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = "reflex_auth_token=; path=/; max-age=0; SameSite=Lax";
}
