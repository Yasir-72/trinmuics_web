"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Lightbulb,
  Sparkles,
  Globe,
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
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Strongly typed data structures
  type CultureValue = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
  };

  type TeamStat = {
    icon: LucideIcon;
    number: string;
    label: string;
  };

  type TabContent = {
    title: string;
    description: string;
    highlights: { icon: LucideIcon; text: string }[];
  };

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

  //   const teamStats: TeamStat[] = [
  //     { icon: Users, number: "50+", label: "Expert Team Members" },
  //     { icon: Globe, number: "15+", label: "Countries Represented" },
  //     { icon: Coffee, number: "10K+", label: "Cups of Coffee Daily" },
  //     { icon: Rocket, number: "100%", label: "Passion for Innovation" },
  //   ];

  type TeamMember = {
    name: string;
    role: string;
    image: string; // image path or URL
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Aarav Sharma",
      role: "CEO & Founder",
      image: "/team/aarav.jpg",
    },
    {
      name: "Priya Mehta",
      role: "CTO",
      image: "/team/priya.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Lead Designer",
      image: "/team/rahul.jpg",
    },
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
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black  rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6 "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ED4C22]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#ED4C22]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">
              Our Human Side
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            People &{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Culture
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Behind every line of code and every digital transformation, there's
            a team of passionate{" "}
            <span className="text-orange-400 font-semibold">innovators</span>.
            At Trinumics, our culture thrives on collaboration, curiosity, and
            creativity.
          </p>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-white">
              We believe in{" "}
              <strong className="text-orange-400">empowering our people</strong>{" "}
              as much as we empower our clients—because{" "}
              <strong className="text-orange-400]">
                great solutions come from great teams.
              </strong>
            </p>
          </div>
        </motion.div>

        {/* Team Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#ED4C22]/20 p-6 text-center transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#ED4C22] group-hover:to-orange-500 transition-all duration-500">
                    <IconComponent className="w-6 h-6 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div> */}

        {/* team card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden  bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-[#ED4C22]/30 mb-4 group-hover:scale-110 transition-transform duration-500"
                />

                {/* Name */}
                <h4 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors duration-300">
                  {member.name}
                </h4>

                {/* Role */}
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Left Culture Values */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] "
                  >
                    <div className="relative z-10 flex items-start gap-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Tabs & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Tab Navigation & Content */}
            <div className="flex mb-8 bg-white/5 backdrop-blur-sm border border-white/10  hover:bg-white/10 transition-all duration-500 rounded-2xl p-2">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 relative ${
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-400  hover:bg-white/10 transition-all duration-500"
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  {tabContent[activeTab].title}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>

                <div className="space-y-4">
                  {tabContent[activeTab].highlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 rounded-lg flex items-center justify-center">
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl border border-[#ED4C22]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Become part of a culture that values innovation, growth, and
              making a real impact in the digital world.
            </p>
            <button className="bg-gradient-to-r from-[#ED4C22] to-orange-500 px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl hover:shadow-[#ED4C22]/30 transition-all duration-300 hover:scale-105 group">
              <span className="flex items-center space-x-2">
                <span>Explore Careers</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
