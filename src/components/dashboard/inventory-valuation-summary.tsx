"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";

interface InventoryValuation {
  totalValue: number;
  breakdown: {
    category: string;
    value: number;
  }[];
}

interface Props {
  data: InventoryValuation;
}

export const InventoryValuationSummary = ({ data }: Props) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg font-semibold">
          💸 Inventory Valuation Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-slate-900">
          {formatCurrency(data.totalValue)}
        </div>
        <div className="space-y-3">
          {data.breakdown.map((item) => {
            const percentage = (item.value / data.totalValue) * 100;
            return (
              <div key={item.category}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-slate-700 font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-slate-600">
                    {formatCurrency(item.value)} ({percentage.toFixed(1)}%)
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
