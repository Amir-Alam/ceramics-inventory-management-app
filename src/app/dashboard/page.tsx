import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { StatsCard } from "@/components/dashboard/stats-cards";
import { Boxes, PackageCheck, AlertTriangle } from "lucide-react";
import { RecentActivityTable } from "@/components/dashboard/recent-activity-table";
import { InventoryPieChart } from "@/components/dashboard/charts/inventory-pie-chart";
import { StockMovementGraph } from "@/components/dashboard/charts/stock-movement-graph";
import { AlertPanel } from "@/components/dashboard/alert-panel";
import { FastMovingProducts } from "@/components/dashboard/fast-moving-products";
import { InventoryValuationSummary } from "@/components/dashboard/inventory-valuation-summary";

export default function DashboardPage() {
  const recentActivity = [
    {
      date: new Date(),
      type: "purchase",
      reference: "PO-1005",
      quantity: 200,
      remarks: "Received from supplier",
    },
    {
      date: new Date(),
      type: "damage",
      reference: "LOT-223",
      quantity: -10,
      remarks: "Cracked tiles",
    },
    {
      date: new Date(),
      type: "restock",
      reference: "LOT-300",
      quantity: 100,
      remarks: "Manual update",
    },
  ];

  // Mock inventory category data
  const inventoryDistribution = [
    { category: "Tiles", stockCount: 720 },
    { category: "Adhesive", stockCount: 320 },
    { category: "Grout", stockCount: 140 },
    { category: "Tools", stockCount: 60 },
  ];

  const stockMovementData = [
    { date: "2025-06-25", stockIn: 120, stockOut: 80 },
    { date: "2025-06-26", stockIn: 95, stockOut: 120 },
    { date: "2025-06-27", stockIn: 150, stockOut: 60 },
    { date: "2025-06-28", stockIn: 110, stockOut: 130 },
    { date: "2025-06-29", stockIn: 90, stockOut: 70 },
    { date: "2025-06-30", stockIn: 140, stockOut: 100 },
    { date: "2025-07-01", stockIn: 80, stockOut: 90 },
  ];

  const alertData = [
    {
      id: "1",
      productName: "Porcelain Tile - 12x24",
      type: "LOW_STOCK",
      message: "Only 4 boxes left in stock.",
    },
    {
      id: "2",
      productName: "Marble White - 24x24",
      type: "PENDING_PO",
      message: "Awaiting PO #12345, expected in 2 days.",
    },
    {
      id: "3",
      productName: "Matte Black - 6x6",
      type: "DAMAGED_EXPIRED",
      message: "Batch 902 has been flagged as damaged.",
    },
  ];

  const fastProductsData = [
    {
      id: "1",
      name: "Glossy White - 24x24",
      unitsSold: 210,
      stockLeft: 35,
      trend: "up",
    },
    {
      id: "2",
      name: "Marble Beige - 12x12",
      unitsSold: 180,
      stockLeft: 5,
      trend: "down",
    },
    {
      id: "3",
      name: "Slate Gray - 6x6",
      unitsSold: 165,
      stockLeft: 20,
      trend: "up",
    },
    {
      id: "4",
      name: "Carrara Gloss - 18x18",
      unitsSold: 140,
      stockLeft: 9,
      trend: "neutral",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-slate-50">
        <Topbar />
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">
            Welcome to your IMS 👋
          </h2>

          {/* ✅ Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StatsCard
              title="Total Products"
              value="87"
              icon={PackageCheck}
              iconColor="text-blue-600"
            />
            <StatsCard
              title="Total Stock (Boxes)"
              value="1,245"
              icon={Boxes}
              iconColor="text-green-600"
            />
            <StatsCard
              title="Low Stock Alerts"
              value="5"
              icon={AlertTriangle}
              iconColor="text-red-600"
            />

            <InventoryPieChart data={inventoryDistribution} />
            <StockMovementGraph data={stockMovementData} />

            <AlertPanel alerts={alertData} />

            {/* ✅ Recent Activity Table */}
            <div className="mt-6">
              <RecentActivityTable data={recentActivity} />
            </div>

            <FastMovingProducts data={fastProductsData} />

            <InventoryValuationSummary
              data={{
                totalValue: 480000,
                breakdown: [
                  { category: "Porcelain Tiles", value: 250000 },
                  { category: "Adhesives", value: 120000 },
                  { category: "Granite", value: 70000 },
                  { category: "Trims & Accessories", value: 40000 },
                ],
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
