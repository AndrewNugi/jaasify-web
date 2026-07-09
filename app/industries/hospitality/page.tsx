/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/software-engineering.jpg";
import logo from "../../../public/images/Jaasify.png";
import logo1 from "../../../public/images/JaasifyPrimaryLogo.jpg";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHotel,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Send,
  Database,
  Share2,
  Shield,
  Server,
  Building2,
  Smartphone,
  BarChart3,
  CreditCard,
  ChevronRight,
  Star,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import ContactUs from "../../components/contact-us";

const challenges = [
  {
    title: "Data Silos",
    icon: <Database className="w-8 h-8" />,
    description:
      "Guest data trapped across PMS, POS, and booking platforms prevents a unified view of the customer journey.",
    solution: "Unified guest profiles via centralized data pipelines and real-time synchronization across all systems.",
  },
  {
    title: "System Fragmentation",
    icon: <Share2 className="w-8 h-8" />,
    description:
      "Disconnected property systems create operational bottlenecks and inconsistent guest experiences.",
    solution: "Seamless API integrations that connect every touchpoint from booking to check-out.",
  },
  {
    title: "Security Risks",
    icon: <Shield className="w-8 h-8" />,
    description:
      "Handling payment data and personal guest information requires robust compliance and security posture.",
    solution: "Enterprise-grade security with PCI-DSS compliance, encryption, and zero-trust architecture.",
  },
  {
    title: "Legacy Systems",
    icon: <Server className="w-8 h-8" />,
    description:
      "Aging on-premise infrastructure limits scalability, innovation, and the ability to compete with modern hospitality brands.",
    solution: "Cloud-native replacement and modernization without disrupting daily operations.",
  },
];

const solutions = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Property Management Integration",
    description:
      "Seamlessly connect with leading PMS platforms including Opera PMS, Cloudbeds, Mews, Oracle Hospitality, and more. Automate reservation syncing, room assignment, billing, and check-in/check-out workflows.",
    features: [
      "Real-time reservation sync across all channels",
      "Automated room assignment and housekeeping triggers",
      "Centralized billing and invoice management",
      "Multi-property portfolio support",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Guest Experience Platform",
    description:
      "Delight guests at every stage of their stay with a cohesive digital experience spanning pre-arrival to post-departure engagement.",
    features: [
      "Mobile check-in and digital key integration",
      "In-stay guest messaging and service requests",
      "Personalized recommendations and upsells",
      "Post-stay feedback and loyalty engagement",
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Revenue & Operations Optimization",
    description:
      "Maximize revenue per available room and streamline back-of-house operations with data-driven tools and automation.",
    features: [
      "Rate shopping and dynamic pricing integration",
      "Energy management and smart room controls",
      "Housekeeping optimization and task automation",
      "Inventory and F&B management systems",
    ],
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment & Loyalty Ecosystem",
    description:
      "Create a frictionless payment experience and reward your most valuable guests with a unified loyalty platform.",
    features: [
      "Multi-gateway payment processing (Stripe, Adyen, Square)",
      "POS system integration for F&B and amenities",
      "Omnichannel loyalty program management",
      "Real-time reward accrual and redemption",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Technology Assessment",
    description:
      "We audit your existing tech stack, identify integration points, and map out the ideal hospitality technology architecture.",
  },
  {
    step: "02",
    title: "API Development",
    description:
      "Build robust, documented APIs that bridge legacy systems with modern platforms, ensuring reliable data flow.",
  },
  {
    step: "03",
    title: "System Integration",
    description:
      "Connect PMS, POS, payment gateways, and guest-facing applications into a single cohesive ecosystem.",
  },
  {
    step: "04",
    title: "Guest Interface Development",
    description:
      "Design and develop intuitive guest-facing interfaces including mobile apps, kiosks, and in-room devices.",
  },
  {
    step: "05",
    title: "Analytics & Optimization",
    description:
      "Deploy dashboards, reporting tools, and AI-driven insights to continuously improve operations and guest satisfaction.",
  },
];

const results = [
  { metric: "30%", label: "Increase in Guest Satisfaction", icon: <Star className="w-6 h-6" /> },
  { metric: "25%", label: "Reduction in Operational Costs", icon: <Users className="w-6 h-6" /> },
  { metric: "40%", label: "Faster Check-In Times", icon: <Clock className="w-6 h-6" /> },
  { metric: "15%", label: "Increase in Revenue Per Guest", icon: <TrendingUp className="w-6 h-6" /> },
];

const solutionsIntegration = [
  { name: "Opera PMS", color: "bg-blue-100 text-blue-800" },
  { name: "Cloudbeds", color: "bg-green-100 text-green-800" },
  { name: "Mews", color: "bg-purple-100 text-purple-800" },
  { name: "Oracle Hospitality", color: "bg-red-100 text-red-800" },
  { name: "Stripe", color: "bg-indigo-100 text-indigo-800" },
  { name: "Adyen", color: "bg-teal-100 text-teal-800" },
  { name: "Square", color: "bg-orange-100 text-orange-800" },
  { name: "Google Analytics", color: "bg-yellow-100 text-yellow-800" },
  { name: "Salesforce", color: "bg-cyan-100 text-cyan-800" },
  { name: "Zendesk", color: "bg-pink-100 text-pink-800" },
];

export default function HospitalityPage() {
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3">
          <nav className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-[#33c0e3] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/industries" className="hover:text-[#33c0e3] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#1C3461] font-semibold">Hospitality</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1C3461] via-[#1a2a4a] to-[#0f1a30] overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#33c0e3] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
                <FaHotel className="w-4 h-4 text-[#33c0e3]" />
                <span className="text-white/80 text-sm font-medium">Hospitality Industry</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hospitality Technology{" "}
                <span className="text-[#33c0e3]">Seamlessly Integrated</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                Connect your PMS, POS, guest apps, and analytics into one unified
                platform. Deliver exceptional guest experiences while driving
                operational efficiency across your entire property portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#33c0e3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2ba8c9] transition-all duration-200 shadow-lg shadow-[#33c0e3]/30"
                >
                  Start Your Integration <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#33c0e3]/20 to-transparent rounded-2xl"></div>
                <Image
                  src={hero}
                  alt="Hospitality Technology"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C3461] mb-4">
              Common Integration Challenges{" "}
              <span className="text-[#33c0e3]">We Solve</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hospitality businesses face unique technology hurdles that
              fragmented systems amplify. Here&apos;s how we address them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#e6f8fc] rounded-xl text-[#33c0e3] group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1C3461] group-hover:text-[#33c0e3] transition-colors pt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 pt-4 border-t border-gray-100">
                    <HiOutlineCheckCircle className="w-5 h-5 text-[#33c0e3] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C3461] mb-4">
              Comprehensive{" "}
              <span className="text-[#33c0e3]">Hospitality Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              End-to-end technology integration tailored to every facet of your
              hospitality operations.
            </p>
          </motion.div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[#e6f8fc] rounded-xl text-[#33c0e3] flex-shrink-0">
                          {solution.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-[#1C3461]">
                          {solution.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                          >
                            <HiOutlineCheckCircle className="w-5 h-5 text-[#33c0e3] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C3461] mb-4">
              Our Integration{" "}
              <span className="text-[#33c0e3]">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A proven methodology for delivering seamless hospitality
              technology integrations.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg">
                      <span className="text-[#33c0e3] font-bold text-sm tracking-widest">
                        STEP {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-[#1C3461] mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#33c0e3] text-white font-bold text-lg shadow-lg shadow-[#33c0e3]/30 absolute left-1/2 -translate-x-1/2 z-10">
                    {step.step}
                  </div>
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1C3461] via-[#1a2a4a] to-[#0f1a30] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#33c0e3] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#33c0e3] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Results That{" "}
              <span className="text-[#33c0e3]">Speak Volumes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Measurable impact delivered for hospitality clients through
              strategic technology integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:border-[#33c0e3]/50 transition-all duration-300 hover:bg-white/15">
                  <div className="w-14 h-14 rounded-xl bg-[#33c0e3]/20 text-[#33c0e3] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {item.metric}
                  </div>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C3461] mb-4">
              Technologies We{" "}
              <span className="text-[#33c0e3]">Integrate With</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We work with the platforms and tools you already use — and the
              ones you&apos;ll grow into.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {solutionsIntegration.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} transition-transform hover:scale-105 cursor-default`}
              >
                {tech.name}
              </span>
            ))}
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
