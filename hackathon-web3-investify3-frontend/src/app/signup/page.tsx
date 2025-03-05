"use client";
import { useState } from "react";
import { FaGoogle, FaEthereum } from "react-icons/fa";
import { Button } from "@/component/Button";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            Create an account and start investing in a secure, transparent, and efficient way.
          </p>
        </div>

        {/* Sign-Up Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695192]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695192]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695192]"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#695192]"
            required
          />
          <Button className="w-full bg-[#695192] text-white py-2 rounded-lg hover:bg-[#5B3E8A] transition">
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2">
          <span className="w-full border-t border-gray-300"></span>
          <span className="text-sm text-gray-500">OR</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>

        {/* Alternative Sign Up */}
        <div className="flex flex-col space-y-3">
          <Button className="w-full flex items-center justify-center bg-gray-400 text-gray-800 py-2 rounded-lg hover:bg-gray-500 transition">
            <FaEthereum className="mr-2 text-xl" /> Sign Up with Web3 Wallet
          </Button>
          <Button className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            <FaGoogle className="mr-2 text-xl" /> Sign Up with Google
          </Button>
        </div>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#695192] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};