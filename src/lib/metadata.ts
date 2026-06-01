import type { Metadata } from "next";
import { env } from "@/lib/env";

const siteName = env.NEXT_PUBLIC_APP_NAME;
const siteUrl = env.NEXT_PUBLIC_APP_URL;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Modern Next.js starter with authentication, dashboard, and scalable architecture.",
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "Dashboard"],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: "Professional Next.js application template.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Professional Next.js application template.",
  },
  robots: { index: true, follow: true },
};

export function createPageMetadata(
  title: string,
  description?: string,
  options?: Partial<Metadata>,
): Metadata {
  return {
    title,
    description: description ?? defaultMetadata.description ?? undefined,
    ...options,
  };
}
