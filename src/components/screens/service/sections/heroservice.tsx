// src/app/Service/page.tsx
"use client";

import { FaRocket, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import Image from "next/image";

export default function ServiceHeroSection() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
            Custom Software <br />
            <span className="text-purple-600">Development Services</span>
          </h2>

          {/* Services List */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex items-start space-x-4">
              <FaRocket className="text-3xl text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">
                  Startup Development Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Helping startups build scalable, reliable, and modern applications.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4">
              <FaMobileAlt className="text-3xl text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">
                  Android and iOS Development
                </h3>
                <p className="text-gray-600 text-sm">
                  Creating high-quality mobile apps with seamless user experiences.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <FaPaintBrush className="text-3xl text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-700">
                  Custom UI/UX Design Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Designing creative, modern, and user-friendly interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative flex justify-center">
          <div className="absolute -z-10 bg-purple-200 w-60 h-60 rounded-lg rotate-6"></div>
          <Image
            src="/services-image.jpg" // <-- replace with your image
            alt="Service Illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
