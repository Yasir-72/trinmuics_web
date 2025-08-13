"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/work" },
    {
      name: "Technologies",
      dropdown: [
        { name: "Web Development", href: "/expertise/web" },
        { name: "UI/UX Design", href: "/expertise/design" },
      ],
    },
    {
      name: "About",
      dropdown: [
        { name: "Company", href: "/about/company" },
        { name: "Team", href: "/about/team" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-center py-6 bg-white">
      <nav className="flex items-center bg-white shadow-sm rounded-full px-6 w-full max-w-6xl justify-center space-x-6">
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.dropdown ? (
              <button
                onClick={() =>
                  setOpenMenu(openMenu === item.name ? null : item.name)
                }
                className={`flex items-center px-4 py-2 rounded-full transition leading-[1.5rem] ${
                  pathname === item.href
                    ? "bg-purple-200 text-purple-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            ) : (
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-full transition leading-[1.5rem] ${
                  pathname === item.href
                    ? "bg-purple-200 text-purple-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            )}

            {item.dropdown && openMenu === item.name && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link
          href="/free-audit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition font-medium shadow-md leading-[1.5rem]"
        >
          Get a Free IT Audit
        </Link>
      </nav>

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
