"use client";
import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Users, Calculator, Headphones } from "lucide-react";

const clients = [
  { name: "Cisco", src: "/Clients/Cisco.png" },
  { name: "Google", src: "/Clients/google.png" },
  { name: "IBM", src: "/Clients/ibm.png" },
  { name: "Waffly", src: "/Clients/waffly.png" },
  { name: "Noviscient", src: "/Clients/noviscient.png" },
];

const features = [
  {
    title: "36 Standards of Quality",
    desc: "We follow 36 rigorous standards across design, development, testing, and delivery to guarantee world-class quality in every project, ensuring nothing is left to chance.",
    Icon: ShieldCheck,
  },
  {
    title: "Top 3% Talent",
    desc: "Our team is handpicked from the top 3% of global talent, bringing unmatched expertise, innovation, and excellence. Every project benefits from skilled minds and proven experience.",
    Icon: Users,
  },
  {
    title: "100% Estimate Accuracy",
    desc: "We deliver projects on time and within budget, with 100% estimation accuracy. No hidden surprises, no delays — only complete transparency and predictable outcomes.",
    Icon: Calculator,
  },
  {
    title: "24/7 Dedicated Support",
    desc: "Our commitment doesn't end at delivery. We provide round-the-clock dedicated support and proactive monitoring to keep your business running smoothly, without interruptions.",
    Icon: Headphones,
  },
];

export default function ClientScroll() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="relative py-20 rounded-3xl mt-6 max-w-screen-2xl mx-auto px-6 md:px-12 overflow-hidden bg-white to-orange-100/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,76,34,0.08)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,76,34,0.06)_0%,transparent_50%)]"></div>

      <div className="relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-sm font-semibold text-[#ED4C22] bg-[#ED4C22]/10 px-4 py-2 rounded-full border border-[#ED4C22]/20 mb-4 inline-block">
              ✨ Our Partners
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Trusted by{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Leading Brands</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ED4C22] to-orange-400 rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've partnered with some of the most{" "}
            <span className="text-[#ED4C22] font-semibold">
              innovative companies
            </span>{" "}
            worldwide, delivering excellence and innovation in every project.
          </p>
        </div>

        {/* Enhanced Scrolling Logos */}
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-scroll gap-8">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="group relative flex-shrink-0 w-52 h-32 flex items-center justify-center rounded-3xl transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black/95 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 p-[2px] group-hover:from-[#ED4C22]/40 group-hover:to-[#ED4C22]/40 transition-all duration-500">
                  <div className="w-full h-full bg-gray-900/95 rounded-3xl"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 p-6">
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={140}
                    height={70}
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Dots */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#ED4C22] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Left Column - Feature Cards */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveFeature(feature)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeFeature.title === feature.title
                    ? "scale-110 rotate-1"
                    : "hover:scale-105 hover:-rotate-1"
                }`}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black/95 backdrop-blur-sm"></div>
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeFeature.title === feature.title
                      ? "bg-gradient-to-br from-[#ED4C22]/15 via-transparent to-[#ED4C22]/25 opacity-100"
                      : "bg-gradient-to-br from-[#ED4C22]/5 via-transparent to-[#ED4C22]/10 opacity-0 group-hover:opacity-100"
                  }`}
                ></div>

                {/* Enhanced Animated Border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r p-[3px] transition-all duration-500 ${
                    activeFeature.title === feature.title
                      ? "from-[#ED4C22]/60 via-orange-400/40 to-[#ED4C22]/60 shadow-lg shadow-[#ED4C22]/20"
                      : "from-[#ED4C22]/20 via-transparent to-[#ED4C22]/20 group-hover:from-[#ED4C22]/40 group-hover:to-[#ED4C22]/40"
                  }`}
                >
                  <div className="w-full h-full bg-gray-900/95 rounded-2xl"></div>
                </div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 ${
                    activeFeature.title === feature.title
                      ? "bg-gradient-to-r from-[#ED4C22]/20 to-orange-500/20 opacity-100"
                      : "bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 opacity-0 group-hover:opacity-100"
                  }`}
                ></div>

                <div className="relative z-10 p-8 text-center">
                  {/* Enhanced Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl transition-all duration-500 ${
                        activeFeature.title === feature.title
                          ? "bg-gradient-to-br from-[#ED4C22] to-orange-500 text-white shadow-2xl shadow-[#ED4C22]/40 scale-110"
                          : "bg-gradient-to-br from-gray-700 to-gray-800 text-[#ED4C22] group-hover:from-[#ED4C22]/20 group-hover:to-orange-500/20 group-hover:scale-105"
                      }`}
                    >
                      <feature.Icon className="w-8 h-8" />
                    </div>

                    {/* Icon Glow */}
                    {activeFeature.title === feature.title && (
                      <div className="absolute inset-0 w-16 h-16 mx-auto bg-[#ED4C22]/20 rounded-2xl blur-xl animate-pulse"></div>
                    )}
                  </div>

                  <h3
                    className={`font-bold text-lg transition-all duration-300 ${
                      activeFeature.title === feature.title
                        ? "text-white"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Enhanced Active Description */}
          <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02]">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black/95 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#ED4C22]/8 via-transparent to-[#ED4C22]/15"></div>

            {/* Enhanced Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ED4C22]/40 via-orange-400/30 to-[#ED4C22]/40 p-[3px]">
              <div className="w-full h-full bg-gray-900/95 rounded-3xl"></div>
            </div>

            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#ED4C22]/15 to-orange-500/15 rounded-3xl blur-2xl"></div>

            <div className="relative z-10 p-10">
              {/* Feature Number */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ED4C22] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {features.findIndex(
                      (f) => f.title === activeFeature.title
                    ) + 1}
                  </span>
                </div>
                <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[#ED4C22]/40 to-transparent"></div>
              </div>

              <h3 className="text-4xl font-bold mb-6 text-[#ED4C22] leading-tight">
                {activeFeature.title}
              </h3>

              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                {activeFeature.desc}
              </p>

              <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#ED4C22] to-orange-500 px-8 py-4 rounded-2xl font-semibold text-white shadow-2xl hover:shadow-[#ED4C22]/30 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ED4C22] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full animate-ping group-hover/btn:animate-none"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
