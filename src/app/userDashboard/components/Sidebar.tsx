"use client";

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
          {/* <span className="text-xl font-semibold text-green-700">Heypexx</span> */}
        </div>

        {/* Nav Links */}
        <nav className="px-4 py-6 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Home className="w-5 h-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <ShoppingCart className="w-5 h-5" />
            My Cart
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Leaf className="w-5 h-5" />
            Farm Produce
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <MapPin className="w-5 h-5" />
            Land Leasing
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <CreditCard className="w-5 h-5" />
            Transactions
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition"
          >
            <Truck className="w-5 h-5" />
            Exportation
          </a>

          <hr className="my-4 border-gray-300" />

          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <Settings className="w-5 h-5" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <HelpCircle className="w-5 h-5" />
            Help
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-300"
          >
            <User className="w-5 h-5" />
            Profile
          </a>
        </nav>
      </div>

      {/* Bottom Section: Logout */}
      <div className="px-4 py-4 border-t border-gray-300">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
