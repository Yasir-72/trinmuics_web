"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Play,
  Building,
  Globe,
  Target,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const floatingElements = [
  { icon: Sparkles, delay: 0, x: "10%", y: "20%" },
  { icon: Zap, delay: 0.5, x: "80%", y: "15%" },
  { icon: Shield, delay: 1, x: "85%", y: "70%" },
  { icon: TrendingUp, delay: 1.5, x: "15%", y: "80%" },
];

const stats = [
  { number: "500+", label: "Projects Delivered", icon: Building },
  { number: "50+", label: "Global Clients", icon: Globe },
  { number: "99%", label: "Client Satisfaction", icon: Award },
  { number: "24/7", label: "Support Available", icon: Users },
];

export default function TrinumicsWhoWeAre() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-8 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-8 sm:right-10 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((el, i) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-orange-400/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: el.delay, duration: 0.8 }}
            style={{ left: el.x, top: el.y }}
          >
            <Icon className="w-full h-full animate-bounce" />
          </motion.div>
        );
      })}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-16">
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
              <span className="text-orange-300 font-semibold tracking-wide">
                WHO WE ARE
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              The Story Behind{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Trinumics
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
              <p className="text-xl">
                At <strong className="text-orange-400">Trinumics</strong>, we
                are more than just an IT company — we're{" "}
                <span className="text-white font-semibold">
                  innovators, problem-solvers, and partners in growth.
                </span>
              </p>
              <p>
                Founded with a mission to{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                  bridge businesses and technology seamlessly
                </span>
                , we've evolved into a trusted name in delivering{" "}
                <strong className="text-white">
                  secure, scalable, and future-ready digital solutions.
                </strong>
              </p>
              <p>
                From startups to global enterprises, our journey has been built
                on{" "}
                <span className="text-orange-400 font-semibold">
                  excellence, trust, and impact
                </span>{" "}
                — helping clients navigate the digital era with confidence.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={i}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 mb-3 backdrop-blur-sm border border-orange-500/30">
                        <Icon className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
              Discover Our Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => setPlayVideo(true)}
              className="group bg-transparent border-2 border-orange-500/50 text-orange-400 px-10 py-5 rounded-2xl font-semibold hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <Play className="w-6 h-6" />
              Watch Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
