"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";

const reasons = [
  "High-quality, customized solutions",
  "Dedicated customer support",
  "Affordable and transparent pricing",
  "Proven track record of success",
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function ChooseUsAboutUs() {
  return (
    <section className="py-16 px-4 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
      <div className="max-w-6xl mx-auto p-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold italic mb-6 text-[#38BDF8]"
          >
            Why Choose Us
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#F3F4F6] leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            At <span className="font-semibold text-[#38BDF8]">Trinmuics</span>,
            we are more than just a technology partner. We bring together
            innovation, expertise, and a human-centered approach to help
            businesses grow and adapt in today’s fast-changing world. By
            choosing us, you gain a trusted ally committed to delivering
            scalable, reliable, and impactful solutions that empower your
            success.
          </motion.p>

          {/* Checklist */}
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="text-[#38BDF8] w-6 h-6 flex-shrink-0" />
                <p className="text-lg text-[#F3F4F6]">{reason}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats with Animated Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1E3A8A] p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-[#38BDF8]">
                  <CountUp end={stat.value} duration={2} />
                  {stat.suffix}
                </h3>
                <p className="text-[#F3F4F6] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
