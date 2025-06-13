"use client";

import { Menu, Bell, Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type HeaderProps = {
  onToggleSidebar: () => void;
};

const Header = ({ onToggleSidebar }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-16 bg-white/80 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-40 border-b border-gray-100"
    >
      {/* Left: Sidebar toggle */}
      <div className="flex items-center gap-4">
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
      </div>

      {/* Center: Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-2 flex-1 justify-center max-w-2xl relative group"
      >
        <div className="relative w-full">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 group-focus-within:text-green-500 transition-colors" />
          <input
            type="text"
            placeholder="Search products, categories, or farms..."
            className="pl-10 pr-4 py-2.5 w-full rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all hover:border-gray-300"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-green-500 text-white px-6 py-2.5 rounded-xl hover:bg-green-600 transition-colors font-medium shadow-sm shadow-green-500/20 hover:shadow-md hover:shadow-green-500/25"
        >
          Search
        </motion.button>
      </motion.div>

      {/* Right: Notification + Avatar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-6"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100/80 transition"
          aria-label="Notifications"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full">
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
          </span>
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-100/80 transition cursor-pointer"
        >
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_5_x6mj9r.png"
              alt="User avatar"
              width={36}
              height={36}
              className="rounded-full object-cover ring-2 ring-green-500/20 ring-offset-2"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full ring-2 ring-white" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
