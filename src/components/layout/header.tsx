"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);


  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    {
      name: "Expertise",
      dropdown: [
        { name: "Web Development", href: "/expertise/web" },
        { name: "UI/UX Design", href: "/expertise/design" },
      ],
    },
    {
      name: "Insights",
      dropdown: [
        { name: "Blog", href: "/insights/blog" },
        { name: "Case Studies", href: "/insights/case-studies" },
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
      <nav className="flex items-center space-x-2 bg-white shadow-sm rounded-full px-6 py-2">
        {navItems.map((item) => (
          <div key={item.name} className="relative group">
            {item.dropdown ? (
              <button
                onClick={() =>
                  setOpenMenu(openMenu === item.name ? null : item.name)
                }
                className={`flex items-center px-4 py-2 rounded-full transition ${
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
                className={`px-4 py-2 rounded-full transition ${
                  pathname === item.href
                    ? "bg-purple-200 text-purple-800"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown Menu */}
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
      </nav>
    </header>
  );
}
