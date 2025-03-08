"use client";

import { Navbar } from "@/component/Navbar";
import { navItems } from "../../../data/data";
import Charts from "../../component/Chart";
import { useState, useEffect } from "react";
import orderBookData from "../../../public/book-order.json";
import keyStatisticsData from "../../../public/key-statistics.json";
import { Button } from "@/component/Button";
import { stockPrices, conversionRates } from "../../../data/data"; // Import dummy data
import { connectMetaMask } from "@lib";

export default function MarketDetail() {
  const [bookOrder] = useState(orderBookData);
  const [keyStatistics] = useState(keyStatisticsData);
  const [isOpen, setIsOpen] = useState(false);
  const [shares, setShares] = useState(""); // Jumlah lembar saham yang dimasukkan
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedStock, setSelectedStock] = useState<keyof typeof stockPrices>("AAPL");
  const [selectedUnit, setSelectedUnit] = useState("ETH");
  const [convertedAmount, setConvertedAmount] = useState("0");
  const [stockPrice, setStockPrice] = useState(stockPrices[selectedStock]); // Harga saham terbaru dari Chart
  const [wallet, setWallet] = useState<string | null>(null); // State untuk menyimpan wallet pengguna

  // Ambil wallet dari localStorage saat komponen dimuat
  const handleConnect = async () => {
    const result = await connectMetaMask();
    if (result) {
      setWallet(result.account);
    }
  };
  handleConnect()

  // Simulasi menerima harga terbaru dari Charts component
  useEffect(() => {
    setStockPrice(stockPrices[selectedStock]); // Update harga saham sesuai dengan pilihan pengguna
  }, [selectedStock]);

  // Update konversi harga saham ke mata uang lain
  useEffect(() => {
    if (shares === "" || isNaN(parseFloat(shares))) {
      setConvertedAmount("0");
    } else {
      const totalPrice = parseFloat(shares) * stockPrice;
      const finalConvertedAmount =
      totalPrice * (conversionRates[selectedUnit as keyof typeof conversionRates] || 1);
      setConvertedAmount(finalConvertedAmount.toFixed(2)); // Format ke 2 angka desimal
    }
  }, [shares, selectedStock, selectedUnit, stockPrice]);

  return (
    <div className="flex flex-col items-center pt-15 m-4">
      <Navbar navItems={navItems} />

      {/* Charts Container */}
      <div className="flex justify-center p-2 mb-2 items-center min-h-[65vh] w-[100%]">
        <Charts />
      </div>

      {/* Title, Stock Code, Price, and Trade Button */}
      <div className="flex justify-center items-center w-[100%] text-start gap-3 px-4 pt-4">
        <div className="text-start w-[70%] m-2">
          <div className="text-2xl font-bold">{selectedStock} Stock</div>
          <div className="text-xl font-semibold text-[#A0A3BD]">{selectedStock}</div>
        </div>

        <div className="p-2 flex flex-grow w-[20%] h-[100%] justify-center items-center text-lg font-semibold font-sans">
          ${stockPrice.toLocaleString()} / Share
        </div>

        {/* Trade Button */}
        <Button 
          onClick={() => {
            setIsOpen(true)
          }}
          disabled={!wallet} // Jika tidak ada wallet, tombol tidak bisa diklik
          className={wallet ? "" : "bg-gray-400 cursor-not-allowed"}
        >
          Trade
        </Button>
      </div>

      {/* Divider */}
      <div>
        <hr className="border-t border-gray-300 my-2 border-2 opacity-70" />
      </div>

      {/* Book Order & Statistics */}
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
          {keyStatistics.map((item, index) => (
            <div key={index} className="space-y-4">
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className="flex justify-between px-4">
                  <div className="flex-grow text-start">{key}</div>
                  <div className="flex-none text-end">{value}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal Pop-Up untuk Trade */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90vw] min-w-[60%] text-center">
            {/* Close Button */}
            <div className="flex w-full justify-start items-center p-2">
              <button onClick={() => setIsOpen(false)} className="text-gray-500">✕</button>
            </div>

            {/* Input Shares */}
            <div className="bg-[#A0A3BD] rounded-lg p-4 mb-4">
              <div className="text-left text-sm px-2 font-semibold text-white">Enter Shares</div>
              <input
                type="text"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
                placeholder="Enter number of shares"
                className="w-full text-right bg-transparent font-semibold text-white text-xl px-2 outline-none"
              />
            </div>

            {/* Convert Price */}
            <div className="bg-[#EFF0F6] rounded-lg p-4 mb-4">
              <div className="text-left text-sm px-2 font-semibold pb-1">Convert:</div>
              <div className="text-black text-xl px-2 font-semibold">{convertedAmount} {selectedUnit}</div>
            </div>

            {/* Finish Button */}
            <Button 
              disabled={!wallet} // Tombol tidak bisa diklik jika tidak login
              onClick={() => setIsOpen(false)}  
              className={wallet ? "ml-4 rounded-xl" : "bg-gray-400 cursor-not-allowed"}
            >
              Trade
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}