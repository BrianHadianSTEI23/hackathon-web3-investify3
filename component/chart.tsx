'use client'

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function SalesChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error("Error loading data:", error));
  }, []);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>Sales Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="sales" stroke="blue" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
