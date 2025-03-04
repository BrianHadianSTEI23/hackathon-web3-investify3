'use client';

import { Navbar } from "@/component/Navbar";
import { navItems } from "../../../data/data";
import Charts from "../../../component/chart"
import { useState } from "react";
import orderBookData from "../../../public/book-order.json";
import keyStatisticsData from "../../../public/key-statistics.json"

export default function MarketDetail() {
  const [bookOrder] = useState(orderBookData);
  const [keyStatistics] = useState(keyStatisticsData);

  return (
    // main container
    <div className="min-h-screen m-0 p-[1vw] box-border font-[family-name:var(--font-geist-sans)] bg-white">
      {/* navbar */}
      <div className="flex justify-content items-center p-2 m-8">
        <Navbar navItems={navItems}/>
      </div>

      {/* charts container */}
      <div className="flex justify-center p-2 mb-2 items-center min-h-[65vh] w-[100%] border-2 border-solid border-black">
        {/* charts */}
        <Charts/>
      </div>

      {/* title, codename, price and trade button */}
      <div className="flex justify-center items-center w-[100%] text-start px-4 pt-4">
        {/* title and codename container */}
        <div className="text-start w-[70%] m-2">
          {/* title */}
          <div className="text-5xl font-bold">
            Sumber Alfaria Trijaya Tbk
          </div>

          {/* codename */}
          <div className="text-2xl font-semibold text-[#A0A3BD] ">
            AMRT
          </div>
        </div>

        {/* price */}
        <div className="p-2 flex flex-grow w-[20%] h-[100%] justify-center items-center text-xl font-semibold font-sans">
          Rp. XXXXXX
        </div>

        {/* trade button */}
        <div className="p-2 text-center flex flex-grow justify-center items-center w-[10%] min-h-full text-xl font-semibold text-white bg-[#B096D7] bg-cover rounded-xl cursor-pointer">
          Trade Now
        </div>

      </div>

      {/* divider */}
      <div>
        <hr className="border-t border-gray-300 my-2 border-2 opacity-70"/>
      </div>

      {/* book order and statistics container */}
      <div className="w-full divide-x-2 divide-gray-300 flex min-h-[80vh] justify-center items-center">
        {/* book order */}
        <div className=" justify-center items-center w-[50%] p-2 min-h-[80vh]">
          {/* header column */}
          <div className="grid grid-cols-4 flex-col justify-center items-center text-center py-2 font-sans text-2xl font-semibold">
            <div className="p-2">Quantity</div>
            <div className="p-2">Bid</div>
            <div className="p-2">Sell</div>
            <div className="p-2">Quantity</div>
          </div>

          {/* data of each column */}
          {bookOrder.map((item, index) => (
            <div key={index} className="flex justify-around items-center space-y-4">
              <div className="h-full">{item.quantity_bid}</div>
              <div className="h-full">{item.bid}</div>
              <div className="h-full">{item.sell}</div>
              <div className="h-full">{item.sell_quantity}</div>
            </div>
          ))}
        </div>


        {/* statistics */}
        <div className="flex-col justify-center items-center w-[50%] p-2">
          {/* title and content container*/}
          <div className="flex-col justify-center items-center w-full h-full p-2">
            {/* title */}
            <div className="text-xl font-sans font font-semibold mb-2">
              Valuation
            </div>

            {/* content */}
            <div className="justify-center items-center px-2">
              {keyStatistics.map((item, index) => (
                // container
                <div key={index} className="fex flex-col space-y-2">
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">EPS </div>
                    <div className="w-[20%] flex items-center justify-end">{item.EPS}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">PBV </div>
                    <div className="w-[20%] flex items-center justify-end">{item.PBV}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">BVPS </div>
                    <div className="w-[20%] flex items-center justify-end">{item.BVPS}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">RPS </div>
                    <div className="w-[20%] flex items-center justify-end">{item.RPS}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">CFPS </div>
                    <div className="w-[20%] flex items-center justify-end">{item.CFPS}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">CPS </div>
                    <div className="w-[20%] flex items-center justify-end">{item.CPS}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* title and content container */}
          <div className="flex-col justify-center items-center w-full h-full p-2">
            {/* title */}
            <div className="text-xl font-sans font font-semibold mb-2">
              Performance
            </div>

            {/* content */}
            <div className="justify-center items-center px-2">
              {keyStatistics.map((item, index) => (
                // container
                <div key={index} className="fex flex-col space-y-2">
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">RoA </div>
                    <div className="w-[20%] flex items-center justify-end">{item.RoA}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">RoE </div>
                    <div className="w-[20%] flex items-center justify-end">{item.RoE}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">GPM </div>
                    <div className="w-[20%] flex items-center justify-end">{item.GPM}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">OPM </div>
                    <div className="w-[20%] flex items-center justify-end">{item.OPM}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">NPM </div>
                    <div className="w-[20%] flex items-center justify-end">{item.NPM}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* title and content container */}
          <div className="flex-col justify-center items-center w-full h-full p-2">
            {/* title */}
            <div className="text-xl font-sans font font-semibold mb-2">
              Solvency
            </div>

            {/* content */}
            <div className="justify-center items-center px-2">
              {keyStatistics.map((item, index) => (
                // container
                <div key={index} className="fex flex-col space-y-2">
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">Current Ratio </div>
                    <div className="w-[20%] flex items-center justify-end">{item.CR}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">DER </div>
                    <div className="w-[20%] flex items-center justify-end">{item.DER}</div>
                  </div>                  
                </div>
              ))}
            </div>
          </div>

          {/* title and content container */}
          <div className="flex-col justify-center items-center w-full h-full p-2">
            {/* title */}
            <div className="text-xl font-sans font font-semibold mb-2">
              Dividend
            </div>

            {/* content */}
            <div className="justify-center items-center px-2">
              {keyStatistics.map((item, index) => (
                // container
                <div key={index} className="fex flex-col space-y-2">
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">Numeric Dividend </div>
                    <div className="w-[20%] flex items-center justify-end">{item.NUMDIV}</div>
                  </div>
                  <div className="flex px-4">
                    <div className="w-[80%] flex text-start justify-start items-center h-full">Dividend Style </div>
                    <div className="w-[20%] flex items-center justify-end">{item.DIVSTY}</div>
                  </div>                  
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

    </div>
  );
}





