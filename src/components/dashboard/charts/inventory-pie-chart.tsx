"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";
import { cn } from "@/lib/utils"; // Tailwind utility
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Props {
  data: { category: string; stockCount: number }[];
  className?: string;
}

export const InventoryPieChart = ({ data, className }: Props) => {
  const hasData = data.length > 0 && data.some((d) => d.stockCount > 0);

  const colors = [
    "#2563eb", // Blue
    "#10b981", // Green
    "#f59e0b", // Amber
    "#ef4444", // Red
    "#8b5cf6", // Purple
    "#0ea5e9", // Sky
    "#14b8a6", // Teal
  ];

  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        label: "Stock Count",
        data: data.map((d) => d.stockCount),
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#334155",
          font: {
            size: 13,
            weight: "500",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.raw;
            return `${label}: ${value} units`;
          },
        },
      },
    },
  };

  return (
    <Card className={cn("w-full h-full", className)}>
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg font-semibold">
          📊 Inventory Distribution by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <div className="flex items-center justify-center w-full max-h-[360px]">
            <Pie data={chartData} options={chartOptions} />
          </div>
        ) : (
          <p className="text-center text-sm text-slate-500 py-12">
            No stock data available to display the chart.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
