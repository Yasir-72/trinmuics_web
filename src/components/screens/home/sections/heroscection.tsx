// src/components/screens/home/sections/HeroSection.tsx
import { MoveRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-16 py-12  rounded-xl max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2B2D2C] mb-6">
            Taking Your Business into the{" "}
            <span className="text-[#ED4C22]">Next Digital Era</span>
          </h1>

          {/* Pill Tags */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mb-8">
            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Excellence
            </span>
            <span className="hidden md:block h-0.5 w-10 bg-[#ED4C22]"></span>

            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Innovation
            </span>
            <span className="hidden md:block h-0.5 w-10 bg-[#ED4C22]"></span>

            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Quality
            </span>
          </div>

          <p className="text-lg text-gray-600 mb-10">
            At <span className="font-semibold">Trinumics</span>, we empower businesses with next-gen IT services, cutting-edge hardware, and world-class development solutions. From cloud, networking, and cybersecurity to custom software, web platforms, and mobile apps — we engineer technology that fuels growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 bg-[#2B2D2C] hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg">
              <span className="font-bold text-lg">Get In Touch</span>
              <MoveRight className="w-6 h-6 text-[#ED4C22] transition-colors duration-200 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Right Card with Video */}
        <div className="lg:col-span-6 w-full mx-auto lg:mx-0">
          <div className="bg-[#2B2D2C] rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 w-full h-full flex flex-col gap-6">
            {/* Card Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Power Up Your Tech
              </h2>
              <p className="text-md md:text-lg text-white mb-5">
                From cloud solutions to custom software, we bring your ideas to life with secure, scalable, and cutting-edge technology — so your business stays ahead.
              </p>
              <button className="bg-[#ED4C22] hover:bg-amber-700 text-white px-5 py-2 rounded-lg text-md font-medium transition">
                Learn More →
              </button>
            </div>

            {/* Video Section */}
            <div className="relative w-full h-96 md:h-[24rem] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
