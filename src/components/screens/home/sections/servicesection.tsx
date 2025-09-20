// src/components/screens/home/sections/ServiceSection.tsx
"use client";
import {
  Code2,
  Palette,
  Brain,
  Building2,
  Layers,
  Cloud,
  TvMinimal,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Next-Gen App & Web Development",
    desc: "Custom mobile apps, websites, and enterprise platforms that are secure, scalable, and future-ready.",
    Icon: Code2,
  },
  {
    title: "UI/UX Design & Digital Branding",
    desc: "Seamless user experiences and strong brand identities that connect your business with its audience.",
    Icon: Palette,
  },
  {
    title: "AI & Data Intelligence",
    desc: "AI integration, ML models, and advanced analytics for smarter, data-driven decision-making.",
    Icon: Brain,
  },
  {
    title: "CRM & CMS Solutions",
    desc: "Tailored Salesforce, HubSpot, WordPress & Shopify implementations to optimize operations.",
    Icon: Building2,
  },
  {
    title: "SaaS Product Development",
    desc: "End-to-end SaaS design, development, and maintenance with cloud scalability and continuous innovation.",
    Icon: Layers,
  },
  {
    title: "Cloud & Cybersecurity",
    desc: "Secure cloud migrations, infrastructure management, and enterprise-grade cybersecurity solutions.",
    Icon: Cloud,
  },
];

export default function ServiceSection() {
  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-white rounded-3xl max-w-screen-2xl mx-auto overflow-hidden mt-6">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(237,76,34,0.08)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(237,76,34,0.06)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TvMinimal className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Core IT{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Solutions engineered to scale with your business and deliver
            measurable impact across every stage of your digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, desc, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#ED4C22]/20 shadow-xl p-8 text-center text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              {/* Icon Container */}
              <span className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#ED4C22]/20 to-orange-500/20 backdrop-blur-sm group-hover:from-[#ED4C22] group-hover:to-orange-500 transition-all duration-300">
                <Icon className="w-8 h-8 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 transition-colors duration-300 group-hover:text-[#ED4C22]">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                {desc}
              </p>

              {/* Accent Border */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#ED4C22] transition-all duration-500 group-hover:w-full"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
