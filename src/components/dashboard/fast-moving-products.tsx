"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

type ProductTrend = "up" | "down" | "neutral";

interface FastMovingProduct {
  id: string;
  name: string;
  unitsSold: number;
  stockLeft: number;
  trend?: ProductTrend;
}

interface Props {
  data: FastMovingProduct[];
}

export const FastMovingProducts = ({ data }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg font-semibold">
          🏆 Top Fast-Moving Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-left">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Units Sold</th>
              <th className="py-2 px-4">Stock Left</th>
              <th className="py-2 px-4">Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, idx) => (
              <tr key={product.id} className="border-b hover:bg-slate-50">
                <td className="py-2 px-4 font-medium text-slate-700">
                  {idx + 1}
                </td>
                <td className="py-2 px-4 text-slate-800">{product.name}</td>
                <td className="py-2 px-4 text-blue-600 font-semibold">
                  {product.unitsSold}
                </td>
                <td className="py-2 px-4">
                  <Badge
                    variant={
                      product.stockLeft < 10 ? "destructive" : "secondary"
                    }
                  >
                    {product.stockLeft} boxes
                  </Badge>
                </td>
                <td className="py-2 px-4">
                  {product.trend === "up" ? (
                    <span className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" /> Up
                    </span>
                  ) : product.trend === "down" ? (
                    <span className="flex items-center text-red-600">
                      <TrendingDown className="w-4 h-4 mr-1" /> Down
                    </span>
                  ) : (
                    <span className="text-slate-500">–</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
