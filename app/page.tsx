"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import hero from "../public/images/software-engineering.jpg";
import team from "../public/images/team-meeting.jpg";
import testimonial1 from "../public/images/software-engineering.jpg";
import testimonial2 from "../public/images/software-engineering.jpg";
import testimonial3 from "../public/images/software-engineering.jpg";

import logo from "../public/images/Jaasify.png";
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
  FaQuoteLeft,
  FaLightbulb,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Users,
  Target,
  BarChart2,
  Cpu,
  Brain,
} from "lucide-react";
import { Zap, Shield } from "lucide-react";
import ContactUs from "./components/contact-us";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [randomStyles, setRandomStyles] = useState({});

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
        behavior: 'smooth'
      });
    }
  };

  // Updated navigation links with onClick handlers
  const navigationLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Services", href: "#services", id: "services" },
    { name: "About", href: "#about", id: "about" },
    { name: "Why Us", href: "#why-choose-us", id: "why-choose-us" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
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
      icon: <User size={24} />,
      color: "bg-blue-500",
    },
    {
      title: "Customer Experience Digitalisation",
      description:
        "Transform customer interactions with data-driven digital strategies.",
      icon: <Briefcase size={24} />,
      color: "bg-orange-500",
    },
    {
      title: "Software Engineering as a Service",
      description:
        "Elite engineering talent delivered on-demand to build and scale your technology.",
      icon: <Users size={24} />,
      color: "bg-teal-500",
    },
    {
      title: "Digital Transformation Advisory",
      description:
        "Comprehensive roadmaps to modernize operations for the digital age.",
      icon: <Target size={24} />,
      color: "bg-purple-500",
    },
    {
      title: "AI Solutions & Consulting",
      description:
        "Custom artificial intelligence solutions to automate processes and enhance decision-making.",
      icon: <Brain size={24} />, // You'll need to import Brain from lucide-react
      color: "bg-red-500",
    },
    {
      title: "Machine Learning Services",
      description:
        "Predictive models and data science solutions tailored to your business needs.",
      icon: <Cpu size={24} />, // You'll need to import Cpu from lucide-react
      color: "bg-indigo-500",
    },
    {
      title: "Data Analytics & BI",
      description:
        "Turn your data into actionable insights with advanced analytics and visualization.",
      icon: <BarChart2 size={24} />, // You'll need to import BarChart2 from lucide-react
      color: "bg-green-500",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Intelligent process automation to reduce costs and improve efficiency.",
      icon: <Zap size={24} />, // Already imported from lucide-react
      color: "bg-yellow-500",
    },
  ];

  const testimonials = [
    {
      quote:
        "Jaasify transformed our digital presence. Their expertise and dedication are unmatched. We saw 300% growth in engagement within months.",
      name: "Jane Doe",
      role: "CEO, Tech Solutions Inc.",
      image: testimonial1,
    },
    {
      quote:
        "Their CIO as a Service was a game-changer. We got executive-level strategic guidance without the overhead of a full-time hire.",
      name: "John Smith",
      role: "Founder, Global Innovations",
      image: testimonial2,
    },
    {
      quote:
        "The engineering team delivered our complex project on time and under budget, exceeding all expectations. Truly exceptional work.",
      name: "Sarah Lee",
      role: "CTO, Creative Solutions",
      image: testimonial3,
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strategic Technology Leadership",
      description:
        "Executive-level guidance to align your technology investments with long-term business objectives and market opportunities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Bespoke Solution Architecture",
      description:
        "We don't deliver off-the-shelf products. We engineer custom-fit solutions that address your specific operational challenges.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "ROI-Focused Execution",
      description:
        "Our initiatives are tied to clear KPIs, ensuring every project delivers measurable value and a tangible return on investment.",
      gradient: "from-orange-500 to-red-500",
    },
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
              <span>+254 728 255 105</span>
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
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xs py-2" : "shadow-xs py-2"
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
      <section id="services" className="relative py-10 bg-[#1C3461] overflow-hidden">
        {/* Decorative corner circles */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>

        {/* Subtle background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
              Strategic Digital Services
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We architect technology solutions that drive measurable business
              outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-12 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.005] transition-transform duration-300 ease-in-out">
                <Image
                  src={team}
                  alt="Team collaborating on digital solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-purple-900/20 mix-blend-multiply"></div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  Strategic Technology Partners for Digital Transformation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Jaasify, we combine deep industry expertise with
                  cutting-edge technology knowledge to deliver transformative
                  results that drive business growth and innovation.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-md">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-5 sm:py-10 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Jaasify Advantage
            </h2>
            <p className="text-lg text-gray-600">
              We stand out through our commitment to excellence, innovation, and
              client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HiOutlineAcademicCap className="w-8 h-8" />,
                title: "Unrivaled Expertise",
                description:
                  "Seasoned professionals with deep knowledge across technology domains.",
              },
              {
                icon: <FaCode className="w-8 h-8" />,
                title: "Tailored Solutions",
                description:
                  "Solutions designed to fit your unique business challenges and goals.",
              },
              {
                icon: <FaTrophy className="w-8 h-8" />,
                title: "Measurable Results",
                description:
                  "Focus on delivering outcomes that contribute to your bottom line.",
              },
              {
                icon: <FaRocket className="w-8 h-8" />,
                title: "Innovation-Driven",
                description:
                  "Latest and most effective solutions from technological trends.",
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Client-Centric",
                description:
                  "Your success is our priority. We work to realize your vision.",
              },
              {
                icon: <HiOutlineCurrencyDollar className="w-8 h-8" />,
                title: "Cost-Effective",
                description:
                  "High-value services that optimize your investment and ROI.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon container aligned to start (left) */}
                <div className="flex justify-start mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#33c0e3] text-white shadow-md">
                    {item.icon}
                  </div>
                </div>

                {/* Centered text content */}
                <h3 className="mb-3 text-xl font-semibold text-center text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-24 lg:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from businesses that have experienced the Jaasify
              difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <FaQuoteLeft className="text-purple-400 text-4xl mb-6 opacity-70" />
                <p className="text-gray-700 mb-8 relative">
                  {testimonial.quote}
                </p>
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-200 shadow-sm">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}

      {/* CTA Section */}
      <section
        id="contact"
        className="relative overflow-hidden  sm:py-24 lg:py-10"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-15 animate-float-delay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Glowing card container */}
            <div className="relative rounded-3xl overflow-hidden px-8 py-16 sm:p-16 shadow-2xl bg-gradient-to-br from-purple-900 to-indigo-800 border border-purple-500/30">
              {/* Particle animation background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={randomStyles}
                  ></div>
                ))}
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-20 max-w-6xl mx-auto">
                {/* Header Section - Centered */}
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  >
                    Ready to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                      transform
                    </span>{" "}
                    your business?
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-purple-100 max-w-2xl mx-auto"
                  >
                    Schedule a confidential consultation with our experts and
                    discover how we can accelerate your digital transformation.
                  </motion.p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Contact Form */}
                  <ContactUs />

                  {/* Right Column - Contact Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-8"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                      <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <HiOutlinePhone className="h-6 w-6 text-purple-300" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Phone</h4>
                            <p className="text-purple-200">+254 712 345 678</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <HiOutlineEnvelope className="h-6 w-6 text-purple-300" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Email</h4>
                            <p className="text-purple-200">info@jaasify.com</p>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <HiOutlineMapPin className="h-6 w-6 text-purple-300" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-1">Office</h4>
                            <p className="text-purple-200">Nairobi, Kenya</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="text-white font-medium mb-4">Follow Us</h4>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-purple-300 hover:bg-white/30 hover:text-white transition-colors">
                          <FaFacebookF className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-purple-300 hover:bg-white/30 hover:text-white transition-colors">
                          <FaTwitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-purple-300 hover:bg-white/30 hover:text-white transition-colors">
                          <FaLinkedinIn className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-purple-300 hover:bg-white/30 hover:text-white transition-colors">
                          <FaGithub className="h-5 w-5" />
                        </a>
                      </div>
                    </div>

                    {/* Additional CTA Buttons */}
                    {/* <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <motion.a
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className="flex-1 text-center bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Schedule Call
                      </motion.a>

                      <motion.a
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 25px -5px rgba(216, 180, 254, 0.4)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        href="#"
                        className="flex-1 text-center border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all"
                      >
                        Get Quote
                      </motion.a>
                    </div> */}
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
                <div className="flex items-center flex-shrink-0">
                  <Image src={logo} alt="Jaasify Logo" className="h-7 w-auto" />
                </div>
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
                <p>📩: info@jaasify.com</p>
                <p>📞: +254 728 255 105</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jaasify Technologies. All rights
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
