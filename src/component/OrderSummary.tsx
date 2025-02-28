"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orderStats } from "../../data/data";

export default function OrderSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 justify-items-center">
    {/* Total Orders */}
    <Card className="shadow-md w-full overflow-hidden">
        <CardHeader>
        <CardTitle className="text-sm sm:text-lg">Total Orders</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-2xl font-bold text-gray-700">{orderStats.totalOrders}</p>
        </CardContent>
    </Card>

    {/* Total Returns */}
    <Card className="shadow-md w-full overflow-hidden">
        <CardHeader>
        <CardTitle className="text-sm sm:text-lg">Total Returns</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-2xl font-bold text-red-600">{orderStats.totalReturns}</p>
        </CardContent>
    </Card>

    {/* Total Revenue */}
    <Card className="shadow-md w-full overflow-hidden">
        <CardHeader>
        <CardTitle className="text-sm sm:text-lg">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
        <p className="text-2xl font-bold text-green-600">{orderStats.totalRevenue}</p>
        </CardContent>
    </Card>
    </div>

  );
}
