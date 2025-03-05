"use client";
import { useState } from "react";
import { FaGoogle, FaEthereum } from "react-icons/fa";
import { Button } from "@/component/Button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        {/* Alternative Login */}
        <div className="flex flex-col space-y-3">
          <Button className="w-full flex items-center justify-center text-gray-800 py-2 rounded-lg">
            <FaEthereum className="mr-2 text-xl" /> Login with Web3 Wallet
          </Button>
        </div>
      </div>
    </section>
  );
};