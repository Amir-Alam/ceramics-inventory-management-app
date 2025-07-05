"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { mockProducts } from "@/components/products/product-data";
import { ProductTable } from "@/components/products/product-table";
import { AddProductDialog } from "@/components/products/add-product-dialog";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const categories = useMemo(
    () => Array.from(new Set(mockProducts.map((p) => p.category))),
    []
  );

  const suppliers = useMemo(
    () => Array.from(new Set(mockProducts.map((p) => p.supplier))),
    []
  );

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      const matchesSupplier = selectedSupplier
        ? product.supplier === selectedSupplier
        : true;

      const matchesStock = showLowStockOnly ? product.stock < 10 : true;

      return (
        matchesSearch && matchesCategory && matchesSupplier && matchesStock
      );
    });
  }, [search, selectedCategory, selectedSupplier, showLowStockOnly]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedSupplier, showLowStockOnly]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage]);

  const renderFilterSection = () => (
    <div className="flex flex-wrap gap-6 items-end">
      {/* 🔍 Search */}
      <div className="space-y-1">
        <label htmlFor="search" className="text-sm font-medium">
          Search
        </label>
        <Input
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product name"
          className="w-64"
        />
      </div>

      {/* 🗂️ Category */}
      <div className="space-y-1">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-52">
            <SelectValue placeholder="All categories" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* 🚚 Supplier */}
      <div className="space-y-1">
        <label htmlFor="supplier" className="text-sm font-medium">
          Supplier
        </label>
        <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
          <SelectTrigger className="w-52">
            <SelectValue placeholder="All suppliers" />
          </SelectTrigger>
          <SelectContent>
            {suppliers.map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* ⚠️ Low Stock */}
      <div className="flex items-center gap-2 pt-6">
        <Checkbox
          checked={showLowStockOnly}
          onCheckedChange={() => setShowLowStockOnly((prev) => !prev)}
          id="lowStock"
        />
        <label htmlFor="lowStock" className="text-sm text-muted-foreground">
          Low Stock Only
        </label>
      </div>

      {/* 🧹 Clear Filters */}
      <div className="pt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setSearch("");
            setSelectedCategory("");
            setSelectedSupplier("");
            setShowLowStockOnly(false);
            setCurrentPage(1);
          }}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );

  const renderPagination = () => (
    <div className="flex justify-between items-center pt-4">
      <div className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages || 1}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          Next
        </Button>
      </div>
    </div>
  );

  return (
    // <div className="flex min-h-screen bg-slate-50 text-gray-900">
    <div className="flex h-screen overflow-hidden bg-slate-50 text-gray-900">
      <Sidebar />
      {/* <main className="flex-1 flex flex-col"> */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        {/* <section className="p-6 space-y-6"> */}
        <section className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">📦 Products</h1>
            <AddProductDialog />
          </div>

          {/* Filters */}
          {renderFilterSection()}

          {paginatedProducts.length > 0 ? (
            <>
              <ProductTable products={paginatedProducts} />
              {renderPagination()}
            </>
          ) : (
            <div className="text-center py-10 text-muted-foreground">
              No products found with current filters.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
