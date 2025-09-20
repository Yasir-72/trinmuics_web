"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  Star,
  Quote,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Rocket,
  Heart,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Omer Levi",
    role: "Product Owner at GoodDollar",
    review:
      "The work Trinumics provided has generated an enormous impact. They executed very well, so we were able to launch ahead of schedule with exceptional quality.",
    rating: 5,
    avatar: "OL",
    company: "GoodDollar",
  },
  {
    name: "Sarah Kim",
    role: "CTO at FinTechPro",
    review:
      "Amazing experience! The team was responsive and delivered high-quality results that exceeded expectations. Their technical expertise is unmatched.",
    rating: 5,
    avatar: "SK",
    company: "FinTechPro",
  },
  {
    name: "James Brown",
    role: "Founder at EduSmart",
    review:
      "Their expertise helped us speed up our product launch by months. The innovative solutions they provided transformed our entire business model.",
    rating: 5,
    avatar: "JB",
    company: "EduSmart",
  },
  {
    name: "Emily Davis",
    role: "Project Manager at HealthHub",
    review:
      "The communication was seamless and the final product was exactly what we envisioned. Professional, reliable, and incredibly talented team.",
    rating: 5,
    avatar: "ED",
    company: "HealthHub",
  },
  {
    name: "Michael Chen",
    role: "CEO at StartX",
    review:
      "Professional, dedicated, and results-driven. Will definitely collaborate with them again. They truly understand modern business needs.",
    rating: 5,
    avatar: "MC",
    company: "StartX",
  },
];

const floatingElements = [
  { icon: Sparkles, delay: 0, x: "15%", y: "20%", size: "w-6 h-6" },
  { icon: Rocket, delay: 1000, x: "85%", y: "25%", size: "w-8 h-8" },
  { icon: Heart, delay: 2000, x: "10%", y: "75%", size: "w-5 h-5" },
  { icon: Globe, delay: 1500, x: "90%", y: "80%", size: "w-7 h-7" },
];

export default function ContactForm() {
  const [currentReview, setCurrentReview] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ Auto-rotate reviews (keep this)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }, 2000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-8 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={index}
            className={`${element.size} text-orange-400/30 absolute`}
            style={{ left: element.x, top: element.y }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: element.delay / 1000,
              duration: 1,
              type: "spring",
            }}
          >
            <IconComponent className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <MessageSquare className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className=" bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Business?
            </span>
          </h2>

          <p className=" sm:text-lg text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Drop your details and project scope below, and our experts will
            reach out with the right solutions within 24 hours.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl blur-xl opacity-50" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Let's Start a Conversation
                    </h3>
                    <p className="text-gray-400">
                      We're here to help bring your vision to life
                    </p>
                  </div>
                </div>

                {!isSubmitted ? (
                  <div className="space-y-6">
                    {/* Name Input */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name*"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-white/15"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com*"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-white/15"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567*"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-white/15"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="relative group">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-orange-400 transition-colors duration-300" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and how we can help you succeed...*"
                        rows={5}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300 hover:bg-white/15 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>24h Response</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Free Consultation</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right: Enhanced Reviews Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-50" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Client Success Stories
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">
                        5.0 (100+ reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentReview}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
                      >
                        {/* Quote Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto lg:mx-0">
                          <Quote className="w-6 h-6 text-orange-400" />
                        </div>

                        {/* Review Text */}
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-5 sm:mb-8 font-medium px-2 sm:px-4 lg:px-0">
                          "{reviews[currentReview].review}"
                        </p>

                        {/* Rating */}
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-4 sm:mb-6">
                          {[...Array(reviews[currentReview].rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current"
                                aria-label="star"
                              />
                            )
                          )}
                        </div>

                        {/* Reviewer Info */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start gap-2 sm:gap-4 mb-2">
                          <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-md sm:text-lg font-bold text-white">
                            {reviews[currentReview].avatar}
                          </div>
                          <div className="text-center lg:text-left">
                            <p className="font-semibold text-white text-base">
                              {reviews[currentReview].name}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">
                              {reviews[currentReview].role}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {reviews[currentReview].company}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-6">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={prevReview}
                        aria-label="Previous review"
                        className="w-9 h-9 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextReview}
                        aria-label="Next review"
                        className="w-9 h-9 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex gap-2 justify-center mt-2 sm:mt-0">
                      {reviews.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentReview(index)}
                          aria-label={`Go to review ${index + 1}`}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentReview
                              ? "bg-orange-500 w-5"
                              : "bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
