"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, Lock, Eye, Server, Users, FileText, Activity } from "lucide-react";

const solutions = [
  { icon: Shield, title: "Security Audits & Assessments", desc: "Comprehensive vulnerability assessments and penetration testing to identify weaknesses before attackers do." },
  { icon: Lock, title: "Managed Security Operations", desc: "24/7 SOC monitoring, threat detection, and incident response to keep your infrastructure secure." },
  { icon: AlertTriangle, title: "Threat Intelligence", desc: "Real-time threat monitoring and intelligence feeds that anticipate and neutralize emerging risks." },
  { icon: Eye, title: "Compliance & Governance", desc: "Regulatory compliance frameworks (ISO 27001, GDPR, NIST) tailored to your industry and region." },
  { icon: Server, title: "Cloud Security", desc: "Secure cloud architecture design, configuration review, and ongoing posture management across AWS, Azure, GCP." },
  { icon: Users, title: "Security Training", desc: "Employee security awareness programs and phishing simulations to strengthen your human firewall." },
  { icon: FileText, title: "Incident Response Planning", desc: "Tabletop exercises, runbooks, and retainer-based incident response for when things go wrong." },
  { icon: Activity, title: "Zero Trust Architecture", desc: "Design and implementation of zero-trust networks, identity management, and least-privilege access controls." },
];

const stats = [
  { value: "99.7%", label: "Threat Detection Rate" },
  { value: "< 15min", label: "Mean Response Time" },
  { value: "ISO 27001", label: "Compliance Framework" },
  { value: "24/7", label: "SOC Coverage" },
];

export default function CyberSecurityPage() {
  return (
    <>
      {/* ─────── HERO ─────── */}
      <section className="relative bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#39BFE1]/10 rounded-lg">
                <Shield className="w-5 h-5 text-[#39BFE1]" />
              </div>
              <span className="text-[#39BFE1] text-xs font-mono tracking-wider">
                // Cyber Security
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your security is
              <br />
              <span className="text-[#39BFE1]">our architecture.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
              We design, build, and operate security programs that protect your
              most critical assets — without slowing you down.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#0a0f1a] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors"
              >
                Secure your systems <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#39BFE1]">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── APPROACH ─────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">
              Security is not a product — it&apos;s a practice.
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We embed security into your development lifecycle, infrastructure, and culture. 
              Our approach combines rigorous assessment with practical, measurable improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assess", desc: "Map your attack surface, identify vulnerabilities, and prioritize risks." },
              { step: "02", title: "Architect", desc: "Design security controls that fit your architecture and threat model." },
              { step: "03", title: "Implement", desc: "Deploy controls, configure tooling, and establish monitoring." },
              { step: "04", title: "Operate", desc: "Continuous monitoring, threat hunting, and iterative improvement." },
            ].map((phase) => (
              <div key={phase.step} className="border border-gray-200 p-6 hover:border-[#39BFE1] transition-colors">
                <span className="text-[#39BFE1] text-2xl font-mono">{phase.step}</span>
                <h3 className="text-lg font-bold text-[#1C3462] mt-3 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-500">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── SOLUTIONS ─────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">
              What we deliver.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 hover:border-[#39BFE1] hover:shadow-sm transition-all flex gap-4">
                <div className="p-2 bg-[#39BFE1]/10 rounded-lg h-fit">
                  <s.icon className="w-5 h-5 text-[#39BFE1]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1C3462] mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── CTA ─────── */}
      <section className="py-24 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">
            Ready to harden your defenses?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
            Let&apos;s talk about your security posture. We&apos;ll help you
            identify gaps, prioritize fixes, and build a program that works.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#1C3462] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
