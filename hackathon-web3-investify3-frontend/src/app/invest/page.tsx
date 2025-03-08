"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/component/Navbar";
import { navItems } from "@data";
import { Portfolio } from "./Portfolio";
import { Invest } from "./Invest";

export default function InvestPage() {
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      setWallet(storedWallet);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden flex flex-col items-center">
      <Navbar navItems={navItems} />
      {wallet && <Portfolio />}
      <Invest />
    </div>
  );
}