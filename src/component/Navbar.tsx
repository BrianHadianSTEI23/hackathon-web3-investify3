"use client";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useRouter, usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Tambahkan ikon menu

export const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className="fixed top-5 inset-x-0 flex justify-center z-[5000]">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100, opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex w-[90%] mx-auto border border-transparent rounded-full bg-white shadow-md py-2 px-6 md:px-8 items-center justify-between"
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-4 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-sm">
            inves
            <span className="font-semibold text-[#695192]">Tify3</span>
          </h1>
        </Link>

        {/* Menu untuk Desktop */}
        <div className="hidden md:flex flex-row items-center gap-x-6">
          <div className="flex flex-row justify-between gap-x-10">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative max-w-fit mx-auto items-center flex text-sm transition-colors",
                  pathname === navItem.link
                    ? "text-[#695192] font-semibold" 
                    : "text-neutral-600 hover:text-neutral-500" 
                )}
              >
                {navItem.name}
              </Link>
            ))}
          </div>

          <Button onClick={() => router.push("/login")}>Login</Button>

          <div className="cursor-pointer">
            <IoSettingsOutline size={22} />
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl cursor-pointer">
            <FiMenu />
          </button>
        </div>
      </motion.div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 flex flex-col items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
              <button
                className="absolute top-0 right-5 text-3xl text-gray-700 hover:text-gray-900 transition-all z-50 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiX />
              </button>

              <div className="mt-25 flex flex-col w-full items-center gap-2 py-5 px-15 bg-white">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    className={cn(
                      "text-sm font-medium transition-colors w-full text-center py-2 rounded-md",
                      pathname === navItem.link
                        ? "text-[#695192] font-semibold bg-gray-200"
                        : "text-neutral-700 hover:text-[#695192] hover:bg-gray-100"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navItem.name}
                  </Link>
                ))}

                {/* Tombol Login */}
                <Button className="w-2/3 text-sm" onClick={() => { setIsMobileMenuOpen(false); router.push("/login"); }}>
                  Login
                </Button>
              </div>
            </div>
        )}
    </div>
  );
};