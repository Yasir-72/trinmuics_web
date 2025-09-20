"use client";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-Commerce Website",
      description:
        "Built a scalable e-commerce platform with real-time inventory, secure payments, and a modern UI/UX that improved customer engagement and boosted sales conversions.",
      technologies: "Next.js, Tailwind CSS, Node.js, MongoDB",
      image: "/images/software-hardware.png",
      stats: "150% Sales Boost",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed a sleek personal portfolio with animations, responsive layouts, and SEO optimization — helping clients showcase their skills and land more opportunities.",
      technologies: "Next.js, Tailwind CSS, Framer Motion",
      image: "/images/Aboutus.jpg",
      stats: "300% More Leads",
    },
    {
      title: "SaaS Dashboard",
      description:
        "Developed a SaaS dashboard for analytics and reporting with authentication, role management, and real-time charts — empowering businesses with actionable insights.",
      technologies: "React, Next.js, Tailwind CSS, Firebase",
      image: "/images/software-hardware.png",
      stats: "90% Time Saved",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden max-w-screen-2xl mx-auto rounded-2xl mt-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,76,34,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,76,34,0.08)_0%,transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-orange-500/30">
            <Rocket className="w-5 h-5 text-orange-400" />
            <span className="text-orange-300 font-medium">Our Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Case{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Studies
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent projects where we combined{" "}
            <span className="text-[#ED4C22] font-semibold">creativity</span>,{" "}
            <span className="text-[#ED4C22] font-semibold">technology</span>,
            and <span className="text-[#ED4C22] font-semibold">strategy</span>{" "}
            to deliver results that matter.
          </p>
        </div>

        {/* Enhanced Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map(
            ({ title, description, technologies, image, stats }, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] ${
                  i % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
                }`}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/90 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 p-[2px] group-hover:from-[#ED4C22]/40 group-hover:to-[#ED4C22]/40 transition-all duration-500">
                  <div className="w-full h-full bg-gray-900/90 rounded-3xl"></div>
                </div>

                <div className="relative p-10 md:p-12">
                  <div
                    className={`grid gap-12 md:grid-cols-2 items-center ${
                      i % 2 === 1 ? "md:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Enhanced Text Content */}
                    <div
                      className={`space-y-6 ${
                        i % 2 === 1 ? "md:col-start-2" : ""
                      }`}
                    >
                      {/* Project Number */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#ED4C22]/20 rounded-full border-2 border-[#ED4C22]/30">
                          <span className="text-lg font-bold text-[#ED4C22]">
                            0{i + 1}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#ED4C22]/30 to-transparent"></div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#ED4C22] transition-colors duration-300">
                        {title}
                      </h3>

                      <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {description}
                      </p>

                      {/* Stats Badge */}
                      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ED4C22] to-orange-500 px-6 py-3 rounded-full shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white font-semibold">
                          {stats}
                        </span>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.split(", ").map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg border border-gray-600 hover:border-[#ED4C22]/50 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#ED4C22] to-orange-500 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-[#ED4C22]/25 transition-all duration-300 hover:scale-105">
                        <span className="relative z-10">View Project</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ED4C22] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-ping group-hover/btn:animate-none"></div>
                      </button>
                    </div>

                    {/* Enhanced Image */}
                    <div
                      className={`relative ${
                        i % 2 === 1 ? "md:col-start-1" : ""
                      }`}
                    >
                      <div className="relative overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                        {/* Image Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ED4C22]/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-2xl">
                          <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={300}
                            className="w-full h-64 md:h-80 object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                          />

                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                          {/* Floating Elements */}
                          <div className="absolute top-4 right-4 w-3 h-3 bg-[#ED4C22] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#ED4C22]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Enhanced Call to Action */}
        {/* <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl border border-[#ED4C22]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Let's work together to bring your vision to life with cutting-edge
              technology and creative solutions.
            </p>
            <button className="bg-gradient-to-r from-[#ED4C22] to-orange-500 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-[#ED4C22]/30 transition-all duration-300 hover:scale-105 group">
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
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
        </div> */}
      </div>
    </section>
  );
}
