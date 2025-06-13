"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) {
    return null; // Prevent flash of content
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="flex">
        {/* Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{
            x: sidebarOpen ? 0 : -256,
            width: sidebarOpen ? 256 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 overflow-hidden"
        >
          <Sidebar />
        </motion.aside>

        {/* Main Content */}
        <motion.div
          layout="position"
          className="flex-1 min-h-screen relative"
          animate={{
            paddingLeft: sidebarOpen ? 256 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {/* Header */}
          <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >              <DashboardHeader
                username="John Doe"
                onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
              />
            </motion.div>
          </div>

          {/* Main Content Area */}
          <main className="min-h-[calc(100vh-4rem)] bg-gray-50/30">
            <div className="container mx-auto p-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={window.location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </motion.div>
      </div>
    </div>
  );
}
