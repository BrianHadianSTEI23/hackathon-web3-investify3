"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/component/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Dashboard = () => {
  const router = useRouter();
  const [wallet, setWallet] = useState<string | null>(null); // State untuk menyimpan status login

  // Cek apakah user sudah login dengan mengambil wallet dari localStorage
  useEffect(() => {
    const storedWallet = localStorage.getItem("wallet");
    if (storedWallet) {
      setWallet(storedWallet);
    }
  }, []);

  return (
    <section className="relative min-h-180 w-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ml-10 mr-10 mt-52 md:mt-72">
        <div className="sm:w-130 flex flex-col gap-5">
          <h1 className="text-7xl">
            inves
            <span className="font-semibold text-[#695192]">Tify3</span>
          </h1>
          <p>
            A next-gen Web3 investment platform that revolutionizes investing
            with direct access to stocks, mutual funds, and bonds, eliminating
            intermediaries through blockchain and smart contracts for secure,
            transparent, and efficient trading.
          </p>

          {/* Tampilkan tombol hanya jika pengguna BELUM login */}
          {!wallet && (
            <Button
              onClick={() => router.push("/login")}
              className="flex flex-row items-center gap-2 w-35 justify-center"
            >
              Login Now <FaLongArrowAltRight />
            </Button>
          )}
        </div>
        <Image src="/invest.png" alt="Logo" width={250} height={250} />
      </div>
    </section>
  );
};