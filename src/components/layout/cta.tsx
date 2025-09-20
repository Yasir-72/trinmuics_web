"use client";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className=" rounded-2xl max-w-screen-2xl mx-auto mt-6">
      <div
        className="relative bg-gradient-to-r from-gray-800  to-gray-900 rounded-2xl 
          px-4 md:px-12 lg:px-16 py-16 text-center md:text-left shadow-2xl 
          overflow-hidden transition duration-500 hover:shadow-orange-500/40"
      >
        {/* Decorative Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ED4C22]/20 via-transparent to-transparent rounded-2xl"></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
              Let’s Build Something <br />
              <span className="text-[#ED4C22]">Amazing Together</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              We craft modern, scalable, and engaging digital solutions to help
              your business grow. Share your idea with us and let’s bring it to
              life. 🚀
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link href={"/contact"}>
              <button
                className="px-8 py-4 bg-gradient-to-r from-[#ED4C22] to-orange-500 text-white text-lg font-semibold 
                rounded-xl shadow-lg hover:shadow-orange-500/40 hover:scale-105 
                transition-all duration-300"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
