"use client";

import Link from "next/link";
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
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="w-64 h-[90vh] bg-gray-100 text-gray-800 fixed top-0 left-0 flex flex-col justify-between shadow-md rounded-br-xl overflow-hidden">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-300">
          <Image
            src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737469420/image_18_gwbxab.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-2">
          <Link
            href="/userDashboard"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/userDashboard/cart"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <ShoppingCart className="w-5 h-5" />
            My Cart
          </Link>
          <Link
            href="/userDashboard/productlisting"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Leaf className="w-5 h-5" />
            Farm Produce
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <MapPin className="w-5 h-5" />
            Land Leasing
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <CreditCard className="w-5 h-5" />
            Transactions
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Truck className="w-5 h-5" />
            Exportation
          </Link>

          <hr className="my-4 border-gray-300" />

          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <HelpCircle className="w-5 h-5" />
            Help
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <User className="w-5 h-5" />
            Profile
          </Link>
        </nav>
      </div>

      {/* Bottom Section: Logout */}
      <div className="px-4 py-4 border-t border-gray-300">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
