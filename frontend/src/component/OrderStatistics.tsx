"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { data } from "@data";

const OrderStatistics = () => {
  return (
    <Card className="p-6 shadow-xl">
      <CardHeader>
        <CardTitle>Order Statistic</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 25, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `Rp${value / 1000}k`} />
            <Tooltip formatter={(value) => `${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="2023" stroke="#8a6ab8" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="2024" stroke="#d5b3ff" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OrderStatistics;
