"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { AppCard } from "@/components/common/app-card";
import { Section } from "@/components/common/section";

const activity = [
  { id: 1, action: "New user registered", time: "2 min ago" },
  { id: 2, action: "Item created: Welcome item", time: "15 min ago" },
  { id: 3, action: "Settings updated", time: "1 hour ago" },
];

function DashboardStatsComponent() {
  return (
    <Section title="Recent activity" description="Client component with Framer Motion.">
      <AppCard>
        <ul className="space-y-4">
          {activity.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
            >
              <span className="text-sm">{item.action}</span>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </motion.li>
          ))}
        </ul>
      </AppCard>
    </Section>
  );
}

export const DashboardStats = memo(DashboardStatsComponent);
