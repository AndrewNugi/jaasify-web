/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../public/images/software-engineering.jpg";
import logo from "../../public/images/Jaasify.png";
import logo1 from "../../public/images/JaasifyPrimaryLogo.jpg";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaUniversity,
  FaShieldAlt,
  FaHandsHelping,
  FaLaptopCode,
  FaHotel,
  FaBolt,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Send } from "lucide-react";
import ContactUs from "../components/contact-us";

const industries = [
  {
    id: "banking",
    title: "Banking",
    description:
      "Transform your banking operations with secure, scalable digital solutions that enhance customer experience and operational efficiency.",
    icon: <FaUniversity className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-blue-900 to-blue-800",
    features: [
      "Digital Banking Platforms",
      "Payment Processing Systems",
      "Risk Management Solutions",
      "Regulatory Compliance Tools",
      "Customer Analytics & Insights",
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Modernize insurance workflows with intelligent automation, data-driven underwriting, and seamless claims management systems.",
    icon: <FaShieldAlt className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-teal-900 to-teal-800",
    features: [
      "Claims Automation",
      "Policy Management Systems",
      "Underwriting Analytics",
      "Fraud Detection Solutions",
      "Customer Portal Development",
    ],
  },
  {
    id: "saccos",
    title: "SACCOs",
    description:
      "Empower your SACCO with modern financial technology that streamlines operations, enhances member engagement, and drives growth.",
    icon: <FaHandsHelping className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-emerald-900 to-emerald-800",
    features: [
      "Member Management Systems",
      "Loan Origination Platforms",
      "Mobile Banking Solutions",
      "Dividend Management",
      "Regulatory Reporting",
    ],
  },
  {
    id: "techco",
    title: "TechCo",
    description:
      "Accelerate innovation with tailored technology solutions that scale with your growth and keep you ahead of the competition.",
    icon: <FaLaptopCode className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-indigo-900 to-indigo-800",
    features: [
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Microservices Architecture",
      "API Development",
      "Product Engineering",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description:
      "Elevate guest experiences with cutting-edge hospitality technology that streamlines operations and drives revenue growth.",
    icon: <FaHotel className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-amber-900 to-amber-800",
    features: [
      "Property Management Systems",
      "Online Booking Platforms",
      "Guest Experience Solutions",
      "Revenue Management",
      "Loyalty Program Development",
    ],
  },
  {
    id: "utilities",
    title: "Utilities",
    description:
      "Build smarter utility infrastructures with IoT-enabled monitoring, automated billing, and data-driven resource management.",
    icon: <FaBolt className="w-8 h-8" />,
    color: "#33c0e3",
    bgColor: "from-orange-900 to-orange-800",
    features: [
      "Smart Metering Solutions",
      "Billing & Collection Systems",
      "Grid Management Platforms",
      "Customer Self-Service Portals",
      "Predictive Maintenance",
    ],
  },
];

export default function IndustriesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const industryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleIndustryMouseEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setIsIndustriesOpen(true);
  };

  const handleIndustryMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 250);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navigationLinks = [
    { name: "Home", href: "/", id: "hero" },
    { name: "Services", href: "/#services", id: "services" },
    {
      name: "Industries",
      href: "/industries",
      id: "industries",
      dropdown: [
        { name: "Banking", href: "/industries/banking" },
        { name: "Insurance", href: "/industries/insurance" },
        { name: "SACCOs", href: "/industries/saccos" },
        { name: "TechCo", href: "/industries/techco" },
        { name: "Hospitality", href: "/industries/hospitality" },
        { name: "Utilities", href: "/industries/utilities" },
      ],
    },
    { name: "About", href: "/#about", id: "about" },
    { name: "Why Us", href: "/#why-choose-us", id: "why-choose-us" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Top contact bar */}
      <div className="bg-[#33c0e3] text-white py-3 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-4 sm:space-x-6">
            <span className="flex items-center space-x-2">
              <HiOutlineEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span>info@jaasify.com</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlineMapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span>Nairobi, Kenya</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlinePhone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              <span>+254713666622</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white/70 transition-colors duration-200">
              <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-200">
              <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="hover:text-white/70 transition-colors duration-200">
              <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-xs py-2" : "shadow-xs py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image src={logo} alt="Jaasify Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-1 items-center">
              {navigationLinks.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleIndustryMouseEnter}
                    onMouseLeave={handleIndustryMouseLeave}
                  >
                    <button
                      onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                      className="px-4 py-2 text-gray-700 hover:text-[#33c0e3] font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1"
                    >
                      {item.name}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isIndustriesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isIndustriesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-2">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#33c0e3] hover:bg-gray-50 transition-colors duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-[#33c0e3] font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-full mt-2 w-50 border border-gray-100 rounded-lg bg-white shadow-lg z-50"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationLinks.map((item) =>
                  item.dropdown ? (
                    <div key={item.name}>
                      <div className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-left px-3 py-1.5 rounded-md text-sm text-gray-600 hover:text-[#33c0e3] hover:bg-gray-50"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#33c0e3] hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1419] overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#33c0e3] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Industries We{" "}
            <span className="text-[#33c0e3]">Serve</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We deliver tailored technology solutions across diverse industries,
            helping businesses thrive in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/industries/${industry.id}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-[#e6f8fc] rounded-xl text-[#33c0e3] group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#33c0e3] transition-colors">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {industry.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <span className="w-1.5 h-1.5 bg-[#33c0e3] rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center text-[#33c0e3] font-medium text-sm group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-3xl px-8 py-16 sm:p-16 shadow-2xl bg-gradient-to-br from-[#1a5f7a] to-[#0d2f3f] border border-[#33c0e3]/30">
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                    }}
                    animate={{
                      x: [
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                      ],
                      y: [
                        Math.random() * 100 + "%",
                        Math.random() * 100 + "%",
                      ],
                    }}
                    transition={{
                      duration: 10 + Math.random() * 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
              <div className="relative z-20 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    Contact{" "}
                    <span className="text-[#33c0e3]">our team</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-white/70 max-w-2xl mx-auto"
                  >
                    Got any questions about the product or scaling on our
                    platform? We&apos;re here to help. Chat to our friendly team
                    24/7 and get onboard in less than 5 minutes.
                  </motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <ContactUs />
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Chat with us
                      </h3>
                      <p className="text-white/60 mb-6">
                        Speak to our friendly team via live chat.
                      </p>
                      <div className="space-y-3">
                        <a
                          href="mailto:info@jaasify.com"
                          className="flex items-center text-[#33c0e3] hover:text-white transition-colors group"
                        >
                          <Send className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                          <span className="underline">Shoot us an email</span>
                        </a>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Call us
                      </h3>
                      <p className="text-white/60 mb-4">
                        Call our team Mon-Fri from 8am to 5pm.
                      </p>
                      <a
                        href="tel:+254713666622"
                        className="flex items-center text-[#33c0e3] hover:text-white transition-colors group"
                      >
                        <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg font-medium underline">
                          +254 713 666 622
                        </span>
                      </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Visit us
                      </h3>
                      <p className="text-white/60 mb-4">
                        Chat to us in person at our Nairobi HQ.
                      </p>
                      <a
                        href="#"
                        className="flex items-start text-[#33c0e3] hover:text-white transition-colors group"
                      >
                        <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="underline">Nairobi, Kenya</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src={logo1}
                  alt="Jaasify Technologies Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                Transforming businesses through innovative technology solutions
                and strategic digital consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">CIO as a Service</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Digital Transformation</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Software Engineering</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Customer Experience</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Technology Advisory</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/#team-videos" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <address className="not-italic text-gray-400 space-y-3">
                <p>Nairobi, Kenya</p>
                <p>info@jaasify.com</p>
                <p>+254713666622</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} JaaSify Technologies. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
