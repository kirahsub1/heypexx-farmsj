"use client"; 

import React from "react";
import { format } from "date-fns";
import { UserCircle } from "lucide-react";

interface DashboardHeaderProps {
  username: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username }) => {
  const currentDate = format(new Date(), "eeee, MMMM do yyyy");

  return (
    <header className="w-full flex justify-between items-center p-4 bg-white shadow-md rounded-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back, {username} 👋
        </h1>
        <p className="text-sm text-gray-500">{currentDate}</p>
      </div>
      <div className="flex items-center gap-2">
        <UserCircle className="w-10 h-10 text-gray-400" />
        <span className="text-base font-medium text-gray-700">{username}</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
