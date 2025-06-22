"use client";

import React, { useState } from "react";
import Image from "next/image";
import hero from "../public/images/software-engineering.jpg";
import team from "../public/images/team-meeting.jpg";
import testimonialImage from "../public/images/software-engineering.jpg"; // Assuming you have a placeholder or actual image for testimonials
import {
  HiOutlineEnvelope, // Heroicons v2
  HiOutlineMapPin,
  HiOutlinePhone,
  HiArrowRight, // Arrow icon
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import {
  FaFacebookF, // Font Awesome
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaUserTie,
  FaUsers,
  FaCode,
  FaTrophy,
  FaRocket,
  FaQuoteLeft, // For testimonials
} from "react-icons/fa";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Top contact bar */}
      <div className="bg-purple-900 text-white py-3 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-4 sm:space-x-6">
            <span className="flex items-center space-x-2">
              <HiOutlineEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
              <span>info@Jaasify.com</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlineMapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
              <span>Nairobi Kenya</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlinePhone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" />
              <span>+254 712345678</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-[100]">
        {" "}
        {/* Increased z-index */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 rounded mr-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-lg sm:text-xl font-bold text-gray-800">
                  Jaasify
                </span>
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <a
                href="#hero"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Company
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#why-choose-us"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Why Us
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Contact
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 p-2 rounded-md relative z-[101]" // Ensure button is above menu for closing
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Animated Hamburger Icon */}
                <div className="block w-6 h-6 relative">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? "rotate-45 top-2.5" : "top-0"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? "opacity-0" : "top-2.5"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-6 bg-gray-600 transform transition duration-300 ease-in-out ${
                      isMobileMenuOpen ? "-rotate-45 top-2.5" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu (toggled by state) */}
        {/* Changed to fixed positioning to float over content */}
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button inside the menu for better accessibility, though the main button also works */}
          <div className="flex justify-end px-4 py-3">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 p-2 rounded-md"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#hero"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Company
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Why Us
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:bg-gray-100 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMobileMenu} // Close menu on link click
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <header
        id="hero"
        className="relative bg-[#f9fafa] overflow-hidden min-h-[80vh] flex items-center py-16 sm:py-20 lg:py-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Powerful Digital Solutions for{" "}
                <span className="text-purple-600">Your Business Growth</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-6">
                We deliver cutting-edge software solutions that drive
                innovation, efficiency, and measurable results for businesses of
                all sizes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5">
                  Get Started
                </button>
                <button className="border border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 px-8 py-3.5 rounded-lg font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-8 w-8 rounded-full bg-purple-100 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span>500+ Happy Clients</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>Trusted by Industry Leaders</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative mt-12 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
                <Image
                  src={hero}
                  alt="Team collaborating on digital solutions"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-purple-900/20 mix-blend-multiply"></div>
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 w-[90%] sm:w-4/5 max-w-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <FaRocket className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Projects Launched</p>
                      <p className="text-lg font-bold text-gray-800">1,200+</p>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <FaTrophy className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="text-lg font-bold text-gray-800">98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-30 -z-10 hidden lg:block"></div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-5 w-16 h-16 rounded-full bg-purple-100 opacity-20 -z-10 hidden sm:block"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-200 opacity-10 -z-10 hidden sm:block"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Enterprise Technology Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Bespoke consulting solutions tailored to your strategic objectives
            </p>
            <div className="border-t-2 border-purple-600 w-16 mx-auto my-6"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* CIO as a Service */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-purple-600 text-white">
                <FaUserTie className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-center text-gray-900">
                CIO as a Service
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                On-demand executive technology leadership to guide your
                strategic initiatives without the full-time commitment.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more <HiArrowRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Customer Experience Digitalisation */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-blue-600 text-white">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-center text-gray-900">
                Customer Experience Digitalisation
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Transform customer interactions with data-driven digital
                strategies that drive engagement and loyalty.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more <HiArrowRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Digital Transformation Advisory */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-green-600 text-white">
                <FaRocket className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-center text-gray-900">
                Digital Transformation Advisory
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Comprehensive roadmaps to modernize operations, culture, and
                technology for the digital age.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more <HiArrowRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Software Engineering as a Service */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-orange-600 text-white">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-center text-gray-900">
                Software Engineering as a Service
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                Elite engineering talent delivered on-demand to build, scale,
                and optimize your technology assets.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more <HiArrowRight className="ml-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.005] transition-transform duration-300 ease-in-out">
              <Image
                src={team}
                alt="Team collaborating on digital solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-purple-900/20 mix-blend-multiply"></div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                Our Strategic Approach
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 mb-8">
                At Jasify, we combine deep industry expertise with cutting-edge
                technology knowledge to deliver transformative results.
              </p>
              <div className="mt-10 space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white shadow-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Business-First Mindset
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      We align technology strategy with your core business
                      objectives to drive measurable outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white shadow-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Proven Methodologies
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      Our frameworks have been refined through hundreds of
                      successful enterprise engagements.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white shadow-md">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Security & Compliance
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                      Enterprise-grade security practices are embedded in every
                      solution we recommend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - NEW */}
      <section id="why-choose-us" className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Why Partner with Jaasify?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We stand out through our commitment to excellence, innovation, and
              client success.
            </p>
            <div className="border-t-2 border-purple-600 w-16 mx-auto my-6"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Expertise */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <HiOutlineAcademicCap className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Unrivaled Expertise
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our team comprises seasoned professionals with deep knowledge
                across various technology domains.
              </p>
            </div>
            {/* Tailored Solutions */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tailored Solutions
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We design and implement solutions that precisely fit your unique
                business challenges and goals.
              </p>
            </div>
            {/* Measurable Results */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <FaTrophy className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Measurable Results
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our focus is on delivering tangible outcomes that contribute
                directly to your bottom line and growth.
              </p>
            </div>
            {/* Innovation-Driven */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <FaRocket className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Innovation-Driven
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We stay ahead of technological trends to bring you the latest
                and most effective solutions.
              </p>
            </div>
            {/* Client-Centric */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Your success is our priority. We work collaboratively to ensure
                your vision is realized.
              </p>
            </div>
            {/* Cost-Effective */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-purple-100 text-purple-600">
                <HiOutlineCurrencyDollar className="w-8 h-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We offer high-value services that optimize your investment and
                deliver sustainable returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Hear directly from businesses that have experienced the Jaasify
              difference.
            </p>
            <div className="border-t-2 border-purple-600 w-16 mx-auto my-6"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <FaQuoteLeft className="text-purple-400 text-4xl mb-4" />
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">
                &quot;Jaasify transformed our digital presence. Their expertise
                and dedication are truly unmatched. We saw significant growth in
                customer engagement within months.&quot;
              </p>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-300">
                <Image
                  src={testimonialImage} // Use your actual image here
                  alt="Client Testimonial"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold text-gray-900">Jane Doe</p>
              <p className="text-sm text-gray-500">CEO, Tech Solutions Inc.</p>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <FaQuoteLeft className="text-purple-400 text-4xl mb-4" />
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">
                &quot;Their CIO as a Service was a game-changer for us. We got
                executive-level strategic guidance without the overhead of a
                full-time hire. Highly recommended!&quot;
              </p>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-300">
                <Image
                  src={testimonialImage} // Use your actual image here
                  alt="Client Testimonial"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold text-gray-900">John Smith</p>
              <p className="text-sm text-gray-500">
                Founder, Global Innovations
              </p>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <FaQuoteLeft className="text-purple-400 text-4xl mb-4" />
              <p className="text-gray-700 italic mb-6 text-sm sm:text-base">
                &quot;The software engineering team at Jaasify is top-notch.
                They delivered our complex project on time and within budget,
                exceeding all expectations.&quot;
              </p>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-purple-300">
                <Image
                  src={testimonialImage} // Use your actual image here
                  alt="Client Testimonial"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="font-semibold text-gray-900">Sarah Lee</p>
              <p className="text-sm text-gray-500">CTO, Creative Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section id="clients" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-center text-xl sm:text-2xl font-semibold leading-8 text-gray-900 mb-10">
            Trusted by industry leaders
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="col-span-1 flex justify-center items-center h-20 sm:h-24 w-full bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-gray-400 font-medium text-lg sm:text-xl">
                  Client {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-purple-600 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-700 to-purple-800 px-6 py-16 sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-32 shadow-2xl">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-0 lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                Ready to transform your technology strategy?
              </h2>
              <p className="mt-6 text-lg leading-8 text-purple-100 mb-10">
                Schedule a confidential consultation with our executive advisors
                today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-purple-600 shadow-sm hover:bg-gray-100 transition-all duration-200 w-full sm:w-auto text-center"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-lg font-semibold leading-6 text-white flex items-center group w-full sm:w-auto justify-center sm:justify-start"
                >
                  Learn more{" "}
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            {/* Subtle background graphic */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                className="absolute inset-0 h-full w-full stroke-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="983e3e4c-de62-4d96-bc52-c65de3abc464"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M.5 200V.5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible">
                  <path
                    d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M800 600h201v201h-201Z"
                    strokeWidth={0.5}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#983e3e4c-de62-4d96-bc52-c65de3abc464)"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10 sm:py-12">
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
            <p className="mt-8 text-sm leading-5 text-gray-500 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} JaaSify. All rights reserved.
            </p>
            <div className="flex space-x-6 justify-center md:justify-end md:order-2 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
