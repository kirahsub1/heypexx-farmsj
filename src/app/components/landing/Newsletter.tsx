import React, { useState } from "react";
import Image from "next/image";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // clear input after submit
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:flex items-center justify-between bg-[#C3E4AA] rounded-lg shadow-lg">
      <div className="md:w-1/2">
        <p className="text-2xl text-[#46A908] mb-2">
          Newsletter
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Weekly Updated!</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-[#46A908] rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2 relative h-64 w-full">
        <Image
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1744286438/image_2_fqlxct.png"
          alt="Newsletter Image"
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
