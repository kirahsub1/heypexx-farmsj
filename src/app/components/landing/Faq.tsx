"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Heypexx Farms?",
    answer:
      "Heypexx Farms is a platform that connects users to to farm products and land leasing opportunities.",
  },
  {
    question: "How do i lease Land?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that allows developers to rapidly build modern websites without writing custom CSS.",
  },
  {
    question: "Will i receive my orders fast?",
    answer:
      "You can use TypeScript in Next.js by creating `.tsx` files and configuring `tsconfig.json` in your project root.",
  },
  {
    question: "Are your customers support easy to contact?",
    answer: ""
  },
  {
    question: "Are the farm produce affordable?",
    answer: ""
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 space-y-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-5xl space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm">
            <button
              className="w-full flex justify-between items-center text-left text-xl font-semibold p-5 bg-[#c3e4aa] hover:bg-[#C3E4AA] transition-colors duration-300 rounded-xl"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus className="text-black" />
              ) : (
                <Plus className="text-black" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 bg-[#c3e4aa] animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
