"use client";

import { Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  date: string;
  comment: string;
  extra: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Simi",
    date: "02-01-2025",
    comment: "Fresh tomatoes\nI love it",
    extra: "Verified purchase",
    rating: 5,
  },
  {
    id: 2,
    name: "Ade",
    date: "01-02-2025",
    comment: "My wife love it\nIt taste Good",
    extra: "Verified purchase",
    rating: 5,
  },
];

export default function PortfolioRating() {
  const averageRating = 5.5;
  const totalRatings = 23456;
  const totalReviews = reviews.length;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="rounded-2xl border border-gray-200 p-8 bg-white shadow-lg"
    >
      <motion.div
        variants={item}
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <ThumbsUp className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Verified Customer Feedback
          </h2>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="mt-4 md:mt-0 text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2"
        >
          View all reviews
          <span className="text-sm">→</span>
        </motion.a>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <motion.div
          variants={item}
          className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 w-full md:w-1/4 text-center border border-gray-100 shadow-sm"
        >
          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-900 text-4xl font-bold mb-2"
          >
            {averageRating}
            <span className="text-xl text-gray-500">/5</span>
          </motion.p>
          <div className="flex justify-center mt-3 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-600 font-medium">
            Based on {totalRatings.toLocaleString()} verified ratings
          </p>
        </motion.div>

        <motion.div variants={item} className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm font-medium text-gray-700">
              Recent Reviews ({totalReviews})
            </p>{" "}
            <select
              aria-label="Sort reviews"
              title="Sort reviews"
              className="text-sm border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
            >
              <option>Most Recent</option>
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
            </select>
          </div>
          <motion.div variants={container} className="space-y-6">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={item}
                className="group rounded-xl border border-gray-100 p-6 hover:border-green-200 transition-colors"
              >
                <div className="flex items-center space-x-2 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-base font-medium text-gray-800 whitespace-pre-line mb-3">
                  {review.comment}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="font-medium text-gray-700">
                        {review.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    {review.extra}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
