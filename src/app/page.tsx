import Image from "next/image";
import { Navbar } from "../component/Navbar";
import { navItems } from "../../data/data";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Navbar navItems={navItems} />
      <div className="h-[200vh] flex items-center justify-center text-2xl">
      </div>
    </div>
  );
}``