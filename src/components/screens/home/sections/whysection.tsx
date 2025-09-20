// src/components/screens/home/sections/WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, Headphones, HandFist } from "lucide-react";

const features = [
  {
    title: "Secure & Reliable",
    desc: "Top-tier security and reliability, keeping your data and operations safeguarded 24/7.",
    Icon: ShieldCheck,
  },
  {
    title: "Rapid Deployment",
    desc: "Launch quickly with our streamlined setup and agile delivery processes.",
    Icon: Zap,
  },
  {
    title: "Tailored Strategies",
    desc: "Customized solutions and roadmaps aligned with your unique business goals.",
    Icon: Target,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our expert team is always available, ensuring seamless operations and peace of mind.",
    Icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-white rounded-3xl overflow-hidden max-w-screen-2xl mx-auto mt-6">
      {/* Background Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(237,76,34,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(237,76,34,0.06)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 text-center">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <HandFist className="w-4 h-4" />
          Our Solutions
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Why{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Choose Us
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          As your strategic IT partner, we deliver secure, scalable, and
          innovative solutions that empower your business to thrive in the
          digital era.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-white rounded-3xl p-8 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105"
            >
              
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 group-hover:from-[#ED4C22] group-hover:to-orange-500 transition-all duration-300">
                <feature.Icon className="w-8 h-8 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#ED4C22] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {feature.desc}
              </p>

              {/* Accent Border */}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#ED4C22] transition-all duration-500 group-hover:w-full"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
