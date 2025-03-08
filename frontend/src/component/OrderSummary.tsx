"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { orderStats } from "@data";

const COLORS = ["#8a6ab8", "#b48de6", "#d5b3ff"]; 

const generateChartData = (data: { saham: number; reksadana: number; obligasi: number }) => [
  { name: "Saham", value: data.saham },
  { name: "Reksadana", value: data.reksadana },
  { name: "Obligasi", value: data.obligasi },
];

const formatNumber = (num: number) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

export default function OrderSummary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 justify-items-center">
      <ChartCard title="Total Orders" data={orderStats.totalOrders} />
      <ChartCard title="Total Returns" data={orderStats.totalReturns} />
      <ChartCard title="Total Revenue" data={orderStats.totalRevenue} />
    </div>
  );
}

function ChartCard({ title, data }: { title: string; data: { saham: number; reksadana: number; obligasi: number } }) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);
  const chartData = generateChartData(data);
  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="shadow-md w-full overflow-hidden flex flex-col items-center p-4">

      <CardHeader className="text-center">
        <CardTitle className="text-sm sm:text-base">{title}</CardTitle>
      </CardHeader>

      <CardContent className="relative flex flex-col items-center">
        <ResponsiveContainer width={200} height={200}>

          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
              opacity={0.7}
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} opacity={activeIndex === index || activeIndex === undefined ? 1 : 0.4} />
              ))}
            </Pie>
          </PieChart>

        </ResponsiveContainer>

        <div
          className={`absolute top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-center ${
            String(
              activeIndex !== undefined
                ? formatNumber(chartData[activeIndex].value)
                : formatNumber(totalValue)
            ).length > 5
              ? "text-lg"
              : "text-xl"
          }`} >

          <div>
            {activeIndex !== undefined
              ? formatNumber(chartData[activeIndex].value)
              : formatNumber(totalValue)}
          </div>

          <div className="text-sm">
            {activeIndex !== undefined
              ? `${((chartData[activeIndex].value / totalValue) * 100).toFixed(1)}%`
              : `100%`}
          </div>

        </div>


        <div className="mt-4 flex gap-4 text-sm md:flex-row">
          {chartData.map((entry, index) => (
            <div key={index} className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></span>
              {entry.name}
            </div>
          ))}
        </div>


      </CardContent>
    </Card>
  );
}
