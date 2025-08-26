// components/Testimonials.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Olena Mytruk",
    company: "Breverie LLC",
    logo: "/logos/breverie.png", // Add your company logo here
    text: "You are launched continues to IMPRESS THE CLIENT WITH THEIR QUICK TURNAROUND TIME. An agile partner, the team works in sprints to implement the necessary functionalities in time for the product's launch.",
  },
  {
    name: "Guillaume Lawlor",
    company: "Ctrl.money LLC",
    logo: "/logos/ctrl.png",
    text: "I’ve been most impressed by their SPEED OF DELIVERY. The team has been EXCEPTIONALLY RESPONSIVE and provided strong alternatives when components weren’t technically feasible.",
  },
  {
    name: "Samantha Carter",
    company: "TechFlow Inc.",
    logo: "/logos/techflow.png",
    text: "The collaboration was seamless and their deep expertise allowed us to launch faster than expected. Their suggestions added real value to our product.",
  },
  {
    name: "David Lin",
    company: "InnovateX",
    logo: "/logos/innovatex.png",
    text: "They not only met deadlines but exceeded expectations with their creativity and problem-solving skills.",
  },
  {
    name: "Maya Patel",
    company: "BrightApps",
    logo: "/logos/brightapps.png",
    text: "Their agile process made it easy for us to iterate and improve. I appreciated their attention to detail and quick responses.",
  },
  {
    name: "John Reynolds",
    company: "NextGen Systems",
    logo: "/logos/nextgen.png",
    text: "The professionalism and commitment of the team was outstanding. They truly care about delivering success.",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = page * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
        <section className="py-16 bg-white rounded-xl mt-3">

    <div className="bg-white text-black py-12 px-6 rounded-lg">
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {visibleTestimonials.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border shadow-md bg-purple-50"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.logo}
                  alt={`${t.company} logo`}
                  className="w-10 h-10 rounded-md object-contain"
                />
                <div>
                  <h3 className="text-lg font-bold text-purple-700">{t.name}</h3>
                  <p className="text-sm text-gray-600">{t.company}</p>
                </div>
              </div>
              <p className="text-base">{t.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          <ArrowLeft size={20} />
        </button>
        <span className="text-sm font-semibold">
          {page + 1} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
    </section>
  );
}
