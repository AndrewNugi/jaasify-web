"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const capabilities = [
  { title: "Advanced Metering Infrastructure", desc: "Deploy smart metering solutions providing real-time consumption data for accurate billing, demand forecasting, and proactive grid management." },
  { title: "Outage Management Systems", desc: "Minimize downtime with intelligent outage detection, automated crew dispatch, and real-time restoration tracking to keep your grid reliable." },
  { title: "Distribution Management", desc: "Optimize power distribution with advanced monitoring, automated load balancing, and integration of distributed energy resources." },
  { title: "Customer Information Systems", desc: "Deliver exceptional customer experiences with unified billing, self-service portals, and personalized engagement across all touchpoints." },
];

const solutions = [
  {
    title: "Real-time Operations Insights",
    desc: "Gain complete visibility with live grid monitoring, predictive outage detection, and real-time consumption pattern analysis powered by AI-driven dashboards.",
  },
  {
    title: "Digital Innovation Platform",
    desc: "Accelerate transformation with an open API ecosystem integrating IoT devices, legacy system modernization, and digital twin simulations for scenario planning.",
  },
  {
    title: "Smart Mobility Transformation",
    desc: "Power the future with intelligent EV charging infrastructure, vehicle-to-grid (V2G) integration, and renewable energy management for sustainable mobility.",
  },
  {
    title: "Field Service Management",
    desc: "Empower your workforce with mobile-first tools, AI-driven diagnostic assistance, and predictive maintenance scheduling that reduces truck rolls.",
  },
  {
    title: "Business Process Transformation",
    desc: "Streamline operations with intelligent automation for billing, collections, and supply chain management with continuous performance benchmarking.",
  },
  {
    title: "Human Capital Management",
    desc: "Address the skills gap with comprehensive workforce planning, targeted training programs, and performance management systems for a future-ready workforce.",
  },
];

const stats = [
  { value: "30%", label: "Cost Reduction" },
  { value: "40%", label: "Faster Issue Resolution" },
  { value: "25%", label: "Energy Efficiency" },
  { value: "99.9%", label: "Compliance Rate" },
];

export default function UtilitiesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Utilities</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Smart, Sustainable,
                <br />
                <span className="text-[#39BFE1]">and Profitable Energy</span> Management
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
                Empower your utility operations with cutting-edge technology that optimizes
                energy distribution, enhances grid reliability, and drives sustainable growth.
              </p>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-[#39BFE1]">{s.value}</p>
                    <p className="text-xs text-white/40 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/digital-transformation.jpg"
                alt="Digital transformation for utilities"
                width={600}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3462]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Core Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Modern Utility Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="border border-gray-200 p-6">
                <h3 className="font-bold text-[#1C3462] mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Comprehensive Utilities Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 hover:border-[#39BFE1] transition-all">
                <h3 className="font-bold text-[#1C3462] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready for smart, sustainable energy management?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">Partner with us to build a smarter, more resilient utility infrastructure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#1C3462] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors">
              Start the conversation <ArrowRight size={14} />
            </Link>
            <Link href="/industries" className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 text-sm font-medium hover:border-white/50 transition-colors">
              <ArrowLeft size={14} /> All industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
