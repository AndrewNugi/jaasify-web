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
  FaLaptopCode,
  FaCheckCircle,
  FaCloud,
  FaUsers,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Phone, Send, ChevronRight } from "lucide-react";
import ContactUs from "../../components/contact-us";

const challenges = [
  {
    title: "Scaling Infrastructure",
    description:
      "Your user base is growing fast, but your infrastructure can't keep up. Downtime and latency are hurting your reputation.",
    icon: <FaCloud className="w-6 h-6" />,
  },
  {
    title: "Team Expansion",
    description:
      "Hiring is slow and expensive. You need to scale your engineering capacity without compromising on quality or culture.",
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    title: "Security & Compliance",
    description:
      "Customers demand enterprise-grade security. You need to meet compliance requirements while shipping at startup speed.",
    icon: <FaShieldAlt className="w-6 h-6" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Your product works, but it's not fast enough. Slow load times and inefficient code are driving users away.",
    icon: <FaRocket className="w-6 h-6" />,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us Your Story",
    description:
      "We start by understanding your product, your team, and your goals. No assumptions, just listening.",
  },
  {
    number: "02",
    title: "Architect Together",
    description:
      "We design a solution that fits your stack, your scale, and your timeline. You stay in control.",
  },
  {
    number: "03",
    title: "Build & Scale",
    description:
      "Our engineers ship production-ready code. We iterate fast, test thoroughly, and deploy confidently.",
  },
  {
    number: "04",
    title: "Grow with Confidence",
    description:
      "We stay on as your technical partner. Monitor, optimize, and evolve as your business grows.",
  },
];

const serviceAreas = [
  {
    title: "Cloud Infrastructure",
    description:
      "Design, deploy, and manage scalable cloud architectures on AWS, Azure, or GCP. We ensure high availability, disaster recovery, and cost optimization.",
    icon: <FaCloud className="w-8 h-8" />,
  },
  {
    title: "DevOps & SRE",
    description:
      "Automate everything. CI/CD pipelines, infrastructure as code, monitoring, and incident response that your team can rely on.",
    icon: <FaCogs className="w-8 h-8" />,
  },
  {
    title: "SaaS Platform Development",
    description:
      "Build multi-tenant SaaS products from the ground up or modernize existing platforms with microservices and event-driven architectures.",
    icon: <FaLaptopCode className="w-8 h-8" />,
  },
  {
    title: "Data Engineering",
    description:
      "Build robust data pipelines, real-time analytics, and data warehouses that turn raw data into actionable business insights.",
    icon: <FaDatabase className="w-8 h-8" />,
  },
  {
    title: "Data Migration",
    description:
      "Plan and execute seamless data migrations with zero downtime. Legacy to cloud, monolith to microservices, we handle the move.",
    icon: <FaDatabase className="w-8 h-8" />,
  },
];

export default function TechCoPage() {
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
            <Link href="/industries" className="hover:text-[#33c0e3] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#33c0e3] font-medium">TechCo</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1C3461] via-[#1a2e52] to-[#0f1f3a] overflow-hidden py-24 lg:py-32">
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
                  <FaLaptopCode className="w-8 h-8 text-[#33c0e3]" />
                </div>
                <span className="text-[#33c0e3] text-sm font-mono tracking-wider">
                  // TechCo
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Built for Tech Companies,{" "}
                <span className="text-[#33c0e3]">by Tech People</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                You focus on product and customers. We handle the complex
                engineering challenges.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#33c0e3] text-white font-semibold rounded-xl hover:bg-[#2ba9cc] transition-all duration-300 shadow-lg shadow-[#33c0e3]/25"
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-6 text-lg">
                  What We Bring
                </h3>
                <ul className="space-y-4">
                  {[
                    "10+ years of engineering expertise",
                    "Proven track record scaling SaaS products",
                    "Full-stack & cloud-native specialists",
                    "Security-first engineering practices",
                    "Flexible engagement models",
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

      {/* Sound Familiar Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // The Challenges
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Sound <span className="text-[#33c0e3]">Familiar?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the pain points every growing tech company faces. We have
              been there, and we know how to solve them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#33c0e3] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#e6f8fc] flex items-center justify-center text-[#33c0e3] mb-6 group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300">
                  {challenge.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C3461] mb-3">
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

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From Idea to{" "}
              <span className="text-[#33c0e3]">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven process that de-risks your engineering investments and
              delivers results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#33c0e3]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#1C3461] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8">
                    <ArrowRight className="w-6 h-6 text-[#33c0e3]/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#33c0e3] text-sm font-mono tracking-wider block mb-4">
              // Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-[#33c0e3]">Deliver</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end engineering services tailored for technology companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#33c0e3] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-[#e6f8fc] flex items-center justify-center text-[#33c0e3] mb-6 group-hover:bg-[#33c0e3] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C3461] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-[#1C3461]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-[#33c0e3] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#33c0e3] rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build{" "}
              <span className="text-[#33c0e3]">Something Amazing?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Let us partner with you to build products that scale, teams that
              deliver, and technology that lasts.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#33c0e3] text-white font-semibold rounded-xl hover:bg-[#2ba9cc] transition-all duration-300 shadow-lg shadow-[#33c0e3]/25 text-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
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
