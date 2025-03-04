"use client";
import { useState, useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaArrowUp, FaChevronDown } from "react-icons/fa";
import { Button } from "@/component/Button";
import { portfolioData, trendingInvestments } from "@data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-180 w-screen overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pb-10 lg:gap-28 ml-10 mr-10 mt-40 lg:mt-52">
        
        <div className="flex flex-col items-start relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Portfolio</h2>

          <div className="relative mb-4" ref={dropdownRef}>
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex items-center bg-white px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition"
            >
              {selectedCategory} <FaChevronDown className="ml-2 text-sm" />
            </button>
            
            {dropdownOpen && (
              <ul className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-40 z-10">
                {["All", "Mutual Funds", "Stocks", "Bonds"].map((category) => (
                  <li 
                    key={category} 
                    onClick={() => { setSelectedCategory(category); setDropdownOpen(false); }} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative w-80 h-80">
            <Doughnut 
              data={portfolioData} 
              options={{
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: true },
                },
                cutout: "70%",
              }} 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-medium text-gray-700">
              <p><span className="font-semibold">50%</span> Mutual Funds</p>
              <p><span className="font-semibold">30%</span> Stocks</p>
              <p><span className="font-semibold">20%</span> Bonds</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-left space-y-2">
            <h3 className="font-semibold text-gray-800">Total Portfolio</h3>
            <p className="text-5xl font-bold text-[#695192]">$50,832.21</p>
            <p className="text-sm flex items-center text-green-500">
              <FaArrowUp className="mr-1" /> Return +79.3%
            </p>
          </div>

          <div className="bg-white p-5 w-80 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-semibold text-gray-800 text-center">Trending Investments</h3>
            <div className="mt-3 space-y-2">
              {trendingInvestments.map((investment, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-2 border-b last:border-none hover:bg-gray-50 transition"
                >
                  <div className="text-left">
                    <p className="text-base font-medium">{investment.name}</p>
                    <p className="text-xs text-gray-500">{investment.fullName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-semibold">{investment.price}</p>
                    <p className="text-xs flex items-center text-green-500">
                      <FaArrowUp className="mr-1" /> {investment.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
            <Button 
              className="w-full"
              onClick={() => {
                const investSection = document.getElementById("invest-section");
                if (investSection) {
                  investSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Invest Now
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}