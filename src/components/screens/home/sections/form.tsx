// app/components/ContactSection.tsx
"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative bg-white text-gray-900 py-16">
      {/* Background Image (Map Style) */}
      <div className="absolute inset-0">
        <Image
          src="/map-bg.png"
          alt="Background Map"
          fill
          className="object-cover opacity-10 -z-10"
        />

        <div className="absolute inset-0 bg-purple-900/70" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-purple-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* What's Next Section (Updated) */}
        <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">What’s Next?</h2>
          <div className="space-y-10 relative">
            {/* Step 1 */}
            <div className="flex items-start relative">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-purple-900 font-bold rounded-full z-10">
                  1
                </div>
                {/* Vertical Line */}
                <div className="w-px bg-white/50 flex-1" />
              </div>
              <p>
                Our experts will analyze your requirements and contact you
                within <span className="font-semibold">1–2 business days</span>.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start relative">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-purple-900 font-bold rounded-full z-10">
                  2
                </div>
                {/* Vertical Line */}
                <div className="w-px bg-white/50 flex-1" />
              </div>
              <p>
                We will collect all requirements for your project, and if
                needed, sign an <span className="font-semibold">NDA</span> to
                ensure privacy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start relative">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-purple-900 font-bold rounded-full z-10">
                  3
                </div>
                {/* No line for last step */}
              </div>
              <p>
                We will develop a comprehensive{" "}
                <span className="font-semibold">proposal and action plan</span>{" "}
                for your project with timelines, estimates, and deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
