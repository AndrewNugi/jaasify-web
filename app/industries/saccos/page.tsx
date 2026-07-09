"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const challenges = [
  { title: "Legacy Systems", desc: "Outdated infrastructure limits growth, increases costs, and prevents modern digital member experiences." },
  { title: "Manual Processes", desc: "Paper-based operations slow down loan processing, member onboarding, and dividend management." },
  { title: "Limited Accessibility", desc: "Members expect mobile-first access to their accounts, loans, and savings — anytime, anywhere." },
];

const solutions = [
  { title: "Member Management Platform", desc: "Digital onboarding, KYC verification, and self-service member portals for seamless registration." },
  { title: "Loan Management System", desc: "Automated credit scoring, collateral tracking, disbursement workflows, and repayment scheduling." },
  { title: "Savings & Deposits", desc: "Flexible product configuration, automatic interest calculation, and dividend processing." },
  { title: "Mobile SACCO Platform", desc: "USSD banking, mobile apps, SMS notifications, and agent banking for remote member access." },
];

const stats = [
  { value: "40%", label: "More Member Engagement" },
  { value: "3x", label: "Faster Loan Processing" },
  { value: "99.9%", label: "Enhanced Security" },
  { value: "60%", label: "Operational Efficiency" },
];

export default function SaccosPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">SACCOs</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Cooperative
                <br />
                <span className="text-[#39BFE1]">Financial Services</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
                Empower your SACCO with cutting-edge technology that streamlines operations, enhances member engagement, and drives sustainable growth.
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
                alt="Digital transformation for SACCOS"
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">The Challenge</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Barriers to modern SACCO growth.</h2>
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">Built for SACCOs, by builders who understand cooperatives.</h2>
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
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to transform your SACCO?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">Let&apos;s talk about bringing modern financial technology to your members.</p>
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
