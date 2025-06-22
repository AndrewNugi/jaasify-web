import React from "react";
import Image from "next/image";
import hero from "../public/images/software-engineering.jpg";
import team from "../public/images/team-meeting.jpg";
import {
  HiOutlineEnvelope, // Heroicons v2
  HiOutlineMapPin,
  HiOutlinePhone,
  HiArrowRight, // Arrow icon
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
} from "react-icons/fa";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top contact bar */}
      <div className="bg-purple-900 text-white py-3 px-20">
        <div className="max-w-7xl flex justify-between items-center text-sm ">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <HiOutlineEnvelope className="h-5 w-5 text-purple-300" />
              <span>info@Jaasify.com</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlineMapPin className="h-5 w-5 text-purple-300" />
              <span>Nairobi Kenya</span>
            </span>
            <span className="flex items-center space-x-2">
              <HiOutlinePhone className="h-5 w-5 text-purple-300" />
              <span>+254 712345678</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-20 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded mr-2 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-bold text-gray-800">Jaasify</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Company
              </a>
              <a
                href="#clients"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-[#f0f1f5] overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16 py-16 lg:py-24">
            {/* Left Content */}
            <div className="lg:w-1/2 ">
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                Powerful Digital Solutions for <br />
                <span className="text-purple-600">Your Business Growth</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                We deliver cutting-edge software solutions that drive
                innovation, efficiency, and measurable results for businesses of
                all sizes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5">
                  Get Started
                </button>
                <button className="border border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 px-8 py-3.5 rounded-lg font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>

              <div className="pt-4 flex items-center gap-4 text-sm text-gray-500">
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
                <div className="h-4 w-px bg-gray-300"></div>
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
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
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

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 w-4/5 max-w-sm">
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-30 -z-10"></div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-purple-100 opacity-20 -z-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-200 opacity-10 -z-10"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Enterprise Technology Services
            </h2>
            <p className="text-lg text-gray-600">
              Bespoke consulting solutions tailored to your strategic objectives
            </p>
            <div className="border-t-2 border-purple-600 w-16 mx-auto my-4"></div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* CIO as a Service */}
            <div className="bg-white p-8 rounded-xl   border border-gray-100">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-purple-600 text-white">
                <FaUserTie className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                CIO as a Service
              </h3>
              <p className="text-gray-600 text-center">
                On-demand executive technology leadership to guide your
                strategic initiatives without the full-time commitment.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more <HiArrowRight className="ml-1" />
                </a>
              </div>
            </div>

            {/* Customer Experience Digitalisation */}
            <div className="bg-white p-8 rounded-xl   border border-gray-100">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-blue-600 text-white">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                Customer Experience Digitalisation
              </h3>
              <p className="text-gray-600 text-center">
                Transform customer interactions with data-driven digital
                strategies that drive engagement and loyalty.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more <HiArrowRight className="ml-1" />
                </a>
              </div>
            </div>

            {/* Digital Transformation Advisory */}
            <div className="bg-white p-8 rounded-xl   border border-gray-100">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-green-600 text-white">
                <FaRocket className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                Digital Transformation Advisory
              </h3>
              <p className="text-gray-600 text-center">
                Comprehensive roadmaps to modernize operations, culture, and
                technology for the digital age.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more <HiArrowRight className="ml-1" />
                </a>
              </div>
            </div>

            {/* Software Engineering as a Service */}
            <div className="bg-white p-8 rounded-xl   border border-gray-100">
              <div className="flex justify-center items-center mb-6 w-16 h-16 mx-auto rounded-full bg-orange-600 text-white">
                <FaCode className="w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-center text-gray-900">
                Software Engineering as a Service
              </h3>
              <p className="text-gray-600 text-center">
                Elite engineering talent delivered on-demand to build, scale,
                and optimize your technology assets.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Learn more <HiArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Image
              src={team}
              alt="Team collaborating on digital solutions"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Strategic Approach
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Jasify, we combine deep industry expertise with cutting-edge
                technology knowledge to deliver transformative results.
              </p>
              <div className="mt-10 space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                    <p className="mt-2 text-gray-600">
                      We align technology strategy with your core business
                      objectives to drive measurable outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                    <p className="mt-2 text-gray-600">
                      Our frameworks have been refined through hundreds of
                      successful enterprise engagements.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
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
                    <p className="mt-2 text-gray-600">
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

      {/* Client Logos Section */}
      <section id="clients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-20">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Trusted by industry leaders
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="col-span-1 flex justify-center items-center h-24 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-400 font-medium">Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-purple-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-20">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-purple-500/20 to-purple-600 px-6 py-16 sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-32">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your technology strategy?
              </h2>
              <p className="mt-6 text-lg leading-8 text-purple-100">
                Schedule a confidential consultation with our executive advisors
                today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-purple-600 shadow-sm hover:bg-gray-100 transition-all duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-lg font-semibold leading-6 text-white flex items-center"
                >
                  Learn more <HiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-20 py-12">
          <div className="border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
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
            <p className="mt-8 text-base leading-5 text-gray-500 md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} JaaSify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
