// src/components/dashboard/StockTopProducts.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  stock: number;
  unit: string;
}

interface Props {
  mostStocked: Product[];
  leastStocked: Product[];
}

export function StockTopProducts({ mostStocked, leastStocked }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Most Stocked */}
      <Card>
        <CardHeader>
          <CardTitle>Most Stocked Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {mostStocked.map((p) => (
            <div key={p.id} className="flex justify-between items-center">
              <div className="text-sm font-medium text-slate-700">{p.name}</div>
              <Badge variant="outline" className="text-xs">
                {p.stock} {p.unit}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Least Stocked */}
      <Card>
        <CardHeader>
          <CardTitle>Least Stocked Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leastStocked.map((p) => (
            <div key={p.id} className="flex justify-between items-center">
              <div className="text-sm font-medium text-slate-700">{p.name}</div>
              <Badge variant="destructive" className="text-xs">
                {p.stock} {p.unit}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
