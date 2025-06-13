import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
      setIsSubmitting(false);
    }
  };
  return (
    <section className="max-w-7xl mx-auto py-20 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C3E4AA]/30 via-white to-[#f8faf5] rounded-3xl" />
      <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-30 mix-blend-overlay" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative md:flex items-center justify-between gap-12 bg-white/50 backdrop-blur-xl rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-[#46A908]/10 text-[#46A908] rounded-full text-sm font-medium mb-4"
          >
            Newsletter
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Get Weekly Updates!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Stay informed about the latest agricultural trends, market prices, and farming tips.
          </motion.p>
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row items-center gap-4"
        >          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full sm:w-96 px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#46A908]/20 shadow-sm text-gray-600 placeholder:text-gray-400"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full ${
                isSuccess
                  ? "bg-green-500 text-white"
                  : "bg-[#46A908] text-white hover:bg-[#3d9206]"
              } flex items-center gap-2 transition-all duration-300 disabled:opacity-70`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isSuccess ? (
                "Subscribed!"
              ) : (
                <>
                  Subscribe
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 md:mt-0 md:w-1/2"
      >
        <div className="relative h-80 w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#46A908]/30 to-[#83c254]/30 rounded-3xl blur-2xl" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1744286438/image_2_fqlxct.png"
              alt="Newsletter Image"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
