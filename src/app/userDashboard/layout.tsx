"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function UserDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-6">
          <p className="text-gray-700">Welcome to your dashboard!</p>
        </main>
      </div>
    </div>
  );
}
