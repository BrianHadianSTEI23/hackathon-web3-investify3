"use client";

import { Navbar } from "../../../hackathon-web3-investify3-frontend/src/component/Navbar";
import { navItems } from "../../../hackathon-web3-investify3-frontend/data/data"
import Charts from "../../../hackathon-web3-investify3-frontend/src/component/Chart";
import React from "react";
import { useState, useEffect } from "react";
import orderBookData from "../../../hackathon-web3-investify3-frontend/public/book-order.json";
import keyStatisticsData from "../../../hackathon-web3-investify3-frontend/public/key-statistics.json";
import { Button } from "../../../hackathon-web3-investify3-frontend/src/component/Button";
import { stockPrices, conversionRates } from "../../../hackathon-web3-investify3-frontend/data/data"; // Import dummy data

"use client";

import { useState, useEffect } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declarations/hackathon-web3-investify3-backend";

const agent = new HttpAgent();
const backend = Actor.createActor(idlFactory, { agent, canisterId: "your_canister_id" });

function TransactionComponent() {
    const [transactions, setTransactions] = useState<any[]>([]);

    async function createTransaction() {
        await backend.createTransaction("alice", "bob", 100);
        const updatedTransactions = await backend.getTransactions();
        setTransactions(updatedTransactions);
    }

    useEffect(() => {
        async function fetchTransactions() {
            const data = await backend.getTransactions();
            setTransactions(data);
        }
        fetchTransactions();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">ICP Transactions</h1>
            <button
                onClick={createTransaction}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Create Transaction
            </button>

            <ul className="mt-4">
                {transactions.map((tx, index) => (
                    <li key={index} className="border p-2 my-2">
                        <p>From: {tx.sender}</p>
                        <p>To: {tx.receiver}</p>
                        <p>Amount: {tx.amount} ICP</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

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
      const finalConvertedAmount = totalPrice * (conversionRates[selectedUnit as keyof typeof conversionRates] || 1);      setConvertedAmount(finalConvertedAmount.toFixed(2)); // Format ke 2 angka desimal
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
        <Button onClick={() => setIsOpen(true)} >
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

            {/* Currency Selection */}
            <select
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="bg-gray-200 px-2 py-1 rounded-lg"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>

            {/* Finish Button */}
            <Button onClick={() => {
              setIsOpen(false)
              TransactionComponent}}  className="ml-4 rounded-xl">
              Trade
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}