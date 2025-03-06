'use client';

import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Brush,
    ReferenceLine
} from "recharts";
import { dummyData } from "../../data/saham";

interface StockData {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    brand_name: string;
}

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
    const [selectedBrand, setSelectedBrand] = useState<string>("toyota");
    const brands = ["puma", "adidas", "toyota"];

    useEffect(() => {
        const filteredData = dummyData
            .filter((item: StockData) => item.brand_name.toLowerCase() === selectedBrand)
            .map((item: StockData) => ({
                date: new Date(item.date.trim()).toLocaleDateString(),
                open: parseFloat(item.open.toString()),
                high: parseFloat(item.high.toString()),
                low: parseFloat(item.low.toString()),
                close: parseFloat(item.close.toString()),
                volume: parseFloat(item.volume.toString())
            }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        setData(filteredData);
    }, [selectedBrand]);

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
            <div className="mb-4">
                <label htmlFor="brandSelect" className="mr-2">Select Brand:</label>
                <select
                    id="brandSelect"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value.toLowerCase())}
                    className="border border-gray-300 p-1 rounded"
                >
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand.toUpperCase()}</option>
                    ))}
                </select>
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
