import { AppCard } from "@/components/common/app-card";
import { Section } from "@/components/common/section";
import { createPageMetadata } from "@/lib/metadata";
import { env } from "@/lib/env";

export const metadata = createPageMetadata("Settings", "Application preferences.");

export default function SettingsPage() {
  return (
    <Section title="Settings" description="Environment and application configuration.">
      <AppCard title="Environment" description="Values loaded from .env via Zod validation.">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">App name</dt>
            <dd className="font-medium">{env.NEXT_PUBLIC_APP_NAME}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">App URL</dt>
            <dd className="font-medium">{env.NEXT_PUBLIC_APP_URL}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">API base URL</dt>
            <dd className="font-medium">{env.NEXT_PUBLIC_API_BASE_URL}</dd>
          </div>
        </dl>
      </AppCard>
    </Section>
  );
}
