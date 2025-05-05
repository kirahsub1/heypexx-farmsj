"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <DashboardHeader  />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
