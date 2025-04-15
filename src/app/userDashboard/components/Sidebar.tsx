"use client";

import { Home, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0 flex flex-col">
      <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
        BrandName
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-800"
        >
          <Home className="w-5 h-5" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-800"
        >
          <Settings className="w-5 h-5" />
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
