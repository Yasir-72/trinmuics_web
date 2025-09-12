"use client";

import { Code2, Palette, Brain, Building2, Layers, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Next-Gen App & Web Development",
    desc: "Building custom mobile apps, websites, and enterprise platforms that are secure, scalable, and future-ready.",
    Icon: Code2,
  },
  {
    title: "UI/UX Design & Digital Branding",
    desc: "Crafting seamless user experiences and strong brand identities that connect businesses with their audience.",
    Icon: Palette,
  },
  {
    title: "AI & Data Intelligence",
    desc: "Empowering businesses with AI integration, ML models, and advanced data analytics for smarter decision-making.",
    Icon: Brain,
  },
  {
    title: "CRM & CMS Solutions",
    desc: "Implementing and customizing CRM & CMS platforms (Salesforce, HubSpot, WordPress, Shopify, etc.) to optimize operations.",
    Icon: Building2,
  },
  {
    title: "SaaS Product Development & Maintenance",
    desc: "End-to-end SaaS design, development, and lifecycle management with continuous innovation and cloud scalability.",
    Icon: Layers,
  },
  {
    title: "Cloud, IT Infrastructure & Cybersecurity",
    desc: "Delivering secure cloud migration, IT infrastructure management, and enterprise-grade cybersecurity to keep you protected.",
    Icon: Cloud,
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full py-20 bg-[#2B2D2C] text-white rounded-xl mt-6 max-w-screen-2xl mx-auto">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Core IT <span className="text-[#ED4C22]">Services</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Solutions engineered to scale with your business and deliver measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, desc, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white text-[#2B2D2C] border border-gray-200 shadow-md 
              transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center"
            >
              <div className="p-7 flex flex-col items-center">
                {/* Icon */}
                <span
                  className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#ED4C22]/10 
                  ring-1 ring-[#ED4C22]/30 mb-5 transition-all duration-300 group-hover:bg-[#ED4C22] group-hover:ring-[#ED4C22]/50 group-hover:scale-110"
                >
                  <Icon className="h-7 w-7 text-[#ED4C22] group-hover:text-white transition-colors duration-300" />
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug mb-3 transition-colors duration-300 group-hover:text-[#ED4C22]">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {desc}
                </p>
              </div>

              {/* Hover Accent Border */}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#ED4C22] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
