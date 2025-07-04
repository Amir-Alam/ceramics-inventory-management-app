"use client";

import { AlertTriangle, Clock, Ban } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type AlertType = "LOW_STOCK" | "PENDING_PO" | "DAMAGED_EXPIRED";

interface AlertItem {
  id: string;
  productName: string;
  type: AlertType;
  message: string;
}

interface AlertPanelProps {
  alerts: AlertItem[];
}

const getIcon = (type: AlertType) => {
  switch (type) {
    case "LOW_STOCK":
      return <AlertTriangle className="text-red-500 w-5 h-5 mr-2" />;
    case "PENDING_PO":
      return <Clock className="text-yellow-500 w-5 h-5 mr-2" />;
    case "DAMAGED_EXPIRED":
      return <Ban className="text-orange-500 w-5 h-5 mr-2" />;
  }
};

const getBadge = (type: AlertType) => {
  switch (type) {
    case "LOW_STOCK":
      return <Badge variant="destructive">Low Stock</Badge>;
    case "PENDING_PO":
      return <Badge className="bg-yellow-500 text-white">Pending PO</Badge>;
    case "DAMAGED_EXPIRED":
      return <Badge className="bg-orange-500 text-white">Issue</Badge>;
  }
};

export const AlertPanel = ({ alerts }: AlertPanelProps) => {
  const hasAlerts = alerts.length > 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-slate-800 text-lg font-semibold">
          🚨 Alerts & Warnings
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasAlerts ? (
          <ul className="space-y-4">
            {alerts.map((alert) => (
              <li
                key={alert.id}
                className="flex items-start justify-between p-3 rounded-md border bg-white hover:bg-slate-50 transition"
              >
                <div className="flex items-start space-x-2">
                  {getIcon(alert.type)}
                  <div>
                    <p className="font-medium text-slate-800">
                      {alert.productName}
                    </p>
                    <p className="text-sm text-slate-600">{alert.message}</p>
                  </div>
                </div>
                <div>{getBadge(alert.type)}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-slate-500 py-6">
            No alerts at this time.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
