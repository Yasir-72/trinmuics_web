"use client"; 
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Heroaboutus() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden rounded-2xl">
      {/* Background Image */}
      <Image
        src="/images/Aboutus.jpg"
        alt="About Us Background"
        fill
        className="object-cover brightness-75" // darkens background
        priority
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative Blob Shape */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#38BDF8] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-[#38BDF8]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          className="text-2xl font-semibold mb-3 text-white"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Shaping the Future of Technology, Today
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          className="text-lg leading-relaxed text-gray-200"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          At <span className="font-semibold text-[#2563EB]">Trinmuics</span>, we
          blend innovation and expertise to build digital solutions that help
          businesses grow, adapt, and thrive in a fast-changing world.
        </motion.p>
      </div>
    </section>
  );
}
