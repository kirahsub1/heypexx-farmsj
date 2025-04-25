"use client";

import { Menu, Bell } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-16 bg-white shadow px-6 flex items-center justify-between sticky top-0 z-10 ml-64">
      {/* Left side: Logo + Toggle */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-800">
          <Menu className="w-6 h-6" />
        </button>
        <div className="text-xl font-bold text-blue-600">Heypexx</div>
      </div>

      {/* Middle: Search */}
      <div className="flex items-center gap-2 flex-1 justify-center max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition">
          Search
        </button>
      </div>

      {/* Right side: Notification + User */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-800 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <Image
          src="/user.jpg"
          alt="User"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;

