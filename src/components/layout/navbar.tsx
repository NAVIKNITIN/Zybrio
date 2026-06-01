"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";
import { ROUTES } from "@/constants/routes";
import ProductsSection from "../ProductCard";
import SolNavbar from "../SolNavbar";

type NavbarProps = {
  className?: string;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
};

export function Navbar({ className, showMenuButton, onMenuClick }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > scrollY && currentY > 80);
      setScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const menuItems = [
    { label: "Products", route: ROUTES.products },
    { label: "Solutions", route: "#" },
    { label: "Customers", route: ROUTES.customers },
    { label: "Insights", route: ROUTES.insights },
    { label: "Pricing", route: ROUTES.pricing },
  ];

  const handleMobileToggle = () => {
    if (showMenuButton && onMenuClick) {
      onMenuClick();
      return;
    }

    setMobileOpen((open) => !open);
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
        backdropFilter: "blur(0px)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all bg-[white]",
        className,
      )}
    >
      <div className="bg-[#A8E61D] py-3 text-center font-medium">
        ReflexAI + Google.org: $4M to scale AI training globally
      </div>

      <div className="container-app mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMobileToggle}
            aria-label="Toggle menu"
          >
            {mobileOpen && !showMenuButton ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>

       <Link
  href={ROUTES.home}
  className="text-lg font-bold text-[#0B3D0B]"
>
  {env.NEXT_PUBLIC_APP_NAME ?? "ReflexAI"}
</Link>

          <nav className="relative hidden items-center gap-9 text-sm text-[#0B3D0B] md:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative flex flex-col items-center"
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  setActiveDropdown(item.label.toLowerCase());
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setActiveDropdown(null);
                }}
              >
                <Link
                  href={item.route}
                  className={cn(
                    "transition-colors",
                    hoveredItem === item.label
                      ? "font-semibold text-black"
                      : "text-gray-400",
                  )}
                >
                  {item.label}
                </Link>

                {hoveredItem === item.label && (
                  <motion.div
                    layoutId="indicator"
                    className="absolute -bottom-3 h-2 w-2 rounded-sm bg-[#A8E61D]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Dropdowns */}
                <AnimatePresence>
                  {activeDropdown === "products" && item.label === "Products" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full left-5/1 -translate-x-1/2 mt-8 rounded-xl p-4 w-5xl bg-transparent"
                    >
                      <ProductsSection />
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {activeDropdown === "solutions" &&
                    item.label === "Solutions" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-1/2 z-[999] pt-4 -translate-x-[25%]"
                      >
                        <div 
                        className="w-5xl rounded-[28px] mt-8 absolute top-full left-70 -translate-x-1/2 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#ECECE5] overflow-hidden">
                          <SolNavbar />
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/schedule-a-demo/"
            className="rounded-xl bg-[#E8E7DE] px-5 py-3 text-sm font-semibold text-[#0B2408] transition hover:bg-[#A8E61D]"
          >
            Schedule Demo
          </Link>
        </div>
      </div>

      {!showMenuButton && (
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200 bg-[#F8F8F5] shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-4 p-6 text-[#0B3D0B]">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.route}
                    className="text-base font-medium hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/schedule-a-demo/"
                  className="rounded-xl bg-[#E8E7DE] px-5 py-3 text-sm font-semibold text-[#0B2408] transition hover:bg-[#dcdacf]"
                  onClick={() => setMobileOpen(false)}
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
}
