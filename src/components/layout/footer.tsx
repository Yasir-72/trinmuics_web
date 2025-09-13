"use client";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2B2D2C] text-white pt-16 pb-8 relative max-w-screen-2xl mx-auto overflow-hidden rounded-t-2xl px-4 md:px-12">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-t-2xl" />

      {/* Main Content */}
      <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 z-10">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo + Brand */}
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <div className="w-14 h-14 relative rounded-xl overflow-hidden shadow-md ring-2 ring-[#ED4C22]">
              <Image
                src="/logo.jpg"
                alt="Trinmuics Logo"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide text-white">
              <span className="text-[#ED4C22]">Trin</span>muics
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-xs">
            We design and build digital experiences that turn ideas into
            reality. From sleek websites to powerful apps — we craft solutions
            that inspire.
          </p>

          {/* CTA Button */}
          <button className="group bg-[#ED4C22] hover:bg-white transition-all font-semibold px-7 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105">
            <span className="text-white group-hover:text-[#2B2D2C] transition">
              Let’s Work Together
            </span>
            <span className="text-lg text-white group-hover:text-[#2B2D2C] transition">
              →
            </span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-6 text-[#ED4C22]">Quick Links</h2>
          <ul className="space-y-3">
            {["Home", "Services", "About", "Portfolio", "Contact"].map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-[#ED4C22] transition relative group"
                  >
                    {link}
                    <span className="block h-0.5 w-0 bg-[#ED4C22] transition-all group-hover:w-full mx-auto md:mx-0"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-6 text-[#ED4C22]">
            Our Services
          </h2>
          <ul className="space-y-3">
            {[
              "Web Development",
              "Mobile Apps",
              "UI/UX Design",
              "E-Commerce",
              "Branding",
            ].map((service, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="hover:text-[#ED4C22] transition relative group"
                >
                  {service}
                  <span className="block h-0.5 w-0 bg-[#ED4C22] transition-all group-hover:w-full mx-auto md:mx-0"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-bold mb-6 text-[#ED4C22]">Contact Us</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Near Afzal Sweets, 2nd floor, 201, Naya Nagar, Mira Road, Thane,
            India
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            +91 1234567890
          </p>
          <p className="mt-1 text-sm text-gray-300">info@trinumics.com</p>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-[#ED4C22] p-2.5 rounded-full text-white hover:bg-white hover:text-[#2B2D2C] transition shadow-md hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
        <p>
          © {new Date().getFullYear()} Trinmuics. All Rights Reserved. |{" "}
          <a href="#" className="hover:text-[#ED4C22]">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-[#ED4C22]">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
