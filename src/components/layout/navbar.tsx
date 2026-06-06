"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, Menu, ShieldCheckIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants/routes";
import ProductsSection from "../pricing/ProductCard";
import SolNavbar from "../SolNavbar";
import { usePathname, useSearchParams } from "next/navigation";

type NavbarProps = {
  className?: string;
  showMenuButton?: boolean;
  onMenuClick?: () => void;
};

export function Navbar({ className, showMenuButton, onMenuClick }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [title, setTitle] = useState("ZYBRIO");
  const [navBarBgColor, setNavBarBgColor] = useState<string>("bg-white");
  // const navBarBgClass = navBarBgColor === "#F6F6EE" ? "bg-[#F6F6EE]" : "bg-white";

  const menuItems = [
    { label: "Products", hasDropdown: true },
    { label: "Solutions", hasDropdown: true },
    { label: "Customers", route: ROUTES.customers, hasDropdown: false },
    { label: "Insights", route: ROUTES.insights, hasDropdown: false },
    { label: "Pricing", route: ROUTES.pricing, hasDropdown: false },
  ];


  const pathname = usePathname();
  const headerBorderClass = pathname === "/customers" || pathname === "/insights" ? "" : "border-b border-gray-100";
  const navLinkTextColor = pathname === "/customers" || pathname === "/insights" ? "text-white" : "text-[#0B2408]";
  // Active color: keep white for customers, but make Insights active tab black
  const navLinkActiveTextColor = pathname === "/customers" || pathname === "/insights" ? "text-white" : "text-black";

  useEffect(() => {
    console.log("All params:", pathname);

    if (pathname === "/customers") {
      setNavBarBgColor("bg-[#061F00]");
    } else if (pathname === "/insights") {
      setNavBarBgColor("bg-[#012A0B]");
    }
    else {
      setNavBarBgColor("bg-white");
    }
  }, [pathname]);

  const onEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(item);
  };

  const onLeave = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 150);
  };
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > scrollY && currentY > 80);
      setScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);


  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 z-50 transition-all bg-white",
        headerBorderClass,
        className,
      )}
    >
      {/* Banner */}
      <div className="bg-[#A8E61D] py-2 text-center text-sm font-medium">
        ReflexAI + Google.org: $4M to scale AI training globally
      </div>

      <div className={cn(
        "mx-auto flex py-3 lg:py-0 max-w-400 items-center justify-between px-4",
        navBarBgColor,
      )}>
        <div className="flex items-center gap-3  lg:gap-12 lg:ml-25">
          {showMenuButton && onMenuClick && (
            <button
              type="button"
              onClick={onMenuClick}
              aria-label="Open sidebar"
              className="text-[#0B2408] lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          )}

          <ArrowLeftIcon onClick={() => setActive(null)} className="lg:hidden size-6 text-[#0B2408]" />
          <Link href={ROUTES.home} className={cn("text-[18px] lg:text-[25px] lg:font-bold", navLinkTextColor)}>{title}</Link>
          <nav className="hidden md:flex items-center gap-10 ml-6">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative h-24 flex items-center"
                onMouseEnter={() => item.hasDropdown && onEnter(item.label)}
                onMouseLeave={onLeave}
              >
                {item.hasDropdown ? (
                  <button
                    type="button"
                    className={cn("text-base font-medium", active === item.label ? navLinkActiveTextColor : navLinkTextColor)}
                    onClick={() => setActive(active === item.label ? null : item.label)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link href={item.route ?? "#"} className={cn("text-base font-medium", active === item.label ? navLinkActiveTextColor : navLinkTextColor)}>
                    {item.label}
                  </Link>
                )}

                {active === item.label && item.hasDropdown && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-6 left-1/2 h-2 w-2 -translate-x-1/2 rounded-sm bg-[#A8E61D]" />
                )}
              </div>
            ))}
          </nav>
        </div>


        <div className="flex items-center gap-3 mr-0 lg:mr-25">
          <Link href="/schedule-a-demo/" className="hidden md:block rounded-lg bg-[#E8E7DE] px-8 py-3 text-sm font-semibold text-[#0B2408] transition hover:bg-[#A8E61D]">
            Get Demo
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              if (mobileOpen) {
                setActive(null);
                setTitle("ZYBRIO");
                setNavBarBgColor("white");
              }

            }}
          >
            {mobileOpen ? <X className="size-6 bg-[#EDEDE1] text-[#0B2408]" /> : <Menu className="size-6 bg-[#EDEDE1] text-[#0B2408]" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed md:left-25 top-22 lg:top-30 z-50 w-full  max-w-5xl lg:pt-4"
            onMouseEnter={() => onEnter(active)}
            onMouseLeave={onLeave}
          >
            <div className="overflow-hidden lg:h-full rounded-lg border-[#ECECE5] px-4 lg:px-0  bg-[#F3F3EB] lg:bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full">
              {active === "Products" ? <ProductsSection /> : <SolNavbar />}
            </div>

          </motion.div>
        )}
      </AnimatePresence>


      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 lg:top-35 h-[calc(120vh-140px)] w-full bg-[#F6F6EE] px-6 pt-2 md:hidden"
          >
            <div className="flex flex-col bg-white rounded-lg px-4 pb-20">
              {menuItems.map((item) => (
                item.hasDropdown ? (
                  <button
                    key={item.label}
                    type="button"
                    className={cn(
                      "flex items-center justify-between border-b border-gray-100 py-4 text-lg font-medium",
                      active === item.label ? navLinkActiveTextColor : navLinkTextColor,
                    )}
                    onClick={() => {
                      setActive(active === item.label ? null : item.label);
                      setTitle(item.label);
                      setNavBarBgColor("#F6F6EE");
                    }}
                  >
                    {item.label}
                    <span className="text-gray-400">→</span>
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.route ?? "#"}
                    className={cn(
                      "flex items-center justify-between border-b border-gray-100 py-4 text-lg font-medium",
                      active === item.label ? navLinkActiveTextColor : navLinkTextColor,
                    )}
                    onClick={() => {
                      setMobileOpen(false);
                      setActive(null);
                      setNavBarBgColor("#F6F6EE");
                    }}
                  >
                    {item.label}
                    <span className="text-gray-400">→</span>
                  </Link>
                )
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/schedule-a-demo/"
                className="flex w-full items-center justify-center rounded-lg bg-[#0B2408] py-2 text-center font-semibold text-[#A8E61D] transition hover:bg-black"
                onClick={() => setMobileOpen(false)}
              >
                Get a demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}