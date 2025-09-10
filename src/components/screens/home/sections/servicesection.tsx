"use client";

import { Code2, Palette, Brain, Building2, Layers, Cloud } from "lucide-react";

const services = [
  {
    title: "Next-Gen App & Web Development",
    desc: "Building custom mobile apps, websites, and enterprise web platforms that are secure, scalable, and future-ready.",
    Icon: Code2,
  },
  {
    title: "UI/UX Design & Digital Branding",
    desc: "Crafting seamless user experiences, strong brand identities, and digital strategies that connect businesses with their audience.",
    Icon: Palette,
  },
  {
    title: "AI & Data Intelligence",
    desc: "Empowering businesses with AI integration, machine learning models, and advanced data analytics for smarter decision-making.",
    Icon: Brain,
  },
  {
    title: "CRM & CMS Solutions",
    desc: "Implementing and customizing CRM and CMS platforms (Salesforce, HubSpot, WordPress, Shopify, etc.) to optimize business operations.",
    Icon: Building2,
  },
  {
    title: "SaaS Product Development & Maintenance",
    desc: "End-to-end SaaS design, development, and lifecycle management with continuous innovation and cloud scalability.",
    Icon: Layers,
  },
  {
    title: "Cloud, IT Infrastructure & Cybersecurity",
    desc: "Delivering secure cloud migration, IT infrastructure management, and enterprise-grade cybersecurity to keep your business protected.",
    Icon: Cloud,
  },
];

export default function ServiceSection() {
  return (
    <section className="w-full py-16 md:py-20 bg-white text-[#2B2D2C] rounded-xl mt-3 max-w-screen-2xl mx-auto">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#2B2D2C]">
            Our Core IT <span className="text-[#ED4C22]">Services</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
            Solutions engineered to scale with your business and deliver
            measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-md transition-all duration-300 hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
            >
              <div className="p-6 md:p-7">
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-orange-50 ring-1 ring-orange-300 transition-all duration-300 group-hover:bg-orange-100 group-hover:ring-orange-400 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-[#ED4C22] transition-colors duration-300 group-hover:text-[#ED4C22]" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-[#2B2D2C] transition-colors duration-300 group-hover:text-[#ED4C22]">
                    {title}
                  </h3>
                </div>
                {/* Description */}
                <p className="mt-3.5 text-sm leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-800">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
