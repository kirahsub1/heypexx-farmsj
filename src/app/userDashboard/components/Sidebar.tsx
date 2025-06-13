"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  ShoppingCart,
  Leaf,
  MapPin,
  CreditCard,
  Truck,
  Settings,
  HelpCircle,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { href: "/userDashboard/welcomeScreen", icon: Home, label: "Dashboard" },
    { href: "/userDashboard/cart", icon: ShoppingCart, label: "My Cart" },
    { href: "/userDashboard/productView", icon: Leaf, label: "Farm Produce" },
    { href: "/", icon: MapPin, label: "Land Leasing" },
    { href: "#", icon: CreditCard, label: "Transactions" },
    { href: "#", icon: Truck, label: "Exportation" },
  ];

  const settingsItems = [
    { href: "#", icon: Settings, label: "Settings" },
    { href: "#", icon: HelpCircle, label: "Help" },
    { href: "/userDashboard/profileSetup", icon: User, label: "Profile" },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64 h-screen bg-white text-gray-800 fixed top-0 left-0 flex flex-col justify-between shadow-xl border-r border-gray-100"
    >
      {/* Top Section */}
      <div>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 px-6 py-6"
        >
          <Image
            src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
            alt="Logo"
            width={120}
            height={40}
            className="transform hover:scale-105 transition-transform"
          />
        </motion.div>

        {/* Main Navigation */}
        <nav className="px-4 py-6 space-y-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-green-50 transition-all duration-200 relative ${
                  pathname === item.href
                    ? "bg-green-50 text-green-600 font-medium"
                    : "text-gray-600 hover:text-green-600"
                }`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    pathname === item.href
                      ? "text-green-600"
                      : "text-gray-500 group-hover:text-green-600"
                  }`}
                />
                <span className="flex-1">{item.label}</span>
                {hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="ml-auto"
                  >
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Settings Navigation */}
        <div className="px-4 pt-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <nav className="py-4 space-y-1">
            {settingsItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + index) * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-gray-100 text-gray-800 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Section: Logout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 border-t border-gray-100"
      >
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50 transition-colors duration-200 group"
        >
          <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Logout</span>
        </Link>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
