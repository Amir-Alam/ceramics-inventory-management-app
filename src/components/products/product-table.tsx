// // src/components/products/product-table.tsx
// "use client";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Pencil, Trash2 } from "lucide-react";
// import { Card } from "@/components/ui/card";

// type Product = {
//   id: string;
//   name: string;
//   category: string;
//   variant: string;
//   uom: string;
//   stock: number;
//   supplier: string;
// };

// export function ProductTable({ products }: { products: Product[] }) {
//   return (
//     <Card className="w-full overflow-x-auto">
//       <div className="p-4 border-b">
//         <h3 className="text-lg font-semibold text-slate-800">All Products</h3>
//       </div>

//       <table className="min-w-full text-sm text-slate-700">
//         <thead className="bg-slate-100">
//           <tr>
//             <th className="px-6 py-3 text-left font-medium">P id</th>
//             <th className="px-6 py-3 text-left font-medium">Name</th>
//             <th className="px-6 py-3 text-left font-medium">Category</th>
//             <th className="px-6 py-3 text-left font-medium">Variant</th>
//             <th className="px-6 py-3 text-left font-medium">UoM</th>
//             <th className="px-6 py-3 text-left font-medium">Stock</th>
//             <th className="px-6 py-3 text-left font-medium">Supplier</th>
//             <th className="px-6 py-3 text-left font-medium">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id} className="border-t hover:bg-slate-50">
//               <td className="px-6 py-4 font-medium">{product.id}</td>
//               <td className="px-6 py-4 font-medium">{product.name}</td>
//               <td className="px-6 py-4">{product.category}</td>
//               <td className="px-6 py-4">{product.variant}</td>
//               <td className="px-6 py-4">{product.uom}</td>
//               <td className="px-6 py-4">
//                 {product.stock < 10 ? (
//                   <Badge variant="destructive">Low: {product.stock}</Badge>
//                 ) : (
//                   <Badge variant="secondary">{product.stock}</Badge>
//                 )}
//               </td>
//               <td className="px-6 py-4">{product.supplier}</td>
//               <td className="px-6 py-4 flex gap-2">
//                 <Button variant="outline" size="sm">
//                   <Pencil className="h-4 w-4" />
//                 </Button>
//                 <Button variant="destructive" size="sm">
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Card>
//   );
// }

/////////////////////////////////////

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

type Product = {
  id: string;
  name: string;
  category: string;
  variant: string;
  uom: string;
  stock: number;
  supplier: string;
};

export function ProductTable({ products }: { products: Product[] }) {
  return (
    <Card className="w-full shadow-sm border rounded-lg">
      {/* Title/Header */}
      <div className="p-4 border-b bg-white sticky top-0 z-20">
        <h3 className="text-lg font-semibold text-slate-800">
          📦 All Products
        </h3>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-auto max-h-[500px]">
        <table className="min-w-full text-sm text-slate-700 relative">
          <thead className="bg-slate-100 sticky top-0 z-10 shadow-sm">
            <tr>
              <Th>P ID</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Variant</Th>
              <Th>UoM</Th>
              <Th>Stock</Th>
              <Th>Supplier</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-slate-50 transition-colors"
              >
                <Td>{product.id}</Td>
                <Td className="font-medium">{product.name}</Td>
                <Td>{product.category}</Td>
                <Td>{product.variant}</Td>
                <Td>{product.uom}</Td>
                <Td>
                  {product.stock < 10 ? (
                    <Badge variant="destructive">Low: {product.stock}</Badge>
                  ) : (
                    <Badge variant="secondary">{product.stock}</Badge>
                  )}
                </Td>
                <Td>{product.supplier}</Td>
                <Td>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      aria-label="Edit product"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      aria-label="Delete product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// 🧱 Reusable Table Cell Components
const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-6 py-3 text-left font-medium text-slate-600 uppercase text-xs tracking-wider">
    {children}
  </th>
);

const Td = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <td className={`px-6 py-4 whitespace-nowrap ${className}`}>{children}</td>
);
