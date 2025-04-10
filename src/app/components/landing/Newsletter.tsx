import React, { useState } from "react";


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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest updates and offers.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2">
        <img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1744286438/image_2_fqlxct.png" 
          alt="Newsletter Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
