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
    <section className="py-20 bg-white rounded-2xl max-w-screen-2xl mx-auto mt-6">
      <div className="px-6 lg:px-12">
        <div className=" mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">
              Got Questions?{" "}
              <span className="text-[#ED4C22]">We’ve Got Answers.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most frequently asked questions to find clarity about
              our IT services, pricing, and support. Each answer is designed to
              give you complete confidence.
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
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-5 bg-white hover:bg-orange-50 transition"
                  >
                    <span className="font-semibold text-gray-900 text-left text-lg">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="text-[#ED4C22]" />
                    ) : (
                      <ChevronDown className="text-[#ED4C22]" />
                    )}
                  </button>

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
                        <div className="p-5 bg-gradient-to-r from-orange-50 to-white text-gray-700 border-t border-gray-100">
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
                <div className="p-8 bg-[#2B2D2C] rounded-2xl shadow-xl text-white max-w-md w-full">
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
                <div className="flex flex-col items-center justify-center p-12 bg-gradient-to-br from-orange-500 to-black rounded-2xl shadow-lg text-center text-white max-w-md w-full">
                  <HelpCircle className="w-16 h-16 mb-6 text-white opacity-90" />
                  <h3 className="text-2xl font-bold mb-3">Explore Our FAQs</h3>
                  <p className="text-lg text-gray-200">
                    Select a question from the left to view detailed insights
                    here. We make it easy to understand our process, services,
                    and value.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
