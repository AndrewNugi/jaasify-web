/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "../public/images/software-engineering.jpg";

import logo from "../public/images/Jaasify.png";
import logo1 from "../public/images/JaasifyPrimaryLogo.jpg";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaUsers,
  FaCode,
  FaTrophy,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Users,
  Brain,
  Cpu,
  BarChart2,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Zap, Target, Code2, Sparkles, CheckCircle2 } from "lucide-react";

import { Shield } from "lucide-react";
import ContactUs from "./components/contact-us";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setRandomStyles] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    setRandomStyles({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `pulse ${2 + Math.random() * 3}s infinite alternate`,
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Updated navigation links with onClick handlers
  const navigationLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Why Us", href: "#why-choose-us", id: "why-choose-us" },
    { name: "The Team", href: "#team-videos", id: "team-videos" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    {
      title: "CIO as a Service",
      description:
        "On-demand executive technology leadership to guide your strategic initiatives.",
      icon: <User className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "Customer Experience Digitalisation",
      description:
        "Transform customer interactions with data-driven digital strategies.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "Software Engineering as a Service",
      description:
        "Elite engineering talent delivered on-demand to build and scale your technology.",
      icon: <Users className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "Digital Transformation Advisory",
      description:
        "Comprehensive roadmaps to modernize operations for the digital age.",
      icon: <Target className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "AI Solutions & Consulting",
      description:
        "Custom artificial intelligence solutions to automate processes and enhance decision-making.",
      icon: <Brain className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "Machine Learning Services",
      description:
        "Predictive models and data science solutions tailored to your business needs.",
      icon: <Cpu className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "Data Analytics & BI",
      description:
        "Turn your data into actionable insights with advanced analytics and visualization.",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "#33c0e3",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Intelligent process automation to reduce costs and improve efficiency.",
      icon: <Zap className="w-6 h-6" />,
      color: "#33c0e3",
    },
  ];

  const coreValues = [
    "Scalable Solutions",
    "Precision Delivery",
    "Global Standards",
    "Creative Design",
  ];
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
            <a
              href="#"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-colors duration-200"
            >
              <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="#"
              className="hover:text-purple-300 transition-colors duration-200"
            >
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
            {/* Logo - Improved alignment */}
            <div className="flex items-center flex-shrink-0">
              <Image src={logo} alt="Jaasify Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-1">
              {navigationLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-700 hover:text-[#33c0e3] font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-md "
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

        {/* Mobile menu - now absolutely positioned */}
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
                {navigationLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden min-h-[80vh] md:min-h-[90vh] flex items-center py-12 lg:py-0"
      >
        {/* Background Blobs (Enhanced) - Reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[5%] left-[5%] w-32 h-32 md:w-48 md:h-48 bg-purple-200 rounded-full opacity-15 blur-xl md:blur-3xl -z-10 animate-blob-slow"></div>
            <div className="absolute bottom-[10%] right-[10%] w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-20 blur-xl md:blur-3xl -z-10 animate-blob"></div>
            <div className="absolute top-[40%] left-[15%] w-24 h-24 md:w-32 md:h-32 bg-purple-100 rounded-full opacity-10 blur-lg md:blur-2xl -z-10 animate-pulse-slow"></div>
            <div className="absolute top-[70%] left-[30%] w-40 h-40 md:w-56 md:h-56 bg-indigo-100 rounded-full opacity-15 blur-xl md:blur-3xl -z-10 animate-blob-delay"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 xl:gap-16">
            {/* Right Image - Now first on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:w-1/2 relative order-1 lg:order-2 mt-0 sm:mt-8 lg:mt-0 flex justify-center items-center w-full"
            >
              {/* Image Container with Mobile Optimizations */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-[1.01] hover:shadow-lg md:hover:shadow-3xl group w-full max-w-[500px] md:max-w-[800px]">
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl p-1 bg-gradient-to-br from-purple-400/30 to-blue-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <Image
                  src={hero}
                  alt="Team collaborating on digital solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl md:rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/25 to-blue-700/35 mix-blend-multiply rounded-xl md:rounded-2xl"></div>
              </div>

              {/* Floating Card - Mobile Optimized */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 lg:-bottom-24 left-1/2 -translate-x-1/2 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-4 sm:p-5 md:p-6 w-[85%] sm:w-[calc(100%-2rem)] max-w-xs md:max-w-sm flex items-center justify-center gap-3 sm:gap-4 text-center hover:-translate-y-1 md:hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out z-20 hover:shadow-md md:hover:shadow-3xl border border-gray-100"
              >
                <div className="p-2 sm:p-3 bg-gray-100 rounded-full flex-shrink-0">
                  <FaLightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-[#33c0e3]" />
                </div>
                <div className="flex-grow">
                  <p className="text-lg sm:text-xl font-bold text-gray-800 mb-0.5 leading-tight">
                    Solutions Built for Scale
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 leading-tight">
                    Future-proofing your enterprise with cutting-edge tech.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Left Content - Now second on mobile */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 pt-8 lg:pt-0"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-snug md:leading-tight">
                Transformative{" "}
                <span className="bg-clip-text text-[#33c0e3] bg-gradient-to-r from-purple-600 to-indigo-700">
                  Digital Solutions
                </span>{" "}
                for Enterprise Growth
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mt-4 mb-6 md:mb-8 leading-relaxed">
                We architect and deliver cutting-edge technology solutions that
                drive innovation, efficiency, and measurable business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#1C3461] hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full md:rounded-full font-medium sm:font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-sm sm:text-base"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#33c0e3] hover:border-[#33c0e3] text-[#33c0e3] hover:text-[#33c0e3] px-6 py-3 sm:px-8 sm:py-3.5 md:px-9 md:py-4 rounded-full md:rounded-full font-medium sm:font-semibold transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 text-sm sm:text-base"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a5f7a] via-[#1c4a5e] to-[#0d2f3f] overflow-hidden">
        {/* Elegant background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#33c0e3]/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#33c0e3]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#33c0e3]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light text-white mb-2">
                Our{" "}
                <span className="font-normal" style={{ color: "#33c0e3" }}>
                  Services
                </span>
              </h2>
              <p className="text-white/60 text-lg mt-4 max-w-2xl">
                We architect technology solutions that drive measurable business
                outcomes
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="hidden md:flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            ></motion.button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-1">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveStep(index)}
                className="group cursor-pointer"
              >
                <div className="relative border-t border-white/10 py-8 px-6 transition-all duration-500 hover:bg-white/5">
                  {/* Active indicator line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 h-[1px] w-full origin-left"
                    style={{ backgroundColor: "#33c0e3" }}
                  ></motion.div>

                  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
                    {/* Left side - Title with Icon */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: activeStep === index ? 1 : 0.5,
                          scale: activeStep === index ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 text-cyan-400"
                      >
                        {service.icon}
                      </motion.div>
                      <h3
                        className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
                          activeStep === index ? "text-white" : "text-white/50"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    {/* Right side - Number and description */}
                    <div className="flex items-start gap-6 md:gap-8 flex-1">
                      <span className="text-5xl md:text-6xl font-light text-white/10 group-hover:text-white/20 transition-colors duration-300 flex-shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1">
                        <p className="text-sm md:text-base text-white/60 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decorative line */}
          <div className="border-t border-white/10 mt-1"></div>

          {/* Additional info section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-white/40 text-sm tracking-wider uppercase mb-4">
              Strategic Digital Services
            </p>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
              From executive technology leadership to AI-powered automation, we
              deliver comprehensive solutions that transform businesses and
              drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-[#1a2332] via-[#1e2a3a] to-[#0f1419] overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#33c0e3] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#33c0e3]/20 rounded-full blur-3xl"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(51,192,227,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(51,192,227,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="text-[#33c0e3] text-sm font-mono tracking-wider">
                    // About us
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                  Africa&lsquo;s Premier{" "}
                  <span className="text-[#33c0e3]">Tech</span>
                  <br />
                  Partner
                </motion.h2>
              </div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  At <span className="text-white font-semibold">JaaSify</span>,
                  we don&lsquo;t just write code, we craft digital experiences
                  that empower businesses across Africa and beyond.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Founded in Nairobi Kenya, our journey began with a
                  revolutionary belief: Africa is not just a consumer of
                  technology, it is a creator and innovator. We combine
                  cutting-edge global standards with uniquely African ingenuity.
                </p>

                <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl backdrop-blur-sm">
                  <p className="text-gray-200 italic leading-relaxed">
                    &ldquo;Every solution we craft is built to endure, adapt,
                    and grow empowering businesses to thrive in an ever-changing
                    digital landscape.&ldquo;
                  </p>
                </div>
              </motion.div>

              {/* Core Values Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-[#33c0e3]/20 rounded-lg group-hover:bg-[#33c0e3]/30 transition-colors">
                      {index === 0 && (
                        <Code2 className="w-5 h-5 text-[#33c0e3]" />
                      )}
                      {index === 1 && (
                        <Target className="w-5 h-5 text-[#33c0e3]" />
                      )}
                      {index === 2 && (
                        <Shield className="w-5 h-5 text-[#33c0e3]" />
                      )}
                      {index === 3 && (
                        <Sparkles className="w-5 h-5 text-[#33c0e3]" />
                      )}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Code Terminal Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Terminal Window */}
              <div className="relative bg-[#0d1117] border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs font-mono">
                      JaaSify.tsx
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 bg-[#33c0e3] text-white text-xs font-medium rounded flex items-center gap-1 hover:bg-[#2ba9cc] transition-colors"
                    >
                      ▶ Run
                    </motion.button>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm space-y-2 overflow-x-auto">
                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">14</span>
                    <span className="text-gray-400">{"};"}</span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">15</span>
                    <span></span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">16</span>
                    <span className="text-gray-500">
                      // Algorithm (Recursive Fibonacci)
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">17</span>
                    <code>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">fibonacci</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">n</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">number</span>
                      <span className="text-gray-400">)</span>{" "}
                      <span className="text-white">=&gt;</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4 pl-4">
                    <span className="text-gray-600 select-none">18</span>
                    <code>
                      <span className="text-orange-400">n</span>{" "}
                      <span className="text-white">&lt;</span>{" "}
                      <span className="text-orange-300">1</span>{" "}
                      <span className="text-white">?</span>{" "}
                      <span className="text-orange-400">n</span>{" "}
                      <span className="text-white">:</span>{" "}
                      <span className="text-blue-400">fibonacci</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">n</span>{" "}
                      <span className="text-white">-</span>{" "}
                      <span className="text-orange-300">1</span>
                      <span className="text-gray-400">)</span>{" "}
                      <span className="text-white">+</span>{" "}
                      <span className="text-blue-400">fibonacci</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">n</span>{" "}
                      <span className="text-white">-</span>{" "}
                      <span className="text-orange-300">2</span>
                      <span className="text-gray-400">);</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">19</span>
                    <span></span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">20</span>
                    <code>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">empower</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-400">values</span>
                      <span className="text-white">:</span>{" "}
                      <span className="text-green-400">string[]</span>
                      <span className="text-gray-400">)</span>{" "}
                      <span className="text-white">=&gt;</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4 pl-4">
                    <span className="text-gray-600 select-none">21</span>
                    <code>
                      <span className="text-orange-400">values</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-400">map</span>
                      <span className="text-gray-400">((</span>
                      <span className="text-orange-400">v</span>
                      <span className="text-gray-400">,</span>{" "}
                      <span className="text-orange-400">i</span>
                      <span className="text-gray-400">)</span>{" "}
                      <span className="text-white">=&gt;</span>{" "}
                      <span className="text-yellow-300">`$</span>
                      <span className="text-gray-400">{"{"}</span>
                      <span className="text-orange-400">i</span>{" "}
                      <span className="text-white">+</span>{" "}
                      <span className="text-orange-300">1</span>
                      <span className="text-gray-400">{"}"}</span>
                      <span className="text-yellow-300">. $</span>
                      <span className="text-gray-400">{"{"}</span>
                      <span className="text-orange-400">v</span>
                      <span className="text-gray-400">{"}"}</span>
                      <span className="text-yellow-300">`</span>
                      <span className="text-gray-400">);</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">22</span>
                    <span></span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-gray-600 select-none">23</span>
                    <code>
                      <span className="text-purple-400">export</span>{" "}
                      <span className="text-purple-400">default</span>{" "}
                      <span className="text-purple-400">function</span>{" "}
                      <span className="text-yellow-400">JaaSify</span>
                      <span className="text-gray-400">() {"{"}</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4 pl-4">
                    <span className="text-gray-600 select-none">24</span>
                    <code>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-400">showcase</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-blue-400">fibonacci</span>
                      <span className="text-gray-400">(</span>
                      <span className="text-orange-300">7</span>
                      <span className="text-gray-400">);</span>{" "}
                      <span className="text-gray-500">// symbolic</span>
                    </code>
                  </div>

                  <div className="flex items-start gap-4 pl-8">
                    <span className="text-gray-600 select-none">25</span>
                    <code>
                      <span className="text-gray-500">
                        &ldquo;growth sequence&ldquo;
                      </span>
                    </code>
                  </div>
                </div>

                {/* Console Output */}
                <div className="bg-[#0d1117] border-t border-gray-700/50 p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-400 text-xs font-mono">
                      Console Output:
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="space-y-1 text-xs font-mono"
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-green-400">
                        JaaSify component rendered successfully
                      </span>
                    </div>
                    <div className="text-gray-400 pl-6">
                      → Mission: &ldquo;Transform Africa Through Code &
                      Innovation&quot;
                    </div>
                    <div className="text-gray-400 pl-6">
                      → Vision: &ldquo;Global Standards, Local Ingenuity&ldquo;
                    </div>
                    <div className="text-gray-400 pl-6">
                      → Values: 1. Scalable Solutions, 2. Precision Delivery, 3.
                      Global Standards, 4. Creative Design
                    </div>
                    <div className="text-[#33c0e3] pl-6">
                      → fibonacci(7) ={" "}
                      <span className="text-yellow-400">13</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center gap-2 pt-2"
                  >
                    <span className="text-green-400 text-xs">Running...</span>
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0,
                        }}
                        className="w-1 h-1 rounded-full bg-green-400"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                        className="w-1 h-1 rounded-full bg-green-400"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                        className="w-1 h-1 rounded-full bg-green-400"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="bg-[#161b22] px-4 py-2 flex items-center justify-end border-t border-gray-700/50">
                  <span className="text-gray-500 text-xs font-mono">
                    TypeScript v5.0
                  </span>
                </div>
              </div>

              {/* Floating badge */}
            </motion.div>
          </div>

          {/* Bottom Features Section */}
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The JaaSify Advantage
            </h2>
            <p className="text-lg text-gray-600">
              We stand out through our commitment to excellence, innovation, and
              client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <HiOutlineAcademicCap className="w-8 h-8 text-[#33c0e3]" />
                ),
                title: "Unrivaled Expertise",
                description:
                  "Seasoned professionals with deep knowledge across technology domains.",
              },
              {
                icon: <FaCode className="w-8 h-8 text-[#33c0e3]" />,
                title: "Tailored Solutions",
                description:
                  "Solutions designed to fit your unique business challenges and goals.",
              },
              {
                icon: <FaTrophy className="w-8 h-8 text-[#33c0e3]" />,
                title: "Measurable Results",
                description:
                  "Focus on delivering outcomes that contribute to your bottom line.",
              },
              {
                icon: <FaRocket className="w-8 h-8 text-[#33c0e3]" />,
                title: "Innovation-Driven",
                description:
                  "Latest and most effective solutions from technological trends.",
              },
              {
                icon: <FaUsers className="w-8 h-8 text-[#33c0e3]" />,
                title: "Client-Centric",
                description:
                  "Your success is our priority. We work to realize your vision.",
              },
              {
                icon: (
                  <HiOutlineCurrencyDollar className="w-8 h-8 text-[#33c0e3]" />
                ),
                title: "Cost-Effective",
                description:
                  "High-value services that optimize your investment and ROI.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#33c0e3] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#e6f8fc] mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="team-videos" className="py-20 sm:py-24 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-[#33c0e3] bg-[#e6f8fc] rounded-full mb-4">
              Meet the Experts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hear from the Minds Behind JaaSify
            </h2>
            <p className="text-lg text-gray-600">
              Learn how our specialists approach innovation, engineering, and
              project delivery
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Joseph Kanyua",
                role: "Founder and Prinicipal Strategist",
                video: "/videos/lewis.mp4",
                poster: "/images/lewis-thumbnail.jpg",
              },
              {
                name: "Engineering team",
                role: "Chief Solutions Architect",
                video: "/videos/engineer.mp4",
                poster: "/images/engineer-thumbnail.jpg",
              },
              {
                name: "Dedan",
                role: "Director of Project Delivery",
                video: "/videos/dedan.mp4",
                poster: "/images/dedan-thumbnail.jpg",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative group w-full h-64 overflow-hidden">
                  <video
                    muted
                    loop
                    poster={person.poster}
                    className="w-full h-full object-cover rounded-t-2xl transition-all duration-300 group-hover:scale-105"
                    onMouseOver={(e: React.MouseEvent<HTMLVideoElement>) =>
                      e.currentTarget.play()
                    }
                    onMouseOut={(e: React.MouseEvent<HTMLVideoElement>) =>
                      e.currentTarget.pause()
                    }
                  >
                    <source src={person.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay Label */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm bg-[#33c0e3]/80 px-3 py-1 rounded-md">
                      Watch Now
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 text-center">
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}

      {/* CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Glowing card container */}
            <div className="relative overflow-hidden rounded-3xl px-8 py-16 sm:p-16 shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-800 border border-purple-500/30">
              {/* Particle animation background */}
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
                        Math.random() * 100 + "%",
                      ],
                      y: [
                        Math.random() * 100 + "%",
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

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              <div className="relative z-20 max-w-6xl mx-auto">
                {/* Header Section - Centered */}
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    Contact{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                      our team
                    </span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-purple-100 max-w-2xl mx-auto"
                  >
                    Got any questions about the product or scaling on our
                    platform? We&apos;re here to help. Chat to our friendly team
                    24/7 and get onboard in less than 5 minutes.
                  </motion.p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Contact Form */}
                  <ContactUs />

                  {/* Right Column - Contact Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Chat with us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Chat with us
                      </h3>
                      <p className="text-purple-200 mb-6">
                        Speak to our friendly team via live chat.
                      </p>
                      <div className="space-y-3">
                        <a
                          href="mailto:info@jaasify.com"
                          className="flex items-center text-purple-300 hover:text-white transition-colors group"
                        >
                          <Send className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                          <span className="underline">Shoot us an email</span>
                        </a>
                      </div>
                    </div>

                    {/* Call us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Call us
                      </h3>
                      <p className="text-purple-200 mb-4">
                        Call our team Mon-Fri from 8am to 5pm.
                      </p>
                      <a
                        href="tel:+254713666622"
                        className="flex items-center text-purple-300 hover:text-white transition-colors group"
                      >
                        <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="text-lg font-medium underline">
                          +254 713 666 622
                        </span>
                      </a>
                    </div>

                    {/* Visit us */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <h3 className="text-xl font-semibold text-white mb-4">
                        Visit us
                      </h3>
                      <p className="text-purple-200 mb-4">
                        Chat to us in person at our Nairobi HQ.
                      </p>
                      <a
                        href="#"
                        className="flex items-start text-purple-300 hover:text-white transition-colors group"
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
              <div className="flex items-center mb-6">
                <Image
                  src={logo1}
                  alt="Jaasify Technologies Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Transforming businesses through innovative technology solutions
                and strategic digital consulting.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    CIO as a Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Software Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Customer Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Technology Advisory
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              {/* <h3 className="text-lg font-semibold mb-6">Contact</h3> */}
              <address className="not-italic text-gray-400 space-y-3">
                <p>Nairobi, Kenya</p>
                <p> info@jaasify.com</p>
                <p> +254713666622</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} JaaSify Technologies. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
