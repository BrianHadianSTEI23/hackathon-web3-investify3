import { Navbar } from "@/component/Navbar";
import { Dashboard } from "./dashboard/Dashboard";
import { navItems } from "@data";
import { WhyChoose } from "./dashboard/WhyChoose";
import { Credits} from "./dashboard/Credits";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden flex flex-col items-center">
      <Navbar navItems={navItems} />
      <Dashboard />
      <WhyChoose />
      <Credits />
    </div>
  );
}