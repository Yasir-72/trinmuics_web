"use client"; 
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Heroaboutus() {
  return (
    <section
      className="
        relative w-full 
        h-[600px] min-h-[600px] 
        sm:h-[80vh] md:h-[100px]
        flex items-center justify-center text-center 
        overflow-hidden rounded-2xl
      "
    >
      {/* Background Image */}
      <Image
        src="/images/Aboutus.jpg"
        alt="About Us Background"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative Blob */}
      <div className="absolute top-10 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-[#38BDF8] rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#38BDF8]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        {/* Subheading */}
        <motion.h3
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-white"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Shaping the Future of Technology, Today
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200"
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
