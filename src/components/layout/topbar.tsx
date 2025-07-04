"use client";

export function Topbar() {
  return (
    <header className="w-full h-16 px-6 flex items-center justify-between border-b border-slate-200 bg-white">
      <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Future: Notifications or user avatar */}
        <div className="w-8 h-8 bg-slate-300 rounded-full" />
      </div>
    </header>
  );
}
