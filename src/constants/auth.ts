/** Set to true to enforce login for /dashboard routes (via src/proxy.ts) */
export const AUTH_MIDDLEWARE_ENABLED = false;

export const AUTH_COOKIE_NAME = "reflex_auth_token";
export const AUTH_STORAGE_KEY = "reflex_auth_user";

export const PUBLIC_ROUTES = ["/", "/login", "/register", "/api"];

export const DASHBOARD_ROUTES = [
  { href: "/dashboard", label: "Overview", icon: "LayoutDashboard" },
  { href: "/dashboard/items", label: "Items", icon: "Package" },
  { href: "/dashboard/settings", label: "Settings", icon: "Settings" },
] as const;
