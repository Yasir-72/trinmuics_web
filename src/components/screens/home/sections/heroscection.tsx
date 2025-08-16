// src/components/screens/home/sections/HeroSection.tsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b bg-white px-6 py-8 rounded-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  justify-items-center ">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 mb-20">
            Taking Your Business into the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Next Digital Era
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            At <span className="font-semibold">Trinumics</span>, we empower
            businesses with next-gen IT services, cutting-edge hardware, and
            world-class development solutions. From cloud, networking, and
            cybersecurity to custom software, web platforms, and mobile apps —
            we engineer technology that fuels growth.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow hover:shadow-lg hover:bg-purple-700 transition">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg border border-purple-200 hover:border-purple-400 hover:shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Card with Video */}
        <div className="relative bg-white max-w-sm backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
          {/* Card Text */}
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-black mb-2">
              Power Up Your Tech
            </h2>
            <p className="text-sm text-black mb-4">
              From cloud solutions to custom software, we bring your ideas to
              life with secure, scalable, and cutting-edge technology — so your
              business stays ahead.
            </p>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
              Get Started →
            </button>
          </div>

          {/* Video Section */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden ">
            <video
              src="/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
