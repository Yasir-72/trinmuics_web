"use client";

import React, { useState } from "react";
import {
  Users,
  Lightbulb,
  Sparkles,
  Coffee,
  Rocket,
  Heart,
  Trophy,
  Target,
  Star,
  Award,
  LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function OurPeopleAndCulture() {
  const [activeTab, setActiveTab] = useState(0);

  // Types
  type CultureValue = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
  };

  type TabContent = {
    title: string;
    description: string;
    highlights: { icon: LucideIcon; text: string }[];
  };

  // Values
  const cultureValues: CultureValue[] = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe great ideas come from diverse minds working together towards common goals.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Curiosity",
      description:
        "Our passion for learning drives us to explore new technologies and innovative solutions.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description:
        "We encourage creative thinking and unique approaches to solve complex challenges.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const teamMembers = [
    { name: "Aarav Sharma", role: "CEO & Founder", image: "/team/aarav.jpg" },
    { name: "Priya Mehta", role: "CTO", image: "/team/priya.jpg" },
    { name: "Rahul Verma", role: "Lead Designer", image: "/team/rahul.jpg" },
    {
      name: "Sneha Iyer",
      role: "Full-Stack Developer",
      image: "/team/sneha.jpg",
    },
  ];

  const tabs = ["Our Culture", "Team Growth", "Work Environment"];

  const tabContent: Record<number, TabContent> = {
    0: {
      title: "Building Tomorrow Together",
      description:
        "Our culture is built on trust, innovation, and mutual respect. We foster an environment where creativity flourishes and every voice matters.",
      highlights: [
        { icon: Trophy, text: "Award-winning workplace culture" },
        { icon: Target, text: "Goal-oriented team dynamics" },
        { icon: Star, text: "Employee satisfaction: 95%" },
      ],
    },
    1: {
      title: "Continuous Learning & Development",
      description:
        "We invest in our people through mentorship programs, skill development workshops, and career advancement opportunities.",
      highlights: [
        { icon: Award, text: "Professional certification support" },
        { icon: Rocket, text: "Career advancement pathways" },
        { icon: Lightbulb, text: "Innovation workshops monthly" },
      ],
    },
    2: {
      title: "Flexible & Modern Workspace",
      description:
        "From hybrid work options to state-of-the-art facilities, we create spaces that inspire productivity and well-being.",
      highlights: [
        { icon: Coffee, text: "Flexible work arrangements" },
        { icon: Users, text: "Collaborative spaces" },
        { icon: Sparkles, text: "Wellness programs" },
      ],
    },
  };

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">
              Our Human Side
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            People &{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Culture
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 text-center"
            >
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-[#ED4C22]/30 mb-4"
                />
                <h4 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values + Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left values */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Our Core Values
            </h3>
            <div className="space-y-6">
              {cultureValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6 text-center sm:text-left">
                      <div
                        className={`w-14 h-14 mx-auto sm:mx-0 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3">
                          {value.title}
                        </h4>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right tabs */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-col sm:flex-row mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 px-4 py-3 text-sm font-medium rounded-xl relative ${
                    activeTab === index
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#ED4C22] to-orange-500 rounded-xl"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center lg:text-left"
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-gray-300 mb-6">
                  {tabContent[activeTab].description}
                </p>
                <div className="space-y-4">
                  {tabContent[activeTab].highlights.map((highlight, i) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 rounded-lg flex items-center justify-center mx-auto sm:mx-0">
                          <IconComponent className="w-4 h-4 text-[#ED4C22]" />
                        </div>
                        <span className="text-gray-300">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
