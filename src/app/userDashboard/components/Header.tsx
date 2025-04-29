"use client";

import { Menu, Bell } from "lucide-react";
import Image from "next/image";

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <header className="h-16 bg-white px-6 flex items-center justify-between sticky top-0 z-10 transition-all">
      {/* Left: Sidebar toggle */}
      <div className="flex items-center gap-4">
        <button
          className="text-gray-500 hover:text-gray-800 transition"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
          onClick={onToggleSidebar}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Center: Search */}
      <div className="flex items-center gap-2 flex-1 justify-center max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 border-none rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          aria-label="Search"
          title="Search"
        >
          Search
        </button>
      </div>

      {/* Right: Notification + Avatar */}
      <div className="flex items-center gap-4">
        <button
          className="text-gray-500 hover:text-gray-800 relative transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <Image
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_5_x6mj9r.png"
          alt="User avatar"
          width={36}
          height={36}
          className="rounded-full object-cover border-2 border-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
