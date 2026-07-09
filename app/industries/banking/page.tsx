"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const challenges = [
  { title: "Legacy Systems", desc: "Outdated core banking infrastructure limits agility, increases costs, and creates security vulnerabilities that slow modernization." },
  { title: "Regulatory Complexity", desc: "Evolving compliance requirements across jurisdictions demand flexible, auditable systems that adapt quickly to new regulations." },
  { title: "Customer Expectations", desc: "Digital-native customers expect seamless, personalized banking experiences across every channel — mobile, web, and in-branch." },
];

const solutions = [
  { title: "Digital Banking Platform", desc: "Omni-channel, self-service, real-time transaction processing across mobile, web, and branch endpoints." },
  { title: "Payment Processing", desc: "RTGS, batch, mobile money, cards, cross-border — unified payment orchestration across every channel." },
  { title: "Risk Management", desc: "AI credit scoring, market and operational risk modeling, stress testing, and real-time fraud detection." },
  { title: "Customer Analytics", desc: "Unified data platform delivering actionable insights and personalized products at scale." },
];

const capabilities = ["Omni-channel banking", "Real-time payments", "AI fraud detection", "Automated compliance", "Customer 360 analytics", "Microservices architecture", "Secure API gateway", "Biometric authentication"];

const benefits = [
  { value: "60%", label: "Faster time-to-market" },
  { value: "45%", label: "Reduction in operational costs" },
  { value: "3.5x", label: "Increase in digital engagement" },
  { value: "99.99%", label: "Platform uptime" },
];

export default function BankingPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Banking</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Secure, Scalable,
                <br />
                <span className="text-[#39BFE1]">Digital-First</span> Banking
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Modernize your banking operations with secure, scalable digital solutions that enhance customer experience, streamline operations, and drive growth.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/digital-transformation.jpg"
                alt="Digital banking solutions"
                width={600}
                height={400}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-[#1C3462]/40 to-transparent" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            {benefits.map((b) => (
              <div key={b.label}>
                <p className="text-2xl font-bold text-[#39BFE1]">{b.value}</p>
                <p className="text-xs text-white/40 mt-1">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">The Challenge</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Legacy Systems Holding Back Modern Banking</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">A Modern, Modular Banking Technology Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 hover:border-[#39BFE1] transition-all">
                <h3 className="font-bold text-[#1C3462] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-[#1C3462] mb-6">Platform Capabilities</h3>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((c) => (
                <span key={c} className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to modernize your banking platform?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">Let&apos;s talk about your digital transformation journey.</p>
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
