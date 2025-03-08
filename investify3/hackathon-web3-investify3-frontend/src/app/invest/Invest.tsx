"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowUp, FaArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { stockList, categories, trendingToday } from "@data";

const ITEMS_PER_PAGE = 6;

export function Invest() {
  const [selectedCategory, setSelectedCategory] = useState("Stocks");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const totalPages = Math.ceil(stockList.length / ITEMS_PER_PAGE);
  const paginatedStocks = stockList.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <section id="invest-section" className="relative min-h-screen w-screen overflow-x-hidden px-10 mt-20 lg:mt-32">
      <div className="max-w-6xl mx-auto space-y-8 bg-white p-8">
        
        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center items-center space-x-8 pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 font-semibold cursor-pointer ${
                selectedCategory === category
                  ? "text-[#695192] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-[#695192]"
                  : "text-gray-500 hover:text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* TRENDING INVESTMENTS */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Trending Today</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {trendingToday.map((stock, index) => (
              <div key={index} 
                    className="bg-white p-5 rounded-xl shadow-md text-center border border-gray-200 cursor-pointer"
                    onClick={() => router.push(`/market-detail`)}
                    >
                <p className="font-medium">{stock.name}</p>
                <p className="text-sm text-gray-500">{stock.price}</p>
                <p className={`text-sm flex items-center justify-center font-semibold ${stock.isUp ? "text-green-500" : "text-red-500"}`}>
                  {stock.isUp ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  {stock.change}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STOCK LISTING */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-center">Available Investments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {paginatedStocks.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-5 bg-white rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-lg"
                onClick={() => router.push(`/market-detail?name=${item.name}`)}
              >
                <div className="text-left">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.fullName}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{item.price}</p>
                  <p className={`text-sm flex items-center font-semibold ${item.isUp ? "text-green-500" : "text-red-500"}`}>
                    {item.isUp ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                    {item.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="p-2 border border-[#695192] rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <FaChevronLeft className="text-[#695192]" />
            </button>

            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="p-2 border border-[#695192] rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <FaChevronRight className="text-[#695192]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}