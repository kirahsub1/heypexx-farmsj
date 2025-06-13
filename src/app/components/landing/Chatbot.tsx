"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const whatsappLink = "https://wa.me/2349012345678"; // Replace with your WhatsApp number

const ChatBotButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show tooltip after button appears
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowTooltip(true), 1000);
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg"
          >
            <p className="text-sm font-medium whitespace-nowrap">
              Need help? Chat with us! 👋
            </p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button 
                className="relative group bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/25 flex items-center gap-3 transition-all duration-300"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <MessageCircle className="relative w-6 h-6" />
                <span className="relative hidden md:inline font-medium">Chat with us</span>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110 animate-ping" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBotButton;
