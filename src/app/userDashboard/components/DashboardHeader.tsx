"use client";

import React from "react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Menu, Bell, Search, ChevronDown } from "lucide-react";

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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-20 bg-white/80 backdrop-blur-lg px-6 flex items-center justify-between sticky top-0 z-10 transition-all border-b border-gray-100"
    >
      {/* Left: Sidebar toggle & greeting */}
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100/80 transition"
            aria-label="Toggle sidebar"
            title="Toggle sidebar"
            onClick={onToggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        )}
        <div>
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Welcome back, {username} 👋
          </motion.h1>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500 font-medium"
          >
            {currentDate}
          </motion.p>
        </div>
      </div>

      {/* Right: Search + Notifications + User */}
      <div className="flex items-center gap-6">
        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center relative group"
        >
          <Search className="w-4 h-4 text-gray-400 absolute left-3 group-hover:text-green-500 transition-colors" />
          <input
            type="text"
            placeholder="Search anything..."
            className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all hover:border-gray-300"
          />
        </motion.div>

        {/* Notification bell */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100/80 transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          </span>
        </motion.button>

        {/* User info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-100/80 transition cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-green-500 flex items-center justify-center text-white font-semibold text-lg">
              {username.charAt(0).toUpperCase()}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-700">{username}</p>
            <p className="text-xs text-gray-500">Premium User</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default DashboardHeader;
