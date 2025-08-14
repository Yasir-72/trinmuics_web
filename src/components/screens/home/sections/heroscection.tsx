// src/components/screens/home/sections/herosection.tsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Taking Your Business into the <br />
            <span className="text-purple-600">Next Digital Era</span>
          </h1>
          <p className="text-gray-700 mb-6">
            At Trinumics, we empower businesses with next-gen IT services,
            cutting-edge hardware, and world-class development solutions. From
            cloud, networking, and cybersecurity to custom software, web
            platforms, and mobile apps — we deliver technology that drives
            growth. We don’t just support your business — we engineer its
            future.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded hover:bg-purple-600 transition">
            Contact Us
          </button>
        </div>

        {/* Right Black Card with Video */}
        <div className="bg-black rounded-2xl p-6 text-white shadow-xl h-full md:max-w-none flex flex-col justify-between">
          {/* Top Text */}
          <div>
            <h2 className="text-xl font-bold mb-2">Let's fix it.</h2>
            <p className="text-sm text-gray-300 mb-4">
              With all your projects, knowledge, and conversations in one app,
              everything just clicks.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition mb-4">
              Get started →
            </button>
          </div>

          {/* Video with Glow Effect */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,200,0.6)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
