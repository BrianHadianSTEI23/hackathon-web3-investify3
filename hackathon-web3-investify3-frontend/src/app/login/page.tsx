"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEthereum } from "react-icons/fa";
import { Button } from "@/component/Button";
import Image from "next/image";
import { connectMetaMask } from "../../../lib/utils";

export default function Login() {
  const [wallet, setWallet] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Jika sudah login, langsung redirect ke home
    if (wallet) {
      router.push("/");
    }
  }, [wallet, router]);

  // Fungsi untuk login dengan MetaMask
  const handleLogin = async () => {
    const result = await connectMetaMask();
    if (result) {
      setWallet(result.account);
      localStorage.setItem("wallet", result.account); // Simpan di localStorage agar persistent
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl mt-2">
            inves<span className="text-[#695192] font-bold">Tify3</span>
          </h1>
          <p className="text-sm text-gray-500 text-center mt-2">
            A next-gen Web3 investment platform for secure, transparent, and efficient trading.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <span className="w-full border-t border-gray-300"></span>
        </div>

        {/* Jika belum login, tampilkan tombol login */}
        <div className="flex flex-col space-y-3">
          <Button
            className="w-full flex items-center justify-center text-gray-800 py-2 rounded-lg"
            onClick={handleLogin}
          >
            <FaEthereum className="mr-2 text-xl" /> Login with Web3 Wallet
          </Button>
        </div>
      </div>
    </section>
  );
}