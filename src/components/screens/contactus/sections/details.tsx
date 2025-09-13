"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Omer Levi",
    role: "Product Owner at GoodDollar",
    review:
      "The work WeSoftYou provided has generated an enormous impact. They executed very well, so we were able to launch...",
  },
  {
    name: "Sarah Kim",
    role: "CTO at FinTechPro",
    review:
      "Amazing experience! The team was responsive and delivered high-quality results that exceeded expectations.",
  },
  {
    name: "James Brown",
    role: "Founder at EduSmart",
    review:
      "Their expertise helped us speed up our product launch by months. Highly recommend working with them!",
  },
  {
    name: "Emily Davis",
    role: "Project Manager at HealthHub",
    review:
      "The communication was seamless and the final product was exactly what we envisioned.",
  },
  {
    name: "Michael Chen",
    role: "CEO at StartX",
    review:
      "Professional, dedicated, and results-driven. Will definitely collaborate with them again.",
  },
];

export default function Details() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gray-100 px-6 py-8">
      {/* Outer container - compact height */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-2xl mx-auto bg-white rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-xl min-h-[450px]"
      >
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-[#F3F4F6] rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-md"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-[#1E3A8A]">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Drop your details and project scope below, and our experts will
              reach out with the right solutions within 24 hours.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-sm sm:text-base"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-sm sm:text-base"
              />
              <textarea
                placeholder="Your Message*"
                rows={4}
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8] text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold py-3 rounded-lg text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="bg-[#F3F4F6] rounded-2xl p-4 sm:p-6 border border-gray-200 h-auto min-h-[280px] sm:min-h-[300px] flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full"
                >
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-700 mb-6 line-clamp-5">
                    “{reviews[currentReview].review}”
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1E3A8A] text-base sm:text-lg">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {reviews[currentReview].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={prevReview}
                className="p-2 bg-white border border-gray-300 rounded-full hover:bg-[#38BDF8] hover:text-white transition"
              >
                <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 bg-white border border-gray-300 rounded-full hover:bg-[#38BDF8] hover:text-white transition"
              >
                <ChevronRight size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
