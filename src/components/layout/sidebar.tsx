"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Package, ClipboardList, Truck, Settings } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/products", label: "Products", icon: Package },
  { href: "/inventory", label: "Inventory", icon: ClipboardList },
  { href: "/purchase-orders", label: "Purchase Orders", icon: Truck },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 bg-white border-r border-slate-200 p-4 flex flex-col">
      <div className="text-2xl font-bold text-blue-600 mb-8">Ceramic IMS</div>
      <nav className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition",
              pathname === href && "bg-slate-100 text-blue-600"
            )}
          >
            <Icon className="h-5 w-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
