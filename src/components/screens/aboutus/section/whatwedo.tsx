"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Cloud, Shield, ArrowRight } from "lucide-react";

export const WhatWeDo = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored applications that perfectly fit your business needs and scale with your growth.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Solutions",
        "API Development",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "AI-Driven Solutions",
      description:
        "Intelligent systems that automate processes and provide actionable insights for better decisions.",
      features: [
        "Machine Learning",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud Transformation",
      description:
        "Seamless migration and optimization strategies that unlock the full potential of cloud computing.",
      features: [
        "Cloud Migration",
        "DevOps Implementation",
        "Scalable Architecture",
        "Cost Optimization",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Secure Digital Infrastructure",
      description:
        "Robust security frameworks that protect your digital assets and ensure compliance.",
      features: [
        "Cybersecurity Audits",
        "Data Protection",
        "Compliance Management",
        "Security Training",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Code className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-semibold">
              CORE EXPERTISE
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What We{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Do Best
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We specialize in custom software development, AI-driven solutions,
            cloud transformation, and secure digital infrastructures. From
            building scalable apps to optimizing enterprise systems, our
            expertise covers the entire digital journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer ${
                  activeService === index ? "ring-2 ring-orange-500/50" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start g::items-start gap-6 mb-6 text-center lg:text-left">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-orange-400 font-medium group-hover:gap-4 transition-all duration-300">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-white mb-4">
              Every solution we craft is tailored to one goal—
            </p>
            <p className="text-xl text-orange-400">
              helping your business grow smarter, faster, and safer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
