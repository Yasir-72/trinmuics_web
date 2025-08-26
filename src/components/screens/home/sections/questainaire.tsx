// components/FAQSection.tsx
"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do we get started, and what do you need from us to begin the website design process?",
    answer:
      "We begin by understanding your requirements, goals, and preferred design style. Once we gather the details, we create a project plan.",
  },
  {
    question: "What makes web design for startups different from other website design services?",
    answer:
      "Startup web design focuses on fast, scalable, and cost-effective solutions tailored for growth and quick market launch.",
  },
  {
    question: "What makes your web design services suitable for startups?",
    answer:
      "We specialize in lean MVP development, agile design, and quick delivery while maintaining professional quality.",
  },
  {
    question: "How do you make a startup website match a startup's brand and vision?",
    answer:
      "We work closely with your brand guidelines, vision, and mission, ensuring the website reflects your identity and goals.",
  },
  {
    question: "Can you help clients with branding and logo design as part of the web design process?",
    answer:
      "Yes! Our design team can assist with logo creation, branding assets, and UI/UX that align with your business identity.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white rounded-xl mt-3">
      <div className="bg-white text-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading + Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Got Questions? We’ve Got Answers.
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our most frequently asked questions to quickly find the
              information you need about our IT services, pricing, and support.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side - FAQ Accordion */}
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 bg-purple-50 hover:bg-purple-100 transition"
                  >
                    <span className="font-semibold text-left">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="text-purple-600" />
                    ) : (
                      <ChevronDown className="text-purple-600" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-gray-50 text-gray-700">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                src="/images/software-hardware.png" // place your image inside /public/images
                alt="Software and Hardware"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
