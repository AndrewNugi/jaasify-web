"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "01 Home", href: "/" },
  { label: "02 Services", href: "/#services" },
  {
    label: "03 Industries",
    href: "/industries",
    dropdown: [
      "Banking",
      "Insurance",
      "SACCOs",
      "TechCo",
      "Hospitality",
      "Utilities",
      "Cyber Security",
    ],
  },
  { label: "04 The JaaSify Advantage", href: "/#advantage" },
  { label: "05 About", href: "/#about" },
  { label: "06 Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const enter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  const leave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ─────── TOP CONTACT BAR ─────── */}
        <div className="bg-[#1C3462] text-white/80 text-xs">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-9">
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="mailto:info@jaasify.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <HiOutlineEnvelope className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">info@jaasify.com</span>
                </a>
                <a href="tel:+254713666622" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <HiOutlinePhone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">+254 713 666 622</span>
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/jaasify-technology-group-limited-131195376" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a href="https://x.com/Jaasify" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─────── MAIN NAV ─────── */}
        <nav
          className={`transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/Jaasify.png"
                  alt="JaaSify"
                  width={100}
                  height={36}
                  className="h-8 w-auto"
                />
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_ITEMS.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={enter}
                      onMouseLeave={leave}
                    >
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm text-gray-600 hover:text-[#39BFE1] font-medium transition-colors"
                      >
                        {item.label}
                      </Link>
                      {dropdownOpen && (
                        <div
                          onMouseEnter={enter}
                          onMouseLeave={leave}
                          className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-2"
                        >
                          {item.dropdown.map((name) => {
                            const slug = name.toLowerCase().replace(/\s+/g, "-");
                            return (
                              <Link
                                key={name}
                                href={`/industries/${slug}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-[#39BFE1] hover:bg-gray-50 transition-colors"
                              >
                                {name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-[#39BFE1]"
                          : "text-gray-600 hover:text-[#39BFE1]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* MOBILE HAMBURGER */}
              <button
                className="md:hidden relative z-50 p-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-transform duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className={`transition-transform duration-300 ease-in-out ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
                  {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ─────── MOBILE OVERLAY (outside sticky header to avoid stacking conflict) ─────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 max-w-[80vw] bg-white shadow-2xl overflow-y-auto animate-slideIn">
            <div className="pt-20 pb-6 px-6 space-y-1">
              {NAV_ITEMS.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm font-medium text-gray-800 border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-0.5 mt-1 mb-2">
                      {item.dropdown.map((name) => {
                        const slug = name.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <Link
                            key={name}
                            href={`/industries/${slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-gray-500 hover:text-[#39BFE1]"
                          >
                            {name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium text-gray-800 hover:text-[#39BFE1] border-b border-gray-100"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* MOBILE CONTACT INFO */}
            <div className="px-6 pt-4 border-t border-gray-100 space-y-3">
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Contact</p>
              <a href="mailto:info@jaasify.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#39BFE1]">
                <HiOutlineEnvelope className="w-4 h-4" /> info@jaasify.com
              </a>
              <a href="tel:+254713666622" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#39BFE1]">
                <HiOutlinePhone className="w-4 h-4" /> +254 713 666 622
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.linkedin.com/in/jaasify-technology-group-limited-131195376" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#39BFE1] transition-colors">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="https://x.com/Jaasify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#39BFE1] transition-colors">
                  <FaXTwitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
