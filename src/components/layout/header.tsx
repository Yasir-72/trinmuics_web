"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Technologies", href: "/technologies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50  ">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between  py-3">
        {/* Logo */}
        <div className="bg-white shadow-sm rounded-xl px-5 py-2 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Logo" className="h-10 w-auto rounded" />
            {/* 👇 text disappears on mobile, shows from md+ */}
            <span className="text-lg font-bold hidden md:inline">
              Trinumics
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2 bg-white rounded-xl shadow px-4 py-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === item.href
                  ? "bg-orange-200 text-[#ED4C22] font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden md:flex items-center gap-2 bg-[#2B2D2C] hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-colors duration-200 hover:shadow-lg">
          <span>BOOK A CALL</span>
          <Phone className="w-5 h-5 text-[#ED4C22] transition-colors group-hover:text-white" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="bg-white md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 "
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 bg-white shadow-lg"
          >
            <div className="flex flex-col px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-orange-100 text-[#ED4C22] font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => (window.location.href = "/free-audit")}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2B2D2C] px-5 py-2 font-medium text-white shadow-md hover:bg-amber-700"
              >
                BOOK A CALL
                <Phone className="w-5 h-5 text-[#ED4C22]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
