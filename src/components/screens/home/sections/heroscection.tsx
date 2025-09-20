// src/components/screens/home/sections/HeroSection.tsx
"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 md:px-12 lg:px-16 bg-white rounded-3xl max-w-screen-2xl mx-auto">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(237,76,34,0.08)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(237,76,34,0.06)_0%,transparent_60%)]"></div>
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ED4C22]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#ED4C22]/12 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 w-full max-w-xl mx-auto lg:mx-0 space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Taking Your Business into the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Next Digital Era
            </span>
          </h1>

          {/* Pill Tags */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
            {["Excellence", "Innovation", "Quality"].map((tag, idx) => (
              <React.Fragment key={idx}>
                <span className="px-5 py-2 rounded-full text-white bg-gray-900 shadow-md">
                  {tag}
                </span>
                {idx < 2 && (
                  <span className="hidden md:block h-0.5 w-10 bg-[#ED4C22]"></span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-lg text-gray-700">
            At <span className="font-semibold text-gray-900">Trinumics</span>,
            we empower businesses with next-gen IT services, cutting-edge
            hardware, and world-class development solutions. From cloud,
            networking, and cybersecurity to custom software, web platforms, and
            mobile apps — we engineer technology that fuels growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="relative overflow-hidden group flex items-center gap-2 px-6 py-3 font-medium rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg transition-all duration-300 hover:scale-105">
              <span className="font-bold text-lg">Get In Touch</span>
              <MoveRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-700 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </button>
          </div>
        </div>

        {/* Right Card with Video */}
        <div className="lg:col-span-6 w-full mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-100 shadow-2xl group hover:shadow-orange-500/40 transition-shadow duration-500 p-6 md:p-8">
            {/* Card Text */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-white">
                Power Up Your Tech
              </h2>
              <p className="text-md md:text-lg text-gray-200">
                From cloud solutions to custom software, we bring your ideas to
                life with secure, scalable, and cutting-edge technology — so
                your business stays ahead.
              </p>
              <button className="relative inline-block px-5 py-2 rounded-lg bg-[#ED4C22] text-white font-medium shadow-lg transition-all duration-300 hover:bg-[#c93d19]">
                Learn More →
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </button>
            </div>

            {/* Video Section */}
            <div className="relative mt-8 w-full h-64 md:h-[24rem] rounded-2xl overflow-hidden shadow-xl">
              <video
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Decorative Floating Shape */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#ED4C22]/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
