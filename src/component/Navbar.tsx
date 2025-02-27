"use client";
import { IoSettingsOutline } from "react-icons/io5";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import Image from "next/image"

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[90%] mx-auto fixed top-5 border border-transparent rounded-full bg-white shadow-md z-[5000] py-2 px-8 items-center justify-between"
        )}
      >
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-sm">inves
            <span className="font-semibold text-[#695192]">
              Tify3
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-center gap-x-6">
          <div className="flex flex-row justify-between gap-x-10">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative max-w-fit mx-auto items-center flex text-neutral-600 hover:text-neutral-500"
                )}
              >
                <span className="hidden sm:block text-sm">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>
        {/* Login */}
        <button className="border text-sm relative bg-[#967BBB] hover:bg-[#8a6ab8] text-white px-6 py-2 rounded-full">
          <span>Login</span>
        </button>

        {/* Icon Settings */}
        <IoSettingsOutline size={22} />
      </div>
      </motion.div>
    </AnimatePresence>
  );
};
