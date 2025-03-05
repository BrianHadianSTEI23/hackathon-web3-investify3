"use client";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { useRouter, usePathname } from "next/navigation";

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
          "flex w-[90%] mx-auto border border-transparent rounded-full bg-white shadow-md py-2 px-8 items-center justify-between"
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

        {/* NAVIGATION LINKS */}
        <div className="flex flex-row items-center gap-x-6">
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

          {/* Tombol Login */}
          <Button onClick={() => router.push("/login")}>Login</Button>

          {/* Icon Settings */}
          <div className="cursor-pointer">
            <IoSettingsOutline size={22} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};