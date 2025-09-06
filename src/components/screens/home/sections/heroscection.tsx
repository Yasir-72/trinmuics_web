// src/components/screens/home/sections/HeroSection.tsx
import { MoveRight } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b bg-white px-6 py-8 rounded-xl max-w-screen-2xl mx-auto">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  justify-items-end items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2B2D2C] ">
            Taking Your Business into the{" "}
            <span className=" text-[#ED4C22]">Next Digital Era</span>
          </h1>
          <div className="flex items-center gap-3 my-8 text-lg font-semibold tracking-wide">
            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Excellence
            </span>
            <span className="h-0.5 w-10 dark:bg-[#ED4C22]"></span>
            {/* divider */}
            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Innovation
            </span>
            <span className="h-0.5 w-10 dark:bg-[#ED4C22]"></span>
            {/* divider */}
            <span className="px-5 py-2 rounded-full text-white shadow-md bg-[#2B2D2C]">
              Quality
            </span>
          </div>

          <p className="text-lg text-gray-600 mb-10">
            At <span className="font-semibold">Trinumics</span>, we empower
            businesses with next-gen IT services, cutting-edge hardware, and
            world-class development solutions. From cloud, networking, and
            cybersecurity to custom software, web platforms, and mobile apps —
            we engineer technology that fuels growth.
          </p>
          <div className="flex gap-4">
            <button className="group flex items-center gap-2 bg-[#2B2D2C] hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-200 hover:shadow-lg">
              <span className="font-bold text-lg">Get In Touch</span>
              <MoveRight className="w-7 h-7 text-[#ED4C22] transition-colors duration-200 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Right Card with Video */}
        <div className=" bg-[#2B2D2C] max-w-md rounded-2xl p-6 shadow-2xl border border-white/20">
          {/* Card Text */}
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Power Up Your Tech
            </h2>
            <p className="text-md text-white mb-4">
              From cloud solutions to custom software, we bring your ideas to
              life with secure, scalable, and cutting-edge technology — so your
              business stays ahead.
            </p>
            <button className="bg-[#ED4C22] text-white px-5 py-2 rounded-lg text-md font-medium hover:bg-amber-700 transition">
              Learn More →
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
