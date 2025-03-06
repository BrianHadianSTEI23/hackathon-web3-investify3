'use client';

import { Navbar } from "@/component/Navbar";
import { navItems } from "../../../data/data";
import Charts from "../../component/chart"
import { useState } from "react";
import orderBookData from "../../../public/book-order.json";
import keyStatisticsData from "../../../public/key-statistics.json"


export default function MarketDetail() {
  const [bookOrder] = useState(orderBookData);
  const [keyStatistics] = useState(keyStatisticsData);
  const statisticsMapping = {
    Valuation: ['EPS', 'PBV', 'BVPS'],
    Performance: ['RoA', 'RoE', 'GPM', 'OPM', 'NPM'],
    Solvency: ['CR', 'DER'],
    Dividend: ['NUMDIV', 'DIVSTY']
  };

  return (
    // main container
    <div className="flex flex-col items-center pt-15 m-4 sm:p-20">
      <Navbar navItems={navItems} />

      {/* charts container */}
      <div className="flex justify-center p-2 mb-2 items-center min-h-[65vh] w-[100%]">
        {/* charts */}
        <Charts/>
      </div>

      {/* title, codename, price and trade button */}
      <div className="flex justify-center items-center w-[100%] text-start px-4 pt-4">
        {/* title and codename container */}
        <div className="text-start w-[70%] m-2">
          {/* title */}
          <div className="text-2xl font-bold">
            Sumber Alfaria Trijaya Tbk
          </div>

          {/* codename */}
          <div className="text-xl font-semibold text-[#A0A3BD] ">
            AMRT
          </div>
        </div>

        {/* price */}
        <div className="p-2 flex flex-grow w-[20%] h-[100%] justify-center items-center text-lg font-semibold font-sans">
          Rp. XXXXXX
        </div>

        {/* trade button */}
        <div className="p-2 text-center flex flex-grow justify-center items-center w-[10%] min-h-full text-lg font-semibold text-white bg-[#B096D7] bg-cover rounded-xl cursor-pointer">
          Trade Now
        </div>

      </div>

      {/* divider */}
      <div>
        <hr className="border-t border-gray-300 my-2 border-2 opacity-70"/>
      </div>

      <div className="w-full flex flex-col md:flex-row min-h-[80vh] justify-center items-stretch divide-y md:divide-y-0 md:divide-x-2 divide-gray-300">
      {/* Book Order Section */}
      <div className="w-full md:w-1/2 p-4 overflow-auto">
        <div className="grid grid-cols-4 text-center py-2 font-sans text-lg font-semibold">
          <div>Quantity</div>
          <div>Bid</div>
          <div>Sell</div>
          <div>Quantity</div>
        </div>
        {bookOrder.map((item, index) => (
          <div key={index} className="grid grid-cols-4 text-center py-2">
            <div>{item.quantity_bid}</div>
            <div>{item.bid}</div>
            <div>{item.sell}</div>
            <div>{item.sell_quantity}</div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="w-full md:w-1/2 p-4 space-y-8 overflow-auto">
        {Object.entries(statisticsMapping).map(([section, keys], sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <div className="text-xl font-sans font-semibold mb-2">{section}</div>
            {keyStatistics.map((item, index) => (
              <div key={index} className="space-y-2">
                {keys.map((key) => (
                  <div key={key} className="flex justify-between px-4">
                    <div className="flex-grow text-start">{key}</div>
                    <div className="flex-none text-end">{item[key]}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>


    </div>

        </div>
  );
}





