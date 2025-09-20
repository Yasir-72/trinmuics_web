"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Olena Mytruk",
    company: "Breverie LLC",
    logo: "/logos/breverie.png",
    text: "You Are Launched continues to IMPRESS with their QUICK TURNAROUND TIME. The team works in sprints to deliver critical functionalities right in time for launch, exceeding expectations.",
  },
  {
    name: "Guillaume Lawlor",
    company: "Ctrl.money LLC",
    logo: "/logos/ctrl.png",
    text: "Their SPEED OF DELIVERY is unmatched. Exceptionally responsive, always ready with strong alternatives when challenges appear. A true agile partner.",
  },
  {
    name: "Samantha Carter",
    company: "TechFlow Inc.",
    logo: "/logos/techflow.png",
    text: "The collaboration was seamless. Their deep expertise and insightful suggestions accelerated our launch and brought real value to our product.",
  },
  {
    name: "David Lin",
    company: "InnovateX",
    logo: "/logos/innovatex.png",
    text: "They consistently EXCEEDED expectations. Creative, reliable, and always meeting deadlines with polished solutions.",
  },
  {
    name: "Maya Patel",
    company: "BrightApps",
    logo: "/logos/brightapps.png",
    text: "Their agile process and quick responses made iteration effortless. Attention to detail was outstanding, making us feel supported every step.",
  },
  {
    name: "John Reynolds",
    company: "NextGen Systems",
    logo: "/logos/nextgen.png",
    text: "Professionalism and commitment at its peak. They genuinely care about delivering client success and it shows.",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const startIndex = page * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 max-w-screen-2xl mx-auto rounded-3xl mt-6 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,76,34,0.06)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,76,34,0.04)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#ED4C22] bg-[#ED4C22]/10 px-4 py-2 rounded-full border border-[#ED4C22]/20 mb-4 inline-block">
              💬 Client Stories
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            What Our{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Clients Say</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't take our word for it. Here's what our{" "}
            <span className="text-[#ED4C22] font-semibold">
              satisfied clients
            </span>{" "}
            have to say about working with us.
          </p>
        </div>

        {/* Enhanced Testimonials Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              }}
              exit={{
                opacity: 0,
                y: -50,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              className="grid md:grid-cols-2 gap-8"
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.name}-${page}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: idx * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black/95 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/8 via-transparent to-[#ED4C22]/15 opacity-100"></div>

                  {/* Enhanced Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ED4C22]/30 via-orange-400/20 to-[#ED4C22]/30 p-[3px] group-hover:from-[#ED4C22]/50 group-hover:to-[#ED4C22]/50 transition-all duration-500">
                    <div className="w-full h-full bg-gray-900/95 rounded-3xl"></div>
                  </div>

                  {/* Outer Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 p-8">
                    {/* Enhanced Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-[#ED4C22]/30">
                        <Quote className="w-6 h-6 text-[#ED4C22]" />
                      </div>
                    </div>

                    {/* Enhanced Header */}
                    <div className="flex items-center gap-4 mb-8">
                      {/* Logo Container */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-3 shadow-lg">
                          <Image
                            src={testimonial.logo}
                            alt={`${testimonial.company} logo`}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        {/* Logo Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ED4C22]/20 to-orange-500/20 rounded-2xl blur-lg opacity-50"></div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#ED4C22] transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Text */}
                    <p className="text-lg leading-relaxed text-gray-300 mb-8 group-hover:text-gray-200 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>

                    {/* Enhanced Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-[#ED4C22] fill-current transition-all duration-300 group-hover:scale-110"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Number */}
                      <div className="text-sm text-[#ED4C22] font-semibold bg-[#ED4C22]/10 px-3 py-1 rounded-full">
                        #
                        {startIndex +
                          visibleTestimonials.indexOf(testimonial) +
                          1}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#ED4C22]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                    <div className="absolute top-20 right-8 w-2 h-2 bg-orange-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex items-center justify-center gap-8 mt-16">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#ED4C22] to-orange-500 text-white shadow-2xl hover:shadow-[#ED4C22]/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-[#ED4C22] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </button>

          {/* Page Indicator */}
          <div className="flex items-center gap-4">
            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating && idx !== page) {
                      setIsAnimating(true);
                      setPage(idx);
                      setTimeout(() => setIsAnimating(false), 800);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === page
                      ? "bg-[#ED4C22] scale-125"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-[#ED4C22] to-orange-500 text-white shadow-2xl hover:shadow-[#ED4C22]/30 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-[#ED4C22] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gradient-to-br from-gray-800  to-gray-900 rounded-2xl border border-[#ED4C22]/20 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-[#ED4C22] mb-2">
                {stat.number}
              </div>
              <div className="text-white font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
