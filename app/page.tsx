"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "01",
    title: "CIO as a Service",
    desc: "On-demand executive technology leadership to guide your strategic initiatives and align technology with business goals.",
  },
  {
    id: "02",
    title: "Customer Experience Digitalisation",
    desc: "Transform customer interactions with data-driven digital strategies and user-centered design that drives engagement.",
  },
  {
    id: "03",
    title: "Software Engineering as a Service",
    desc: "Elite engineering talent delivered on-demand to build and scale your technology with production-grade quality.",
  },
  {
    id: "04",
    title: "Digital Transformation Advisory",
    desc: "Comprehensive roadmaps to modernize operations, digitize workflows, and compete effectively in the digital age.",
  },
  {
    id: "05",
    title: "AI Solutions & Consulting",
    desc: "Custom artificial intelligence solutions to automate processes, reduce toil, and enhance decision-making at scale.",
  },
  {
    id: "06",
    title: "Machine Learning Services",
    desc: "Predictive models and data science solutions tailored to your business needs for smarter, faster decisions.",
  },
  {
    id: "07",
    title: "Data Analytics & BI",
    desc: "Turn your data into actionable insights with advanced analytics, dashboards, and self-serve business intelligence.",
  },
  {
    id: "08",
    title: "AI-Powered Automation",
    desc: "Intelligent process automation to reduce costs, eliminate errors, and improve operational efficiency across your organization.",
  },
];

const advantages = [
  { title: "Unrivaled Expertise", desc: "Seasoned professionals with deep knowledge across technology domains and industries." },
  { title: "Tailored Solutions", desc: "Solutions designed to fit your unique business challenges, goals, and constraints." },
  { title: "Measurable Results", desc: "Focus on delivering outcomes that contribute directly to your bottom line." },
  { title: "Innovation-Driven", desc: "Latest and most effective solutions from emerging technological trends and research." },
  { title: "Client-Centric", desc: "Your success is our priority. We work tirelessly to realize your vision." },
  { title: "Cost-Effective", desc: "High-value services that optimize your investment and maximize return on technology spend." },
];

export default function Home() {
  return (
    <>
      {/* ─────── HERO ─────── */}
      <section className="min-h-[90vh] flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-6">
                Engineering Studio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C3462] leading-tight">
                Transformative{" "}
                <span className="text-[#39BFE1]">Digital Solutions</span>
                <br />
                for Enterprise Growth
              </h1>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                We architect and deliver cutting-edge technology solutions that
                drive innovation, efficiency, and measurable business outcomes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1C3462] text-white px-6 py-3.5 text-sm font-medium hover:bg-[#1C3462]/90 transition-colors"
                >
                  Get Started <ArrowRight size={14} />
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3.5 text-sm font-medium hover:border-[#39BFE1] hover:text-[#39BFE1] transition-colors"
                >
                  View Industries →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-image.webp"
                  alt="Team collaborating on digital solutions"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1C3462]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg border border-gray-100 p-4 hidden md:block">
                <p className="text-sm font-bold text-[#1C3462]">Solutions Built for Scale</p>
                <p className="text-xs text-gray-500">Future-proofing your enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── THE JaaSIFY ADVANTAGE ─────── */}
      <section id="advantage" className="py-24 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              The JaaSify Advantage
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              We stand out through our commitment to excellence, innovation, and
              client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="border border-white/10 p-6 hover:border-[#39BFE1]/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#39BFE1] mb-4" />
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── SERVICES ─────── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
              What We Deliver
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">
              Our Services
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We architect technology solutions that drive measurable business
              outcomes across every layer of your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-gray-200 p-8 hover:border-[#39BFE1] hover:shadow-sm transition-all group"
              >
                <span className="text-[#39BFE1] text-sm font-mono">
                  {s.id}
                </span>
                <h3 className="text-lg font-bold text-[#1C3462] mt-3 mb-2 group-hover:text-[#39BFE1] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── ABOUT ─────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="JaaSify team collaborating"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">
                Africa&rsquo;s Premier
                <br />
                <span className="text-[#39BFE1]">Tech Partner</span>
              </h2>
              <div className="mt-6 space-y-4 text-sm text-gray-500 leading-relaxed">
                <p>
                  At <strong className="text-[#1C3462]">JaaSify</strong>, we
                  don&rsquo;t just write code — we craft digital experiences
                  that empower businesses across Africa and beyond.
                </p>
                <p>
                  Founded in Kenya, our journey began with a
                  revolutionary belief: Africa is not just a consumer of
                  technology — it is a creator and innovator. We combine
                  cutting-edge global standards with uniquely African ingenuity.
                </p>
                <p>
                  Every solution we craft is built to endure, adapt, and grow —
                  empowering businesses to thrive in an ever-changing digital
                  landscape.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#39BFE1] font-medium hover:underline mt-6"
              >
                Start a conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── CTA ─────── */}
      <section className="py-24 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Let&rsquo;s talk about how we can help you achieve your technology
            goals. Our team is ready to partner with you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#1C3462] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
            <a
              href="mailto:info@jaasify.com"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 text-sm font-medium hover:border-white/50 transition-colors"
            >
              info@jaasify.com ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
