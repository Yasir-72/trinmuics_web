// components/Testimonials.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
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
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () =>
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const handleNext = () =>
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  const startIndex = page * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="py-20 px-4 md:px-12 max-w-screen-2xl mx-auto bg-white rounded-2xl mt-6">
      <h2 className="text-4xl font-bold text-center text-[#2B2D2C] mb-12">
        What Our <span className="text-[#ED4C22]">Clients Say</span>
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-10"
          >
            {visibleTestimonials.map((t) => (
              <div
                key={t.name}
                className="relative p-8 rounded-2xl shadow-lg bg-gradient-to-br 
                           from-[#2B2D2C] to-[#1a1b1a] text-white border border-[#ED4C22]/40
                           hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 text-[#ED4C22]  w-10 h-10" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-2">
                    <Image
                      src={t.logo}
                      alt={`${t.company} logo`}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{t.name}</h3>
                    <p className="text-sm text-gray-300">{t.company}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-lg leading-relaxed mb-4">{t.text}</p>

                {/* Rating */}
                <div className="flex gap-1 text-[#ED4C22]">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-[#ED4C22] text-white hover:bg-[#c93d19] transition"
        >
          <ArrowLeft size={22} />
        </button>
        <span className="text-lg font-semibold text-[#2B2D2C]">
          {page + 1} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-[#ED4C22] text-white hover:bg-[#c93d19] transition"
        >
          <ArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}
