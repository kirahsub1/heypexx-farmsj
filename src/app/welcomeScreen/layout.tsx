"use client";

import { useState, ReactNode } from "react";
// import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/Header";

type HomeProps = {
  children: ReactNode;
};

export default function Home({ children }: HomeProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* {sidebarOpen && <Sidebar />} */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <DashboardHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}