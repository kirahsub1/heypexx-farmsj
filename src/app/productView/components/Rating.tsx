"use client";

import { Star } from "lucide-react";

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

  return (
    <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Verified Customer Feedback
        </h2>
        <a href="#" className="text-green-600 font-medium">
          See all
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-6">
        <div className="bg-gray-50 rounded-lg p-6 w-full md:w-1/4 text-center border border-gray-100">
          <p className="text-yellow-500 text-2xl font-bold">
            {averageRating}/5
          </p>
          <div className="flex justify-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {totalRatings.toLocaleString()} verified ratings
          </p>
        </div>

        <div className="w-full md:w-3/4">
          <p className="text-sm text-gray-600 mb-4">
            Comments from verified purchases ({totalReviews})
          </p>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-t pt-4">
                <div className="flex items-center space-x-2 mb-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm whitespace-pre-line text-gray-700">
                  {review.comment}
                </p>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <p>
                    {review.date} by{" "}
                    <span className="font-medium text-gray-600">
                      {review.name}
                    </span>
                  </p>
                  <span className="text-green-600 font-semibold">
                    {review.extra}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
