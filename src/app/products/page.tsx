import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { ProductTable } from "@/components/products/product-table";
import { AddProductDialog } from "@/components/products/add-product-dialog";

export default function ProductsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-slate-50">
        <Topbar />
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Products</h2>
          <AddProductDialog />
          <ProductTable />
        </div>
      </main>
    </div>
  );
}

///////////////////////////

// "use client";

// import { useState, useMemo } from "react";
// import { Input } from "@/components/ui/input";
// // import { Select, SelectItem } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { ProductTable } from "@/components/products/product-table";

// // Mock data for example
// const products = [
//   {
//     name: "Carrara White",
//     category: "Tiles",
//     supplier: "Kajaria",
//     stock: 20,
//     lowStockThreshold: 25,
//   },
//   {
//     name: "Black Galaxy",
//     category: "Granite",
//     supplier: "Somany",
//     stock: 10,
//     lowStockThreshold: 15,
//   },
//   // more...
// ];

// export default function ProductPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [supplier, setSupplier] = useState("");
//   const [lowStockOnly, setLowStockOnly] = useState(false);

//   const filteredProducts = useMemo(() => {
//     return products.filter((product) => {
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(search.toLowerCase());

//       const matchesCategory = category ? product.category === category : true;

//       const matchesSupplier = supplier ? product.supplier === supplier : true;

//       const matchesLowStock = lowStockOnly
//         ? product.stock <= product.lowStockThreshold
//         : true;

//       return (
//         matchesSearch && matchesCategory && matchesSupplier && matchesLowStock
//       );
//     });
//   }, [search, category, supplier, lowStockOnly]);

//   return (
//     <div className="p-6 space-y-6">
//       <h2 className="text-2xl font-semibold text-slate-800">
//         📦 Product Inventory
//       </h2>

//       {/* 🔍 Filters */}
//       <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
//         <Input
//           placeholder="🔍 Search product name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <Select value={category} onValueChange={setCategory}>
//           <SelectItem value="">All Categories</SelectItem>
//           <SelectItem value="Tiles">Tiles</SelectItem>
//           <SelectItem value="Granite">Granite</SelectItem>
//           <SelectItem value="Sanitary">Sanitary</SelectItem>
//         </Select>

//         <Select value={supplier} onValueChange={setSupplier}>
//           <SelectItem value="">All Suppliers</SelectItem>
//           <SelectItem value="Kajaria">Kajaria</SelectItem>
//           <SelectItem value="Somany">Somany</SelectItem>
//         </Select>

//         <div className="flex items-center gap-2">
//           <Checkbox
//             id="lowStock"
//             checked={lowStockOnly}
//             onCheckedChange={(checked) => setLowStockOnly(!!checked)}
//           />
//           <label
//             htmlFor="lowStock"
//             className="text-sm font-medium text-gray-700"
//           >
//             Show Low Stock Only
//           </label>
//         </div>
//       </div>

//       {/* 📋 Table */}
//       <ProductTable data={filteredProducts} />
//     </div>
//   );
// }
