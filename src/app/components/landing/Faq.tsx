"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Heypexx Farms?",
    answer:
      "Heypexx Farms is an innovative agricultural platform that connects farmers, buyers, and landowners. We facilitate direct farm-to-market sales, land leasing opportunities, and export services, ensuring quality produce and fair prices for everyone involved.",
  },
  {
    question: "How do I lease land through Heypexx Farms?",
    answer:
      "Leasing land through Heypexx Farms is simple. Browse available properties on our platform, view detailed information about soil quality, irrigation, and terms. Once you find suitable land, contact the owner through our platform to discuss terms. Our team assists throughout the process to ensure a smooth transaction.",
  },
  {
    question: "How fast can I receive my orders?",
    answer:
      "Delivery times vary based on your location and the products ordered. Local deliveries typically arrive within 24-48 hours. For bulk orders and exports, we provide detailed timelines during checkout. We prioritize maintaining produce freshness and quality throughout the delivery process.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available 24/7 through multiple channels. You can reach us via live chat on our website, email at support@heypexx.com, or phone at +1-800-HEYPEXX. We typically respond to inquiries within 2 hours during business hours.",
  },
  {
    question: "Are the farm products affordable?",
    answer:
      "Yes! By connecting you directly with farmers, we eliminate middlemen and reduce costs. Our prices are competitive and transparent. We also offer bulk purchase discounts and regular promotional offers. You can compare prices across different farmers on our platform to find the best deals.",
  },
  {
    question: "What types of products are available?",
    answer:
      "We offer a wide range of fresh farm produce including fruits, vegetables, grains, and organic products. All products are sourced directly from verified farmers. We also provide agricultural inputs and supplies for farmers. Our inventory is updated daily to ensure availability.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c3e4aa]/30 to-white">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle size={32} className="text-[#46A908]" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-20 h-1 bg-[#46A908] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers to help you get started
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#46A908] focus:ring-opacity-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="text-[#46A908] w-6 h-6" />
                    ) : (
                      <Plus className="text-[#46A908] w-6 h-6" />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
