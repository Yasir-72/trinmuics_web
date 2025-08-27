  import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import triLogo from "@public/logo.jpg"; // ✅ Import logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1d37] text-gray-200 py-12 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3 mb-5">
            
            <div className="w-12 h-12 relative rounded-full overflow-hidden shadow-md">
             <Image
       src="/logo.jpg"
  alt="Trinmuics Logo"
  fill
  className="object-cover"
  sizes="48px"
/>

            </div>
            <h1 className="text-xl font-extrabold text-[#d4af37] tracking-wide">
              Trinmuics
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-300 mb-5">
            Looking for your own website that stands out? We’ve got you covered.
          </p>
          <button className="bg-[#d4af37] hover:bg-[#c19d2d] transition-all text-[#0b1d37] font-semibold px-5 py-2 rounded-full flex items-center space-x-2 shadow-lg">
            <span>Get in Touch</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-[#d4af37]">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-bold mb-5 text-[#d4af37]">
            Contact Us
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Near Afzal Sweets, 2nd floor, 201, Naya Nagar, Mira Road, Thane, India
          </p>
          <p className="mt-3 text-sm font-semibold text-gray-100">+91 1234567890</p>
          <p className="mt-1 text-sm text-gray-300">info@trinumics.com</p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="bg-[#d4af37] p-2 rounded-full text-[#0b1d37] hover:bg-[#c19d2d] transition shadow-md">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#d4af37] p-2 rounded-full text-[#0b1d37] hover:bg-[#c19d2d] transition shadow-md">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#d4af37] p-2 rounded-full text-[#0b1d37] hover:bg-[#c19d2d] transition shadow-md">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
