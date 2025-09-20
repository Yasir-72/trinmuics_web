"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layout, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover & Plan",
    desc: "We start by understanding your vision, defining clear goals, and setting a solid foundation for your project.",
    Icon: Lightbulb,
    deliverables: [
      "Requirement Analysis",
      "Project Roadmap",
      "Technical Feasibility",
      "Resource Planning",
    ],
  },
  {
    title: "Design & Prototype",
    desc: "Our designers craft intuitive experiences and interactive prototypes to validate your product early.",
    Icon: Layout,
    deliverables: [
      "Wireframes & UI Mockups",
      "Interactive Prototypes",
      "Design System",
      "User Feedback Session",
    ],
  },
  {
    title: "Build & Test",
    desc: "We develop scalable features, integrate APIs, and perform rigorous testing to ensure performance and security.",
    Icon: Code,
    deliverables: [
      "Agile Development Sprints",
      "Code Reviews",
      "Automated & Manual Testing",
      "Bug Fixes & Optimization",
    ],
  },
  {
    title: "Launch & Grow",
    desc: "Once live, we monitor, optimize, and continuously improve your product for long-term success.",
    Icon: Rocket,
    deliverables: [
      "Deployment & Monitoring",
      "Performance Reports",
      "Feature Updates",
      "Ongoing Support",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-3xl mt-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,76,34,0.08)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,76,34,0.06)_0%,transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* main section */}
      <div className="px-4 md:px-12 lg:px-16 mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#ED4C22] bg-[#ED4C22]/10 px-4 py-2 rounded-full border border-[#ED4C22]/20 mb-4 inline-block">
              🚀 Our Process
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            How It{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Works
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven{" "}
            <span className="text-[#ED4C22] font-semibold">4-step process</span>{" "}
            ensures your project is delivered on time, within budget, and
            exceeds expectations.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-[#ED4C22] text-white shadow-2xl mb-8">
                <step.Icon className="w-12 h-12" />
              </div>

              {/* Card */}

              <div
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-white/10 text-white rounded-3xl hover:bg-white/10  hover:shadow-2xl hover:shadow-orange-500/20 py-12 px-5 w-full md:w-4/5 lg:w-2/3 group relative overflow-hidden  transition-all duration-700 hover:scale-[1.02] ${
                  idx % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <h4 className="text-3xl text-white font-black group-hover:text-orange-300 transition-colors duration-300 mb-6">
                  {step.title}
                </h4>
                <p className="text-xl text-gray-300 mb-8">{step.desc}</p>

                {/* Deliverables list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-200 text-left">
                  {step.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-[#ED4C22]/20 rounded-xl border border-[#ED4C22]/10 hover:bg-[#ED4C22]/10 hover:border-[#ED4C22]/30 transition-all duration-300"
                    >
                      <div className="w-2.5 h-2.5 bg-[#ED4C22] rounded-full flex-shrink-0"></div>
                      <span className="text-white text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-20 bg-[#ED4C22]/60"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
