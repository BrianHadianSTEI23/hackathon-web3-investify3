'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Brush,
} from "recharts";

interface ChartData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
}

export default function Charts() {
    const [data, setData] = useState<ChartData[]>([]);
    const [selectedBrand, setSelectedBrand] = useState<string>("AAPL");
    const [selectedTimeSeries, setSelectedTimeSeries] = useState<string>("TIME_SERIES_DAILY");
    const brands = ["AAPL", "MSFT", "GOOGL"];
    const timeSeriesOptions = [
        { label: "Intraday (5 min)", value: "TIME_SERIES_INTRADAY", interval: "5min" },
        { label: "Daily", value: "TIME_SERIES_DAILY" },
        { label: "Weekly", value: "TIME_SERIES_WEEKLY" },
        { label: "Monthly", value: "TIME_SERIES_MONTHLY" },
    ];

    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const symbol = selectedBrand.toUpperCase();
                const selectedOption = timeSeriesOptions.find(option => option.value === selectedTimeSeries);
                
                const params: any = {
                    function: selectedTimeSeries,
                    symbol,
                    apikey: process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY,
                };

                // add interval
                if (selectedTimeSeries === "TIME_SERIES_INTRADAY" && selectedOption?.interval) {
                    params.interval = selectedOption.interval;
                }

                const response = await axios.get(
                    `https://www.alphavantage.co/query?`, {
                        params
                    }
                );
                console.log(response.data);

                const timeSeriesKey = 
                    selectedTimeSeries === "TIME_SERIES_INTRADAY" ? "Time Series (5min)" :
                    selectedTimeSeries === "TIME_SERIES_DAILY" ? "Time Series (Daily)" :
                    selectedTimeSeries === "TIME_SERIES_WEEKLY" ? "Weekly Time Series" :
                    "Monthly Time Series";

                const timeSeries = response.data[timeSeriesKey];

                if (timeSeries) {
                    const formattedData = Object.keys(timeSeries).map(date => ({
                        date,
                        open: parseFloat(timeSeries[date]["1. open"]),
                        high: parseFloat(timeSeries[date]["2. high"]),
                        low: parseFloat(timeSeries[date]["3. low"]),
                        close: parseFloat(timeSeries[date]["4. close"]),
                        volume: parseFloat(timeSeries[date]["5. volume"]),
                    })).slice(0, 30); // Hanya ambil 30 hari terakhir

                    setData(formattedData.reverse()); // Urutkan dari tanggal lama ke baru
                } else {
                    console.error("Data tidak tersedia.");
                    setData([]);
                }
            } catch (error) {
                console.error("Gagal mengambil data saham:", error);
            }
        };

        fetchStockData();
    }, [selectedBrand, selectedTimeSeries]);

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const { open, high, low, close, volume } = payload[0].payload;
            return (
                <div style={{ backgroundColor: "white", padding: "10px", border: "1px solid #ccc" }}>
                    <p><strong>Date:</strong> {label}</p>
                    <p><strong>Open:</strong> {open}</p>
                    <p><strong>High:</strong> {high}</p>
                    <p><strong>Low:</strong> {low}</p>
                    <p><strong>Close:</strong> {close}</p>
                    <p><strong>Volume:</strong> {volume}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div style={{ width: "100%", height: 400 }}>
            <div className="mb-4 flex items-center gap-4">
                <div>
                    <label htmlFor="brandSelect" className="mr-2">Select Stock Symbol:</label>
                    <select
                        id="brandSelect"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value.toUpperCase())}
                        className="border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 "
                    >
                        {brands.map((brand) => (
                            <option key={brand} value={brand}>{brand.toUpperCase()}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="timeSeriesSelect" className="mr-2">Select Time Series:</label>
                    <select
                        id="timeSeriesSelect"
                        value={selectedTimeSeries}
                        onChange={(e) => setSelectedTimeSeries(e.target.value)}
                        className="border border-gray-300 p-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        {timeSeriesOptions.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
                    <Line
                        type="monotone"
                        dataKey="close"
                        stroke="#d5b3ff"
                        strokeWidth={2}
                        dot={{ r: 1 }}
                        activeDot={{ r: 5 }}
                    />
                    <Brush
                        dataKey="date"
                        height={20}
                        stroke="#8a6ab8"
                        travellerWidth={10}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
