"use client";

import React from "react";
import { format } from "date-fns";
import { Menu, Bell, UserCircle } from "lucide-react";

interface DashboardHeaderProps {
  username: string;
  onToggleSidebar?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  username,
  onToggleSidebar,
}) => {
  const currentDate = format(new Date(), "eeee, MMMM do yyyy");

  return (
    <header className="h-16 bg-white px-6 flex items-center justify-between sticky top-0 z-10 border-b border-gray-200">
      {/* Left: Sidebar toggle & greeting */}
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button
            className="text-gray-500 hover:text-gray-800 transition"
            aria-label="Toggle sidebar"
            title="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Welcome back, {username} 👋
          </h1>
          <p className="text-sm text-gray-500">{currentDate}</p>
        </div>
      </div>

      {/* Right: Search + Notifications + User */}
      <div className="flex items-center gap-6">
        {/* Search bar */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search produce..."
            className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Notification bell */}
        <button
          className="relative text-gray-500 hover:text-gray-800 transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
        </button>

        {/* User info */}
        <div className="flex items-center gap-2">
          <UserCircle className="w-8 h-8 text-gray-400" />
          <span className="hidden md:inline text-sm font-medium text-gray-700">
            {username}
          </span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
