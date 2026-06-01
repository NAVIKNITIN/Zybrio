"use client";

import dynamic from "next/dynamic";
import { memo, useCallback, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const Sidebar = dynamic(
  () => import("@/components/layout/sidebar").then((m) => m.Sidebar),
  { ssr: false, loading: () => <div className="w-64 border-r bg-muted/30" /> },
);

interface DashboardShellProps {
  children: React.ReactNode;
}

function DashboardShellComponent({ children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar showMenuButton={!isDesktop} onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar className="sticky top-0 h-screen" />
        </div>

        {/* Mobile drawer */}
        {!isDesktop && sidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/50"
              aria-label="Close menu overlay"
              onClick={closeSidebar}
            />
            <Sidebar
              className="absolute left-0 top-0 z-50 h-full shadow-xl"
              onNavigate={closeSidebar}
            />
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="hidden h-14 items-center justify-end gap-2 border-b px-6 lg:flex">
            <ThemeToggle />
          </header>
          <main className={cn("flex-1 p-4 sm:p-6 lg:p-8")}>{children}</main>
        </div>
      </div>
    </div>
  );
}

export const DashboardShell = memo(DashboardShellComponent);
