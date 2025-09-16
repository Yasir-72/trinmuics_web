"use client";

import Image from "next/image";

const whyChooseUs = [
  {
    title: "Access to a Team of Experts",
    description:
      "By partnering with us, you gain direct access to a dedicated professional social app development team. Our developers, designers, and consultants craft secure, user-friendly, and scalable fintech apps tailored to your needs, ensuring a standout product.",
    image: "/images/team-experts.png",
    accent: "orange",
  },
  {
    title: "100% Transparency",
    description:
      "We prioritize open communication, keeping you informed at every stage of development. Through detailed reports, video calls, we ensure your ideas and concerns are addressed, maintaining complete transparency throughout the project.",
    image: "/images/transparency.png",
    accent: "dark",
  },
  {
    title: "Lean Development Process",
    description:
      "Using Lean methodology, we focus on efficiency and adaptability. This approach allows us to deliver high-performance apps quickly while meeting user needs and financial industry standards.",
    image: "/images/lean-process.png",
    accent: "orange",
  },
  {
    title: "End-to-End Support",
    description:
      "From concept to deployment and beyond, our development service provides full lifecycle support. We ensure your social media application meets regulations, performs optimally, and evolves with market demands for lasting success.",
    image: "/images/support.png",
    accent: "dark",
  },
  {
    title: "User Analytics Configuration",
    description:
      "We integrate advanced user analytics to track performance and behaviors, providing insights for data-driven decisions, feature refinement, and enhanced user engagement.",
    image: "/images/analytics.png",
    accent: "orange",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto rounded-2xl mt-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-orange-500 to-red-500 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 blur-3xl"></div>
      </div>

      <div className=" relative z-10">
        {/* Magazine-Style Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
              Excellence Redefined
            </div>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            What Makes{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Trinumics
            </span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Your Perfect Development Partner?
          </h3>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Discover what sets us apart as a trusted app development company,
            delivering secure, scalable, and user-friendly applications that
            drive real results.
          </p>
        </div>

        {/* Magazine-Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Feature Card 1 - Large */}
          <div className="lg:col-span-6 group">
            <div
              className={`h-full p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                whyChooseUs[0].accent === "orange"
                  ? "bg-gradient-to-br from-orange-500 to-red-500 text-white"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex-shrink-0">
                  <Image
                    src={whyChooseUs[0].image}
                    alt={whyChooseUs[0].title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black mb-4 leading-tight">
                    {whyChooseUs[0].title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {whyChooseUs[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 - Medium */}
          <div className="lg:col-span-6 group">
            <div
              className={`h-full p-8 rounded-3xl shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                whyChooseUs[1].accent === "orange"
                  ? "bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200"
                  : "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-100 hover:border-gray-300"
              }`}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl p-3 ${
                    whyChooseUs[1].accent === "orange"
                      ? "bg-gradient-to-r from-orange-500 to-red-500"
                      : "bg-white/10 backdrop-blur-sm"
                  }`}
                >
                  <Image
                    src={whyChooseUs[1].image}
                    alt={whyChooseUs[1].title}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <h3
                  className={`text-xl font-black mb-4 ${
                    whyChooseUs[1].accent === "orange"
                      ? "text-orange-600"
                      : "text-white"
                  }`}
                >
                  {whyChooseUs[1].title}
                </h3>
                <p
                  className={` text-sm leading-relaxed ${
                    whyChooseUs[1].accent === "orange"
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  {whyChooseUs[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Feature Cards 3-5 - Small Grid */}
          {whyChooseUs.slice(2).map((item, index) => (
            <div key={index} className="lg:col-span-4 group">
              <div
                className={`h-full p-6 rounded-3xl shadow-lg transition-all duration-500 hover:scale-105 ${
                  item.accent === "orange"
                    ? "bg-white border-2 border-orange-100 hover:border-orange-300"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-100 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-xl p-2.5 ${
                      item.accent === "orange"
                        ? "bg-gradient-to-r from-orange-500 to-red-500"
                        : "bg-white/10 backdrop-blur-sm "
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3
                    className={`text-lg font-black mb-3 ${
                      item.accent === "orange"
                        ? "text-orange-600"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={` text-sm leading-relaxed ${
                      item.accent === "orange" ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of satisfied clients who chose Trinumics for their
              app development journey.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
