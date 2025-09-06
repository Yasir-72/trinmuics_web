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
    <section className="bg-gray-100 py-16 px-6">
      {/* Animate outer container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white rounded-3xl p-10 border border-gray-200 shadow-xl"
      >
        {/* Grid container with vertical centering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Left Side Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="bg-[#F3F4F6] rounded-2xl p-8 border border-gray-200 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-gray-600 mb-6">
              Drop your details and project scope below, and our experts will
              reach out with the right solutions within 24 hours.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              />
              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              />
              <textarea
                placeholder="Your Message*"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#1E3A8A] text-white font-semibold py-3 rounded-lg"
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
            className="bg-[#F3F4F6] rounded-2xl p-8 border border-gray-200 h-[320px] flex flex-col justify-between shadow-md"
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
                  <p className="text-lg font-medium leading-relaxed text-gray-700 mb-6 line-clamp-4">
                    “{reviews[currentReview].review}”
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1E3A8A] text-lg">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
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
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextReview}
                className="p-2 bg-white border border-gray-300 rounded-full hover:bg-[#38BDF8] hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
