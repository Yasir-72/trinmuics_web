"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layout, Code, Rocket, Check } from "lucide-react";

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
    <section className="py-24 bg-white max-w-screen-2xl rounded-2xl mt-6 mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-20 text-[#2B2D2C]">
          How It <span className="text-[#ED4C22]">Works</span>
        </h2>

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
              <div className="bg-[#2B2D2C] text-white rounded-3xl shadow-2xl py-12 px-5 w-full md:w-4/5 lg:w-2/3">
                <h4 className="text-3xl font-bold mb-6">{step.title}</h4> 
                <p className="text-xl text-gray-300 mb-8">{step.desc}</p>

                {/* Deliverables list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-200 text-left">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {/* Circle with check */}
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ED4C22] shrink-0 mt-1">
                        <Check className="w-5 h-5 text-white" />
                      </span>
                      <span>{item}</span>
                    </li>
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
