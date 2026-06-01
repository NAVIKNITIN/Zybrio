"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_ROUTES } from "@/constants/auth";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Package,
  Settings,
};

interface SidebarProps {
  readonly className?: string;
  readonly onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r bg-sidebar text-sidebar-foreground",
        className,
      )}
    >
      <div className="flex h-16 items-center border-b px-4 font-semibold">
        {env.NEXT_PUBLIC_APP_NAME}
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {DASHBOARD_ROUTES.map((route) => {
          const Icon = iconMap[route.icon] ?? LayoutDashboard;
          const isActive =
            pathname === route.href ||
            (route.href !== ROUTES.dashboard && pathname.startsWith(route.href));

          return (
            <Link key={route.href} href={route.href} onClick={onNavigate}>
              <motion.span
                whileHover={{ x: 2 }}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" />
                {route.label}
              </motion.span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t p-3">
        <div className="mb-3 flex items-center gap-3 rounded-lg px-2 py-2">
          <Avatar className="size-9">
            <AvatarImage src={user?.avatarUrl} alt={user?.name} />
            <AvatarFallback>
              {user?.name?.slice(0, 2).toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user?.name ?? "Guest"}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user?.email ?? "user@example.com"}
            </p>
          </div>
        </div>
        <Separator className="mb-3" />
        <Button
          variant="ghost"
          className="w-full justify-start gap-2"
          onClick={() => void logout()}
        >
          <LogOut className="size-4" />
          Sign out
        </Button>
      </div>
    </aside>
  );
}
