"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

interface StockMovementData {
  date: string; // e.g. '2024-07-01'
  stockIn: number;
  stockOut: number;
}

interface Props {
  data: StockMovementData[];
}

export const StockMovementGraph = ({ data }: Props) => {
  const hasData = data.length > 0;

  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Stock In",
        data: data.map((entry) => entry.stockIn),
        borderColor: "#10b981", // emerald
        backgroundColor: "rgba(16,185,129,0.1)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Stock Out",
        data: data.map((entry) => entry.stockOut),
        borderColor: "#ef4444", // red
        backgroundColor: "rgba(239,68,68,0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 12,
            weight: "500",
          },
          color: "#334155",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#64748b",
        },
      },
      x: {
        ticks: {
          color: "#64748b",
        },
      },
    },
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg font-semibold">
          📈 Stock Movement (In vs Out)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p className="text-center text-slate-500 py-12">
            No stock movement data to display.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
