"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question:
      "How do we get started, and what do you need from us to begin the website design process?",
    answer:
      "We begin by understanding your requirements, goals, and preferred design style. Once we gather the details, we create a project plan tailored to your startup’s needs.",
    image: "/images/start-process.png",
  },
  {
    question:
      "What makes web design for startups different from other website design services?",
    answer:
      "Startup web design focuses on fast, scalable, and cost-effective solutions tailored for growth, lean budgets, and quick market launch.",
    image: "/images/startup-web.png",
  },
  {
    question: "What makes your web design services suitable for startups?",
    answer:
      "We specialize in lean MVP development, agile design, and rapid delivery while maintaining professional polish and long-term scalability.",
    image: "/images/mvp-solution.png",
  },
  {
    question:
      "How do you make a startup website match a startup's brand and vision?",
    answer:
      "We work closely with your brand guidelines, vision, and mission to ensure the website reflects your identity while engaging your target audience.",
    image: "/images/brand-vision.png",
  },
  {
    question:
      "Can you help clients with branding and logo design as part of the web design process?",
    answer:
      "Yes! Our creative team can design logos, branding assets, and UI/UX that align with your business identity and market positioning.",
    image: "/images/branding.png",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-16 bg-white rounded-2xl max-w-screen-2xl mx-auto mt-6 ">
      <div className="px-4 md:px-12 lg:px-16">
        <div className=" mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-[#ED4C22] bg-[#ED4C22]/10 rounded-full border border-[#ED4C22]/20 mb-4">
              ❓ FAQs
            </span>
            <h2 className="text-5xl font-bla text-gray-900 mb-6">
              Got Questions?{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  We’ve Got Answers.
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our most common questions to learn about our process,
              pricing, and support—so you can feel confident every step of the
              way.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left - Accordion */}
            <div>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`mb-5 border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                    openIndex === index
                      ? "border-orange-500 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  {/* Header button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center gap-4 p-5  bg-gradient-to-br from-gray-900 via-gray-800 to-black transition"
                  >
                    {/* Question text */}
                    <span className="font-semibold text-white text-left text-lg flex-1">
                      {faq.question}
                    </span>

                    {/* Icon wrapper */}
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#ED4C22]/15 to-orange-500/15 border border-[#ED4C22]/30">
                      {openIndex === index ? (
                        <ChevronUp
                          className="text-[#ED4C22]"
                          size={22}
                          strokeWidth={3}
                        />
                      ) : (
                        <ChevronDown
                          className="text-[#ED4C22]"
                          size={22}
                          strokeWidth={3}
                        />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5  bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 border-t border-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            {/* Right - Answer or Placeholder */}
            <motion.div
              key={openIndex !== null ? openIndex : "default"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center "
            >
              {openIndex !== null ? (
                <div className="p-8  bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl text-white max-w-md w-full">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={faqs[openIndex].image}
                      alt={faqs[openIndex].question}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#ED4C22] mb-4">
                    {faqs[openIndex].question}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {faqs[openIndex].answer}
                  </p>
                </div>
              ) : (
                <div className="group relative flex flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg text-center text-white max-w-md w-full overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                  {/* Card Backgrounds */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700/90 via-gray-800/95 to-gray-900/95 backdrop-blur-sm z-0"></div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  {/* Enhanced Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 p-[2px] group-hover:from-[#ED4C22]/40 group-hover:to-orange-500/40 transition-all duration-500 z-0">
                    <div className="w-full h-full bg-gray-800/95 rounded-2xl"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 border border-[#ED4C22]/30 group-hover:from-[#ED4C22] group-hover:to-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mb-6">
                      <HelpCircle className="w-14 h-14 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="text-4xl font-bold mb-3 text-[#ED4C22]">
                      Explore Our FAQs
                    </h3>
                    <p className="text-xl text-gray-200">
                      Select a question from the left to view detailed insights
                      here. We make it easy to understand our process, services,
                      and value.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
