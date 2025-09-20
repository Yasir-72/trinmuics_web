"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 transition-all duration-500 mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-between py-4">
        {/* Enhanced Logo */}
        <Link href="/" className="group flex items-center space-x-3">
          <div className="relative bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-lg shadow-orange-500/20 p-3 flex items-center group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={120}
              height={36}
              className="h-10 w-auto rounded relative z-10"
              priority
            />
          </div>
          <div className="hidden xl:block">
            <span className="text-3xl font-black bg-gradient-to-r from-gray-900 via-[#2B2D2C] to-gray-800 bg-clip-text text-transparent">
              Trinumics
            </span>
            <div className="flex items-center mt-1">
              <div className="w-2 h-2 bg-[#ED4C22] rounded-full animate-pulse"></div>
              <div className="ml-2 text-xs text-gray-600 font-medium">
                Digital Excellence
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-white via-orange-50 to-white shadow-xl shadow-orange-500/10 px-6 py-3 border border-orange-200/30">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                pathname === item.href
                  ? "text-white"
                  : "text-[#2B2D2C] hover:text-[#ED4C22] hover:bg-gradient-to-r from-orange-100 to-orange-200 duration-300 "
              }`}
            >
              {/* Active background with smooth animation */}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#ED4C22] via-orange-500 to-orange-600 rounded-xl shadow-lg shadow-orange-500/40"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                />
              )}

              <span className="relative z-10">{item.name}</span>

              {/* Active indicator dot */}
              {pathname === item.href && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#ED4C22] rounded-full animate-pulse"></div>
                </div>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden lg:flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#ED4C22] via-orange-500 to-orange-600 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Sparkle effect */}
          <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300 hidden xl:inline" />
          <span className="relative z-10 hidden xl:inline">BOOK A CALL</span>
          <Phone className="w-5 h-5 relative z-10 group-hover:animate-bounce" />

          {/* Floating dots */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-80 animate-ping"></div>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="lg:hidden relative flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-white to-orange-50 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 group border border-orange-200/30"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ED4C22]/10 to-orange-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-7 h-7 text-[#ED4C22]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-7 h-7 text-[#ED4C22]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-gradient-to-br from-white via-orange-50/30 to-white backdrop-blur-xl border-t border-orange-200/30 shadow-2xl shadow-orange-500/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 px-6 py-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group block rounded-2xl px-6 py-4 font-semibold transition-all duration-300 relative overflow-hidden ${
                      pathname === item.href
                        ? "text-white"
                        : "text-[#2B2D2C] hover:text-[#ED4C22]"
                    }`}
                  >
                    {/* Mobile active background with smooth animation */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeMobileNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#ED4C22] to-orange-500 rounded-2xl shadow-lg shadow-orange-500/30"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {/* Mobile hover background */}
                    {pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    )}

                    <span className="relative z-10 flex items-center justify-between">
                      {item.name}
                      {pathname === item.href && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-4"
              >
                <button
                  onClick={() => {
                    setOpen(false);
                    window.location.href = "/contact";
                  }}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#ED4C22] to-orange-600 px-6 py-4 text-white font-bold shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Sparkles className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">BOOK A CALL</span>
                  <Phone className="w-5 h-5 relative z-10" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
