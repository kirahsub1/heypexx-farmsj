// app/dashboard/Sidebar.tsx
"use client";

import { Home, BarChart2, Settings } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Heypexx Farms</h2>
      <nav className="space-y-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600"
        >
          <Home size={20} /> Dashboard
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600"
        >
          <BarChart2 size={20} /> Analytics
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-gray-700 hover:text-green-600"
        >
          <Settings size={20} /> Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
