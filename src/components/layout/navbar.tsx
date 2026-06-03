"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);



  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setVisible(true);
      } else {
        setVisible(currentY < prevScrollY.current);
      }

      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const menuItems = [
    { label: "Products", route: "#" },
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




  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 50
      );

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  // setList name
  const [title, setTitle] = useState("Zabrio");

  return (
    <motion.header
      initial={false}
      animate={{
        y: visible ? 0 : "-100%",
      }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="
fixed
top-0
left-0
z-50
w-full
bg-[#F8F8F5]/95
sm:bg-white/95
backdrop-blur-md
will-change-transform
transform-gpu
"
    >
      <div className="bg-[#A8E61D] py-3 text-center font-medium">
        ReflexAI + Google.org: $4M to scale AI training globally
      </div>

      <div className="mx-auto max-w-7xl px-6 flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href={ROUTES.home}
            className="text-lg font-bold text-[#0B3D0B]"
          >
            {title}
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
                <AnimatePresence mode="wait">
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

        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/schedule-a-demo/"
            className="rounded-xl bg-[#E8E7DE] px-5 py-3 text-sm font-semibold text-[#0B2408] transition hover:bg-[#A8E61D]"
          >
            Schedule Demo
          </Link>
        </div>



        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="size-6 bg-[#EDEDE1] text-[#0B2408]" /> : <Menu className="size-6 bg-[#EDEDE1] text-[#0B2408]" />}
        </Button>
      </div>

      {!showMenuButton && (
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200 bg-[#F8F8F5] shadow-lg md:hidden p-5 sm:p-0"
            >

              {/* <MobileHeader  onMenuOpen={handleMenuOpen}/> */}


              <div className="flex flex-col gap-4 p-6 text-[#0B3D0B] bg-[white] rounded-lg">
                {/* {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.route}
                    className="text-base font-medium hover:text-black"
                    onClick={() => {
                      setMobileOpen(false);
                      setHoveredItem(item.label);
                      setActiveDropdown(item.label.toLowerCase());
                    }}
                  >
                    {item.label}
                  </Link>
                ))} */}


                <div className="flex flex-col gap-4 lg:p-6 text-[#0B3D0B]">
                  {menuItems.map((item) => (
                    <div
                      key={item.label}
                      className="border-b border-dashed border-gray-300 py-4"
                    >
                      {(item.label === "Products" || item.label === "Solutions") ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between text-left text-base font-medium"
                            onClick={() => {
                              setActiveDropdown(
                                activeDropdown === item.label.toLowerCase()
                                  ? null
                                  : item.label.toLowerCase()
                              );

                              setTitle(item.label);
                            }}
                          >
                            <span>{item.label}</span>

                            <span
                              className={cn(
                                "transition-transform duration-300",
                                activeDropdown === item.label.toLowerCase()
                                  ? "rotate-180"
                                  : ""
                              )}
                            >
                              ▼
                            </span>
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.label.toLowerCase() && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="mt-4">
                                  {item.label === "Products" ? (
                                    <ProductsSection />
                                  ) : (
                                    <SolNavbar />
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.route}
                          className="block text-base font-medium hover:text-black"
                          onClick={() => {
                            setMobileOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/schedule-a-demo/"
                    className="rounded-xl bg-[#E8E7DE] px-5 py-3 text-center text-sm font-semibold text-[#0B2408]"
                    onClick={() => {
                      setMobileOpen(false);
                      setActiveDropdown(null);
                    }}
                  >
                    Schedule Demo
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
}
