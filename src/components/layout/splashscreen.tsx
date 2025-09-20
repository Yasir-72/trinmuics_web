// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function SplashScreen() {
//   return (
//     <section className="flex items-center justify-center h-screen bg-white">
//       <motion.div
//         className="flex items-center"
//         initial="initial"
//         animate="animate"
//         variants={{
//           initial: {},
//           animate: {
//             transition: {
//               staggerChildren: 0.4, // ✅ smooth stagger effect
//             },
//           },
//         }}
//       >
//         {/* Company Logo */}
//         <motion.div
//           variants={{
//             initial: { scale: 0, opacity: 0, x: 0 },
//             animate: { scale: 1, opacity: 1, x: -40 },
//           }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="w-20 h-20 relative"
//         >
//           <Image
//             src="/logo.jpg"
//             alt="Trinumics Logo"
//             fill
//             className="object-contain"
//           />
//         </motion.div>

//         {/* Company Name */}
//         <motion.h1
//           variants={{
//             initial: { opacity: 0, x: 30 },
//             animate: { opacity: 1, x: 0 },
//           }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="text-4xl font-bold text-gray-800 ml-2"
//         >
//           Trinumics
//         </motion.h1>
//       </motion.div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
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
    <header className=" top-0 z-50  ">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between  py-3">
        {/* Logo */}
        <div className="bg-white shadow-sm rounded-xl px-5 py-2 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={120} // adjust width
              height={36} // adjust height
              className="h-9 w-auto rounded"
              priority // ensures it loads quickly (good for logo)
            />
            {/* 👇 text disappears on mobile, shows from md+ */}
            <span className="text-2xl font-bold hidden lg:inline">
              Trinumics
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className=" sticky hidden md:flex items-center space-x-2 bg-white rounded-xl shadow px-4 py-2">
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
        <button className="group hidden md:flex items-center gap-2 px-6 py-4 font-medium rounded-lg shadow-md border-2 transition-all duration-300 ease-in-out bg-gradient-to-br from-orange-500 to-red-600 border-orange-200 text-white hover:from-gray-800 hover:to-gray-900 hover:border-gray-100 hover:shadow-lg">
          <span className="hidden lg:inline">BOOK A CALL</span>
          <Phone className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-white" />
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="bg-white md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-gray-100 "
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
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


