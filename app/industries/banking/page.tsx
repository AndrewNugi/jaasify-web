/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/digital-transformation.jpg";
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
  FaUniversity,
  FaShieldAlt,
  FaChartLine,
  FaRegBuilding,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import ContactUs from "../../components/contact-us";

const faqs = [
  {
    q: "How does Jaasify ensure banking data security?",
    a: "We implement bank-grade encryption, zero-trust architecture, and comply with international security standards including ISO 27001 and PCI DSS to ensure your data remains secure at all times.",
  },
  {
    q: "Can your solutions integrate with our existing core banking system?",
    a: "Yes. Our APIs and middleware are designed to integrate seamlessly with legacy core banking systems, modern microservices architectures, and third-party fintech platforms.",
  },
  {
    q: "What is the typical timeline for deploying a digital banking platform?",
    a: "Deployment timelines vary by scope, but most digital banking implementations go live within 12-16 weeks, with MVP versions available in as little as 6-8 weeks.",
  },
  {
    q: "Do you offer ongoing support after the platform is launched?",
    a: "Absolutely. We provide 24/7 managed support, continuous monitoring, regular updates, and strategic roadmap planning to keep your platform evolving with market needs.",
  },
  {
    q: "How do you help with regulatory compliance across different regions?",
    a: "Our solutions are built with compliance-by-design. We support CBK, Central Bank regulations, AML/KYC requirements, and can adapt to regulatory frameworks across multiple jurisdictions.",
  },
];

const capabilities = [
  "Omni-channel digital banking (mobile, web, USSD, agent banking)",
  "Real-time payment processing & settlement engines",
  "AI-powered fraud detection & prevention systems",
  "Automated regulatory compliance & reporting",
  "Customer 360 analytics with predictive insights",
  "Modular microservices architecture for rapid scaling",
  "Secure API gateway for third-party integrations",
  "Biometric authentication & identity verification",
];

const solutions = [
  {
    icon: <FaUniversity className="w-8 h-8" />,
    title: "Digital Banking Platform",
    description:
      "A modern, omni-channel digital banking experience that empowers customers with self-service capabilities, real-time transactions, and personalized financial insights.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Payment Processing",
    description:
      "High-throughput payment processing engine supporting real-time gross settlement, batch processing, mobile money, card payments, and cross-border transactions.",
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Risk Management",
    description:
      "Comprehensive risk management suite with AI-driven credit scoring, market risk analysis, operational risk monitoring, and automated stress testing.",
  },
  {
    icon: <FaRegBuilding className="w-8 h-8" />,
    title: "Customer Analytics",
    description:
      "Advanced analytics platform that unifies customer data across channels to deliver actionable insights, personalized products, and proactive engagement strategies.",
  },
];

const benefits = [
  { stat: "60%", label: "Faster time-to-market for new products" },
  { stat: "45%", label: "Reduction in operational costs" },
  { stat: "3.5x", label: "Increase in digital customer engagement" },
  { stat: "99.99%", label: "Platform uptime & reliability" },
];

export default function BankingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <Link href="/" className="hover:text-[#33c0e3] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/industries"
              className="hover:text-[#33c0e3] transition-colors"
            >
              Industries
            </Link>
            <span>/</span>
            <span className="text-[#1C3461] font-medium">Banking</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Secure, Scalable,{" "}
            <span className="text-[#33c0e3]">Digital-First</span>{" "}
            Banking Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Modernize your banking operations with secure, scalable digital
            solutions that enhance customer experience, streamline operations,
            and drive growth. From digital banking platforms to AI-powered risk
            management, we deliver end-to-end technology solutions for the
            banking industry.
          </motion.p>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
                The Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3461] mt-3 mb-6 leading-tight">
                Legacy Systems Holding Back Modern Banking
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Banks today face mounting pressure to deliver seamless digital
                experiences while grappling with decades-old legacy systems.
                Siloed infrastructure, regulatory complexity, and rising customer
                expectations create a perfect storm that demands urgent
                transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Financial institutions must modernize without disrupting core
                operations, all while navigating increasingly stringent
                compliance requirements and defending against sophisticated
                cyber threats. The question is not whether to transform, but how
                to do it safely and effectively.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={hero}
                  alt="Digital Banking Transformation"
                  className="w-full h-full object-cover"
                  width={600}
                  height={450}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#33c0e3]/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={hero}
                  alt="Banking Solutions"
                  className="w-full h-full object-cover"
                  width={600}
                  height={450}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#1C3461]/20 rounded-full blur-2xl"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
                Our Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3461] mt-3 mb-6 leading-tight">
                A Modern, Modular Banking Technology Stack
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We build future-ready banking platforms on a foundation of
                cloud-native microservices, enabling you to modernize
                incrementally without rip-and-replace. Our solutions integrate
                seamlessly with your existing core systems while opening doors to
                new digital capabilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From customer-facing mobile apps to back-office automation and
                regulatory reporting, our end-to-end platform covers every layer
                of the banking technology stack, designed for security,
                scalability, and speed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
              Platform Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3461] mt-3 mb-6">
              Everything You Need to Digitize Banking
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform equips your institution with the tools
              needed to compete and win in the digital era.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#33c0e3]/30 hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#33c0e3] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Cards */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
              Core Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3461] mt-3 mb-6">
              Purpose-Built for Banking Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each solution is engineered to address specific banking challenges
              while integrating seamlessly into your broader digital ecosystem.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-lg h-full group">
                  <div className="p-3 bg-[#e6f8fc] rounded-xl text-[#33c0e3] group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300 w-fit mb-6">
                    {sol.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#33c0e3] transition-colors mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Stats */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a5f7a] to-[#0d2f3f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-[#33c0e3] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#33c0e3] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
              Key Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Measurable Impact for Your Bank
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Banking institutions that partner with us see transformative
              results across every dimension of their digital operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#33c0e3] mb-3">
                  {b.stat}
                </div>
                <p className="text-white/80">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] font-semibold text-sm tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3461] mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our banking technology solutions and
              implementation process.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
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
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1C3461] to-[#0f1f3d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33c0e3] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your
            <span className="text-[#33c0e3]"> Banking Operations</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 max-w-2xl mx-auto mb-10"
          >
            Let&apos;s discuss how our digital banking solutions can help you
            deliver exceptional customer experiences and drive operational
            efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#33c0e3] text-white font-semibold rounded-lg hover:bg-[#2ba9cc] transition-all duration-300 shadow-lg hover:shadow-[#33c0e3]/25"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+254713666622"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +254 713 666 622
            </a>
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
