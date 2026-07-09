/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/Jaasify.png";
import logo1 from "../../../public/images/JaasifyPrimaryLogo.jpg";
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
  FaBolt,
  FaCheckCircle,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaUsers,
  FaChargingStation,
  FaHardHat,
  FaSyncAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Send,
  ChevronRight,
  Zap,
  BarChart3,
  Shield,
  TrendingDown,
} from "lucide-react";
import ContactUs from "../../components/contact-us";

const capabilities = [
  {
    title: "Advanced Metering Infrastructure",
    description:
      "Deploy smart metering solutions that provide real-time consumption data, enabling accurate billing, demand forecasting, and proactive grid management.",
    icon: <FaBolt className="w-6 h-6" />,
  },
  {
    title: "Outage Management Systems",
    description:
      "Minimize downtime with intelligent outage detection, automated crew dispatch, and real-time restoration tracking to keep your grid reliable.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Distribution Management",
    description:
      "Optimize power distribution with advanced monitoring, automated load balancing, and integration of distributed energy resources for grid stability.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    title: "Customer Information Systems",
    description:
      "Deliver exceptional customer experiences with unified billing, self-service portals, and personalized engagement across all touchpoints.",
    icon: <FaUsers className="w-6 h-6" />,
  },
];

const solutions = [
  {
    title: "Real-time Operations Insights",
    description:
      "Gain complete visibility into your utility operations with live grid monitoring, predictive outage detection, and real-time consumption pattern analysis. Our AI-powered dashboards provide actionable intelligence to optimize performance and prevent disruptions before they occur.",
    icon: <FaChartLine className="w-6 h-6" />,
    color: "#33c0e3",
    features: [
      "Live grid monitoring and visualization",
      "Predictive outage detection and prevention",
      "Real-time consumption pattern analysis",
      "Automated alerting and incident response",
    ],
  },
  {
    title: "Digital Innovation Platform",
    description:
      "Accelerate your digital transformation with an open API ecosystem that seamlessly integrates IoT devices, modernizes legacy systems, and enables digital twin simulations for scenario planning and optimization.",
    icon: <FaLightbulb className="w-6 h-6" />,
    color: "#1C3461",
    features: [
      "Open API ecosystem for seamless integration",
      "IoT device management and data ingestion",
      "Legacy system modernization",
      "Digital twin simulation and modeling",
    ],
  },
  {
    title: "Smart Mobility Transformation",
    description:
      "Power the future of transportation with intelligent EV charging infrastructure, vehicle-to-grid (V2G) integration, and renewable energy management solutions that support sustainable mobility ecosystems.",
    icon: <FaChargingStation className="w-6 h-6" />,
    color: "#33c0e3",
    features: [
      "EV charging station management",
      "Vehicle-to-grid (V2G) integration",
      "Renewable energy optimization",
      "Smart grid load balancing",
    ],
  },
  {
    title: "Field Service Management",
    description:
      "Empower your field workforce with mobile-first tools, AI-driven diagnostic assistance, and predictive maintenance scheduling that reduces truck rolls and improves first-time fix rates.",
    icon: <FaHardHat className="w-6 h-6" />,
    color: "#1C3461",
    features: [
      "Mobile workforce management",
      "AI-powered diagnostic assistance",
      "Predictive maintenance scheduling",
      "Real-time crew tracking and dispatch",
    ],
  },
  {
    title: "Business Process Transformation",
    description:
      "Streamline end-to-end utility processes with intelligent automation, from billing and collections to supply chain management, with continuous performance benchmarking to drive operational excellence.",
    icon: <FaSyncAlt className="w-6 h-6" />,
    color: "#33c0e3",
    features: [
      "End-to-end process automation",
      "Automated billing and collections",
      "Supply chain optimization",
      "Performance benchmarking and analytics",
    ],
  },
  {
    title: "Human Capital Management",
    description:
      "Address the utilities skills gap with comprehensive workforce planning, targeted training programs, and performance management systems that build a future-ready utility workforce.",
    icon: <FaGraduationCap className="w-6 h-6" />,
    color: "#1C3461",
    features: [
      "Skills gap analysis and planning",
      "Targeted training and development",
      "Performance management systems",
      "Workforce succession planning",
    ],
  },
];

const stats = [
  { value: "30%", label: "Cost Reduction", suffix: "" },
  { value: "40%", label: "Faster Issue Resolution", suffix: "" },
  { value: "25%", label: "Energy Efficiency", suffix: "" },
  { value: "99.9%", label: "Compliance Rate", suffix: "" },
];

export default function UtilitiesPage() {
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#33c0e3] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/industries" className="hover:text-[#33c0e3] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#33c0e3] font-medium">Utilities</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1419] overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#33c0e3] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#33c0e3]/20 rounded-lg">
                  <FaBolt className="w-6 h-6 text-[#33c0e3]" />
                </div>
                <span className="text-[#33c0e3] text-sm font-mono tracking-wider">
                  // Utilities
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Utilities Management{" "}
                <span className="text-[#33c0e3]">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Smart, Sustainable, and Profitable Energy Management
              </p>
              <p className="text-gray-400 leading-relaxed">
                Empower your utility operations with cutting-edge technology that
                optimizes energy distribution, enhances grid reliability, and
                drives sustainable growth — all while maintaining safety,
                profitability, and regulatory compliance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-6">
                  Industry Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Real-time grid monitoring and analytics",
                    "Smart metering and IoT integration",
                    "Predictive maintenance and outage management",
                    "Renewable energy and EV infrastructure",
                    "Regulatory compliance and reporting",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="w-5 h-5 text-[#33c0e3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Utilities Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Utilities{" "}
              <span className="text-[#33c0e3]">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions that modernize utility operations, enhance
              grid intelligence, and deliver exceptional customer value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-[#e6f8fc] rounded-xl text-[#33c0e3]">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Utilities Solutions */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Comprehensive Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Utilities{" "}
              <span className="text-[#33c0e3]">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated technology solutions designed to address the full
              spectrum of modern utility challenges.
            </p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div
                    className="flex-shrink-0 p-4 rounded-xl text-white"
                    style={{ backgroundColor: solution.color }}
                  >
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {solution.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2">
                          <FaCheckCircle
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: solution.color }}
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable Business Impact */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Business Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Measurable Business{" "}
              <span className="text-[#33c0e3]">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven results that transform utility operations and drive
              sustainable value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-[#1C3461] to-[#0f1f3d] rounded-2xl border border-[#33c0e3]/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#33c0e3] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              Results based on aggregate client outcomes across our utility
              engagements
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-[#1C3461] to-[#0f1f3d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#33c0e3] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready for Sustainable{" "}
            <span className="text-[#33c0e3]">Utilities Management?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
          >
            Partner with us to build a smarter, more resilient utility
            infrastructure that drives efficiency, sustainability, and growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-[#33c0e3] text-white font-semibold rounded-xl hover:bg-[#2ba9cc] transition-all duration-300 shadow-lg hover:shadow-[#33c0e3]/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/industries"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Explore Other Industries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Discuss Your{" "}
              <span className="text-[#33c0e3]">Needs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact our team to learn how we can help transform your business.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#33c0e3] hover:bg-[#2ba9cc] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact our team <ArrowRight className="w-5 h-5" />
            </Link>
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
