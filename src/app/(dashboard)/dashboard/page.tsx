import dynamic from "next/dynamic";
import { BarChart3, Package, Users } from "lucide-react";
import { AppCard } from "@/components/common/app-card";
import { Section } from "@/components/common/section";
import { createPageMetadata } from "@/lib/metadata";

const DashboardStats = dynamic(
  () => import("@/features/dashboard/dashboard-stats").then((m) => m.DashboardStats),
  {
    loading: () => (
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={`skeleton-${i}`} className="h-28 animate-pulse rounded-xl bg-muted" />
        ))}
      </div>
    ),
  },
);

export const metadata = createPageMetadata(
  "Dashboard",
  "Overview of your application metrics and activity.",
);

const statCards = [
  { label: "Total users", value: "2,431", icon: Users, change: "+12%" },
  { label: "Active items", value: "184", icon: Package, change: "+4%" },
  { label: "Revenue", value: "$12.4k", icon: BarChart3, change: "+8%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Section
        title="Dashboard"
        description="Example analytics overview with lazy-loaded client widgets."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {statCards.map((stat) => (
            <AppCard key={stat.label} title={stat.label} hoverable>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">
                    {stat.change} from last month
                  </p>
                </div>
                <stat.icon className="size-8 text-muted-foreground" />
              </div>
            </AppCard>
          ))}
        </div>
      </Section>

      <DashboardStats />
    </div>
  );
}
