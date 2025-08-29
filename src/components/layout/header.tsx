"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Technologies", href: "/technologies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className=" sticky top-0 z-50 flex justify-center py-3  ">
      <div className="flex items-center justify-between w-full max-w-7xl gap-4 flex-wrap">
        {/* Left: Logo */}
        <div className="bg-white shadow-sm rounded-xl px-6 py-2 flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
            <span className="ml-2 text-lg font-semibold">Trinumics</span>
          </Link>
        </div>

        {/* Middle: Navigation */}
        <nav className="flex items-center bg-white shadow-sm rounded-xl px-6 py-2 space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-lg transition ${
                  pathname === item.href
                    ? "bg-purple-200 text-purple-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <button
          onClick={() => (window.location.href = "/free-audit")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition font-medium shadow-md"
        >
          Get a Free IT Audit
        </button>
      </div>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden">
        <Link
          href="/free-audit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
        >
          Get a Free IT Audit
        </Link>
      </div>
    </header>
  );
}
