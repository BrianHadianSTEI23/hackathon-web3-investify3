"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState, useRef, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const Navbar = ({
  navItems,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [wallet, setWallet] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet");
    if (savedWallet) {
      setWallet(savedWallet);
    }

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

  const handleLogout = () => {
    localStorage.removeItem("wallet");
    setWallet(null);
    router.push("/")
  };

  return (
    <div ref={navContainerRef} className="fixed top-5 inset-x-0 flex justify-center z-[5000]">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: isNavVisible ? 0 : -100, opacity: isNavVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex w-[90%] mx-auto border border-transparent rounded-full bg-white shadow-md py-2 px-8 items-center justify-between"
      >
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-sm">
            inves<span className="text-[#695192] font-semibold">Tify3</span>
          </h1>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex flex-row items-center gap-x-6 text-sm">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={`relative max-w-fit mx-auto items-center flex font-semibold ${
                pathname === navItem.link ? "text-[#695192]" : "text-neutral-600"
              } hover:text-[#695192]`}
            >
              <span>{navItem.name}</span>
            </Link>
          ))}

          {!wallet ? (
            <Button onClick={() => router.push("/login")} className="bg-[#695192] text-white px-4 py-2 rounded-lg">Login</Button>
          ) : (
            <div className="flex items-center gap-x-4">
              <div className="text-sm font-semibold text-[#695192]">
                Connected: {wallet.substring(0, 6)}...{wallet.slice(-4)}
              </div>
              <Button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg">
                Logout
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[60px] left-0 w-full bg-white shadow-lg py-4 px-6 md:hidden z-50"
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={`mobile-link=${idx}`}
              href={navItem.link}
              className={`block py-2 font-semibold ${
                pathname === navItem.link ? "text-[#695192]" : "text-neutral-600"
              } hover:text-[#695192]`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}

          {!wallet ? (
            <Button onClick={() => router.push("/login")} className="w-full bg-[#695192] text-white px-4 py-2 mt-2 rounded-lg">
              Login
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-y-2 mt-4">
              <div className="text-sm font-semibold text-[#695192]">
                Connected: {wallet.substring(0, 6)}...{wallet.slice(-4)}
              </div>
              <Button onClick={handleLogout} className="w-full text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg">
                Logout
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};