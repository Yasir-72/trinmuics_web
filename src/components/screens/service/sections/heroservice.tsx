"use client";

import { section } from "framer-motion/client";
import { Code2, Smartphone, Palette } from "lucide-react";
import Image from "next/image";

export default function ServiceHeroSection() {
  return (
    <>
      <section className="relative py-20 px-4 md:px-12 lg:px-16 bg-white rounded-3xl max-w-screen-2xl mx-auto overflow-hidden ">
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(237,76,34,0.08)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(237,76,34,0.06)_0%,transparent_60%)] pointer-events-none"></div>

        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight  bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Custom Software <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent ">
                Development Solutions
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At <span className="font-semibold text-[#ED4C22]">Trinumics</span>
              , we build scalable, user-friendly, and innovative digital
              solutions tailored for startups, enterprises, and growing
              businesses. From web to mobile, our solutions are designed to fuel
              impact and growth.
            </p>

            {/* Services */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Code2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black mb-2">Startup Development</h3>
                <p className="text-sm text-gray-300">
                  Scalable, reliable, and modern applications crafted for rapid
                  growth.
                </p>
              </div>

              <div className=" bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-black mb-2">Mobile Apps</h3>
                <p className="text-sm text-gray-300">
                  Seamless Android & iOS apps with engaging user experiences.
                </p>
              </div>

              <div className=" bg-gradient-to-r from-gray-800 to-gray-900  text-white rounded-xl p-6 shadow-lg hover:scale-105 transition-transform sm:col-span-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-black mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-300">
                  Modern, user-focused designs that combine beauty with
                  functionality.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <button className="mt-6 px-8 py-3 bg-[#ED4C22] hover:bg-[#2B2D2C] hover:text-white text-white font-semibold rounded-full shadow-md transition-all">
                Get an Estimate →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -z-10 bg-[#ED4C22]/20 w-72 h-72 rounded-full blur-3xl"></div>
            <Image
              src="/services-image.jpg"
              alt="Service Illustration"
              width={550}
              height={450}
              className="rounded-2xl shadow-2xl border-4 border-[#2B2D2C]/10 object-cover max-w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
