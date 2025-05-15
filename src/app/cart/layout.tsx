"use client";

import { useState, ReactNode } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

type HomeProps = {
  children: ReactNode;
};

export default function Home({ children }: HomeProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {sidebarOpen && <Sidebar />}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}