"use client";

import { motion } from "framer-motion";

import React from "react";

export default function page() {
  return (
    <>
      <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden ">
        <motion.div
          className=" z-10 max-w-2xl text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Technologies Page
          </h2>
          <p className="text-gray-300 text-lg lg:text-3xl">
            🚧 This page is currently under construction. Please check back
            soon!
          </p>
        </motion.div>
      </section>
    </>
  );
}
