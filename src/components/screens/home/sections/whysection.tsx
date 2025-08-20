"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Target, Headphones } from "lucide-react";

const features = [
  {
    title: "Secure & Reliable",
    desc: "We ensure top-level security and reliability for your business.",
    Icon: ShieldCheck,
  },
  {
    title: "Fast Setup",
    desc: "Get started quickly with minimal setup required.",
    Icon: Zap,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored strategies to meet your unique needs.",
    Icon: Target,
  },
  {
    title: "24/7 Support",
    desc: "Always available whenever you need us.",
    Icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white rounded-xl mt-3">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Choose Us
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-50 hover:bg-black p-6 rounded-2xl shadow 
                 transition-transform duration-300 hover:-translate-y-6 hover:shadow-2xl"
            >
              <feature.Icon className="mx-auto mb-4 h-12 w-12 text-purple-600   animate-bounce" />

              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-2 group-hover:text-gray-200">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
