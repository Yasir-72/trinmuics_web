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
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-100 hover:border-gray-300 rounded-2xl mt-6 max-w-screen-2xl mx-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Why <span className="text-[#ED4C22]">Choose Us</span>
        </h2>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          As your trusted IT partner, we deliver scalable, secure, and
          innovative solutions that empower your business to grow in the digital
          world.
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-2xl shadow-md border 
                transition-all duration-300  hover:shadow-2xl hover:bg-[#ED4C22]"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#ED4C22]/10 group-hover:bg-white mb-6 transition-colors duration-300">
                <feature.Icon className="h-8 w-8 text-[#ED4C22] group-hover:text-[#2B2D2C]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#2B2D2C] mb-2 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
