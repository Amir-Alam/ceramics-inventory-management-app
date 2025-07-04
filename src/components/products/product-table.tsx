// src/components/products/product-table.tsx
"use client";

import { mockProducts } from "./product-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ProductTable() {
  return (
    <Card className="w-full overflow-x-auto">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-slate-800">All Products</h3>
      </div>

      <table className="min-w-full text-sm text-slate-700">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-3 text-left font-medium">Name</th>
            <th className="px-6 py-3 text-left font-medium">Category</th>
            <th className="px-6 py-3 text-left font-medium">Variant</th>
            <th className="px-6 py-3 text-left font-medium">UoM</th>
            <th className="px-6 py-3 text-left font-medium">Stock</th>
            <th className="px-6 py-3 text-left font-medium">Supplier</th>
            <th className="px-6 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((product) => (
            <tr key={product.id} className="border-t hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">{product.name}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">{product.variant}</td>
              <td className="px-6 py-4">{product.uom}</td>
              <td className="px-6 py-4">
                {product.stock < 10 ? (
                  <Badge variant="destructive">Low: {product.stock}</Badge>
                ) : (
                  <Badge variant="secondary">{product.stock}</Badge>
                )}
              </td>
              <td className="px-6 py-4">{product.supplier}</td>
              <td className="px-6 py-4 flex gap-2">
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
