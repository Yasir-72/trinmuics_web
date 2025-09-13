// components/FAQSection.tsx
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question:
      "How do we get started, and what do you need from us to begin the website design process?",
    answer:
      "We begin by understanding your requirements, goals, and preferred design style. Once we gather the details, we create a project plan tailored to your startup’s needs.",
    image: "/images/faq-start.png",
  },
  {
    question:
      "What makes web design for startups different from other website design services?",
    answer:
      "Startup web design focuses on fast, scalable, and cost-effective solutions tailored for growth, lean budgets, and quick market launch.",
    image: "/images/faq-startup.png",
  },
  {
    question: "What makes your web design services suitable for startups?",
    answer:
      "We specialize in lean MVP development, agile design, and rapid delivery while maintaining professional polish and long-term scalability.",
    image: "/images/faq-suitable.png",
  },
  {
    question:
      "How do you make a startup website match a startup's brand and vision?",
    answer:
      "We work closely with your brand guidelines, vision, and mission to ensure the website reflects your identity while engaging your target audience.",
    image: "/images/faq-brand.png",
  },
  {
    question:
      "Can you help clients with branding and logo design as part of the web design process?",
    answer:
      "Yes! Our creative team can design logos, branding assets, and UI/UX that align with your business identity and market positioning.",
    image: "/images/faq-branding.png",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white mt-6  rounded-xl max-w-screen-2xl mx-auto">
      <div className="px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">
              Got Questions?{" "}
              <span className="text-orange-500">We’ve Got Answers.</span>
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most frequently asked questions to find clarity about
              our IT services, pricing, and support. Each answer is designed to
              give you complete confidence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
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
                      <ChevronUp className="text-orange-500" />
                    ) : (
                      <ChevronDown className="text-orange-500" />
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

            {/* Right - Dynamic Image */}
            <motion.div
              key={openIndex} // re-render image when index changes
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              {openIndex !== null && (
                <Image
                  src={faqs[openIndex].image}
                  alt={faqs[openIndex].question}
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-orange-500"
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
