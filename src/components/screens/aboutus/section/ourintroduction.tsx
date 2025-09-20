"use client";

import React from "react";
import { Target, Zap, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const OurIntroduction = () => {
  const visionPoints = [
    {
      icon: Target,
      text: "Drive Digital Excellence",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      text: "Embrace Innovation",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Heart,
      text: "Deliver Extraordinary Experiences",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-8 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8 text-center">
              <Target className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">
                OUR INTRODUCTION
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight text-center lg:text-left">
            Your Technology{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Partner
            </span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300 mb-12 text-center lg:text-left">
            <p className="text-xl leading-relaxed">
              At <strong className="text-orange-400">Trinumics</strong>, we are
              more than just an IT services provider—we are{" "}
              <span className="text-white font-semibold">
                your technology partner.
              </span>
            </p>

            <p>
              Founded with a vision to drive digital excellence, we help
              businesses of all sizes embrace innovation, scale with confidence,
              and deliver extraordinary customer experiences.
            </p>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6">
              <p className="text-xl font-semibold text-white">
                Our mission is simple:{" "}
                <span className="text-orange-400">
                  turning complex challenges into seamless, intelligent
                  solutions.
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center gap-3"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right: Vision Points */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="space-y-8">
            {visionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {point.text}
                      </h3>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${point.color} rounded-full`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
