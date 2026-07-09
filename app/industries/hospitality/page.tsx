"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const challenges = [
  { title: "Data Silos", desc: "Disconnected systems across properties trap guest data in PMS, POS, and booking platforms, preventing a unified view of the customer journey." },
  { title: "System Fragmentation", desc: "Multiple vendors with no unified view create operational bottlenecks, inconsistent guest experiences, and increased IT complexity." },
  { title: "Security Risks", desc: "Guest data protection across channels requires robust PCI-DSS compliance, encryption, and a zero-trust architecture." },
  { title: "Legacy Systems", desc: "Outdated property management infrastructure limits scalability, innovation, and the ability to compete with modern hospitality brands." },
];

const solutions = [
  {
    title: "Property Management Integration",
    desc: "Seamlessly connect with Opera PMS, Cloudbeds, Mews, and Oracle Hospitality. Automate reservation syncing, room assignment, billing, and check-in workflows across all properties.",
  },
  {
    title: "Guest Experience Platform",
    desc: "Deliver mobile check-in, digital key access, in-stay messaging, personalized recommendations, and loyalty engagement from pre-arrival through post-departure.",
  },
  {
    title: "Revenue & Operations Optimization",
    desc: "Maximize RevPAR with dynamic pricing integration, energy management controls, housekeeping automation, and inventory systems that streamline back-of-house operations.",
  },
  {
    title: "Payment & Loyalty Ecosystem",
    desc: "Create frictionless payments with Stripe, Adyen, and Square integration. Unify omnichannel loyalty program management with real-time reward accrual and redemption.",
  },
];

const processSteps = [
  { step: "01", title: "Technology Assessment", desc: "Audit your existing tech stack, identify integration points, and map the ideal hospitality technology architecture." },
  { step: "02", title: "API Development", desc: "Build robust, documented APIs that bridge legacy systems with modern platforms, ensuring reliable data flow." },
  { step: "03", title: "System Integration", desc: "Connect PMS, POS, payment gateways, and guest-facing applications into a single cohesive ecosystem." },
  { step: "04", title: "Guest Interface Development", desc: "Design intuitive guest-facing interfaces including mobile apps, kiosks, and in-room devices." },
  { step: "05", title: "Analytics & Optimization", desc: "Deploy dashboards, reporting tools, and AI-driven insights to continuously improve operations and guest satisfaction." },
];

const stats = [
  { value: "30%", label: "Increase in Guest Satisfaction" },
  { value: "25%", label: "Reduction in Costs" },
  { value: "40%", label: "Faster Check-In" },
  { value: "15%", label: "Increase in Revenue Per Guest" },
];

export default function HospitalityPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Hospitality</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hospitality Technology
                <br />
                <span className="text-[#39BFE1]">Seamlessly Integrated</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
                Connect your PMS, POS, guest apps, and analytics into one unified platform.
                Deliver exceptional guest experiences while driving operational efficiency
                across your entire property portfolio.
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
                src="/images/hero-image.webp"
                alt="Hospitality technology integration"
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Common Challenges</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Integration Challenges We Solve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c) => (
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Comprehensive Hospitality Solutions</h2>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Integration Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <div key={p.step} className="border border-gray-200 p-6 relative">
                <p className="text-[#39BFE1] font-bold text-sm mb-2">{p.step}</p>
                <h3 className="font-bold text-[#1C3462] mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to transform your hospitality technology?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">Let&apos;s discuss how we can connect your entire property ecosystem.</p>
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
