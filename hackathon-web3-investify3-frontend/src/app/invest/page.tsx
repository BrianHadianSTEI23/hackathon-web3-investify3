import { Navbar } from "@/component/Navbar";
import { navItems } from "@data";
import { Portfolio } from "./Portfolio";
import { Invest } from "./Invest";

export default function InvestPage() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden flex flex-col items-center">
      <Navbar navItems={navItems} />
      <Portfolio/>
      <Invest/>
    </div>
  );
}