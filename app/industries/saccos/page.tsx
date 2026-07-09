"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
  FaCheckCircle,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Send, ChevronRight } from "lucide-react";
import ContactUs from "../../components/contact-us";
import logo from "../../../public/images/Jaasify.png";

import logo1 from "../../../public/images/JaasifyPrimaryLogo.jpg";
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

const platformCapabilities = [
  "Core Banking System",
  "Mobile-First Member Experience",
  "Automated Loan Origination",
  "Payment Gateway Integration",
  "Regulatory Compliance Automation",
  "Business Intelligence Dashboards",
];

const coreSolutions = [
  {
    title: "Member Management Platform",
    description:
      "Digital onboarding with KYC verification, self-service member portals, real-time account management, and automated communications to keep members engaged and informed.",
    items: [
      "Digital onboarding & KYC",
      "Self-service member portals",
      "Real-time account management",
    ],
  },
  {
    title: "Loan Management System",
    description:
      "Automated credit scoring with configurable rules, collateral tracking and valuation, disbursement workflows, and collections management for efficient lending operations.",
    items: [
      "Automated credit scoring",
      "Collateral tracking",
      "Disbursement workflows",
    ],
  },
  {
    title: "Savings & Deposits",
    description:
      "Flexible savings product configurations, automatic interest calculation, dividend processing, and contribution tracking with real-time reporting for complete financial oversight.",
    items: [
      "Flexible product configuration",
      "Auto interest calculation",
      "Dividend processing",
    ],
  },
  {
    title: "Mobile SACCO Platform",
    description:
      "USSD banking for feature phones, native mobile applications, SMS notifications and alerts, and agent banking capabilities to reach members wherever they are.",
    items: [
      "USSD & mobile apps",
      "SMS notifications",
      "Agent banking",
    ],
  },
];

const benefits = [
  {
    stat: "40%",
    label: "More Member Engagement",
    description: "Through digital channels and self-service portals",
  },
  {
    stat: "3x",
    label: "Faster Loan Processing",
    description: "Automated workflows and credit scoring",
  },
  {
    stat: "99.9%",
    label: "Enhanced Security",
    description: "Bank-grade encryption and compliance",
  },
  {
    stat: "2x",
    label: "Better Decisions",
    description: "Real-time analytics and BI dashboards",
  },
  {
    stat: "60%",
    label: "Operational Efficiency",
    description: "Through process automation",
  },
  {
    stat: "∞",
    label: "Scalable Growth",
    description: "Cloud-native architecture that grows with you",
  },
];

const faqs = [
  {
    question: "How does the platform integrate with our existing SACCO systems?",
    answer:
      "Our platform is built with open APIs and standard integration protocols. We perform a thorough assessment of your current systems and create a seamless migration plan. Most integrations are completed within 4-6 weeks with minimal disruption to your operations.",
  },
  {
    question: "What security measures are in place to protect member data?",
    answer:
      "We employ bank-grade AES-256 encryption, multi-factor authentication, role-based access controls, and continuous security monitoring. Our infrastructure is SOC 2 compliant and we conduct regular penetration testing and vulnerability assessments.",
  },
  {
    question: "Can members access SACCO services on mobile devices?",
    answer:
      "Absolutely. Our mobile-first platform includes native iOS and Android apps, USSD banking for feature phones, and a responsive web portal. Members can check balances, apply for loans, make deposits, and manage their accounts from anywhere.",
  },
  {
    question: "How does the platform help with regulatory compliance?",
    answer:
      "Our compliance automation module handles regulatory reporting to the SASRA and other bodies, anti-money laundering (AML) checks, transaction monitoring, and automated audit trails. Reports are generated in the required formats and can be submitted directly.",
  },
  {
    question: "Is the platform scalable as our SACCO grows?",
    answer:
      "Yes. Our cloud-native architecture is designed to scale seamlessly. Whether you have 1,000 or 100,000 members, the platform auto-scales to handle transaction volumes, storage needs, and processing requirements without performance degradation.",
  },
];

export default function SaccosPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#33c0e3] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/industries"
              className="hover:text-[#33c0e3] transition-colors"
            >
              Industries
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1C3461] font-medium">SACCOs</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1419] overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#1C3461] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
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
                  <FaCheckCircle className="w-8 h-8 text-[#33c0e3]" />
                </div>
                <span className="text-[#33c0e3] text-sm font-mono tracking-wider">
                  // SACCOs
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Modern{" "}
                <span className="text-[#33c0e3]">SACCO Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Transforming Cooperative Financial Services
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Empower your SACCO with cutting-edge technology that
                streamlines operations, enhances member engagement, and drives
                sustainable growth. We deliver tailored solutions that help
                SACCOs compete effectively in the digital financial services
                landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#33c0e3] text-white rounded-lg hover:bg-[#2ba9cc] transition-colors font-medium"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-6">
                  Why SACCOs Choose Us
                </h3>
                <ul className="space-y-4">
                  {[
                    "Streamlined member onboarding and management",
                    "Faster loan processing and disbursement",
                    "Enhanced member engagement through mobile channels",
                    "Improved regulatory compliance and reporting",
                    "Data-driven decision making for growth",
                  ].map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="w-5 h-5 text-[#33c0e3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // The Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why SACCOs{" "}
              <span className="text-[#1C3461]">Need Digital Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Many SACCOs still operate on legacy infrastructure that limits
              growth, member satisfaction, and competitive positioning in an
              increasingly digital financial landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Legacy Systems",
                description:
                  "Outdated core systems that are expensive to maintain, difficult to integrate with modern services, and unable to scale with growing member bases.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#33c0e3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                ),
              },
              {
                title: "Manual Processes",
                description:
                  "Paper-based loan applications, manual reconciliation, and time-consuming regulatory reporting that drain resources and introduce human errors.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#33c0e3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Limited Member Accessibility",
                description:
                  "Members demanding 24/7 digital access to their accounts, loan status, and savings information — yet stuck with branch-only services.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#33c0e3]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
            ].map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#33c0e3] hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-[#e6f8fc] rounded-xl inline-block mb-6">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C3461] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1C3461] to-[#0d1a30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
                // Our Solution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Unified{" "}
                <span className="text-[#33c0e3]">Digital Ecosystem</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We build comprehensive digital ecosystems that bring every
                aspect of your SACCO operations into a single, modern platform.
                From member onboarding to loan disbursement, savings management
                to regulatory reporting — everything works together seamlessly.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our platform eliminates data silos, reduces operational costs,
                and gives your team real-time visibility into every aspect of the
                business while providing members with the digital experience they
                expect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#33c0e3] text-white rounded-lg hover:bg-[#2ba9cc] transition-colors font-medium"
                >
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "200+", label: "SACCOs Served" },
                  { number: "500K+", label: "Members Onboarded" },
                  { number: "$2B+", label: "Loans Processed" },
                  { number: "99.9%", label: "Platform Uptime" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                  >
                    <div className="text-3xl font-bold text-[#33c0e3] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything Your{" "}
              <span className="text-[#1C3461]">SACCO Needs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform built specifically for cooperative
              financial institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {platformCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#33c0e3] hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2 bg-[#e6f8fc] rounded-lg text-[#33c0e3] group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaCheckCircle className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section
        id="solutions"
        className="py-20 lg:py-28 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Core Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Purpose-Built{" "}
              <span className="text-[#1C3461]">SACCO Modules</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated solutions designed to address every aspect of SACCO
              operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#33c0e3] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#e6f8fc] rounded-xl group-hover:bg-[#33c0e3] transition-colors duration-300">
                    <FaCheckCircle className="w-6 h-6 text-[#33c0e3] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1C3461]">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <ChevronRight className="w-4 h-4 text-[#33c0e3]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Key Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Measurable{" "}
              <span className="text-[#1C3461]">Impact on Your SACCO</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results that drive growth and improve member satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-[#33c0e3] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#33c0e3] mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-bold text-[#1C3461] mb-2">
                  {benefit.label}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-[#1C3461]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#33c0e3] transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-[#1C3461] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronRight className="w-5 h-5 text-[#33c0e3] rotate-90" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1C3461] to-[#0d1a30]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Modernize{" "}
              <span className="text-[#33c0e3]">Your SACCO?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of SACCOs that have transformed their operations
              with our digital platform. Let&apos;s build the future of
              cooperative finance together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#33c0e3] text-white rounded-lg hover:bg-[#2ba9cc] transition-colors font-medium text-lg"
              >
                Start Your Digital Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+254713666622"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
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
