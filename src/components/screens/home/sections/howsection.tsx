"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Settings, Code, Cloud, Shield } from "lucide-react";

const hardwareSteps = [
  {
    title: "Consultation & Assessment",
    desc: "We analyze your infrastructure needs and evaluate existing hardware setups.",
    Icon: Cpu,
  },
  {
    title: "Hardware Setup",
    desc: "Servers, networking devices, and storage are installed and configured.",
    Icon: Server,
  },
  {
    title: "Optimization & Maintenance",
    desc: "We fine-tune systems and ensure ongoing hardware reliability.",
    Icon: Settings,
  },
];

const softwareSteps = [
  {
    title: "Requirement Analysis",
    desc: "We understand your workflow and define the right software strategy.",
    Icon: Code,
  },
  {
    title: "Development & Deployment",
    desc: "Applications and cloud solutions are built, tested, and deployed securely.",
    Icon: Cloud,
  },
  {
    title: "Monitoring & Security",
    desc: "We provide continuous monitoring, updates, and strong security practices.",
    Icon: Shield,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl mt-3 max-w-screen-2xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hardware Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">🔧 Hardware Solutions</h3>
            <div className="space-y-6">
              {hardwareSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  {/* Icon with pulse animation */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-purple-600 shadow-lg flex-shrink-0"
                  >
                    <step.Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Content */}
                  <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 w-full">
                    <h4 className="text-base font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Software Solutions */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">💻 Software Solutions</h3>
            <div className="space-y-6">
              {softwareSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  {/* Icon with pulse animation */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-purple-600 shadow-lg flex-shrink-0"
                  >
                    <step.Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Content */}
                  <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 w-full">
                    <h4 className="text-base font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
