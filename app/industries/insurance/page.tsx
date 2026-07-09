"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const solutions = [
  { title: "Intermediary Platform", desc: "Policy management, commission tracking, and multi-carrier integration for brokers and agents." },
  { title: "Claims Management System", desc: "Automated workflows, fraud detection, and document OCR for streamlined claims handling." },
  { title: "Policy Administration", desc: "End-to-end policy lifecycle management, underwriting automation, and renewal processing." },
  { title: "Customer Portals", desc: "Self-service portals with claims filing, policy viewing, and payment processing for policyholders." },
];

const stats = [
  { value: "40%", label: "Faster Processing" },
  { value: "Enhanced", label: "Compliance" },
  { value: "Better", label: "Customer Experience" },
  { value: "Reduced", label: "Fraud" },
];

export default function InsurancePage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Insurance</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                End-to-End Platforms for
                <br />
                <span className="text-[#39BFE1]">Modern Insurers</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
                Transform your insurance operations with intelligent automation, data-driven underwriting, and seamless claims management.
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
                alt="Digital transformation for insurance"
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">What we build for insurers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="border border-gray-200 p-6 hover:border-[#39BFE1] transition-all">
                <h3 className="font-bold text-[#1C3462] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to modernize your insurance operations?</h2>
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
